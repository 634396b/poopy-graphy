import { getPaperHands } from '$/bitquery/graphql'
import web3 from 'web3'

const defaultToken = '0x5e90253fbae4dab78aa351f4e6fed08a64ab5590'
const getWhales = async (token = defaultToken) => {
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
