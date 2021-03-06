import * as gql from 'graphql'
import { onlyAlphaNumeric, toPascalCase } from '$/core/util/strings'

import fetchQueries from './fetchQueries'
import getSchema from './getSchema'

const getQueries = async () => {
  const queries = await fetchQueries()
  const schema = await getSchema()

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
  return allQueries
}

export default getQueries
