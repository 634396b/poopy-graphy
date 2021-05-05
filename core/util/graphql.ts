import * as gql from 'graphql'
import fs from 'fs'
import { onlyAlphaNumeric, toPascalCase } from './strings'
import { fetchBitQueries, fetchIntrospection } from 'core/bitquery/fetch'

const outFolder = 'core/graphql'
const outSchema = `${outFolder}/bitquery.graphql`
const outQueries = `${outFolder}/queries.graphql`

export async function run() {
  const { queries } = await fetchBitQueries()
  const introspections = await fetchIntrospection()
  const schema = gql.buildClientSchema(introspections)
  await fs.promises.writeFile(outSchema, gql.printSchema(schema))

  const gqlQueries: any[] = []
  const names = {} as { [key: string]: 1 }
  for (const queryObj of queries) {
    const { query, name } = queryObj
    if (!query) continue
    let document = null
    let str = null
    try {
      let safeName = toPascalCase(onlyAlphaNumeric(name))
      let lastSafeName = safeName

      let i = 0
      // Only number names sometimes, can't use for gql
      if (!isNaN(+lastSafeName)) {
        lastSafeName = `q${lastSafeName}`
      }
      // Duplicate names, just add another number after
      while (lastSafeName in names) {
        lastSafeName = `${safeName}v${++i}`
      }
      safeName = lastSafeName
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
