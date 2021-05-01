import sub from 'date-fns/sub'
import formatISO from 'date-fns/formatISO'
import { connectToDatabase } from '../../util/mongodb'
const pkswap = /pancakeswap\.finance\/#\/swap\?outputCurrency\=(0x[a-z0-9]{40})/im
const pkswap2 = /pancakeswap\.finance\/#\/swap\?inputCurrency\=(0x[a-z0-9]{40})/im
const contractTxt = /Contract[\n\s\-\:\=]+(0x[a-z0-9]{40})/im
const bscScanToken = /bscscan\.com\/(token|contract)\/(0x[a-z0-9]{40})\//im
const regexs = [pkswap, pkswap2, bscScanToken, contractTxt]

async function scrape({ page }) {
  console.log('fetching page ', page)
  if (!page) throw new Error('No page, idiot')
  const url = new URL('https://blockfolio.canny.io/api/posts/get')
  const body = {
    __host: 'blockfolio.canny.io',
    boardURLNames: ['coin-requests'],
    pages: +page,
    sort: 'trendingScore',
  }
  const cannyResult = await (
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Host: 'blockfolio.canny.io',
      },
      body: JSON.stringify(body),
    })
  ).json()
  const { result, error } = cannyResult
  if (error) return { hasNextPage: false, posts: [] }
  const { posts, hasNextPage } = result
  return {
    hasNextPage,
    posts: posts
      .map((post) => {
        const { details } = post
        const getAddr = (regex, str) => str.match(regex)?.pop()
        const getRegex = (regex, str) => str.match(regex)?.length > 1
        const matchingRegex = regexs.filter((r) => getRegex(r, details))
        const addrs = matchingRegex.map((r) => getAddr(r, details))
        if (addrs.length > 1) {
          const cmpAddrs = (a, b) => a.toLowerCase() === b.toLowerCase()
          // check if all addrs are the same
          const isSameAddress = addrs.every((ax) => cmpAddrs(ax, addrs[0]))
          if (!isSameAddress) {
            console.log('Unmatched addresses', addrs)
            return null
          }
        }
        return {
          ...post,
          matched: matchingRegex.map((regex) => regex.toString()),
          addr: addrs,
          page,
        }
      })
      .filter((noaddress) => noaddress !== null),
  }
}

function getTrades(addr, startD, endD) {
  console.log('Getting trades for', addr)
  return fetch('https://graphql.bitquery.io/', {
    headers: {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'sec-gpc': '1',
      'x-api-key': 'BQYvhnv04csZHaprIBZNwtpRiDIwEIW9',
      cookie:
        'mysession=eyJhY3RpdmUiOm51bGx9; mysession.sig=CERRPudKqE7Ttq402aGp3qRHs4A',
    },
    referrer: 'https://graphql.bitquery.io/ide',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: `{"query":"{\\nethereum(network: bsc) {\\n        dexTrades(\\n            options: {asc: \\"timeInterval.minute\\"}\\n            date: {since: \\"${startD}\\", till: \\"${endD}\\"}\\n            exchangeAddress: {in: [\\"0xbcfccbde45ce874adcb698cc183debcf17952812\\", \\"0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73\\"]}\\n            baseCurrency: {is: \\"${addr}\\"}\\n            quoteCurrency: {is: \\"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c\\"} # WBNB\\n            tradeAmountUsd: {gt: 10}\\n        ) {\\n            timeInterval {\\n                minute(count: 60, format: \\"%Y-%m-%dT%H:%M:%SZ\\")\\n            }\\n            baseCurrency {\\n                symbol\\n                address\\n            }\\n            quoteCurrency {\\n                symbol\\n                address\\n            }\\n\\n            tradeAmount(in: USD)\\n            trades: count\\n            quotePrice\\n            maximum_price: quotePrice(calculate: maximum)\\n            minimum_price: quotePrice(calculate: minimum)\\n            open_price: minimum(of: block, get: quote_price)\\n            close_price: maximum(of: block, get: quote_price)\\n        }\\n    }\\n}\\n","variables":"{}"}`,
    method: 'POST',
    mode: 'cors',
  })
}
export default async (req, res) => {
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const {
    oid,
    i91e3089jd1329ho1oiujdh139oih1,
    e1j2893987hj1e3298h1d3j9h8,
  } = req.query
  if (i91e3089jd1329ho1oiujdh139oih1) fetchpoopies()
  if (e1j2893987hj1e3298h1d3j9h8) graphs.drop()
  res.status(200).json(await poopy(oid))
}
async function fetchpoopies() {
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const contracts = []
  // go from page x to page y
  for (let curPage = 1; curPage < 10; curPage++) {
    const { posts, hasNextPage } = await scrape({ page: curPage })
    contracts.push(...posts)
    if (!hasNextPage) break
  }
  // sort da array by score
  contracts.sort((a, b) => b.score - a.score)

  const indexedAddrs = {}
  const uniqueContracts = contracts.filter((contract) => {
    // actions
    const beIndexed = (r) => (indexedAddrs[r.addr[0]] = 1)
    // preconditions
    const hasNoAddresses = (r) => r.addr.length === 0
    const hasBeenIndexed = (r) => r.addr[0] in indexedAddrs
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

async function associateTrades({ addr, _id }) {
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  if (!addr || !_id) return console.log('no addr or _id')
  const d1 = new Date()
  const d2 = sub(d1, { months: 1 })
  const { data } = await (
    await getTrades(addr[0], formatISO(d2), formatISO(d1))
  ).json()
  await graphs.updateMany({ _id }, { $set: data })
  return data
}
async function poopy(lastId = 'undefined') {
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
  poopygraphs.filter((d) => d?.data?.data?.ethereum?.dexTrades?.length > 0)
  return poopygraphs
}
