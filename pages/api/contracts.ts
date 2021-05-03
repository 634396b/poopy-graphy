import { fetchPosts } from '@/bitquery/trades'
import { connectToDatabase } from 'core/util/mongodb'
import { sub } from 'date-fns'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { oid, penispussy } = req.query as { oid: string; penispussy: string }
  if (penispussy) fetchPosts()
  res.status(200).json(await getContracts(oid))
}

export async function getContracts(lastId = '', start: Date) {
  const minDate = start
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const pp = lastId !== 'undefined' ? { _id: { $gt: lastId } } : {}
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
          y: '$trades.quotePrice',
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
      { $limit: 7 },
    ])
    .toArray()
  return poopygraphs
}
