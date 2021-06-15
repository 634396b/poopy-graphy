/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (): Promise<boolean> => {
  const provider = (window as WindowChain).ethereum
  if (provider) {
    const chainId = 0x38
    try {
      await provider?.request?.({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Binance Smart Chain Mainnet',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18,
            },
            rpcUrls: [
              'https://bsc-dataseed.binance.org/',
              'https://bsc-dataseed1.defibit.io/',
              'https://bsc-dataseed1.ninicoin.io/',
            ],
            blockExplorerUrls: ['https://bscscan.com/'],
          },
        ],
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error(
      "Can't setup the BSC network on metamask because window.ethereum is undefined"
    )
    return false
  }
}
