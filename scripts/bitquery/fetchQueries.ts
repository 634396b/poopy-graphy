import { getHeaders } from '$/core/bitquery/constants'
import { graphqlQueriesEndpoint } from '$/core/bitquery/constants'
import type { IBitQuery } from '$/core/bitquery/interfaces/IBitQuery'
import fetch from 'node-fetch'

type BitQueries = IBitQuery[]

interface BitQueryResponse {
  msg: null | string
  queries: BitQueries
}

type FetchQueries = () => Promise<BitQueries>

const fetchQueries = async () => {
  const { queries } = (await (
    await fetch(graphqlQueriesEndpoint, {
      method: 'GET',
      ...getHeaders(),
    })
  ).json()) as BitQueryResponse
  return queries
}

export default fetchQueries as FetchQueries
