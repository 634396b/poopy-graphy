import fs from 'fs'
import getSchema from './getSchema'
import * as gql from 'graphql'
import { outSchema } from './constants'

async function run() {
  const schema = await getSchema()
  await fs.promises.writeFile(outSchema, gql.printSchema(schema))
}

run()
