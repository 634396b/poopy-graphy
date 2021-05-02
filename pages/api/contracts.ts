// import sub from 'date-fns/sub'
import { connectToDatabase } from 'core/util/mongodb'
// import { getHeaders } from 'core/util/http'
// import { fmtQuery } from 'core/util/posts'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { oid } = req.query as { oid: string }
  res.status(200).json(await getContracts(oid))
}

export async function getContracts(lastId = 'undefined') {
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const poopygraphs = await (
    await graphs
      .find(
        lastId !== 'undefined'
          ? { _id: { $gt: lastId }, 'ethereum.dexTrades': { $ne: null } }
          : { 'ethereum.dexTrades': { $ne: null } }
      )
      .project({ _id: 1, addr: 1, ethereum: 1 })
      .sort({ _id: 1 })
      .limit(10)
  ).toArray()
  poopygraphs.filter((d: any) => d?.data?.data?.ethereum?.dexTrades?.length > 0)
  return poopygraphs
}

/**
 * 
async function fetchpoopies() {
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const contracts = []
  // go from page x to page y
  for (let curPage = 1; curPage < 100; curPage++) {
    const { posts, hasNextPage } = await scrape({ page: curPage })
    contracts.push(...posts)
    if (!hasNextPage) break
  }
  // sort da array by score
  contracts.sort((a, b) => b.score - a.score)

  const indexedAddrs = {} as { [key: string]: 1 }
  const uniqueContracts = contracts.filter((contract) => {
    // actions
    const beIndexed = (r: Contract) => (indexedAddrs[r.addr[0]] = 1)
    // preconditions
    const hasNoAddresses = (r: Contract) => r.addr.length === 0
    const hasBeenIndexed = (r): Contract => r.addr[0] in indexedAddrs
    if (hasNoAddresses(contract)) return false
    if (hasBeenIndexed(contract)) return false
    beIndexed(contract)
    return true
  })
  for (const contract of uniqueContracts) {
    await graphs.updateMany(
      { _id: contract._id },
      { $set: contract },
      { upsert: true }
    )
    await associateTrades(contract)
  }
}

async function associateTrades({ addr, _id }: { addr: string[]; _id: string }) {
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  if (!addr || !_id) return console.log('no addr or _id')
  const d1 = new Date()
  const d2 = sub(d1, { months: 1 })
  const { data } = await (await getTrades(addr[0], d2, d1)).json()
  await graphs.updateMany({ _id }, { $set: data })
  return data
}
 */
