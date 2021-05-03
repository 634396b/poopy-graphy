import { Db, MongoClient } from 'mongodb'

const { MONGODB_URI, MONGODB_DB } = process.env

interface MongoConn {
  client: MongoClient
  db: Db
}

declare const global: {
  mongo: {
    promise?: Promise<MongoConn>
    conn?: MongoConn
  }
}

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: undefined, promise: undefined }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect(MONGODB_URI as string, opts).then(
      (client) => {
        return {
          client,
          db: client.db(MONGODB_DB),
        }
      }
    )
  }
  cached.conn = await cached.promise
  cached.conn.db.collection('graphs').createIndex(
    {
      //@ts-ignore
      'ethereum.dexTrades.timeInterval.minute': -1,
      _id: -1,
    },
    { unique: true, dropDups: true }
  )
  return cached.conn
}
