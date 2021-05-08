import { fetchPosts } from '$/core/bitquery/trades'
import { connectToDatabase } from '$/core/util/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPaperHands } from '$/bitquery/graphql'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send('')
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

export async function getWhales() {
  const paperHands = await getPaperHands(
    '0x5e90253fbae4Dab78aa351f4E6fed08A64AB5590',
    new Date(2021, 1, 1),
    25000,
    100000
  )
  return paperHands
}

export async function getContracts(lastId = '', start: Date, interval = 30) {
  const minDate = start
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const poopygraphs = await graphs
    .aggregate([
      {
        $match: {
          'ethereum.dexTrades': { $ne: null, $not: { $size: 0 } },
          _id: { $gt: lastId },
        },
      },
      { $sort: { _id: 1 } },
      { $limit: 6 },
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
                  // {
                  //   $eq: [
                  //     {
                  //       $mod: [
                  //         { $toLong: { $toDate: '$$t.timeInterval.minute' } },
                  //         1000 * 60 * interval,
                  //       ],
                  //     },
                  //     0,
                  //   ],
                  // },
                ],
              },
            },
          },
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
    ])
    .toArray()
  return poopygraphs
}
