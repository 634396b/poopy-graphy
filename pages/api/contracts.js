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
    body: `{"query":"{\\nethereum(network: bsc) {\\n        dexTrades(\\n            options: {asc: \\"timeInterval.minute\\"}\\n            date: {since: \\"${startD}\\", till: \\"${endD}\\"}\\n            exchangeAddress: {in: [\\"0xbcfccbde45ce874adcb698cc183debcf17952812\\", \\"0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73\\"]}\\n            baseCurrency: {is: \\"${addr}\\"}\\n            quoteCurrency: {is: \\"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c\\"} # WBNB\\n            tradeAmountUsd: {gt: 10}\\n        ) {\\n            timeInterval {\\n                minute(count: 30, format: \\"%Y-%m-%dT%H:%M:%SZ\\")\\n            }\\n            baseCurrency {\\n                symbol\\n                address\\n            }\\n            quoteCurrency {\\n                symbol\\n                address\\n            }\\n\\n            tradeAmount(in: USD)\\n            trades: count\\n            quotePrice\\n            maximum_price: quotePrice(calculate: maximum)\\n            minimum_price: quotePrice(calculate: minimum)\\n            open_price: minimum(of: block, get: quote_price)\\n            close_price: maximum(of: block, get: quote_price)\\n        }\\n    }\\n}\\n","variables":"{}"}`,
    method: 'POST',
    mode: 'cors',
  })
}
export default (req, res) => {}

async function poopy(page = 1) {
  const { db } = await connectToDatabase()
  const graphs = db.collection('graphs')
  const poopygraphs = await (await graphs.find()).toArray()
  if (poopygraphs.length > 0) {
    return poopygraphs
  }
  const contracts = []
  // go from page x to page y
  for (let curPage = page; curPage < 10; curPage++) {
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
  const d1 = new Date()
  const d2 = sub(d1, { weeks: 1 })
  for (const contract of uniqueContracts) {
    const data = await (
      await getTrades(contract.addr[0], formatISO(d2), formatISO(d1))
    ).json()
    contract.data = data
  }
  await graphs.insertMany(uniqueContracts, { ordered: false })
  return uniqueContracts
}

export async function getData() {
  return poopy()
}
