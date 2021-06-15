import { getWhalesTrades } from '$/core/bitquery/graphql'
import web3 from 'web3'

const getWhales = async (token = '') => {
  const isHexLike = web3.utils.isHexStrict(token)
  if (isHexLike) {
    console.log('Fetching new whales', new Date())
    const p = 10000
    const whales = await getWhalesTrades(token, new Date(2021, 1, 1), p, 100)
    return whales
  } else {
    return null
  }
}

export default getWhales
