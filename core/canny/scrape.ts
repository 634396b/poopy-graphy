import type { ICannyPost, ICannyResponse } from './ICannyPost'
const pkswap = /pancakeswap\.finance\/#\/swap\?outputCurrency\=(0x[a-z0-9]{40})/im
const pkswap2 = /pancakeswap\.finance\/#\/swap\?inputCurrency\=(0x[a-z0-9]{40})/im
const contractTxt = /Contract[\n\s\-\:\=]+(0x[a-z0-9]{40})/im
const bscScanToken = /bscscan\.com\/(token|contract)\/(0x[a-z0-9]{40})\//im
const regexs = [pkswap, pkswap2, bscScanToken, contractTxt]

async function fetchCanny(
  host: string,
  page: number,
  sort: string
): Promise<ICannyResponse> {
  const url = new URL(`https://${host}/api/posts/get`)
  const body = {
    __host: host,
    boardURLNames: ['coin-requests'],
    pages: +page,
    sort,
  }
  const cannyResult = await (
    await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Host: host,
      },
      body: JSON.stringify(body),
    })
  ).json()
  return cannyResult
}
export async function scrape({
  page,
  host = 'blockfolio.canny.io',
  sort = 'trendingScore',
}: {
  page: number
  host: string
  sort: string
}) {
  console.log('Fetching page ', page)

  const { result, error } = await fetchCanny(host, page, sort)
  if (error) return { hasNextPage: false, posts: [] }
  const { posts, hasNextPage } = result
  return {
    hasNextPage,
    posts: posts
      .map((post) => {
        const { details } = post
        const getAddr = (regex: RegExp, str: string) => str.match(regex)?.pop()
        const getRegex = (regex: RegExp, str: string) =>
          (str?.match?.(regex)?.length as number) > 1
        const matchingRegex = regexs.filter((r) => getRegex(r, details))
        const addrs = matchingRegex.map((r) => getAddr(r, details))
        if (addrs.length > 1) {
          const cmpAddrs = (a: string, b: string) =>
            a.toLowerCase() === b.toLowerCase()
          // check if all addrs are the same
          const isSameAddress = addrs.every((addr) =>
            cmpAddrs(addr as string, addrs[0] as string)
          )
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
