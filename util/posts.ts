import formatISO from 'date-fns/formatISO'
const pkswap = /pancakeswap\.finance\/#\/swap\?outputCurrency\=(0x[a-z0-9]{40})/im
const pkswap2 = /pancakeswap\.finance\/#\/swap\?inputCurrency\=(0x[a-z0-9]{40})/im
const contractTxt = /Contract[\n\s\-\:\=]+(0x[a-z0-9]{40})/im
const bscScanToken = /bscscan\.com\/(token|contract)\/(0x[a-z0-9]{40})\//im
const regexs = [pkswap, pkswap2, bscScanToken, contractTxt]

export async function scrape({ page }) {
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
    await fetch(url.toString(), {
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

export function fmtQuery(start: Date, end: Date, addr: string) {
  const startDateISO = formatISO(start)
  const endDateISO = formatISO(end)
  return `{"query":"{\\nethereum(network: bsc) {\\n        dexTrades(\\n            options: {asc: \\"timeInterval.minute\\"}\\n            date: {since: \\"${startDateISO}\\", till: \\"${endDateISO}\\"}\\n            exchangeAddress: {in: [\\"0xbcfccbde45ce874adcb698cc183debcf17952812\\", \\"0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73\\"]}\\n            baseCurrency: {is: \\"${addr}\\"}\\n            quoteCurrency: {is: \\"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c\\"} # WBNB\\n            tradeAmountUsd: {gt: 10}\\n        ) {\\n            timeInterval {\\n                minute(count: 60, format: \\"%Y-%m-%dT%H:%M:%SZ\\")\\n            }\\n            baseCurrency {\\n                symbol\\n                address\\n            }\\n            quoteCurrency {\\n                symbol\\n                address\\n            }\\n\\n            tradeAmount(in: USD)\\n            trades: count\\n            quotePrice\\n            maximum_price: quotePrice(calculate: maximum)\\n            minimum_price: quotePrice(calculate: minimum)\\n            open_price: minimum(of: block, get: quote_price)\\n            close_price: maximum(of: block, get: quote_price)\\n        }\\n    }\\n}\\n","variables":"{}"}`
}
