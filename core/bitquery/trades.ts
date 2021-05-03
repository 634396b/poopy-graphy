import { scrape } from '@/canny/scrape'
import { connectToDatabase } from '@/util/mongodb'
import { differenceInSeconds, sub } from 'date-fns'
import { getTrades } from './graphql'

export async function fetchPosts() {
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const contracts = []
  // go from page x to page y
  for (let curPage = 1; curPage < 100; curPage++) {
    const { posts, hasNextPage } = await scrape({
      page: curPage,
      host: 'blockfolio.canny.io',
      sort: 'trendingScore',
    })
    contracts.push(...posts)
    if (!hasNextPage) break
  }
  // sort da array by score
  contracts.sort((a: any, b: any) => b.score - a.score)

  const indexedAddrs = {} as { [key: string]: 1 }
  const uniqueContracts = contracts.filter((contract) => {
    // actions
    const beIndexed = (r: any) => (indexedAddrs[r.addr[0]] = 1)
    // preconditions
    const hasNoAddresses = (r: any) => r.addr.length === 0
    const hasBeenIndexed = (r: any) => r.addr[0] in indexedAddrs
    if (hasNoAddresses(contract)) return false
    if (hasBeenIndexed(contract)) return false
    beIndexed(contract)
    return true
  })
  for (const contract of uniqueContracts) {
    await graphs.updateMany(
      { _id: contract?._id },
      { $set: contract },
      { upsert: true }
    )
    try {
      await associateTrades(contract as any)
    } catch (e) {
      console.log(e)
    }
  }
  console.log('done')
}

async function associateTrades({ addr, _id }: { addr: string[]; _id: string }) {
  if (!addr || !_id) return console.log('no addr or _id')
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const lastElem: any = await graphs
    .aggregate([
      { $match: { _id } },
      { $project: { lastElem: { $last: '$ethereum.dexTrades' } } },
      { $project: { _id: 0, d: '$lastElem.timeInterval.minute' } },
    ])
    .toArray()
  const lastDate = lastElem?.[0]?.d
  const d1 = new Date(lastDate)
  const d2 = new Date()
  const differenceBetweenLast = differenceInSeconds(d2, d1)
  if (differenceBetweenLast < 10) return null
  const data = await getTrades(addr[0], d1, d2)
  const trades = data?.data?.ethereum?.dexTrades
  if (!trades) return null
  await graphs.updateMany(
    { _id },
    {
      $addToSet: { 'ethereum.dexTrades': { $each: trades } },
    },
    { upsert: true }
  )
  return data
}
