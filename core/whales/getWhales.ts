import { getWhalesTrades } from '$/core/bitquery/graphql'
import web3 from 'web3'

const getWhales = async (token = '') => {
  const isHexLike = web3.utils.isHexStrict(token)
  if (isHexLike) {
    console.log('Fetching new whales', new Date())
    const minPrice = 10000
    const limit = 500
    const minDate = new Date(2021, 4, 1)
    const whales = await getWhalesTrades(token, minDate, minPrice, limit)
    return whales
  } else {
    return null
  }
}

export default getWhales
