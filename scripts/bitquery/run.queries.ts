import fs from 'fs'
import { outQueries } from './constants'
import getQueries from './getQueries'

async function run() {
  const queries = await getQueries()
  await fs.promises.writeFile(outQueries, queries)
}

run()
