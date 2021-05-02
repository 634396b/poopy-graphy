import gql from 'graphql-tag'

export const DexExchanges = gql`
  query DexExchanges {
    ethereum {
      dexTrades(
        options: { desc: ["date.year"] }
        any: { buyCurrency: { is: "MCB" }, exchangeName: {} }
      ) {
        numberOfTrades: count
        tradeAmount(in: USD)
        date {
          year
          month
        }
      }
    }
  }
`
export const Eth20 = gql`
  query Eth20($from: ISO8601DateTime, $till: ISO8601DateTime) {
    ethereum {
      smartContractEvents(
        options: { desc: "date.date" }
        smartContractAddress: {
          is: "0x00000000219ab540356cbb839cbe05303d7705fa"
        }
        date: { since: $from, till: $till }
      ) {
        date {
          date: startOfInterval(unit: day)
        }
        smartContractEvent {
          __typename
          name
        }
        times: count
        uniqueCallers: count(uniq: callers)
      }
    }
  }
`
export const BuySellPriceSpread = gql`
  query BuySellPriceSpread {
    ethereum(network: ethereum) {
      dexTrades(
        date: { is: "2020-11-01" }
        exchangeName: { is: "Uniswap" }
        baseCurrency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
        quoteCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      ) {
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        side
      }
    }
  }
`
export const BitcoinBlocksByHeight = gql`
  query BitcoinBlocksByHeight {
    bitcoin {
      blocks(options: { limit: 5, desc: "height" }) {
        height
        blockHash
        transactionCount
        date {
          date
        }
      }
    }
  }
`
export const DexTradesByProtocols = gql`
  query DexTradesByProtocols {
    ethereum {
      dexTrades(options: { limit: 100, desc: "count" }) {
        count
        protocol
      }
    }
  }
`
export const Balance = gql`
  query Balance($network: EthereumNetwork!, $address: String!) {
    ethereum(network: $network) {
      address(address: { is: $address }) {
        balances {
          currency {
            address
            symbol
            tokenType
          }
          value
        }
      }
    }
  }
`
export const QueryDexBaseQuotePrices = gql`
  query QueryDexBaseQuotePrices {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 100, asc: "timeInterval.day" }
        date: { between: ["2020-11-01", "2020-11-05"] }
        exchangeName: { is: "Uniswap" }
        baseCurrency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
        quoteCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      ) {
        timeInterval {
          day(count: 5)
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
        baseAmount
      }
    }
  }
`
export const Eth20ContractBalance = gql`
  query Eth20ContractBalance {
    ethereum {
      address(address: { is: "0x00000000219ab540356cbb839cbe05303d7705fa" }) {
        balances {
          currency {
            symbol
          }
          value
        }
      }
    }
  }
`
export const BaseQuoteQueryForMirrorPairs = gql`
  query BaseQuoteQueryForMirrorPairs {
    ethereum {
      dexTrades(
        date: { is: "2020-11-29" }
        options: { limit: 10 }
        baseCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
        quoteCurrency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
      ) {
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        quotePrice
      }
    }
  }
`
export const CakeCurrencyPriceUsingCakeusdtPair = gql`
  query CakeCurrencyPriceUsingCakeusdtPair {
    ethereum(network: bsc) {
      dexTrades(
        baseCurrency: { is: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" }
        quoteCurrency: { is: "0x55d398326f99059ff775485246999027b3197955" }
        options: { desc: ["block.height", "transaction.index"], limit: 1 }
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        transaction {
          index
        }
        baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        quotePrice
      }
    }
  }
`
export const UsdtethDailyVolume = gql`
  query UsdtethDailyVolume {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 100, asc: "timeInterval.day" }
        date: { since: "2020-11-01" }
        exchangeName: { is: "Uniswap" }
        baseCurrency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
        quoteCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      ) {
        timeInterval {
          day(count: 1)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
        tradeAmount(in: USDT)
      }
    }
  }
`
export const TradesForASpecificTokenOnThePancakedex = gql`
  query TradesForASpecificTokenOnThePancakedex {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "block.height" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x36c0556c2b15aed79f842675ff030782738ef9e8" }
        date: { after: "2021-03-28" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const TokenVolumeOnUniswap = gql`
  query TokenVolumeOnUniswap {
    ethereum {
      dexTrades(
        exchangeName: { is: "Uniswap" }
        baseCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      ) {
        count
        tradeAmount(in: USD)
      }
    }
  }
`
export const BitcoinDailyTransactionVolume = gql`
  query BitcoinDailyTransactionVolume(
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    bitcoin {
      transactions(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
      ) {
        txVolUSD: inputValue(calculate: sum, in: USD)
        date {
          date
        }
      }
    }
  }
`
export const TransactionsRelatedToAnAddressAfterCertainBlockHeight = gql`
  query TransactionsRelatedToAnAddressAfterCertainBlockHeight(
    $network: EthereumNetwork!
    $address: String!
    $limit: Int!
    $offset: Int!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: {
          desc: "block.timestamp.time"
          limit: $limit
          offset: $offset
        }
        date: { since: $from, till: $till }
        height: { gt: 9000000 }
        smartContractAddress: { is: $address }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        smartContractMethod {
          name
          signatureHash
        }
        address: caller {
          address
          annotation
        }
        transaction {
          hash
        }
        gasValue
        external
      }
    }
  }
`
export const TopTradesByUsdAmountInDex = gql`
  query TopTradesByUsdAmountInDex {
    ethereum {
      dexTrades(
        options: { limit: 10, desc: "tradeAmount" }
        date: { after: "2020-11-01" }
      ) {
        transaction {
          hash
        }
        tradeIndex
        date {
          date
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
      }
    }
  }
`
export const TopGasBurnersInDexTrades = gql`
  query TopGasBurnersInDexTrades {
    ethereum {
      dexTrades(
        options: { desc: "gasValue", limit: 10 }
        date: { after: "2020-10-01" }
      ) {
        count
        txs: count(uniq: txs)
        protocol
        exchange {
          fullName
        }
        gasValue
        transaction {
          hash
        }
        buyAmount
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        tradeIndex
      }
    }
  }
`
export const PancakeTotalVolumeAndTrades = gql`
  query PancakeTotalVolumeAndTrades {
    ethereum(network: bsc) {
      dexTrades(exchangeName: { is: "Pancake" }) {
        count
        tradeAmount(in: USD)
      }
    }
  }
`
export const BandProtocolOracleReadings = gql`
  query BandProtocolOracleReadings {
    ethereum(network: bsc_testnet) {
      smartContractEvents(
        options: { desc: "block.height", limit: 10 }
        smartContractEvent: { is: "RefDataUpdate(string,uint64,uint64,uint64)" }
        smartContractAddress: {
          is: "0x56761c813fecb76b4df87ddb1912f5855b22ae5a"
        }
      ) {
        block {
          height
          timestamp {
            time
          }
        }
        transaction {
          hash
        }
        eventIndex
        arguments {
          value
          argument
        }
      }
    }
  }
`
export const InflowOutflowForAddress = gql`
  query InflowOutflowForAddress {
    ethereum {
      out: transfers(
        currency: { is: "ETH" }
        date: { is: "2020-06-11" }
        options: { asc: "out" }
        any: [
          { sender: { is: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d" } }
          { receiver: { is: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d" } }
        ]
      ) {
        in: amount(
          receiver: { is: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d" }
        )
        out: amount(
          sender: { is: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d" }
        )
        currency {
          symbol
        }
        transaction {
          hash
        }
      }
    }
  }
`
export const BalancesQueryWithTimeFilterExample = gql`
  query BalancesQueryWithTimeFilterExample {
    ethereum {
      address(address: { is: "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4" }) {
        balances(time: { till: "2019-07-17T35:04+00:00" }) {
          value
          currency {
            symbol
          }
        }
      }
    }
  }
`
export const HoprChannelsUsersInTitlisBsc = gql`
  query HoprChannelsUsersInTitlisBsc(
    $network: EthereumNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $address: String!
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
        smartContractAddress: { is: $address }
        height: { gt: 3970950 }
      ) {
        date: date {
          date(format: $dateFormat)
        }
        count: count
        callers: count(uniq: senders)
        totalGas: gasValue
      }
    }
  }
`
export const NewQuery = gql`
  query NewQuery {
    ethereum {
      dexTrades(options: { limit: 10, desc: "tradeAmount" }) {
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const BtcTransfers = gql`
  query BtcTransfers(
    $network: EthereumNetwork!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $address: [String!]
  ) {
    ethereum(network: $network) {
      transfers(
        options: { desc: "total" }
        date: { since: $from, till: $till }
        currency: { in: $address }
      ) {
        date {
          date: date
        }
        sender {
          address
        }
        receiver {
          address
        }
        currency {
          address
          symbol
        }
        total: amount
      }
    }
  }
`
export const BalancerPoolVolumeAtASpecificBlockHeight = gql`
  query BalancerPoolVolumeAtASpecificBlockHeight {
    ethereum {
      dexTrades(
        options: { desc: "count" }
        smartContractAddress: {
          is: "0x1eff8af5d577060ba4ac8a29a13525bb0ee2a3d5"
        }
        height: { lteq: 11404498 }
      ) {
        count
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const BitcoinAndZcashFee = gql`
  query BitcoinAndZcashFee {
    bitcoin {
      transactions(options: { asc: "date.date" }) {
        date: date {
          date(format: "%Y")
        }
        count: count
        feeValue
        avgFee: feeValue(calculate: average)
      }
    }
    zcash: bitcoin(network: zcash) {
      transactions(options: { asc: "date.date" }) {
        date: date {
          date(format: "%Y")
        }
        count: count
        feeValue
        avgFee: feeValue(calculate: average)
      }
    }
  }
`
export const LatestSwapsForABalancerPool = gql`
  query LatestSwapsForABalancerPool {
    ethereum {
      arguments(
        smartContractAddress: {
          is: "0x1eff8af5d577060ba4ac8a29a13525bb0ee2a3d5"
        }
        smartContractEvent: { is: "LOG_SWAP" }
        options: { desc: "block.height", limit: 10 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
      }
    }
  }
`
export const Top10TransactionSendersByDateInBsc = gql`
  query Top10TransactionSendersByDateInBsc {
    ethereum(network: bsc) {
      transactions(
        date: { since: "2020-11-15" }
        options: {
          desc: "Txs"
          asc: "date.date"
          limitBy: { each: "date.date", limit: 10 }
        }
      ) {
        date {
          date
        }
        sender {
          address
        }
        gasValue
        Txs: count
      }
    }
  }
`
export const PancakeTradeVolumeForDifferentCurrencyPairs = gql`
  query PancakeTradeVolumeForDifferentCurrencyPairs {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "tradeAmount" }
        exchangeName: { is: "Pancake" }
        date: { since: "2020-09-12", till: "2020-12-12" }
      ) {
        buyCurrency {
          address
          symbol
        }
        sellCurrency {
          address
          symbol
        }
        trades: count
        tradeAmount(in: USD)
      }
    }
  }
`
export const Top10TransactionSendersByDateInBscv0 = gql`
  query Top10TransactionSendersByDateInBscv0 {
    ethereum(network: bsc) {
      transactions(
        date: { since: "2020-11-15" }
        options: {
          desc: "Txs"
          asc: "date.date"
          limitBy: { each: "date.date", limit: 10 }
        }
      ) {
        date {
          date
        }
        sender {
          address
        }
        gasValue
        Txs: count
      }
    }
  }
`
export const QueryAddressFirstLastTx = gql`
  query QueryAddressFirstLastTx {
    ethereum(network: bsc) {
      transactions(options: { desc: "count", limit: 10 }) {
        sender {
          address
        }
        count
        first_tx_time: minimum(of: time)
        last_tx_time: maximum(of: time)
        first_tx_hash: minimum(of: time, get: tx_hash)
        last_tx_hash: maximum(of: time, get: tx_hash)
      }
    }
  }
`
export const PancakeswapDailyActiveUsers = gql`
  query PancakeswapDailyActiveUsers(
    $network: EthereumNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $address: String!
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
        smartContractAddress: { is: $address }
      ) {
        date: date {
          date(format: $dateFormat)
        }
        count: count
        callers: count(uniq: senders)
        totalGas: gasValue
      }
    }
  }
`
export const GasCostsSpentByTradersOnDexExchanges = gql`
  query GasCostsSpentByTradersOnDexExchanges {
    ethereum {
      dexTrades(options: { desc: "gasValue" }, date: { after: "2020-10-01" }) {
        exchange {
          fullName
        }
        gasValue
      }
    }
  }
`
export const BscWeeklyTxsSendersGascost = gql`
  query BscWeeklyTxsSendersGascost(
    $network: EthereumNetwork!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      transactions(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
      ) {
        date {
          date: startOfInterval(unit: week, offset: 4)
        }
        gasValue
        gasValueAvg: gasValue(calculate: average)
        gasPrice
        avgGasPrice: gasPrice(calculate: average)
        medGasPrice: gasPrice(calculate: median)
        maxGasPrice: gasPrice(calculate: maximum)
        Txs: count
        Senders: count(uniq: senders)
      }
    }
  }
`
export const BurgerswapFactoryContractActiveUsersBsc = gql`
  query BurgerswapFactoryContractActiveUsersBsc(
    $network: EthereumNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $address: String!
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
        smartContractAddress: { is: $address }
      ) {
        date: date {
          date(format: $dateFormat)
        }
        count: count
        callers: count(uniq: senders)
        totalGas: gasValue
      }
    }
  }
`
export const EthereumUniqueSendersByMonth = gql`
  query EthereumUniqueSendersByMonth {
    ethereum {
      transactions(options: { desc: "date.date", limit: 10 }) {
        activeAddress: count(uniq: senders)
        date: date {
          date(format: "%Y-%m")
        }
      }
    }
    binanceSmartChain: ethereum(network: bsc) {
      transactions(options: { desc: "date.date", limit: 10 }) {
        activeAddress: count(uniq: senders)
        date: date {
          date(format: "%Y-%m")
        }
      }
    }
  }
`
export const HowToGetFeeForDexTrades = gql`
  query HowToGetFeeForDexTrades {
    ethereum {
      dexTrades(
        options: { desc: "gasValue", limit: 10 }
        date: { after: "2020-10-01" }
      ) {
        count
        txs: count(uniq: txs)
        protocol
        exchange {
          fullName
        }
        gasValue
        transaction {
          hash
        }
        buyAmount
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        tradeIndex
      }
    }
  }
`
export const LimitbyExample = gql`
  query LimitbyExample {
    ethereum(network: bsc) {
      transactions(
        date: { since: "2020-11-15" }
        options: {
          desc: "Txs"
          asc: "date.date"
          limitBy: { each: "date.date", limit: 3 }
        }
      ) {
        date {
          date
        }
        sender {
          address
        }
        gasValue(in: USD)
        Txs: count
      }
    }
  }
`
export const ConfluxDailyTransactionVolumeActiveAddressesTransactionCounts = gql`
  query ConfluxDailyTransactionVolumeActiveAddressesTransactionCounts(
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    conflux {
      transactions(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
      ) {
        txVolUSD: amount(calculate: sum, in: USD)
        txs: count
        activeAddresses: count(uniq: senders)
        averageGasPrice: gasPrice(calculate: average)
        date {
          date
        }
      }
    }
  }
`
export const SpecificBalancerPoolTradesUsingItsAddress = gql`
  query SpecificBalancerPoolTradesUsingItsAddress {
    ethereum {
      dexTrades(
        options: { limit: 50, desc: "block.height" }
        smartContractAddress: {
          is: "0x1eff8af5d577060ba4ac8a29a13525bb0ee2a3d5"
        }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const QueryKnownDexOnlyWithNames = gql`
  query QueryKnownDexOnlyWithNames {
    ethereum {
      dexTrades(
        options: { desc: "tradeAmount", limit: 100 }
        exchangeName: { not: "" }
        date: { since: "2020-01-01", till: null }
      ) {
        protocol
        exchange {
          name
        }
        tradeAmount(in: USD)
      }
    }
  }
`
export const NewlyCreatedBalancerPools = gql`
  query NewlyCreatedBalancerPools {
    ethereum {
      arguments(
        smartContractAddress: {
          is: "0x9424b1412450d0f8fc2255faf6046b98213b76bd"
        }
        smartContractEvent: { is: "LOG_NEW_POOL" }
        options: { asc: "block.height", limit: 100 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
      }
    }
  }
`
export const HackathonQueryBscWeeklyTxsSendersGascost = gql`
  query HackathonQueryBscWeeklyTxsSendersGascost {
    ethereum(network: bsc) {
      transactions(options: { desc: "date.date" }) {
        date {
          date: startOfInterval(unit: week, offset: 4)
        }
        totalGasUsed: gasValue
        totalGasUsedInUSD: gasValue(in: USD)
        gasValueAvgPerTx: gasValue(calculate: average)
        gasValueAvgPerTxInUSD: gasValue(calculate: average, in: USD)
        gasPrice
        avgGasPrice: gasPrice(calculate: average)
        medGasPrice: gasPrice(calculate: median)
        maxGasPrice: gasPrice(calculate: maximum)
        Txs: count
        Senders: count(uniq: senders)
      }
    }
  }
`
export const Link = gql`
  query Link {
    ethereum {
      uniswap: dexTrades(
        options: { asc: "date.date" }
        smartContractAddress: {
          is: "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974"
        }
      ) {
        exchange {
          fullName
        }
        taker {
          smartContract {
            contractType
          }
        }
        date {
          date
        }
        tradeAmount(in: USD)
        count
      }
      bancor: dexTrades(
        options: { asc: "date.date" }
        exchangeAddress: { is: "0x2f9ec37d6ccfff1cab21733bdadede11c823ccb0" }
        baseCurrency: { is: "0x514910771af9ca656af840dff83e8264ecf986ca" }
      ) {
        exchange {
          fullName
        }
        taker {
          smartContract {
            contractType
          }
        }
        date {
          date
        }
        tradeAmount(in: USD)
        count
      }
      sushiswap: dexTrades(
        options: { asc: "date.date" }
        smartContractAddress: {
          is: "0xc40d16476380e4037e6b1a2594caf6a6cc8da967"
        }
      ) {
        exchange {
          fullName
        }
        taker {
          smartContract {
            contractType
          }
        }
        date {
          date
        }
        tradeAmount(in: USD)
        count
      }
    }
  }
`
export const BitcoinActiveAddressesByMonth = gql`
  query BitcoinActiveAddressesByMonth {
    bitcoin {
      inputs(options: { desc: ["month.year", "month.month"] }) {
        activeAddress: count(uniq: addresses)
        month: date {
          year
          month
        }
      }
    }
  }
`
export const PancakeAllSwapsOfAPool = gql`
  query PancakeAllSwapsOfAPool {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "block.height" }
        exchangeName: { is: "Pancake" }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const ExampleOfTimeQuery = gql`
  query ExampleOfTimeQuery {
    ethereum {
      dexTrades(
        date: { since: "2020-11-24" }
        time: { since: "2020-11-24T13:42:00" }
      ) {
        count
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const LatestPancakeswapPairsv0 = gql`
  query LatestPancakeswapPairsv0 {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        argument: { is: "pair" }
        options: { desc: "block.height", limit: 9 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
      }
    }
  }
`
export const LatestPriceOfAPairOnUniswap = gql`
  query LatestPriceOfAPairOnUniswap {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 1, desc: "block.timestamp.time" }
        exchangeName: { is: "Uniswap" }
        baseCurrency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
        quoteCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
      }
    }
  }
`
export const DexTradesVolumesMonthly = gql`
  query DexTradesVolumesMonthly {
    ethereum {
      dexTrades(options: { asc: ["date.year", "date.month"] }) {
        count
        tradeAmount(in: USD)
        date {
          year
          month
        }
      }
    }
  }
`
export const AggregateSmartContractArgument = gql`
  query AggregateSmartContractArgument {
    ethereum(network: ethereum) {
      arguments(
        smartContractEvent: {
          is: "LOG_SWAP(address,address,address,uint256,uint256)"
        }
        smartContractAddress: {
          is: "0x003a70265a3662342010823bea15dc84c6f7ed54"
        }
        argument: { is: "tokenAmountIn" }
      ) {
        date {
          date(format: "%Y-%m-%d")
        }
        block {
          timestamp {
            hour
          }
        }
        number(calculate: sum)
      }
    }
  }
`
export const BalancerProtocolLatestTrades = gql`
  query BalancerProtocolLatestTrades {
    ethereum {
      dexTrades(
        options: { limit: 1, desc: "block.height" }
        exchangeName: { is: "Balancer" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const ExampleOfTransferQueryWithAmountsInUsd = gql`
  query ExampleOfTransferQueryWithAmountsInUsd {
    ethereum {
      transfers(
        options: { limit: 10, asc: "block.height" }
        date: { after: "2020-11-01" }
      ) {
        transaction {
          hash
        }
        block {
          height
        }
        date {
          date
        }
        amount
        currency {
          symbol
        }
        amountInUsd: amount(in: USD)
      }
    }
  }
`
export const OceanComparisonBancorUniswap = gql`
  query OceanComparisonBancorUniswap {
    ethereum {
      uniswap: dexTrades(
        options: { asc: "date.date" }
        smartContractAddress: {
          is: "0x9b7dad79fc16106b47a3dab791f389c167e15eb0"
        }
      ) {
        date {
          date
        }
        tradeAmount(in: USD)
        count
      }
      bancor: dexTrades(
        options: { asc: "date.date" }
        exchangeAddress: { is: "0x2f9ec37d6ccfff1cab21733bdadede11c823ccb0" }
        baseCurrency: { is: "0x967da4048cd07ab37855c090aaf366e4ce1b9f48" }
      ) {
        date {
          date
        }
        tradeAmount(in: USD)
        count
      }
    }
  }
`
export const UsdtethReserve = gql`
  query UsdtethReserve {
    ethereum {
      arguments(
        smartContractAddress: {
          is: "0x1eff8af5d577060ba4ac8a29a13525bb0ee2a3d5"
        }
        smartContractEvent: { is: "LOG_SWAP" }
        options: { desc: "block.height", limit: 10 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
      }
    }
  }
`
export const TopTradesByUsdAmountInDexv0 = gql`
  query TopTradesByUsdAmountInDexv0 {
    ethereum {
      dexTrades(
        options: { limit: 10, desc: "tradeAmount" }
        date: { after: "2021-02-05" }
      ) {
        transaction {
          hash
        }
        tradeIndex
        date {
          date
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const ExampleOfQueryBtcTxsList = gql`
  query ExampleOfQueryBtcTxsList {
    bitcoin {
      transactions(
        date: { is: "2021-01-14" }
        options: { desc: "block.height", limit: 100 }
      ) {
        hash
        block {
          height
        }
      }
    }
  }
`
export const TransferTotalSumOfTotal = gql`
  query TransferTotalSumOfTotal(
    $network: EthereumNetwork!
    $address: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $limit: Int!
    $offset: Int!
  ) {
    ethereum(network: $network) {
      transfers(
        date: { since: $from, till: $till }
        amount: { gt: 0 }
        options: { limit: $limit, offset: $offset, desc: "count_in" }
      ) {
        sum_in: amount(calculate: sum, receiver: { is: $address })
        sum_out: amount(calculate: sum, sender: { is: $address })
        count_in: count(receiver: { is: $address })
        count_out: count(sender: { is: $address })
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
`
export const FilterByCurrency = gql`
  query FilterByCurrency(
    $network: EthereumNetwork!
    $limit: Int!
    $offset: Int!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      transfers(
        options: { desc: "count", limit: $limit, offset: $offset }
        amount: { gt: 0 }
        date: { since: $from, till: $till }
        currency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
      ) {
        currency {
          symbol
          address
          name
        }
        count
        senders: count(uniq: senders)
        receivers: count(uniq: receivers)
        days: count(uniq: dates)
        from_date: minimum(of: date)
        till_date: maximum(of: date)
        amount
      }
    }
  }
`
export const PooledTokenForAWbnbcakePairOnPancake = gql`
  query PooledTokenForAWbnbcakePairOnPancake {
    ethereum(network: bsc) {
      address(address: { is: "0xa527a61703d82139f8a06bc30097cc9caa2df5a6" }) {
        balances {
          currency {
            symbol
          }
          value
        }
      }
    }
  }
`
export const BtcOutputExactly1btc = gql`
  query BtcOutputExactly1btc(
    $network: BitcoinNetwork!
    $limit: Int!
    $offset: Int!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $outVal: Float!
  ) {
    bitcoin(network: $network) {
      outputs(
        options: {
          desc: ["block.height", "transaction.index"]
          limit: $limit
          offset: $offset
        }
        date: { since: $from, till: $till }
        outputValue: { is: $outVal }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        transaction {
          hash
          index
        }
        outputAddress {
          address
        }
      }
    }
  }
`
export const InboundOutboundTransactionsForBtcAddress = gql`
  query InboundOutboundTransactionsForBtcAddress {
    bitcoin(network: bitcoin) {
      inbound: coinpath(
        receiver: { is: "3CG5hs3YLhKg8zgxsxc8UPxBmFj4e4oBb2" }
      ) {
        sender {
          address
          annotation
        }
        totalInbound: amount
        transactions {
          amount
          height
          timestamp
          txHash
          txValue
        }
      }
      outbound: coinpath(
        sender: { is: "3CG5hs3YLhKg8zgxsxc8UPxBmFj4e4oBb2" }
        receiver: { not: "" }
      ) {
        receiver {
          address
          annotation
        }
        totalOutbound: amount
        transactions {
          amount
          height
          timestamp
          txHash
          txValue
        }
      }
    }
  }
`
export const PancakePoolsVolumeForADate = gql`
  query PancakePoolsVolumeForADate {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "count" }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
        date: { since: "2020-12-12", till: "2020-12-12" }
      ) {
        count
        tradeAmount(in: USD)
      }
    }
  }
`
export const Ethdai = gql`
  query Ethdai($baseAddress: String, $quoteAddress: String, $interval: Int) {
    ethereum(network: ethereum) {
      dexTrades(
        baseCurrency: { is: $baseAddress }
        quoteCurrency: { is: $quoteAddress }
        date: { is: "2021-01-28" }
        priceAsymmetry: { lt: 0.7 }
        any: [
          { tradeAmountUsd: { gt: 0.00001 } }
          { tradeAmountUsd: { is: 0 } }
        ]
      ) {
        timeInterval {
          minute(format: "%FT%TZ", count: $interval)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        high: quotePrice(calculate: maximum)
        low: quotePrice(calculate: minimum)
        open: minimum(of: block, get: quote_price)
        close: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const TopTradesInDexByGasValueInUsd = gql`
  query TopTradesInDexByGasValueInUsd {
    ethereum {
      dexTrades(
        options: { limit: 10, desc: "gasValueUsd" }
        date: { after: "2020-11-01" }
      ) {
        transaction {
          hash
        }
        tradeIndex
        date {
          date
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        sellAmountInUsd: sellAmount(in: USD)
        gasValueUsd: gasValue(in: USD)
      }
    }
  }
`
export const BitcoinMonthlyInputAddresses = gql`
  query BitcoinMonthlyInputAddresses {
    bitcoin {
      inputs(options: { asc: "month.date" }) {
        activeAddress: count(uniq: addresses)
        month: date {
          date(format: "%Y-%m")
        }
      }
    }
  }
`
export const PancakePools24HourTransfersData = gql`
  query PancakePools24HourTransfersData {
    ethereum(network: bsc) {
      transfers(
        currency: { is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f" }
        amount: { gt: 0 }
        date: { since: "2020-12-12", till: "2020-12-12" }
      ) {
        currency {
          symbol
          address
        }
        average: amount(calculate: average)
        amount
        count
        days: count(uniq: dates)
        sender_count: count(uniq: senders)
        receiver_count: count(uniq: receivers)
        min_date: minimum(of: date)
        max_date: maximum(of: date)
      }
    }
  }
`
export const PancakeTradingVol = gql`
  query PancakeTradingVol {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 5, desc: "date.date" }
        exchangeName: { is: "Pancake" }
      ) {
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        date {
          date: date
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
      }
    }
  }
`
export const DexTradesVolumesMonthlyv0 = gql`
  query DexTradesVolumesMonthlyv0 {
    ethereum {
      dexTrades(options: { desc: ["date.year"] }) {
        count
        tradeAmount(in: USD)
        date {
          year
        }
      }
    }
  }
`
export const ConfluxGasSpentByDay = gql`
  query ConfluxGasSpentByDay(
    $network: ConfluxNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    conflux(network: $network) {
      transactions(
        options: { asc: "date.date" }
        date: { since: $from, till: $till }
      ) {
        date: date {
          date(format: $dateFormat)
        }
        count: count
        gasValue(in: USD)
      }
    }
  }
`
export const DexExchangesByTradeAmounts = gql`
  query DexExchangesByTradeAmounts {
    ethereum {
      dexTrades(options: { limit: 10, desc: "tradeAmount" }) {
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const NewQueryv0 = gql`
  query NewQueryv0 {
    ethereum {
      dexTrades(options: { limit: 10, desc: "tradeAmount" }) {
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const HistoryOfBlockRewardsInUsd = gql`
  query HistoryOfBlockRewardsInUsd {
    ethereum {
      blocks {
        rewardInUsd: reward(in: USD)
        date {
          date
        }
      }
    }
  }
`
export const TransferTotalSumOfTotalv0 = gql`
  query TransferTotalSumOfTotalv0(
    $network: EthereumNetwork!
    $address: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $limit: Int!
    $offset: Int!
  ) {
    ethereum(network: $network) {
      transfers(
        date: { since: $from, till: $till }
        amount: { gt: 0 }
        options: { limit: $limit, offset: $offset, desc: "count_in" }
      ) {
        sum_in: amount(calculate: sum, receiver: { is: $address })
        sum_out: amount(calculate: sum, sender: { is: $address })
        count_in: count(receiver: { is: $address })
        count_out: count(sender: { is: $address })
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
`
export const TopTradesByUsdAmountInDexv0v1 = gql`
  query TopTradesByUsdAmountInDexv0v1 {
    ethereum {
      dexTrades(
        options: { limit: 10, desc: "tradeAmount" }
        date: { after: "2019-12-31" }
      ) {
        transaction {
          hash
        }
        tradeIndex
        date {
          date
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const PancakeOhlcDataWbnbbusd = gql`
  query PancakeOhlcDataWbnbbusd {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 100, asc: "timeInterval.minute" }
        date: { since: "2020-11-01" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
      ) {
        timeInterval {
          minute(count: 5)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        median_price: quotePrice(calculate: median)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const LatestTradesOnPancake = gql`
  query LatestTradesOnPancake {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "block.height" }
        exchangeName: { is: "Pancake" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const NewQueryv0v1 = gql`
  query NewQueryv0v1 {
    ethereum {
      dexTrades(
        options: { limit: 10, desc: "tradeAmount" }
        date: { after: "2020-11-01" }
      ) {
        transaction {
          hash
        }
        tradeIndex
        date {
          date
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
      }
    }
  }
`
export const ConfluxBlocksOverTime = gql`
  query ConfluxBlocksOverTime($from: ISO8601DateTime, $till: ISO8601DateTime) {
    conflux {
      blocks(date: { since: $from, till: $till }) {
        count
        date {
          date
        }
      }
    }
  }
`
export const PancakePools24HourTransfersDatav0 = gql`
  query PancakePools24HourTransfersDatav0 {
    ethereum(network: bsc) {
      transfers(
        currency: { is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f" }
        date: { since: "2020-12-12", till: "2020-12-12" }
      ) {
        currency {
          symbol
          address
        }
        median: amount(calculate: median)
        average: amount(calculate: average)
        amount
        count
        days: count(uniq: dates)
        sender_count: count(uniq: senders)
        receiver_count: count(uniq: receivers)
        min_date: minimum(of: date)
        max_date: maximum(of: date)
      }
    }
  }
`
export const PancakePoolsVolumeDayWise = gql`
  query PancakePoolsVolumeDayWise {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "date.date" }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
      ) {
        count
        tradeAmount(in: USD)
        date {
          date(format: "%y-%m-%d")
        }
      }
    }
  }
`
export const Firstone = gql`
  query Firstone {
    ethereum {
      dexTrades(options: { limit: 100, desc: "count" }) {
        count
        exchange {
          fullName
        }
      }
    }
  }
`
export const NewQueryv0v1v2 = gql`
  query NewQueryv0v1v2 {
    ethereum {
      dexTrades(
        options: { desc: "gasValue", limit: 10 }
        date: { after: "2020-10-01" }
      ) {
        count
        txs: count(uniq: txs)
        protocol
        exchange {
          fullName
        }
        gasValue
        transaction {
          hash
        }
        buyAmount
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        tradeIndex
      }
    }
  }
`
export const QueryMinMaxBlockPerDate = gql`
  query QueryMinMaxBlockPerDate {
    ethereum {
      blocks(date: { is: "2020-06-11" }) {
        minimum(of: block)
        maximum(of: block)
      }
    }
  }
`
export const TwtbusdSpreadInfo = gql`
  query TwtbusdSpreadInfo {
    ethereum(network: bsc) {
      dexTrades(
        date: { is: "2020-12-21" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x4b0f1812e5df2a09796481ff14017e6005508003" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
      ) {
        timeInterval {
          minute
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        side
      }
    }
  }
`
export const CurveDexTradesByScDaily = gql`
  query CurveDexTradesByScDaily {
    ethereum {
      dexTrades(
        options: { asc: ["smartContract.address.address", "date.date"] }
        exchangeName: { is: "Curve" }
      ) {
        date {
          date
        }
        smartContract {
          address {
            address
          }
        }
        tradeAmount(in: USD)
      }
    }
  }
`
export const DexFilteringByTakerAddressTypeSmartContract = gql`
  query DexFilteringByTakerAddressTypeSmartContract {
    ethereum {
      dexTrades(
        date: { is: "2021-01-11" }
        takerSmartContractType: { notIn: [None] }
      ) {
        count
        taker {
          smartContract {
            contractType
          }
        }
      }
    }
  }
`
export const TxListInSpecificTimeframe = gql`
  query TxListInSpecificTimeframe(
    $baseAddress: String
    $quoteAddress: String
    $from: ISO8601DateTime!
  ) {
    ethereum(network: ethereum) {
      dexTrades(
        time: { between: ["2021-01-29T11:00:00Z", "2021-01-29T11:05:00Z"] }
        baseCurrency: { is: $baseAddress }
        quoteCurrency: { is: $quoteAddress }
        date: { since: $from }
        priceAsymmetry: { lt: 0.7 }
        any: [
          { tradeAmountUsd: { gt: 0.00001 } }
          { tradeAmountUsd: { is: 0 } }
        ]
      ) {
        transaction {
          hash
        }
        tradeIndex
        protocol
        exchange {
          name
        }
        buyCurrency: baseCurrency {
          symbol
          address
        }
        buyAmount: baseAmount
        sellCurrency: quoteCurrency {
          symbol
          address
        }
        volume: quoteAmount
        trades: count
        high: quotePrice(calculate: maximum)
        low: quotePrice(calculate: minimum)
        open: minimum(of: block, get: quote_price)
        close: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const NewQueryv0v1v2v3 = gql`
  query NewQueryv0v1v2v3 {
    ethereum {
      dexTrades(options: { asc: ["date.year", "date.month"] }) {
        count
        tradeAmount(in: USD)
        date {
          year
          month
        }
      }
    }
  }
`
export const DexTradeVolumeYearly = gql`
  query DexTradeVolumeYearly {
    ethereum {
      dexTrades(options: { desc: ["date.year"] }) {
        count
        tradeAmount(in: USD)
        date {
          year
        }
      }
    }
  }
`
export const NewQueryv0v1v2v3v4 = gql`
  query NewQueryv0v1v2v3v4 {
    ethereum {
      dexTrades(
        options: { limit: 10, desc: "gasValueUsd" }
        date: { after: "2020-11-01" }
      ) {
        transaction {
          hash
        }
        tradeIndex
        date {
          date
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        sellAmountInUsd: sellAmount(in: USD)
        gasValueUsd: gasValue(in: USD)
      }
    }
  }
`
export const BuildReward = gql`
  query BuildReward(
    $network: EthereumNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $address: [String!]
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: { desc: "txsCount" }
        date: { since: $from, till: $till }
        smartContractAddress: { in: $address }
      ) {
        date: date {
          date(format: $dateFormat)
        }
        smartContract {
          address {
            address
          }
        }
        txsCount: count
        callers: count(uniq: senders)
        totalGas: gasValue
      }
    }
  }
`
export const PooledTokenInAPancakePool = gql`
  query PooledTokenInAPancakePool {
    ethereum(network: bsc) {
      address(address: { is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f" }) {
        balances {
          currency {
            symbol
          }
          value
        }
      }
    }
  }
`
export const PancakePoolsVolumeDataFor24HoursOverTime = gql`
  query PancakePoolsVolumeDataFor24HoursOverTime {
    ethereum(network: bsc) {
      transfers(
        currency: { is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f" }
        date: { since: "2020-12-01", till: "2020-12-12" }
      ) {
        currency {
          symbol
          address
        }
        date: date {
          date(format: "%y-%m-%d")
        }
        average: amount(calculate: average)
        amount
        count
        days: count(uniq: dates)
        sender_count: count(uniq: senders)
        receiver_count: count(uniq: receivers)
        min_date: minimum(of: date)
        max_date: maximum(of: date)
      }
    }
  }
`
export const PancakeVolumeOverMonth = gql`
  query PancakeVolumeOverMonth {
    ethereum(network: bsc) {
      dexTrades(
        options: { asc: ["date.year", "date.month"] }
        exchangeName: { is: "Pancake" }
      ) {
        count
        tradeAmount(in: USD)
        date {
          year
          month
        }
      }
    }
  }
`
export const DodoDexTrades = gql`
  query DodoDexTrades {
    ethereum {
      dexTrades(
        options: { limit: 10, desc: "block.height" }
        exchangeName: { is: "Dodo" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const BalancesQueryWithTimeFilterExamplev0 = gql`
  query BalancesQueryWithTimeFilterExamplev0 {
    ethereum {
      address(address: { is: "0x664706C3b5ccE1f2C7f89988ca5b804365E1f97b" }) {
        balances(time: { till: "2019-01-13T12:35:04+00:00" }) {
          value
          currency {
            symbol
          }
        }
      }
    }
  }
`
export const SliceByTakerScType = gql`
  query SliceByTakerScType {
    ethereum {
      uniswap: dexTrades(
        smartContractAddress: {
          is: "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974"
        }
      ) {
        exchange {
          fullName
        }
        taker {
          smartContract {
            contractType
          }
        }
        tradeAmount(in: USD)
        count
      }
      bancor: dexTrades(
        exchangeAddress: { is: "0x2f9ec37d6ccfff1cab21733bdadede11c823ccb0" }
        baseCurrency: { is: "0x514910771af9ca656af840dff83e8264ecf986ca" }
      ) {
        exchange {
          fullName
        }
        taker {
          smartContract {
            contractType
          }
        }
        tradeAmount(in: USD)
        count
      }
      sushiswap: dexTrades(
        smartContractAddress: {
          is: "0xc40d16476380e4037e6b1a2594caf6a6cc8da967"
        }
      ) {
        exchange {
          fullName
        }
        taker {
          smartContract {
            contractType
          }
        }
        tradeAmount(in: USD)
        count
      }
    }
  }
`
export const QueryCoinpath = gql`
  query QueryCoinpath(
    $network: EthereumNetwork!
    $address: String!
    $inboundDepth: Int!
    $outboundDepth: Int!
    $limit: Int!
    $currency: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      inbound: coinpath(
        initialAddress: { is: $address }
        currency: { is: $currency }
        depth: { lteq: $inboundDepth }
        options: {
          direction: inbound
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        receiver {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        amount
        currency {
          symbol
        }
        depth
        count
      }
      outbound: coinpath(
        initialAddress: { is: $address }
        currency: { is: $currency }
        depth: { lteq: $outboundDepth }
        options: {
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        receiver {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        amount
        currency {
          symbol
        }
        depth
        count
      }
    }
  }
`
export const NewQueryv0v1v2v3v4v5 = gql`
  query NewQueryv0v1v2v3v4v5($from: ISO8601DateTime, $till: ISO8601DateTime) {
    ethereum {
      smartContractEvents(
        options: { desc: "date.date" }
        smartContractAddress: {
          is: "0x00000000219ab540356cbb839cbe05303d7705fa"
        }
        date: { since: $from, till: $till }
      ) {
        date {
          date: startOfInterval(unit: day)
        }
        smartContractEvent {
          __typename
          name
        }
        times: count
        uniqueCallers: count(uniq: callers)
      }
    }
  }
`
export const ExampleOfQueryWithTimestampWithZone = gql`
  query ExampleOfQueryWithTimestampWithZone {
    ethereum {
      dexTrades(date: { is: "2020-11-01" }, options: { limit: 10 }) {
        transaction {
          hash
        }
        block {
          timestamp {
            time(format: "%Y-%m-%dT%H:%M:%SZ")
          }
        }
      }
    }
  }
`
export const PancakeUsdtcakePairLatestSwaps = gql`
  query PancakeUsdtcakePairLatestSwaps {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "block.height" }
        exchangeName: { is: "Pancake" }
        smartContractAddress: {
          is: "0x3f3d4ce222a7c919ea7f0231471c77478e36fc0d"
        }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const QueryScArgsForTheLatestEventSwap = gql`
  query QueryScArgsForTheLatestEventSwap {
    ethereum(network: bsc) {
      arguments(
        options: { limitBy: { each: "sender", limit: 1 }, desc: "block.height" }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
        smartContractEvent: { is: "Swap" }
      ) {
        block {
          height
        }
        transaction {
          hash
        }
        sender: any(of: argument_value, argument: { is: "sender" })
        to: any(of: argument_value, argument: { is: "to" })
        amount0In: any(of: argument_value, argument: { is: "amount0In" })
        amount0Out: any(of: argument_value, argument: { is: "amount0Out" })
        amount1In: any(of: argument_value, argument: { is: "amount1In" })
        amount1Out: any(of: argument_value, argument: { is: "amount1Out" })
      }
    }
  }
`
export const PancakeSwapEventsNewApis = gql`
  query PancakeSwapEventsNewApis {
    ethereum(network: bsc) {
      arguments(
        options: { limitBy: { each: "sender", limit: 1 }, desc: "block.height" }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
        smartContractEvent: { is: "Swap" }
      ) {
        block {
          height
        }
        transaction {
          hash
        }
        sender: any(of: argument_value, argument: { is: "sender" })
        to: any(of: argument_value, argument: { is: "to" })
        amount0In: any(of: argument_value, argument: { is: "amount0In" })
        amount0Out: any(of: argument_value, argument: { is: "amount0Out" })
        amount1In: any(of: argument_value, argument: { is: "amount1In" })
        amount1Out: any(of: argument_value, argument: { is: "amount1Out" })
      }
    }
  }
`
export const Asd = gql`
  query Asd {
    ethereum {
      dexTrades(options: { limit: 100, desc: "count" }) {
        count
        exchange {
          fullName
        }
      }
    }
  }
`
export const Sd = gql`
  query Sd(
    $network: EthereumNetwork!
    $address: String!
    $inboundDepth: Int!
    $outboundDepth: Int!
    $limit: Int!
    $currency: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      inbound: coinpath(
        initialAddress: { is: $address }
        currency: { is: $currency }
        depth: { lteq: $inboundDepth }
        options: {
          direction: inbound
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        receiver {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        amount
        currency {
          symbol
        }
        depth
        count
      }
      outbound: coinpath(
        initialAddress: { is: $address }
        currency: { is: $currency }
        depth: { lteq: $outboundDepth }
        options: {
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        receiver {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        amount
        currency {
          symbol
        }
        depth
        count
      }
    }
  }
`
export const NewQueryv0v1v2v3v4v5v6 = gql`
  query NewQueryv0v1v2v3v4v5v6 {
    ethereum {
      dexTrades(options: { desc: ["date.year"] }) {
        count
        tradeAmount(in: USD)
        date {
          year
        }
      }
    }
  }
`
export const QeueryName = gql`
  query QeueryName($address: [String!]) {
    ethereum(network: bsc) {
      transactions(txSender: { in: $address }) {
        sender {
          address
        }
        first_tx_time: minimum(of: date)
      }
    }
  }
`
export const CopyOfQeueryName = gql`
  query CopyOfQeueryName($address: [String!]) {
    ethereum(network: bsc) {
      transactions(txSender: { in: $address }) {
        sender {
          address
        }
        first_tx_time: minimum(of: date)
      }
    }
  }
`
export const Test = gql`
  query Test(
    $network: EthereumNetwork!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $limit: Int!
    $offset: Int!
  ) {
    ethereum(network: $network) {
      dexTrades(
        options: { desc: "currencyAmount", limit: $limit, offset: $offset }
        date: { since: $from, till: $till }
      ) {
        baseCurrency {
          address
          symbol
          name
          decimals
        }
        count
        currencyAmount: baseAmount(in: USD)
        dates: count(uniq: dates)
        started: minimum(of: date)
      }
    }
  }
`
export const UsdtethDailyVolumev0 = gql`
  query UsdtethDailyVolumev0 {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 100, asc: "timeInterval.day" }
        date: { since: "2020-11-01" }
        exchangeName: { is: "Uniswap" }
        baseCurrency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
        quoteCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      ) {
        timeInterval {
          day(count: 1)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
        tradeAmount(in: USDT)
      }
    }
  }
`
export const Limit5ByCallerSc = gql`
  query Limit5ByCallerSc(
    $network: EthereumNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $address: [String!]
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: {
          asc: "block.height"
          limitBy: { each: "caller.address", limit: 5 }
        }
        date: { since: $from, till: $till }
        smartContractAddress: { in: $address }
      ) {
        block {
          height
        }
        date: date {
          date(format: $dateFormat)
        }
        caller {
          address
        }
        senders_address_amount: count(uniq: senders)
        txs: count
        external_txs: count(external: true)
        internal_txs: count(external: false)
        external_totalGas: gasValue(external: true)
        internal_totalGas: gasValue(external: false)
      }
    }
  }
`
export const AggregateSmartContractArgumentv0 = gql`
  query AggregateSmartContractArgumentv0 {
    ethereum(network: ethereum) {
      arguments(
        smartContractEvent: {
          is: "LOG_SWAP(address,address,address,uint256,uint256)"
        }
        smartContractAddress: {
          is: "0x003a70265a3662342010823bea15dc84c6f7ed54"
        }
        argument: { is: "tokenAmountIn" }
      ) {
        date {
          date(format: "%Y-%m-%d")
        }
        block {
          timestamp {
            hour
          }
        }
        number(calculate: sum)
      }
    }
  }
`
export const AllPancakeMints = gql`
  query AllPancakeMints {
    ethereum(network: bsc) {
      smartContractEvents(
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
        smartContractEvent: { is: "Mint" }
        options: { limit: 10, desc: "block.height" }
      ) {
        block {
          height
        }
        arguments {
          value
          argument
        }
      }
    }
  }
`
export const NewQueryv0v1v2v3v4v5v6v7 = gql`
  query NewQueryv0v1v2v3v4v5v6v7 {
    ethereum {
      dexTrades(options: { limit: 100, desc: "count" }) {
        count
        exchange {
          fullName
        }
      }
    }
  }
`
export const Ghghgh = gql`
  query Ghghgh($address: [String!]) {
    ethereum(network: bsc) {
      transactions(txSender: { in: $address }) {
        sender {
          address
        }
        first_tx_time: minimum(of: date)
      }
    }
  }
`
export const GraphqlAliasExample = gql`
  query GraphqlAliasExample {
    ethereum {
      transactions(options: { desc: "date.date", limit: 10 }) {
        activeAddress: count(uniq: senders)
        date: date {
          date(format: "%Y-%m")
        }
      }
    }
    binanceSmartChain: ethereum(network: bsc) {
      transactions(options: { desc: "date.date", limit: 10 }) {
        activeAddress: count(uniq: senders)
        date: date {
          date(format: "%Y-%m")
        }
      }
    }
  }
`
export const ConfluxActiveAddresses = gql`
  query ConfluxActiveAddresses {
    conflux {
      transactions {
        activeAddress: count(uniq: senders)
        date {
          date
        }
      }
    }
  }
`
export const NewQueryv0v1v2v3v4v5v6v7v8 = gql`
  query NewQueryv0v1v2v3v4v5v6v7v8 {
    ethereum {
      dexTrades(
        options: { limit: 10, desc: "tradeAmount" }
        date: { after: "2020-11-01" }
      ) {
        transaction {
          hash
        }
        tradeIndex
        date {
          date
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
      }
    }
  }
`
export const NewQueryv0v1v2v3v4v5v6v7v8v9 = gql`
  query NewQueryv0v1v2v3v4v5v6v7v8v9 {
    ethereum {
      dexTrades(
        options: { limit: 10, desc: "tradeAmount" }
        date: { after: "2020-11-01" }
      ) {
        transaction {
          hash
        }
        tradeIndex
        date {
          date
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
      }
    }
  }
`
export const NewQueryv0v1v2v3v4v5v6v7v8v9v10 = gql`
  query NewQueryv0v1v2v3v4v5v6v7v8v9v10(
    $network: EthereumNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $address: String!
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
        smartContractAddress: { is: $address }
      ) {
        date: date {
          date(format: $dateFormat)
        }
        count: count
        callers: count(uniq: senders)
        totalGas: gasValue
      }
    }
  }
`
export const Yuyu = gql`
  query Yuyu($address: [String!]) {
    ethereum(network: bsc) {
      transactions(txSender: { in: $address }) {
        sender {
          address
        }
        first_tx_time: minimum(of: date)
      }
    }
  }
`
export const Uiuiui = gql`
  query Uiuiui($address: [String!]) {
    ethereum(network: bsc) {
      transactions(txSender: { in: $address }) {
        sender {
          address
        }
        first_tx_time: minimum(of: date)
      }
    }
  }
`
export const Q787878 = gql`
  query q787878($address: [String!]) {
    ethereum(network: bsc) {
      transactions(txSender: { in: $address }) {
        sender {
          address
        }
        first_tx_time: minimum(of: date)
      }
    }
  }
`
export const DiverisfyTradesOver0x = gql`
  query DiverisfyTradesOver0x {
    ethereum {
      dexTrades(exchangeName: { is: "DeversiFi" }) {
        count
        exchange {
          fullName
          address {
            address
            annotation
          }
        }
      }
    }
  }
`
export const ConfluxNetworkAverageMedianMaxMinGasValue = gql`
  query ConfluxNetworkAverageMedianMaxMinGasValue {
    conflux {
      transactions {
        gasValueAvg: gasValue(calculate: average)
        gasValueMedian: gasValue(calculate: median)
        gasValueMax: gasValue(calculate: maximum)
        gasValueMinimum: gasValue(calculate: minimum)
      }
    }
  }
`
export const CopyOfDexExchanges = gql`
  query CopyOfDexExchanges {
    ethereum {
      dexTrades(options: { desc: "count" }) {
        count
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const CopyOfDexExchangesv0 = gql`
  query CopyOfDexExchangesv0 {
    ethereum {
      dexTrades(options: { desc: "count" }) {
        count
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const SfpbnbLpFarm = gql`
  query SfpbnbLpFarm(
    $network: EthereumNetwork!
    $limit: Int!
    $offset: Int!
    $contract: String!
    $event: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      smartContractEvents(
        options: {
          desc: "block.timestamp.time"
          limit: $limit
          offset: $offset
        }
        smartContractAddress: { is: $contract }
        smartContractEvent: { is: $event }
        date: { since: $from, till: $till }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        smartContract {
          address {
            address
          }
        }
        transaction {
          hash
        }
      }
    }
  }
`
export const ReferenceAddressIsNotImplementedForCubequery = gql`
  query ReferenceAddressIsNotImplementedForCubequery {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        txFrom: { is: "0xcb9beb32743e7d55ed4176ec099edf52bdffaa07" }
        options: { desc: "block.height", limit: 9 }
      ) {
        transaction {
          hash
        }
        callDepth
        block {
          height
        }
        token0_address: any(argument: { is: "token0" }, of: argument_value)
        token0_symbol: any(
          argument: { is: "token0" }
          of: argument_value
          as: token_symbol
        )
        token0_name: any(
          argument: { is: "token0" }
          of: argument_value
          as: token_name
        )
        token1_address: any(argument: { is: "token1" }, of: argument_value)
        token1_symbol: any(
          argument: { is: "token1" }
          of: argument_value
          as: token_symbol
        )
        token1_name: any(
          argument: { is: "token1" }
          of: argument_value
          as: token_name
        )
        pair_address: any(argument: { is: "pair" }, of: argument_value)
        pair_symbol: any(
          argument: { is: "pair" }
          of: argument_value
          as: token_symbol
        )
        pair_name: any(
          argument: { is: "pair" }
          of: argument_value
          as: token_name
        )
      }
    }
  }
`
export const ConfluxTotalTxSendersAndReceivers = gql`
  query ConfluxTotalTxSendersAndReceivers(
    $network: ConfluxNetwork!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    conflux(network: $network) {
      transactions(date: { since: $from, till: $till }) {
        senders: count(uniq: senders)
        receivers: count(uniq: receivers)
        gasValue
      }
    }
  }
`
export const ReferenceAddressIsNotImplementedForCubequeryv0 = gql`
  query ReferenceAddressIsNotImplementedForCubequeryv0 {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        txFrom: { is: "0xcb9beb32743e7d55ed4176ec099edf52bdffaa07" }
        reference: { is: "0x47ff6511939ab379d7756b003f61010b9eab3077" }
        argument: { in: ["token0"] }
        options: { desc: "block.height", limit: 9 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
        transaction {
          hash
          txFrom {
            address
          }
        }
      }
    }
  }
`
export const ConfluxTotalTransfersSendersReceivers = gql`
  query ConfluxTotalTransfersSendersReceivers {
    conflux(network: conflux_tethys) {
      transfers(amount: { gt: 0 }) {
        senders: count(uniq: senders)
        receivers: count(uniq: receivers)
        transfers: count(uniq: transfers)
      }
    }
  }
`
export const BogbusdPairPrice = gql`
  query BogbusdPairPrice(
    $baseAddress: String!
    $quoteAddress: String!
    $interval: Int
  ) {
    ethereum(network: bsc) {
      dexTrades(
        date: { since: "2021-04-29" }
        baseCurrency: { is: $baseAddress }
        quoteCurrency: { is: $quoteAddress }
        exchangeName: { in: ["Pancake", "Pancake v2"] }
      ) {
        timeInterval {
          minute(format: "%FT%TZ", count: $interval)
        }
        buyCurrency: baseCurrency {
          symbol
          address
        }
        buyAmount: baseAmount
        buyAmountInUsd: baseAmount
        sellCurrency: quoteCurrency {
          symbol
          address
        }
        sellAmountInUsd: quoteAmount
        tradeAmount(in: USD)
        volume: quoteAmount
        trades: count
        high: quotePrice(calculate: maximum)
        low: quotePrice(calculate: minimum)
        open: minimum(of: block, get: quote_price)
        close: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const QueryReferers = gql`
  query QueryReferers {
    system {
      userRequests(
        userId: { is: 0 }
        date: { since: "2021-04-06" }
        options: { desc: "count", limit: 20 }
      ) {
        count
        referrer
      }
    }
  }
`
export const Bsc1inchV2AggregationProtocolTotalVolume = gql`
  query Bsc1inchV2AggregationProtocolTotalVolume {
    ethereum(network: bsc) {
      dexTrades(
        any: { txTo: { is: "0x111111254bf8547e7183e4bbfc36199f3cedf4a1" } }
      ) {
        tradeAmount(in: USD)
        trades: count(uniq: txs)
      }
    }
  }
`
export const Bsc1inchV3AggregationProtocolTotalVolume = gql`
  query Bsc1inchV3AggregationProtocolTotalVolume {
    ethereum(network: bsc) {
      dexTrades(
        any: { txTo: { is: "0x11111112542D85B3EF69AE05771c2dCCff4fAa26" } }
      ) {
        tradeAmount(in: USD)
        trades: count(uniq: txs)
      }
    }
  }
`
export const QueryPancakeswapPairsCreatedForToken = gql`
  query QueryPancakeswapPairsCreatedForToken {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        options: { asc: "block.height", limit: 10 }
      ) {
        block {
          height
        }
        any(
          of: argument_value
          argument: { is: "token0" }
          value: { in: "0x1af3b59a839e97e944c65177ab3a024b499133f8" }
        )
        transaction {
          txFrom {
            address
          }
          hash
        }
      }
    }
  }
`
export const CopyOfUsdPrice = gql`
  query CopyOfUsdPrice(
    $baseAddress: String!
    $quoteAddress: String!
    $connector1: String!
    $from: ISO8601DateTime!
    $interval: Int
  ) {
    ethereum(network: bsc) {
      dexTrades(
        any: [
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $quoteAddress }
          }
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $connector1 }
          }
          {
            baseCurrency: { is: $connector1 }
            quoteCurrency: { is: $quoteAddress }
          }
        ]
        date: { since: $from }
        tradeAmountUsd: { gt: 10 }
      ) {
        timeInterval {
          minute(format: "%FT%TZ", count: $interval)
        }
        buyCurrency: baseCurrency {
          symbol
        }
        sellCurrency: quoteCurrency {
          symbol
        }
      }
    }
  }
`
export const TradesForASpecificTokenOnThePancakedexv0 = gql`
  query TradesForASpecificTokenOnThePancakedexv0 {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "block.height", limit: 1 }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x36c0556c2b15aed79f842675ff030782738ef9e8" }
        date: { after: "2021-03-28" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const WeirdIssueChangingData = gql`
  query WeirdIssueChangingData {
    ethereum(network: bsc) {
      transfers(
        currency: { is: "0x9706874413ce8dc647a6303d4a257031ad85483e" }
        receiver: { is: "0x000000000000000000000000000000000000dead" }
      ) {
        currency {
          symbol
          address
        }
        amount
        transaction {
          hash
        }
      }
    }
  }
`
export const AccountsByCalls = gql`
  query AccountsByCalls {
    system {
      userRequests(options: { desc: "count", limit: 50 }) {
        count
        account {
          email
          userId
        }
      }
    }
  }
`
export const UbiLastPrice = gql`
  query UbiLastPrice {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 1, desc: "block.timestamp.time" }
        exchangeName: { is: "Uniswap" }
        baseCurrency: { is: "0xdd1ad9a21ce722c151a836373babe42c868ce9a4" }
        quoteCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
      }
    }
  }
`
export const RequestsByDateAccounts = gql`
  query RequestsByDateAccounts {
    system {
      userRequests(options: { asc: "date.date" }) {
        count
        date {
          date
        }
        account {
          email
        }
      }
    }
  }
`
export const CallsByUserAgentByDate = gql`
  query CallsByUserAgentByDate {
    system {
      userRequests(
        options: { desc: "count", limitBy: { each: "date.date", limit: 10 } }
      ) {
        count
        userAgent {
          json
        }
        date {
          date
        }
      }
    }
  }
`
export const AllTokensOfBscAddress = gql`
  query AllTokensOfBscAddress {
    ethereum(network: bsc) {
      address(address: { is: "0x1425844319d9a7a375c8f0d05c528948ca2fe3ce" }) {
        balances {
          currency {
            symbol
            address
          }
          value
        }
      }
    }
  }
`
export const ListFegPairsOnBsc = gql`
  query ListFegPairsOnBsc(
    $in: [String!]
    $network: EthereumNetwork
    $since: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      dexTrades(baseCurrency: { in: $in }, time: { since: $since }) {
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        quotePrice
        count
        buyAmount(in: USD)
        sellAmount(in: USD)
        smartContract {
          address {
            address
            annotation
          }
        }
      }
    }
  }
`
export const HederaEffectOfOutage = gql`
  query HederaEffectOfOutage {
    hedera {
      messages(date: { between: ["2021-03-12", "2021-03-13"] }) {
        hour: time {
          time(format: "%Y-%m-%dT%H:00:00")
        }
        count
      }
    }
  }
`
export const HederaMessagesSplitByTopics = gql`
  query HederaMessagesSplitByTopics {
    hedera {
      messages(date: { between: ["2021-03-12", "2021-03-13"] }) {
        hour: time {
          time(format: "%Y-%m-%dT%H:00:00")
        }
        count
        entity {
          id
        }
      }
    }
  }
`
export const QueryBalanceBsc = gql`
  query QueryBalanceBsc {
    ethereum(network: bsc) {
      address(address: { is: "0x441949e9F37A84A0E080Cc6E58247dEE9668D160" }) {
        balances {
          currency {
            symbol
          }
          value
        }
      }
    }
  }
`
export const RequestHourlyByAccount = gql`
  query RequestHourlyByAccount {
    system {
      userRequests(
        date: { since: "2021-03-25" }
        options: { asc: "hour.time" }
      ) {
        count
        hour: timestamp {
          time(format: "%Y-%m-%dT%H:00:00")
        }
        account {
          email
        }
      }
    }
  }
`
export const CakeCurrencyPriceUsingCakeusdtPairv0 = gql`
  query CakeCurrencyPriceUsingCakeusdtPairv0 {
    ethereum(network: bsc) {
      dexTrades(
        baseCurrency: { is: "0xa4973ac278604e5b101aa1d5f224edaa49f77924" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
        options: { desc: ["block.height", "transaction.index"], limit: 1 }
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        transaction {
          index
        }
        baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        quotePrice
      }
    }
  }
`
export const Pancake = gql`
  query Pancake {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "block.height" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x36c0556c2b15aed79f842675ff030782738ef9e8" }
        date: { after: "2021-03-28" }
      ) {
        transaction {
          hash
        }
        block {
          height
        }
      }
    }
  }
`
export const NotReturningResults = gql`
  query NotReturningResults {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        options: { asc: "block.height", limit: 10 }
      ) {
        block {
          height
        }
        any(
          of: argument_value
          value: { in: "0x62A9B39e3F851dE684954e0b013997A96De1f7C8" }
        )
        transaction {
          txFrom {
            address
          }
          hash
        }
      }
    }
  }
`
export const ExampleForDexPie = gql`
  query ExampleForDexPie {
    ethereum {
      dexTrades(
        date: { since: "2021-01-01" }
        options: { desc: "tradeAmount", limit: 10 }
      ) {
        count
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const NotReturningResultsv0 = gql`
  query NotReturningResultsv0 {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        options: { asc: "block.height", limit: 10 }
      ) {
        block {
          height
        }
        any(
          of: argument_value
          value: { in: "0x62A9B39e3F851dE684954e0b013997A96De1f7C8" }
        )
        transaction {
          txFrom {
            address
          }
          hash
        }
      }
    }
  }
`
export const BscDailyActiveAddressesTxs = gql`
  query BscDailyActiveAddressesTxs(
    $network: EthereumNetwork!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      transactions(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
      ) {
        date {
          date: startOfInterval(unit: day)
        }
        Txs: count
        Senders: count(uniq: senders)
        Senders_True: count(uniq: senders, success: true)
        Receiver: count(uniq: receivers)
      }
    }
  }
`
export const Mfxy_01 = gql`
  query Mfxy_01($network: EthereumNetwork!, $address: String!) {
    ethereum(network: $network) {
      address(address: { is: $address }) {
        balances {
          currency {
            address
            symbol
            tokenType
          }
          value
        }
      }
    }
  }
`
export const CopyOfQueryThatExecutesSqlFastAndSlowRenders = gql`
  query CopyOfQueryThatExecutesSqlFastAndSlowRenders {
    ethereum(network: ethereum) {
      dexTrades(
        date: { since: "2020-08-08", till: null }
        exchangeName: { not: "" }
      ) {
        date {
          date(format: "%Y-%m-%d")
        }
        volume: tradeAmount(in: USD)
        count
        exchange {
          name
        }
      }
    }
  }
`
export const OracleEvents = gql`
  query OracleEvents {
    ethereum(network: ethereum) {
      smartContractEvents(
        options: { desc: "block.timestamp.time", limit: 10, offset: 0 }
        date: { since: "2021-03-14" }
        smartContractAddress: {
          is: "0x00c7a37b03690fb9f41b5c5af8131735c7275446"
        }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        arguments {
          argument
          argumentType
          value
        }
        smartContractEvent {
          name
          signatureHash
        }
        transaction {
          hash
        }
      }
    }
  }
`
export const Allpricesquery = gql`
  query Allpricesquery {
    ethereum(network: bsc) {
      count0: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-21" }
        quoteCurrency: { not: "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830" }
        baseCurrency: { is: "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count1: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2020-11-30" }
        quoteCurrency: { not: "0x12e34cdf6a031a10fe241864c32fb03a4fdad739" }
        baseCurrency: { is: "0x12e34cdf6a031a10fe241864c32fb03a4fdad739" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count2: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-21" }
        quoteCurrency: { not: "0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d" }
        baseCurrency: { is: "0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count3: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2020-09-18" }
        quoteCurrency: { not: "0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa" }
        baseCurrency: { is: "0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count4: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-21" }
        quoteCurrency: { not: "0xe4ae305ebe1abe663f261bc00534067c80ad677c" }
        baseCurrency: { is: "0xe4ae305ebe1abe663f261bc00534067c80ad677c" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count5: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-17" }
        quoteCurrency: { not: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63" }
        baseCurrency: { is: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count6: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-21" }
        quoteCurrency: { not: "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95" }
        baseCurrency: { is: "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count7: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-03-11" }
        quoteCurrency: { not: "0x851f7a700c5d67db59612b871338a85526752c25" }
        baseCurrency: { is: "0x851f7a700c5d67db59612b871338a85526752c25" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count8: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-20" }
        quoteCurrency: { not: "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8" }
        baseCurrency: { is: "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count9: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-21" }
        quoteCurrency: { not: "0xa184088a740c695e156f91f5cc086a06bb78b827" }
        baseCurrency: { is: "0xa184088a740c695e156f91f5cc086a06bb78b827" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count10: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-20" }
        quoteCurrency: { not: "0xf952fc3ca7325cc27d15885d37117676d25bfda6" }
        baseCurrency: { is: "0xf952fc3ca7325cc27d15885d37117676d25bfda6" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count11: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-21" }
        quoteCurrency: { not: "0xe02df9e3e622debdd69fb838bb799e3f168902c5" }
        baseCurrency: { is: "0xe02df9e3e622debdd69fb838bb799e3f168902c5" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count12: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-16" }
        quoteCurrency: { not: "BNB" }
        baseCurrency: { is: "BNB" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count13: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-25" }
        quoteCurrency: { not: "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51" }
        baseCurrency: { is: "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
      count14: dexTrades(
        options: {
          asc: "timeInterval.minute"
          limitBy: { each: "timeInterval.minute", limit: 1 }
        }
        date: { since: "2021-02-23" }
        quoteCurrency: { not: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e" }
        baseCurrency: { is: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e" }
      ) {
        timeInterval {
          minute(count: 30)
        }
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        usd_amount: tradeAmount(in: USD)
        tot_amount: baseAmount(calculate: sum)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const FilteredArguments = gql`
  query FilteredArguments {
    ethereum(network: ethereum) {
      arguments(
        options: { desc: "block.timestamp.time", limit: 10, offset: 0 }
        date: { since: "2021-03-14" }
        smartContractMethod: { is: "submit" }
        argument: { is: "_submission" }
        smartContractAddress: {
          is: "0x00c7a37b03690fb9f41b5c5af8131735c7275446"
        }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        transaction {
          hash
        }
        value {
          value
        }
      }
    }
  }
`
export const FenixswapTotalVolumeAndTrades = gql`
  query FenixswapTotalVolumeAndTrades {
    ethereum(network: bsc) {
      dexTrades(exchangeName: { is: "FenixSwap" }) {
        count
        tradeAmount(in: USD)
      }
    }
  }
`
export const TradesForASpecificTokenOnTheFenixswap = gql`
  query TradesForASpecificTokenOnTheFenixswap {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "block.height" }
        exchangeName: { is: "FenixSwap" }
        baseCurrency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const FenixswapTradeVolumeForDifferentCurrencyPairs = gql`
  query FenixswapTradeVolumeForDifferentCurrencyPairs {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "tradeAmount" }
        exchangeName: { is: "FenixSwap" }
        date: { since: "2020-09-12", till: "2020-12-12" }
      ) {
        buyCurrency {
          address
          symbol
        }
        sellCurrency {
          address
          symbol
        }
        trades: count
        tradeAmount(in: USD)
      }
    }
  }
`
export const PieChartDexExchanges = gql`
  query PieChartDexExchanges {
    ethereum {
      dexTrades(
        date: { since: "2021-01-01" }
        options: { desc: "tradeAmount", limit: 10 }
      ) {
        count
        tradeAmount(in: USD)
        exchange {
          fullName
        }
      }
    }
  }
`
export const FenixswapNewPair = gql`
  query FenixswapNewPair {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0x22574998Bb242B74847089e435D552a5A30D109F"
        }
        smartContractEvent: { is: "PairCreated" }
        argument: { is: "token0" }
        options: { desc: "block.height", limit: 10 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
      }
    }
  }
`
export const LineChartOfBscTxCount = gql`
  query LineChartOfBscTxCount {
    binance {
      transactions {
        date {
          date
        }
        count
      }
    }
  }
`
export const LatestFenixswapPairs = gql`
  query LatestFenixswapPairs {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0x22574998Bb242B74847089e435D552a5A30D109F"
        }
        smartContractEvent: { is: "PairCreated" }
        argument: { is: "pair" }
        options: { desc: "block.height", limit: 9 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
      }
    }
  }
`
export const BtcRewardByMonthByMiner = gql`
  query BtcRewardByMonthByMiner(
    $network: BitcoinNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    bitcoin(network: $network) {
      outputs(
        options: { asc: "date.month" }
        date: { since: $from, till: $till }
        txIndex: { is: 0 }
        outputDirection: { is: mining }
        outputScriptType: { notIn: [nulldata, nonstandard] }
      ) {
        address: outputAddress {
          address
          annotation
        }
        date {
          month: date(format: $dateFormat)
        }
        reward: value
        count(uniq: blocks)
      }
    }
  }
`
export const FenixswapDailyActiveUsers = gql`
  query FenixswapDailyActiveUsers(
    $network: EthereumNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $address: String!
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
        smartContractAddress: { is: $address }
      ) {
        date: date {
          date(format: $dateFormat)
        }
        count: count
        callers: count(uniq: senders)
        totalGas: gasValue
      }
    }
  }
`
export const BtcRewardByDay = gql`
  query BtcRewardByDay($network: BitcoinNetwork!, $dateFormat: String!) {
    bitcoin(network: $network) {
      outputs(
        options: { asc: "date.date" }
        txIndex: { is: 0 }
        outputDirection: { is: mining }
        outputScriptType: { notIn: [nulldata, nonstandard] }
      ) {
        date {
          date(format: $dateFormat)
        }
        reward: value
      }
    }
  }
`
export const ReferersThatDoNotUseApiKey = gql`
  query ReferersThatDoNotUseApiKey {
    system {
      userRequests(
        userId: { is: 0 }
        options: { desc: "count", limit: 100 }
        date: { since: "2021-03-14" }
      ) {
        referrer
        count
      }
    }
  }
`
export const BtcMoneyFlow = gql`
  query BtcMoneyFlow(
    $network: BitcoinNetwork!
    $address: String!
    $inboundDepth: Int!
    $outboundDepth: Int!
    $limit: Int!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    bitcoin(network: $network) {
      inbound: coinpath(
        initialAddress: { is: $address }
        depth: { lteq: $inboundDepth }
        options: {
          direction: inbound
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
        }
        receiver {
          address
          annotation
        }
        amount
        depth
        count
      }
      outbound: coinpath(
        initialAddress: { is: $address }
        depth: { lteq: $outboundDepth }
        options: {
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
        }
        receiver {
          address
          annotation
        }
        amount
        depth
        count
      }
    }
  }
`
export const Moooo = gql`
  query Moooo(
    $network: EthereumNetwork!
    $address: String!
    $inboundDepth: Int!
    $outboundDepth: Int!
    $limit: Int!
    $currency: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      inbound: coinpath(
        initialAddress: { is: $address }
        currency: { is: $currency }
        depth: { lteq: $inboundDepth }
        options: {
          direction: inbound
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        receiver {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        amount
        currency {
          symbol
        }
        depth
        count
      }
      outbound: coinpath(
        initialAddress: { is: $address }
        currency: { is: $currency }
        depth: { lteq: $outboundDepth }
        options: {
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        receiver {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        amount
        currency {
          symbol
        }
        depth
        count
      }
    }
  }
`
export const EventsForTxsByHash = gql`
  query EventsForTxsByHash($network: EthereumNetwork, $txHashes: [String!]) {
    ethereum(network: $network) {
      smartContractEvents(txHash: { in: $txHashes }) {
        arguments {
          argument
          value
        }
        smartContractEvent {
          name
        }
        transaction {
          hash
        }
      }
    }
  }
`
export const GraphOfMoneyFlowFor1inchDexInEth = gql`
  query GraphOfMoneyFlowFor1inchDexInEth(
    $network: EthereumNetwork!
    $address: String!
    $inboundDepth: Int!
    $outboundDepth: Int!
    $limit: Int!
    $currency: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      inbound: coinpath(
        initialAddress: { is: $address }
        currency: { is: $currency }
        depth: { lteq: $inboundDepth }
        options: {
          direction: inbound
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        receiver {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        amount
        currency {
          symbol
        }
        depth
        count
      }
      outbound: coinpath(
        initialAddress: { is: $address }
        currency: { is: $currency }
        depth: { lteq: $outboundDepth }
        options: {
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        receiver {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        amount
        currency {
          symbol
        }
        depth
        count
      }
    }
  }
`
export const Bsc0xApiFillsByDex = gql`
  query Bsc0xApiFillsByDex($from: ISO8601DateTime, $till: ISO8601DateTime) {
    ethereum(network: bsc) {
      dexTrades(
        options: { asc: "date.date" }
        date: { since: $from, till: $till }
        txTo: { is: "0xdef1c0ded9bec7f1a1670819833240f027b25eff" }
      ) {
        date: date {
          date(format: "%Y-%m-%d")
        }
        exchange {
          fullName
        }
        count
        tradeAmount(in: USD)
      }
    }
  }
`
export const BinanceSmartChainTxPerDayv0 = gql`
  query BinanceSmartChainTxPerDayv0 {
    ethereum(network: bsc) {
      transactions {
        date {
          date
        }
        count
      }
    }
  }
`
export const BscWeeklyTxsSendersAndGascost = gql`
  query BscWeeklyTxsSendersAndGascost(
    $network: EthereumNetwork!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      transactions(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
      ) {
        date {
          date: startOfInterval(unit: week, offset: 4)
        }
        gasValue
        gasValueAvg: gasValue(calculate: average)
        gasPrice
        avgGasPrice: gasPrice(calculate: average)
        medGasPrice: gasPrice(calculate: median)
        maxGasPrice: gasPrice(calculate: maximum)
        Txs: count
        Senders: count(uniq: senders)
      }
    }
  }
`
export const Error_1MyQuery = gql`
  query Error_1MyQuery {
    ethereum(network: bsc) {
      smartContractCalls(
        date: { after: "2021-03-15" }
        options: {
          desc: "senders"
          limitBy: { each: "date.date", limit: 5 }
          limit: 100
        }
      ) {
        date {
          date
        }
        smartContract {
          address {
            address
            annotation
          }
        }
        amount
        senders: count(uniq: senders)
      }
    }
  }
`
export const Error_2 = gql`
  query Error_2 {
    ethereum(network: bsc) {
      smartContractCalls(
        options: {
          desc: "external_txs"
          limitBy: { each: "date.date", limit: 100 }
          limit: 100
        }
        date: { in: "2021-03-16" }
      ) {
        date {
          date: date
        }
        smartContract {
          address {
            address
            annotation
            __typename
          }
        }
        senders: count(uniq: senders)
        senders_external: count(uniq: senders, external: true)
        callers: count(uniq: callers)
        callers_external: count(uniq: callers, external: true)
        txs: count
        external_txs: count(external: true)
        internal_txs: count(external: false)
      }
    }
  }
`
export const EtheruemTransactionsOverTime = gql`
  query EtheruemTransactionsOverTime {
    ethereum {
      transactions {
        date {
          date
        }
        count
      }
    }
  }
`
export const Error_2_FixMyQuery = gql`
  query Error_2_fixMyQuery($network: EthereumNetwork!) {
    ethereum(network: $network) {
      smartContractCalls(
        options: {
          desc: "external_txs"
          limitBy: { each: "date.date", limit: 5 }
          limit: 100
        }
        date: { since: "2021-03-12", till: "2021-03-14" }
      ) {
        date {
          date: date
        }
        smartContract {
          address {
            address
            annotation
            __typename
          }
        }
        senders: count(uniq: senders)
        senders_external: count(uniq: senders, external: true)
        callers: count(uniq: callers)
        callers_external: count(uniq: callers, external: true)
        txs: count
        external_txs: count(external: true)
        internal_txs: count(external: false)
      }
    }
  }
`
export const NewQueryv0v1v2v3v4v5v6v7v8v9v10v11MyQuery = gql`
  query NewQueryv0v1v2v3v4v5v6v7v8v9v10v11MyQuery {
    bitcoin {
      blocks(date: { after: "2021-04-02", before: "2021-05-02" }) {
        difficulty(difficulty: {})
        date {
          date
        }
      }
    }
  }
`
export const BtcGetTheAddressAnnotation = gql`
  query BtcGetTheAddressAnnotation {
    bitcoin(network: bitcoin) {
      inbound: coinpath(receiver: { is: "11111111111111111" }) {
        receiver {
          address
          annotation
        }
      }
    }
  }
`
export const QueryPancakeswapPairsForFegToken = gql`
  query QueryPancakeswapPairsForFegToken {
    ethereum(network: bsc) {
      arguments(
        smartContractEvent: { is: "PairCreated" }
        options: { desc: "block.height", limit: 100 }
      ) {
        any(
          of: argument_value
          argument: { is: "token0" }
          value: { in: "0xacfc95585d80ab62f67a14c566c1b7a49fe91167" }
        )
        transaction {
          hash
        }
        block {
          height
        }
      }
    }
  }
`
export const StackTrace = gql`
  query StackTrace($network: EthereumNetwork, $txHashes: [String!]) {
    ethereum(network: $network) {
      smartContractCalls(txHash: { in: $txHashes }) {
        arguments {
          argument
          value
        }
        smartContractMethod {
          name
        }
        callDepth
        transaction {
          hash
        }
      }
    }
  }
`
export const MechanismBscTop100MostTransferredTokens = gql`
  query MechanismBscTop100MostTransferredTokens {
    ethereum(network: bsc) {
      transfers(options: { desc: "count", limit: 100 }, amount: { gt: 0 }) {
        currency {
          symbol
          address
        }
        count
        senders: count(uniq: senders)
        receivers: count(uniq: receivers)
        days: count(uniq: dates)
        from_date: minimum(of: date)
        till_date: maximum(of: date)
        amount
      }
    }
  }
`
export const QuerySenderOrRecieverForFilecoin = gql`
  query QuerySenderOrRecieverForFilecoin {
    filecoin {
      transfers(
        options: { desc: "block.height", limit: 10000 }
        any: [{ sender: { is: "f024633" } }, { receiver: { is: "f024633" } }]
      ) {
        sender {
          address
        }
        receiver {
          address
        }
        block {
          height
        }
        timestamp {
          time
        }
        callHash
        messageMethod {
          name
        }
        method {
          name
        }
        amount
        currency {
          symbol
        }
      }
    }
  }
`
export const QuerySenderReceiverForFilecoinSeparate = gql`
  query QuerySenderReceiverForFilecoinSeparate {
    filecoin {
      inbound: transfers(
        options: { desc: "block.height", limit: 10000 }
        receiver: { is: "f024633" }
      ) {
        sender {
          address
        }
        receiver {
          address
        }
        block {
          height
        }
        timestamp {
          time
        }
        callHash
        messageMethod {
          name
        }
        method {
          name
        }
        amount
        currency {
          symbol
        }
      }
      outbound: transfers(
        options: { desc: "block.height", limit: 10000 }
        sender: { is: "f024633" }
      ) {
        sender {
          address
        }
        receiver {
          address
        }
        block {
          height
        }
        timestamp {
          time
        }
        callHash
        messageMethod {
          name
        }
        method {
          name
        }
        amount
        currency {
          symbol
        }
      }
    }
  }
`
export const MatterPair = gql`
  query MatterPair {
    ethereum(network: bsc) {
      dexTrades(
        options: {}
        exchangeName: { is: "Pancake" }
        buyCurrency: { is: "0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F" }
        date: { since: "2021-03-25" }
        time: { since: "2021-03-25T10:00:00" }
      ) {
        buyCurrency {
          address
          symbol
          name
        }
        sellCurrency {
          address
          symbol
          name
        }
        smartContract {
          address {
            address
          }
        }
        sellAmount
        buyAmount
        closePrice: maximum(of: block, get: price)
        time: maximum(of: block, get: time)
        trades: count
      }
    }
  }
`
export const Bsc0xApiPancakeVip = gql`
  query Bsc0xApiPancakeVip($from: ISO8601DateTime, $till: ISO8601DateTime) {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "currencyAmount" }
        date: { since: $from, till: $till }
        txTo: { is: "0xdef1c0ded9bec7f1a1670819833240f027b25eff" }
        exchangeName: { is: "Pancake" }
      ) {
        currency: baseCurrency {
          symbol
          address
        }
        count
        currencyAmount: baseAmount(in: USD)
        dates: count(uniq: dates)
        started: minimum(of: date)
      }
    }
  }
`
export const LabradorRetriever = gql`
  query LabradorRetriever(
    $network: EthereumNetwork!
    $currency: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      dexTrades(
        buyCurrency: { is: $currency }
        date: { since: $from, till: $till }
        options: { asc: "timeInterval.day" }
      ) {
        timeInterval {
          day(count: 1)
        }
        count
        tradeAmount(in: USD)
      }
    }
  }
`
export const GetPairToken = gql`
  query GetPairToken($address: String!) {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "block.height" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: $address }
      ) {
        smartContract {
          address {
            address
          }
        }
        block {
          height
        }
        buyCurrency {
          symbol
          address
        }
        sellCurrency {
          symbol
          address
        }
      }
    }
  }
`
export const MedianExecTime = gql`
  query MedianExecTime {
    system {
      userRequests(
        date: { since: "2021-03-08" }
        options: { asc: "date.date" }
      ) {
        executionTime(calculate: median)
        date {
          date
        }
      }
    }
  }
`
export const CopyOfLatestCoinsPancake = gql`
  query CopyOfLatestCoinsPancake {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        argument: { not: "pair" }
        options: { desc: "block.height", limit: 100 }
      ) {
        block {
          height
          timestamp {
            unixtime
          }
        }
        argument {
          name
          type
        }
        reference {
          address
          smartContract {
            currency {
              name
            }
          }
        }
      }
    }
  }
`
export const BitcoinBlocks = gql`
  query BitcoinBlocks {
    bitcoin {
      blocks(date: { since: "2021-01-01" }) {
        height
        blockHash
        blockVersion
        chainwork
        difficulty
        blockSize
        blockStrippedSize
        blockWeight
        count
        medianTime {
          iso8601
        }
        date {
          date
        }
      }
    }
  }
`
export const Q = gql`
  query q(
    $network: EthereumNetwork!
    $limit: Int!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $amount: Float!
  ) {
    ethereum(network: $network) {
      transfers(
        options: { desc: "block.timestamp.time", limit: $limit }
        amount: { gt: $amount }
        time: { since: $from, till: $till }
        txHash: {
          is: "0x16fb974c3b7ee7effd88bd8ae10ca485ce32c17e016d4538c278b1ee946b3eee"
        }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        sender {
          address
          annotation
        }
        receiver {
          address
          annotation
        }
        transaction {
          hash
        }
        Sumtotal: amount(calculate: sum)
        amount
        currency {
          symbol
        }
        external
      }
    }
  }
`
export const Shared = gql`
  query Shared {
    ethereum {
      dexTrades(options: { desc: ["date.year"] }) {
        numberOfTrades: count
        tradeAmount(in: USD)
        date {
          year
          month
        }
      }
    }
  }
`
export const PancakeTradingVolv0 = gql`
  query PancakeTradingVolv0 {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 5, desc: "date.date" }
        exchangeName: { is: "Pancake" }
      ) {
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        date {
          date: date
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
      }
    }
  }
`
export const Sharedv0 = gql`
  query Sharedv0 {
    ethereum {
      dexTrades(options: { desc: ["date.year"] }) {
        numberOfTrades: count
        tradeAmount(in: USD)
        date {
          year
          month
        }
      }
    }
  }
`
export const MilkBalanceOfHoldersMyQuery = gql`
  query MilkBalanceOfHoldersMyQuery {
    ethereum(network: bsc) {
      address(address: { in: ["0x56F6c4513b79aD9950a823346C7eF1fBf64f73d5"] }) {
        address
        balances(
          currency: { is: "0xb7cef49d89321e22dd3f51a212d58398ad542640" }
          height: { between: [5873977, 115873979] }
        ) {
          value
        }
      }
    }
  }
`
export const Sadg = gql`
  query Sadg {
    ethereum {
      dexTrades(options: { desc: ["date.year"] }) {
        numberOfTrades: count
        tradeAmount(in: USD)
        date {
          year
          month
        }
      }
    }
  }
`
export const PancakeswapLotteryClaim = gql`
  query PancakeswapLotteryClaim {
    ethereum(network: bsc) {
      smartContractEvents(
        smartContractAddress: {
          is: "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91"
        }
        smartContractEvent: { is: "Claim" }
        options: { desc: "block.height", limit: 500 }
      ) {
        block {
          height
        }
        smartContractEvent {
          name
        }
        arguments {
          argument
          argumentType
          value
        }
      }
    }
  }
`
export const PancakeOhlcData = gql`
  query PancakeOhlcData {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "timeInterval.minute" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xb7f2bca9b034f8cc143339dd12bb31d3d50cf27a" }
        quoteCurrency: { is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" }
      ) {
        timeInterval {
          minute(count: 1)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        median_price: quotePrice(calculate: median)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const SpDividends = gql`
  query SpDividends(
    $network: EthereumNetwork!
    $address: String!
    $limit: Int!
    $offset: Int!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      transfers(
        options: {
          desc: "block.timestamp.time"
          asc: "currency.symbol"
          limit: $limit
          offset: $offset
        }
        date: { since: $from, till: $till }
        amount: { gt: 0 }
        currency: { is: "SPARTA" }
        sender: { is: $address }
        receiver: {
          in: [
            "0x3de669c4f1f167a8afbc9993e4753b84b576426f"
            "0x86320acc1169e5a61a8b365aaba0f8ebadc872e0"
            "0x119c70f4605e07e4bb229e2360e203a1bbd52ce4"
            "0xbf6728454b96a36c720c1bbcae5773aaafd6959b"
            "0x2720ec9809f77e040d4682cf9f7294276b9ccc56"
          ]
        }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        address: receiver {
          address
          annotation
        }
        currency {
          address
          symbol
        }
        amount
        transaction {
          hash
        }
        external
      }
    }
  }
`
export const TradesForASpecificTokenOnTheUniswap = gql`
  query TradesForASpecificTokenOnTheUniswap {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 1, desc: "block.height" }
        baseCurrency: { is: "0x95b3497bBcCcc46a8F45F5Cf54b0878b39f8D96C" }
        quoteCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      ) {
        transaction {
          hash
        }
        smartContract {
          currency {
            name
          }
        }
        block {
          height
        }
        timeInterval {
          second
        }
        buyAmount
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellCurrency {
          symbol
          address
        }
        transaction {
          gasPrice
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
        }
        quotePrice
        side
      }
    }
  }
`
export const BethBalanceOnPancakelp = gql`
  query BethBalanceOnPancakelp(
    $network: EthereumNetwork!
    $address: String!
    $time: ISO8601DateTime!
  ) {
    ethereum(network: $network) {
      address(address: { is: $address }) {
        balances(time: { till: $time }) {
          currency {
            address
            symbol
            tokenType
          }
          value
        }
      }
    }
  }
`
export const MdxPancake = gql`
  query MdxPancake {
    ethereum(network: bsc) {
      dexTrades(
        baseCurrency: { is: "0x9c65ab58d8d978db963e63f2bfb7121627e3a739" }
        quoteCurrency: { is: "0x55d398326f99059ff775485246999027b3197955" }
        options: { desc: ["block.height", "transaction.index"], limit: 1 }
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        transaction {
          index
        }
        baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        quotePrice
      }
    }
  }
`
export const QueryByTxSenderDexTxsLimit10 = gql`
  query QueryByTxSenderDexTxsLimit10 {
    ethereum {
      dexTrades(
        txSender: { is: "0x740b097af71f55ab430b870b1aed9b4e00140460" }
        options: { desc: "block.height" }
      ) {
        block {
          height
        }
        transaction {
          hash
        }
        tradeIndex
        protocol
        smartContract {
          address {
            address
          }
        }
        exchange {
          fullName
        }
        buyAmount
        buyCurrency {
          symbol
        }
        sellAmount
        sellCurrency {
          symbol
        }
      }
    }
  }
`
export const FmtPrice = gql`
  query FmtPrice {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 1, desc: "block.timestamp.time" }
        exchangeName: { is: "Uniswap" }
        baseCurrency: { is: "0x99c6e435ec259a7e8d65e1955c9423db624ba54c" }
        quoteCurrency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
      }
    }
  }
`
export const PancakeOhlcData5MinuteCandleUsdtweth = gql`
  query PancakeOhlcData5MinuteCandleUsdtweth {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1000, asc: "timeInterval.minute" }
        date: { since: "2020-11-01" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
        quoteCurrency: { is: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" }
      ) {
        timeInterval {
          minute(count: 5)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const GetBalanceHistory = gql`
  query GetBalanceHistory($network: EthereumNetwork!, $address: String!) {
    ethereum(network: $network) {
      address(address: { is: $address }) {
        balances {
          history(currency: [{ is: "vBTC" }]) {
            value
            block
            timestamp
            transferAmount
          }
        }
      }
    }
  }
`
export const CakeCurrencyPriceUsingCakeusdtPair10LastMinutes = gql`
  query CakeCurrencyPriceUsingCakeusdtPair10LastMinutes {
    ethereum(network: bsc) {
      smartContractCalls(
        success: true
        options: { limit: 10 }
        date: { after: "2021-04-04" }
        smartContractAddress: {
          is: "0x05ff2b0db69458a0750badebc4f9e13add608c7f"
        }
      ) {
        smartContract {
          address {
            address
          }
          currency {
            decimals
            name
          }
          protocolType
        }
      }
    }
  }
`
export const BscTopTradedPairsOn0xApi = gql`
  query BscTopTradedPairsOn0xApi {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "currencyAmount" }
        txTo: { is: "0xdef1c0ded9bec7f1a1670819833240f027b25eff" }
      ) {
        currency: baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        count
        currencyAmount: baseAmount(in: USD)
      }
    }
  }
`
export const HoprChannelsUsersInBienneGoerli = gql`
  query HoprChannelsUsersInBienneGoerli(
    $network: EthereumNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $address: String!
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
        smartContractAddress: { is: $address }
        height: { gt: 3970950 }
      ) {
        date: date {
          date(format: $dateFormat)
        }
        count: count
        callers: count(uniq: senders)
        totalGas: gasValue
      }
    }
  }
`
export const CopyOfTest = gql`
  query CopyOfTest($base_token: String!, $quote_token: String!) {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 10000, asc: "timeInterval.minute" }
        date: { since: "2020-11-01" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: $base_token }
        quoteCurrency: { is: $quote_token }
      ) {
        timeInterval {
          minute(count: 5)
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
        block {
          height
          hash
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
      }
    }
  }
`
export const LatestPancakeTrades = gql`
  query LatestPancakeTrades {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "block.height" }
        exchangeName: { is: "Pancake" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const IdeExplorerUsageGraphqlApi = gql`
  query IdeExplorerUsageGraphqlApi {
    system {
      userRequests(
        email: { in: ["ide", "explorer"] }
        date: { since: "2021-03-23" }
        options: { asc: "date.date" }
      ) {
        count
        date {
          date
        }
        account {
          email
        }
      }
    }
  }
`
export const Top6RequestsMyQuery = gql`
  query Top6RequestsMyQuery($userId: Int) {
    system {
      userRequests(
        userId: { is: $userId }
        options: { desc: "count", limit: 6 }
      ) {
        request {
          hashFromRequest
          json
        }
        count
      }
    }
  }
`
export const DexTradesByProtocolsv0 = gql`
  query DexTradesByProtocolsv0 {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 100, desc: "date.date" }
        date: { after: "2021-01-01" }
      ) {
        date {
          date
        }
        exchange {
          name
          fullName
        }
        protocol
        USD: tradeAmount(in: USD)
        BTC: tradeAmount(in: BTC)
        ETH: tradeAmount(in: ETH)
        USDT: tradeAmount(in: USDT)
        count
      }
    }
  }
`
export const DexBsc = gql`
  query DexBsc {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "USD" }
        date: { in: "2021-01-01" }
        exchangeName: { is: "Pancake" }
      ) {
        date {
          date
        }
        exchange {
          name
          address {
            address
          }
        }
        buyCurrency {
          address
          symbol
        }
        sellCurrency {
          address
          symbol
        }
        USD: tradeAmount(in: USD)
        BTC: tradeAmount(in: BTC)
        ETH: tradeAmount(in: ETH)
        USDT: tradeAmount(in: USDT)
        count
      }
    }
  }
`
export const FeqtrackRequests = gql`
  query FeqtrackRequests {
    system {
      userRequests(referrer: { is: "https://fegtrack.app/" }) {
        date {
          date
        }
        count
      }
    }
  }
`
export const CurveScDexAddresses = gql`
  query CurveScDexAddresses {
    ethereum {
      dexTrades(exchangeName: { is: "Curve" }) {
        exchange {
          address {
            address
            annotation
          }
        }
        count
        smartContract {
          address {
            address
            annotation
          }
        }
      }
    }
  }
`
export const OtherAccountsByDate = gql`
  query OtherAccountsByDate {
    system {
      userRequests(
        userId: { notIn: [0, 200, 210, 149, 150, 137, 155] }
        options: { asc: "date.date" }
      ) {
        count
        date {
          date
        }
        account {
          email
          userId
        }
      }
    }
  }
`
export const JetmoonbnbPrice = gql`
  query JetmoonbnbPrice {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "timeInterval.minute" }
        baseCurrency: { is: "0x2e841bf1a959f5edcdc320053810ad86396f05ed" }
      ) {
        timeInterval {
          minute(count: 1)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        median_price: quotePrice(calculate: median)
      }
    }
  }
`
export const BaseQuoteQueryTradingvolDexBySymbol = gql`
  query BaseQuoteQueryTradingvolDexBySymbol {
    ethereum {
      dexTrades(
        date: { is: "2020-11-29" }
        options: { limit: 10 }
        baseCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
        quoteCurrency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
      ) {
        exchange {
          name
          fullName
          fullNameWithId
          address {
            annotation
            __typename
          }
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        quotePrice
      }
    }
  }
`
export const KitHoldersAtEndOfMarchAirdrop = gql`
  query KitHoldersAtEndOfMarchAirdrop($holders: [String!]) {
    ethereum {
      address(address: { in: $holders }) {
        address
        balances(
          currency: { is: "0x7866E48C74CbFB8183cd1a929cd9b95a7a5CB4F4" }
          date: { before: "2021-03-31" }
        ) {
          value
        }
      }
    }
  }
`
export const BscTradesPerBlock = gql`
  query BscTradesPerBlock {
    ethereum(network: bsc) {
      dexTrades(date: { is: "2021-02-22" }) {
        block {
          height
          timestamp {
            time
          }
        }
        count
      }
    }
  }
`
export const CopyOfGetPairsDataInfoFromUniswap = gql`
  query CopyOfGetPairsDataInfoFromUniswap {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 100 }
        date: { between: ["2021-04-11", "2021-04-12"] }
        exchangeName: { is: "Uniswap" }
        baseCurrency: { is: "0x7866E48C74CbFB8183cd1a929cd9b95a7a5CB4F4" }
      ) {
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
        smartContract {
          address {
            address
          }
        }
      }
    }
  }
`
export const RequestsSince09march = gql`
  query RequestsSince09march {
    system {
      userRequests(date: { since: "2021-03-09" }) {
        count
      }
    }
  }
`
export const Smartcontactevent = gql`
  query Smartcontactevent {
    ethereum(network: bsc) {
      smartContractEvents(
        txHash: {
          is: "0x3450fee48e352ae9c457c77c004c2e9e44d5a7a3cd6f89fae988c9c8d3b4d3e2"
        }
      ) {
        eventIndex
        smartContract(
          smartContractAddress: {
            is: "0x9B989A7B8963f4b08eC094710e2966FB3c7F6C43"
          }
        ) {
          contractType
          protocolType
          address {
            address
            annotation
          }
          currency {
            address
            decimals
            name
            tokenId
            symbol
            tokenType
          }
        }
        arguments {
          __typename
          argumentType
          index
          value
          argument
        }
        smartContractEvent {
          signature
          name
          signatureHash
        }
      }
    }
  }
`
export const Cakeusdt = gql`
  query Cakeusdt($thisDate: ISO8601DateTime!) {
    ethereum(network: bsc) {
      dexTrades(
        baseCurrency: { is: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" }
        quoteCurrency: { is: "0x55d398326f99059ff775485246999027b3197955" }
        options: { desc: ["block.height", "transaction.index"] }
        date: { since: $thisDate }
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        transaction {
          index
        }
        baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        quotePrice
      }
    }
  }
`
export const PancakeOhlcDataTradingPair = gql`
  query PancakeOhlcDataTradingPair {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 100, asc: "timeInterval.minute" }
        date: { since: "2020-11-01" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
      ) {
        timeInterval {
          minute(count: 5)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const LatestPairsOnPancake = gql`
  query LatestPairsOnPancake {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        argument: { not: "pair" }
        options: { desc: "block.height", limit: 100 }
      ) {
        block {
          height
          timestamp {
            unixtime
          }
        }
        argument {
          name
          type
        }
        reference {
          address
          smartContract {
            currency {
              name
            }
          }
        }
      }
    }
  }
`
export const SmartcontractCallingSwapAndAnyOthers = gql`
  query SmartcontractCallingSwapAndAnyOthers {
    ethereum(network: ethereum) {
      arguments(
        options: { limitBy: { each: "sender", limit: 1 }, desc: "block.height" }
        smartContractAddress: {
          is: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"
        }
        smartContractEvent: { is: "Swap" }
        txHash: {
          is: "0x29ba1d290b684ed8f5010d8cc83667a7ff10b2fb9da15a147544e2458f7e4a6f"
        }
      ) {
        block {
          height
        }
        transaction {
          hash
        }
        smartContract {
          address {
            address
            annotation
          }
          currency {
            address
            name
          }
        }
        sender: any(of: argument_value, argument: { is: "sender" })
        to: any(of: argument_value, argument: { is: "to" })
        amount0In: any(of: argument_value, argument: { is: "amount0In" })
        amount0Out: any(of: argument_value, argument: { is: "amount0Out" })
        amount1In: any(of: argument_value, argument: { is: "amount1In" })
        amount1Out: any(of: argument_value, argument: { is: "amount1Out" })
      }
    }
  }
`
export const DexTradesByProtocolsv0v1 = gql`
  query DexTradesByProtocolsv0v1 {
    ethereum {
      dexTrades(options: { limit: 100, desc: "count" }) {
        count
        protocol
      }
    }
  }
`
export const PancakeNewPair = gql`
  query PancakeNewPair {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        argument: { is: "token0" }
        options: { desc: "block.height", limit: 10 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
      }
    }
  }
`
export const CakeCurrencyPriceUsingCakeusdtPairv0v1 = gql`
  query CakeCurrencyPriceUsingCakeusdtPairv0v1 {
    ethereum(network: bsc) {
      dexTrades(
        baseCurrency: { is: "0x706954491ebfd6b38e5b1e6f079dbefae0f5eba0" }
        quoteCurrency: { is: "0x55d398326f99059ff775485246999027b3197955" }
        options: { desc: ["block.height", "transaction.index"], limit: 1 }
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        transaction {
          index
        }
        baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        quotePrice
      }
    }
  }
`
export const LatestPancakeswapPairsdan = gql`
  query LatestPancakeswapPairsdan {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { in: "PairCreated" }
        argument: { is: "pair" }
        options: { desc: "block.height", limit: 3 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
      }
    }
  }
`
export const TrackingBalance = gql`
  query TrackingBalance($network: EthereumNetwork!, $address: String!) {
    ethereum(network: $network) {
      address(address: { is: $address }) {
        balances {
          currency {
            address
            symbol
            tokenType
          }
          value
        }
      }
    }
  }
`
export const ElongatePrice = gql`
  query ElongatePrice {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "timeInterval.minute" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x2A9718defF471f3Bb91FA0ECEAB14154F150a385" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
      ) {
        timeInterval {
          minute(count: 1)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        median_price: quotePrice(calculate: median)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const Smartcontractcall = gql`
  query Smartcontractcall(
    $network: EthereumNetwork!
    $dateFormat: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: { asc: "date.date" }
        date: { since: $from, till: $till }
      ) {
        date: date {
          date(format: $dateFormat)
        }
        count: count
        contracts: count(uniq: smart_contracts)
        callers: count(uniq: senders)
        methods: count(uniq: smart_contract_methods)
      }
    }
  }
`
export const LastPancakeTrade = gql`
  query LastPancakeTrade {
    ethereum(network: bsc) {
      dexTrades(
        date: { is: "2021-03-28" }
        options: { limit: 1, desc: "block.height" }
      ) {
        block {
          timestamp {
            time
          }
          height
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        median_price: quotePrice(calculate: median)
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const LatestWethdaiTrades = gql`
  query LatestWethdaiTrades {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 100, desc: "block.height" }
        baseCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
        quoteCurrency: { is: "0x6b175474e89094c44da98b954eedeac495271d0f" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const TotalVolTradedUsdForTokenInPancakeswap = gql`
  query TotalVolTradedUsdForTokenInPancakeswap {
    ethereum(network: bsc) {
      dexTrades(
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x4c79b8c9cB0BD62B047880603a9DEcf36dE28344" }
      ) {
        count
        tradeAmount(in: USD)
      }
    }
  }
`
export const GroupedByDayTotalVolTradedUsdForTokenInPancakeswap = gql`
  query GroupedByDayTotalVolTradedUsdForTokenInPancakeswap {
    ethereum(network: bsc) {
      dexTrades(
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x4c79b8c9cB0BD62B047880603a9DEcf36dE28344" }
      ) {
        count
        tradeAmount(in: USD)
        date {
          date
        }
      }
    }
  }
`
export const PancakswapMostTradedPairsPrice = gql`
  query PancakswapMostTradedPairsPrice {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "tradeAmount" }
        exchangeName: { is: "Pancake" }
        date: { since: "2020-09-12", till: "2020-12-12" }
      ) {
        buyCurrency {
          address
          symbol
        }
        sellCurrency {
          address
          symbol
        }
        tradeAmount(in: USD)
        price
      }
    }
  }
`
export const Balancev0v1v2 = gql`
  query Balancev0v1v2 {
    ethereum {
      blocks {
        date {
          year
        }
        count
      }
    }
  }
`
export const PancakeLpPools = gql`
  query PancakeLpPools($address: [String!], $event: [String!]) {
    ethereum(network: bsc) {
      smartContractEvents(
        smartContractAddress: { in: $address }
        smartContractEvent: { in: $event }
        date: { since: "2021-02-11" }
      ) {
        date {
          dt: date
        }
        count(uniq: callers)
        smartContract {
          address {
            sc: address
          }
        }
      }
    }
  }
`
export const Bsc = gql`
  query Bsc {
    binance {
      blocks {
        date {
          year
        }
        count
      }
    }
  }
`
export const LatestWethdaiTradesv0 = gql`
  query LatestWethdaiTradesv0 {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 100, desc: "block.height" }
        baseCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
        quoteCurrency: { is: "0x6b175474e89094c44da98b954eedeac495271d0f" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        baseAmount
        baseAmountInUsd: buyAmount(in: USD)
        baseCurrency {
          symbol
          address
        }
        quoteAmount
        quoteAmountInUsd: sellAmount(in: USD)
        quoteCurrency {
          symbol
          address
        }
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const Thangquery = gql`
  query Thangquery {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        argument: { not: "pair" }
        options: { desc: "block.height", limit: 100 }
      ) {
        block {
          height
          timestamp {
            unixtime
          }
        }
        argument {
          name
          type
        }
        reference {
          address
          smartContract {
            currency {
              name
            }
          }
        }
      }
    }
  }
`
export const BscBlockCount = gql`
  query BscBlockCount {
    binance {
      blocks {
        count
      }
    }
  }
`
export const FilecoinMinerRewardsTotalByDates = gql`
  query FilecoinMinerRewardsTotalByDates {
    filecoin {
      blocks(options: { asc: "date.date" }) {
        date {
          date
        }
        reward
      }
    }
  }
`
export const ExampleOfQueryMultiplePairs = gql`
  query ExampleOfQueryMultiplePairs(
    $baseAddress: String!
    $quoteAddress: String!
    $connector1: String!
    $connector2: String!
    $from: ISO8601DateTime!
    $interval: Int
  ) {
    ethereum(network: ethereum) {
      dexTrades(
        any: [
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $quoteAddress }
          }
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $connector1 }
          }
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $connector2 }
          }
          {
            baseCurrency: { is: $connector1 }
            quoteCurrency: { is: $quoteAddress }
          }
          {
            baseCurrency: { is: $connector2 }
            quoteCurrency: { is: $quoteAddress }
          }
        ]
        date: { since: $from }
        tradeAmountUsd: { gt: 10 }
      ) {
        timeInterval {
          minute(format: "%FT%TZ", count: $interval)
        }
        buyCurrency: baseCurrency {
          symbol
          address
        }
        buyAmount: baseAmount
        buyAmountInUsd: baseAmount(in: USD)
        sellCurrency: quoteCurrency {
          symbol
          address
        }
        sellAmountInUsd: quoteAmount(in: USD)
        tradeAmount(in: USD)
        volume: quoteAmount
        trades: count
        high: quotePrice(calculate: maximum)
        low: quotePrice(calculate: minimum)
        open: minimum(of: block, get: quote_price)
        close: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const ExampleOfQueryPairsWithBasequoteAndConnectorsBetween = gql`
  query ExampleOfQueryPairsWithBasequoteAndConnectorsBetween(
    $baseAddress: String!
    $quoteAddress: String!
    $baseConnectors: [String!]
    $quoteConnectors: [String!]
    $from: ISO8601DateTime!
    $interval: Int
  ) {
    ethereum(network: ethereum) {
      dexTrades(
        any: [
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { in: $quoteConnectors }
          }
          {
            baseCurrency: { in: $baseConnectors }
            quoteCurrency: { is: $quoteAddress }
          }
        ]
        date: { since: $from }
        tradeAmountUsd: { gt: 10 }
      ) {
        timeInterval {
          minute(format: "%FT%TZ", count: $interval)
        }
        buyCurrency: baseCurrency {
          symbol
          address
        }
        buyAmount: baseAmount
        buyAmountInUsd: baseAmount(in: USD)
        sellCurrency: quoteCurrency {
          symbol
          address
        }
        sellAmountInUsd: quoteAmount(in: USD)
        tradeAmount(in: USD)
        volume: quoteAmount
        trades: count
        high: quotePrice(calculate: maximum)
        low: quotePrice(calculate: minimum)
        open: minimum(of: block, get: quote_price)
        close: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const TradesForASpecificTokenOnThePancakedexv0v1 = gql`
  query TradesForASpecificTokenOnThePancakedexv0v1 {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "block.height" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xd1587ee50e0333f0c4adcf261379a61b1486c5d2" }
        date: { after: "2021-03-28" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const Uniswap_New_Pool = gql`
  query Uniswap_new_pool {
    ethereum {
      arguments(
        smartContractAddress: {
          is: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"
        }
        smartContractEvent: { is: "PairCreated" }
        options: { desc: "block.height", limit: 3 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
      }
    }
  }
`
export const QueryDexBaseQuotePricesv0 = gql`
  query QueryDexBaseQuotePricesv0($wallet: String) {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 10, desc: "timeInterval.second" }
        any: [{ txSender: { is: $wallet } }, { txTo: { is: $wallet } }]
      ) {
        transaction {
          hash
        }
        buyCurrency {
          symbol
          address
          name
        }
        tradeAmount(in: ETH)
        sellCurrency {
          symbol
          address
          name
        }
        buyAmount
        sellAmount
        date {
          date
        }
        timeInterval {
          second
        }
        gasValue
        gasPrice
      }
    }
  }
`
export const ConvertingArgumentsAsTokenSymbolsNames = gql`
  query ConvertingArgumentsAsTokenSymbolsNames {
    ethereum(network: ethereum) {
      arguments(
        smartContractAddress: {
          is: "0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac"
        }
        smartContractEvent: { is: "PairCreated" }
        options: { limit: 10 }
      ) {
        transaction {
          hash
        }
        callDepth
        token0_address: any(argument: { is: "token0" }, of: argument_value)
        token0_symbol: any(
          argument: { is: "token0" }
          of: argument_value
          as: token_symbol
        )
        token0_name: any(
          argument: { is: "token0" }
          of: argument_value
          as: token_name
        )
        token1_address: any(argument: { is: "token1" }, of: argument_value)
        token1_symbol: any(
          argument: { is: "token1" }
          of: argument_value
          as: token_symbol
        )
        token1_name: any(
          argument: { is: "token1" }
          of: argument_value
          as: token_name
        )
        pair_address: any(argument: { is: "pair" }, of: argument_value)
        pair_symbol: any(
          argument: { is: "pair" }
          of: argument_value
          as: token_symbol
        )
        pair_name: any(
          argument: { is: "pair" }
          of: argument_value
          as: token_name
        )
      }
    }
  }
`
export const Sbdo = gql`
  query Sbdo {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "timeInterval.minute" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x0d9319565be7f53cefe84ad201be3f40feae2740" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
      ) {
        timeInterval {
          minute(count: 1)
        }
        baseCurrency {
          symbol
          address
        }
        quoteCurrency {
          symbol
          address
        }
        quotePrice
      }
    }
  }
`
export const PancakeSwapDataForParticularPair = gql`
  query PancakeSwapDataForParticularPair {
    ethereum(network: bsc) {
      arguments(
        options: { limitBy: { each: "sender", limit: 1 }, desc: "block.height" }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
        smartContractEvent: { is: "Swap" }
      ) {
        block {
          height
        }
        transaction {
          hash
        }
        sender: any(of: argument_value, argument: { is: "sender" })
        to: any(of: argument_value, argument: { is: "to" })
        amount0In: any(of: argument_value, argument: { is: "amount0In" })
        amount0Out: any(of: argument_value, argument: { is: "amount0Out" })
        amount1In: any(of: argument_value, argument: { is: "amount1In" })
        amount1Out: any(of: argument_value, argument: { is: "amount1Out" })
      }
    }
  }
`
export const LatestPairCreatedOnPancakeSwap = gql`
  query LatestPairCreatedOnPancakeSwap {
    ethereum(network: bsc) {
      arguments(
        options: { desc: "block.height", limit: 3 }
        smartContractAddress: {}
        smartContractEvent: { is: "PairCreated" }
      ) {
        block {
          height
        }
        pair: any(of: argument_value, argument: { is: "pair" })
        token0: any(of: argument_value, argument: { is: "token0" })
        token0Name: any(
          of: argument_value
          argument: { is: "token0" }
          as: token_name
        )
        token1: any(of: argument_value, argument: { is: "token1" })
        token1Name: any(
          of: argument_value
          argument: { is: "token1" }
          as: token_name
        )
      }
    }
  }
`
export const TotalNumberOfPairsOnPancakeSwap = gql`
  query TotalNumberOfPairsOnPancakeSwap {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
      ) {
        pair: count(uniq: values, argument: { is: "pair" })
      }
    }
  }
`
export const VaultBalance = gql`
  query VaultBalance($network: EthereumNetwork!, $address: String!) {
    ethereum(network: $network) {
      address(address: { is: $address }) {
        balances {
          currency {
            address
            symbol
            tokenType
          }
          value
        }
      }
    }
  }
`
export const VltPrice = gql`
  query VltPrice {
    ethereum(network: bsc) {
      dexTrades(
        baseCurrency: { is: "0x82DA15e36F23A4b603Bc8A57c27813F2fAEb04B2" }
        quoteCurrency: { is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" }
        options: { desc: ["block.height", "transaction.index"], limit: 1 }
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        transaction {
          index
        }
        baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        quotePrice
      }
    }
  }
`
export const TradesForASpecificTokenOnThePancakedexv0v1v2 = gql`
  query TradesForASpecificTokenOnThePancakedexv0v1v2 {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "block.height" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x36c0556c2b15aed79f842675ff030782738ef9e8" }
        date: { after: "2021-03-28" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const ExampleQueryAllFromToTransfers = gql`
  query ExampleQueryAllFromToTransfers {
    ethereum(network: bsc) {
      transfers(
        any: [
          { sender: { is: "0x5a384227b65fa093dec03ec34e111db80a040615" } }
          { receiver: { is: "0x5a384227b65fa093dec03ec34e111db80a040615" } }
        ]
      ) {
        block {
          timestamp {
            time
          }
        }
        currency {
          address
          symbol
          decimals
          tokenType
        }
        amount
        sender {
          address
        }
      }
    }
  }
`
export const PancakePairInfoTxBaseAndQuoteCurrencyCountQuotePrice = gql`
  query PancakePairInfoTxBaseAndQuoteCurrencyCountQuotePrice {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "count" }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
      ) {
        count
        tradeAmount(in: USD)
        baseCurrency {
          name
          symbol
        }
        quoteCurrency {
          name
          symbol
        }
        quotePrice
        tx_count: count(uniq: txs)
        baseAmount(in: USD)
        quoteAmount(in: USD)
      }
    }
  }
`
export const UniswapOhlcData5MinuteCandleUsdtwethv0 = gql`
  query UniswapOhlcData5MinuteCandleUsdtwethv0 {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 100000, asc: "timeInterval.minute" }
        date: { since: "2021-04-26" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" }
        quoteCurrency: { is: "0x05b339b0a346bf01f851dde47a5d485c34fe220c" }
      ) {
        timeInterval {
          minute(count: 1)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const QueryWithParametersGet_Ohlc_Day = gql`
  query QueryWithParametersGET_OHLC_DAY(
    $dates: [ISO8601DateTime!]
    $quote: String
    $base: String
    $time: Int
  ) {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 20000, asc: "timeInterval.day" }
        date: { between: $dates }
        baseCurrency: { is: $base }
        quoteCurrency: { is: $quote }
      ) {
        timeInterval {
          day(count: $time)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const QueryTokenBalancesOfAYearnVault = gql`
  query QueryTokenBalancesOfAYearnVault(
    $network: EthereumNetwork!
    $address: String!
    $date: ISO8601DateTime!
  ) {
    ethereum(network: $network) {
      address(address: { is: $address }) {
        balances(date: { before: $date }) {
          currency {
            address
            symbol
            tokenType
          }
          value
        }
      }
    }
  }
`
export const HoprChannelsUsersInTitlisBscv0 = gql`
  query HoprChannelsUsersInTitlisBscv0(
    $network: EthereumNetwork!
    $dateFormat: String!
    $address: String!
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: { desc: "date.date" }
        date: { since: "2021-01-18", till: "2021-01-30" }
        smartContractAddress: { is: $address }
        height: { gt: 3970950 }
      ) {
        date: date {
          date(format: $dateFormat)
        }
        count: count
        callers: count(uniq: senders)
        totalGas: gasValue
      }
    }
  }
`
export const CowFarm = gql`
  query CowFarm(
    $network: EthereumNetwork!
    $address: String!
    $inboundDepth: Int!
    $outboundDepth: Int!
    $limit: Int!
    $currency: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      inbound: coinpath(
        initialAddress: { is: $address }
        currency: { is: $currency }
        depth: { lteq: $inboundDepth }
        options: {
          direction: inbound
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        receiver {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        amount
        currency {
          symbol
        }
        depth
        count
      }
      outbound: coinpath(
        initialAddress: { is: $address }
        currency: { is: $currency }
        depth: { lteq: $outboundDepth }
        options: {
          asc: "depth"
          desc: "amount"
          limitBy: { each: "depth", limit: $limit }
        }
        date: { since: $from, till: $till }
      ) {
        sender {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        receiver {
          address
          annotation
          smartContract {
            contractType
            currency {
              symbol
              name
            }
          }
        }
        amount
        currency {
          symbol
        }
        depth
        count
      }
    }
  }
`
export const MultiPairDexQuery = gql`
  query MultiPairDexQuery(
    $baseAddress: String!
    $quoteAddress: String!
    $connector1: String!
    $from: ISO8601DateTime!
    $interval: Int
  ) {
    ethereum(network: ethereum) {
      dexTrades(
        any: [
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $quoteAddress }
          }
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $connector1 }
          }
          {
            baseCurrency: { is: $connector1 }
            quoteCurrency: { is: $quoteAddress }
          }
        ]
        date: { since: $from }
        tradeAmountUsd: { gt: 10 }
      ) {
        timeInterval {
          minute(format: "%FT%TZ", count: $interval)
        }
        buyCurrency: baseCurrency {
          symbol
          address
        }
        buyAmount: baseAmount
        buyAmountInUsd: baseAmount
        sellCurrency: quoteCurrency {
          symbol
          address
        }
        sellAmountInUsd: quoteAmount
        tradeAmount(in: USD)
        volume: quoteAmount
        trades: count
        high: quotePrice(calculate: maximum)
        low: quotePrice(calculate: minimum)
        open: minimum(of: block, get: quote_price)
        close: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const PancakesPairSwapEvent = gql`
  query PancakesPairSwapEvent {
    ethereum(network: bsc) {
      arguments(
        options: { desc: "block.height", limit: 3 }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
        smartContractEvent: { is: "Swap" }
      ) {
        block {
          height
        }
        transaction {
          hash
        }
        sender: any(of: argument_value, argument: { is: "sender" })
        to: any(of: argument_value, argument: { is: "to" })
        amount0In: any(of: argument_value, argument: { is: "amount0In" })
        amount0Out: any(of: argument_value, argument: { is: "amount0Out" })
        amount1In: any(of: argument_value, argument: { is: "amount1In" })
        amount1Out: any(of: argument_value, argument: { is: "amount1Out" })
      }
    }
  }
`
export const PancakesPairMintEvent = gql`
  query PancakesPairMintEvent {
    ethereum(network: bsc) {
      arguments(
        options: { desc: "block.height", limit: 3 }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
        smartContractEvent: { is: "Mint" }
      ) {
        block {
          height
        }
        transaction {
          hash
        }
        sender: any(of: argument_value, argument: { is: "sender" })
        amount0: any(of: argument_value, argument: { is: "amount0" })
        amount1: any(of: argument_value, argument: { is: "amount1" })
      }
    }
  }
`
export const PancakesPairBurnEvent = gql`
  query PancakesPairBurnEvent {
    ethereum(network: bsc) {
      arguments(
        options: { desc: "block.height", limit: 3 }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
        smartContractEvent: { is: "Burn" }
      ) {
        block {
          height
        }
        transaction {
          hash
        }
        sender: any(of: argument_value, argument: { is: "sender" })
        amount0: any(of: argument_value, argument: { is: "amount0" })
        amount1: any(of: argument_value, argument: { is: "amount1" })
        to: any(of: argument_value, argument: { is: "to" })
      }
    }
  }
`
export const BlockRewards = gql`
  query BlockRewards {
    ethereum {
      blocks(date: { after: "2020-10-01" }) {
        date {
          date
        }
        count
        reward
      }
    }
  }
`
export const NrugPrice = gql`
  query NrugPrice {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 1, desc: "timeInterval.minute" }
        baseCurrency: { is: "0x805208354ba01a0fe0b42934195ea298b9a731ea" }
      ) {
        timeInterval {
          minute(count: 1)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        quotePrice
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const PancakePairsForAParticularToken = gql`
  query PancakePairsForAParticularToken {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        options: { limit: 10 }
      ) {
        pair: any(of: argument_value, argument: { is: "pair" })
        token0: any(
          of: argument_value
          argument: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
        )
        block {
          height
        }
      }
    }
  }
`
export const Bsc1inchUniqueUsersByMonth = gql`
  query Bsc1inchUniqueUsersByMonth {
    binanceSmartChain: ethereum(network: bsc) {
      transactions(
        options: { desc: "date.date", limit: 10 }
        txTo: { is: "0x111111254bf8547e7183e4bbfc36199f3cedf4a1" }
      ) {
        activeAddress: count(uniq: senders)
        date: date {
          date(format: "%Y-%m")
        }
      }
    }
  }
`
export const TradesByMonth1inchInUsd = gql`
  query TradesByMonth1inchInUsd {
    ethereum(network: bsc) {
      dexTrades(
        any: { txTo: { is: "0x111111254bf8547e7183e4bbfc36199f3cedf4a1" } }
      ) {
        date {
          month
          year
        }
        tradeAmount(in: USD)
      }
    }
  }
`
export const LatestTransactionOfASpecificTokenOnPancake = gql`
  query LatestTransactionOfASpecificTokenOnPancake {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "block.height", limit: 1 }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x36c0556c2b15aed79f842675ff030782738ef9e8" }
      ) {
        transaction {
          hash
        }
        smartContract {
          address {
            address
          }
          contractType
          currency {
            name
          }
        }
        tradeIndex
        date {
          date
        }
        block {
          height
        }
        buyAmount
        buyAmountInUsd: buyAmount(in: USD)
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellAmountInUsd: sellAmount(in: USD)
        sellCurrency {
          symbol
          address
        }
        sellAmountInUsd: sellAmount(in: USD)
        tradeAmount(in: USD)
        transaction {
          gasValue
          gasPrice
          gas
        }
      }
    }
  }
`
export const CreationBlockOfASmartContract = gql`
  query CreationBlockOfASmartContract {
    ethereum {
      smartContractCalls(
        smartContractMethod: { is: "Contract Creation" }
        smartContractAddress: {
          is: "0xb443dea978b39178cb05ae005074227a4390dfce"
        }
      ) {
        smartContract {
          address {
            address
          }
        }
        block {
          height
        }
      }
    }
  }
`
export const Getaffiliatetradesflashwallet = gql`
  query Getaffiliatetradesflashwallet($receiver: String!) {
    ethereum(network: ethereum) {
      transfers(
        options: { desc: "block.height" }
        amount: { gt: 0 }
        sender: { is: "0x22F9dCF4647084d6C31b2765F6910cd85C178C18" }
        receiver: { is: $receiver }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        sender {
          address
          annotation
        }
        receiver {
          address
          annotation
        }
        currency {
          address
          symbol
          name
        }
        amount
        transaction {
          hash
        }
        external
      }
    }
  }
`
export const Test_2021_Mar_31 = gql`
  query Test_2021_mar_31 {
    ethereum(network: bsc) {
      dexTrades(date: { in: "2021-03-25" }) {
        date {
          date
        }
        exchange {
          name
          address {
            address
          }
        }
        USD: tradeAmount(in: USD)
        BTC: tradeAmount(in: BTC)
        USDT: tradeAmount(in: USDT)
        count(uniq: address)
      }
    }
  }
`
export const LinkSmartContractAverageGasDetails = gql`
  query LinkSmartContractAverageGasDetails {
    ethereum {
      smartContractCalls(
        time: { since: "2020-11-01", till: "2020-12-31" }
        external: true
        smartContractAddress: {
          is: "0x514910771af9ca656af840dff83e8264ecf986ca"
        }
      ) {
        gasValueAvg: gasValue(calculate: average, in: USD)
        gasValueMedian: gasValue(calculate: median, in: USD)
        gasValueMax: gasValue(calculate: maximum)
      }
    }
  }
`
export const SmartcontractDauTxsMyQuery = gql`
  query SmartcontractDauTxsMyQuery(
    $address1: [String!]
    $address2: [String!]
    $address3: [String!]
  ) {
    ethereum(network: bsc) {
      smartContractCalls(
        options: { desc: "date.date" }
        date: { in: "2021-02-25" }
      ) {
        date {
          date(format: "%Y-%m-%d")
        }
        one_inch_external: count(
          uniq: callers
          smartContractAddress: { in: $address1 }
          external: true
        )
        one_inch_internal: count(
          uniq: callers
          smartContractAddress: { in: $address1 }
          external: false
        )
        ACryptoS: count(uniq: callers, smartContractAddress: { in: $address2 })
        bDollar: count(uniq: callers, smartContractAddress: { in: $address3 })
      }
    }
  }
`
export const TradesForAPairOnThePancakedex = gql`
  query TradesForAPairOnThePancakedex {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "block.height" }
        exchangeName: { is: "Pancake" }
        smartContractAddress: {
          is: "0xbd1ec00b0d1cca9d5b28fbe0bb7d664238af2ffa"
        }
        height: { between: [6601336, 6603500] }
      ) {
        transaction {
          hash
          index
        }
        timeInterval {
          second
        }
        block {
          height
        }
        buyAmount
        buyCurrency {
          symbol
          address
        }
        sellAmount
        sellCurrency {
          symbol
          address
        }
      }
    }
  }
`
export const PriceForTokenOnBscPancake = gql`
  query PriceForTokenOnBscPancake {
    ethereum(network: bsc) {
      count0: dexTrades(
        exchangeName: { is: "Pancake" }
        options: { limit: 9, asc: "quoteCurrency.symbol" }
        baseCurrency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
        quoteCurrency: { is: "0x81a2ac1a5ee681af6113ed440f1e378d46c23ef2" }
      ) {
        quoteCurrency {
          symbol
          name
          address
        }
        baseCurrency {
          symbol
          address
          name
        }
        baseAmount
        quoteAmount
        trades: count
        quotePrice
        median_price: quotePrice(calculate: median)
      }
      count2: dexTrades(
        exchangeName: { is: "Pancake" }
        options: { limit: 9, asc: "quoteCurrency.symbol" }
        baseCurrency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
        quoteCurrency: {
          in: [
            "0xd8f90438DDd9e99B581F49257D078E8E39fC5e31"
            "0x9b93c29595dd603f75854eba3c5f4ee078ee4454"
            "0x72eb1afddb5652e0f5c7b9a6cc1c3241348b16c6"
            "0x98fc5b3a39d712fa5a826df4f9c47bb6c0f6f8a9"
          ]
        }
      ) {
        quoteCurrency {
          symbol
          name
          address
        }
        baseCurrency {
          symbol
          address
          name
        }
        baseAmount
        quoteAmount
        trades: count
        quotePrice
        median_price: quotePrice(calculate: median)
      }
    }
  }
`
export const QuerySmartcontractEventsForATransactionHash = gql`
  query QuerySmartcontractEventsForATransactionHash(
    $network: EthereumNetwork!
    $address: String!
    $limit: Int!
    $offset: Int!
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      smartContractCalls(
        options: {
          desc: "block.timestamp.time"
          limit: $limit
          offset: $offset
        }
        date: { since: "2021-03-01", till: $till }
        txHash: { is: $address }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        smartContractMethod {
          name
          signatureHash
        }
        smartContract {
          contractType
        }
        address: caller {
          address
          annotation
        }
        transaction {
          hash
        }
        gasValue
        external
      }
    }
  }
`
export const TokenInfo = gql`
  query TokenInfo(
    $network: EthereumNetwork!
    $tokens: [String!]
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      transfers(
        currency: { in: $tokens }
        amount: { gt: 0 }
        date: { since: $from, till: $till }
      ) {
        currency {
          symbol
          name
          address
        }
        median: amount(calculate: median)
        average: amount(calculate: average)
        amount
        count
        days: count(uniq: dates)
        sender_count: count(uniq: senders)
        receiver_count: count(uniq: receivers)
        min_date: minimum(of: time)
        max_date: maximum(of: time)
      }
    }
  }
`
export const Rebasedittomoney = gql`
  query Rebasedittomoney {
    ethereum(network: bsc) {
      smartContractEvents(
        options: { desc: "block.height", limit: 21 }
        smartContractAddress: {
          is: "0xdaE0B6F111c62010a8dC6A003B02053C004cFFc1"
        }
      ) {
        transaction {
          hash
        }
        block {
          height
          timestamp {
            iso8601
            unixtime
          }
        }
        eventIndex
        arguments {
          value
          argument
        }
      }
    }
  }
`
export const BnbVsBusd = gql`
  query BnbVsBusd {
    ethereum(network: bsc) {
      dexTrades(
        baseCurrency: { is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
        time: { after: "2021-04-08T06:00:00Z" }
      ) {
        baseCurrency {
          address
          symbol
        }
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
        timeInterval {
          minute(format: "%FT%TZ", count: 60)
        }
      }
    }
  }
`
export const FilecoinMessages = gql`
  query FilecoinMessages {
    filecoin {
      by_method: messages(options: { desc: "count" }) {
        count
        method {
          name
        }
      }
    }
  }
`
export const QuerymarketstatsGet_Markets_Stats = gql`
  query QuerymarketstatsGET_MARKETS_STATS(
    $base: String!
    $dates: [ISO8601DateTime!]
  ) {
    ethereum(network: ethereum) {
      dexTrades(
        baseCurrency: { is: $base }
        date: { between: $dates }
        tradeAmountUsd: { gt: 10 }
        priceAsymmetry: { lt: 0.05 }
      ) {
        baseCurrency {
          symbol
          address
        }
        baseAmount
        baseAmountUSD: baseAmount(in: USD)
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        quoteAmountUSD: quoteAmount(in: USD)
        trades: count
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const LatestPriceOfATokenOnPancakeswap = gql`
  query LatestPriceOfATokenOnPancakeswap {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 2, desc: "block.timestamp.time" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" }
        quoteCurrency: { is: "0x92a42db88ed0f02c71d439e55962ca7cab0168b5" }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
      }
    }
  }
`
export const MelloBurnMelloFellow = gql`
  query MelloBurnMelloFellow {
    ethereum(network: bsc) {
      address(address: { is: "0x000000000000000000000000000000000000dead" }) {
        balances(
          currency: { is: "0x651bfbb26455294408aabc61a7adf427bf149898" }
        ) {
          currency {
            address
            symbol
            tokenType
          }
          value
        }
      }
    }
  }
`
export const YearnEventsOverTime = gql`
  query YearnEventsOverTime($network: EthereumNetwork!) {
    ethereum(network: $network) {
      smartContractEvents(
        smartContractAddress: {
          is: "0x986b4AFF588a109c09B50A03f42E4110E29D353F"
        }
        smartContractEvent: { is: "StrategyReported" }
        options: { limit: 100 }
      ) {
        eventIndex
        arguments {
          argument
          argumentType
          index
          value
        }
        transaction {
          hash
        }
      }
    }
  }
`
export const DexTradingvolCombineSameSymbol = gql`
  query DexTradingvolCombineSameSymbol($symbol1: [String!]) {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "USD" }
        date: { in: "2021-01-01" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { in: $symbol1 }
      ) {
        date {
          date
        }
        exchange {
          name
          address {
            address
          }
        }
        buyCurrency {
          address
          symbol
        }
        sellCurrency {
          address
          symbol
        }
        USD: tradeAmount(in: USD)
        BTC: tradeAmount(in: BTC)
        ETH: tradeAmount(in: ETH)
        USDT: tradeAmount(in: USDT)
        count
      }
    }
  }
`
export const PancakePairTradingvol = gql`
  query PancakePairTradingvol {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "USD", limitBy: { each: "date.date", limit: 100 } }
        exchangeName: { is: "Pancake" }
        baseCurrency: {
          in: [
            "0xe9e7cea3dedca5984780bafc599bd69add087d56"
            "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
            "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"
            "0x55d398326f99059fF775485246999027B3197955"
            "0x57067a6bd75c0e95a6a5f158455926e43e79beb0"
            "0xe9e7cea3dedca5984780bafc599bd69add087d56"
            "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
            "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd"
            "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7"
            "0x7083609fce4d1d8dc0c979aab8c869ea2c873402"
            "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f"
            "0x111111111117dc0aa78b770fa6a738034120c302"
            "0x4197c6ef3879a08cd51e5560da5064b773aa1d29"
            "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389"
            "0x83d69ef5c9837e21e2389d47d791714f5771f29b"
            "0xeb7dc7b3bff60a450eff31edf1330355361ea5ad"
            "0x49440376254290b3264183807a16450457f02b28"
            "0xd3debe4a971e4492d0d61ab145468a5b2c23301b"
            "0x72faa679e1008ad8382959ff48e392042a8b06f7"
            "0x8f0528ce5ef7b51152a59745befdd91d97091d2f"
            "0xa184088a740c695e156f91f5cc086a06bb78b827"
            "0xe02df9e3e622debdd69fb838bb799e3f168902c5"
            "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454"
            "0x0d9319565be7f53cefe84ad201be3f40feae2740"
            "0xca3f508b8e4dd382ee878a314789373d80a5190a"
            "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830"
            "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4"
            "0x250632378e573c6be1ac2f97fcdf00515d0aa91b"
            "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8"
            "0xba2ae424d960c26247dd6c32edc70b295c744c43"
            "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
            "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
            "0x55d398326f99059ff775485246999027b3197955"
            "0x48dc0190df5ece990c649a7a07ba19d3650a9572"
            "0xf388ee045cab30321db3fb69eab7dfb0c20f10ec"
            "0x5ac52ee5b2a633895292ff6d8a89bb9190451587"
            "0x78650b139471520656b9e7aa7a5e9276814a38e9"
            "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51"
            "0xc40c9a843e1c6d01b7578284a9028854f6683b1b"
            "0xbc5609612b7c44bef426de600b5fd1379db2ecf1"
            "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c"
            "0x80d5f92c2c8c682070c95495313ddb680b267320"
            "0x25e9d05365c867e59c1904e7463af9f312296f9e"
            "0xab301dae71f5b386c566f484e636aee60318f12f"
            "0x233d91a0713155003fc4dce0afa871b508b3b715"
            "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2"
            "0xe6df05ce8c8301223373cf5b969afcb1498c5528"
            "0x658a109c5900bc6d2357c87549b651670e5b0539"
            "0xf952fc3ca7325cc27d15885d37117676d25bfda6"
            "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8"
            "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a"
            "0x10702bebd7d15507f4ed2078bc76da44d3bef060"
            "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75"
            "0x7979f6c54eba05e18ded44c4f986f49a5de551c2"
            "0x23e8a70534308a4aaf76fb8c32ec13d17a3bd89e"
            "0x762539b45a1dcce3d36d080f74d1aed37844b878"
            "0x35e869b7456462b81cdb5e6e42434bd27f3f788c"
            "0x242e46490397acca94ed930f2c4edf16250237fa"
            "0xeccf35f941ab67ffcaa9a1265c2ff88865caa005"
            "0x23396cf899ca06c4472205fc903bdb4de249d6fc"
            "0xffbdb9bdcae97a962535479bb96cc2778d65f4dd"
            "0x7d5f9f8cf59986743f34bc137fc197e2e22b7b05"
            "0x41d74991509318517226755e508695c4d1ce43a6"
            "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9"
            "0x900aeb8c40b26a8f8dfaf283f884b03ee7abb3ec"
            "0x62d71b23bf15218c7d2d7e48dbbd9e9c650b173f"
            "0xf215a127a196e3988c09d052e16bcfd365cd7aa3"
            "0xa04f060077d90fe2647b61e4da4ad1f97d6649dc"
            "0x1cb4183ac708e07511ac57a2e45a835f048d7c56"
            "0x7426ab52a0e057691e2544fae9c8222e958b2cfb"
            "0x0ab06caa3ca5d6299925efaa752a2d2154ece929"
            "0x3947b992dc0147d2d89df0392213781b04b25075"
            "0xca2f75930912b85d8b2914ad06166483c0992945"
            "0x1658aed6c7dbab2ddbd8f5d898b0e9eab0305813"
            "0x211e763d0b9311c08ec92d72ddc20ab024b6572a"
            "0x9cddf33466ce007676c827c76e799f5109f1843c"
            "0x92e744307694ece235cd02e82680ec37c657d23e"
            "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6"
            "0x4131b87f74415190425ccd873048c708f8005823"
            "0xa1303e6199b319a891b79685f0537d289af1fc83"
            "0xd7410c38a86dcf3d5ec0f75e9763111e07d9c95b"
            "0x7e3656fccf19583dc432fb3af813e53ea566814b"
            "0xf8645e8f6d7f88bdb2ae7fabdeb315f9259be5b0"
            "0xbfa0841f7a90c4ce6643f651756ee340991f99d5"
            "0x2eb5ecc40e403b12ee4428d70fddf34e2c2c27b0"
            "0xb9784c1633ef3b839563b988c323798634714368"
            "0x8b09b6eb1d263644a267dfb2b2bc8d6b0fb72e7d"
            "0x1a2fb0af670d0234c2857fad35b789f8cb725584"
            "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e"
            "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb"
            "0xb0a51d5e242b6a86420ec34660b14d8b9cd4d5fc"
            "0x541e619858737031a1244a5d0cd47e5ef480342c"
            "0x849233ff1aea15d80ef658b2871664c9ca994063"
            "0x37109a51e712471bd2c72d8d70718627e7ff0032"
            "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb"
            "0x4b0f1812e5df2a09796481ff14017e6005508003"
            "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0"
            "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d"
            "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0"
            "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7"
            "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b"
            "0x95c78222b3d6e262426483d42cfa53685a67ab9d"
            "0xa07c5b74c9b40447a954e1466938b865b6bbea36"
            "0xeca88125a5adbe82614ffc12d0db554e2e2867c8"
            "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8"
            "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1"
            "0x972207a639cc1b374b893cc33fa251b55ceb7c07"
            "0x1610bc33319e9398de5f57b33a5b184c806ad217"
            "0xf91d58b5ae142dacc749f58a49fcbac340cb0343"
            "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f"
            "0xfd5840cd36d94d7229439859c0112a4185bc0255"
            "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b"
            "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63"
            "0x4f0ed527e8a95ecaa132af214dfd41f30b361600"
            "0x3f515f0a8e93f2e2f891ceeb3db4e62e202d7110"
            "0x44754455564474a89358b2c2265883df993b12f0"
            "0x55d398326f99059ff775485246999027b3197955"
          ]
        }
        quoteCurrency: {
          notIn: [
            "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
            "0x131224bb0270bc4b9bcd0e8216e0c6a7047af48a"
            "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51"
            "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f"
            "0x111111111117dc0aa78b770fa6a738034120c302"
            "0x57067a6bd75c0e95a6a5f158455926e43e79beb0"
            "0x4197c6ef3879a08cd51e5560da5064b773aa1d29"
            "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389"
            "0x83d69ef5c9837e21e2389d47d791714f5771f29b"
            "0xeb7dc7b3bff60a450eff31edf1330355361ea5ad"
            "0x49440376254290b3264183807a16450457f02b28"
            "0xd3debe4a971e4492d0d61ab145468a5b2c23301b"
            "0x72faa679e1008ad8382959ff48e392042a8b06f7"
            "0x8f0528ce5ef7b51152a59745befdd91d97091d2f"
            "0xa184088a740c695e156f91f5cc086a06bb78b827"
            "0xe02df9e3e622debdd69fb838bb799e3f168902c5"
            "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454"
            "0x0d9319565be7f53cefe84ad201be3f40feae2740"
            "0xca3f508b8e4dd382ee878a314789373d80a5190a"
            "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830"
            "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4"
            "0x250632378e573c6be1ac2f97fcdf00515d0aa91b"
            "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8"
            "0xba2ae424d960c26247dd6c32edc70b295c744c43"
            "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
            "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
            "0x55d398326f99059ff775485246999027b3197955"
            "0x48dc0190df5ece990c649a7a07ba19d3650a9572"
            "0xf388ee045cab30321db3fb69eab7dfb0c20f10ec"
            "0x5ac52ee5b2a633895292ff6d8a89bb9190451587"
            "0x78650b139471520656b9e7aa7a5e9276814a38e9"
            "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51"
            "0xc40c9a843e1c6d01b7578284a9028854f6683b1b"
            "0xbc5609612b7c44bef426de600b5fd1379db2ecf1"
            "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c"
            "0x80d5f92c2c8c682070c95495313ddb680b267320"
            "0x25e9d05365c867e59c1904e7463af9f312296f9e"
            "0xab301dae71f5b386c566f484e636aee60318f12f"
            "0x233d91a0713155003fc4dce0afa871b508b3b715"
            "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2"
            "0xe6df05ce8c8301223373cf5b969afcb1498c5528"
            "0x658a109c5900bc6d2357c87549b651670e5b0539"
            "0xf952fc3ca7325cc27d15885d37117676d25bfda6"
            "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8"
            "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a"
            "0x10702bebd7d15507f4ed2078bc76da44d3bef060"
            "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75"
            "0x7979f6c54eba05e18ded44c4f986f49a5de551c2"
            "0x23e8a70534308a4aaf76fb8c32ec13d17a3bd89e"
            "0x762539b45a1dcce3d36d080f74d1aed37844b878"
            "0x35e869b7456462b81cdb5e6e42434bd27f3f788c"
            "0x242e46490397acca94ed930f2c4edf16250237fa"
            "0xeccf35f941ab67ffcaa9a1265c2ff88865caa005"
            "0x23396cf899ca06c4472205fc903bdb4de249d6fc"
            "0xffbdb9bdcae97a962535479bb96cc2778d65f4dd"
            "0x7d5f9f8cf59986743f34bc137fc197e2e22b7b05"
            "0x41d74991509318517226755e508695c4d1ce43a6"
            "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9"
            "0x900aeb8c40b26a8f8dfaf283f884b03ee7abb3ec"
            "0x62d71b23bf15218c7d2d7e48dbbd9e9c650b173f"
            "0xf215a127a196e3988c09d052e16bcfd365cd7aa3"
            "0xa04f060077d90fe2647b61e4da4ad1f97d6649dc"
            "0x1cb4183ac708e07511ac57a2e45a835f048d7c56"
            "0x7426ab52a0e057691e2544fae9c8222e958b2cfb"
            "0x0ab06caa3ca5d6299925efaa752a2d2154ece929"
            "0x3947b992dc0147d2d89df0392213781b04b25075"
            "0xca2f75930912b85d8b2914ad06166483c0992945"
            "0x1658aed6c7dbab2ddbd8f5d898b0e9eab0305813"
            "0x211e763d0b9311c08ec92d72ddc20ab024b6572a"
            "0x9cddf33466ce007676c827c76e799f5109f1843c"
            "0x92e744307694ece235cd02e82680ec37c657d23e"
            "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6"
            "0x4131b87f74415190425ccd873048c708f8005823"
            "0xa1303e6199b319a891b79685f0537d289af1fc83"
            "0xd7410c38a86dcf3d5ec0f75e9763111e07d9c95b"
            "0x7e3656fccf19583dc432fb3af813e53ea566814b"
            "0xf8645e8f6d7f88bdb2ae7fabdeb315f9259be5b0"
            "0xbfa0841f7a90c4ce6643f651756ee340991f99d5"
            "0x2eb5ecc40e403b12ee4428d70fddf34e2c2c27b0"
            "0xb9784c1633ef3b839563b988c323798634714368"
            "0x8b09b6eb1d263644a267dfb2b2bc8d6b0fb72e7d"
            "0x1a2fb0af670d0234c2857fad35b789f8cb725584"
            "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e"
            "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb"
            "0xb0a51d5e242b6a86420ec34660b14d8b9cd4d5fc"
            "0x541e619858737031a1244a5d0cd47e5ef480342c"
            "0x849233ff1aea15d80ef658b2871664c9ca994063"
            "0x37109a51e712471bd2c72d8d70718627e7ff0032"
            "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb"
            "0x4b0f1812e5df2a09796481ff14017e6005508003"
            "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0"
            "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d"
            "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0"
            "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7"
            "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b"
            "0x95c78222b3d6e262426483d42cfa53685a67ab9d"
            "0xa07c5b74c9b40447a954e1466938b865b6bbea36"
            "0xeca88125a5adbe82614ffc12d0db554e2e2867c8"
            "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8"
            "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1"
            "0x972207a639cc1b374b893cc33fa251b55ceb7c07"
            "0x1610bc33319e9398de5f57b33a5b184c806ad217"
            "0xf91d58b5ae142dacc749f58a49fcbac340cb0343"
            "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f"
            "0xfd5840cd36d94d7229439859c0112a4185bc0255"
            "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b"
            "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63"
            "0x4f0ed527e8a95ecaa132af214dfd41f30b361600"
            "0x3f515f0a8e93f2e2f891ceeb3db4e62e202d7110"
            "0x44754455564474a89358b2c2265883df993b12f0"
            "0x7083609fce4d1d8dc0c979aab8c869ea2c873402"
            "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7"
            "0x55d398326f99059ff775485246999027b3197955"
            "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd"
            "0x55d398326f99059fF775485246999027B3197955"
          ]
        }
      ) {
        date {
          date
        }
        exchange {
          name
          address {
            address
          }
        }
        baseCurrency {
          address
          symbol
        }
        quoteCurrency {
          address
          symbol
        }
        USD: tradeAmount(in: USD, calculate: sum)
        USD_Avg: tradeAmount(in: USD, calculate: average)
        USD_Med: tradeAmount(in: USD, calculate: median)
        BTC: tradeAmount(in: BTC)
        USDT: tradeAmount(in: USDT)
        Takers: count(uniq: takers)
        Trades: count
        Trades_greater_10k: count(tradeAmountUsd: { gt: 10000 })
        Trades_greater_50k: count(tradeAmountUsd: { gt: 50000 })
        Trades_greater_100k: count(tradeAmountUsd: { gt: 100000 })
        Trades_greater_500k: count(tradeAmountUsd: { gt: 500000 })
      }
    }
  }
`
export const Shitshow = gql`
  query Shitshow {
    ethereum(network: bsc) {
      arguments(
        smartContractAddress: {
          is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
        }
        smartContractEvent: { is: "PairCreated" }
        argument: { not: "pair" }
        options: { desc: "block.height", limit: 100 }
      ) {
        block {
          height
          timestamp {
            unixtime
          }
        }
        argument {
          name
          type
        }
        reference {
          address
          smartContract {
            currency {
              name
            }
          }
        }
      }
    }
  }
`
export const PancakeDailyTradingvol = gql`
  query PancakeDailyTradingvol {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "USD" }
        exchangeName: { is: "Pancake" }
        date: { after: "2021-03-24" }
      ) {
        date {
          date
        }
        exchange {
          name
          address {
            address
          }
        }
        USD: tradeAmount(in: USD)
        BTC: tradeAmount(in: BTC)
        ETH: tradeAmount(in: ETH)
        USDT: tradeAmount(in: USDT)
        count
        traders: count(uniq: senders)
        smartContract {
          currency {
            symbol
          }
        }
      }
    }
  }
`
export const DexAssetPriceIndex = gql`
  query DexAssetPriceIndex(
    $baseAddress: String!
    $quoteAddress: String!
    $connector1: String!
    $from: ISO8601DateTime!
    $interval: Int
  ) {
    ethereum(network: ethereum) {
      dexTrades(
        any: [
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $quoteAddress }
          }
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $connector1 }
          }
          {
            baseCurrency: { is: $connector1 }
            quoteCurrency: { is: $quoteAddress }
          }
        ]
        date: { since: $from }
        tradeAmountUsd: { gt: 10 }
      ) {
        timeInterval {
          minute(format: "%FT%TZ", count: $interval)
        }
        buyCurrency: baseCurrency {
          symbol
          address
        }
        buyAmount: baseAmount
        buyAmountInUsd: baseAmount
        sellCurrency: quoteCurrency {
          symbol
          address
        }
        sellAmountInUsd: quoteAmount
        tradeAmount(in: USD)
        volume: quoteAmount
        trades: count
        averageQuotePrice: quotePrice(calculate: average)
      }
    }
  }
`
export const PancakeswapVolumePair = gql`
  query PancakeswapVolumePair {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "count" }
        smartContractAddress: {
          is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
        }
        date: { since: "2020-12-12", till: "2020-12-12" }
      ) {
        count
        tradeAmount(in: USD)
      }
    }
  }
`
export const UniswapOhlcData5MinuteCandleUsdtwethv0v1 = gql`
  query UniswapOhlcData5MinuteCandleUsdtwethv0v1 {
    ethereum(network: ethereum) {
      dexTrades(
        options: { limit: 5, asc: "timeInterval.minute" }
        date: { since: "2020-11-01" }
        exchangeName: { is: "Uniswap" }
        baseCurrency: { is: "0x95b3497bBcCcc46a8F45F5Cf54b0878b39f8D96C" }
        quoteCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      ) {
        timeInterval {
          minute(count: 5)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const JudeQuery = gql`
  query JudeQuery {
    ethereum(network: bsc) {
      dexTrades(
        options: {
          limitBy: { limit: 2, each: "baseCurrency.address" }
          desc: "timeInterval.minute"
        }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xdf6b2112c9d7ec7ea9f65a23a2e8e5bec562426f" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
      ) {
        timeInterval {
          minute(count: 1)
          day(count: 1)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const JudeQueryv0 = gql`
  query JudeQueryv0 {
    ethereum(network: bsc) {
      dexTrades(
        options: {
          limitBy: { limit: 2, each: "baseCurrency.address" }
          desc: "timeInterval.minute"
        }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xdf6b2112c9d7ec7ea9f65a23a2e8e5bec562426f" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
      ) {
        timeInterval {
          minute(count: 1)
          day(count: 1)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const FilecoinUniqueMinersByDay = gql`
  query FilecoinUniqueMinersByDay {
    filecoin {
      blocks {
        date {
          date
        }
        uniq_miners: count(uniq: miners)
      }
    }
  }
`
export const FilecoinAverageMessageCostPerDay = gql`
  query FilecoinAverageMessageCostPerDay {
    filecoin {
      messages {
        date {
          date
        }
        average_cost: totalCost(calculate: average)
      }
    }
  }
`
export const MidasDollarOhlc15m = gql`
  query MidasDollarOhlc15m {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 200, desc: "timeInterval.minute" }
        date: { since: "2020-11-01" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0x242E46490397ACCa94ED930F2C4EdF16250237fa" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
      ) {
        timeInterval {
          minute(count: 15)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const BinanceChainDexBnbDelegated = gql`
  query BinanceChainDexBnbDelegated(
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    binance {
      transactions(
        options: { desc: "date.date" }
        date: { since: $from, till: $till }
        transactionType: { is: SIDECHAIN_DELEGATE }
      ) {
        date {
          date
        }
        transactionSource {
          name
        }
        currency {
          address
          symbol
        }
        count
        deposit
      }
    }
  }
`
export const CeloDailyUniqueReceivers = gql`
  query CeloDailyUniqueReceivers {
    celo: ethereum(network: celo_rc1) {
      transfers(options: { limit: 30, desc: "date.date" }) {
        receiver: count(uniq: receivers)
        date: date {
          date(format: "%Y-%m-%d")
        }
      }
    }
  }
`
export const ChiTrades = gql`
  query ChiTrades(
    $network: EthereumNetwork!
    $token: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      dexTrades(
        options: { desc: "amount" }
        date: { since: $from, till: $till }
        baseCurrency: { is: $token }
      ) {
        exchange {
          fullName
        }
        date {
          date
        }
        trades: count
        takers: count(uniq: takers)
        makers: count(uniq: makers)
        amount: baseAmount
        baseCurrency {
          symbol
        }
      }
    }
  }
`
export const AlgorandDailyReceivers = gql`
  query AlgorandDailyReceivers {
    algorand {
      transfers(options: { limit: 30, desc: "date.date" }) {
        receiver: count(uniq: receivers)
        date: date {
          date(format: "%Y-%m-%d")
        }
      }
    }
  }
`
export const ConfluxDailyReceivers = gql`
  query ConfluxDailyReceivers {
    conflux {
      transfers(options: { limit: 30, desc: "date.date" }) {
        receiver: count(uniq: receivers)
        date: date {
          date(format: "%Y-%m-%d")
        }
      }
    }
  }
`
export const UsdPrice = gql`
  query UsdPrice(
    $baseAddress: String!
    $quoteAddress: String!
    $connector1: String!
    $from: ISO8601DateTime!
    $interval: Int
  ) {
    ethereum(network: ethereum) {
      dexTrades(
        any: [
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $quoteAddress }
          }
          {
            baseCurrency: { is: $baseAddress }
            quoteCurrency: { is: $connector1 }
          }
          {
            baseCurrency: { is: $connector1 }
            quoteCurrency: { is: $quoteAddress }
          }
        ]
        date: { since: $from }
        tradeAmountUsd: { gt: 10 }
      ) {
        timeInterval {
          minute(format: "%FT%TZ", count: $interval)
        }
        buyCurrency: baseCurrency {
          symbol
          address
        }
        buyAmount: baseAmount
        buyAmountInUsd: baseAmount
        sellCurrency: quoteCurrency {
          symbol
          address
        }
        sellAmountInUsd: quoteAmount
        tradeAmount(in: USD)
        volume: quoteAmount
        trades: count
        high: quotePrice(calculate: maximum)
        low: quotePrice(calculate: minimum)
        open: minimum(of: block, get: quote_price)
        close: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const PancakePairTradingvolv0 = gql`
  query PancakePairTradingvolv0 {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "USD" }
        date: { in: "2021-03-30" }
        exchangeName: { is: "Pancake" }
        quoteCurrency: {
          in: [
            "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
            ""
            "0xe9e7cea3dedca5984780bafc599bd69add087d56"
            "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
            "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f"
            "0x111111111117dc0aa78b770fa6a738034120c302"
            "0x4197c6ef3879a08cd51e5560da5064b773aa1d29"
            "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389"
            "0x83d69ef5c9837e21e2389d47d791714f5771f29b"
            "0xeb7dc7b3bff60a450eff31edf1330355361ea5ad"
            "0x49440376254290b3264183807a16450457f02b28"
            "0xd3debe4a971e4492d0d61ab145468a5b2c23301b"
            "0x72faa679e1008ad8382959ff48e392042a8b06f7"
            "0x8f0528ce5ef7b51152a59745befdd91d97091d2f"
            "0xa184088a740c695e156f91f5cc086a06bb78b827"
            "0xe02df9e3e622debdd69fb838bb799e3f168902c5"
            "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454"
            "0x0d9319565be7f53cefe84ad201be3f40feae2740"
            "0xca3f508b8e4dd382ee878a314789373d80a5190a"
            "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830"
            "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4"
            "0x250632378e573c6be1ac2f97fcdf00515d0aa91b"
            "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8"
            "0xba2ae424d960c26247dd6c32edc70b295c744c43"
            "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
            "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
            "0x55d398326f99059ff775485246999027b3197955"
            "0x48dc0190df5ece990c649a7a07ba19d3650a9572"
            "0xf388ee045cab30321db3fb69eab7dfb0c20f10ec"
            "0x5ac52ee5b2a633895292ff6d8a89bb9190451587"
            "0x78650b139471520656b9e7aa7a5e9276814a38e9"
            "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51"
            "0xc40c9a843e1c6d01b7578284a9028854f6683b1b"
            "0xbc5609612b7c44bef426de600b5fd1379db2ecf1"
            "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c"
            "0x80d5f92c2c8c682070c95495313ddb680b267320"
            "0x25e9d05365c867e59c1904e7463af9f312296f9e"
            "0xab301dae71f5b386c566f484e636aee60318f12f"
            "0x233d91a0713155003fc4dce0afa871b508b3b715"
            "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2"
            "0xe6df05ce8c8301223373cf5b969afcb1498c5528"
            "0x658a109c5900bc6d2357c87549b651670e5b0539"
            "0xf952fc3ca7325cc27d15885d37117676d25bfda6"
            "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8"
            "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a"
            "0x10702bebd7d15507f4ed2078bc76da44d3bef060"
            "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75"
            "0x7979f6c54eba05e18ded44c4f986f49a5de551c2"
            "0x23e8a70534308a4aaf76fb8c32ec13d17a3bd89e"
            "0x762539b45a1dcce3d36d080f74d1aed37844b878"
            "0x35e869b7456462b81cdb5e6e42434bd27f3f788c"
            "0x242e46490397acca94ed930f2c4edf16250237fa"
            "0xeccf35f941ab67ffcaa9a1265c2ff88865caa005"
            "0x23396cf899ca06c4472205fc903bdb4de249d6fc"
            "0xffbdb9bdcae97a962535479bb96cc2778d65f4dd"
            "0x7d5f9f8cf59986743f34bc137fc197e2e22b7b05"
            "0x41d74991509318517226755e508695c4d1ce43a6"
            "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9"
            "0x900aeb8c40b26a8f8dfaf283f884b03ee7abb3ec"
            "0x62d71b23bf15218c7d2d7e48dbbd9e9c650b173f"
            "0xf215a127a196e3988c09d052e16bcfd365cd7aa3"
            "0xa04f060077d90fe2647b61e4da4ad1f97d6649dc"
            "0x1cb4183ac708e07511ac57a2e45a835f048d7c56"
            "0x7426ab52a0e057691e2544fae9c8222e958b2cfb"
            "0x0ab06caa3ca5d6299925efaa752a2d2154ece929"
            "0x3947b992dc0147d2d89df0392213781b04b25075"
            "0xca2f75930912b85d8b2914ad06166483c0992945"
            "0x1658aed6c7dbab2ddbd8f5d898b0e9eab0305813"
            "0x211e763d0b9311c08ec92d72ddc20ab024b6572a"
            "0x9cddf33466ce007676c827c76e799f5109f1843c"
            "0x92e744307694ece235cd02e82680ec37c657d23e"
            "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6"
            "0x4131b87f74415190425ccd873048c708f8005823"
            "0xa1303e6199b319a891b79685f0537d289af1fc83"
            "0xd7410c38a86dcf3d5ec0f75e9763111e07d9c95b"
            "0x7e3656fccf19583dc432fb3af813e53ea566814b"
            "0xf8645e8f6d7f88bdb2ae7fabdeb315f9259be5b0"
            "0xbfa0841f7a90c4ce6643f651756ee340991f99d5"
            "0x2eb5ecc40e403b12ee4428d70fddf34e2c2c27b0"
            "0xb9784c1633ef3b839563b988c323798634714368"
            "0x8b09b6eb1d263644a267dfb2b2bc8d6b0fb72e7d"
            "0x1a2fb0af670d0234c2857fad35b789f8cb725584"
            "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e"
            "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb"
            "0xb0a51d5e242b6a86420ec34660b14d8b9cd4d5fc"
            "0x541e619858737031a1244a5d0cd47e5ef480342c"
            "0x849233ff1aea15d80ef658b2871664c9ca994063"
            "0x37109a51e712471bd2c72d8d70718627e7ff0032"
            "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb"
            "0x4b0f1812e5df2a09796481ff14017e6005508003"
            "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0"
            "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d"
            "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0"
            "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7"
            "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b"
            "0x95c78222b3d6e262426483d42cfa53685a67ab9d"
            "0xa07c5b74c9b40447a954e1466938b865b6bbea36"
            "0xeca88125a5adbe82614ffc12d0db554e2e2867c8"
            "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8"
            "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1"
            "0x972207a639cc1b374b893cc33fa251b55ceb7c07"
            "0x1610bc33319e9398de5f57b33a5b184c806ad217"
            "0xf91d58b5ae142dacc749f58a49fcbac340cb0343"
            "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f"
            "0xfd5840cd36d94d7229439859c0112a4185bc0255"
            "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b"
            "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63"
            "0x4f0ed527e8a95ecaa132af214dfd41f30b361600"
            "0x3f515f0a8e93f2e2f891ceeb3db4e62e202d7110"
            "0x44754455564474a89358b2c2265883df993b12f0"
            "0x7083609fce4d1d8dc0c979aab8c869ea2c873402"
            "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7"
            "0x55d398326f99059ff775485246999027b3197955"
            "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd"
            "0x55d398326f99059fF775485246999027B3197955"
          ]
        }
        baseCurrency: {
          notIn: [
            "0xe9e7cea3dedca5984780bafc599bd69add087d56"
            "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
            "0x55d398326f99059fF775485246999027B3197955"
            "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
            "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd"
            "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7"
            "0x7083609fce4d1d8dc0c979aab8c869ea2c873402"
            "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f"
            "0x111111111117dc0aa78b770fa6a738034120c302"
            "0x4197c6ef3879a08cd51e5560da5064b773aa1d29"
            "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389"
            "0x83d69ef5c9837e21e2389d47d791714f5771f29b"
            "0xeb7dc7b3bff60a450eff31edf1330355361ea5ad"
            "0x49440376254290b3264183807a16450457f02b28"
            "0xd3debe4a971e4492d0d61ab145468a5b2c23301b"
            "0x72faa679e1008ad8382959ff48e392042a8b06f7"
            "0x8f0528ce5ef7b51152a59745befdd91d97091d2f"
            "0xa184088a740c695e156f91f5cc086a06bb78b827"
            "0xe02df9e3e622debdd69fb838bb799e3f168902c5"
            "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454"
            "0x0d9319565be7f53cefe84ad201be3f40feae2740"
            "0xca3f508b8e4dd382ee878a314789373d80a5190a"
            "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830"
            "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4"
            "0x250632378e573c6be1ac2f97fcdf00515d0aa91b"
            "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8"
            "0xba2ae424d960c26247dd6c32edc70b295c744c43"
            "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
            "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
            "0x55d398326f99059ff775485246999027b3197955"
            "0x48dc0190df5ece990c649a7a07ba19d3650a9572"
            "0xf388ee045cab30321db3fb69eab7dfb0c20f10ec"
            "0x5ac52ee5b2a633895292ff6d8a89bb9190451587"
            "0x78650b139471520656b9e7aa7a5e9276814a38e9"
            "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51"
            "0xc40c9a843e1c6d01b7578284a9028854f6683b1b"
            "0xbc5609612b7c44bef426de600b5fd1379db2ecf1"
            "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c"
            "0x80d5f92c2c8c682070c95495313ddb680b267320"
            "0x25e9d05365c867e59c1904e7463af9f312296f9e"
            "0xab301dae71f5b386c566f484e636aee60318f12f"
            "0x233d91a0713155003fc4dce0afa871b508b3b715"
            "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2"
            "0xe6df05ce8c8301223373cf5b969afcb1498c5528"
            "0x658a109c5900bc6d2357c87549b651670e5b0539"
            "0xf952fc3ca7325cc27d15885d37117676d25bfda6"
            "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8"
            "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a"
            "0x10702bebd7d15507f4ed2078bc76da44d3bef060"
            "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75"
            "0x7979f6c54eba05e18ded44c4f986f49a5de551c2"
            "0x23e8a70534308a4aaf76fb8c32ec13d17a3bd89e"
            "0x762539b45a1dcce3d36d080f74d1aed37844b878"
            "0x35e869b7456462b81cdb5e6e42434bd27f3f788c"
            "0x242e46490397acca94ed930f2c4edf16250237fa"
            "0xeccf35f941ab67ffcaa9a1265c2ff88865caa005"
            "0x23396cf899ca06c4472205fc903bdb4de249d6fc"
            "0xffbdb9bdcae97a962535479bb96cc2778d65f4dd"
            "0x7d5f9f8cf59986743f34bc137fc197e2e22b7b05"
            "0x41d74991509318517226755e508695c4d1ce43a6"
            "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9"
            "0x900aeb8c40b26a8f8dfaf283f884b03ee7abb3ec"
            "0x62d71b23bf15218c7d2d7e48dbbd9e9c650b173f"
            "0xf215a127a196e3988c09d052e16bcfd365cd7aa3"
            "0xa04f060077d90fe2647b61e4da4ad1f97d6649dc"
            "0x1cb4183ac708e07511ac57a2e45a835f048d7c56"
            "0x7426ab52a0e057691e2544fae9c8222e958b2cfb"
            "0x0ab06caa3ca5d6299925efaa752a2d2154ece929"
            "0x3947b992dc0147d2d89df0392213781b04b25075"
            "0xca2f75930912b85d8b2914ad06166483c0992945"
            "0x1658aed6c7dbab2ddbd8f5d898b0e9eab0305813"
            "0x211e763d0b9311c08ec92d72ddc20ab024b6572a"
            "0x9cddf33466ce007676c827c76e799f5109f1843c"
            "0x92e744307694ece235cd02e82680ec37c657d23e"
            "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6"
            "0x4131b87f74415190425ccd873048c708f8005823"
            "0xa1303e6199b319a891b79685f0537d289af1fc83"
            "0xd7410c38a86dcf3d5ec0f75e9763111e07d9c95b"
            "0x7e3656fccf19583dc432fb3af813e53ea566814b"
            "0xf8645e8f6d7f88bdb2ae7fabdeb315f9259be5b0"
            "0xbfa0841f7a90c4ce6643f651756ee340991f99d5"
            "0x2eb5ecc40e403b12ee4428d70fddf34e2c2c27b0"
            "0xb9784c1633ef3b839563b988c323798634714368"
            "0x8b09b6eb1d263644a267dfb2b2bc8d6b0fb72e7d"
            "0x1a2fb0af670d0234c2857fad35b789f8cb725584"
            "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e"
            "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb"
            "0xb0a51d5e242b6a86420ec34660b14d8b9cd4d5fc"
            "0x541e619858737031a1244a5d0cd47e5ef480342c"
            "0x849233ff1aea15d80ef658b2871664c9ca994063"
            "0x37109a51e712471bd2c72d8d70718627e7ff0032"
            "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb"
            "0x4b0f1812e5df2a09796481ff14017e6005508003"
            "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0"
            "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d"
            "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0"
            "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7"
            "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b"
            "0x95c78222b3d6e262426483d42cfa53685a67ab9d"
            "0xa07c5b74c9b40447a954e1466938b865b6bbea36"
            "0xeca88125a5adbe82614ffc12d0db554e2e2867c8"
            "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8"
            "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1"
            "0x972207a639cc1b374b893cc33fa251b55ceb7c07"
            "0x1610bc33319e9398de5f57b33a5b184c806ad217"
            "0xf91d58b5ae142dacc749f58a49fcbac340cb0343"
            "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f"
            "0xfd5840cd36d94d7229439859c0112a4185bc0255"
            "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b"
            "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63"
            "0x4f0ed527e8a95ecaa132af214dfd41f30b361600"
            "0x3f515f0a8e93f2e2f891ceeb3db4e62e202d7110"
            "0x44754455564474a89358b2c2265883df993b12f0"
            "0x55d398326f99059ff775485246999027b3197955"
          ]
        }
      ) {
        date {
          date
        }
        exchange {
          name
          address {
            address
          }
        }
        baseCurrency {
          address
          symbol
        }
        quoteCurrency {
          address
          symbol
        }
        USD: tradeAmount(in: USD, calculate: sum)
        USD_Avg: tradeAmount(in: USD, calculate: average)
        USD_Med: tradeAmount(in: USD, calculate: median)
        BTC: tradeAmount(in: BTC)
        USDT: tradeAmount(in: USDT)
        Takers: count(uniq: takers)
        Txs: count
        Txs_greater_10k: count(tradeAmountUsd: { gt: 10000 })
        Txs_greater_50k: count(tradeAmountUsd: { gt: 50000 })
        Txs_greater_100k: count(tradeAmountUsd: { gt: 100000 })
        Txs_greater_500k: count(tradeAmountUsd: { gt: 500000 })
      }
    }
  }
`
export const SmartcontracteventLp = gql`
  query SmartcontracteventLp {
    ethereum(network: bsc) {
      smartContractEvents(
        options: { desc: "block.height", limit: 10 }
        smartContractAddress: {
          is: "0xa527a61703d82139f8a06bc30097cc9caa2df5a6"
        }
        txHash: {
          is: "0x2f624d5a1170c2e9462edc723a73dc6d157add223ed044cfc9644e078b7d7451"
        }
      ) {
        block {
          height
          timestamp {
            unixtime
          }
        }
        transaction {
          hash
        }
        eventIndex
        arguments {
          value
          argument
          index
          argumentType
        }
        smartContractEvent {
          name
          signature
          signatureHash
        }
        date {
          date
        }
      }
    }
  }
`
export const TokenTransaction = gql`
  query TokenTransaction {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 100, asc: "timeInterval.minute" }
        date: { since: "2021-01-01" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
        quoteCurrency: { is: "0x9b93c29595dd603f75854eba3c5f4ee078ee4454" }
      ) {
        timeInterval {
          minute(count: 5)
        }
        baseCurrency {
          symbol
          address
        }
        baseAmount
        quoteCurrency {
          symbol
          address
        }
        quoteAmount
        trades: count
        quotePrice
        maximum_price: quotePrice(calculate: maximum)
        minimum_price: quotePrice(calculate: minimum)
        open_price: minimum(of: block, get: quote_price)
        close_price: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const GetPoolMultiple = gql`
  query GetPoolMultiple {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "count" }
        smartContractAddress: {
          in: [
            "0x9adc6Fb78CEFA07E13E9294F150C1E8C1Dd566c0"
            "0xD6F91E5ecFEF046A5400541770F1435747332d31"
          ]
        }
      ) {
        count
        tradeAmount(in: USD)
      }
    }
  }
`
export const TransfersLast24Hours = gql`
  query TransfersLast24Hours {
    ethereum(network: bsc) {
      transfers(
        options: { desc: "date.date" }
        currency: { is: "0x47ff6511939ab379d7756b003f61010b9eab3077" }
        date: { after: "2021-03-07" }
      ) {
        date: date {
          date(format: "%y-%m-%d %H:%M")
        }
        amount
      }
    }
  }
`
export const TokenCharting = gql`
  query TokenCharting {
    ethereum(network: bsc) {
      dexTrades(
        options: { limit: 100, asc: "timeInterval.minute" }
        date: { since: "2021-01-01" }
        exchangeName: { is: "Pancake" }
        baseCurrency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
        quoteCurrency: { is: "0x9b93c29595dd603f75854eba3c5f4ee078ee4454" }
      ) {
        timeInterval {
          minute(count: 5)
        }
        high: quotePrice(calculate: maximum)
        low: quotePrice(calculate: minimum)
        open: minimum(of: block, get: quote_price)
        close: maximum(of: block, get: quote_price)
      }
    }
  }
`
export const SnogeTransfers = gql`
  query SnogeTransfers {
    ethereum(network: ethereum) {
      transfers(
        currency: { is: "0x072c46f392e729c1f0d92a307c2c6dba06b5d078" }
      ) {
        sender {
          address
        }
        receiver {
          address
        }
        amount
      }
    }
  }
`
export const SnogeDextrades = gql`
  query SnogeDextrades {
    ethereum {
      dexTrades(
        baseCurrency: { is: "0x072c46f392e729c1f0d92a307c2c6dba06b5d078" }
      ) {
        count
        baseCurrency {
          symbol
        }
      }
    }
  }
`
export const SnogeSmartcontractswaps = gql`
  query SnogeSmartcontractswaps {
    ethereum(network: ethereum) {
      smartContractEvents(
        smartContractAddress: {
          is: "0x98904add2880c06e7a9ba444dc463d034f29ecf4"
        }
      ) {
        count(smartContractEvent: { is: "Swap" })
      }
    }
  }
`
export const HederaMessagesByTopics = gql`
  query HederaMessagesByTopics(
    $network: HederaNetwork!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
    $dateFormat: String!
  ) {
    hedera(network: $network) {
      messages(
        options: { asc: "date.date" }
        date: { since: $from, till: $till }
      ) {
        date {
          date(format: $dateFormat)
        }
        entity {
          id
        }
        count
      }
    }
  }
`
export const CopyOfGetBalanceOfHoldersPublicMyQuery = gql`
  query CopyOfGetBalanceOfHoldersPublicMyQuery {
    ethereum(network: bsc) {
      address(
        address: {
          in: [
            "0x81b688a7fc4d7fa77ab1bddaacc5cb9cee8840a7"
            "0x81bc425a457ba4e19a112c8143c1a3788056cbf0"
            "0x81eec6627003150828a60f23441ca3a0d6988887"
            "0x820aad8ec0b3f99e53e744ea9409ceafa6db4914"
            "0x82253a56825a53ebfcf4b18611521e6d24c5a9ff"
          ]
        }
      ) {
        address
        balances(
          currency: { is: "0x1CAA1e68802594EF24111ff0D10Eca592A2B5c58" }
          height: { between: [5873977, 5873979] }
        ) {
          value
        }
      }
    }
  }
`
export const QuotepricePalm = gql`
  query QuotepricePalm {
    ethereum(network: bsc) {
      dexTrades(
        baseCurrency: { is: "0x9768e5b2d8e761905bc81dfc554f9437a46cdcc6" }
        quoteCurrency: { is: "0xe9e7cea3dedca5984780bafc599bd69add087d56" }
        options: { desc: ["block.height"], limit: 1 }
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M")
            unixtime
          }
        }
        baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        quotePrice
      }
    }
  }
`
export const QueryPairOfToken = gql`
  query QueryPairOfToken {
    ethereum {
      arguments(
        smartContractAddress: {
          is: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"
        }
        smartContractEvent: { is: "PairCreated" }
        options: { desc: "block.height", limit: 3 }
      ) {
        block {
          height
        }
        argument {
          name
        }
        reference {
          address
        }
      }
    }
  }
`
export const GetCakeBnbPriceOnSpecBlock = gql`
  query GetCakeBnbPriceOnSpecBlock {
    ethereum(network: bsc) {
      dexTrades(
        baseCurrency: { is: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" }
        quoteCurrency: { is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" }
        height: { gteq: 6481098 }
        options: { asc: ["block.height", "transaction.index"], limit: 1 }
      ) {
        block {
          height
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
            unixtime
          }
        }
        transaction {
          index
        }
        baseCurrency {
          symbol
        }
        quoteCurrency {
          symbol
        }
        quotePrice
      }
    }
  }
`
export const Latest24hPancakeLpPoolsTrading = gql`
  query Latest24hPancakeLpPoolsTrading {
    ethereum(network: bsc) {
      dexTrades(
        options: { desc: "timeInterval.hour", limit: 24 }
        smartContractAddress: {
          in: [
            "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6"
            "0x86e650350c40a5178a5d014ba37fe8556232b898"
            "0x9d8b7e4a9d53654d82f12c83448d8f92732bc761"
            "0x9e642d174b14faea31d842dc83037c42b53236e6"
            "0x4576C456AF93a37a096235e5d83f812AC9aeD027"
            "0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC"
            "0xb5ab3996808c7e489dcdc0f1af2ab212ae0059af"
            "0xc1800c29cf91954357cd0bf3f0accaada3d0109c"
            "0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3"
            "0x60bB03D1010b99CEAdD0dd209b64bC8bd83da161"
            "0x66b9e1eac8a81f3752f7f3a5e95de460688a17ee"
            "0x74690f829fec83ea424ee1f1654041b2491a7be9"
            "0x3ef4952c7a9afbe374ea02d1bf5ed5a0015b7716"
            "0xffb9e2d5ce4378f1a89b29bf53f80804cc078102"
            "0x36b7d2e5c7877392fb17f9219efad56f3d794700"
            "0x6411310c07d8c48730172146fd6f31fa84034a8b"
            "0x91589786D36fEe5B27A5539CfE638a5fc9834665"
            "0xbc765fd113c5bdb2ebc25f711191b56bb8690aec"
            "0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8"
            "0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275"
            "0xbe14f3a89a4f7f279af9d99554cf12e8c29db921"
            "0x64373608f2e93ea97ad4d8ca2cce6b2575db2f55"
            "0xd6b900d5308356317299dafe303e661271aa12f1"
            "0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029"
            "0x58B58cab6C5cF158f63A2390b817710826d116D0"
            "0x470bc451810b312bbb1256f96b0895d95ea659b1"
            "0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e"
            "0x9c4f6a5050cf863e67a402e8b377973b4e3372c1"
            "0xbEA35584b9a88107102ABEf0BDeE2c4FaE5D8c31"
            "0xC743Dc05F03D25E1aF8eC5F8228f4BD25513c8d0"
            "0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d"
            "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
            "0xba51d1ab95756ca4eab8737ecd450cd8f05384cf"
            "0xc639187ef82271d8f517de6feae4faf5b517533c"
            "0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c"
            "0x981d2ba1b298888408d342c39c2ab92e8991691e"
            "0xaebe45e3a03b734c68e5557ae04bfc76917b4686"
            "0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483"
            "0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb"
            "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422"
            "0x7561EEe90e24F3b348E1087A005F78B4c8453524"
            "0x4e0f3385d932F7179DeE045369286FFa6B03d887"
            "0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd"
            "0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2"
            "0x2333c77fc0b2875c11409cdcd3c75d42d402e834"
            "0x574a978c2d0d36d707a05e459466c7a1054f1210"
            "0x56c77d59e82f33c712f919d09fceddf49660a829"
            "0x5acac332f0f49c8badc7afd0134ad19d3db972e6"
            "0x54edd846db17f43b6e43296134ecd96284671e81"
            "0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1"
            "0x4269e7F43A63CEA1aD7707Be565a94a9189967E9"
            "0x35fe9787f0ebf2a200bac413d3030cf62d312774"
            "0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6"
            "0x30479874f9320a62bce3bc0e315c920e1d73e278"
            "0x752E713fB70E3FA1Ac08bCF34485F14A986956c4"
            "0x7793870484647a7278907498ec504879d6971EAb"
            "0xd937FB9E6e47F3805981453BFB277a49FFfE04D7"
            "0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB"
            "0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67"
            "0xdc6c130299e53acd2cc2d291fa10552ca2198a6b"
            "0xeb325a8ea1c5abf40c7ceaf645596c1f943d0948"
            "0xD1F12370b2ba1C79838337648F820a87eDF5e1e6"
            "0x680dd100e4b394bda26a59dd5c119a391e747d18"
            "0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC"
            "0xff17ff314925dff772b71abdff2782bc913b3575"
            "0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd"
            "0x36b8b28d37f93372188f2aa2507b68a5cd8b2664"
            "0x4db28767d1527ba545ca5bbda1c96a94ed6ff242"
            "0x292ca56ed5b3330a19037f835af4a9c0098ea6fa"
            "0x7cd05f8b960ba071fdf69c750c0e5a57c8366500"
            "0x745c4fd226e169d6da959283275a8e0ecdd7f312"
            "0x2730bf486d658838464a4ef077880998d944252d"
            "0x970858016C963b780E06f7DCfdEf8e809919BcE8"
            "0x17580340f3daedae871a8c21d15911742ec79e0f"
            "0x0392957571f28037607c14832d16f8b653edd472"
            "0x99d865ed50d2c32c1493896810fa386c1ce81d91"
            "0xc92Dc34665c8a21f98E1E38474580b61b4f3e1b9"
            "0x852A68181f789AE6d1Da3dF101740a59A071004f"
            "0xF609ade3846981825776068a8eD7746470029D1f"
            "0xD5664D2d15cdffD597515f1c0D945c6c1D3Bf85B"
            "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
          ]
        }
      ) {
        traders: count(uniq: senders)
        trades: count
        tradeAmount(in: USD)
        timeInterval {
          hour(count: 1)
        }
      }
    }
  }
`
export const AffiliateappsTradesReceive = gql`
  query AffiliateappsTradesReceive(
    $network: EthereumNetwork!
    $limit: Int!
    $offset: Int!
    $sender: String!
    $receiver: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      transfers(
        options: { desc: "block.height", limit: $limit, offset: $offset }
        date: { since: $from, till: $till }
        amount: { gt: 0 }
        sender: { is: $sender }
        receiver: { is: $receiver }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        amountUSD: amount(in: USD)
        amount
        transaction {
          hash
        }
        external
        currency {
          address
          name
          symbol
        }
      }
    }
  }
`
export const AffiliateappsSumTradesReceive = gql`
  query AffiliateappsSumTradesReceive(
    $network: EthereumNetwork!
    $sender: String!
    $receiver: String!
    $from: ISO8601DateTime
    $till: ISO8601DateTime
  ) {
    ethereum(network: $network) {
      transfers(
        date: { since: $from, till: $till }
        amount: { gt: 0 }
        sender: { is: $sender }
        receiver: { is: $receiver }
      ) {
        amountUSD: amount(in: USD, calculate: sum)
        amount
        currency {
          address
          name
          symbol
          decimals
        }
        count(uniq: transfers)
      }
    }
  }
`
