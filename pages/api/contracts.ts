import { connectToDatabase } from '$/core/util/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPaperHands } from '$/bitquery/graphql'
import web3 from 'web3'
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

export async function getWhales(
  token = '0x5e90253fbae4dab78aa351f4e6fed08a64ab5590'
) {
  const isHexLike = web3.utils.isHexStrict(token)
  if (isHexLike) {
    console.log('Fetching new whales', new Date())
    const p = 25000
    const paperHands = await getPaperHands(token, new Date(2021, 1, 1), p, 1337)
    return paperHands
  } else {
    return null
  }
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
