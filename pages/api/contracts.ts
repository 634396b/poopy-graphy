import { fetchPosts } from '$/core/bitquery/trades'
import { connectToDatabase } from '$/core/util/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors)

  const { oid, penispussy, d, s } = req.query as {
    oid: string
    penispussy: string
    d: string
    s: string
  }
  if (penispussy) {
    fetchPosts()
    return res.status(200).send('OK')
  }
  if (s === '1') return res.status(200).send(await getSymbols())
  if (!d) return res.status(200).send('')
  res.status(200).json(await getContracts(oid, new Date(+d)))
}

export async function getSymbols() {
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  return (
    await graphs
      .aggregate([
        {
          $unwind: {
            path: '$ethereum.dexTrades',
            preserveNullAndEmptyArrays: false,
          },
        },
        {
          $group: {
            _id: '$_id',
            symbol: {
              $first: '$ethereum.dexTrades.baseCurrency.symbol',
            },
          },
        },
      ])
      .toArray()
  ).map((d) => d.symbol)
}
export async function getContracts(lastId = '', start: Date, interval = 60) {
  const minDate = start
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const poopygraphs = await graphs
    .aggregate([
      {
        $addFields: {
          trades: {
            $filter: {
              input: '$ethereum.dexTrades',
              as: 't',
              cond: {
                $and: [
                  {
                    $gte: ['$$t.timeInterval.minute', minDate.toISOString()],
                  },
                  // Display trades as every x minutes, 60 = every hour
                  {
                    $eq: [
                      {
                        $mod: [
                          { $toLong: { $toDate: '$$t.timeInterval.minute' } },
                          1000 * 60 * interval,
                        ],
                      },
                      0,
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      {
        $match: {
          trades: { $ne: null, $not: { $size: 0 } },
          _id: { $gt: lastId },
        },
      },
      {
        $project: {
          'trades.timeInterval.minute': 1,
          'trades.quotePrice': 1,
          'trades.maximum_price': 1,
          'trades.minimum_price': 1,
          'trades.close_price': 1,
          'trades.open_price': 1,
          'trades.baseCurrency.symbol': 1,
          'trades.baseCurrency.address': 1,
          'trades.trades': 1,
          address: { $first: '$trades.baseCurrency.address' },
          symbol: { $first: '$trades.baseCurrency.symbol' },
        },
      },
      { $sort: { _id: 1 } },
      { $limit: 3 },
    ])
    .toArray()
  return poopygraphs
}
