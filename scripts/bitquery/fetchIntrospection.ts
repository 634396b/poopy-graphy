import type { IntrospectionQuery } from 'graphql'

import { getIntrospectionQuery } from 'graphql'
import { graphqlEndpoint } from '$/core/bitquery/constants'
import { getHeaders } from '$/core/bitquery/constants'
import fetch from 'node-fetch'

type FetchIntrospection = () => Promise<IntrospectionQuery>
const fetchIntrospection = async () => {
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

export default fetchIntrospection as FetchIntrospection
