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

  const { oid, penispussy, d } = req.query as {
    oid: string
    penispussy: string
    d: string
  }
  if (!d) return res.status(200).send('')
  if (penispussy) fetchPosts()
  res.status(200).json(await getContracts(oid, new Date(+d)))
}

export async function getContracts(lastId = '', start: Date) {
  const minDate = start
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const symbols = await graphs
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
  const poopygraphs = await graphs
    .aggregate([
      {
        $addFields: {
          trades: {
            $filter: {
              input: '$ethereum.dexTrades',
              as: 't',
              cond: {
                $gte: ['$$t.timeInterval.minute', minDate.toISOString()],
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
        },
      },
      { $unwind: '$trades' },
      {
        $project: {
          a: '$trades.baseCurrency.address',
          x: '$trades.timeInterval.minute',
          c: '$trades.trades',
          qp: '$trades.quotePrice',
          map: '$trades.maximum_price',
          mip: '$trades.minimum_price',
          cp: '$trades.close_price',
          op: '$trades.open_price',
          s: '$trades.baseCurrency.symbol',
        },
      },
      {
        $group: {
          _id: '$_id',
          a: { $first: '$a' },
          s: { $first: '$s' },
          t: { $push: '$$ROOT' },
        },
      },
      { $unset: ['t.a', 't.s', 't._id'] },
      { $sort: { _id: 1 } },
      { $limit: 1 },
    ])
    .toArray()
  return { d: poopygraphs, symbols }
}
