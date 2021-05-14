export const graphqlEndpoint = 'https://graphql.bitquery.io'
export const graphqlQueriesEndpoint =
  'https://graphql.bitquery.io/ide/api/getqueries'

export function getHeaders() {
  return {
    headers: {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'sec-gpc': '1',
      'X-API-KEY': process.env.BITQUERY_API_KEY,
    },
    referrer: 'https://graphql.bitquery.io/ide',
    referrerPolicy: 'strict-origin-when-cross-origin' as ReferrerPolicy,
    mode: 'cors' as RequestMode,
  }
}
