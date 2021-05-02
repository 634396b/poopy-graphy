// @target: es2017
// @module: esnext

import * as gql from 'graphql'
import fetch from 'node-fetch'
import fs from 'fs'
import { getHeaders } from './http'
const graphqlEndpoint = 'https://graphql.bitquery.io'
const outFolder = 'graphql'
const outSchema = `${outFolder}/bitquery.graphql`
const outSchemaJson = `${outFolder}/bitquery.json`
const outQueries = `${outFolder}/queries.graphql`
interface BitQueries {
  msg: null | string
  queries: [
    {
      account_id: number
      arguments: string
      config: null
      createdAt: Date | string
      deleted: number
      query: string
      name: string
    }
  ]
}

async function fetchQueries(): Promise<BitQueries> {
  return await (
    await fetch('https://graphql.bitquery.io/ide/api/getqueries', {
      method: 'GET',
      ...getHeaders(),
    })
  ).json()
}

async function fetchIntrospection(): Promise<gql.IntrospectionQuery> {
  const introspectionQuery = gql.getIntrospectionQuery()
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
function toProperCase(str: string) {
  return str
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
    .replace(/ /gm, '')
}
export async function run() {
  const { queries } = await fetchQueries()
  const introspections = await fetchIntrospection()
  const schema = gql.buildClientSchema(introspections)
  await fs.promises.writeFile(outSchema, gql.printSchema(schema))
  await fs.promises.writeFile(outSchemaJson, JSON.stringify(schema, null, 2))

  const gqlQueries: any[] = []
  const names = {} as { [key: string]: 1 }
  for (const queryObj of queries) {
    const { query, name } = queryObj
    if (!query) continue
    let document = null
    let str = null
    try {
      const onlyAlphaNum = (x: string) =>
        toProperCase(x.replace(/[^a-zA-Z0-9_ ]+/gim, ''))
      let safeName = onlyAlphaNum(name)
      let i = 0
      // Only number names sometimes, can't use for gql
      if (!isNaN(+safeName)) {
        safeName = `q${safeName}`
      }
      // Duplicate names, just add another number after
      while (safeName in names) {
        safeName = `${safeName}v${i++}`
      }
      names[safeName] = 1
      document = gql.parse(`query ${safeName}` + query.replace(/^query ?/i, ''))
      const validationErrors = gql.validate(schema, document)
      if (validationErrors.length > 0) {
        throw validationErrors.join('\n')
      }
      str = gql.print(document)
      gqlQueries.push(str)
    } catch (e) {
      console.log(e, '\n', query)
    }
  }
  const allQueries = gqlQueries.join('\n')
  await fs.promises.writeFile(outQueries, allQueries)
  return true
}

export default run
