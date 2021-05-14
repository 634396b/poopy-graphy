import * as gql from 'graphql'
import fetchIntrospection from './fetchIntrospection'

const getSchema = async () => {
  const introspections = await fetchIntrospection()
  const schema = gql.buildClientSchema(introspections)
  return schema
}

export default getSchema
