import { getHeaders } from '$/util/http'
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql'
import { graphqlEndpoint, graphqlQueriesEndpoint } from './constants'
import type { IBitQuery } from './IBitQuery'

interface BitQueryResponse {
  msg: null | string
  queries: IBitQuery[]
}

export async function fetchBitQueries(): Promise<BitQueryResponse> {
  return (
    await fetch(graphqlQueriesEndpoint, {
      method: 'GET',
      ...getHeaders(),
    })
  ).json()
}

export async function fetchIntrospection(): Promise<IntrospectionQuery> {
  const introspectionQuery = getIntrospectionQuery()
  const introspectionQueryName = 'IntrospectionQuery'
  const { data } = await (
    await fetch(graphqlEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        query: introspectionQuery,
        operationName: introspectionQueryName,
      }),
      ...getHeaders(),
    })
  ).json()
  return data
}
