import { getPaperHands } from '$/bitquery/graphql'
import web3 from 'web3'

const getWhales = async (token = '') => {
  const isHexLike = web3.utils.isHexStrict(token)
  if (isHexLike) {
    console.log('Fetching new whales', new Date())
    const p = 20000
    const paperHands = await getPaperHands(token, new Date(2021, 1, 1), p, 1337)
    return paperHands
  } else {
    return null
  }
}

export default getWhales
