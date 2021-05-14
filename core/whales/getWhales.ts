import { getPaperHands } from '$/bitquery/graphql'
import web3 from 'web3'

// Happy :D
const defaultToken = '0xB0B924C4a31b7d4581a7F78F57ceE1E65736Be1D'
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
