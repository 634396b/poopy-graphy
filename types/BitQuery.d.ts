export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string. */
  BigInt: any
  /** An ISO 8601-encoded date */
  ISO8601Date: any
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any
}

/** Account */
export type Account = {
  __typename?: 'Account'
  /** Account ID */
  id: Scalars['String']
  /** Account number, the equivalent of a human-friendly public key */
  num: Scalars['Int']
  /** Realm number  */
  realmId: Scalars['Int']
  /** Shard number */
  shardId: Scalars['Int']
}

/** Blockchain address */
export type Address = {
  __typename?: 'Address'
  /** String address representation */
  address: Scalars['String']
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>
}

/** Address selector */
export type AddressSelector = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>
  /** In the list of Addresses */
  in?: Maybe<Scalars['String']>
  /** Not in the list of Addresses */
  notIn?: Maybe<Scalars['String']>
}

/** Address selector */
export type AddressSelectorIn = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>
  /** In the list of Addresses */
  in?: Maybe<Scalars['String']>
}

/** Blockchain account with address and type */
export type AddressWithAccount = {
  __typename?: 'AddressWithAccount'
  /** Account ID */
  account: Scalars['String']
  /** String address representation */
  address: Scalars['String']
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>
  /** Account type */
  type: Scalars['String']
}

/** Algorand Blockchain */
export type Algorand = {
  __typename?: 'Algorand'
  /** Basic information about address ( or smart contract ) */
  address: Array<AlgorandAddressInfo>
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<AlgorandArguments>>
  /** Blockchain Blocks */
  blocks?: Maybe<Array<AlgorandBlocks>>
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<AlgorandCoinpath>>
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<AlgorandSmartContractCalls>>
  /** Blockchain Transactions */
  transactions?: Maybe<Array<AlgorandTransactions>>
  /** Currency Transfers */
  transfers?: Maybe<Array<AlgorandTransfers>>
}

/** Algorand Blockchain */
export type AlgorandAddressArgs = {
  address: Array<AlgorandAddressSelector>
}

/** Algorand Blockchain */
export type AlgorandArgumentsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  txType?: Maybe<TxTypeSelector>
  txFrom?: Maybe<Array<AlgorandAddressSelector>>
  caller?: Maybe<Array<AlgorandAddressSelector>>
  reference?: Maybe<Array<AlgorandAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>
  argindex?: Maybe<ArgumentIndexSelector>
  any?: Maybe<Array<AlgorandArgumentFilter>>
  options?: Maybe<QueryOptions>
}

/** Algorand Blockchain */
export type AlgorandBlocksArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  proposer?: Maybe<Array<AlgorandAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  nextProtocol?: Maybe<StringIdSelector>
  currentProtocol?: Maybe<StringIdSelector>
  any?: Maybe<Array<AlgorandBlockFilter>>
  options?: Maybe<QueryOptions>
}

/** Algorand Blockchain */
export type AlgorandCoinpathArgs = {
  sender?: Maybe<AlgorandAddressSelector>
  receiver?: Maybe<AlgorandAddressSelector>
  currency?: Maybe<Array<AlgorandCurrencySelector>>
  initialAddress?: Maybe<AlgorandAddressSelector>
  initialDate?: Maybe<DateSelector>
  initialTime?: Maybe<DateTimeSelector>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  depth?: Maybe<IntegerLimitedSelector>
  options?: Maybe<CoinpathOptions>
}

/** Algorand Blockchain */
export type AlgorandSmartContractCallsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>
  txType?: Maybe<TxTypeSelector>
  any?: Maybe<Array<AlgorandSmartContractCallFilter>>
  options?: Maybe<QueryOptions>
}

/** Algorand Blockchain */
export type AlgorandTransactionsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>
  txType?: Maybe<TxTypeSelector>
  txSubtype?: Maybe<TxSubtypeSelector>
  any?: Maybe<Array<AlgorandTransactionFilter>>
  options?: Maybe<QueryOptions>
}

/** Algorand Blockchain */
export type AlgorandTransfersArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  sender?: Maybe<Array<AlgorandAddressSelector>>
  receiver?: Maybe<Array<AlgorandAddressSelector>>
  currency?: Maybe<Array<AlgorandCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  txType?: Maybe<TxTypeSelector>
  transferType?: Maybe<AlgorandTransferTypeSelector>
  any?: Maybe<Array<AlgorandTransferFilter>>
  options?: Maybe<QueryOptions>
}

/** Address detailed information for Algorand network */
export type AlgorandAddressInfo = {
  __typename?: 'AlgorandAddressInfo'
  /** Address */
  address?: Maybe<Address>
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<AlgorandSmartContract>
}

/** Algorand Address */
export type AlgorandAddressSelector = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>
  /** In the list of Addresses */
  in?: Maybe<Array<Scalars['String']>>
  /** Not in the list of Addresses */
  notIn?: Maybe<Array<Scalars['String']>>
}

export type AlgorandArgumentFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  txType?: Maybe<TxTypeSelector>
  txFrom?: Maybe<Array<AlgorandAddressSelector>>
  caller?: Maybe<Array<AlgorandAddressSelector>>
  reference?: Maybe<Array<AlgorandAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>
  argindex?: Maybe<ArgumentIndexSelector>
}

/** Arguments of Smart Contract Calls */
export type AlgorandArguments = {
  __typename?: 'AlgorandArguments'
  any?: Maybe<Scalars['String']>
  /** Sequential index of value in array ( multi-dimensional) */
  argindex: Scalars['Int']
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  firstRound?: Maybe<Scalars['Int']>
  genesisHash64?: Maybe<Scalars['String']>
  genesisId?: Maybe<Scalars['String']>
  lastRound?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  note?: Maybe<Scalars['String']>
  poolerror?: Maybe<Scalars['String']>
  /** Smart contract being called */
  smartContract?: Maybe<AlgorandSmartContract>
  /** Transaction where call happened */
  transaction?: Maybe<TransactionHashIndex>
  /** Transaction sender */
  txSender?: Maybe<Address>
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>
  /** The Value of argument */
  value?: Maybe<Scalars['String']>
}

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsAnyArgs = {
  of: AlgorandArgumentsMeasureable
}

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  txType?: Maybe<TxTypeSelector>
  txFrom?: Maybe<Array<AlgorandAddressSelector>>
  caller?: Maybe<Array<AlgorandAddressSelector>>
  reference?: Maybe<Array<AlgorandAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>
  argindex?: Maybe<ArgumentIndexSelector>
}

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsMaximumArgs = {
  of: AlgorandArgumentsMeasureable
  get?: Maybe<AlgorandArgumentsMeasureable>
}

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsMinimumArgs = {
  of: AlgorandArgumentsMeasureable
  get?: Maybe<AlgorandArgumentsMeasureable>
}

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsSmartContractArgs = {
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>
}

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
  txFrom?: Maybe<Array<AlgorandAddressSelector>>
}

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsTxSenderArgs = {
  txSender?: Maybe<Array<AlgorandAddressSelector>>
}

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsTxTypeArgs = {
  txType?: Maybe<Array<AlgorandTxType>>
}

/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsValueArgs = {
  value?: Maybe<Array<ArgumentValueSelector>>
}

export enum AlgorandArgumentsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Transaction type */
  TxType = 'tx_type',
  /** Transaction Sender */
  TxSender = 'tx_sender',
  /** Smart Contract */
  SmartContract = 'smart_contract',
  /** Argument value */
  ArgumentValue = 'argument_value',
  /** Argument index */
  ArgumentIndex = 'argument_index',
}

export type AlgorandBlockFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  proposer?: Maybe<Array<AlgorandAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  nextProtocol?: Maybe<StringIdSelector>
  currentProtocol?: Maybe<StringIdSelector>
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocks = {
  __typename?: 'AlgorandBlocks'
  any?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  currentProtocol?: Maybe<Scalars['String']>
  /** Calendar date */
  date?: Maybe<Date>
  frac: Scalars['BigInt']
  /** Block hash */
  hash: Scalars['String']
  /** Block number (height) in blockchain */
  height: Scalars['Int']
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  nextProtocol?: Maybe<Scalars['String']>
  nextProtocolApprovals?: Maybe<Scalars['BigInt']>
  nextProtocolSwitchOn?: Maybe<Scalars['BigInt']>
  nextProtocolVoteBefore?: Maybe<Scalars['BigInt']>
  /** Previous block hash */
  previousBlockHash: Scalars['String']
  /** Block proposer */
  proposer?: Maybe<Address>
  rate?: Maybe<Scalars['Float']>
  reward?: Maybe<Scalars['Float']>
  seed?: Maybe<Scalars['String']>
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
  txnRoot: Scalars['String']
  upgradeApprove?: Maybe<Scalars['Int']>
  upgradePropose?: Maybe<Scalars['String']>
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocksAnyArgs = {
  of: AlgorandBlocksMeasureable
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocksCountArgs = {
  uniq?: Maybe<AlgorandBlocksUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  proposer?: Maybe<Array<AlgorandAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  nextProtocol?: Maybe<StringIdSelector>
  currentProtocol?: Maybe<StringIdSelector>
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocksHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocksHeightArgs = {
  height?: Maybe<BlockSelector>
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocksMaximumArgs = {
  of: AlgorandBlocksMeasureable
  get?: Maybe<AlgorandBlocksMeasureable>
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocksMinimumArgs = {
  of: AlgorandBlocksMeasureable
  get?: Maybe<AlgorandBlocksMeasureable>
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocksProposerArgs = {
  proposer?: Maybe<Array<AlgorandAddressSelector>>
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocksRateArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  proposer?: Maybe<Array<AlgorandAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  nextProtocol?: Maybe<StringIdSelector>
  currentProtocol?: Maybe<StringIdSelector>
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocksRewardArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  proposer?: Maybe<Array<AlgorandAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  nextProtocol?: Maybe<StringIdSelector>
  currentProtocol?: Maybe<StringIdSelector>
}

/** Blocks in Algorand blockchain */
export type AlgorandBlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

export enum AlgorandBlocksMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockHash = 'block_hash',
  /** Block Reward */
  BlockReward = 'block_reward',
  /** Block Proposer */
  Proposer = 'proposer',
  /** Next protocol approvals */
  NextProtocolApprovals = 'next_protocol_approvals',
}

export enum AlgorandBlocksUniq {
  /** Unique proposer count */
  Proposers = 'proposers',
  /** Unique date count */
  Dates = 'dates',
}

export enum AlgorandCallsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Transaction type */
  TxType = 'tx_type',
  /** Transaction Sender */
  TxSender = 'tx_sender',
  /** Smart Contract */
  SmartContract = 'smart_contract',
}

/** Coinpath */
export type AlgorandCoinpath = {
  __typename?: 'AlgorandCoinpath'
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Receiver address */
  receiver?: Maybe<Address>
  /** Sender address */
  sender?: Maybe<Address>
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>
}

/** Coinpath */
export type AlgorandCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>
}

/** Coinpath */
export type AlgorandCoinpathAnyArgs = {
  of: CoinpathMeasureable
}

/** Coinpath */
export type AlgorandCoinpathMaximumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/** Coinpath */
export type AlgorandCoinpathMinimumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/**
 * Currency selector in Algorand blockchain.
 *   Currency is selected by asset ID. To select ALGO use ID=0
 */
export type AlgorandCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['Int']>
  /** Currency not */
  not?: Maybe<Scalars['Int']>
  /** Currency in the list */
  in?: Maybe<Array<Scalars['Int']>>
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>
}

export enum AlgorandNetwork {
  /** Algorand Mainnet (ALGO) */
  Algorand = 'algorand',
  /** Algorand Testnet */
  AlgorandTestnet = 'algorand_testnet',
  /** Algorand Betanet */
  AlgorandBetanet = 'algorand_betanet',
}

/** Algorand smart contract */
export type AlgorandSmartContract = {
  __typename?: 'AlgorandSmartContract'
  /** Smart Contract Address */
  address: Address
  /** Smart Contract byte code */
  bytecode?: Maybe<Scalars['String']>
  /** Smart Contract Deassembled source code */
  source?: Maybe<Scalars['String']>
}

export type AlgorandSmartContractCallFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>
  txType?: Maybe<TxTypeSelector>
}

/** Smart Contract Calls */
export type AlgorandSmartContractCalls = {
  __typename?: 'AlgorandSmartContractCalls'
  any?: Maybe<Scalars['String']>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Fee used in transaction call */
  fee?: Maybe<Scalars['Float']>
  firstRound?: Maybe<Scalars['Int']>
  genesisHash64?: Maybe<Scalars['String']>
  genesisId?: Maybe<Scalars['String']>
  lastRound?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  note?: Maybe<Scalars['String']>
  poolerror?: Maybe<Scalars['String']>
  /** Smart contract being called */
  smartContract?: Maybe<AlgorandSmartContract>
  /** Transaction where call happened */
  transaction?: Maybe<TransactionHashIndex>
  /** Transaction sender */
  txSender?: Maybe<Address>
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>
}

/** Smart Contract Calls */
export type AlgorandSmartContractCallsAnyArgs = {
  of: AlgorandCallsMeasureable
}

/** Smart Contract Calls */
export type AlgorandSmartContractCallsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Smart Contract Calls */
export type AlgorandSmartContractCallsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>
  txType?: Maybe<TxTypeSelector>
}

/** Smart Contract Calls */
export type AlgorandSmartContractCallsFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>
  txType?: Maybe<TxTypeSelector>
}

/** Smart Contract Calls */
export type AlgorandSmartContractCallsMaximumArgs = {
  of: AlgorandCallsMeasureable
  get?: Maybe<AlgorandCallsMeasureable>
}

/** Smart Contract Calls */
export type AlgorandSmartContractCallsMinimumArgs = {
  of: AlgorandCallsMeasureable
  get?: Maybe<AlgorandCallsMeasureable>
}

/** Smart Contract Calls */
export type AlgorandSmartContractCallsSmartContractArgs = {
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>
}

/** Smart Contract Calls */
export type AlgorandSmartContractCallsTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
  txFrom?: Maybe<Array<AlgorandAddressSelector>>
}

/** Smart Contract Calls */
export type AlgorandSmartContractCallsTxSenderArgs = {
  txSender?: Maybe<Array<AlgorandAddressSelector>>
}

/** Smart Contract Calls */
export type AlgorandSmartContractCallsTxTypeArgs = {
  txType?: Maybe<Array<AlgorandTxType>>
}

export type AlgorandTransactionFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>
  txType?: Maybe<TxTypeSelector>
  txSubtype?: Maybe<TxSubtypeSelector>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactions = {
  __typename?: 'AlgorandTransactions'
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['Int']>
  /** Asset related to transaction */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  fee?: Maybe<Scalars['Float']>
  firstRound?: Maybe<Scalars['Int']>
  genesisHash?: Maybe<Scalars['String']>
  genesisId?: Maybe<Scalars['String']>
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>
  lastRound?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  note?: Maybe<Scalars['String']>
  poolerror?: Maybe<Scalars['String']>
  /** Transaction sender */
  sender?: Maybe<Address>
  /** Transaction sub type */
  subtype?: Maybe<AlgorandTxSubType>
  /** Transaction type */
  type?: Maybe<AlgorandTxType>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsAnyArgs = {
  of: AlgorandTransactionsMeasureable
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsCountArgs = {
  uniq?: Maybe<AlgorandTransactionsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>
  txType?: Maybe<TxTypeSelector>
  txSubtype?: Maybe<TxSubtypeSelector>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsCurrencyArgs = {
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>
  txType?: Maybe<TxTypeSelector>
  txSubtype?: Maybe<TxSubtypeSelector>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsIndexArgs = {
  txIndex?: Maybe<Array<TxIndexSelector>>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsMaximumArgs = {
  of: AlgorandTransactionsMeasureable
  get?: Maybe<AlgorandTransactionsMeasureable>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsMinimumArgs = {
  of: AlgorandTransactionsMeasureable
  get?: Maybe<AlgorandTransactionsMeasureable>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsSenderArgs = {
  txSender?: Maybe<Array<AlgorandAddressSelector>>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsSubtypeArgs = {
  txType?: Maybe<TxSubtypeSelector>
}

/** Transactions in Algorand blockchain */
export type AlgorandTransactionsTypeArgs = {
  txType?: Maybe<TxTypeSelector>
}

export enum AlgorandTransactionsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Fee value */
  Fee = 'fee',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Transaction Sender */
  TxSender = 'tx_sender',
}

export enum AlgorandTransactionsUniq {
  /** Unique TX senders count */
  Senders = 'senders',
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique currencies */
  Currencies = 'currencies',
}

export type AlgorandTransferFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  sender?: Maybe<Array<AlgorandAddressSelector>>
  receiver?: Maybe<Array<AlgorandAddressSelector>>
  currency?: Maybe<Array<AlgorandCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  txType?: Maybe<TxTypeSelector>
  transferType?: Maybe<AlgorandTransferTypeSelector>
}

export enum AlgorandTransferType {
  /** Genesis Block */
  Genesis = 'genesis',
  /** Create Asset */
  Create = 'create',
  /** Send */
  Send = 'send',
  /** Close */
  Close = 'close',
  /** Reward */
  Reward = 'reward',
  /** Asset Freeze */
  Freeze = 'freeze',
  /** Asset Unfreeze */
  Unfreeze = 'unfreeze',
}

/** Select transfers by type */
export type AlgorandTransferTypeSelector = {
  /** Transfer Type is */
  is?: Maybe<AlgorandTransferType>
  /** Transfer Type not */
  not?: Maybe<AlgorandTransferType>
  /** Transfer Type in the list */
  in?: Maybe<Array<AlgorandTransferType>>
  /** Transfer Type not in the list */
  notIn?: Maybe<Array<AlgorandTransferType>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfers = {
  __typename?: 'AlgorandTransfers'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  firstRound?: Maybe<Scalars['Int']>
  lastRound?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  memo?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Transfer receiver */
  receiver?: Maybe<Address>
  /** Transfer sender */
  sender?: Maybe<Address>
  /** Transaction where transfer happened */
  transaction?: Maybe<TransactionHashIndex>
  /** Transfer Type */
  transferType?: Maybe<AlgorandTransferType>
  /** Transfer transaction sender */
  txSender?: Maybe<Address>
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  sender?: Maybe<Array<AlgorandAddressSelector>>
  receiver?: Maybe<Array<AlgorandAddressSelector>>
  currency?: Maybe<Array<AlgorandCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  txType?: Maybe<TxTypeSelector>
  transferType?: Maybe<AlgorandTransferTypeSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersAnyArgs = {
  of: AlgorandTransfersMeasureable
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<AlgorandAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  sender?: Maybe<Array<AlgorandAddressSelector>>
  receiver?: Maybe<Array<AlgorandAddressSelector>>
  currency?: Maybe<Array<AlgorandCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  txType?: Maybe<TxTypeSelector>
  transferType?: Maybe<AlgorandTransferTypeSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersCurrencyArgs = {
  currency?: Maybe<Array<AlgorandCurrencySelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersMaximumArgs = {
  of: AlgorandTransfersMeasureable
  get?: Maybe<AlgorandTransfersMeasureable>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersMinimumArgs = {
  of: AlgorandTransfersMeasureable
  get?: Maybe<AlgorandTransfersMeasureable>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersReceiverArgs = {
  receiver?: Maybe<Array<AlgorandAddressSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersSenderArgs = {
  sender?: Maybe<Array<AlgorandAddressSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersTransferTypeArgs = {
  transferType?: Maybe<Array<AlgorandTransferType>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersTxSenderArgs = {
  txSender?: Maybe<Array<AlgorandAddressSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersTxTypeArgs = {
  txType?: Maybe<Array<AlgorandTxType>>
}

export enum AlgorandTransfersMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Amount */
  Amount = 'amount',
  /** TX Sender */
  TxSender = 'tx_sender',
  /** Sender */
  Sender = 'sender',
  /** Receiver */
  Receiver = 'receiver',
  /** Currency symbol */
  CurrencySymbol = 'currency_symbol',
  /** Currency Asset ID */
  AssetId = 'asset_id',
  /** Transaction type */
  TxType = 'tx_type',
  /** Transfer type */
  TransferType = 'transfer_type',
}

export enum AlgorandTxSubType {
  /** Send */
  Send = 'send',
  /** Close */
  Close = 'close',
  /** Create */
  Create = 'create',
  /** Asset Configuration */
  Configure = 'configure',
  /** Asset Freeze */
  Freeze = 'freeze',
  /** Asset Unfreeze */
  Unfreeze = 'unfreeze',
  /** Key Reg */
  Keyreg = 'keyreg',
  /** None */
  None = 'none',
}

export enum AlgorandTxType {
  /** Genesis Block */
  Genesis = 'genesis',
  /** Pay */
  Pay = 'pay',
  /** Key Reg */
  Keyreg = 'keyreg',
  /** Asset Configuration */
  Acfg = 'acfg',
  /** Asset Transfer */
  Axfer = 'axfer',
  /** Asset Freeze or Unfreeze */
  Afrz = 'afrz',
  /** Application Call */
  Appl = 'appl',
}

export enum AmountAggregateFunction {
  /** Maximum */
  Maximum = 'maximum',
  /** Minimum */
  Minimum = 'minimum',
  /** Sum (total) */
  Sum = 'sum',
  /** Average */
  Average = 'average',
  /** Median */
  Median = 'median',
  /** Unique estimate fast */
  Unique = 'unique',
  /** Unique exact */
  UniqueExact = 'uniqueExact',
  /** Any value */
  Any = 'any',
  /** Last value */
  AnyLast = 'anyLast',
}

/** Select by amount */
export type AmountSelector = {
  /** Amount is */
  is?: Maybe<Scalars['Float']>
  /** Amount not */
  not?: Maybe<Scalars['Float']>
  /** Amount in the list */
  in?: Maybe<Array<Scalars['Float']>>
  /** Amount not in the list */
  notIn?: Maybe<Array<Scalars['Float']>>
  /** Amount greater than */
  gt?: Maybe<Scalars['Float']>
  /** Amount less than */
  lt?: Maybe<Scalars['Float']>
  /** Amount less or equal than */
  lteq?: Maybe<Scalars['Float']>
  /** Amount greater or equal than */
  gteq?: Maybe<Scalars['Float']>
  /** Amount in range */
  between?: Maybe<Array<Scalars['Float']>>
}

/** Selector of index of argument in call */
export type ArgumentIndexSelector = {
  /** Tx index is */
  is?: Maybe<Scalars['Int']>
  /** Tx index not */
  not?: Maybe<Scalars['Int']>
  /** Tx index in the list */
  in?: Maybe<Array<Scalars['Int']>>
  /** Tx index not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>
}

/** Argument of Smart contract method or event */
export type ArgumentName = {
  __typename?: 'ArgumentName'
  /** Name */
  name: Scalars['String']
  /** Type */
  type: Scalars['String']
}

/** Argument name and value of smart contract call or event */
export type ArgumentNameValue = {
  __typename?: 'ArgumentNameValue'
  /** Argument name */
  argument: Scalars['String']
  /** Argument data type */
  argumentType: Scalars['String']
  /** Sequential index of value in array ( multi-dimensional) */
  index: Scalars['String']
  /** Value as String */
  value: Scalars['String']
}

/** Selector of argument for smart contract method or event */
export type ArgumentSelector = {
  /** Argument is */
  is?: Maybe<Scalars['String']>
  /** Argument not */
  not?: Maybe<Scalars['String']>
  /** Argument in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Argument not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Selector of argument type for smart contract method or event */
export type ArgumentTypeSelector = {
  /** Argument type is */
  is?: Maybe<Scalars['String']>
  /** Argument type not */
  not?: Maybe<Scalars['String']>
  /** Argument type in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Argument type not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Argument value of smart contract call or event */
export type ArgumentValue = {
  __typename?: 'ArgumentValue'
  /** Value as Address */
  address?: Maybe<EthereumAddressInfo>
  /** Value as String */
  value: Scalars['String']
}

/** Selector of value of argument for smart contract method or event */
export type ArgumentValueSelector = {
  /** Value is */
  is?: Maybe<Scalars['String']>
  /** Value not */
  not?: Maybe<Scalars['String']>
  /** Value in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Value not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

export enum BaseCurrencyEnum {
  /** Dollar */
  Usd = 'USD',
  /** Ethereum */
  Eth = 'ETH',
  /** Tether USDT */
  Usdt = 'USDT',
  /** Bitcoin */
  Btc = 'BTC',
}

/** Binance DEX */
export type Binance = {
  __typename?: 'Binance'
  /** Binance DEX Network Blocks */
  blocks?: Maybe<Array<BinanceBlock>>
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<BinanceCoinpath>>
  /** Binance DEX Network Exchange Orders */
  orders?: Maybe<Array<BinanceOrders>>
  /** Binance DEX Network Trades between currencies */
  trades?: Maybe<Array<BinanceTrades>>
  /** Binance DEX Network Transactions */
  transactions?: Maybe<Array<BinanceTransactions>>
  /** Binance DEX Network Currency Transfers */
  transfers?: Maybe<Array<BinanceTransfers>>
}

/** Binance DEX */
export type BinanceBlocksArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockId?: Maybe<StringIdSelector>
  validatorMoniker?: Maybe<StringIdSelector>
  validatorFeeAddr?: Maybe<BinanceAddressSelector>
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>
  validatorOperahraddress?: Maybe<BinanceAddressSelector>
  any?: Maybe<Array<BinanceBlockFilter>>
  options?: Maybe<QueryOptions>
}

/** Binance DEX */
export type BinanceCoinpathArgs = {
  sender?: Maybe<BinanceAddressSelector>
  receiver?: Maybe<BinanceAddressSelector>
  currency?: Maybe<Array<BinanceCurrencySelector>>
  initialAddress?: Maybe<BinanceAddressSelector>
  initialDate?: Maybe<DateSelector>
  initialTime?: Maybe<DateTimeSelector>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  depth?: Maybe<IntegerLimitedSelector>
  options?: Maybe<CoinpathOptions>
}

/** Binance DEX */
export type BinanceOrdersArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  orderOwner?: Maybe<Array<BinanceAddressSelector>>
  orderId?: Maybe<Array<OrderIdSelector>>
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteAmount?: Maybe<Array<AmountSelector>>
  baseAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  orderStatus?: Maybe<Array<OrderStatusSelector>>
  orderType?: Maybe<Array<OrderTypeSelector>>
  orderSide?: Maybe<Array<OrderSideSelector>>
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>
  any?: Maybe<Array<BinanceOrderFilter>>
  options?: Maybe<QueryOptions>
}

/** Binance DEX */
export type BinanceTradesArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<Array<BinanceAddressSelector>>
  seller?: Maybe<Array<BinanceAddressSelector>>
  sellOrderId?: Maybe<Array<OrderIdSelector>>
  buyOrderId?: Maybe<Array<OrderIdSelector>>
  tradeId?: Maybe<Array<TradeIdSelector>>
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteAmount?: Maybe<Array<AmountSelector>>
  baseAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  any?: Maybe<Array<BinanceTradeFilter>>
  options?: Maybe<QueryOptions>
}

/** Binance DEX */
export type BinanceTransactionsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  transactionType?: Maybe<BinanceTransactionTypeSelector>
  proposalId?: Maybe<StringIdSelector>
  currency?: Maybe<Array<BinanceCurrencySelector>>
  transactionCode?: Maybe<IntIdSelector>
  transactionSource?: Maybe<IntIdSelector>
  deposit?: Maybe<Array<AmountSelector>>
  any?: Maybe<Array<BinanceTransactionFilter>>
  options?: Maybe<QueryOptions>
}

/** Binance DEX */
export type BinanceTransfersArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  sender?: Maybe<Array<BinanceAddressSelector>>
  receiver?: Maybe<Array<BinanceAddressSelector>>
  currency?: Maybe<Array<BinanceCurrencySelector>>
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>
  orderId?: Maybe<Array<OrderIdSelector>>
  tradeId?: Maybe<Array<TradeIdSelector>>
  amount?: Maybe<Array<AmountSelector>>
  outputIndex?: Maybe<Array<OutputIndexSelector>>
  any?: Maybe<Array<BinanceTransferFilter>>
  options?: Maybe<QueryOptions>
}

/** Binance Address should start with bnb and contain 42 chars. */
export type BinanceAddressSelector = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>
  /** In the list of Addresses */
  in?: Maybe<Scalars['String']>
  /** Not in the list of Addresses */
  notIn?: Maybe<Scalars['String']>
}

/** Block */
export type BinanceBlock = {
  __typename?: 'BinanceBlock'
  any?: Maybe<Scalars['String']>
  /** Block ID */
  blockId?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Block number (height) in blockchain */
  height: Scalars['Int']
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
  /** Validator consensus pubkey */
  validatorConsensusPubkey?: Maybe<Scalars['String']>
  /** Validator fee address */
  validatorFeeAddr?: Maybe<Address>
  /** Validator moniker */
  validatorMoniker?: Maybe<Scalars['String']>
  /** Validator operator HR address */
  validatorOperaHrAddress?: Maybe<Address>
  /** Validator operator address */
  validatorOperatorAddress?: Maybe<Address>
}

/** Block */
export type BinanceBlockAnyArgs = {
  of: BinanceBlocksMeasureable
}

/** Block */
export type BinanceBlockBlockIdArgs = {
  blockId?: Maybe<StringIdSelector>
}

/** Block */
export type BinanceBlockCountArgs = {
  uniq?: Maybe<BinanceBlockUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockId?: Maybe<StringIdSelector>
  validatorMoniker?: Maybe<StringIdSelector>
  validatorFeeAddr?: Maybe<BinanceAddressSelector>
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>
  validatorOperahraddress?: Maybe<BinanceAddressSelector>
}

/** Block */
export type BinanceBlockHeightArgs = {
  height?: Maybe<BlockSelector>
}

/** Block */
export type BinanceBlockMaximumArgs = {
  of: BinanceBlocksMeasureable
  get?: Maybe<BinanceBlocksMeasureable>
}

/** Block */
export type BinanceBlockMinimumArgs = {
  of: BinanceBlocksMeasureable
  get?: Maybe<BinanceBlocksMeasureable>
}

/** Block */
export type BinanceBlockTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Block */
export type BinanceBlockValidatorConsensusPubkeyArgs = {
  validatorConsensusPubkey?: Maybe<StringIdSelector>
}

/** Block */
export type BinanceBlockValidatorFeeAddrArgs = {
  validatorFeeAddr?: Maybe<BinanceAddressSelector>
}

/** Block */
export type BinanceBlockValidatorMonikerArgs = {
  validatorMoniker?: Maybe<StringIdSelector>
}

/** Block */
export type BinanceBlockValidatorOperaHrAddressArgs = {
  validatorOperaHrAddress?: Maybe<BinanceAddressSelector>
}

/** Block */
export type BinanceBlockValidatorOperatorAddressArgs = {
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>
}

export type BinanceBlockFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockId?: Maybe<StringIdSelector>
  validatorMoniker?: Maybe<StringIdSelector>
  validatorFeeAddr?: Maybe<BinanceAddressSelector>
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>
  validatorOperahraddress?: Maybe<BinanceAddressSelector>
}

export enum BinanceBlockUniq {
  /** Validator operators */
  ValidatorOperatorAddresses = 'validator_operator_addresses',
  /** Validator fee addresses */
  ValidatorFeeAddresses = 'validator_fee_addresses',
  /** Unique date count */
  Dates = 'dates',
}

export enum BinanceBlocksMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockHash = 'block_hash',
  /** Validator moniker */
  ValidatorMoniker = 'validator_moniker',
}

/** Coinpath */
export type BinanceCoinpath = {
  __typename?: 'BinanceCoinpath'
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Receiver address */
  receiver?: Maybe<Address>
  /** Sender address */
  sender?: Maybe<Address>
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>
}

/** Coinpath */
export type BinanceCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>
}

/** Coinpath */
export type BinanceCoinpathAnyArgs = {
  of: CoinpathMeasureable
}

/** Coinpath */
export type BinanceCoinpathMaximumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/** Coinpath */
export type BinanceCoinpathMinimumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/**
 * Binance token selector by tokenId.
 *     Native binance token has BNB symbol.
 *     Note that most Binance symbols has two dash separated parts, for example: 'TROY-9B8_BNB'
 */
export type BinanceCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>
  /** Currency not */
  not?: Maybe<Scalars['String']>
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

export type BinanceOrderFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  orderOwner?: Maybe<Array<BinanceAddressSelector>>
  orderId?: Maybe<Array<OrderIdSelector>>
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteAmount?: Maybe<Array<AmountSelector>>
  baseAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  orderStatus?: Maybe<Array<OrderStatusSelector>>
  orderType?: Maybe<Array<OrderTypeSelector>>
  orderSide?: Maybe<Array<OrderSideSelector>>
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>
}

export enum BinanceOrderSide {
  /** Sell Side */
  Sell = 'sell',
  /** Buy Side */
  Buy = 'buy',
}

export enum BinanceOrderStatus {
  /** Ack */
  Ack = 'Ack',
  /** Canceled */
  Canceled = 'Canceled',
  /** Fully Fill */
  FullyFill = 'FullyFill',
  /** Partial Fill */
  PartialFill = 'PartialFill',
  /** Expired */
  Expired = 'Expired',
  /** Failed Blocking */
  FailedBlocking = 'FailedBlocking',
  /** Ioc No Fill */
  IocNoFill = 'IocNoFill',
  /** Ioc Expire */
  IocExpire = 'IocExpire',
}

export enum BinanceOrderTimeInForce {
  /** Good Till Expiry */
  Gte = 'GTE',
  /** Immediate Or Cancel */
  Ioc = 'IOC',
}

export enum BinanceOrderType {
  /** Limit Order */
  LimitOrder = 'LimitOrder',
}

/** Binance DEX Order */
export type BinanceOrders = {
  __typename?: 'BinanceOrders'
  any?: Maybe<Scalars['String']>
  baseAmount?: Maybe<Scalars['Float']>
  baseCurrency?: Maybe<Currency>
  /** Block where order transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Order ID */
  orderId?: Maybe<Scalars['String']>
  /** Order owner address */
  orderOwner?: Maybe<Address>
  /** Order Side */
  orderSide?: Maybe<BinanceOrderSide>
  /** Order Status */
  orderStatus?: Maybe<BinanceOrderStatus>
  /** Order Time In Force */
  orderTimeInForce?: Maybe<BinanceOrderTimeInForce>
  /** Order Type */
  orderType?: Maybe<BinanceOrderType>
  price?: Maybe<Scalars['Float']>
  quoteAmount?: Maybe<Scalars['Float']>
  quoteCurrency?: Maybe<Currency>
  /** Transaction where order created */
  transaction?: Maybe<TransactionHash>
}

/** Binance DEX Order */
export type BinanceOrdersAnyArgs = {
  of: BinanceOrdersMeasureable
}

/** Binance DEX Order */
export type BinanceOrdersBaseAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  orderOwner?: Maybe<Array<BinanceAddressSelector>>
  orderId?: Maybe<Array<OrderIdSelector>>
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteAmount?: Maybe<Array<AmountSelector>>
  baseAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  orderStatus?: Maybe<Array<OrderStatusSelector>>
  orderType?: Maybe<Array<OrderTypeSelector>>
  orderSide?: Maybe<Array<OrderSideSelector>>
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>
}

/** Binance DEX Order */
export type BinanceOrdersBaseCurrencyArgs = {
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
}

/** Binance DEX Order */
export type BinanceOrdersBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Binance DEX Order */
export type BinanceOrdersCountArgs = {
  uniq?: Maybe<BinanceOrdersUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  orderOwner?: Maybe<Array<BinanceAddressSelector>>
  orderId?: Maybe<Array<OrderIdSelector>>
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteAmount?: Maybe<Array<AmountSelector>>
  baseAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  orderStatus?: Maybe<Array<OrderStatusSelector>>
  orderType?: Maybe<Array<OrderTypeSelector>>
  orderSide?: Maybe<Array<OrderSideSelector>>
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>
}

/** Binance DEX Order */
export type BinanceOrdersMaximumArgs = {
  of: BinanceOrdersMeasureable
  get?: Maybe<BinanceOrdersMeasureable>
}

/** Binance DEX Order */
export type BinanceOrdersMinimumArgs = {
  of: BinanceOrdersMeasureable
  get?: Maybe<BinanceOrdersMeasureable>
}

/** Binance DEX Order */
export type BinanceOrdersOrderIdArgs = {
  orderId?: Maybe<Array<OrderIdSelector>>
}

/** Binance DEX Order */
export type BinanceOrdersOrderOwnerArgs = {
  owner?: Maybe<Array<BinanceAddressSelector>>
}

/** Binance DEX Order */
export type BinanceOrdersOrderSideArgs = {
  orderSide?: Maybe<Array<OrderSideSelector>>
}

/** Binance DEX Order */
export type BinanceOrdersOrderStatusArgs = {
  orderStatus?: Maybe<Array<OrderStatusSelector>>
}

/** Binance DEX Order */
export type BinanceOrdersOrderTimeInForceArgs = {
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>
}

/** Binance DEX Order */
export type BinanceOrdersOrderTypeArgs = {
  orderType?: Maybe<Array<OrderTypeSelector>>
}

/** Binance DEX Order */
export type BinanceOrdersQuoteAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  orderOwner?: Maybe<Array<BinanceAddressSelector>>
  orderId?: Maybe<Array<OrderIdSelector>>
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteAmount?: Maybe<Array<AmountSelector>>
  baseAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  orderStatus?: Maybe<Array<OrderStatusSelector>>
  orderType?: Maybe<Array<OrderTypeSelector>>
  orderSide?: Maybe<Array<OrderSideSelector>>
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>
}

/** Binance DEX Order */
export type BinanceOrdersQuoteCurrencyArgs = {
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
}

/** Binance DEX Order */
export type BinanceOrdersTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

export enum BinanceOrdersMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Order owner */
  OrderOwner = 'order_owner',
  /** Order status */
  OrderStatus = 'order_status',
  /** Order ID */
  OrderId = 'order_id',
  /** Order side */
  OrderSide = 'order_side',
  /** Base currency */
  BaseCurrency = 'base_currency',
  /** Quote currency */
  QuoteCurrency = 'quote_currency',
  /** Quote Amount */
  QuoteAmount = 'quote_amount',
  /** Base Amount */
  BaseAmount = 'base_amount',
  /** Price */
  Price = 'price',
}

export enum BinanceOrdersUniq {
  /** Unique Transactions */
  Txs = 'txs',
  /** Unique order owners */
  Owners = 'owners',
  /** Unique base currencies */
  BaseCurrencies = 'base_currencies',
  /** Unique quote currencies */
  QuoteCurrencies = 'quote_currencies',
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique order ID count */
  Orders = 'orders',
}

export type BinanceTradeFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<Array<BinanceAddressSelector>>
  seller?: Maybe<Array<BinanceAddressSelector>>
  sellOrderId?: Maybe<Array<OrderIdSelector>>
  buyOrderId?: Maybe<Array<OrderIdSelector>>
  tradeId?: Maybe<Array<TradeIdSelector>>
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteAmount?: Maybe<Array<AmountSelector>>
  baseAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
}

/** Binance DEX Trades */
export type BinanceTrades = {
  __typename?: 'BinanceTrades'
  any?: Maybe<Scalars['String']>
  baseAmount?: Maybe<Scalars['Float']>
  baseCurrency?: Maybe<Currency>
  /** Block where trade transaction is included */
  block?: Maybe<Block>
  /** Buy Order ID */
  buyOrderId?: Maybe<Scalars['String']>
  /** Trade buyer address */
  buyer?: Maybe<Address>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  quoteAmount?: Maybe<Scalars['Float']>
  quoteCurrency?: Maybe<Currency>
  /** Sell Order ID */
  sellOrderId?: Maybe<Scalars['String']>
  /** Trade seller address */
  seller?: Maybe<Address>
  /** Trade ID */
  tradeId?: Maybe<Scalars['String']>
  /** Transaction where trade happened */
  transaction?: Maybe<TransactionHashIndex>
}

/** Binance DEX Trades */
export type BinanceTradesAnyArgs = {
  of: BinanceTradesMeasureable
}

/** Binance DEX Trades */
export type BinanceTradesBaseAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<Array<BinanceAddressSelector>>
  seller?: Maybe<Array<BinanceAddressSelector>>
  sellOrderId?: Maybe<Array<OrderIdSelector>>
  buyOrderId?: Maybe<Array<OrderIdSelector>>
  tradeId?: Maybe<Array<TradeIdSelector>>
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteAmount?: Maybe<Array<AmountSelector>>
  baseAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
}

/** Binance DEX Trades */
export type BinanceTradesBaseCurrencyArgs = {
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
}

/** Binance DEX Trades */
export type BinanceTradesBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Binance DEX Trades */
export type BinanceTradesBuyOrderIdArgs = {
  buyOrderId?: Maybe<Array<OrderIdSelector>>
}

/** Binance DEX Trades */
export type BinanceTradesBuyerArgs = {
  buyer?: Maybe<Array<BinanceAddressSelector>>
}

/** Binance DEX Trades */
export type BinanceTradesCountArgs = {
  uniq?: Maybe<BinanceTradesUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<Array<BinanceAddressSelector>>
  seller?: Maybe<Array<BinanceAddressSelector>>
  sellOrderId?: Maybe<Array<OrderIdSelector>>
  buyOrderId?: Maybe<Array<OrderIdSelector>>
  tradeId?: Maybe<Array<TradeIdSelector>>
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteAmount?: Maybe<Array<AmountSelector>>
  baseAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
}

/** Binance DEX Trades */
export type BinanceTradesMaximumArgs = {
  of: BinanceTradesMeasureable
  get?: Maybe<BinanceTradesMeasureable>
}

/** Binance DEX Trades */
export type BinanceTradesMinimumArgs = {
  of: BinanceTradesMeasureable
  get?: Maybe<BinanceTradesMeasureable>
}

/** Binance DEX Trades */
export type BinanceTradesQuoteAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<Array<BinanceAddressSelector>>
  seller?: Maybe<Array<BinanceAddressSelector>>
  sellOrderId?: Maybe<Array<OrderIdSelector>>
  buyOrderId?: Maybe<Array<OrderIdSelector>>
  tradeId?: Maybe<Array<TradeIdSelector>>
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
  quoteAmount?: Maybe<Array<AmountSelector>>
  baseAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
}

/** Binance DEX Trades */
export type BinanceTradesQuoteCurrencyArgs = {
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>
}

/** Binance DEX Trades */
export type BinanceTradesSellOrderIdArgs = {
  sellOrderId?: Maybe<Array<OrderIdSelector>>
}

/** Binance DEX Trades */
export type BinanceTradesSellerArgs = {
  seller?: Maybe<Array<BinanceAddressSelector>>
}

/** Binance DEX Trades */
export type BinanceTradesTradeIdArgs = {
  tradeId?: Maybe<Array<TradeIdSelector>>
}

/** Binance DEX Trades */
export type BinanceTradesTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

export enum BinanceTradesMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Buyer */
  Buyer = 'buyer',
  /** Seller */
  Seller = 'seller',
  /** Trade ID */
  TradeId = 'trade_id',
  /** Buy Order ID */
  BuyOrderId = 'buy_order_id',
  /** Sell Order ID */
  SellOrderId = 'sell_order_id',
  /** Base currency */
  BaseCurrency = 'base_currency',
  /** Quote currency */
  QuoteCurrency = 'quote_currency',
  /** Quote Amount */
  QuoteAmount = 'quote_amount',
  /** Base Amount */
  BaseAmount = 'base_amount',
  /** Price */
  Price = 'price',
}

export enum BinanceTradesUniq {
  /** Trades */
  Trades = 'trades',
  /** Sell Orders */
  SellOrders = 'sell_orders',
  /** Buy Orders */
  BuyOrders = 'buy_orders',
  /** Unique Transactions */
  Txs = 'txs',
  /** Unique buyers count */
  Buyers = 'buyers',
  /** Unique sellers count */
  Sellers = 'sellers',
  /** Unique base currencies */
  BaseCurrencies = 'base_currencies',
  /** Unique quote currencies */
  QuoteCurrencies = 'quote_currencies',
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
}

export type BinanceTransactionFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  transactionType?: Maybe<BinanceTransactionTypeSelector>
  proposalId?: Maybe<StringIdSelector>
  currency?: Maybe<Array<BinanceCurrencySelector>>
  transactionCode?: Maybe<IntIdSelector>
  transactionSource?: Maybe<IntIdSelector>
  deposit?: Maybe<Array<AmountSelector>>
}

export enum BinanceTransactionType {
  /** New Order */
  NewOrder = 'NEW_ORDER',
  /** Cancel Order */
  CancelOrder = 'CANCEL_ORDER',
  /** Transfer */
  Transfer = 'TRANSFER',
  /** Vote */
  Vote = 'VOTE',
  /** Unfreeze Token */
  UnfreezeToken = 'UNFREEZE_TOKEN',
  /** Burn */
  Burn = 'BURN',
  /** Freeze Token */
  FreezeToken = 'FREEZE_TOKEN',
  /** Submit Proposal */
  SubmitProposal = 'SUBMIT_PROPOSAL',
  /** Listing */
  Listing = 'LISTING',
  /** Issue */
  Issue = 'ISSUE',
  /** Deposit */
  Deposit = 'DEPOSIT',
  /** Mint */
  Mint = 'MINT',
  /** Time Lock */
  TimeLock = 'TimeLock',
  /** Time Unlock */
  TimeUnlock = 'TimeUnlock',
  /** Time Relock */
  TimeRelock = 'TimeRelock',
  /** Set Account Flag */
  SetAccountFlag = 'SetAccountFlag',
  /** Hash Timer Locked Transfer */
  HtlTransfer = 'HTL_TRANSFER',
  /** Hash Timer Locked Deposit */
  DepositHtl = 'DEPOSIT_HTL',
  /** Hash Timer Locked Claim */
  ClaimHtl = 'CLAIM_HTL',
  /** Hash Timer Locked  Refund */
  RefundHtl = 'REFUND_HTL',
  /** Tiny Token Issue */
  TinyTokenIssue = 'TINY_TOKEN_ISSUE',
  /** Mini Token Issue */
  MiniTokenIssue = 'MINI_TOKEN_ISSUE',
  /** Tiny Token Listing */
  TinyTokenList = 'TINY_TOKEN_LIST',
  /** Mini Token Listing */
  MiniTokenList = 'MINI_TOKEN_LIST',
  /** Tiny Token Set URI */
  TinyTokenSetUri = 'TINY_TOKEN_SET_URI',
  /** Mini Token Set URI */
  MiniTokenSetUri = 'MINI_TOKEN_SET_URI',
  /** Create sidechain validator */
  CreateSidechainValidator = 'CREATE_SIDECHAIN_VALIDATOR',
  /** Edit sidechain validator */
  EditSidechainValidator = 'EDIT_SIDECHAIN_VALIDATOR',
  /** Delegate for sidechain */
  SidechainDelegate = 'SIDECHAIN_DELEGATE',
  /** ReDelegate for sidechain */
  SidechainRedelegate = 'SIDECHAIN_REDELEGATE',
  /** Unbond from sidechain */
  SidechainUnbond = 'SIDECHAIN_UNBOND',
  /** Unjail from sidechain */
  SidechainUnjail = 'SIDECHAIN_UNJAIL',
  /** Side chain submit poroposal */
  SideSubmitProposal = 'SIDE_SUBMIT_PROPOSAL',
  /** Side chain deposit */
  SideDeposit = 'SIDE_DEPOSIT',
  /** Side chain vote */
  SideVote = 'SIDE_VOTE',
  /** Cross chain transfer */
  TransferOut = 'TRANSFER_OUT',
  /** Submit evidence */
  BscSubmitEvidence = 'BSC_SUBMIT_EVIDENCE',
  /** Cross chain claim */
  Claim = 'CLAIM',
  /** Bind */
  Bind = 'BIND',
  /** UnBind */
  Unbind = 'UNBIND',
}

/** Select by transaction type */
export type BinanceTransactionTypeSelector = {
  /** Transaction Type is */
  is?: Maybe<BinanceTransactionType>
  /** Transaction Type not */
  not?: Maybe<BinanceTransactionType>
  /** Transaction Type in the list */
  in?: Maybe<Array<BinanceTransactionType>>
  /** Transaction Type not in the list */
  notIn?: Maybe<Array<BinanceTransactionType>>
}

/** Transaction */
export type BinanceTransactions = {
  __typename?: 'BinanceTransactions'
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['Int']>
  /** Currency issued in transaction */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  /** Deposit amount in transaction */
  deposit?: Maybe<Scalars['Float']>
  /** Transaction Description */
  description?: Maybe<Scalars['String']>
  /** Hash hex representation */
  hash: Scalars['String']
  /** TX index in block, 0 based */
  index?: Maybe<Scalars['Int']>
  /** Transaction Log */
  log?: Maybe<Scalars['String']>
  maximum?: Maybe<Scalars['String']>
  /** Transaction Memo */
  memo?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Proposal ID */
  proposalId?: Maybe<Scalars['Int']>
  /** Transaction Type */
  transactionCode?: Maybe<Scalars['Int']>
  /** Transaction Source */
  transactionSource?: Maybe<TransactionSource>
  /** Transaction Type */
  transactionType?: Maybe<BinanceTransactionType>
}

/** Transaction */
export type BinanceTransactionsAnyArgs = {
  of: BinanceTransactionsMeasureable
}

/** Transaction */
export type BinanceTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transaction */
export type BinanceTransactionsCountArgs = {
  uniq?: Maybe<BinanceTransactionsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  transactionType?: Maybe<BinanceTransactionTypeSelector>
  proposalId?: Maybe<StringIdSelector>
  currency?: Maybe<Array<BinanceCurrencySelector>>
  transactionCode?: Maybe<IntIdSelector>
  transactionSource?: Maybe<IntIdSelector>
  deposit?: Maybe<Array<AmountSelector>>
}

/** Transaction */
export type BinanceTransactionsCurrencyArgs = {
  currency?: Maybe<Array<BinanceCurrencySelector>>
}

/** Transaction */
export type BinanceTransactionsDepositArgs = {
  deposit?: Maybe<Array<AmountSelector>>
}

/** Transaction */
export type BinanceTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

/** Transaction */
export type BinanceTransactionsMaximumArgs = {
  of: BinanceTransactionsMeasureable
  get?: Maybe<BinanceTransactionsMeasureable>
}

/** Transaction */
export type BinanceTransactionsMinimumArgs = {
  of: BinanceTransactionsMeasureable
  get?: Maybe<BinanceTransactionsMeasureable>
}

/** Transaction */
export type BinanceTransactionsProposalIdArgs = {
  proposalId?: Maybe<Array<IntIdSelector>>
}

/** Transaction */
export type BinanceTransactionsTransactionCodeArgs = {
  transactionCode?: Maybe<IntIdSelector>
}

/** Transaction */
export type BinanceTransactionsTransactionSourceArgs = {
  transactionSource?: Maybe<IntIdSelector>
}

/** Transaction */
export type BinanceTransactionsTransactionTypeArgs = {
  transactionType?: Maybe<Array<BinanceTransactionTypeSelector>>
}

export enum BinanceTransactionsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Transaction Source Name */
  TransactionSourceName = 'transaction_source_name',
  /** Transaction Source Code */
  TransactionSourceCode = 'transaction_source_code',
  /** Transaction Code */
  TransactionCode = 'transaction_code',
  /** Transaction Type */
  TransactionType = 'transaction_type',
  /** Transaction Memo */
  TransactionMemo = 'transaction_memo',
  /** Currency */
  CurrencySymbol = 'currency_symbol',
}

export enum BinanceTransactionsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique transaction source count */
  TransactionSources = 'transaction_sources',
}

export type BinanceTransferFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  sender?: Maybe<Array<BinanceAddressSelector>>
  receiver?: Maybe<Array<BinanceAddressSelector>>
  currency?: Maybe<Array<BinanceCurrencySelector>>
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>
  orderId?: Maybe<Array<OrderIdSelector>>
  tradeId?: Maybe<Array<TradeIdSelector>>
  amount?: Maybe<Array<AmountSelector>>
  outputIndex?: Maybe<Array<OutputIndexSelector>>
}

export enum BinanceTransferType {
  /** Reward for block */
  BlockReward = 'BLOCK_REWARD',
  /** Burning amount */
  Burn = 'BURN',
  /** Claiming Hash Timer Locked Transfer */
  ClaimHtl = 'CLAIM_HTL',
  /** Deposit for Hash Timer Locked Transfer */
  DepositHtl = 'DEPOSIT_HTL',
  /** Fee for DEX orders */
  DexFee = 'DEX_FEE',
  /** Genesis declaration */
  GenesisDelegation = 'GENESIS_DELEGATION',
  /** Genesis supply declaration */
  GenesisSupply = 'GENESIS_SUPPLY',
  /** Tiny Token Issue */
  TinyTokenIssue = 'TINY_TOKEN_ISSUE',
  /** Mini Token Issue */
  MiniTokenIssue = 'MINI_TOKEN_ISSUE',
  /** Hash Timer Locked Transfer */
  HtlTransfer = 'HTL_TRANSFER',
  /** Issue token */
  Issue = 'ISSUE',
  /** Mint token */
  Mint = 'MINT',
  /** Trade buy side */
  TradeBuy = 'TRADE_BUY',
  /** Trade sell side */
  TradeSell = 'TRADE_SELL',
  /** Transfer */
  Transfer = 'TRANSFER',
  /** Transaction fee */
  TxFee = 'TX_FEE',
  /** Create sidechain validator */
  CreateSidechainValidator = 'CREATE_SIDECHAIN_VALIDATOR',
  /** Edit sidechain validator */
  EditSidechainValidator = 'EDIT_SIDECHAIN_VALIDATOR',
  /** Delegate for sidechain */
  SidechainDelegate = 'SIDECHAIN_DELEGATE',
  /** ReDelegate for sidechain */
  SidechainRedelegate = 'SIDECHAIN_REDELEGATE',
  /** Unbond from sidechain */
  SidechainUnbond = 'SIDECHAIN_UNBOND',
  /** Side chain submit poroposal */
  SideSubmitProposal = 'SIDE_SUBMIT_PROPOSAL',
  /** Side chain deposit */
  SideDeposit = 'SIDE_DEPOSIT',
  /** Side chain vote */
  SideVote = 'SIDE_VOTE',
  /** Cross chain transfer */
  TransferOut = 'TRANSFER_OUT',
  /** Submit evidence */
  BscSubmitEvidence = 'BSC_SUBMIT_EVIDENCE',
  /** Cross chain claim */
  Claim = 'CLAIM',
  /** Bind */
  Bind = 'BIND',
  /** UnBind */
  Unbind = 'UNBIND',
}

/** Select transfer type(s) */
export type BinanceTransferTypeSelector = {
  /** Transfer type is */
  is?: Maybe<BinanceTransferType>
  /** Transfer type not */
  not?: Maybe<BinanceTransferType>
  /** Transfer type in the list */
  in?: Maybe<Array<BinanceTransferType>>
  /** Transfer type not in the list */
  notIn?: Maybe<Array<BinanceTransferType>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfers = {
  __typename?: 'BinanceTransfers'
  /** Transfer amount */
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  /** Transfer count */
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Order Id of trade where transfer happened */
  orderId?: Maybe<Scalars['String']>
  /** Index of the output for the transfer, 0-based */
  outputIndex?: Maybe<Scalars['Int']>
  /** Transfer receiver */
  receiver?: Maybe<Address>
  /** Transfer sender */
  sender?: Maybe<Address>
  /** Id of trade where transfer happened */
  tradeId?: Maybe<Scalars['String']>
  /** Transaction where transfer happened */
  transaction?: Maybe<TransactionHashIndex>
  /** Transfer type */
  transferType?: Maybe<BinanceTransferType>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  sender?: Maybe<Array<BinanceAddressSelector>>
  receiver?: Maybe<Array<BinanceAddressSelector>>
  currency?: Maybe<Array<BinanceCurrencySelector>>
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>
  orderId?: Maybe<Array<OrderIdSelector>>
  tradeId?: Maybe<Array<TradeIdSelector>>
  amount?: Maybe<Array<AmountSelector>>
  outputIndex?: Maybe<Array<OutputIndexSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersAnyArgs = {
  of: BinanceTransfersMeasureable
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  sender?: Maybe<Array<BinanceAddressSelector>>
  receiver?: Maybe<Array<BinanceAddressSelector>>
  currency?: Maybe<Array<BinanceCurrencySelector>>
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>
  orderId?: Maybe<Array<OrderIdSelector>>
  tradeId?: Maybe<Array<TradeIdSelector>>
  amount?: Maybe<Array<AmountSelector>>
  outputIndex?: Maybe<Array<OutputIndexSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersCurrencyArgs = {
  currency?: Maybe<Array<BinanceCurrencySelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersMaximumArgs = {
  of: BinanceTransfersMeasureable
  get?: Maybe<BinanceTransfersMeasureable>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersMinimumArgs = {
  of: BinanceTransfersMeasureable
  get?: Maybe<BinanceTransfersMeasureable>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersOrderIdArgs = {
  orderId?: Maybe<Array<OrderIdSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersOutputIndexArgs = {
  outputIndex?: Maybe<Array<OutputIndexSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersReceiverArgs = {
  receiver?: Maybe<Array<BinanceAddressSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersSenderArgs = {
  sender?: Maybe<Array<BinanceAddressSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersTradeIdArgs = {
  tradeId?: Maybe<Array<TradeIdSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersTransferTypeArgs = {
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>
}

export enum BinanceTransfersMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Amount */
  Amount = 'amount',
  /** Sender */
  Sender = 'sender',
  /** Receiver */
  Receiver = 'receiver',
  /** Currency symbol */
  CurrencySymbol = 'currency_symbol',
}

/** Bitcoin and other UTXO type blockchains */
export type Bitcoin = {
  __typename?: 'Bitcoin'
  /** Blockchain Blocks */
  blocks?: Maybe<Array<BitcoinBlock>>
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<BitcoinCoinpath>>
  /** Blockchain Transaction Inputs */
  inputs?: Maybe<Array<BitcoinTransactionInput>>
  /** Blockchain Transaction Outputs */
  outputs?: Maybe<Array<BitcoinTransactionOutput>>
  /** Blockchain Transactions */
  transactions?: Maybe<Array<BitcoinTransaction>>
}

/** Bitcoin and other UTXO type blockchains */
export type BitcoinBlocksArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<StringIdSelector>
  blockSize?: Maybe<IntegerSelector>
  blockWeight?: Maybe<IntegerSelector>
  blockVersion?: Maybe<IntegerSelector>
  transactionCount?: Maybe<IntegerSelector>
  blockStrippedSize?: Maybe<IntegerSelector>
  difficulty?: Maybe<FloatSelector>
  any?: Maybe<Array<BitcoinBlockFilter>>
  options?: Maybe<QueryOptions>
}

/** Bitcoin and other UTXO type blockchains */
export type BitcoinCoinpathArgs = {
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  initialAddress?: Maybe<AddressSelector>
  initialDate?: Maybe<DateSelector>
  initialTime?: Maybe<DateTimeSelector>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  depth?: Maybe<IntegerLimitedSelector>
  options?: Maybe<BitcoinCoinpathOptions>
}

/** Bitcoin and other UTXO type blockchains */
export type BitcoinInputsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  inputIndex?: Maybe<IntegerSelector>
  inputAddress?: Maybe<AddressSelector>
  inOutputTxId?: Maybe<HashSelector>
  inOutputIndex?: Maybe<IntegerSelector>
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>
  inputValue?: Maybe<FloatSelector>
  any?: Maybe<Array<BitcoinInputFilter>>
  options?: Maybe<QueryOptions>
}

/** Bitcoin and other UTXO type blockchains */
export type BitcoinOutputsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  outputIndex?: Maybe<IntegerSelector>
  outputAddress?: Maybe<AddressSelector>
  outputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>
  outputValue?: Maybe<FloatSelector>
  any?: Maybe<Array<BitcoinOutputFilter>>
  options?: Maybe<QueryOptions>
}

/** Bitcoin and other UTXO type blockchains */
export type BitcoinTransactionsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  txSize?: Maybe<IntegerSelector>
  txVsize?: Maybe<IntegerSelector>
  txWeight?: Maybe<IntegerSelector>
  txVersion?: Maybe<IntegerSelector>
  txCoinbase?: Maybe<Scalars['Boolean']>
  inputCount?: Maybe<IntegerSelector>
  outputCount?: Maybe<IntegerSelector>
  inputValue?: Maybe<FloatSelector>
  outputValue?: Maybe<FloatSelector>
  feeValue?: Maybe<FloatSelector>
  minedValue?: Maybe<FloatSelector>
  txLocktime?: Maybe<IntegerSelector>
  any?: Maybe<Array<BitcoinTransactionFilter>>
  options?: Maybe<QueryOptions>
}

/** Block */
export type BitcoinBlock = {
  __typename?: 'BitcoinBlock'
  any?: Maybe<Scalars['String']>
  /** Block Hash */
  blockHash?: Maybe<Scalars['String']>
  /** Block size */
  blockSize?: Maybe<Scalars['Int']>
  /** Block stripped size */
  blockStrippedSize?: Maybe<Scalars['Int']>
  /** Block version */
  blockVersion?: Maybe<Scalars['Int']>
  /** Block weight */
  blockWeight?: Maybe<Scalars['Int']>
  /** Block chainwork */
  chainwork?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Difficulty */
  difficulty?: Maybe<Scalars['Float']>
  /** Block number (height) in blockchain */
  height: Scalars['Int']
  maximum?: Maybe<Scalars['String']>
  /** Block median timestamp */
  medianTime?: Maybe<DateTime>
  minimum?: Maybe<Scalars['String']>
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
  /** Transaction count in block */
  transactionCount?: Maybe<Scalars['Int']>
}

/** Block */
export type BitcoinBlockAnyArgs = {
  of: BitcoinBlocksMeasureable
}

/** Block */
export type BitcoinBlockBlockHashArgs = {
  blockHash?: Maybe<StringIdSelector>
}

/** Block */
export type BitcoinBlockBlockSizeArgs = {
  blockSize?: Maybe<IntegerSelector>
}

/** Block */
export type BitcoinBlockBlockStrippedSizeArgs = {
  blockStrippedSize?: Maybe<IntegerSelector>
}

/** Block */
export type BitcoinBlockBlockVersionArgs = {
  blockVersion?: Maybe<IntegerSelector>
}

/** Block */
export type BitcoinBlockBlockWeightArgs = {
  blockWeight?: Maybe<IntegerSelector>
}

/** Block */
export type BitcoinBlockCountArgs = {
  uniq?: Maybe<BitcoinBlockUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<StringIdSelector>
  blockSize?: Maybe<IntegerSelector>
  blockWeight?: Maybe<IntegerSelector>
  blockVersion?: Maybe<IntegerSelector>
  txCount?: Maybe<IntegerSelector>
  blockStrippedSize?: Maybe<IntegerSelector>
  difficulty?: Maybe<FloatSelector>
}

/** Block */
export type BitcoinBlockDifficultyArgs = {
  difficulty?: Maybe<FloatSelector>
}

/** Block */
export type BitcoinBlockHeightArgs = {
  height?: Maybe<BlockSelector>
}

/** Block */
export type BitcoinBlockMaximumArgs = {
  of: BitcoinBlocksMeasureable
  get?: Maybe<BitcoinBlocksMeasureable>
}

/** Block */
export type BitcoinBlockMinimumArgs = {
  of: BitcoinBlocksMeasureable
  get?: Maybe<BitcoinBlocksMeasureable>
}

/** Block */
export type BitcoinBlockTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Block */
export type BitcoinBlockTransactionCountArgs = {
  transactionCount?: Maybe<IntegerSelector>
}

export type BitcoinBlockFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<StringIdSelector>
  blockSize?: Maybe<IntegerSelector>
  blockWeight?: Maybe<IntegerSelector>
  blockVersion?: Maybe<IntegerSelector>
  transactionCount?: Maybe<IntegerSelector>
  blockStrippedSize?: Maybe<IntegerSelector>
  difficulty?: Maybe<FloatSelector>
}

export enum BitcoinBlockUniq {
  /** Unique date count */
  Dates = 'dates',
}

export enum BitcoinBlocksMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockHash = 'block_hash',
  /** Tx Count */
  TransactionCount = 'transaction_count',
}

/** Coinpath */
export type BitcoinCoinpath = {
  __typename?: 'BitcoinCoinpath'
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Receiver address */
  receiver?: Maybe<Address>
  /** Sender address */
  sender?: Maybe<Address>
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashIndexValues>
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>
}

/** Coinpath */
export type BitcoinCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>
}

/** Coinpath */
export type BitcoinCoinpathAnyArgs = {
  of: CoinpathMeasureable
}

/** Coinpath */
export type BitcoinCoinpathMaximumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/** Coinpath */
export type BitcoinCoinpathMinimumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

export enum BitcoinCoinpathMethod {
  /** Tracking money flow by amounts, ignoring coins (default) */
  Moneyflow = 'moneyflow',
  /** Tracking coins by UTXO transactions */
  Utxo = 'utxo',
}

/** Limits, Ordering, Constraints, Coinpath Options */
export type BitcoinCoinpathOptions = {
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>
  /** Limit number of results by specific field */
  limitBy?: Maybe<LimitByOption>
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>
  /** Ordering field(s) for ascending */
  asc?: Maybe<Array<Scalars['String']>>
  /** Ordering field(s) for descending */
  desc?: Maybe<Array<Scalars['String']>>
  /** Flow direction */
  direction?: Maybe<FlowDirection>
  /** Do not include transactions below this amount */
  minimumTxAmount?: Maybe<Scalars['Float']>
  /** Do not expand addresses having count transactions more than this */
  maximumAddressTxCount?: Maybe<Scalars['Int']>
  /** Maximum total transaction count returned */
  maximumTotalTxCount?: Maybe<Scalars['Int']>
  /** Raise error if complexity ( currently measured in transaction count ) is higher than this option */
  complexityLimit?: Maybe<Scalars['Int']>
  /** Invalidating cache seed */
  seed?: Maybe<Scalars['Int']>
  /** Method to use coinpath */
  coinpathMethod?: Maybe<BitcoinCoinpathMethod>
}

export type BitcoinInputFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  inputIndex?: Maybe<IntegerSelector>
  inputAddress?: Maybe<AddressSelector>
  inOutputTxId?: Maybe<HashSelector>
  inOutputIndex?: Maybe<IntegerSelector>
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>
  inputValue?: Maybe<FloatSelector>
}

export enum BitcoinInputScriptType {
  /** Input Script Signature */
  ScriptSig = 'scriptSig',
  /** Input Script TX Witness Script */
  Txinwitness = 'txinwitness',
  /** Input Script Coinbase Script */
  Coinbase = 'coinbase',
}

/** Selector of input script type */
export type BitcoinInputScriptTypeSelector = {
  /** Equal to Script Type */
  is?: Maybe<BitcoinInputScriptType>
  /** Not Equal to Script Type */
  not?: Maybe<BitcoinInputScriptType>
  /** In the list of Script Type */
  in?: Maybe<Array<BitcoinInputScriptType>>
  /** Not in the list of Script Type */
  notIn?: Maybe<Array<BitcoinInputScriptType>>
}

export enum BitcoinInputUniq {
  /** Unique transactions count */
  Transactions = 'transactions',
  /** Unique block count */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique addresses count */
  Addresses = 'addresses',
}

export enum BitcoinInputsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Transaction index */
  TxIndex = 'tx_index',
  /** Amount */
  Amount = 'amount',
  /** Address */
  Address = 'address',
  /** Input index */
  InputIndex = 'input_index',
}

export enum BitcoinNetwork {
  /** Bitcoin ( BTC ) */
  Bitcoin = 'bitcoin',
  /** Bitcoin Cash ( BCH ) */
  Bitcash = 'bitcash',
  /** Bitcoin SV ( BSV ) */
  Bitcoinsv = 'bitcoinsv',
  /** Litecoin ( LTC ) */
  Litecoin = 'litecoin',
  /** Dash ( DASH ) */
  Dash = 'dash',
  /** Dogecoin ( DOGE ) */
  Dogecoin = 'dogecoin',
  /** Cardano ( ADA ) */
  Cardano = 'cardano',
  /** ZCash ( ZCASH ) */
  Zcash = 'zcash',
}

export enum BitcoinOutputDirection {
  /** Not defined */
  Unknown = 'unknown',
  /** Not a change return */
  NotChange = 'not_change',
  /** Change return */
  Change = 'change',
  /** Likely Not a change return */
  LikelyNotChange = 'likely_not_change',
  /** Likely Change return */
  LikelyChange = 'likely_change',
  /** Mining */
  Mining = 'mining',
  /** Fee */
  Fee = 'fee',
  /** Minting */
  Minting = 'minting',
  /** Genesis */
  Genesis = 'genesis',
}

/** A guessed direction of output */
export type BitcoinOutputDirectionSelector = {
  /** Equal to direction */
  is?: Maybe<BitcoinOutputDirection>
  /** Not Equal to direction */
  not?: Maybe<BitcoinOutputDirection>
  /** In the list of direction */
  in?: Maybe<Array<BitcoinOutputDirection>>
  /** Not in the list of direction */
  notIn?: Maybe<Array<BitcoinOutputDirection>>
}

export type BitcoinOutputFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  outputIndex?: Maybe<IntegerSelector>
  outputAddress?: Maybe<AddressSelector>
  outputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>
  outputValue?: Maybe<FloatSelector>
}

export enum BitcoinOutputScriptType {
  /** Output PubKey */
  Pubkey = 'pubkey',
  /** Output PubKey Hash */
  Pubkeyhash = 'pubkeyhash',
  /** Output Script Hash */
  Scripthash = 'scripthash',
  /** Output Witness Key Hash */
  WitnessV0Keyhash = 'witness_v0_keyhash',
  /** Output nulldata */
  Nulldata = 'nulldata',
  /** Output Witness Script Hash */
  WitnessV0Scripthash = 'witness_v0_scripthash',
  /** Non standard output script */
  Nonstandard = 'nonstandard',
  /** Output Multisignature Wallet */
  Multisig = 'multisig',
  /** Output Witness Other */
  WitnessUnknown = 'witness_unknown',
}

/** Selector of output script type */
export type BitcoinOutputScriptTypeSelector = {
  /** Equal to Script Type */
  is?: Maybe<BitcoinOutputScriptType>
  /** Not Equal to Script Type */
  not?: Maybe<BitcoinOutputScriptType>
  /** In the list of Script Type */
  in?: Maybe<Array<BitcoinOutputScriptType>>
  /** Not in the list of Script Type */
  notIn?: Maybe<Array<BitcoinOutputScriptType>>
}

export enum BitcoinOutputUniq {
  /** Unique transactions count */
  Transactions = 'transactions',
  /** Unique block count */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique input addresses count */
  Addresses = 'addresses',
}

export enum BitcoinOutputsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Transaction index */
  TxIndex = 'tx_index',
  /** Amount */
  Amount = 'amount',
  /** Address */
  Address = 'address',
  /** Output index */
  OutputIndex = 'output_index',
}

/** Transaction */
export type BitcoinTransaction = {
  __typename?: 'BitcoinTransaction'
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Transaction  count */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Transaction total fee value */
  feeValue?: Maybe<Scalars['Float']>
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction index in block, 0-based */
  index: Scalars['String']
  /** Transaction total input count */
  inputCount?: Maybe<Scalars['Int']>
  /** Transaction total input value */
  inputValue?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  /** Transaction total mined value */
  minedValue?: Maybe<Scalars['Float']>
  minimum?: Maybe<Scalars['String']>
  /** Transaction total output count */
  outputCount?: Maybe<Scalars['Int']>
  /** Transaction total output value */
  outputValue?: Maybe<Scalars['Float']>
  /** Transaction is coinbase */
  txCoinbase?: Maybe<Scalars['Boolean']>
  /** Transaction locktime */
  txLocktime?: Maybe<Scalars['BigInt']>
  /** Transaction size */
  txSize?: Maybe<Scalars['Int']>
  /** Transaction version */
  txVersion?: Maybe<Scalars['Int']>
  /** Transaction vsize */
  txVsize?: Maybe<Scalars['Int']>
  /** Transaction weight */
  txWeight?: Maybe<Scalars['Int']>
}

/** Transaction */
export type BitcoinTransactionAnyArgs = {
  of: BitcoinTransactionsMeasureable
}

/** Transaction */
export type BitcoinTransactionBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transaction */
export type BitcoinTransactionCountArgs = {
  uniq?: Maybe<BitcoinTransactionUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  txSize?: Maybe<IntegerSelector>
  txVsize?: Maybe<IntegerSelector>
  txWeight?: Maybe<IntegerSelector>
  txVersion?: Maybe<IntegerSelector>
  txCoinbase?: Maybe<Scalars['Boolean']>
  inputCount?: Maybe<IntegerSelector>
  outputCount?: Maybe<IntegerSelector>
  inputValue?: Maybe<FloatSelector>
  outputValue?: Maybe<FloatSelector>
  feeValue?: Maybe<FloatSelector>
  minedValue?: Maybe<FloatSelector>
  txLocktime?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionFeeValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  txSize?: Maybe<IntegerSelector>
  txVsize?: Maybe<IntegerSelector>
  txWeight?: Maybe<IntegerSelector>
  txVersion?: Maybe<IntegerSelector>
  txCoinbase?: Maybe<Scalars['Boolean']>
  inputCount?: Maybe<IntegerSelector>
  outputCount?: Maybe<IntegerSelector>
  inputValue?: Maybe<FloatSelector>
  outputValue?: Maybe<FloatSelector>
  feeValue?: Maybe<FloatSelector>
  minedValue?: Maybe<FloatSelector>
  txLocktime?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionHashArgs = {
  txHash?: Maybe<StringIdSelector>
}

/** Transaction */
export type BitcoinTransactionIndexArgs = {
  txIndex?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionInputCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  txSize?: Maybe<IntegerSelector>
  txVsize?: Maybe<IntegerSelector>
  txWeight?: Maybe<IntegerSelector>
  txVersion?: Maybe<IntegerSelector>
  txCoinbase?: Maybe<Scalars['Boolean']>
  inputCount?: Maybe<IntegerSelector>
  outputCount?: Maybe<IntegerSelector>
  inputValue?: Maybe<FloatSelector>
  outputValue?: Maybe<FloatSelector>
  feeValue?: Maybe<FloatSelector>
  minedValue?: Maybe<FloatSelector>
  txLocktime?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionInputValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  txSize?: Maybe<IntegerSelector>
  txVsize?: Maybe<IntegerSelector>
  txWeight?: Maybe<IntegerSelector>
  txVersion?: Maybe<IntegerSelector>
  txCoinbase?: Maybe<Scalars['Boolean']>
  inputCount?: Maybe<IntegerSelector>
  outputCount?: Maybe<IntegerSelector>
  inputValue?: Maybe<FloatSelector>
  outputValue?: Maybe<FloatSelector>
  feeValue?: Maybe<FloatSelector>
  minedValue?: Maybe<FloatSelector>
  txLocktime?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionMaximumArgs = {
  of: BitcoinTransactionsMeasureable
  get?: Maybe<BitcoinTransactionsMeasureable>
}

/** Transaction */
export type BitcoinTransactionMinedValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  txSize?: Maybe<IntegerSelector>
  txVsize?: Maybe<IntegerSelector>
  txWeight?: Maybe<IntegerSelector>
  txVersion?: Maybe<IntegerSelector>
  txCoinbase?: Maybe<Scalars['Boolean']>
  inputCount?: Maybe<IntegerSelector>
  outputCount?: Maybe<IntegerSelector>
  inputValue?: Maybe<FloatSelector>
  outputValue?: Maybe<FloatSelector>
  feeValue?: Maybe<FloatSelector>
  minedValue?: Maybe<FloatSelector>
  txLocktime?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionMinimumArgs = {
  of: BitcoinTransactionsMeasureable
  get?: Maybe<BitcoinTransactionsMeasureable>
}

/** Transaction */
export type BitcoinTransactionOutputCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  txSize?: Maybe<IntegerSelector>
  txVsize?: Maybe<IntegerSelector>
  txWeight?: Maybe<IntegerSelector>
  txVersion?: Maybe<IntegerSelector>
  txCoinbase?: Maybe<Scalars['Boolean']>
  inputCount?: Maybe<IntegerSelector>
  outputCount?: Maybe<IntegerSelector>
  inputValue?: Maybe<FloatSelector>
  outputValue?: Maybe<FloatSelector>
  feeValue?: Maybe<FloatSelector>
  minedValue?: Maybe<FloatSelector>
  txLocktime?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionOutputValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  txSize?: Maybe<IntegerSelector>
  txVsize?: Maybe<IntegerSelector>
  txWeight?: Maybe<IntegerSelector>
  txVersion?: Maybe<IntegerSelector>
  txCoinbase?: Maybe<Scalars['Boolean']>
  inputCount?: Maybe<IntegerSelector>
  outputCount?: Maybe<IntegerSelector>
  inputValue?: Maybe<FloatSelector>
  outputValue?: Maybe<FloatSelector>
  feeValue?: Maybe<FloatSelector>
  minedValue?: Maybe<FloatSelector>
  txLocktime?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionTxCoinbaseArgs = {
  txCoinbase?: Maybe<Scalars['Boolean']>
}

/** Transaction */
export type BitcoinTransactionTxLocktimeArgs = {
  txLocktime?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionTxSizeArgs = {
  txSize?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionTxVersionArgs = {
  txVersion?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionTxVsizeArgs = {
  txVsize?: Maybe<IntegerSelector>
}

/** Transaction */
export type BitcoinTransactionTxWeightArgs = {
  txWeight?: Maybe<IntegerSelector>
}

export type BitcoinTransactionFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  txSize?: Maybe<IntegerSelector>
  txVsize?: Maybe<IntegerSelector>
  txWeight?: Maybe<IntegerSelector>
  txVersion?: Maybe<IntegerSelector>
  txCoinbase?: Maybe<Scalars['Boolean']>
  inputCount?: Maybe<IntegerSelector>
  outputCount?: Maybe<IntegerSelector>
  inputValue?: Maybe<FloatSelector>
  outputValue?: Maybe<FloatSelector>
  feeValue?: Maybe<FloatSelector>
  minedValue?: Maybe<FloatSelector>
  txLocktime?: Maybe<IntegerSelector>
}

/** Transaction Input */
export type BitcoinTransactionInput = {
  __typename?: 'BitcoinTransactionInput'
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Input count */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Input address */
  inputAddress?: Maybe<Address>
  /** Input index */
  inputIndex?: Maybe<Scalars['Int']>
  /** Input script */
  inputScript?: Maybe<Scalars['String']>
  /** Input script type and attributes */
  inputScriptType?: Maybe<InputScript>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Output Transaction for this input */
  outputTransaction?: Maybe<TransactionHashIndex>
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>
  /** Input value */
  value?: Maybe<Scalars['Float']>
}

/** Transaction Input */
export type BitcoinTransactionInputAnyArgs = {
  of: BitcoinInputsMeasureable
}

/** Transaction Input */
export type BitcoinTransactionInputBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transaction Input */
export type BitcoinTransactionInputCountArgs = {
  uniq?: Maybe<BitcoinInputUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  inputIndex?: Maybe<IntegerSelector>
  inputAddress?: Maybe<AddressSelector>
  inOutputTxId?: Maybe<HashSelector>
  inOutputIndex?: Maybe<IntegerSelector>
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>
  inputValue?: Maybe<FloatSelector>
}

/** Transaction Input */
export type BitcoinTransactionInputInputAddressArgs = {
  inputAddress?: Maybe<AddressSelector>
}

/** Transaction Input */
export type BitcoinTransactionInputInputIndexArgs = {
  inputIndex?: Maybe<IntegerSelector>
}

/** Transaction Input */
export type BitcoinTransactionInputInputScriptTypeArgs = {
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>
}

/** Transaction Input */
export type BitcoinTransactionInputMaximumArgs = {
  of: BitcoinInputsMeasureable
  get?: Maybe<BitcoinInputsMeasureable>
}

/** Transaction Input */
export type BitcoinTransactionInputMinimumArgs = {
  of: BitcoinInputsMeasureable
  get?: Maybe<BitcoinInputsMeasureable>
}

/** Transaction Input */
export type BitcoinTransactionInputOutputTransactionArgs = {
  inOutputTxId?: Maybe<StringIdSelector>
  inOutputIndex?: Maybe<IntegerSelector>
}

/** Transaction Input */
export type BitcoinTransactionInputTransactionArgs = {
  txId?: Maybe<StringIdSelector>
  txIndex?: Maybe<IntegerSelector>
}

/** Transaction Input */
export type BitcoinTransactionInputValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  inputIndex?: Maybe<IntegerSelector>
  inputAddress?: Maybe<AddressSelector>
  inOutputTxId?: Maybe<HashSelector>
  inOutputIndex?: Maybe<IntegerSelector>
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>
  inputValue?: Maybe<FloatSelector>
}

/** Transaction Output */
export type BitcoinTransactionOutput = {
  __typename?: 'BitcoinTransactionOutput'
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Output count */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Output address */
  outputAddress?: Maybe<Address>
  /** Output guessed direction */
  outputDirection?: Maybe<BitcoinOutputDirection>
  /** Output index */
  outputIndex?: Maybe<Scalars['Int']>
  /** Output script */
  outputScript?: Maybe<Scalars['String']>
  /** Output script type and attributes */
  outputScriptType?: Maybe<OutputScript>
  reqSigs?: Maybe<Scalars['Int']>
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>
  /** Output value */
  value?: Maybe<Scalars['Float']>
}

/** Transaction Output */
export type BitcoinTransactionOutputAnyArgs = {
  of: BitcoinOutputsMeasureable
}

/** Transaction Output */
export type BitcoinTransactionOutputBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transaction Output */
export type BitcoinTransactionOutputCountArgs = {
  uniq?: Maybe<BitcoinOutputUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  outputIndex?: Maybe<IntegerSelector>
  outputAddress?: Maybe<AddressSelector>
  outputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>
  outputValue?: Maybe<FloatSelector>
}

/** Transaction Output */
export type BitcoinTransactionOutputMaximumArgs = {
  of: BitcoinOutputsMeasureable
  get?: Maybe<BitcoinOutputsMeasureable>
}

/** Transaction Output */
export type BitcoinTransactionOutputMinimumArgs = {
  of: BitcoinOutputsMeasureable
  get?: Maybe<BitcoinOutputsMeasureable>
}

/** Transaction Output */
export type BitcoinTransactionOutputOutputAddressArgs = {
  outputAddress?: Maybe<AddressSelector>
}

/** Transaction Output */
export type BitcoinTransactionOutputOutputDirectionArgs = {
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>
}

/** Transaction Output */
export type BitcoinTransactionOutputOutputIndexArgs = {
  outputIndex?: Maybe<IntegerSelector>
}

/** Transaction Output */
export type BitcoinTransactionOutputOutputScriptTypeArgs = {
  inputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>
}

/** Transaction Output */
export type BitcoinTransactionOutputTransactionArgs = {
  txId?: Maybe<StringIdSelector>
  txIndex?: Maybe<IntegerSelector>
}

/** Transaction Output */
export type BitcoinTransactionOutputValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<IntegerSelector>
  outputIndex?: Maybe<IntegerSelector>
  outputAddress?: Maybe<AddressSelector>
  outputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>
  outputValue?: Maybe<FloatSelector>
}

export enum BitcoinTransactionUniq {
  /** Unique block count */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
}

export enum BitcoinTransactionsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Transaction index */
  TxIndex = 'tx_index',
  /** Input count */
  InputCount = 'input_count',
  /** Output count */
  OutputCount = 'output_count',
  /** Transaction size */
  TxSize = 'tx_size',
  /** Transaction input value */
  InputValue = 'input_value',
  /** Transaction output value */
  OutputValue = 'output_value',
}

/** Block */
export type Block = {
  __typename?: 'Block'
  /** Block number (height) in blockchain */
  height: Scalars['Int']
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
}

/** BlockExtended */
export type BlockExtended = {
  __typename?: 'BlockExtended'
  /** Hash hex representation */
  hash: Scalars['String']
  /** Block number (height) in blockchain */
  height: Scalars['Int']
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
}

/** ConfluxBlock */
export type BlockInfo = {
  __typename?: 'BlockInfo'
  /** Block hash */
  hash?: Maybe<Scalars['String']>
  /** Block number (height) in blockchain */
  height: Scalars['Int']
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
}

/** Select block by height ( sequence number) */
export type BlockSelector = {
  /** Block height is */
  is?: Maybe<Scalars['Int']>
  /** Block height not */
  not?: Maybe<Scalars['Int']>
  /** Block height in the list */
  in?: Maybe<Array<Scalars['Int']>>
  /** Block height not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>
  /** Block height greater than */
  gt?: Maybe<Scalars['Int']>
  /** Block height less than */
  lt?: Maybe<Scalars['Int']>
  /** Block height less or equal than */
  lteq?: Maybe<Scalars['Int']>
  /** Block height greater or equal than */
  gteq?: Maybe<Scalars['Int']>
  /** Block height in range */
  between?: Maybe<Array<Scalars['Int']>>
}

/** Select block by height ( sequence number) */
export type BlockSelectorRange = {
  /** Block height less or equal than */
  lteq?: Maybe<Scalars['Int']>
  /** Block height greater or equal than */
  gteq?: Maybe<Scalars['Int']>
  /** Block height in range */
  between?: Maybe<Array<Scalars['Int']>>
}

/** Blockchain network */
export type BlockchainNetwork = {
  __typename?: 'BlockchainNetwork'
  /** Network name */
  network: Network
  /** Network protocol type */
  protocol: Protocol
}

/** Select by boolean (sequence number) */
export type BooleanSelector = {
  /** Is */
  is?: Maybe<Scalars['Boolean']>
  /** Is not */
  not?: Maybe<Scalars['Boolean']>
}

/** Transaction attributes in coinpath */
export type CoinpathEntry = {
  __typename?: 'CoinpathEntry'
  /** Amount involved in the flow */
  amount: Scalars['Float']
  /** Block of transaction */
  height: Scalars['Int']
  /** Time of transaction in ISO 8601 format */
  timestamp: Scalars['ISO8601DateTime']
  /** Hash of transaction */
  txHash: Scalars['String']
  /** Amount transfered in transaction */
  txValue: Scalars['Float']
}

export enum CoinpathMeasureable {
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Sender */
  Sender = 'sender',
  /** Receiver */
  Receiver = 'receiver',
  /** Depth */
  Depth = 'depth',
}

/** Limits, Ordering, Constraints, Coinpath Options */
export type CoinpathOptions = {
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>
  /** Limit number of results by specific field */
  limitBy?: Maybe<LimitByOption>
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>
  /** Ordering field(s) for ascending */
  asc?: Maybe<Array<Scalars['String']>>
  /** Ordering field(s) for descending */
  desc?: Maybe<Array<Scalars['String']>>
  /** Flow direction */
  direction?: Maybe<FlowDirection>
  /** Do not include transactions below this amount */
  minimumTxAmount?: Maybe<Scalars['Float']>
  /** Do not expand addresses having count transactions more than this */
  maximumAddressTxCount?: Maybe<Scalars['Int']>
  /** Maximum total transaction count returned */
  maximumTotalTxCount?: Maybe<Scalars['Int']>
  /** Raise error if complexity ( currently measured in transaction count ) is higher than this option */
  complexityLimit?: Maybe<Scalars['Int']>
  /** Invalidating cache seed */
  seed?: Maybe<Scalars['Int']>
}

/** Conflux Chain */
export type Conflux = {
  __typename?: 'Conflux'
  /** Basic information about address ( or smart contract ) */
  address: Array<EthereumAddressInfoWithBalance>
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<EthereumArguments>>
  /** Blockchain Blocks */
  blocks?: Maybe<Array<ConfluxBlocks>>
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EthereumCoinpath>>
  /** Trades on Ethereum DEX Smart Contracts */
  dexTrades?: Maybe<Array<EthereumDexTrades>>
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EthereumSmartContractCalls>>
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<EthereumSmartContractEvent>>
  /** Blockchain Transactions */
  transactions?: Maybe<Array<ConfluxTransactions>>
  /** Currency Transfers */
  transfers?: Maybe<Array<EthereumTransfers>>
}

/** Conflux Chain */
export type ConfluxAddressArgs = {
  address: Array<EthereumAddressSelectorIn>
}

/** Conflux Chain */
export type ConfluxArgumentsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  reference?: Maybe<Array<EthereumAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  argumentType?: Maybe<Array<ArgumentTypeSelector>>
  signatureType?: Maybe<SignatureTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractEvent?: Maybe<EventSelector>
  external?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<EthereumArgumentFilter>>
  options?: Maybe<QueryOptions>
}

/** Conflux Chain */
export type ConfluxBlocksArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  epoch?: Maybe<BlockSelector>
  pivot?: Maybe<Scalars['Boolean']>
  blockHash?: Maybe<HashSelector>
  referenceBlockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  refereeCount?: Maybe<Array<IntegerSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
  any?: Maybe<Array<ConfluxBlockFilter>>
  options?: Maybe<QueryOptions>
}

/** Conflux Chain */
export type ConfluxCoinpathArgs = {
  sender?: Maybe<EthereumAddressSelector>
  receiver?: Maybe<EthereumAddressSelector>
  currency?: Maybe<Array<EthereumCurrencySelector>>
  initialAddress?: Maybe<EthereumAddressSelector>
  initialDate?: Maybe<DateSelector>
  initialTime?: Maybe<DateTimeSelector>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  depth?: Maybe<IntegerLimitedSelector>
  options?: Maybe<CoinpathOptions>
}

/** Conflux Chain */
export type ConfluxDexTradesArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  protocol?: Maybe<Array<StringSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeName?: Maybe<Array<StringSelector>>
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>
  maker?: Maybe<Array<EthereumAddressSelector>>
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  taker?: Maybe<Array<EthereumAddressSelector>>
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>
  tradeIndex?: Maybe<Array<StringSelector>>
  buyAmount?: Maybe<Array<AmountSelector>>
  sellAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  priceAsymmetry?: Maybe<Array<FloatSelector>>
  tradeAmountUsd?: Maybe<Array<FloatSelector>>
  any?: Maybe<Array<EthereumDexTradeFilter>>
  options?: Maybe<QueryOptions>
}

/** Conflux Chain */
export type ConfluxSmartContractCallsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractType?: Maybe<SmartContractTypeSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Array<Scalars['Boolean']>>
  any?: Maybe<Array<EthereumSmartContractCallFilter>>
  options?: Maybe<QueryOptions>
}

/** Conflux Chain */
export type ConfluxSmartContractEventsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  smartContractType?: Maybe<SmartContractTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractEvent?: Maybe<EventSelector>
  any?: Maybe<Array<EthereumSmartContractEventFilter>>
  options?: Maybe<QueryOptions>
}

/** Conflux Chain */
export type ConfluxTransactionsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  blockHash?: Maybe<HashSelector>
  any?: Maybe<Array<ConfluxTransactionFilter>>
  options?: Maybe<QueryOptions>
}

/** Conflux Chain */
export type ConfluxTransfersArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  entityId?: Maybe<EntitySelector>
  sender?: Maybe<Array<EthereumAddressSelector>>
  receiver?: Maybe<Array<EthereumAddressSelector>>
  currency?: Maybe<Array<EthereumCurrencySelector>>
  external?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  any?: Maybe<Array<EthereumTransferFilter>>
  options?: Maybe<QueryOptions>
}

export type ConfluxBlockFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  epoch?: Maybe<BlockSelector>
  pivot?: Maybe<Scalars['Boolean']>
  blockHash?: Maybe<HashSelector>
  referenceBlockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  refereeCount?: Maybe<Array<IntegerSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocks = {
  __typename?: 'ConfluxBlocks'
  /** Block is adaptive */
  adaptive: Scalars['Boolean']
  any?: Maybe<Scalars['String']>
  /** Blame */
  blame: Scalars['Int']
  /** Block index in epoch */
  blockPosition: Scalars['Int']
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Epoch in blockchain */
  epoch: Scalars['Int']
  /** Block hash */
  hash: Scalars['String']
  /** Block height in blockchain */
  height: Scalars['Int']
  maximum?: Maybe<Scalars['String']>
  /** Block miner */
  miner?: Maybe<EthereumAddressInfo>
  minimum?: Maybe<Scalars['String']>
  /** Block nonce */
  nonce: Scalars['Int']
  /** Parent block hash */
  parentHash: Scalars['String']
  /** Block is pivot */
  pivot: Scalars['Boolean']
  /** Power Quality */
  powerQuality: Scalars['BigInt']
  refereeCount?: Maybe<Scalars['Int']>
  /** Reference Block hash */
  referenceBlockHash: Scalars['String']
  size?: Maybe<Scalars['Int']>
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
  totalDifficulty?: Maybe<Scalars['Float']>
  transactionCount?: Maybe<Scalars['Int']>
  /** Hash of Transaction included in block */
  txHash: Scalars['String']
  uncleCount?: Maybe<Scalars['Int']>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksAnyArgs = {
  of: ConfluxBlocksMeasureable
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksCountArgs = {
  uniq?: Maybe<EthereumBlocksUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  epoch?: Maybe<BlockSelector>
  pivot?: Maybe<Scalars['Boolean']>
  blockHash?: Maybe<HashSelector>
  referenceBlockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  refereeCount?: Maybe<Array<IntegerSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksEpochArgs = {
  height?: Maybe<BlockSelector>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksHeightArgs = {
  height?: Maybe<BlockSelector>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksMaximumArgs = {
  of: ConfluxBlocksMeasureable
  get?: Maybe<ConfluxBlocksMeasureable>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksMinerArgs = {
  miner?: Maybe<Array<EthereumAddressSelector>>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksMinimumArgs = {
  of: ConfluxBlocksMeasureable
  get?: Maybe<ConfluxBlocksMeasureable>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksRefereeCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  epoch?: Maybe<BlockSelector>
  pivot?: Maybe<Scalars['Boolean']>
  blockHash?: Maybe<HashSelector>
  referenceBlockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  refereeCount?: Maybe<Array<IntegerSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksReferenceBlockHashArgs = {
  referenceBlockHash?: Maybe<Array<HashSelector>>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksSizeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  epoch?: Maybe<BlockSelector>
  pivot?: Maybe<Scalars['Boolean']>
  blockHash?: Maybe<HashSelector>
  referenceBlockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  refereeCount?: Maybe<Array<IntegerSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksTotalDifficultyArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  epoch?: Maybe<BlockSelector>
  pivot?: Maybe<Scalars['Boolean']>
  blockHash?: Maybe<HashSelector>
  referenceBlockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  refereeCount?: Maybe<Array<IntegerSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksTransactionCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  epoch?: Maybe<BlockSelector>
  pivot?: Maybe<Scalars['Boolean']>
  blockHash?: Maybe<HashSelector>
  referenceBlockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  refereeCount?: Maybe<Array<IntegerSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksTxHashArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

/** Blocks in Conflux blockchain */
export type ConfluxBlocksUncleCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  epoch?: Maybe<BlockSelector>
  pivot?: Maybe<Scalars['Boolean']>
  blockHash?: Maybe<HashSelector>
  referenceBlockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  refereeCount?: Maybe<Array<IntegerSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

export enum ConfluxBlocksMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockHash = 'block_hash',
  /** Block Miner */
  Miner = 'miner',
  /** Block Referee Count */
  RefereeCount = 'referee_count',
  /** Block TX Count */
  TransactionCount = 'transaction_count',
}

export enum ConfluxNetwork {
  /** Conflux Oceanus */
  ConfluxOceanus = 'conflux_oceanus',
  /** Conflux Tethys */
  ConfluxTethys = 'conflux_tethys',
}

export type ConfluxTransactionFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  blockHash?: Maybe<HashSelector>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactions = {
  __typename?: 'ConfluxTransactions'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<BlockInfo>
  count?: Maybe<Scalars['Int']>
  /** Created smart contract */
  creates?: Maybe<EthereumAddressInfo>
  /** Currency of amount */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  /** Error message if any */
  error?: Maybe<Scalars['String']>
  gas?: Maybe<Scalars['Int']>
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>
  /** Gas price in Gwei */
  gasPrice: Scalars['Float']
  gasValue?: Maybe<Scalars['Float']>
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>
  /** Transaction sender */
  sender?: Maybe<EthereumAddressInfo>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  blockHash?: Maybe<HashSelector>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsAnyArgs = {
  of: ConfluxTransactionsMeasureable
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsBlockArgs = {
  blockHash?: Maybe<HashSelector>
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsCountArgs = {
  uniq?: Maybe<EthereumTransactionsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  blockHash?: Maybe<HashSelector>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsCreatesArgs = {
  txCreates?: Maybe<Array<EthereumAddressSelector>>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  blockHash?: Maybe<HashSelector>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsGasCurrencyArgs = {
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsGasPriceArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  blockHash?: Maybe<HashSelector>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  blockHash?: Maybe<HashSelector>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsIndexArgs = {
  txIndex?: Maybe<Array<TxIndexSelector>>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsMaximumArgs = {
  of: ConfluxTransactionsMeasureable
  get?: Maybe<ConfluxTransactionsMeasureable>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsMinimumArgs = {
  of: ConfluxTransactionsMeasureable
  get?: Maybe<ConfluxTransactionsMeasureable>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsSenderArgs = {
  txSender?: Maybe<Array<EthereumAddressSelector>>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Transactions in Conflux blockchain */
export type ConfluxTransactionsToArgs = {
  txTo?: Maybe<Array<EthereumAddressSelector>>
}

export enum ConfluxTransactionsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Amount */
  Amount = 'amount',
  /** Transaction Sender */
  TxSender = 'tx_sender',
  /** Gas value */
  GasValue = 'gas_value',
  /** Gas price */
  GasPrice = 'gas_price',
  /** Gas used */
  Gas = 'gas',
}

export enum Continent {
  /** Africa */
  Africa = 'Africa',
  /** Asia */
  Asia = 'Asia',
  /** Europe */
  Europe = 'Europe',
  /** North America */
  NorthAmerica = 'North_America',
  /** Oceania */
  Oceania = 'Oceania',
  /** South America */
  SouthAmerica = 'South_America',
  /** Antarctica */
  Antarctica = 'Antarctica',
}

/** Continent selector */
export type ContinentSelector = {
  /** Country code is */
  is?: Maybe<Continent>
  /** Country code not */
  not?: Maybe<Continent>
  /** Country code in the list */
  in?: Maybe<Array<Continent>>
  /** Country code not in the list */
  notIn?: Maybe<Array<Continent>>
}

export enum CountryCode {
  /** Afghanistan */
  Af = 'AF',
  /** Albania */
  Al = 'AL',
  /** Algeria */
  Dz = 'DZ',
  /** American Samoa */
  As = 'AS',
  /** Andorra */
  Ad = 'AD',
  /** Angola */
  Ao = 'AO',
  /** Anguilla */
  Ai = 'AI',
  /** Antarctica */
  Aq = 'AQ',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Argentina */
  Ar = 'AR',
  /** Armenia */
  Am = 'AM',
  /** Aruba */
  Aw = 'AW',
  /** Australia */
  Au = 'AU',
  /** Austria */
  At = 'AT',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bahamas */
  Bs = 'BS',
  /** Bahrain */
  Bh = 'BH',
  /** Bangladesh */
  Bd = 'BD',
  /** Barbados */
  Bb = 'BB',
  /** Belarus */
  By = 'BY',
  /** Belgium */
  Be = 'BE',
  /** Belize */
  Bz = 'BZ',
  /** Benin */
  Bj = 'BJ',
  /** Bermuda */
  Bm = 'BM',
  /** Bhutan */
  Bt = 'BT',
  /** Bolivia */
  Bo = 'BO',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Botswana */
  Bw = 'BW',
  /** Brazil */
  Br = 'BR',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** British Virgin Islands */
  Vg = 'VG',
  /** Brunei */
  Bn = 'BN',
  /** Bulgaria */
  Bg = 'BG',
  /** Burkina Faso */
  Bf = 'BF',
  /** Burundi */
  Bi = 'BI',
  /** Cambodia */
  Kh = 'KH',
  /** Cameroon */
  Cm = 'CM',
  /** Canada */
  Ca = 'CA',
  /** Cape Verde */
  Cv = 'CV',
  /** Cayman Islands */
  Ky = 'KY',
  /** Central African Republic */
  Cf = 'CF',
  /** Chad */
  Td = 'TD',
  /** Chile */
  Cl = 'CL',
  /** China */
  Cn = 'CN',
  /** Christmas Island */
  Cx = 'CX',
  /** Cocos Islands */
  Cc = 'CC',
  /** Colombia */
  Co = 'CO',
  /** Comoros */
  Km = 'KM',
  /** Cook Islands */
  Ck = 'CK',
  /** Costa Rica */
  Cr = 'CR',
  /** Croatia */
  Hr = 'HR',
  /** Cuba */
  Cu = 'CU',
  /** Curacao */
  Cw = 'CW',
  /** Cyprus */
  Cy = 'CY',
  /** Czech Republic */
  Cz = 'CZ',
  /** Democratic Republic of the Congo */
  Cd = 'CD',
  /** Denmark */
  Dk = 'DK',
  /** Djibouti */
  Dj = 'DJ',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** East Timor */
  Tl = 'TL',
  /** Ecuador */
  Ec = 'EC',
  /** Egypt */
  Eg = 'EG',
  /** El Salvador */
  Sv = 'SV',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Eritrea */
  Er = 'ER',
  /** Estonia */
  Ee = 'EE',
  /** Ethiopia */
  Et = 'ET',
  /** Falkland Islands */
  Fk = 'FK',
  /** Faroe Islands */
  Fo = 'FO',
  /** Fiji */
  Fj = 'FJ',
  /** Finland */
  Fi = 'FI',
  /** France */
  Fr = 'FR',
  /** French Polynesia */
  Pf = 'PF',
  /** Gabon */
  Ga = 'GA',
  /** Gambia */
  Gm = 'GM',
  /** Georgia */
  Ge = 'GE',
  /** Germany */
  De = 'DE',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greece */
  Gr = 'GR',
  /** Greenland */
  Gl = 'GL',
  /** Grenada */
  Gd = 'GD',
  /** Guam */
  Gu = 'GU',
  /** Guatemala */
  Gt = 'GT',
  /** Guernsey */
  Gg = 'GG',
  /** Guinea */
  Gn = 'GN',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Haiti */
  Ht = 'HT',
  /** Honduras */
  Hn = 'HN',
  /** Hong Kong */
  Hk = 'HK',
  /** Hungary */
  Hu = 'HU',
  /** Iceland */
  Is = 'IS',
  /** India */
  In = 'IN',
  /** Indonesia */
  Id = 'ID',
  /** Iran */
  Ir = 'IR',
  /** Iraq */
  Iq = 'IQ',
  /** Ireland */
  Ie = 'IE',
  /** Isle of Man */
  Im = 'IM',
  /** Israel */
  Il = 'IL',
  /** Italy */
  It = 'IT',
  /** Ivory Coast */
  Ci = 'CI',
  /** Jamaica */
  Jm = 'JM',
  /** Japan */
  Jp = 'JP',
  /** Jersey */
  Je = 'JE',
  /** Jordan */
  Jo = 'JO',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Kenya */
  Ke = 'KE',
  /** Kiribati */
  Ki = 'KI',
  /** Kosovo */
  Xk = 'XK',
  /** Kuwait */
  Kw = 'KW',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Laos */
  La = 'LA',
  /** Latvia */
  Lv = 'LV',
  /** Lebanon */
  Lb = 'LB',
  /** Lesotho */
  Ls = 'LS',
  /** Liberia */
  Lr = 'LR',
  /** Libya */
  Ly = 'LY',
  /** Liechtenstein */
  Li = 'LI',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Macau */
  Mo = 'MO',
  /** Macedonia */
  Mk = 'MK',
  /** Madagascar */
  Mg = 'MG',
  /** Malawi */
  Mw = 'MW',
  /** Malaysia */
  My = 'MY',
  /** Maldives */
  Mv = 'MV',
  /** Mali */
  Ml = 'ML',
  /** Malta */
  Mt = 'MT',
  /** Marshall Islands */
  Mh = 'MH',
  /** Mauritania */
  Mr = 'MR',
  /** Mauritius */
  Mu = 'MU',
  /** Mayotte */
  Yt = 'YT',
  /** Mexico */
  Mx = 'MX',
  /** Micronesia */
  Fm = 'FM',
  /** Moldova */
  Md = 'MD',
  /** Monaco */
  Mc = 'MC',
  /** Mongolia */
  Mn = 'MN',
  /** Montenegro */
  Me = 'ME',
  /** Montserrat */
  Ms = 'MS',
  /** Morocco */
  Ma = 'MA',
  /** Mozambique */
  Mz = 'MZ',
  /** Myanmar */
  Mm = 'MM',
  /** Namibia */
  Na = 'NA',
  /** Nauru */
  Nr = 'NR',
  /** Nepal */
  Np = 'NP',
  /** Netherlands */
  Nl = 'NL',
  /** Netherlands Antilles */
  An = 'AN',
  /** New Caledonia */
  Nc = 'NC',
  /** New Zealand */
  Nz = 'NZ',
  /** Nicaragua */
  Ni = 'NI',
  /** Niger */
  Ne = 'NE',
  /** Nigeria */
  Ng = 'NG',
  /** Niue */
  Nu = 'NU',
  /** North Korea */
  Kp = 'KP',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Norway */
  No = 'NO',
  /** Oman */
  Om = 'OM',
  /** Pakistan */
  Pk = 'PK',
  /** Palau */
  Pw = 'PW',
  /** Palestine */
  Ps = 'PS',
  /** Panama */
  Pa = 'PA',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Paraguay */
  Py = 'PY',
  /** Peru */
  Pe = 'PE',
  /** Philippines */
  Ph = 'PH',
  /** Pitcairn */
  Pn = 'PN',
  /** Poland */
  Pl = 'PL',
  /** Portugal */
  Pt = 'PT',
  /** Puerto Rico */
  Pr = 'PR',
  /** Qatar */
  Qa = 'QA',
  /** Republic of the Congo */
  Cg = 'CG',
  /** Reunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saint Barthelemy */
  Bl = 'BL',
  /** Saint Helena */
  Sh = 'SH',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** Saint Lucia */
  Lc = 'LC',
  /** Saint Martin */
  Mf = 'MF',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Samoa */
  Ws = 'WS',
  /** San Marino */
  Sm = 'SM',
  /** Sao Tome and Principe */
  St = 'ST',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Senegal */
  Sn = 'SN',
  /** Serbia */
  Rs = 'RS',
  /** Seychelles */
  Sc = 'SC',
  /** Sierra Leone */
  Sl = 'SL',
  /** Singapore */
  Sg = 'SG',
  /** Sint Maarten */
  Sx = 'SX',
  /** Slovakia */
  Sk = 'SK',
  /** Slovenia */
  Si = 'SI',
  /** Solomon Islands */
  Sb = 'SB',
  /** Somalia */
  So = 'SO',
  /** South Africa */
  Za = 'ZA',
  /** South Korea */
  Kr = 'KR',
  /** South Sudan */
  Ss = 'SS',
  /** Spain */
  Es = 'ES',
  /** Sri Lanka */
  Lk = 'LK',
  /** Sudan */
  Sd = 'SD',
  /** Suriname */
  Sr = 'SR',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Swaziland */
  Sz = 'SZ',
  /** Sweden */
  Se = 'SE',
  /** Switzerland */
  Ch = 'CH',
  /** Syria */
  Sy = 'SY',
  /** Taiwan */
  Tw = 'TW',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tanzania */
  Tz = 'TZ',
  /** Thailand */
  Th = 'TH',
  /** Togo */
  Tg = 'TG',
  /** Tokelau */
  Tk = 'TK',
  /** Tonga */
  To = 'TO',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tunisia */
  Tn = 'TN',
  /** Turkey */
  Tr = 'TR',
  /** Turkmenistan */
  Tm = 'TM',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Tuvalu */
  Tv = 'TV',
  /** U.S. Virgin Islands */
  Vi = 'VI',
  /** Uganda */
  Ug = 'UG',
  /** Ukraine */
  Ua = 'UA',
  /** United Arab Emirates */
  Ae = 'AE',
  /** United Kingdom */
  Gb = 'GB',
  /** United States */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vanuatu */
  Vu = 'VU',
  /** Vatican */
  Va = 'VA',
  /** Venezuela */
  Ve = 'VE',
  /** Vietnam */
  Vn = 'VN',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Western Sahara */
  Eh = 'EH',
  /** Yemen */
  Ye = 'YE',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW',
}

/** Country selector by 3 digit ISO code */
export type CountrySelector = {
  /** Country code is */
  is?: Maybe<CountryCode>
  /** Country code not */
  not?: Maybe<CountryCode>
  /** Country code in the list */
  in?: Maybe<Array<CountryCode>>
  /** Country code not in the list */
  notIn?: Maybe<Array<CountryCode>>
}

/** Country */
export type CovidCountry = {
  __typename?: 'CovidCountry'
  /** Area, km2 */
  areaKm2?: Maybe<Scalars['Float']>
  /** Continent name */
  continent?: Maybe<Continent>
  /** Gross Domestic Product */
  gdp?: Maybe<Scalars['Float']>
  /** ISO 2 letter code */
  iso2?: Maybe<CountryCode>
  /** ISO 3 letter code */
  iso3?: Maybe<Scalars['String']>
  /** ISO numeric code */
  isoNumeric?: Maybe<Scalars['Int']>
  /** Location latitude */
  latitude?: Maybe<Scalars['Float']>
  /** Location longitude */
  longitude?: Maybe<Scalars['Float']>
  /** Country name */
  name?: Maybe<Scalars['String']>
  /** Population density in thousands per km2 */
  populationPerKm2?: Maybe<Scalars['Float']>
  /** Population total in thousands */
  populationTotal?: Maybe<Scalars['Float']>
}

/** Facts of Covid virus development */
export type CovidFact = {
  __typename?: 'CovidFact'
  /** Count of confirmed cases */
  confirmed?: Maybe<Scalars['Int']>
  /** Country */
  country?: Maybe<CovidCountry>
  /** Calendar date */
  date?: Maybe<Date>
  /** Count of death cases */
  deaths?: Maybe<Scalars['Int']>
  /** Location */
  location?: Maybe<CovidLocation>
  /** Count of recovered cases */
  recovered?: Maybe<Scalars['Int']>
}

/** Facts of Covid virus development */
export type CovidFactConfirmedArgs = {
  date?: Maybe<DateSelector>
  country?: Maybe<CountrySelector>
  continent?: Maybe<ContinentSelector>
}

/** Facts of Covid virus development */
export type CovidFactCountryArgs = {
  country?: Maybe<CountrySelector>
  continent?: Maybe<ContinentSelector>
}

/** Facts of Covid virus development */
export type CovidFactDeathsArgs = {
  date?: Maybe<DateSelector>
  country?: Maybe<CountrySelector>
  continent?: Maybe<ContinentSelector>
}

/** Facts of Covid virus development */
export type CovidFactRecoveredArgs = {
  date?: Maybe<DateSelector>
  country?: Maybe<CountrySelector>
  continent?: Maybe<ContinentSelector>
}

/** Covid History */
export type CovidHistory = {
  __typename?: 'CovidHistory'
  /** COVID daily facts */
  facts?: Maybe<Array<CovidFact>>
}

/** Covid History */
export type CovidHistoryFactsArgs = {
  date?: Maybe<DateSelector>
  country?: Maybe<CountrySelector>
  continent?: Maybe<ContinentSelector>
  options?: Maybe<QueryOptions>
}

/** Geo Location */
export type CovidLocation = {
  __typename?: 'CovidLocation'
  /** Admin center name */
  adminCenter?: Maybe<Scalars['String']>
  /** FIPS code for USA */
  fipsCode?: Maybe<Scalars['Int']>
  /** Location latitude */
  latitude?: Maybe<Scalars['Float']>
  /** Location longitude */
  longitude?: Maybe<Scalars['Float']>
  /** Location Country name */
  name?: Maybe<Scalars['String']>
  /** Location Province / State name */
  province?: Maybe<Scalars['String']>
}

/** Crypto currency ( token, coin, currency ) */
export type Currency = {
  __typename?: 'Currency'
  /** Token Smart Contract Address */
  address?: Maybe<Scalars['String']>
  /** Decimals */
  decimals: Scalars['Int']
  /** Currency name */
  name?: Maybe<Scalars['String']>
  /** Currency symbol */
  symbol: Scalars['String']
  /** Token ID */
  tokenId?: Maybe<Scalars['String']>
  /** Token Type */
  tokenType?: Maybe<Scalars['String']>
}

/** Date */
export type Date = {
  __typename?: 'Date'
  /** String date representation with default format as YYYY-MM-DD */
  date: Scalars['String']
  /** Day of month (1-31) */
  dayOfMonth: Scalars['Int']
  /** Day of week  (Monday is 1, and Sunday is 7) */
  dayOfWeek: Scalars['Int']
  /** Month number (1-12) */
  month: Scalars['Int']
  /**
   * Returns start of date interval ,
   *     date representation with default format as YYYY-MM-DD. Example is start of interval for 3 weeks each,
   *   starting on wednesdays will read as: 'startOfInterval(unit: week, interval: 3, offset: 2)'
   */
  startOfInterval: Scalars['String']
  /** Year number */
  year: Scalars['Int']
}

/** Date */
export type DateDateArgs = {
  format?: Maybe<Scalars['String']>
}

/** Date */
export type DateStartOfIntervalArgs = {
  format?: Maybe<Scalars['String']>
  interval?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  unit: DateInterval
}

export enum DateInterval {
  /** Year */
  Year = 'year',
  /** Month */
  Month = 'month',
  /** Week */
  Week = 'week',
  /** Day */
  Day = 'day',
}

/** Selecting the date in a range, list or just date */
export type DateSelector = {
  /** Since date */
  since?: Maybe<Scalars['ISO8601DateTime']>
  /** Till date */
  till?: Maybe<Scalars['ISO8601DateTime']>
  /** Range of dates */
  between?: Maybe<Array<Scalars['ISO8601DateTime']>>
  /** Before date */
  before?: Maybe<Scalars['ISO8601DateTime']>
  /** After date */
  after?: Maybe<Scalars['ISO8601DateTime']>
  /** In dates */
  in?: Maybe<Array<Scalars['ISO8601DateTime']>>
  /** Not in dates */
  notIn?: Maybe<Array<Scalars['ISO8601DateTime']>>
  /** Date equals */
  is?: Maybe<Scalars['ISO8601DateTime']>
  /** Date not equals */
  not?: Maybe<Scalars['ISO8601DateTime']>
}

/** Date and Time */
export type DateTime = {
  __typename?: 'DateTime'
  /** Day of month (1-31) */
  dayOfMonth: Scalars['Int']
  /** Day of week  (Monday is 1, and Sunday is 7) */
  dayOfWeek: Scalars['Int']
  /** Hour (0-23) */
  hour: Scalars['Int']
  /** ISO8601 date time such as '2020-03-02T13:30:41+00:00' */
  iso8601: Scalars['ISO8601DateTime']
  /** Minute (0-59) */
  minute: Scalars['Int']
  /** Month number (1-12) */
  month: Scalars['Int']
  /** Second (0-59) */
  second: Scalars['Int']
  /** String date representation with default format as YYYY-MM-DD */
  time: Scalars['String']
  /** Unix timestamp */
  unixtime: Scalars['Int']
  /** Year number */
  year: Scalars['Int']
}

/** Date and Time */
export type DateTimeTimeArgs = {
  format?: Maybe<Scalars['String']>
}

/** Selecting the time in a range, list or just time */
export type DateTimeSelector = {
  /** Since time */
  since?: Maybe<Scalars['ISO8601DateTime']>
  /** Till time */
  till?: Maybe<Scalars['ISO8601DateTime']>
  /** Range of time */
  between?: Maybe<Array<Scalars['ISO8601DateTime']>>
  /** Before time */
  before?: Maybe<Scalars['ISO8601DateTime']>
  /** After time */
  after?: Maybe<Scalars['ISO8601DateTime']>
  /** In times */
  in?: Maybe<Array<Scalars['ISO8601DateTime']>>
  /** Not in times */
  notIn?: Maybe<Array<Scalars['ISO8601DateTime']>>
  /** Time equals */
  is?: Maybe<Scalars['ISO8601DateTime']>
  /** Time not equals */
  not?: Maybe<Scalars['ISO8601DateTime']>
}

export enum DiemNetwork {
  /** Diem Testnet */
  DiemTestnet = 'diem_testnet',
  /** Libra Testnet */
  LibraTestnet = 'libra_testnet',
}

/** Entity */
export type Entity = {
  __typename?: 'Entity'
  /** Entity ID */
  id: Scalars['String']
  /** Entity number */
  num: Scalars['Int']
  /** Entity realm ID */
  realmId: Scalars['Int']
  /** Entity shard ID */
  shardId: Scalars['Int']
  /** Entity Type */
  type: Scalars['String']
}

/** Entity */
export type EntityIdArgs = {
  entityId?: Maybe<Scalars['String']>
}

/** Selector of entity ID for NFT  tokens */
export type EntitySelector = {
  /** EntityID is */
  is?: Maybe<Scalars['String']>
  /** EntityID not */
  not?: Maybe<Scalars['String']>
  /** EntityID in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** EntityID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

export enum EntityTypeEnum {
  /** account */
  Account = 'account',
  /** contract */
  Contract = 'contract',
  /** file */
  File = 'file',
  /** topic */
  Topic = 'topic',
  /** token */
  Token = 'token',
}

/** Select by entity type */
export type EntityTypeSelector = {
  /** Type is */
  is?: Maybe<EntityTypeEnum>
  /** Type not */
  not?: Maybe<EntityTypeEnum>
  /** Type in the list */
  in?: Maybe<Array<EntityTypeEnum>>
  /** Type not in the list */
  notIn?: Maybe<Array<EntityTypeEnum>>
}

/** EOS Chain */
export type Eos = {
  __typename?: 'Eos'
  /** Basic information about address ( or smart contract ) */
  address: Array<EosAddressInfo>
  /** Blockchain Blocks */
  blocks?: Maybe<Array<EosBlocks>>
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EosCoinpath>>
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EosSmartContractCalls>>
  /** Blockchain Transactions */
  transactions?: Maybe<Array<EosTransactions>>
  /** Currency Transfers */
  transfers?: Maybe<Array<EosTransfers>>
}

/** EOS Chain */
export type EosAddressArgs = {
  address: Array<AddressSelectorIn>
}

/** EOS Chain */
export type EosBlocksArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  proposer?: Maybe<AddressSelector>
  any?: Maybe<Array<EosBlockFilter>>
  options?: Maybe<QueryOptions>
}

/** EOS Chain */
export type EosCoinpathArgs = {
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<EosCurrencySelector>
  initialAddress?: Maybe<AddressSelector>
  initialDate?: Maybe<DateSelector>
  initialTime?: Maybe<DateTimeSelector>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  depth?: Maybe<IntegerLimitedSelector>
  options?: Maybe<CoinpathOptions>
}

/** EOS Chain */
export type EosSmartContractCallsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractMethod?: Maybe<MethodSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  scheduled?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<EosSmartContractCallFilter>>
  options?: Maybe<QueryOptions>
}

/** EOS Chain */
export type EosTransactionsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  scheduled?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<EosTransactionFilter>>
  options?: Maybe<QueryOptions>
}

/** EOS Chain */
export type EosTransfersArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<EosCurrencySelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  any?: Maybe<Array<EosTransferFilter>>
  options?: Maybe<QueryOptions>
}

/** Address detailed information for EOS network */
export type EosAddressInfo = {
  __typename?: 'EosAddressInfo'
  /** String address representation */
  address: Scalars['String']
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EosSmartContractInfo>
}

export type EosBlockFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  proposer?: Maybe<AddressSelector>
}

/** Blocks in EOS blockchain */
export type EosBlocks = {
  __typename?: 'EosBlocks'
  any?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Block hash */
  hash: Scalars['String']
  /** Block number (height) in blockchain */
  height: Scalars['Int']
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Block producer */
  producer?: Maybe<Address>
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
}

/** Blocks in EOS blockchain */
export type EosBlocksAnyArgs = {
  of: EosBlocksMeasureable
}

/** Blocks in EOS blockchain */
export type EosBlocksCountArgs = {
  uniq?: Maybe<EosBlocksUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  proposer?: Maybe<AddressSelector>
}

/** Blocks in EOS blockchain */
export type EosBlocksHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>
}

/** Blocks in EOS blockchain */
export type EosBlocksHeightArgs = {
  height?: Maybe<BlockSelector>
}

/** Blocks in EOS blockchain */
export type EosBlocksMaximumArgs = {
  of: EosBlocksMeasureable
  get?: Maybe<EosBlocksMeasureable>
}

/** Blocks in EOS blockchain */
export type EosBlocksMinimumArgs = {
  of: EosBlocksMeasureable
  get?: Maybe<EosBlocksMeasureable>
}

/** Blocks in EOS blockchain */
export type EosBlocksProducerArgs = {
  producer?: Maybe<AddressSelector>
}

/** Blocks in EOS blockchain */
export type EosBlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

export enum EosBlocksMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockHash = 'block_hash',
  /** Block Proposer */
  Proposer = 'proposer',
}

export enum EosBlocksUniq {
  /** Unique proposer count */
  Proposers = 'proposers',
  /** Unique date count */
  Dates = 'dates',
}

export enum EosCallsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Sender */
  TxSender = 'tx_sender',
  /** Action From */
  TxFrom = 'tx_from',
  /** Action To */
  TxTo = 'tx_to',
  /** Smart Contract */
  SmartContract = 'smart_contract',
  /** Smart Contract Method Name */
  SignatureName = 'signature_name',
  /** Smart Contract Method Signature */
  Signature = 'signature',
  /** Smart Contract Method Signature Hash */
  SignatureHash = 'signature_hash',
  /** Call depth */
  CallDepth = 'call_depth',
}

/** Coinpath */
export type EosCoinpath = {
  __typename?: 'EosCoinpath'
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Receiver address */
  receiver?: Maybe<EosAddressInfo>
  /** Sender address */
  sender?: Maybe<EosAddressInfo>
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>
}

/** Coinpath */
export type EosCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>
}

/** Coinpath */
export type EosCoinpathAnyArgs = {
  of: CoinpathMeasureable
}

/** Coinpath */
export type EosCoinpathMaximumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/** Coinpath */
export type EosCoinpathMinimumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/**
 * Currency selector in EOS blockchain.
 * Token identified by address of contract ( eosio.token for main EOS token )
 */
export type EosCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>
  /** Currency not */
  not?: Maybe<Scalars['String']>
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Eos smart contract */
export type EosSmartContract = {
  __typename?: 'EosSmartContract'
  /** Smart Contract Address */
  address: Address
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>
}

export type EosSmartContractCallFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractMethod?: Maybe<MethodSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  scheduled?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type EosSmartContractCalls = {
  __typename?: 'EosSmartContractCalls'
  /** Actors */
  actors?: Maybe<Scalars['String']>
  any?: Maybe<Scalars['String']>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>
  /** Console */
  console?: Maybe<Scalars['String']>
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Error Code */
  errorCode?: Maybe<Scalars['Int']>
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Permissions */
  permissions?: Maybe<Scalars['String']>
  /** Receivers */
  receivers?: Maybe<Scalars['String']>
  /** True if call scheduled */
  scheduled?: Maybe<Scalars['Boolean']>
  /** Smart contract being called */
  smartContract?: Maybe<EosSmartContract>
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>
  /** Action from address */
  txFrom?: Maybe<Address>
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>
  /** Action to address */
  txTo?: Maybe<Address>
}

/** Smart Contract Calls */
export type EosSmartContractCallsAnyArgs = {
  of: EosCallsMeasureable
}

/** Smart Contract Calls */
export type EosSmartContractCallsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Smart Contract Calls */
export type EosSmartContractCallsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractMethod?: Maybe<MethodSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  scheduled?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type EosSmartContractCallsErrorCodeArgs = {
  errorCode?: Maybe<IntIdSelector>
}

/** Smart Contract Calls */
export type EosSmartContractCallsExternalArgs = {
  external?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type EosSmartContractCallsMaximumArgs = {
  of: EosCallsMeasureable
  get?: Maybe<EosCallsMeasureable>
}

/** Smart Contract Calls */
export type EosSmartContractCallsMinimumArgs = {
  of: EosCallsMeasureable
  get?: Maybe<EosCallsMeasureable>
}

/** Smart Contract Calls */
export type EosSmartContractCallsScheduledArgs = {
  scheduled?: Maybe<Array<Scalars['Boolean']>>
}

/** Smart Contract Calls */
export type EosSmartContractCallsSmartContractArgs = {
  smartContractAddress?: Maybe<AddressSelector>
}

/** Smart Contract Calls */
export type EosSmartContractCallsSmartContractMethodArgs = {
  smartContractMethod?: Maybe<MethodSelector>
}

/** Smart Contract Calls */
export type EosSmartContractCallsSuccessArgs = {
  success?: Maybe<Array<Scalars['Boolean']>>
}

/** Smart Contract Calls */
export type EosSmartContractCallsTxFromArgs = {
  txFrom?: Maybe<AddressSelector>
}

/** Smart Contract Calls */
export type EosSmartContractCallsTxHashArgs = {
  txHash?: Maybe<HashSelector>
}

/** Smart Contract Calls */
export type EosSmartContractCallsTxToArgs = {
  txTo?: Maybe<AddressSelector>
}

/** Blockchain smart contract */
export type EosSmartContractInfo = {
  __typename?: 'EosSmartContractInfo'
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>
}

export type EosTransactionFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  scheduled?: Maybe<Scalars['Boolean']>
}

/** Transactions in EOS blockchain */
export type EosTransactions = {
  __typename?: 'EosTransactions'
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['Int']>
  cpuUsageUs?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  netUsageWords?: Maybe<Scalars['Int']>
  /** Success */
  scheduled?: Maybe<Scalars['Boolean']>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
}

/** Transactions in EOS blockchain */
export type EosTransactionsAnyArgs = {
  of: EosTransactionsMeasureable
}

/** Transactions in EOS blockchain */
export type EosTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transactions in EOS blockchain */
export type EosTransactionsCountArgs = {
  uniq?: Maybe<EosTransactionsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  scheduled?: Maybe<Scalars['Boolean']>
}

/** Transactions in EOS blockchain */
export type EosTransactionsCpuUsageUsArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  scheduled?: Maybe<Scalars['Boolean']>
}

/** Transactions in EOS blockchain */
export type EosTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

/** Transactions in EOS blockchain */
export type EosTransactionsIndexArgs = {
  txIndex?: Maybe<Array<TxIndexSelector>>
}

/** Transactions in EOS blockchain */
export type EosTransactionsMaximumArgs = {
  of: EosTransactionsMeasureable
  get?: Maybe<EosTransactionsMeasureable>
}

/** Transactions in EOS blockchain */
export type EosTransactionsMinimumArgs = {
  of: EosTransactionsMeasureable
  get?: Maybe<EosTransactionsMeasureable>
}

/** Transactions in EOS blockchain */
export type EosTransactionsNetUsageWordsArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  scheduled?: Maybe<Scalars['Boolean']>
}

/** Transactions in EOS blockchain */
export type EosTransactionsScheduledArgs = {
  scheduled?: Maybe<Scalars['Boolean']>
}

/** Transactions in EOS blockchain */
export type EosTransactionsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

export enum EosTransactionsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** CPU Usage */
  CpuUsageUs = 'cpu_usage_us',
  /** Net Usage */
  NetUsageWords = 'net_usage_words',
}

export enum EosTransactionsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
}

export type EosTransferFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<EosCurrencySelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfers = {
  __typename?: 'EosTransfers'
  /** Actors */
  actors?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>
  maximum?: Maybe<Scalars['String']>
  /** Memo */
  memo?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Transfer receiver */
  receiver?: Maybe<Address>
  /** Transfer sender */
  sender?: Maybe<Address>
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>
  /** Action from address */
  txFrom?: Maybe<Address>
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>
  /** Action to address */
  txTo?: Maybe<Address>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<EosCurrencySelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersAnyArgs = {
  of: EosTransfersMeasureable
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<EosCurrencySelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersCurrencyArgs = {
  currency?: Maybe<EosCurrencySelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersEntityIdArgs = {
  entityId?: Maybe<EntitySelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersExternalArgs = {
  external?: Maybe<Scalars['Boolean']>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersMaximumArgs = {
  of: EosTransfersMeasureable
  get?: Maybe<EosTransfersMeasureable>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersMinimumArgs = {
  of: EosTransfersMeasureable
  get?: Maybe<EosTransfersMeasureable>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersReceiverArgs = {
  receiver?: Maybe<AddressSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersSenderArgs = {
  sender?: Maybe<AddressSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersTxFromArgs = {
  txFrom?: Maybe<AddressSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersTxHashArgs = {
  txHash?: Maybe<HashSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersTxToArgs = {
  txTo?: Maybe<AddressSelector>
}

export enum EosTransfersMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Amount */
  Amount = 'amount',
  /** Sender */
  Sender = 'sender',
  /** Receiver */
  Receiver = 'receiver',
  /** Currency symbol */
  CurrencySymbol = 'currency_symbol',
  /** Token address */
  CurrencyAddress = 'currency_address',
}

/** Errors */
export type Errors = {
  __typename?: 'Errors'
  /** Errors json string */
  json?: Maybe<Scalars['String']>
}

/** Ethereum Chain */
export type Ethereum = {
  __typename?: 'Ethereum'
  /** Basic information about address ( or smart contract ) */
  address: Array<EthereumAddressInfoWithBalance>
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<EthereumArguments>>
  /** Blockchain Blocks */
  blocks?: Maybe<Array<EthereumBlocks>>
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EthereumCoinpath>>
  /** Trades on Ethereum DEX Smart Contracts */
  dexTrades?: Maybe<Array<EthereumDexTrades>>
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EthereumSmartContractCalls>>
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<EthereumSmartContractEvent>>
  /** Blockchain Transactions */
  transactions?: Maybe<Array<EthereumTransactions>>
  /** Currency Transfers */
  transfers?: Maybe<Array<EthereumTransfers>>
}

/** Ethereum Chain */
export type EthereumAddressArgs = {
  address: Array<EthereumAddressSelectorIn>
}

/** Ethereum Chain */
export type EthereumArgumentsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  reference?: Maybe<Array<EthereumAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  argumentType?: Maybe<Array<ArgumentTypeSelector>>
  signatureType?: Maybe<SignatureTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractEvent?: Maybe<EventSelector>
  external?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<EthereumArgumentFilter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum Chain */
export type EthereumBlocksArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
  any?: Maybe<Array<EthereumBlockFilter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum Chain */
export type EthereumCoinpathArgs = {
  sender?: Maybe<EthereumAddressSelector>
  receiver?: Maybe<EthereumAddressSelector>
  currency?: Maybe<Array<EthereumCurrencySelector>>
  initialAddress?: Maybe<EthereumAddressSelector>
  initialDate?: Maybe<DateSelector>
  initialTime?: Maybe<DateTimeSelector>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  depth?: Maybe<IntegerLimitedSelector>
  options?: Maybe<CoinpathOptions>
}

/** Ethereum Chain */
export type EthereumDexTradesArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  protocol?: Maybe<Array<StringSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeName?: Maybe<Array<StringSelector>>
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>
  maker?: Maybe<Array<EthereumAddressSelector>>
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  taker?: Maybe<Array<EthereumAddressSelector>>
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>
  tradeIndex?: Maybe<Array<StringSelector>>
  buyAmount?: Maybe<Array<AmountSelector>>
  sellAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  priceAsymmetry?: Maybe<Array<FloatSelector>>
  tradeAmountUsd?: Maybe<Array<FloatSelector>>
  any?: Maybe<Array<EthereumDexTradeFilter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum Chain */
export type EthereumSmartContractCallsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractType?: Maybe<SmartContractTypeSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Array<Scalars['Boolean']>>
  any?: Maybe<Array<EthereumSmartContractCallFilter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum Chain */
export type EthereumSmartContractEventsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  smartContractType?: Maybe<SmartContractTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractEvent?: Maybe<EventSelector>
  any?: Maybe<Array<EthereumSmartContractEventFilter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum Chain */
export type EthereumTransactionsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  gasValue?: Maybe<Array<AmountSelector>>
  any?: Maybe<Array<EthereumTransactionFilter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum Chain */
export type EthereumTransfersArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  entityId?: Maybe<EntitySelector>
  sender?: Maybe<Array<EthereumAddressSelector>>
  receiver?: Maybe<Array<EthereumAddressSelector>>
  currency?: Maybe<Array<EthereumCurrencySelector>>
  external?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  any?: Maybe<Array<EthereumTransferFilter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2 = {
  __typename?: 'Ethereum2'
  /** Attestations in block */
  attestations?: Maybe<Array<Ethereum2Attestation>>
  /** Attester Slashings */
  attesterSlashings?: Maybe<Array<Ethereum2AttesterSlashing>>
  /** Blockchain Blocks */
  blocks?: Maybe<Array<Ethereum2Blocks>>
  /** Attestations of blocks */
  deposits?: Maybe<Array<Ethereum2Deposit>>
  /** Proposer Slashings */
  proposerSlashings?: Maybe<Array<Ethereum2ProposerSlashing>>
  /** Voluntary Exits */
  voluntaryExits?: Maybe<Array<Ethereum2VoluntaryExit>>
}

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2AttestationsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  validatorIndex?: Maybe<Array<IntegerSelector>>
  committeeIndex?: Maybe<Array<IntegerSelector>>
  attestationSlot?: Maybe<Array<IntegerSelector>>
  attestationEpoch?: Maybe<Array<IntegerSelector>>
  any?: Maybe<Array<Ethereum2Filter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2AttesterSlashingsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  validatorIndex?: Maybe<Array<IntegerSelector>>
  attestationSlot?: Maybe<Array<IntegerSelector>>
  attestationEpoch?: Maybe<Array<IntegerSelector>>
  any?: Maybe<Array<Ethereum2Filter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2BlocksArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  any?: Maybe<Array<Ethereum2Filter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2DepositsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  validatorIndex?: Maybe<Array<IntegerSelector>>
  any?: Maybe<Array<Ethereum2Filter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2ProposerSlashingsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  slashingProposerIndex?: Maybe<Array<IntegerSelector>>
  slashingSlot?: Maybe<Array<IntegerSelector>>
  slashingEpoch?: Maybe<Array<IntegerSelector>>
  any?: Maybe<Array<Ethereum2Filter>>
  options?: Maybe<QueryOptions>
}

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2VoluntaryExitsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  validatorIndex?: Maybe<Array<IntegerSelector>>
  voluntaryExitEpoch?: Maybe<Array<IntegerSelector>>
  any?: Maybe<Array<Ethereum2Filter>>
  options?: Maybe<QueryOptions>
}

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2Attestation = {
  __typename?: 'Ethereum2Attestation'
  aggregationBits: Scalars['String']
  any?: Maybe<Scalars['String']>
  attestation: Ethereum2AttestationInfo
  /** Attestation Index (0 based ) in block */
  attestationIndex: Scalars['Int']
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Block root hash */
  blockRoot: Scalars['String']
  /** Committee index for attestation */
  committeeIndex: Scalars['Int']
  count?: Maybe<Scalars['BigInt']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Block parent hash */
  parentRoot: Scalars['String']
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>
  /** Block state root hash */
  stateRoot: Scalars['String']
  /** Validator */
  validator: Ethereum2ValidatorInfo
  /** Sequential index of validator in committee ( 0-based) */
  validatorInCommitteeIndex: Scalars['Int']
}

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationAnyArgs = {
  of: Ethereum2AttestationsMeasureable
}

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>
}

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationCountArgs = {
  uniq?: Maybe<Ethereum2AttestationsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  validatorIndex?: Maybe<Array<IntegerSelector>>
  committeeIndex?: Maybe<Array<IntegerSelector>>
  attestationSlot?: Maybe<Array<IntegerSelector>>
  attestationEpoch?: Maybe<Array<IntegerSelector>>
}

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationMaximumArgs = {
  of: Ethereum2AttestationsMeasureable
  get?: Maybe<Ethereum2AttestationsMeasureable>
}

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationMinimumArgs = {
  of: Ethereum2AttestationsMeasureable
  get?: Maybe<Ethereum2AttestationsMeasureable>
}

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

/** AttestationFieldInfo for Ethereum v 2.0 network */
export type Ethereum2AttestationFieldInfo = {
  __typename?: 'Ethereum2AttestationFieldInfo'
  epoch: Scalars['Int']
  /** Root Hash */
  root: Scalars['String']
}

/** AttestationInfo for Ethereum v 2.0 network */
export type Ethereum2AttestationInfo = {
  __typename?: 'Ethereum2AttestationInfo'
  beaconBlockRoot: Scalars['String']
  epoch: Scalars['Int']
  signature: Scalars['String']
  slot: Scalars['Int']
  source: Ethereum2AttestationFieldInfo
  target: Ethereum2AttestationFieldInfo
}

export enum Ethereum2AttestationsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockRootHash = 'block_root_hash',
  /** Block Proposer */
  BlockProposer = 'block_proposer',
  /** Committee Index */
  Committee = 'committee',
  /** Validator index */
  Validator = 'validator',
}

export enum Ethereum2AttestationsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique block proposers */
  BlockProposers = 'block_proposers',
  /** Unique date count */
  Dates = 'dates',
  /** Unique commitees */
  Committees = 'committees',
  /** Unique validators */
  Validators = 'validators',
  /** Unique attestations */
  Attestations = 'attestations',
  /** Unique attestation slots */
  AttestationSlots = 'attestation_slots',
  /** Unique attestation epochs */
  AttestationEpochs = 'attestation_epochs',
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashing = {
  __typename?: 'Ethereum2AttesterSlashing'
  any?: Maybe<Scalars['String']>
  attestation: Ethereum2AttestationInfo
  /** Attestation slashing sequential number */
  attestationOrder: Scalars['Int']
  /** Attester Slashing Index (0 based ) in block */
  attesterSlashingIndex: Scalars['Int']
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Block root hash */
  blockRoot: Scalars['String']
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Block parent hash */
  parentRoot: Scalars['String']
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>
  /** Block state root hash */
  stateRoot: Scalars['String']
  /** Validator */
  validator: Ethereum2ValidatorInfo
  /** Validator index in slashing sequential numbern */
  validatorInAttestationIndex: Scalars['Int']
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingAnyArgs = {
  of: Ethereum2AttesterSlashingMeasureable
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingCountArgs = {
  uniq?: Maybe<Ethereum2AttesterSlashingsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  validatorIndex?: Maybe<Array<IntegerSelector>>
  attestationSlot?: Maybe<Array<IntegerSelector>>
  attestationEpoch?: Maybe<Array<IntegerSelector>>
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingMaximumArgs = {
  of: Ethereum2AttesterSlashingMeasureable
  get?: Maybe<Ethereum2AttesterSlashingMeasureable>
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingMinimumArgs = {
  of: Ethereum2AttesterSlashingMeasureable
  get?: Maybe<Ethereum2AttesterSlashingMeasureable>
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

export enum Ethereum2AttesterSlashingMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockRootHash = 'block_root_hash',
  /** Block Proposer */
  BlockProposer = 'block_proposer',
  /** Validator index */
  Validator = 'validator',
}

export enum Ethereum2AttesterSlashingsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique block proposers */
  BlockProposers = 'block_proposers',
  /** Unique date count */
  Dates = 'dates',
  /** Unique validators */
  Validators = 'validators',
  /** Unique slashing slots */
  AttestationSlots = 'attestation_slots',
  /** Unique slashing epochs */
  AttestationEpochs = 'attestation_epochs',
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2Blocks = {
  __typename?: 'Ethereum2Blocks'
  any?: Maybe<Scalars['String']>
  attestationsCount?: Maybe<Scalars['Int']>
  attesterSlashingsCount?: Maybe<Scalars['Int']>
  /** Block root hash */
  blockRoot: Scalars['String']
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  depositsCount?: Maybe<Scalars['Int']>
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info
  /** Graffiti */
  graffiti: Scalars['String']
  /** Block number (height) in blockchain */
  height: Scalars['Int']
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Block parent hash */
  parentRoot: Scalars['String']
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>
  proposerSlashingsCount?: Maybe<Scalars['Int']>
  /** Randao Reveal */
  randaoReveal: Scalars['String']
  /** Block signature */
  signature: Scalars['String']
  /** Block state root hash */
  stateRoot: Scalars['String']
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
  voluntaryExitsCount?: Maybe<Scalars['Int']>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksAnyArgs = {
  of: Ethereum2BlocksMeasureable
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksAttestationsCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksAttesterSlashingsCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksCountArgs = {
  uniq?: Maybe<Ethereum2BlocksUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksDepositsCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksHeightArgs = {
  height?: Maybe<BlockSelector>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksMaximumArgs = {
  of: Ethereum2BlocksMeasureable
  get?: Maybe<Ethereum2BlocksMeasureable>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksMinimumArgs = {
  of: Ethereum2BlocksMeasureable
  get?: Maybe<Ethereum2BlocksMeasureable>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksProposerSlashingsCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksVoluntaryExitsCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

export enum Ethereum2BlocksMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockRootHash = 'block_root_hash',
  /** Block Miner */
  BlockProposer = 'block_proposer',
}

export enum Ethereum2BlocksUniq {
  /** Unique proposers */
  BlockProposers = 'block_proposers',
  /** Unique date count */
  Dates = 'dates',
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2Deposit = {
  __typename?: 'Ethereum2Deposit'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Block root hash */
  blockRoot: Scalars['String']
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Deposit Index (0 based ) in block */
  depositIndex: Scalars['Int']
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Block parent hash */
  parentRoot: Scalars['String']
  proof: Scalars['String']
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>
  signature: Scalars['String']
  /** Block state root hash */
  stateRoot: Scalars['String']
  /** Validator */
  validator: Ethereum2ValidatorInfo
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  validatorIndex?: Maybe<Array<IntegerSelector>>
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositAnyArgs = {
  of: Ethereum2DepositsMeasureable
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositCountArgs = {
  uniq?: Maybe<Ethereum2DepositsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositMaximumArgs = {
  of: Ethereum2DepositsMeasureable
  get?: Maybe<Ethereum2DepositsMeasureable>
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositMinimumArgs = {
  of: Ethereum2DepositsMeasureable
  get?: Maybe<Ethereum2DepositsMeasureable>
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

export enum Ethereum2DepositsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockRootHash = 'block_root_hash',
  /** Block Proposer */
  BlockProposer = 'block_proposer',
  /** Validator index */
  Validator = 'validator',
}

export enum Ethereum2DepositsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique block proposers */
  BlockProposers = 'block_proposers',
  /** Unique date count */
  Dates = 'dates',
  /** Unique validators */
  Validators = 'validators',
}

/** Eth1 attributes for Ethereum v 2.0 network */
export type Ethereum2Eth1Info = {
  __typename?: 'Ethereum2Eth1Info'
  /** Block Eth1 block hash */
  blockHash: Scalars['String']
  /** Block Eth1 deposit count */
  depositCount: Scalars['Int']
  /** Block Eth1 deposit root hash */
  depositRoot: Scalars['String']
}

export type Ethereum2Filter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

export enum Ethereum2Network {
  /** Beacon Chain Ethereum 2.0 */
  Eth2 = 'eth2',
  /** Medalla Ethereum 2.0 Beacon Testnet */
  Medalla = 'medalla',
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashing = {
  __typename?: 'Ethereum2ProposerSlashing'
  any?: Maybe<Scalars['String']>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Block root hash */
  blockRoot: Scalars['String']
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info
  /** Header slashing sequential numbern */
  headerOrder: Scalars['Int']
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Block parent hash */
  parentRoot: Scalars['String']
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>
  /** Proposer Slashing Index (0 based ) in block */
  proposerSlashingIndex: Scalars['Int']
  slashing: Ethereum2SlashingInfo
  /** Block state root hash */
  stateRoot: Scalars['String']
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingAnyArgs = {
  of: Ethereum2ProposerSlashingMeasureable
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingCountArgs = {
  uniq?: Maybe<Ethereum2ProposerSlashingsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  slashingProposerIndex?: Maybe<Array<IntegerSelector>>
  slashingSlot?: Maybe<Array<IntegerSelector>>
  slashingEpoch?: Maybe<Array<IntegerSelector>>
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingMaximumArgs = {
  of: Ethereum2ProposerSlashingMeasureable
  get?: Maybe<Ethereum2ProposerSlashingMeasureable>
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingMinimumArgs = {
  of: Ethereum2ProposerSlashingMeasureable
  get?: Maybe<Ethereum2ProposerSlashingMeasureable>
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

export enum Ethereum2ProposerSlashingMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockRootHash = 'block_root_hash',
  /** Block Proposer */
  BlockProposer = 'block_proposer',
  /** Slashed Proposer */
  Proposer = 'proposer',
}

export enum Ethereum2ProposerSlashingsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique block proposers */
  BlockProposers = 'block_proposers',
  /** Unique date count */
  Dates = 'dates',
  /** Unique slashing slots */
  SlashingSlots = 'slashing_slots',
  /** Unique slashing epochs */
  SlashingEpochs = 'slashing_epochs',
  /** Unique slashing proposers */
  SlashingProposers = 'slashing_proposers',
}

/** SlashingInfo for Ethereum v 2.0 network */
export type Ethereum2SlashingInfo = {
  __typename?: 'Ethereum2SlashingInfo'
  /** Block body hash */
  bodyRoot: Scalars['String']
  epoch: Scalars['Int']
  /** Block parent hash */
  parentRoot: Scalars['String']
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>
  signature: Scalars['String']
  slot: Scalars['Int']
  /** Block state root hash */
  stateRoot: Scalars['String']
}

/** Validator attributes for Ethereum v 2.0 network */
export type Ethereum2ValidatorInfo = {
  __typename?: 'Ethereum2ValidatorInfo'
  /** Validator Index as Integer */
  index: Scalars['Int']
  /** Validator Pub Key */
  pubkey: Scalars['String']
  /** Validator Withdrawal */
  withdrawalCredentials: Scalars['String']
}

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExit = {
  __typename?: 'Ethereum2VoluntaryExit'
  any?: Maybe<Scalars['String']>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Block root hash */
  blockRoot: Scalars['String']
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Block parent hash */
  parentRoot: Scalars['String']
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>
  /** Signature */
  signature: Scalars['String']
  /** Block state root hash */
  stateRoot: Scalars['String']
  /** Validator */
  validator: Ethereum2ValidatorInfo
  voluntaryExitEpoch: Scalars['Int']
  /** Voluntary Exit Index (0 based ) in block */
  voluntaryExitIndex: Scalars['Int']
}

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitAnyArgs = {
  of: Ethereum2VoluntaryExitsMeasureable
}

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitBlockRootArgs = {
  blockRootHash?: Maybe<Array<HashSelector>>
}

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitCountArgs = {
  uniq?: Maybe<Ethereum2VoluntaryExitsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockRootHash?: Maybe<HashSelector>
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
  validatorIndex?: Maybe<Array<IntegerSelector>>
  voluntaryExitEpoch?: Maybe<Array<IntegerSelector>>
}

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitMaximumArgs = {
  of: Ethereum2VoluntaryExitsMeasureable
  get?: Maybe<Ethereum2VoluntaryExitsMeasureable>
}

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitMinimumArgs = {
  of: Ethereum2VoluntaryExitsMeasureable
  get?: Maybe<Ethereum2VoluntaryExitsMeasureable>
}

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitProposerArgs = {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>
}

export enum Ethereum2VoluntaryExitsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockRootHash = 'block_root_hash',
  /** Block Proposer */
  BlockProposer = 'block_proposer',
  /** Validator index */
  Validator = 'validator',
}

export enum Ethereum2VoluntaryExitsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique block proposers */
  BlockProposers = 'block_proposers',
  /** Unique date count */
  Dates = 'dates',
  /** Unique validators */
  Validators = 'validators',
}

/** Address detailed information for Ethereum network */
export type EthereumAddressInfo = {
  __typename?: 'EthereumAddressInfo'
  /** String address representation */
  address: Scalars['String']
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EthereumSmartContractInfo>
}

/** Blockchain address */
export type EthereumAddressInfoWithBalance = {
  __typename?: 'EthereumAddressInfoWithBalance'
  /** String address representation */
  address: Scalars['String']
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>
  /** DEPRECATED Current address balance */
  balance?: Maybe<Scalars['Float']>
  /** DEPRECATED Balances by currencies for the address */
  balances?: Maybe<Array<EthereumBalance>>
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EthereumSmartContractInfoWithAttributes>
}

/** Blockchain address */
export type EthereumAddressInfoWithBalanceBalancesArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  currency?: Maybe<EthereumCurrencySelector>
  height?: Maybe<BlockSelectorRange>
}

/**
 * Address should start from 0x and contain hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export type EthereumAddressSelector = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>
  /** In the list of Addresses */
  in?: Maybe<Array<Scalars['String']>>
  /** Not in the list of Addresses */
  notIn?: Maybe<Array<Scalars['String']>>
}

/**
 * Address should start from 0x and contain hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export type EthereumAddressSelectorIn = {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>
  /** In the list of Addresses */
  in?: Maybe<Array<Scalars['String']>>
}

export type EthereumArgumentFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  reference?: Maybe<Array<EthereumAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  argumentType?: Maybe<Array<ArgumentTypeSelector>>
  signatureType?: Maybe<SignatureTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractEvent?: Maybe<EventSelector>
  external?: Maybe<Scalars['Boolean']>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArguments = {
  __typename?: 'EthereumArguments'
  any?: Maybe<Scalars['String']>
  /** Method or event argument */
  argument?: Maybe<ArgumentName>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>
  /** Caller of the method invocation ( tx sender or another smart contract ) */
  caller?: Maybe<EthereumAddressInfo>
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>
  /** Sequential index of value in array ( multi-dimensional) */
  index: Scalars['String']
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  number?: Maybe<Scalars['Float']>
  /** Address value of method or event argument */
  reference?: Maybe<EthereumAddressInfo>
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>
  /** Contract method or event */
  smartContractSignature?: Maybe<Signature>
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>
  /** Transaction where call happened */
  transaction?: Maybe<EthereumTransactionInfo>
  /** The Value of method or event argument */
  value?: Maybe<ArgumentValue>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsAnyArgs = {
  of: EthereumArgumentsMeasureable
  as?: Maybe<EthereumArgumentsConvertable>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  reference?: Maybe<Array<EthereumAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  argumentType?: Maybe<Array<ArgumentTypeSelector>>
  signatureType?: Maybe<SignatureTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractEvent?: Maybe<EventSelector>
  external?: Maybe<Scalars['Boolean']>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsArgumentArgs = {
  argument?: Maybe<Array<ArgumentSelector>>
  argumentType?: Maybe<Scalars['String']>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsCallerArgs = {
  caller?: Maybe<Array<EthereumAddressSelector>>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsCountArgs = {
  uniq?: Maybe<SmartContractArgumentsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  reference?: Maybe<Array<EthereumAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  argumentType?: Maybe<Array<ArgumentTypeSelector>>
  signatureType?: Maybe<SignatureTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractEvent?: Maybe<EventSelector>
  external?: Maybe<Scalars['Boolean']>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsExternalArgs = {
  external?: Maybe<Scalars['Boolean']>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsMaximumArgs = {
  of: EthereumArgumentsMeasureable
  get?: Maybe<EthereumArgumentsMeasureable>
  as?: Maybe<EthereumArgumentsConvertable>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  reference?: Maybe<Array<EthereumAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  argumentType?: Maybe<Array<ArgumentTypeSelector>>
  signatureType?: Maybe<SignatureTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractEvent?: Maybe<EventSelector>
  external?: Maybe<Scalars['Boolean']>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsMinimumArgs = {
  of: EthereumArgumentsMeasureable
  get?: Maybe<EthereumArgumentsMeasureable>
  as?: Maybe<EthereumArgumentsConvertable>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  reference?: Maybe<Array<EthereumAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  argumentType?: Maybe<Array<ArgumentTypeSelector>>
  signatureType?: Maybe<SignatureTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractEvent?: Maybe<EventSelector>
  external?: Maybe<Scalars['Boolean']>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsNumberArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  reference?: Maybe<Array<EthereumAddressSelector>>
  value?: Maybe<Array<ArgumentValueSelector>>
  argument?: Maybe<Array<ArgumentSelector>>
  argumentType?: Maybe<Array<ArgumentTypeSelector>>
  signatureType?: Maybe<SignatureTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractEvent?: Maybe<EventSelector>
  external?: Maybe<Scalars['Boolean']>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsReferenceArgs = {
  reference?: Maybe<Array<EthereumAddressSelector>>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsSmartContractArgs = {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsSmartContractSignatureArgs = {
  smartContractMethod?: Maybe<MethodSelector>
  smartContractEvent?: Maybe<EventSelector>
  signatureType?: Maybe<SignatureTypeSelector>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsSuccessArgs = {
  success?: Maybe<Array<Scalars['Boolean']>>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
}

/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsValueArgs = {
  value?: Maybe<Array<ArgumentValueSelector>>
}

export enum EthereumArgumentsConvertable {
  /** Token symbol */
  TokenSymbol = 'token_symbol',
  /** Token name */
  TokenName = 'token_name',
}

export enum EthereumArgumentsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Caller */
  Caller = 'caller',
  /** Smart Contract */
  SmartContract = 'smart_contract',
  /** Smart Contract Method Name */
  SignatureName = 'signature_name',
  /** Smart Contract Method Signature */
  Signature = 'signature',
  /** Smart Contract Method Signature */
  SignatureType = 'signature_type',
  /** Smart Contract Method Signature Hash */
  SignatureHash = 'signature_hash',
  /** Call depth */
  CallDepth = 'call_depth',
  /** Argument */
  Argument = 'argument',
  /** Argument type */
  ArgumentType = 'argument_type',
  /** Argument value */
  ArgumentValue = 'argument_value',
  /** Argument index */
  ArgumentIndex = 'argument_index',
}

/** Balance in a currency */
export type EthereumBalance = {
  __typename?: 'EthereumBalance'
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** History of balance changes by currencies for the address */
  history?: Maybe<Array<EthereumBalanceChange>>
  value?: Maybe<Scalars['Float']>
}

/** Balance in a currency */
export type EthereumBalanceHistoryArgs = {
  currency?: Maybe<Array<EthereumCurrencySelector>>
  height?: Maybe<BlockSelectorRange>
}

/** Change of balance in a currency */
export type EthereumBalanceChange = {
  __typename?: 'EthereumBalanceChange'
  /** Block number (height) in blockchain */
  block: Scalars['Int']
  /** Block timestamp */
  timestamp?: Maybe<Scalars['ISO8601DateTime']>
  /** Transfer amount ( positive inbound, negative outbound) */
  transferAmount?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type EthereumBlockFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocks = {
  __typename?: 'EthereumBlocks'
  any?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  difficulty?: Maybe<Scalars['Float']>
  /** Block hash */
  hash: Scalars['String']
  /** Block number (height) in blockchain */
  height: Scalars['Int']
  maximum?: Maybe<Scalars['String']>
  /** Block miner */
  miner?: Maybe<EthereumAddressInfo>
  minimum?: Maybe<Scalars['String']>
  /** Block nonce */
  nonce: Scalars['Int']
  /** Parent block hash */
  parentHash: Scalars['String']
  reward?: Maybe<Scalars['Float']>
  /** Currency of reward */
  rewardCurrency?: Maybe<Currency>
  size?: Maybe<Scalars['Int']>
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
  totalDifficulty?: Maybe<Scalars['Float']>
  transactionCount?: Maybe<Scalars['Int']>
  uncleCount?: Maybe<Scalars['Int']>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksAnyArgs = {
  of: EthereumBlocksMeasureable
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksCountArgs = {
  uniq?: Maybe<EthereumBlocksUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksDifficultyArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksHeightArgs = {
  height?: Maybe<BlockSelector>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksMaximumArgs = {
  of: EthereumBlocksMeasureable
  get?: Maybe<EthereumBlocksMeasureable>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksMinerArgs = {
  miner?: Maybe<Array<EthereumAddressSelector>>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksMinimumArgs = {
  of: EthereumBlocksMeasureable
  get?: Maybe<EthereumBlocksMeasureable>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksRewardArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksSizeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksTotalDifficultyArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksTransactionCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

/** Blocks in Ethereum blockchain */
export type EthereumBlocksUncleCountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<EthereumAddressSelector>>
  blockReward?: Maybe<Array<AmountSelector>>
  transactionCount?: Maybe<Array<IntegerSelector>>
  uncleCount?: Maybe<Array<IntegerSelector>>
  size?: Maybe<Array<IntegerSelector>>
}

export enum EthereumBlocksMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockHash = 'block_hash',
  /** Block Reward */
  BlockReward = 'block_reward',
  /** Block Miner */
  Miner = 'miner',
}

export enum EthereumBlocksUniq {
  /** Unique miner count */
  Miners = 'miners',
  /** Unique date count */
  Dates = 'dates',
}

export enum EthereumCallsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Caller */
  Caller = 'caller',
  /** Smart Contract */
  SmartContract = 'smart_contract',
  /** Smart Contract Method Name */
  SignatureName = 'signature_name',
  /** Smart Contract Method Signature */
  Signature = 'signature',
  /** Smart Contract Method Signature Hash */
  SignatureHash = 'signature_hash',
  /** Call depth */
  CallDepth = 'call_depth',
}

/** Coinpath */
export type EthereumCoinpath = {
  __typename?: 'EthereumCoinpath'
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Receiver address */
  receiver?: Maybe<EthereumAddressInfo>
  /** Sender address */
  sender?: Maybe<EthereumAddressInfo>
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>
}

/** Coinpath */
export type EthereumCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>
}

/** Coinpath */
export type EthereumCoinpathAnyArgs = {
  of: CoinpathMeasureable
}

/** Coinpath */
export type EthereumCoinpathMaximumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/** Coinpath */
export type EthereumCoinpathMinimumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/**
 * Currency selector in Ethereum blockchain.
 *   Currencies supported are native ( ETH / ETC ), ERC20, ERC721 tokens.
 *   You can specify currency symbol or smart contract address. Symbols ETH/ETC are reserved for native currencies in Ethereum mainnet and classic.
 *   Ethereum Smart contract address should start from 0x and contain 40 hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export type EthereumCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>
  /** Currency not */
  not?: Maybe<Scalars['String']>
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Ethereum DEX attributes */
export type EthereumDex = {
  __typename?: 'EthereumDex'
  /** Address for DEX exchange identification */
  address: Address
  /** Full name ( name for known, Protocol for unknown ) */
  fullName: Scalars['String']
  /** Full name ( name for known, Protocol / address for unknown ) */
  fullNameWithId: Scalars['String']
  /** Name for known exchanges */
  name?: Maybe<Scalars['String']>
}

export type EthereumDexTradeFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  protocol?: Maybe<Array<StringSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeName?: Maybe<Array<StringSelector>>
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>
  maker?: Maybe<Array<EthereumAddressSelector>>
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  taker?: Maybe<Array<EthereumAddressSelector>>
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>
  tradeIndex?: Maybe<Array<StringSelector>>
  buyAmount?: Maybe<Array<AmountSelector>>
  sellAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  priceAsymmetry?: Maybe<Array<FloatSelector>>
  tradeAmountUsd?: Maybe<Array<FloatSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTrades = {
  __typename?: 'EthereumDexTrades'
  /** Trader (maker or taker) */
  address?: Maybe<EthereumAddressInfo>
  any?: Maybe<Scalars['String']>
  baseAmount?: Maybe<Scalars['Float']>
  /** Base currency */
  baseCurrency?: Maybe<Currency>
  /** Block in the blockchain */
  block?: Maybe<BlockExtended>
  buyAmount?: Maybe<Scalars['Float']>
  /** Maker buys this currency */
  buyCurrency?: Maybe<Currency>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Identification of admin / manager / factory of smart contract, executing trades */
  exchange?: Maybe<EthereumDex>
  gas?: Maybe<Scalars['Float']>
  /** Gas price in Gwei */
  gasPrice: Scalars['Float']
  gasValue?: Maybe<Scalars['Float']>
  /** Trade 'maker' side */
  maker?: Maybe<EthereumAddressInfo>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  /** Protocol name of the smart contract */
  protocol?: Maybe<Scalars['String']>
  quoteAmount?: Maybe<Scalars['Float']>
  /** Quote currency */
  quoteCurrency?: Maybe<Currency>
  quotePrice?: Maybe<Scalars['Float']>
  sellAmount?: Maybe<Scalars['Float']>
  /** Maker sells this currency */
  sellCurrency?: Maybe<Currency>
  /** Side of trade ( SELL / BUY ) */
  side?: Maybe<TradeSide>
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>
  /** Trade 'taker' side */
  taker?: Maybe<EthereumAddressInfo>
  /** Time interval */
  timeInterval?: Maybe<TimeInterval>
  tradeAmount?: Maybe<Scalars['Float']>
  /** Index of trade in transaction, used to separate trades in transaction */
  tradeIndex?: Maybe<Scalars['String']>
  /** Transaction of DexTrade */
  transaction?: Maybe<EthereumTransactionInfoExtended>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesAddressArgs = {
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesAnyArgs = {
  of: EthereumDexTradesMeasureable
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesBaseAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesBaseCurrencyArgs = {
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesBuyAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesBuyCurrencyArgs = {
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesCountArgs = {
  uniq?: Maybe<EthereumDexTradesUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  protocol?: Maybe<Array<StringSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeName?: Maybe<Array<StringSelector>>
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>
  maker?: Maybe<Array<EthereumAddressSelector>>
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  taker?: Maybe<Array<EthereumAddressSelector>>
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>
  tradeIndex?: Maybe<Array<StringSelector>>
  buyAmount?: Maybe<Array<AmountSelector>>
  sellAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  priceAsymmetry?: Maybe<Array<FloatSelector>>
  tradeAmountUsd?: Maybe<Array<FloatSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesExchangeArgs = {
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeName?: Maybe<Array<StringSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  protocol?: Maybe<Array<StringSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeName?: Maybe<Array<StringSelector>>
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>
  maker?: Maybe<Array<EthereumAddressSelector>>
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  taker?: Maybe<Array<EthereumAddressSelector>>
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>
  tradeIndex?: Maybe<Array<StringSelector>>
  buyAmount?: Maybe<Array<AmountSelector>>
  sellAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  priceAsymmetry?: Maybe<Array<FloatSelector>>
  tradeAmountUsd?: Maybe<Array<FloatSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesGasPriceArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  protocol?: Maybe<Array<StringSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeName?: Maybe<Array<StringSelector>>
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>
  maker?: Maybe<Array<EthereumAddressSelector>>
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  taker?: Maybe<Array<EthereumAddressSelector>>
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>
  tradeIndex?: Maybe<Array<StringSelector>>
  buyAmount?: Maybe<Array<AmountSelector>>
  sellAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  priceAsymmetry?: Maybe<Array<FloatSelector>>
  tradeAmountUsd?: Maybe<Array<FloatSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesMakerArgs = {
  maker?: Maybe<Array<EthereumAddressSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesMaximumArgs = {
  of: EthereumDexTradesMeasureable
  get?: Maybe<EthereumDexTradesMeasureable>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesMinimumArgs = {
  of: EthereumDexTradesMeasureable
  get?: Maybe<EthereumDexTradesMeasureable>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesPriceArgs = {
  calculate?: Maybe<PriceAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  protocol?: Maybe<Array<StringSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeName?: Maybe<Array<StringSelector>>
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>
  maker?: Maybe<Array<EthereumAddressSelector>>
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  taker?: Maybe<Array<EthereumAddressSelector>>
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>
  tradeIndex?: Maybe<Array<StringSelector>>
  buyAmount?: Maybe<Array<AmountSelector>>
  sellAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  priceAsymmetry?: Maybe<Array<FloatSelector>>
  tradeAmountUsd?: Maybe<Array<FloatSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesProtocolArgs = {
  protocol?: Maybe<Array<StringSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesQuoteAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesQuoteCurrencyArgs = {
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesQuotePriceArgs = {
  calculate?: Maybe<PriceAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  protocol?: Maybe<Array<StringSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>
  exchangeName?: Maybe<Array<StringSelector>>
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>
  maker?: Maybe<Array<EthereumAddressSelector>>
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  taker?: Maybe<Array<EthereumAddressSelector>>
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>
  tradeIndex?: Maybe<Array<StringSelector>>
  buyAmount?: Maybe<Array<AmountSelector>>
  sellAmount?: Maybe<Array<AmountSelector>>
  price?: Maybe<Array<AmountSelector>>
  priceAsymmetry?: Maybe<Array<FloatSelector>>
  tradeAmountUsd?: Maybe<Array<FloatSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesSellAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesSellCurrencyArgs = {
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesSmartContractArgs = {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesTakerArgs = {
  taker?: Maybe<Array<EthereumAddressSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesTradeAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in: BaseCurrencyEnum
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesTradeIndexArgs = {
  tradeIndex?: Maybe<Array<StringSelector>>
}

/** Trades on DEX smart contracts */
export type EthereumDexTradesTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
  txSender?: Maybe<Array<EthereumAddressSelector>>
}

export enum EthereumDexTradesMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Buy Amount */
  BuyAmount = 'buy_amount',
  /** Sell Amount */
  SellAmount = 'sell_amount',
  /** Price */
  Price = 'price',
  /** Quote Price */
  QuotePrice = 'quote_price',
  /** Maker */
  Maker = 'maker',
  /** Taker */
  Taker = 'taker',
  /** Buy Currency symbol */
  BuyCurrencySymbol = 'buy_currency_symbol',
  /** Buy Token address */
  BuyCurrencyAddress = 'buy_currency_address',
  /** Sell Currency symbol */
  SellCurrencySymbol = 'sell_currency_symbol',
  /** Sell Token address */
  SellCurrencyAddress = 'sell_currency_address',
}

export enum EthereumDexTradesUniq {
  /** Unique TX senders count */
  Senders = 'senders',
  /** Unique makers count */
  Makers = 'makers',
  /** Unique makers count */
  Takers = 'takers',
  /** Unique makers & takers count */
  Address = 'address',
  /** Buy currencies count */
  BuyCurrency = 'buy_currency',
  /** Sell currencies count */
  SellCurrency = 'sell_currency',
  /** Base currencies count */
  BaseCurrency = 'base_currency',
  /** Quote currencies count */
  QuoteCurrency = 'quote_currency',
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique transactions count */
  Txs = 'txs',
  /** Unique date count */
  Dates = 'dates',
  /** Unique smart contract count */
  SmartContracts = 'smart_contracts',
  /** Unique protocols count */
  Protocols = 'protocols',
}

export enum EthereumEventsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Smart Contract */
  SmartContract = 'smart_contract',
  /** Smart Contract Event Name */
  SignatureName = 'signature_name',
  /** Smart Contract Event Signature */
  Signature = 'signature',
  /** Smart Contract Event Signature Hash */
  SignatureHash = 'signature_hash',
}

export enum EthereumNetwork {
  /** Ethereum Mainnet */
  Ethereum = 'ethereum',
  /** Ethereum Classic */
  Ethclassic = 'ethclassic',
  /** Ethereum Classic ( no reorg from block 10904146) */
  EthclassicReorg = 'ethclassic_reorg',
  /** Celo Alfajores Testnet */
  CeloAlfajores = 'celo_alfajores',
  /** Celo Baklava Testnet */
  CeloBaklava = 'celo_baklava',
  /** Celo RC1 */
  CeloRc1 = 'celo_rc1',
  /** Binance Smart Chain Mainnet */
  Bsc = 'bsc',
  /** Binance Smart Chain Testnet */
  BscTestnet = 'bsc_testnet',
  /** Goerli Ethereum Testnet */
  Goerli = 'goerli',
}

/** Ethereum smart contract */
export type EthereumSmartContract = {
  __typename?: 'EthereumSmartContract'
  /** Smart Contract Address */
  address: Address
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>
}

export type EthereumSmartContractCallFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractType?: Maybe<SmartContractTypeSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Array<Scalars['Boolean']>>
}

/** Smart Contract Calls */
export type EthereumSmartContractCalls = {
  __typename?: 'EthereumSmartContractCalls'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Call arguments */
  arguments?: Maybe<Array<ArgumentNameValue>>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>
  /** Caller of the method invocation ( tx sender or another smart contract ) */
  caller?: Maybe<EthereumAddressInfo>
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>
  /** Gas used for transaction in external call, or by methd in internal call */
  gasValue?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>
  /** Transaction where call happened */
  transaction?: Maybe<EthereumTransactionInfo>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractType?: Maybe<SmartContractTypeSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Array<Scalars['Boolean']>>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsAnyArgs = {
  of: EthereumCallsMeasureable
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsCallerArgs = {
  caller?: Maybe<Array<EthereumAddressSelector>>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractType?: Maybe<SmartContractTypeSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Array<Scalars['Boolean']>>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsExternalArgs = {
  external?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  caller?: Maybe<Array<EthereumAddressSelector>>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractMethod?: Maybe<MethodSelector>
  smartContractType?: Maybe<SmartContractTypeSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Array<Scalars['Boolean']>>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsMaximumArgs = {
  of: EthereumCallsMeasureable
  get?: Maybe<EthereumCallsMeasureable>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsMinimumArgs = {
  of: EthereumCallsMeasureable
  get?: Maybe<EthereumCallsMeasureable>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsSmartContractArgs = {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsSmartContractMethodArgs = {
  smartContractMethod?: Maybe<MethodSelector>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsSuccessArgs = {
  success?: Maybe<Array<Scalars['Boolean']>>
}

/** Smart Contract Calls */
export type EthereumSmartContractCallsTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
}

/** Smart Contract Events */
export type EthereumSmartContractEvent = {
  __typename?: 'EthereumSmartContractEvent'
  any?: Maybe<Scalars['String']>
  /** Event arguments */
  arguments?: Maybe<Array<ArgumentNameValue>>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Event index */
  eventIndex?: Maybe<Scalars['String']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>
  /** Contract event logged */
  smartContractEvent?: Maybe<Event>
  /** Transaction where event happened */
  transaction?: Maybe<EthereumTransactionInfo>
}

/** Smart Contract Events */
export type EthereumSmartContractEventAnyArgs = {
  of: EthereumEventsMeasureable
}

/** Smart Contract Events */
export type EthereumSmartContractEventBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Smart Contract Events */
export type EthereumSmartContractEventCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  smartContractType?: Maybe<SmartContractTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractEvent?: Maybe<EventSelector>
}

/** Smart Contract Events */
export type EthereumSmartContractEventMaximumArgs = {
  of: EthereumEventsMeasureable
  get?: Maybe<EthereumEventsMeasureable>
}

/** Smart Contract Events */
export type EthereumSmartContractEventMinimumArgs = {
  of: EthereumEventsMeasureable
  get?: Maybe<EthereumEventsMeasureable>
}

/** Smart Contract Events */
export type EthereumSmartContractEventSmartContractArgs = {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
}

/** Smart Contract Events */
export type EthereumSmartContractEventSmartContractEventArgs = {
  smartContractEvent?: Maybe<EventSelector>
}

/** Smart Contract Events */
export type EthereumSmartContractEventTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
}

export type EthereumSmartContractEventFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  smartContractType?: Maybe<SmartContractTypeSelector>
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>
  smartContractEvent?: Maybe<EventSelector>
}

/** Blockchain smart contract */
export type EthereumSmartContractInfo = {
  __typename?: 'EthereumSmartContractInfo'
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>
}

/** Blockchain smart contract */
export type EthereumSmartContractInfoWithAttributes = {
  __typename?: 'EthereumSmartContractInfoWithAttributes'
  /** Attributes from readonly methods */
  attributes?: Maybe<Array<SmartContractReadonlyAttribute>>
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>
}

export type EthereumTransactionFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  gasValue?: Maybe<Array<AmountSelector>>
}

/** Blockchain transaction info */
export type EthereumTransactionInfo = {
  __typename?: 'EthereumTransactionInfo'
  /** Gas consumed */
  gas: Scalars['Int']
  /** Gas price in Gwei */
  gasPrice: Scalars['Float']
  /** Gas value cost */
  gasValue: Scalars['Float']
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction from address */
  txFrom: EthereumAddressInfo
}

/** Blockchain Transaction Extended info */
export type EthereumTransactionInfoExtended = {
  __typename?: 'EthereumTransactionInfoExtended'
  /** Gas consumed */
  gas: Scalars['Int']
  /** Gas price in Gwei */
  gasPrice: Scalars['Float']
  /** Gas value cost */
  gasValue: Scalars['Float']
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>
  /** Transaction from address */
  txFrom: EthereumAddressInfo
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactions = {
  __typename?: 'EthereumTransactions'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['Int']>
  /** Created smart contract */
  creates?: Maybe<EthereumAddressInfo>
  /** Currency of amount */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  /** Error message if any */
  error?: Maybe<Scalars['String']>
  gas?: Maybe<Scalars['Float']>
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>
  /** Gas price in Gwei */
  gasPrice: Scalars['Float']
  gasValue?: Maybe<Scalars['Float']>
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>
  /** Transaction sender */
  sender?: Maybe<EthereumAddressInfo>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  gasValue?: Maybe<Array<AmountSelector>>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsAnyArgs = {
  of: EthereumTransactionsMeasureable
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsCountArgs = {
  uniq?: Maybe<EthereumTransactionsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  gasValue?: Maybe<Array<AmountSelector>>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsCreatesArgs = {
  txCreates?: Maybe<Array<EthereumAddressSelector>>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  gasValue?: Maybe<Array<AmountSelector>>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsGasCurrencyArgs = {
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsGasPriceArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  gasValue?: Maybe<Array<AmountSelector>>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txSender?: Maybe<Array<EthereumAddressSelector>>
  txTo?: Maybe<Array<EthereumAddressSelector>>
  txCreates?: Maybe<Array<EthereumAddressSelector>>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>
  gasValue?: Maybe<Array<AmountSelector>>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsIndexArgs = {
  txIndex?: Maybe<Array<TxIndexSelector>>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsMaximumArgs = {
  of: EthereumTransactionsMeasureable
  get?: Maybe<EthereumTransactionsMeasureable>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsMinimumArgs = {
  of: EthereumTransactionsMeasureable
  get?: Maybe<EthereumTransactionsMeasureable>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsSenderArgs = {
  txSender?: Maybe<Array<EthereumAddressSelector>>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Transactions in Ethereum blockchain */
export type EthereumTransactionsToArgs = {
  txTo?: Maybe<Array<EthereumAddressSelector>>
}

export enum EthereumTransactionsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Amount */
  Amount = 'amount',
  /** Transaction Sender */
  TxSender = 'tx_sender',
  /** Gas value */
  GasValue = 'gas_value',
  /** Gas price */
  GasPrice = 'gas_price',
  /** Gas used */
  Gas = 'gas',
}

export enum EthereumTransactionsUniq {
  /** Unique TX senders count */
  Senders = 'senders',
  /** Unique TX receivers count */
  Receivers = 'receivers',
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
}

export type EthereumTransferFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  entityId?: Maybe<EntitySelector>
  sender?: Maybe<Array<EthereumAddressSelector>>
  receiver?: Maybe<Array<EthereumAddressSelector>>
  currency?: Maybe<Array<EthereumCurrencySelector>>
  external?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfers = {
  __typename?: 'EthereumTransfers'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>
  gasValue?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Transfer receiver */
  receiver?: Maybe<EthereumAddressInfo>
  /** Transfer sender */
  sender?: Maybe<EthereumAddressInfo>
  /** Transaction where transfer happened */
  transaction?: Maybe<EthereumTransactionInfo>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  entityId?: Maybe<EntitySelector>
  sender?: Maybe<Array<EthereumAddressSelector>>
  receiver?: Maybe<Array<EthereumAddressSelector>>
  currency?: Maybe<Array<EthereumCurrencySelector>>
  external?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersAnyArgs = {
  of: EthereumTransfersMeasureable
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  entityId?: Maybe<EntitySelector>
  sender?: Maybe<Array<EthereumAddressSelector>>
  receiver?: Maybe<Array<EthereumAddressSelector>>
  currency?: Maybe<Array<EthereumCurrencySelector>>
  external?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersCurrencyArgs = {
  currency?: Maybe<Array<EthereumCurrencySelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersEntityIdArgs = {
  entityId?: Maybe<EntitySelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersExternalArgs = {
  external?: Maybe<Scalars['Boolean']>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
  entityId?: Maybe<EntitySelector>
  sender?: Maybe<Array<EthereumAddressSelector>>
  receiver?: Maybe<Array<EthereumAddressSelector>>
  currency?: Maybe<Array<EthereumCurrencySelector>>
  external?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersMaximumArgs = {
  of: EthereumTransfersMeasureable
  get?: Maybe<EthereumTransfersMeasureable>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersMinimumArgs = {
  of: EthereumTransfersMeasureable
  get?: Maybe<EthereumTransfersMeasureable>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersReceiverArgs = {
  receiver?: Maybe<Array<EthereumAddressSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersSenderArgs = {
  sender?: Maybe<Array<EthereumAddressSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersTransactionArgs = {
  txHash?: Maybe<Array<HashSelector>>
  txFrom?: Maybe<Array<EthereumAddressSelector>>
}

export enum EthereumTransfersMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Amount */
  Amount = 'amount',
  /** Sender */
  Sender = 'sender',
  /** Receiver */
  Receiver = 'receiver',
  /** Currency symbol */
  CurrencySymbol = 'currency_symbol',
  /** Token address */
  CurrencyAddress = 'currency_address',
  /** Entity ID */
  EntityId = 'entity_id',
}

/** Smart contract event */
export type Event = {
  __typename?: 'Event'
  /** Name */
  name?: Maybe<Scalars['String']>
  /** Signature */
  signature?: Maybe<Scalars['String']>
  /** Signature Hash */
  signatureHash: Scalars['String']
}

/** Smart contract event. In selector you can use the name, signature or hex hash */
export type EventSelector = {
  /** Event signature is */
  is?: Maybe<Scalars['String']>
  /** Event signature not */
  not?: Maybe<Scalars['String']>
  /** Event signature in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Event signature not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Filecoin */
export type Filecoin = {
  __typename?: 'Filecoin'
  /** Filecoin Network Blocks */
  blocks?: Maybe<Array<FilecoinBlock>>
  /** Filecoin Network Calls */
  calls?: Maybe<Array<FilecoinCalls>>
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<FilecoinCoinpath>>
  /** Filecoin Network Messages ( blocks, transfers, ... ) */
  messages?: Maybe<Array<FilecoinMessages>>
  /** Filecoin Network Currency Transfers */
  transfers?: Maybe<Array<FilecoinTransfers>>
}

/** Filecoin */
export type FilecoinBlocksArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<AddressSelector>>
  blockIndex?: Maybe<IntegerSelector>
  any?: Maybe<Array<FilecoinBlockFilter>>
  options?: Maybe<QueryOptions>
}

/** Filecoin */
export type FilecoinCallsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  amount?: Maybe<AmountSelector>
  messageMethod?: Maybe<IntegerSelector>
  any?: Maybe<Array<FilecoinCallFilter>>
  options?: Maybe<QueryOptions>
}

/** Filecoin */
export type FilecoinCoinpathArgs = {
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  initialAddress?: Maybe<AddressSelector>
  initialDate?: Maybe<DateSelector>
  initialTime?: Maybe<DateTimeSelector>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  depth?: Maybe<IntegerLimitedSelector>
  options?: Maybe<CoinpathOptions>
}

/** Filecoin */
export type FilecoinMessagesArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
  any?: Maybe<Array<FilecoinMessageFilter>>
  options?: Maybe<QueryOptions>
}

/** Filecoin */
export type FilecoinTransfersArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  amount?: Maybe<AmountSelector>
  transferType?: Maybe<TransferTypeSelector>
  messageMethod?: Maybe<IntegerSelector>
  any?: Maybe<Array<FilecoinTransferFilter>>
  options?: Maybe<QueryOptions>
}

/** Block */
export type FilecoinBlock = {
  __typename?: 'FilecoinBlock'
  any?: Maybe<Scalars['String']>
  blockSig?: Maybe<NameWithId>
  blsAggregate?: Maybe<NameWithId>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  electionProof?: Maybe<Scalars['String']>
  forkSignalling?: Maybe<Scalars['BigInt']>
  /** Block hash */
  hash: Scalars['String']
  /** Block round in blockchain */
  height: Scalars['Int']
  /** Block index on height */
  index?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  messageCount?: Maybe<Scalars['Int']>
  messages?: Maybe<Scalars['String']>
  /** Miner */
  miner?: Maybe<Address>
  minerTips?: Maybe<Scalars['Float']>
  minimum?: Maybe<Scalars['String']>
  parentMessageReceipts?: Maybe<Scalars['String']>
  parentStateRoot?: Maybe<Scalars['String']>
  parentWeight?: Maybe<Scalars['BigInt']>
  reward?: Maybe<Scalars['Float']>
  ticket?: Maybe<Scalars['String']>
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
  totalReward?: Maybe<Scalars['Float']>
  winCount?: Maybe<Scalars['Int']>
  wincount?: Maybe<Scalars['Int']>
}

/** Block */
export type FilecoinBlockAnyArgs = {
  of: FilecoinBlocksMeasureable
}

/** Block */
export type FilecoinBlockCountArgs = {
  uniq?: Maybe<FilecoinBlockUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<AddressSelector>>
  blockIndex?: Maybe<IntegerSelector>
}

/** Block */
export type FilecoinBlockHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>
}

/** Block */
export type FilecoinBlockHeightArgs = {
  height?: Maybe<BlockSelector>
}

/** Block */
export type FilecoinBlockIndexArgs = {
  blockIndex?: Maybe<IntegerSelector>
}

/** Block */
export type FilecoinBlockMaximumArgs = {
  of: FilecoinBlocksMeasureable
  get?: Maybe<FilecoinBlocksMeasureable>
}

/** Block */
export type FilecoinBlockMessageCountArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<AddressSelector>>
  blockIndex?: Maybe<IntegerSelector>
}

/** Block */
export type FilecoinBlockMinerArgs = {
  miner?: Maybe<AddressSelector>
}

/** Block */
export type FilecoinBlockMinerTipsArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<AddressSelector>>
  blockIndex?: Maybe<IntegerSelector>
}

/** Block */
export type FilecoinBlockMinimumArgs = {
  of: FilecoinBlocksMeasureable
  get?: Maybe<FilecoinBlocksMeasureable>
}

/** Block */
export type FilecoinBlockRewardArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<AddressSelector>>
  blockIndex?: Maybe<IntegerSelector>
}

/** Block */
export type FilecoinBlockTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Block */
export type FilecoinBlockTotalRewardArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<AddressSelector>>
  blockIndex?: Maybe<IntegerSelector>
}

/** Block */
export type FilecoinBlockWinCountArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<AddressSelector>>
  blockIndex?: Maybe<IntegerSelector>
}

export type FilecoinBlockFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  miner?: Maybe<Array<AddressSelector>>
  blockIndex?: Maybe<IntegerSelector>
}

export enum FilecoinBlockUniq {
  /** Miner */
  Miners = 'miners',
  /** Unique date count */
  Dates = 'dates',
  /** Unique block height count */
  Heights = 'heights',
  /** Unique block count */
  Blocks = 'blocks',
}

export enum FilecoinBlocksMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockHash = 'block_hash',
  /** Block Miner */
  Miner = 'miner',
}

export type FilecoinCallFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  amount?: Maybe<AmountSelector>
  messageMethod?: Maybe<IntegerSelector>
}

/** Calls in Filecoin blockchain */
export type FilecoinCalls = {
  __typename?: 'FilecoinCalls'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer Message is included */
  block?: Maybe<Block>
  /** Call hash */
  callHash?: Maybe<Scalars['String']>
  /** Call hash */
  callPath?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  exitCode?: Maybe<Scalars['BigInt']>
  gas?: Maybe<Scalars['Int']>
  gasFeeCap?: Maybe<Scalars['BigInt']>
  gasLimit?: Maybe<Scalars['BigInt']>
  gasPremium?: Maybe<Scalars['Float']>
  /** Message hash */
  hash?: Maybe<Scalars['String']>
  maximum?: Maybe<Scalars['String']>
  /** Message Method */
  messageMethod?: Maybe<NameWithId>
  /** Method */
  method?: Maybe<NameWithId>
  minedBlock?: Maybe<FilecoinMinedBlock>
  minimum?: Maybe<Scalars['String']>
  nonce?: Maybe<Scalars['BigInt']>
  /** Message receiver */
  receiver?: Maybe<AddressWithAccount>
  returnValue?: Maybe<Scalars['String']>
  /** Message sender */
  sender?: Maybe<AddressWithAccount>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  amount?: Maybe<AmountSelector>
  messageMethod?: Maybe<IntegerSelector>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsAnyArgs = {
  of: FilecoinCallsMeasureable
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsCountArgs = {
  uniq?: Maybe<FilecoinMessagesUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  amount?: Maybe<AmountSelector>
  messageMethod?: Maybe<IntegerSelector>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsHashArgs = {
  hash?: Maybe<HashSelector>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsMaximumArgs = {
  of: FilecoinCallsMeasureable
  get?: Maybe<FilecoinCallsMeasureable>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsMessageMethodArgs = {
  messageMethod?: Maybe<IntegerSelector>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsMethodArgs = {
  method?: Maybe<IntegerSelector>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsMinimumArgs = {
  of: FilecoinCallsMeasureable
  get?: Maybe<FilecoinCallsMeasureable>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsReceiverArgs = {
  receiver?: Maybe<AddressSelector>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsSenderArgs = {
  sender?: Maybe<AddressSelector>
}

/** Calls in Filecoin blockchain */
export type FilecoinCallsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

export enum FilecoinCallsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Message hash */
  MessageHash = 'message_hash',
  /** Amount */
  Amount = 'amount',
  /** Gas value */
  GasValue = 'gas_value',
  /** Gas limit */
  GasLimit = 'gas_limit',
  /** Gas used */
  Gas = 'gas',
}

/** Coinpath */
export type FilecoinCoinpath = {
  __typename?: 'FilecoinCoinpath'
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Count of transfers */
  count?: Maybe<Scalars['BigInt']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  /** Message of transfer happened */
  message?: Maybe<TransactionHashValue>
  minimum?: Maybe<Scalars['String']>
  /** Receiver address */
  receiver?: Maybe<Address>
  /** Sender address */
  sender?: Maybe<Address>
}

/** Coinpath */
export type FilecoinCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>
}

/** Coinpath */
export type FilecoinCoinpathAnyArgs = {
  of: CoinpathMeasureable
}

/** Coinpath */
export type FilecoinCoinpathMaximumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/** Coinpath */
export type FilecoinCoinpathMinimumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

export type FilecoinMessageFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessages = {
  __typename?: 'FilecoinMessages'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  baseFeeBurn?: Maybe<Scalars['Float']>
  /** Block where transfer Message is included */
  block?: Maybe<Block>
  burned?: Maybe<Scalars['Float']>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  exitCode?: Maybe<Scalars['BigInt']>
  gas?: Maybe<Scalars['Int']>
  gasFeeCap?: Maybe<Scalars['BigInt']>
  gasLimit?: Maybe<Scalars['BigInt']>
  gasPremium?: Maybe<Scalars['Float']>
  /** Message hash */
  hash?: Maybe<Scalars['String']>
  maximum?: Maybe<Scalars['String']>
  /** Method */
  method?: Maybe<NameWithId>
  minedBlock?: Maybe<FilecoinMinedBlock>
  minerPenalty?: Maybe<Scalars['Float']>
  minerTip?: Maybe<Scalars['Float']>
  minimum?: Maybe<Scalars['String']>
  nonce?: Maybe<Scalars['BigInt']>
  overEstimationBurn?: Maybe<Scalars['Float']>
  /** Message receiver */
  receiver?: Maybe<AddressWithAccount>
  refund?: Maybe<Scalars['Float']>
  returnValue?: Maybe<Scalars['String']>
  /** Message sender */
  sender?: Maybe<AddressWithAccount>
  signature?: Maybe<Scalars['String']>
  signatureType?: Maybe<Scalars['String']>
  /** Signed Message hash */
  signedHash?: Maybe<Scalars['String']>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  totalCost?: Maybe<Scalars['Float']>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesAnyArgs = {
  of: FilecoinMessagesMeasureable
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesBaseFeeBurnArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesBurnedArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesCountArgs = {
  uniq?: Maybe<FilecoinMessagesUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesHashArgs = {
  hash?: Maybe<HashSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesMaximumArgs = {
  of: FilecoinMessagesMeasureable
  get?: Maybe<FilecoinMessagesMeasureable>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesMethodArgs = {
  method?: Maybe<IntegerSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesMinerPenaltyArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesMinerTipArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesMinimumArgs = {
  of: FilecoinMessagesMeasureable
  get?: Maybe<FilecoinMessagesMeasureable>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesOverEstimationBurnArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesReceiverArgs = {
  receiver?: Maybe<AddressSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesRefundArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesSenderArgs = {
  sender?: Maybe<AddressSelector>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Messages in Filecoin blockchain */
export type FilecoinMessagesTotalCostArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  index?: Maybe<IntegerSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<AmountSelector>
}

export enum FilecoinMessagesMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Message hash */
  MessageHash = 'message_hash',
  /** Amount */
  Amount = 'amount',
  /** Gas value */
  GasValue = 'gas_value',
  /** Gas limit */
  GasLimit = 'gas_limit',
  /** Gas used */
  Gas = 'gas',
}

export enum FilecoinMessagesUniq {
  /** Unique block heights */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique Message senders */
  Senders = 'senders',
  /** Unique Message receivers */
  Receivers = 'receivers',
}

/** Filecoin Mined Block */
export type FilecoinMinedBlock = {
  __typename?: 'FilecoinMinedBlock'
  /** Hash */
  hash?: Maybe<Scalars['String']>
  /** Index on height */
  index?: Maybe<Scalars['Int']>
  /** Miner */
  miner?: Maybe<Address>
}

export enum FilecoinNetwork {
  /** Filecoin Mainnet */
  Filecoin = 'filecoin',
}

export type FilecoinTransferFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  amount?: Maybe<AmountSelector>
  transferType?: Maybe<TransferTypeSelector>
  messageMethod?: Maybe<IntegerSelector>
}

export enum FilecoinTransferType {
  /** Send (transfer) */
  Send = 'send',
  /** Miner Tip */
  Miner = 'miner',
  /** Reward */
  Reward = 'reward',
  /** Burn */
  Burn = 'burn',
  /** Rebalance */
  Rebalance = 'rebalance',
  /** Genesis */
  Genesis = 'genesis',
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfers = {
  __typename?: 'FilecoinTransfers'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer Transfer is included */
  block?: Maybe<BlockExtended>
  /** Call hash */
  callHash?: Maybe<Scalars['String']>
  /** Call hash */
  callPath?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  /** Message hash */
  hash?: Maybe<Scalars['String']>
  maximum?: Maybe<Scalars['String']>
  /** Message Method */
  messageMethod?: Maybe<NameWithId>
  /** Method */
  method?: Maybe<NameWithId>
  minimum?: Maybe<Scalars['String']>
  /** Transfer receiver */
  receiver?: Maybe<Address>
  /** Transfer sender */
  sender?: Maybe<Address>
  /** Transfer timestamp */
  timestamp?: Maybe<DateTime>
  /** Type of transfer */
  transferType?: Maybe<FilecoinTransferType>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  amount?: Maybe<AmountSelector>
  transferType?: Maybe<TransferTypeSelector>
  messageMethod?: Maybe<IntegerSelector>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersAnyArgs = {
  of: FilecoinTransfersMeasureable
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersCountArgs = {
  uniq?: Maybe<FilecoinMessagesUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  hash?: Maybe<HashSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  method?: Maybe<IntegerSelector>
  amount?: Maybe<AmountSelector>
  transferType?: Maybe<TransferTypeSelector>
  messageMethod?: Maybe<IntegerSelector>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersHashArgs = {
  hash?: Maybe<HashSelector>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersMaximumArgs = {
  of: FilecoinTransfersMeasureable
  get?: Maybe<FilecoinTransfersMeasureable>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersMessageMethodArgs = {
  messageMethod?: Maybe<IntegerSelector>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersMethodArgs = {
  method?: Maybe<IntegerSelector>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersMinimumArgs = {
  of: FilecoinTransfersMeasureable
  get?: Maybe<FilecoinTransfersMeasureable>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersReceiverArgs = {
  receiver?: Maybe<AddressSelector>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersSenderArgs = {
  sender?: Maybe<AddressSelector>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfersTransferTypeArgs = {
  transferType?: Maybe<TransferTypeSelector>
}

export enum FilecoinTransfersMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockHash = 'block_hash',
  /** Transfer hash */
  TxHash = 'tx_hash',
  /** Value */
  Value = 'value',
  /** Gas value */
  GasValue = 'gas_value',
  /** Gas limit */
  GasLimit = 'gas_limit',
  /** Gas used */
  Gas = 'gas',
}

/** Select by number */
export type FloatSelector = {
  /** is */
  is?: Maybe<Scalars['Float']>
  /** not */
  not?: Maybe<Scalars['Float']>
  /** in the list */
  in?: Maybe<Array<Scalars['Float']>>
  /** not in the list */
  notIn?: Maybe<Array<Scalars['Float']>>
  /** greater than */
  gt?: Maybe<Scalars['Float']>
  /** less than */
  lt?: Maybe<Scalars['Float']>
  /** less or equal than */
  lteq?: Maybe<Scalars['Float']>
  /** greater or equal than */
  gteq?: Maybe<Scalars['Float']>
  /** in range */
  between?: Maybe<Array<Scalars['Float']>>
}

export enum FlowDirection {
  /** Inbound transfers */
  Inbound = 'inbound',
  /** Outbound transfers */
  Outbound = 'outbound',
}

/** Select by hash */
export type HashSelector = {
  /** Hash is */
  is?: Maybe<Scalars['String']>
  /** Hash not */
  not?: Maybe<Scalars['String']>
  /** Hash in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Hash not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Headers */
export type Headers = {
  __typename?: 'Headers'
  /** Headers json string */
  json?: Maybe<Scalars['String']>
}

/** Hedera Chain */
export type Hedera = {
  __typename?: 'Hedera'
  /** Blockchain Arguments */
  arguments?: Maybe<Array<HederaArgument>>
  /** Blockhain Calls */
  calls?: Maybe<Array<HederaCall>>
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<HederaCoinpath>>
  /** Blockhain Inputs */
  inputs?: Maybe<Array<HederaInput>>
  /** Blockhain Messages */
  messages?: Maybe<Array<HederaMessage>>
  /** Blockchain Outputs */
  outputs?: Maybe<Array<HederaOutput>>
  /** Blockchain Transactions */
  transactions?: Maybe<Array<HederaTransaction>>
}

/** Hedera Chain */
export type HederaArgumentsArgs = {
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<HederaArgumentFilter>>
  options?: Maybe<QueryOptions>
}

/** Hedera Chain */
export type HederaCallsArgs = {
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  callInput?: Maybe<HashSelector>
  callResult?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<HederaCallFilter>>
  options?: Maybe<QueryOptions>
}

/** Hedera Chain */
export type HederaCoinpathArgs = {
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  initialAddress?: Maybe<AddressSelector>
  initialDate?: Maybe<DateSelector>
  initialTime?: Maybe<DateTimeSelector>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  depth?: Maybe<IntegerLimitedSelector>
  options?: Maybe<CoinpathOptions>
}

/** Hedera Chain */
export type HederaInputsArgs = {
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  any?: Maybe<Array<HederaInputFilter>>
  options?: Maybe<QueryOptions>
}

/** Hedera Chain */
export type HederaMessagesArgs = {
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  transactionRunningHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<HederaMessageFilter>>
  options?: Maybe<QueryOptions>
}

/** Hedera Chain */
export type HederaOutputsArgs = {
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<HederaOutputFilter>>
  options?: Maybe<QueryOptions>
}

/** Hedera Chain */
export type HederaTransactionsArgs = {
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<HederaTransactionFilter>>
  options?: Maybe<QueryOptions>
}

/** Blockchain accounts */
export type HederaAccount = {
  __typename?: 'HederaAccount'
  /** Account */
  account: Scalars['String']
}

/** Arguments in Hedera blockchain */
export type HederaArgument = {
  __typename?: 'HederaArgument'
  any?: Maybe<Scalars['String']>
  /** Argument type */
  argtype?: Maybe<Scalars['String']>
  /** Argument */
  argument?: Maybe<Scalars['String']>
  chargedTxFee?: Maybe<Scalars['BigInt']>
  consensusTimestamp?: Maybe<Timestamp>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>
  initialBalance?: Maybe<Scalars['Float']>
  maxFee?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  memo?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>
  /** Transaction result */
  result?: Maybe<TransactionResult>
  /** Smart contract */
  smartContractEntity?: Maybe<Account>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  transactionBytes?: Maybe<Scalars['String']>
  transactionFee?: Maybe<Scalars['Float']>
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>
  transactionValidDurationInSec?: Maybe<Scalars['Int']>
  validStart?: Maybe<Timestamp>
  /** Value */
  value?: Maybe<Scalars['String']>
}

/** Arguments in Hedera blockchain */
export type HederaArgumentAnyArgs = {
  of: HederaArgumentsMeasureable
}

/** Arguments in Hedera blockchain */
export type HederaArgumentCountArgs = {
  uniq?: Maybe<HederaArgumentsUniq>
}

/** Arguments in Hedera blockchain */
export type HederaArgumentInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Arguments in Hedera blockchain */
export type HederaArgumentMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Arguments in Hedera blockchain */
export type HederaArgumentMaximumArgs = {
  of: HederaArgumentsMeasureable
  get?: Maybe<HederaArgumentsMeasureable>
}

/** Arguments in Hedera blockchain */
export type HederaArgumentMinimumArgs = {
  of: HederaArgumentsMeasureable
  get?: Maybe<HederaArgumentsMeasureable>
}

/** Arguments in Hedera blockchain */
export type HederaArgumentResultArgs = {
  result?: Maybe<HashSelector>
}

/** Arguments in Hedera blockchain */
export type HederaArgumentSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Arguments in Hedera blockchain */
export type HederaArgumentTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Arguments in Hedera blockchain */
export type HederaArgumentTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>
}

/** Arguments in Hedera blockchain */
export type HederaArgumentValidStartArgs = {
  time?: Maybe<DateTimeSelector>
  nanoseconds?: Maybe<Scalars['BigInt']>
}

export type HederaArgumentFilter = {
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
}

export enum HederaArgumentsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Valid start */
  ValidStart = 'valid_start',
  /** Valid duration */
  ValidDuration = 'valid_duration',
  /** Transaction Hash */
  TransactionHash = 'transaction_hash',
  /** Max Fee */
  MaxFee = 'max_fee',
  /** Charged Fee */
  TransactionFee = 'transaction_fee',
}

export enum HederaArgumentsUniq {
  /** Unique time */
  Times = 'times',
  /** Unique date count */
  Dates = 'dates',
  /** Unique consensus time */
  ConsensusTimes = 'consensus_times',
  /** Unique payer account */
  PayerAccount = 'payer_account',
  /** Unique node account */
  NodeAccount = 'node_account',
  /** Unique node account */
  SmartContractEntity = 'smart_contract_entity',
  /** Unique initial balance */
  InitialBalance = 'initial_balance',
}

/** Calls in Hedera blockchain */
export type HederaCall = {
  __typename?: 'HederaCall'
  any?: Maybe<Scalars['String']>
  /** Call input */
  callInput?: Maybe<Scalars['String']>
  /** Call input */
  callResult?: Maybe<Scalars['String']>
  chargedTxFee?: Maybe<Scalars['BigInt']>
  consensusTimestamp?: Maybe<Timestamp>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>
  gas?: Maybe<Scalars['Int']>
  initialBalance?: Maybe<Scalars['Float']>
  maxFee?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  memo?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>
  /** Transaction result */
  result?: Maybe<TransactionResult>
  /** Smart contract */
  smartContractEntity?: Maybe<Account>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  transactionBytes?: Maybe<Scalars['String']>
  transactionFee?: Maybe<Scalars['Float']>
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>
  transactionValidDurationInSec?: Maybe<Scalars['Int']>
  validStart?: Maybe<Timestamp>
}

/** Calls in Hedera blockchain */
export type HederaCallAnyArgs = {
  of: HederaCallsMeasureable
}

/** Calls in Hedera blockchain */
export type HederaCallCallInputArgs = {
  callInput?: Maybe<HashSelector>
}

/** Calls in Hedera blockchain */
export type HederaCallCallResultArgs = {
  callResult?: Maybe<HashSelector>
}

/** Calls in Hedera blockchain */
export type HederaCallCountArgs = {
  uniq?: Maybe<HederaCallsUniq>
}

/** Calls in Hedera blockchain */
export type HederaCallGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  callInput?: Maybe<HashSelector>
  callResult?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Calls in Hedera blockchain */
export type HederaCallInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Calls in Hedera blockchain */
export type HederaCallMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Calls in Hedera blockchain */
export type HederaCallMaximumArgs = {
  of: HederaCallsMeasureable
  get?: Maybe<HederaCallsMeasureable>
}

/** Calls in Hedera blockchain */
export type HederaCallMinimumArgs = {
  of: HederaCallsMeasureable
  get?: Maybe<HederaCallsMeasureable>
}

/** Calls in Hedera blockchain */
export type HederaCallResultArgs = {
  result?: Maybe<HashSelector>
}

/** Calls in Hedera blockchain */
export type HederaCallSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Calls in Hedera blockchain */
export type HederaCallTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Calls in Hedera blockchain */
export type HederaCallTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>
}

/** Calls in Hedera blockchain */
export type HederaCallValidStartArgs = {
  time?: Maybe<DateTimeSelector>
  nanoseconds?: Maybe<Scalars['BigInt']>
}

export type HederaCallFilter = {
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  smartContractEntity?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  callInput?: Maybe<HashSelector>
  callResult?: Maybe<HashSelector>
  success?: Maybe<Scalars['Boolean']>
}

export enum HederaCallsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Valid start */
  ValidStart = 'valid_start',
  /** Valid duration */
  ValidDuration = 'valid_duration',
  /** Transaction Hash */
  TransactionHash = 'transaction_hash',
  /** Max Fee */
  MaxFee = 'max_fee',
  /** Charged Fee */
  TransactionFee = 'transaction_fee',
}

export enum HederaCallsUniq {
  /** Unique time */
  Times = 'times',
  /** Unique date count */
  Dates = 'dates',
  /** Unique consensus time */
  ConsensusTimes = 'consensus_times',
  /** Unique payer account */
  PayerAccount = 'payer_account',
  /** Unique node account */
  NodeAccount = 'node_account',
  /** Unique node account */
  SmartContractEntity = 'smart_contract_entity',
  /** Unique initial balance */
  InitialBalance = 'initial_balance',
}

/** Coinpath */
export type HederaCoinpath = {
  __typename?: 'HederaCoinpath'
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Receiver address */
  receiver?: Maybe<Address>
  /** Sender address */
  sender?: Maybe<Address>
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>
}

/** Coinpath */
export type HederaCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>
}

/** Coinpath */
export type HederaCoinpathAnyArgs = {
  of: CoinpathMeasureable
}

/** Coinpath */
export type HederaCoinpathMaximumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/** Coinpath */
export type HederaCoinpathMinimumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/** Currency selector in Hedera blockchain. */
export type HederaCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>
  /** Currency not */
  not?: Maybe<Scalars['String']>
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Inputs in Hedera blockchain */
export type HederaInput = {
  __typename?: 'HederaInput'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  consensusTimestamp?: Maybe<Timestamp>
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  /** Entity */
  entity?: Maybe<Entity>
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>
  initialBalance?: Maybe<Scalars['Float']>
  maxFee?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  memo?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>
  /** Transaction result */
  result?: Maybe<TransactionResult>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  /** Calendar time */
  time?: Maybe<DateTime>
  transactionFee?: Maybe<Scalars['Float']>
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>
  transactionValidDurationInSec?: Maybe<Scalars['Int']>
  /** Transfer Account */
  transferEntity?: Maybe<Account>
  validStart?: Maybe<Timestamp>
}

/** Inputs in Hedera blockchain */
export type HederaInputAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Inputs in Hedera blockchain */
export type HederaInputAnyArgs = {
  of: HederaInputMeasureable
}

/** Inputs in Hedera blockchain */
export type HederaInputCountArgs = {
  uniq?: Maybe<HederaInputsUniq>
}

/** Inputs in Hedera blockchain */
export type HederaInputCurrencyArgs = {
  currency?: Maybe<HederaCurrencySelector>
}

/** Inputs in Hedera blockchain */
export type HederaInputEntityArgs = {
  entityType?: Maybe<EntityTypeSelector>
}

/** Inputs in Hedera blockchain */
export type HederaInputInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Inputs in Hedera blockchain */
export type HederaInputMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Inputs in Hedera blockchain */
export type HederaInputMaximumArgs = {
  of: HederaInputMeasureable
  get?: Maybe<HederaInputMeasureable>
}

/** Inputs in Hedera blockchain */
export type HederaInputMinimumArgs = {
  of: HederaInputMeasureable
  get?: Maybe<HederaInputMeasureable>
}

/** Inputs in Hedera blockchain */
export type HederaInputResultArgs = {
  result?: Maybe<HashSelector>
}

/** Inputs in Hedera blockchain */
export type HederaInputSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Inputs in Hedera blockchain */
export type HederaInputTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Inputs in Hedera blockchain */
export type HederaInputTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>
}

/** Inputs in Hedera blockchain */
export type HederaInputValidStartArgs = {
  time?: Maybe<DateTimeSelector>
  nanoseconds?: Maybe<Scalars['BigInt']>
}

export type HederaInputFilter = {
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

export enum HederaInputMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Valid start */
  ValidStart = 'valid_start',
  /** Valid duration */
  ValidDuration = 'valid_duration',
  /** Transaction Hash */
  TransactionHash = 'transaction_hash',
  /** Max Fee */
  MaxFee = 'max_fee',
  /** Charged Fee */
  TransactionFee = 'transaction_fee',
  /** Amount */
  Amount = 'amount',
}

export enum HederaInputsUniq {
  /** Unique time */
  Times = 'times',
  /** Unique date count */
  Dates = 'dates',
  /** Unique consensus time */
  ConsensusTimes = 'consensus_times',
  /** Unique payer account */
  PayerAccount = 'payer_account',
  /** Unique node account */
  NodeAccount = 'node_account',
  /** Unique entity id */
  EntityId = 'entity_id',
  /** Unique entity type */
  EntityType = 'entity_type',
  /** Unique initial balance */
  InitialBalance = 'initial_balance',
}

/** Messages in Hedera blockchain */
export type HederaMessage = {
  __typename?: 'HederaMessage'
  any?: Maybe<Scalars['String']>
  consensusTimestamp?: Maybe<Timestamp>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Entity */
  entity?: Maybe<Entity>
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>
  initialBalance?: Maybe<Scalars['Float']>
  maxFee?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  memo?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>
  /** Transaction result */
  result?: Maybe<TransactionResult>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  /** Calendar date time */
  time?: Maybe<DateTime>
  /** Transaction running hash */
  topicRunningHash?: Maybe<Scalars['String']>
  /** Transaction running hash */
  topicSequenceNumber?: Maybe<Scalars['String']>
  transactionFee?: Maybe<Scalars['Float']>
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>
  transactionValidDurationInSec?: Maybe<Scalars['Int']>
  validStart?: Maybe<Timestamp>
}

/** Messages in Hedera blockchain */
export type HederaMessageAnyArgs = {
  of: HederaMessageMeasureable
}

/** Messages in Hedera blockchain */
export type HederaMessageCountArgs = {
  uniq?: Maybe<HederaMessagesUniq>
}

/** Messages in Hedera blockchain */
export type HederaMessageEntityArgs = {
  entityType?: Maybe<EntityTypeSelector>
}

/** Messages in Hedera blockchain */
export type HederaMessageInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  transactionRunningHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Messages in Hedera blockchain */
export type HederaMessageMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  transactionRunningHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Messages in Hedera blockchain */
export type HederaMessageMaximumArgs = {
  of: HederaMessageMeasureable
  get?: Maybe<HederaMessageMeasureable>
}

/** Messages in Hedera blockchain */
export type HederaMessageMinimumArgs = {
  of: HederaMessageMeasureable
  get?: Maybe<HederaMessageMeasureable>
}

/** Messages in Hedera blockchain */
export type HederaMessageResultArgs = {
  result?: Maybe<HashSelector>
}

/** Messages in Hedera blockchain */
export type HederaMessageSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Messages in Hedera blockchain */
export type HederaMessageTopicRunningHashArgs = {
  topicRunningHash?: Maybe<StringSelector>
}

/** Messages in Hedera blockchain */
export type HederaMessageTopicSequenceNumberArgs = {
  topicSequenceNumber?: Maybe<HashSelector>
}

/** Messages in Hedera blockchain */
export type HederaMessageTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  transactionRunningHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Messages in Hedera blockchain */
export type HederaMessageTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>
}

/** Messages in Hedera blockchain */
export type HederaMessageValidStartArgs = {
  time?: Maybe<DateTimeSelector>
  nanoseconds?: Maybe<Scalars['BigInt']>
}

export type HederaMessageFilter = {
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  transactionRunningHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

export enum HederaMessageMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Valid start */
  ValidStart = 'valid_start',
  /** Valid duration */
  ValidDuration = 'valid_duration',
  /** Transaction Hash */
  TransactionHash = 'transaction_hash',
  /** Max Fee */
  MaxFee = 'max_fee',
  /** Charged Fee */
  TransactionFee = 'transaction_fee',
}

export enum HederaMessagesUniq {
  /** Unique time */
  Times = 'times',
  /** Unique date count */
  Dates = 'dates',
  /** Unique consensus time */
  ConsensusTimes = 'consensus_times',
  /** Unique payer account */
  PayerAccount = 'payer_account',
  /** Unique node account */
  NodeAccount = 'node_account',
  /** Unique entity id */
  EntityId = 'entity_id',
  /** Unique entity type */
  EntityType = 'entity_type',
  /** Unique initial balance */
  InitialBalance = 'initial_balance',
}

export enum HederaNetwork {
  /** The Hedera mainnet */
  Hedera = 'hedera',
  /** The Hedera testnets */
  HederaTestnets = 'hedera_testnets',
}

/** Outputs in Hedera blockchain */
export type HederaOutput = {
  __typename?: 'HederaOutput'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  consensusTimestamp?: Maybe<Timestamp>
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  /** Entity */
  entity?: Maybe<Entity>
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>
  initialBalance?: Maybe<Scalars['Float']>
  maxFee?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  memo?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>
  /** Transaction result */
  result?: Maybe<TransactionResult>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  /** Calendar time */
  time?: Maybe<DateTime>
  transactionFee?: Maybe<Scalars['Float']>
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>
  transactionValidDurationInSec?: Maybe<Scalars['Int']>
  /** Transfer Account */
  transferEntity?: Maybe<Account>
  validStart?: Maybe<Timestamp>
}

/** Outputs in Hedera blockchain */
export type HederaOutputAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Outputs in Hedera blockchain */
export type HederaOutputAnyArgs = {
  of: HederaOutputMeasureable
}

/** Outputs in Hedera blockchain */
export type HederaOutputCountArgs = {
  uniq?: Maybe<HederaOutputUniq>
}

/** Outputs in Hedera blockchain */
export type HederaOutputCurrencyArgs = {
  currency?: Maybe<HederaCurrencySelector>
}

/** Outputs in Hedera blockchain */
export type HederaOutputEntityArgs = {
  entityType?: Maybe<EntityTypeSelector>
}

/** Outputs in Hedera blockchain */
export type HederaOutputInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Outputs in Hedera blockchain */
export type HederaOutputMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Outputs in Hedera blockchain */
export type HederaOutputMaximumArgs = {
  of: HederaOutputMeasureable
  get?: Maybe<HederaOutputMeasureable>
}

/** Outputs in Hedera blockchain */
export type HederaOutputMinimumArgs = {
  of: HederaOutputMeasureable
  get?: Maybe<HederaOutputMeasureable>
}

/** Outputs in Hedera blockchain */
export type HederaOutputResultArgs = {
  result?: Maybe<HashSelector>
}

/** Outputs in Hedera blockchain */
export type HederaOutputSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Outputs in Hedera blockchain */
export type HederaOutputTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Outputs in Hedera blockchain */
export type HederaOutputTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>
}

/** Outputs in Hedera blockchain */
export type HederaOutputValidStartArgs = {
  time?: Maybe<DateTimeSelector>
  nanoseconds?: Maybe<Scalars['BigInt']>
}

export type HederaOutputFilter = {
  date?: Maybe<DateSelector>
  transferEntity?: Maybe<StringSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

export enum HederaOutputMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Valid start */
  ValidStart = 'valid_start',
  /** Valid duration */
  ValidDuration = 'valid_duration',
  /** Transaction Hash */
  TransactionHash = 'transaction_hash',
  /** Max Fee */
  MaxFee = 'max_fee',
  /** Charged Fee */
  TransactionFee = 'transaction_fee',
  /** Amount */
  Amount = 'amount',
}

export enum HederaOutputUniq {
  /** Unique time */
  Times = 'times',
  /** Unique date count */
  Dates = 'dates',
  /** Unique consensus time */
  ConsensusTimes = 'consensus_times',
  /** Unique Transfer entity */
  TransferEntity = 'transfer_entity',
  /** Unique payer account */
  PayerAccount = 'payer_account',
  /** Unique node account */
  NodeAccount = 'node_account',
  /** Unique entity id */
  EntityId = 'entity_id',
  /** Unique entity type */
  EntityType = 'entity_type',
  /** Unique initial balance */
  InitialBalance = 'initial_balance',
}

/** Transactions in Hedera blockchain */
export type HederaTransaction = {
  __typename?: 'HederaTransaction'
  any?: Maybe<Scalars['String']>
  consensusTimestamp?: Maybe<Timestamp>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Entity */
  entity?: Maybe<Entity>
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>
  initialBalance?: Maybe<Scalars['Float']>
  maxFee?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  memo?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>
  /** Transaction result */
  result?: Maybe<TransactionResult>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  /** Calendar time */
  time?: Maybe<DateTime>
  transactionBytes?: Maybe<Scalars['String']>
  transactionFee?: Maybe<Scalars['Float']>
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>
  /** Transaction Type */
  transactionType?: Maybe<Scalars['String']>
  transactionValidDurationInSec?: Maybe<Scalars['Int']>
  validStart?: Maybe<Timestamp>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionAnyArgs = {
  of: HederaTransactionMeasureable
}

/** Transactions in Hedera blockchain */
export type HederaTransactionCountArgs = {
  uniq?: Maybe<HederaTransactionsUniq>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionEntityArgs = {
  entityType?: Maybe<EntityTypeSelector>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionInitialBalanceArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionMaxFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionMaximumArgs = {
  of: HederaTransactionMeasureable
  get?: Maybe<HederaTransactionMeasureable>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionMinimumArgs = {
  of: HederaTransactionMeasureable
  get?: Maybe<HederaTransactionMeasureable>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionResultArgs = {
  result?: Maybe<HashSelector>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionTransactionFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionTransactionHashArgs = {
  transactionHash?: Maybe<HashSelector>
}

/** Transactions in Hedera blockchain */
export type HederaTransactionValidStartArgs = {
  time?: Maybe<DateTimeSelector>
  nanoseconds?: Maybe<Scalars['BigInt']>
}

export type HederaTransactionFilter = {
  date?: Maybe<DateSelector>
  nodeAccount?: Maybe<StringSelector>
  payerAccount?: Maybe<StringSelector>
  transactionHash?: Maybe<HashSelector>
  result?: Maybe<HashSelector>
  entityType?: Maybe<EntityTypeSelector>
  success?: Maybe<Scalars['Boolean']>
}

export enum HederaTransactionMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Valid start */
  ValidStart = 'valid_start',
  /** Valid duration */
  ValidDuration = 'valid_duration',
  /** Transaction Hash */
  TransactionHash = 'transaction_hash',
  /** Max Fee */
  MaxFee = 'max_fee',
  /** Charged Fee */
  TransactionFee = 'transaction_fee',
}

export enum HederaTransactionsUniq {
  /** Unique time */
  Times = 'times',
  /** Unique date count */
  Dates = 'dates',
  /** Unique consensus time */
  ConsensusTimes = 'consensus_times',
  /** Unique transaction type */
  TransactionType = 'transaction_type',
  /** Unique payer account */
  PayerAccount = 'payer_account',
  /** Unique node account */
  NodeAccount = 'node_account',
  /** Unique entity id */
  EntityId = 'entity_id',
  /** Unique entity type */
  EntityType = 'entity_type',
  /** Unique initial balance */
  InitialBalance = 'initial_balance',
}

/** Input Script Type of UTXO transaction input */
export type InputScript = {
  __typename?: 'InputScript'
  /** Script annotation */
  annotation?: Maybe<Scalars['String']>
  /** Long script pattern */
  pattern: Scalars['String']
  /** Short script pattern */
  shortPattern: Scalars['String']
  /** Simple script pattern */
  simplePattern: Scalars['String']
  /** Script type */
  type?: Maybe<BitcoinInputScriptType>
}

/** Select by ID */
export type IntIdSelector = {
  /** ID is */
  is?: Maybe<Scalars['Int']>
  /** ID not */
  not?: Maybe<Scalars['Int']>
  /** ID in the list */
  in?: Maybe<Array<Scalars['Int']>>
  /** ID not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>
  /** ID greater than */
  gt?: Maybe<Scalars['Int']>
  /** ID less than */
  lt?: Maybe<Scalars['Int']>
  /** ID less or equal than */
  lteq?: Maybe<Scalars['Int']>
  /** ID greater or equal than */
  gteq?: Maybe<Scalars['Int']>
  /** ID in range */
  between?: Maybe<Array<Scalars['Int']>>
}

/** Select limited upper number */
export type IntegerLimitedSelector = {
  /** is */
  is?: Maybe<Scalars['Int']>
  /** in the list */
  in?: Maybe<Array<Scalars['Int']>>
  /** less than */
  lt?: Maybe<Scalars['Int']>
  /** less or equal than */
  lteq?: Maybe<Scalars['Int']>
  /** in range */
  between?: Maybe<Array<Scalars['Int']>>
}

/** Select by number */
export type IntegerSelector = {
  /** is */
  is?: Maybe<Scalars['Int']>
  /** not */
  not?: Maybe<Scalars['Int']>
  /** in the list */
  in?: Maybe<Array<Scalars['Int']>>
  /** not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>
  /** greater than */
  gt?: Maybe<Scalars['Int']>
  /** less than */
  lt?: Maybe<Scalars['Int']>
  /** less or equal than */
  lteq?: Maybe<Scalars['Int']>
  /** greater or equal than */
  gteq?: Maybe<Scalars['Int']>
  /** in range */
  between?: Maybe<Array<Scalars['Int']>>
}

/** Libra */
export type Libra = {
  __typename?: 'Libra'
  /** Libra Network Blocks */
  blocks?: Maybe<Array<LibraBlock>>
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<LibraCoinpath>>
  /** Libra Network Currency Minting */
  mints?: Maybe<Array<LibraMints>>
  /** Libra Network Transactions */
  transactions?: Maybe<Array<LibraTransactions>>
  /** Libra Network Currency Transfers */
  transfers?: Maybe<Array<LibraTransfers>>
}

/** Libra */
export type LibraBlocksArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  proposer?: Maybe<Array<AddressSelector>>
  metadata?: Maybe<StringSelector>
  any?: Maybe<Array<LibraBlockFilter>>
  options?: Maybe<QueryOptions>
}

/** Libra */
export type LibraCoinpathArgs = {
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  initialAddress?: Maybe<AddressSelector>
  initialDate?: Maybe<DateSelector>
  initialTime?: Maybe<DateTimeSelector>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  depth?: Maybe<IntegerLimitedSelector>
  options?: Maybe<CoinpathOptions>
}

/** Libra */
export type LibraMintsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  block?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  minter?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  any?: Maybe<Array<LibraMintFilter>>
  options?: Maybe<QueryOptions>
}

/** Libra */
export type LibraTransactionsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  success?: Maybe<Scalars['Boolean']>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  scriptHash?: Maybe<StringSelector>
  any?: Maybe<Array<LibraTransactionFilter>>
  options?: Maybe<QueryOptions>
}

/** Libra */
export type LibraTransfersArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  scriptHash?: Maybe<StringSelector>
  any?: Maybe<Array<LibraTransferFilter>>
  options?: Maybe<QueryOptions>
}

/** Block */
export type LibraBlock = {
  __typename?: 'LibraBlock'
  any?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['BigInt']>
  /** Calendar date */
  date?: Maybe<Date>
  gasUsed?: Maybe<Scalars['Float']>
  /** Block round in blockchain */
  height: Scalars['Int']
  /** Key */
  key?: Maybe<Scalars['String']>
  maximum?: Maybe<Scalars['String']>
  /** Metadata */
  metadata?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Proposer */
  proposer?: Maybe<Address>
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>
  /** Status Name */
  statusName?: Maybe<Scalars['String']>
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
  /** Version of transaction for this block */
  version: Scalars['Int']
  /** Version hash of transaction for this block */
  versionHash: Scalars['String']
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>
}

/** Block */
export type LibraBlockAnyArgs = {
  of: LibraBlocksMeasureable
}

/** Block */
export type LibraBlockCountArgs = {
  uniq?: Maybe<LibraBlockUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  proposer?: Maybe<Array<AddressSelector>>
  metadata?: Maybe<StringSelector>
}

/** Block */
export type LibraBlockGasUsedArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  proposer?: Maybe<Array<AddressSelector>>
  metadata?: Maybe<StringSelector>
}

/** Block */
export type LibraBlockHeightArgs = {
  height?: Maybe<BlockSelector>
}

/** Block */
export type LibraBlockMaximumArgs = {
  of: LibraBlocksMeasureable
  get?: Maybe<LibraBlocksMeasureable>
}

/** Block */
export type LibraBlockMetadataArgs = {
  metadata?: Maybe<StringSelector>
}

/** Block */
export type LibraBlockMinimumArgs = {
  of: LibraBlocksMeasureable
  get?: Maybe<LibraBlocksMeasureable>
}

/** Block */
export type LibraBlockProposerArgs = {
  proposer?: Maybe<AddressSelector>
}

/** Block */
export type LibraBlockTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Block */
export type LibraBlockVersionArgs = {
  version?: Maybe<IntegerSelector>
}

export type LibraBlockFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  proposer?: Maybe<Array<AddressSelector>>
  metadata?: Maybe<StringSelector>
}

export enum LibraBlockUniq {
  /** Proposer */
  Proposer = 'proposer',
  /** Unique date count */
  Dates = 'dates',
}

export enum LibraBlocksMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block round */
  Block = 'block',
  /** Version */
  Version = 'version',
  /** Proposer */
  Proposer = 'proposer',
  /** Gas Used */
  GasUsed = 'gas_used',
}

/** Coinpath */
export type LibraCoinpath = {
  __typename?: 'LibraCoinpath'
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Count of transfers */
  count?: Maybe<Scalars['BigInt']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Receiver address */
  receiver?: Maybe<Address>
  /** Sender address */
  sender?: Maybe<Address>
  /** Transaction of transfer happened */
  transaction?: Maybe<LibraTransactionValue>
}

/** Coinpath */
export type LibraCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>
}

/** Coinpath */
export type LibraCoinpathAnyArgs = {
  of: LibraCoinpathMeasureable
}

/** Coinpath */
export type LibraCoinpathMaximumArgs = {
  of: LibraCoinpathMeasureable
  get?: Maybe<LibraCoinpathMeasureable>
}

/** Coinpath */
export type LibraCoinpathMinimumArgs = {
  of: LibraCoinpathMeasureable
  get?: Maybe<LibraCoinpathMeasureable>
}

export enum LibraCoinpathMeasureable {
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Version */
  Version = 'version',
  /** Sender */
  Sender = 'sender',
  /** Receiver */
  Receiver = 'receiver',
  /** Depth */
  Depth = 'depth',
}

/**
 * Currency selector in Libra blockchain.
 * Libra has native chain currency (LBR) and a number of others ( Coin1/Coin2 ) for Testnet.
 * Use name of currency for selection
 */
export type LibraCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>
  /** Currency not */
  not?: Maybe<Scalars['String']>
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

export type LibraMintFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  block?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  minter?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
}

/** Mints in Libra blockchain */
export type LibraMints = {
  __typename?: 'LibraMints'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['BigInt']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Minter */
  minter?: Maybe<Address>
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>
  /** Status Name */
  statusName?: Maybe<Scalars['String']>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  /** Mint timestamp */
  timestamp?: Maybe<DateTime>
  /** Version of blockchain for this transaction */
  version: Scalars['Int']
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String']
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>
}

/** Mints in Libra blockchain */
export type LibraMintsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  block?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  minter?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
}

/** Mints in Libra blockchain */
export type LibraMintsAnyArgs = {
  of: LibraMintsMeasureable
}

/** Mints in Libra blockchain */
export type LibraMintsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Mints in Libra blockchain */
export type LibraMintsCountArgs = {
  uniq?: Maybe<LibraMintsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  block?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  minter?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
}

/** Mints in Libra blockchain */
export type LibraMintsCurrencyArgs = {
  currency?: Maybe<Array<LibraCurrencySelector>>
}

/** Mints in Libra blockchain */
export type LibraMintsMaximumArgs = {
  of: LibraMintsMeasureable
  get?: Maybe<LibraMintsMeasureable>
}

/** Mints in Libra blockchain */
export type LibraMintsMinimumArgs = {
  of: LibraMintsMeasureable
  get?: Maybe<LibraMintsMeasureable>
}

/** Mints in Libra blockchain */
export type LibraMintsMinterArgs = {
  sender?: Maybe<AddressSelector>
}

/** Mints in Libra blockchain */
export type LibraMintsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Mints in Libra blockchain */
export type LibraMintsTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Mints in Libra blockchain */
export type LibraMintsVersionArgs = {
  version?: Maybe<IntegerSelector>
}

export enum LibraMintsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Version */
  Version = 'version',
  /** Mint version hash */
  VersionHash = 'version_hash',
  /** Amount */
  Amount = 'amount',
  /** Minter */
  Minter = 'minter',
  /** Currency symbol */
  CurrencySymbol = 'currency_symbol',
}

export enum LibraMintsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique versions */
  Versions = 'versions',
  /** Unique date count */
  Dates = 'dates',
  /** Unique minters */
  Minters = 'minters',
  /** Unique currencies */
  Currencies = 'currencies',
}

export type LibraTransactionFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  success?: Maybe<Scalars['Boolean']>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  scriptHash?: Maybe<StringSelector>
}

/** Blockchain transaction with value */
export type LibraTransactionValue = {
  __typename?: 'LibraTransactionValue'
  /** Transaction value */
  value: Scalars['Float']
  /** Transaction version */
  version: Scalars['Int']
}

/** Transactions in Libra blockchain */
export type LibraTransactions = {
  __typename?: 'LibraTransactions'
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['BigInt']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Expiration Time */
  expirationTime?: Maybe<DateTime>
  gas?: Maybe<Scalars['Int']>
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>
  /** Gas unit price */
  gasPrice: Scalars['Float']
  gasValue?: Maybe<Scalars['Float']>
  /** Max gas amount */
  maxGasAmount?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Public key */
  publicKey?: Maybe<Scalars['String']>
  /** Script Hash */
  scriptHash?: Maybe<Scalars['String']>
  /** Script Type */
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  /** Transaction sender */
  sender?: Maybe<Address>
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>
  /** Signature */
  signature?: Maybe<Scalars['String']>
  /** Signature scheme */
  signatureScheme?: Maybe<Scalars['String']>
  /** Status Name */
  statusName?: Maybe<Scalars['String']>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  /** Transaction timestamp */
  timestamp?: Maybe<DateTime>
  /** Version of blockchain for this transaction */
  version: Scalars['Int']
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String']
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsAnyArgs = {
  of: LibraTransactionsMeasureable
}

/** Transactions in Libra blockchain */
export type LibraTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsCountArgs = {
  uniq?: Maybe<LibraTransactionsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  success?: Maybe<Scalars['Boolean']>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  scriptHash?: Maybe<StringSelector>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  success?: Maybe<Scalars['Boolean']>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  scriptHash?: Maybe<StringSelector>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsGasCurrencyArgs = {
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsGasPriceArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  success?: Maybe<Scalars['Boolean']>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  scriptHash?: Maybe<StringSelector>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  success?: Maybe<Scalars['Boolean']>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  scriptHash?: Maybe<StringSelector>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsMaximumArgs = {
  of: LibraTransactionsMeasureable
  get?: Maybe<LibraTransactionsMeasureable>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsMinimumArgs = {
  of: LibraTransactionsMeasureable
  get?: Maybe<LibraTransactionsMeasureable>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsScriptHashArgs = {
  scriptHash?: Maybe<StringSelector>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsSenderArgs = {
  txSender?: Maybe<AddressSelector>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Transactions in Libra blockchain */
export type LibraTransactionsVersionArgs = {
  version?: Maybe<IntegerSelector>
}

export enum LibraTransactionsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Version */
  Version = 'version',
  /** Transaction Sender */
  TxSender = 'tx_sender',
  /** Script Hash */
  ScriptHash = 'script_hash',
  /** Gas price */
  GasPrice = 'gas_price',
  /** Gas used */
  Gas = 'gas',
}

export enum LibraTransactionsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique versions */
  Versions = 'versions',
  /** Unique date count */
  Dates = 'dates',
  /** Unique transaction senders */
  Senders = 'senders',
  /** Unique transaction script hashes */
  Scripts = 'scripts',
}

export type LibraTransferFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  scriptHash?: Maybe<StringSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfers = {
  __typename?: 'LibraTransfers'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  count?: Maybe<Scalars['BigInt']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  /** Expiration Time */
  expirationTime?: Maybe<DateTime>
  gas?: Maybe<Scalars['Int']>
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>
  /** Gas price */
  gasPrice: Scalars['Float']
  gasValue?: Maybe<Scalars['Float']>
  /** Max gas amount */
  maxGasAmount?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Public key */
  publicKey?: Maybe<Scalars['String']>
  /** Transfer receiver */
  receiver?: Maybe<Address>
  /** Script Hash */
  scriptHash?: Maybe<Scalars['String']>
  /** Script Type */
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  /** Transfer sender */
  sender?: Maybe<Address>
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>
  /** Signature */
  signature?: Maybe<Scalars['String']>
  /** Signature scheme */
  signatureScheme?: Maybe<Scalars['String']>
  /** Status Name */
  statusName?: Maybe<Scalars['String']>
  /** Success */
  success?: Maybe<Scalars['Boolean']>
  /** Transfer timestamp */
  timestamp?: Maybe<DateTime>
  /** Transaction sender */
  txSender?: Maybe<Address>
  /** Version of blockchain for this transaction */
  version: Scalars['Int']
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String']
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>
}

/** Transfers in Libra blockchain */
export type LibraTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  scriptHash?: Maybe<StringSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfersAnyArgs = {
  of: LibraTransfersMeasureable
}

/** Transfers in Libra blockchain */
export type LibraTransfersBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  scriptHash?: Maybe<StringSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfersCurrencyArgs = {
  currency?: Maybe<Array<LibraCurrencySelector>>
}

/** Transfers in Libra blockchain */
export type LibraTransfersGasArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  scriptHash?: Maybe<StringSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfersGasCurrencyArgs = {
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
}

/** Transfers in Libra blockchain */
export type LibraTransfersGasValueArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  version?: Maybe<IntegerSelector>
  txSender?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<Array<LibraCurrencySelector>>
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>
  amount?: Maybe<Array<AmountSelector>>
  scriptType?: Maybe<ScriptTypeSelectorSelector>
  scriptHash?: Maybe<StringSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfersMaximumArgs = {
  of: LibraTransfersMeasureable
  get?: Maybe<LibraTransfersMeasureable>
}

/** Transfers in Libra blockchain */
export type LibraTransfersMinimumArgs = {
  of: LibraTransfersMeasureable
  get?: Maybe<LibraTransfersMeasureable>
}

/** Transfers in Libra blockchain */
export type LibraTransfersReceiverArgs = {
  receiver?: Maybe<AddressSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfersScriptHashArgs = {
  scriptHash?: Maybe<StringSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfersSenderArgs = {
  sender?: Maybe<AddressSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfersSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Transfers in Libra blockchain */
export type LibraTransfersTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfersTxSenderArgs = {
  txSender?: Maybe<AddressSelector>
}

/** Transfers in Libra blockchain */
export type LibraTransfersVersionArgs = {
  version?: Maybe<IntegerSelector>
}

export enum LibraTransfersMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Height = 'height',
  /** Version */
  Version = 'version',
  /** Version hash */
  VersionHash = 'version_hash',
  /** Amount */
  Amount = 'amount',
  /** Transfer Sender */
  TxSender = 'tx_sender',
  /** Sender */
  Sender = 'sender',
  /** Receiver */
  Receiver = 'receiver',
  /** Script Hash */
  ScriptHash = 'script_hash',
  /** Currency symbol */
  CurrencySymbol = 'currency_symbol',
  /** Gas value */
  GasValue = 'gas_value',
  /** Gas price */
  GasPrice = 'gas_price',
  /** Gas used */
  Gas = 'gas',
}

/** Limit by definition */
export type LimitByOption = {
  /** Take limit for each combination of the field */
  each: Scalars['String']
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>
}

/** Smart contract method */
export type Method = {
  __typename?: 'Method'
  /** Name */
  name?: Maybe<Scalars['String']>
  /** Signature */
  signature?: Maybe<Scalars['String']>
  /** Signature Hash */
  signatureHash: Scalars['String']
}

/** Smart contract method. In selector you can use the name, signature or hex hash */
export type MethodSelector = {
  /** Method signature is */
  is?: Maybe<Scalars['String']>
  /** Method signature not */
  not?: Maybe<Scalars['String']>
  /** Method signature in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Method signature not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Name with an identifier */
export type NameWithId = {
  __typename?: 'NameWithId'
  /** ID */
  id?: Maybe<Scalars['Int']>
  /** Name */
  name?: Maybe<Scalars['String']>
}

export enum Network {
  /** Ethereum Mainnet */
  Ethereum = 'ethereum',
  /** Ethereum Classic */
  Ethclassic = 'ethclassic',
  /** Ethereum Classic ( no reorg from block 10904146) */
  EthclassicReorg = 'ethclassic_reorg',
  /** Binance DEX */
  Binance = 'binance',
  /** Celo Alfajores Testnet */
  CeloAlfajores = 'celo_alfajores',
  /** Celo Baklava Testnet */
  CeloBaklava = 'celo_baklava',
  /** Celo RC1 */
  CeloRc1 = 'celo_rc1',
  /** Bitcoin ( BTC ) */
  Bitcoin = 'bitcoin',
  /** Bitcoin Cash ( BCH ) */
  Bitcash = 'bitcash',
  /** Bitcoin SV ( BSV ) */
  Bitcoinsv = 'bitcoinsv',
  /** Litecoin ( LTC ) */
  Litecoin = 'litecoin',
  /** Dash ( DASH ) */
  Dash = 'dash',
  /** Dogecoin ( DOGE ) */
  Dogecoin = 'dogecoin',
  /** Cardano ( ADA ) */
  Cardano = 'cardano',
  /** Zcash ( ZEC ) */
  Zcash = 'zcash',
  /** Algorand Mainnet (ALGO) */
  Algorand = 'algorand',
  /** Algorand Testnet */
  AlgorandTestnet = 'algorand_testnet',
  /** Algorand Betanet */
  AlgorandBetanet = 'algorand_betanet',
  /** Conflux Oceanus */
  ConfluxOceanus = 'conflux_oceanus',
  /** Conflux Tethys */
  ConfluxTethys = 'conflux_tethys',
  /** Libra Testnet */
  LibraTestnet = 'libra_testnet',
  /** Diem Testnet */
  DiemTestnet = 'diem_testnet',
  /** EOS Mainnet */
  Eos = 'eos',
  /** Tron Mainnet */
  Tron = 'tron',
  /** Binance Smart Chain Mainnet */
  Bsc = 'bsc',
  /** Binance Smart Chain Testnet */
  BscTestnet = 'bsc_testnet',
  /** Goerli Ethereum Testnet */
  Goerli = 'goerli',
  /** Beacon Chain Ethereum 2.0 */
  Eth2 = 'eth2',
  /** Medalla Ethereum 2.0 Beacon Testnet */
  Medalla = 'medalla',
  /** Filecoin Mainnet */
  Filecoin = 'filecoin',
  /** Hedera Hashgraph */
  Hedera = 'hedera',
}

/** Offchain Data */
export type Offchain = {
  __typename?: 'Offchain'
  /** Historical COVID data */
  covid?: Maybe<CovidHistory>
}

/** Select order by ID */
export type OrderIdSelector = {
  /** Order ID is */
  is?: Maybe<Scalars['String']>
  /** Order ID not */
  not?: Maybe<Scalars['String']>
  /** Order ID in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Order ID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Select by order side */
export type OrderSideSelector = {
  /** Order Side is */
  is?: Maybe<BinanceOrderSide>
  /** Order Side not */
  not?: Maybe<BinanceOrderSide>
  /** Order Side in the list */
  in?: Maybe<Array<BinanceOrderSide>>
  /** Order Side not in the list */
  notIn?: Maybe<Array<BinanceOrderSide>>
}

/** Select by order status */
export type OrderStatusSelector = {
  /** Order Status is */
  is?: Maybe<BinanceOrderStatus>
  /** Order Status not */
  not?: Maybe<BinanceOrderStatus>
  /** Order Status in the list */
  in?: Maybe<Array<BinanceOrderStatus>>
  /** Order Status not in the list */
  notIn?: Maybe<Array<BinanceOrderStatus>>
}

/** Select by order time in force */
export type OrderTimeInForceSelector = {
  /** Order TimeInForce is */
  is?: Maybe<BinanceOrderTimeInForce>
  /** Order TimeInForce not */
  not?: Maybe<BinanceOrderTimeInForce>
  /** Order TimeInForce in the list */
  in?: Maybe<Array<BinanceOrderTimeInForce>>
  /** Order TimeInForce not in the list */
  notIn?: Maybe<Array<BinanceOrderTimeInForce>>
}

/** Select by order type */
export type OrderTypeSelector = {
  /** Order Type is */
  is?: Maybe<BinanceOrderType>
  /** Order Type not */
  not?: Maybe<BinanceOrderType>
  /** Order Type in the list */
  in?: Maybe<Array<BinanceOrderType>>
  /** Order Type not in the list */
  notIn?: Maybe<Array<BinanceOrderType>>
}

/** Select by output index ( o based ) */
export type OutputIndexSelector = {
  /** Output index is */
  is?: Maybe<Scalars['Int']>
  /** Output index not */
  not?: Maybe<Scalars['Int']>
  /** Output index in the list */
  in?: Maybe<Array<Scalars['Int']>>
  /** Output index not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>
  /** Output index greater than */
  gt?: Maybe<Scalars['Int']>
  /** Output index less than */
  lt?: Maybe<Scalars['Int']>
  /** Output index less or equal than */
  lteq?: Maybe<Scalars['Int']>
  /** Output index greater or equal than */
  gteq?: Maybe<Scalars['Int']>
  /** Output index in range */
  between?: Maybe<Array<Scalars['Int']>>
}

/** Output Script Type of UTXO transaction output */
export type OutputScript = {
  __typename?: 'OutputScript'
  /** Script annotation */
  annotation?: Maybe<Scalars['String']>
  /** Long script pattern */
  pattern: Scalars['String']
  /** Short script pattern */
  short: Scalars['String']
  /** Simple script pattern */
  simplePattern: Scalars['String']
  /** Script type */
  type?: Maybe<BitcoinOutputScriptType>
}

export enum PriceAggregateFunction {
  /** Maximum */
  Maximum = 'maximum',
  /** Minimum */
  Minimum = 'minimum',
  /** Aggregated over interval */
  Sum = 'sum',
  /** Average */
  Average = 'average',
  /** Median */
  Median = 'median',
  /** Any value */
  Any = 'any',
  /** Last value */
  AnyLast = 'anyLast',
}

export enum Protocol {
  /** Ethereum */
  Ethereum = 'ethereum',
  /** Binance DEX */
  Binance = 'binance',
  /** Bitcoin */
  Bitcoin = 'bitcoin',
  /** Algorand */
  Algorand = 'algorand',
  /** Libra */
  Libra = 'libra',
  /** EOS */
  Eos = 'eos',
  /** Tron */
  Tron = 'tron',
  /** Filecoin */
  Filecoin = 'filecoin',
  /** Hedera Hashgraph */
  Hedera = 'hedera',
}

/** Blockchain Unified GraphQL API */
export type Query = {
  __typename?: 'Query'
  /** Algorand Chains Dataset */
  algorand?: Maybe<Algorand>
  /** Binance DEX Chain Dataset */
  binance?: Maybe<Binance>
  /** Bitcoin and other UTXO Chains Dataset */
  bitcoin?: Maybe<Bitcoin>
  /** Conflux Chains Dataset */
  conflux?: Maybe<Conflux>
  /** Diem ( former Libra ) Testnet Dataset */
  diem?: Maybe<Libra>
  /** EOS Mainnet Dataset */
  eos?: Maybe<Eos>
  /** Ethereum Mainnet / Classic Chain Datasets */
  ethereum?: Maybe<Ethereum>
  /** Ethereum v2.0 Beacon Chain Datasets */
  ethereum2?: Maybe<Ethereum2>
  /** Filecoin Dataset */
  filecoin?: Maybe<Filecoin>
  /** Hedera Dataset */
  hedera?: Maybe<Hedera>
  /** Offchain data */
  offchain?: Maybe<Offchain>
  /** Search by query string */
  search?: Maybe<Array<Result>>
  /** System data */
  system?: Maybe<SystemData>
  /** Tron Mainnet Dataset */
  tron?: Maybe<Tron>
}

/** Blockchain Unified GraphQL API */
export type QueryAlgorandArgs = {
  network?: Maybe<AlgorandNetwork>
}

/** Blockchain Unified GraphQL API */
export type QueryBitcoinArgs = {
  network?: Maybe<BitcoinNetwork>
}

/** Blockchain Unified GraphQL API */
export type QueryConfluxArgs = {
  network?: Maybe<ConfluxNetwork>
}

/** Blockchain Unified GraphQL API */
export type QueryDiemArgs = {
  network?: Maybe<DiemNetwork>
}

/** Blockchain Unified GraphQL API */
export type QueryEthereumArgs = {
  network?: Maybe<EthereumNetwork>
}

/** Blockchain Unified GraphQL API */
export type QueryEthereum2Args = {
  network?: Maybe<Ethereum2Network>
}

/** Blockchain Unified GraphQL API */
export type QueryFilecoinArgs = {
  network?: Maybe<FilecoinNetwork>
}

/** Blockchain Unified GraphQL API */
export type QueryHederaArgs = {
  network?: Maybe<HederaNetwork>
}

/** Blockchain Unified GraphQL API */
export type QuerySearchArgs = {
  string: Scalars['String']
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  network?: Maybe<Network>
}

/** Limits, Ordering, Constraints */
export type QueryOptions = {
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>
  /** Limit number of results by specific field */
  limitBy?: Maybe<LimitByOption>
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>
  /** Ordering field(s) for ascending */
  asc?: Maybe<Array<Scalars['String']>>
  /** Ordering field(s) for descending */
  desc?: Maybe<Array<Scalars['String']>>
}

/** Request */
export type Request = {
  __typename?: 'Request'
  /** Hash from request */
  hashFromRequest?: Maybe<Scalars['String']>
  /** Request json string */
  json?: Maybe<Scalars['String']>
}

/** Search result item */
export type Result = {
  __typename?: 'Result'
  /** Blockchain where result is found */
  network: BlockchainNetwork
  /** Subject in blockchain */
  subject: Subject
}

export enum ScriptTypeSelectorSelector {
  /** Unknown Transaction */
  UnknownTransaction = 'unknown_transaction',
  /** Peer-to-peer */
  PeerToPeerTransaction = 'peer_to_peer_transaction',
}

/** Smart contract method or event */
export type Signature = Event | Method

export enum SignatureTypeSelector {
  /** Smart contract method */
  Function = 'Function',
  /** Smart contract event */
  Event = 'Event',
}

/** Blockchain smart contract */
export type SmartContract = {
  __typename?: 'SmartContract'
  /** String address representation */
  address: Scalars['String']
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>
  /** Smart Contract Type */
  contractType: SmartContractType
  /** Smart Contract Protocol Type */
  protocol?: Maybe<Scalars['String']>
}

export enum SmartContractArgumentsUniq {
  /** Unique signatures count */
  Signatures = 'signatures',
  /** Unique values */
  Values = 'values',
  /** Calls or events */
  Calls = 'calls',
  /** Unique transactions count */
  Txs = 'txs',
  /** Unique transaction senders */
  Senders = 'senders',
  /** Unique callers count */
  Callers = 'callers',
  /** Unique smart contracts count */
  SmartContracts = 'smart_contracts',
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
}

export enum SmartContractCallsUniq {
  /** Calls */
  Calls = 'calls',
  /** Unique transactions count */
  Txs = 'txs',
  /** Unique transaction senders */
  Senders = 'senders',
  /** Unique callers count */
  Callers = 'callers',
  /** Unique smart contracts count */
  SmartContracts = 'smart_contracts',
  /** Unique smart contract methods count */
  SmartContractMethods = 'smart_contract_methods',
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
}

export type SmartContractReadonlyAttribute = {
  __typename?: 'SmartContractReadonlyAttribute'
  /** Value as address if applicable */
  address?: Maybe<EthereumAddressInfo>
  /** Method name */
  name: Scalars['String']
  /** Method return type */
  type: Scalars['String']
  /** Method return value */
  value: Scalars['String']
}

export enum SmartContractType {
  /** Not A Smart contract */
  None = 'None',
  /** General Purpose Smart contract */
  Generic = 'Generic',
  /** Smart contract for token derivatives */
  MarginPositionToken = 'MarginPositionToken',
  /** Multi signature wallet */
  Multisig = 'Multisig',
  /** Token */
  Token = 'Token',
  /** Token Sale */
  TokenSale = 'TokenSale',
  /** Decentralized exchange */
  Dex = 'DEX',
  /** Transaction Execution Approval Language */
  Teal = 'TEAL',
}

/** Selector of smart contract type */
export type SmartContractTypeSelector = {
  /** Smart Contract type is */
  is?: Maybe<SmartContractType>
  /** Smart Contract type not */
  not?: Maybe<SmartContractType>
  /** Smart Contract type in the list */
  in?: Maybe<Array<SmartContractType>>
  /** Smart Contract type not in the list */
  notIn?: Maybe<Array<SmartContractType>>
}

/** Select by ID */
export type StringIdSelector = {
  /** ID is */
  is?: Maybe<Scalars['String']>
  /** ID not */
  not?: Maybe<Scalars['String']>
  /** ID in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** ID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Select by string */
export type StringSelector = {
  /** String is */
  is?: Maybe<Scalars['String']>
  /** String not */
  not?: Maybe<Scalars['String']>
  /** String in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** String not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

/** Search result subject */
export type Subject =
  | Address
  | Currency
  | HederaAccount
  | SmartContract
  | TransactionHash

/** System data */
export type SystemData = {
  __typename?: 'SystemData'
  /** User requests */
  userRequests?: Maybe<Array<UserRequest>>
}

/** System data */
export type SystemDataUserRequestsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
  any?: Maybe<Array<UserRequestFilter>>
  options?: Maybe<QueryOptions>
}

/** Time Interval */
export type TimeInterval = {
  __typename?: 'TimeInterval'
  day: Scalars['String']
  hour: Scalars['String']
  minute: Scalars['String']
  month: Scalars['String']
  second: Scalars['String']
  year: Scalars['String']
}

/** Time Interval */
export type TimeIntervalDayArgs = {
  count?: Maybe<Scalars['Int']>
  format?: Maybe<Scalars['String']>
}

/** Time Interval */
export type TimeIntervalHourArgs = {
  count?: Maybe<Scalars['Int']>
  format?: Maybe<Scalars['String']>
}

/** Time Interval */
export type TimeIntervalMinuteArgs = {
  count?: Maybe<Scalars['Int']>
  format?: Maybe<Scalars['String']>
}

/** Time Interval */
export type TimeIntervalMonthArgs = {
  count?: Maybe<Scalars['Int']>
  format?: Maybe<Scalars['String']>
}

/** Time Interval */
export type TimeIntervalSecondArgs = {
  count?: Maybe<Scalars['Int']>
  format?: Maybe<Scalars['String']>
}

/** Time Interval */
export type TimeIntervalYearArgs = {
  count?: Maybe<Scalars['Int']>
  format?: Maybe<Scalars['String']>
}

/** Timestamp */
export type Timestamp = {
  __typename?: 'Timestamp'
  /** Nanoseconds */
  nanoseconds: Scalars['BigInt']
  time: Scalars['ISO8601Date']
}

/** Select trade by ID */
export type TradeIdSelector = {
  /** Trade ID is */
  is?: Maybe<Scalars['String']>
  /** Trade ID not */
  not?: Maybe<Scalars['String']>
  /** Trade ID in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Trade ID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

export enum TradeSide {
  /** Buy side */
  Buy = 'BUY',
  /** Sell side */
  Sell = 'SELL',
}

/** Blockchain transaction */
export type TransactionHash = {
  __typename?: 'TransactionHash'
  /** Hash hex representation */
  hash: Scalars['String']
}

/** Blockchain transaction */
export type TransactionHashIndex = {
  __typename?: 'TransactionHashIndex'
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction index in block, 0-based */
  index: Scalars['String']
}

/** Blockchain transaction */
export type TransactionHashIndexValues = {
  __typename?: 'TransactionHashIndexValues'
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction index in block, 0-based */
  index: Scalars['String']
  /** Transaction value in input */
  valueIn: Scalars['Float']
  /** Transaction value in output */
  valueOut: Scalars['Float']
}

/** Blockchain transaction with value */
export type TransactionHashValue = {
  __typename?: 'TransactionHashValue'
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction value */
  value: Scalars['Float']
}

/** Transaction result */
export type TransactionResult = {
  __typename?: 'TransactionResult'
  /** Result ID */
  id: Scalars['Int']
  /** Result name */
  name: Scalars['String']
}

/** Identification of transaction source as client application */
export type TransactionSource = {
  __typename?: 'TransactionSource'
  /** ID numeric */
  code: Scalars['Int']
  /** Name */
  name: Scalars['String']
}

/** Select by type of transfer */
export type TransferTypeSelector = {
  /** Transfer Type is */
  is?: Maybe<FilecoinTransferType>
  /** Transfer Type not */
  not?: Maybe<FilecoinTransferType>
  /** Transfer Type in the list */
  in?: Maybe<Array<FilecoinTransferType>>
  /** Transfer Type not in the list */
  notIn?: Maybe<Array<FilecoinTransferType>>
}

export enum TransfersUniq {
  /** Transfers */
  Transfers = 'transfers',
  /** Unique transactions count */
  Txs = 'txs',
  /** Unique senders count */
  Senders = 'senders',
  /** Unique receivers count */
  Receivers = 'receivers',
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique currencies */
  Currencies = 'currencies',
}

/** Tron Chain */
export type Tron = {
  __typename?: 'Tron'
  /** Basic information about address ( or smart contract ) */
  address: Array<TronAddressInfo>
  /** Blockchain Blocks */
  blocks?: Maybe<Array<TronBlocks>>
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<TronCoinpath>>
  /** Blockchain Embedded Contracts */
  contracts?: Maybe<Array<TronSmartContracts>>
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<TronSmartContractCalls>>
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<TronSmartContractEvents>>
  /** Blockchain Embedded Contracts */
  trades?: Maybe<Array<TronTrades>>
  /** Blockchain Transactions */
  transactions?: Maybe<Array<TronTransactions>>
  /** Currency Transfers */
  transfers?: Maybe<Array<TronTransfers>>
}

/** Tron Chain */
export type TronAddressArgs = {
  address: Array<AddressSelectorIn>
}

/** Tron Chain */
export type TronBlocksArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  witness?: Maybe<AddressSelector>
  version?: Maybe<IntegerSelector>
  parentBlockHash?: Maybe<Array<HashSelector>>
  any?: Maybe<Array<TronBlockFilter>>
  options?: Maybe<QueryOptions>
}

/** Tron Chain */
export type TronCoinpathArgs = {
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<TronCurrencySelector>
  initialAddress?: Maybe<AddressSelector>
  initialDate?: Maybe<DateSelector>
  initialTime?: Maybe<DateTimeSelector>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  depth?: Maybe<IntegerLimitedSelector>
  options?: Maybe<CoinpathOptions>
}

/** Tron Chain */
export type TronContractsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txOwner?: Maybe<AddressSelector>
  contractType?: Maybe<TronContractTypeSelector>
  currency?: Maybe<TronCurrencySelector>
  success?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<TronContractFilter>>
  options?: Maybe<QueryOptions>
}

/** Tron Chain */
export type TronSmartContractCallsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractMethod?: Maybe<MethodSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<TronSmartContractCallFilter>>
  options?: Maybe<QueryOptions>
}

/** Tron Chain */
export type TronSmartContractEventsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractEvent?: Maybe<EventSelector>
  any?: Maybe<Array<TronSmartContractEventFilter>>
  options?: Maybe<QueryOptions>
}

/** Tron Chain */
export type TronTradesArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<AddressSelector>
  seller?: Maybe<AddressSelector>
  buyCurrency?: Maybe<TronCurrencySelector>
  sellCurrency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  amountSell?: Maybe<Array<AmountSelector>>
  amountBuy?: Maybe<Array<AmountSelector>>
  exchangeId?: Maybe<IntIdSelector>
  success?: Maybe<Scalars['Boolean']>
  any?: Maybe<Array<TronTradeFilter>>
  options?: Maybe<QueryOptions>
}

/** Tron Chain */
export type TronTransactionsArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  refBlockHash?: Maybe<Array<HashSelector>>
  contractAddress?: Maybe<AddressSelector>
  any?: Maybe<Array<TronTransactionFilter>>
  options?: Maybe<QueryOptions>
}

/** Tron Chain */
export type TronTransfersArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
  any?: Maybe<Array<TronTransferFilter>>
  options?: Maybe<QueryOptions>
}

/** Address detailed information for Tron network */
export type TronAddressInfo = {
  __typename?: 'TronAddressInfo'
  /** String address representation */
  address: Scalars['String']
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<TronSmartContractInfo>
}

export type TronBlockFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  witness?: Maybe<AddressSelector>
  version?: Maybe<IntegerSelector>
  parentBlockHash?: Maybe<Array<HashSelector>>
}

/** Blocks in Tron blockchain */
export type TronBlocks = {
  __typename?: 'TronBlocks'
  any?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  /** Block hash */
  hash: Scalars['String']
  /** Block number (height) in blockchain */
  height: Scalars['Int']
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Parent block hash */
  parentBlockHash: Scalars['String']
  /** Block timestamp */
  timestamp?: Maybe<DateTime>
  /** TX Trie Root Hash */
  txTrieRoot: Scalars['String']
  /** Block version */
  version?: Maybe<Scalars['Int']>
  /** Block witness */
  witness?: Maybe<Address>
  /** Witness signature */
  witnessSignature: Scalars['String']
}

/** Blocks in Tron blockchain */
export type TronBlocksAnyArgs = {
  of: TronBlocksMeasureable
}

/** Blocks in Tron blockchain */
export type TronBlocksCountArgs = {
  uniq?: Maybe<TronBlocksUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  blockHash?: Maybe<HashSelector>
  witness?: Maybe<AddressSelector>
  version?: Maybe<IntegerSelector>
  parentBlockHash?: Maybe<Array<HashSelector>>
}

/** Blocks in Tron blockchain */
export type TronBlocksHashArgs = {
  blockHash?: Maybe<Array<HashSelector>>
}

/** Blocks in Tron blockchain */
export type TronBlocksHeightArgs = {
  height?: Maybe<BlockSelector>
}

/** Blocks in Tron blockchain */
export type TronBlocksMaximumArgs = {
  of: TronBlocksMeasureable
  get?: Maybe<TronBlocksMeasureable>
}

/** Blocks in Tron blockchain */
export type TronBlocksMinimumArgs = {
  of: TronBlocksMeasureable
  get?: Maybe<TronBlocksMeasureable>
}

/** Blocks in Tron blockchain */
export type TronBlocksParentBlockHashArgs = {
  parentBlockHash?: Maybe<Array<HashSelector>>
}

/** Blocks in Tron blockchain */
export type TronBlocksTimestampArgs = {
  time?: Maybe<DateTimeSelector>
}

/** Blocks in Tron blockchain */
export type TronBlocksVersionArgs = {
  version?: Maybe<IntegerSelector>
}

/** Blocks in Tron blockchain */
export type TronBlocksWitnessArgs = {
  witness?: Maybe<AddressSelector>
}

export enum TronBlocksMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Block hash */
  BlockHash = 'block_hash',
  /** Block Witness address */
  Witness = 'witness',
  /** Block Version */
  Version = 'version',
}

export enum TronBlocksUniq {
  /** Unique witness count */
  Witnesses = 'witnesses',
  /** Unique date count */
  Dates = 'dates',
}

export enum TronCallsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Action From */
  TxFrom = 'tx_from',
  /** Action To */
  TxTo = 'tx_to',
  /** Smart Contract */
  SmartContract = 'smart_contract',
  /** Smart Contract Method Name */
  SignatureName = 'signature_name',
  /** Smart Contract Method Signature */
  Signature = 'signature',
  /** Smart Contract Method Signature Hash */
  SignatureHash = 'signature_hash',
  /** Call depth */
  CallDepth = 'call_depth',
}

/** Coinpath */
export type TronCoinpath = {
  __typename?: 'TronCoinpath'
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transaction is included */
  block?: Maybe<Block>
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Receiver address */
  receiver?: Maybe<TronAddressInfo>
  /** Sender address */
  sender?: Maybe<TronAddressInfo>
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>
}

/** Coinpath */
export type TronCoinpathAmountArgs = {
  in?: Maybe<BaseCurrencyEnum>
}

/** Coinpath */
export type TronCoinpathAnyArgs = {
  of: CoinpathMeasureable
}

/** Coinpath */
export type TronCoinpathMaximumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

/** Coinpath */
export type TronCoinpathMinimumArgs = {
  of: CoinpathMeasureable
  get?: Maybe<CoinpathMeasureable>
}

export type TronContractFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txOwner?: Maybe<AddressSelector>
  contractType?: Maybe<TronContractTypeSelector>
  currency?: Maybe<TronCurrencySelector>
  success?: Maybe<Scalars['Boolean']>
}

export enum TronContractType {
  /** Account Create */
  AccountCreate = 'AccountCreate',
  /** Account Permission Update */
  AccountPermissionUpdate = 'AccountPermissionUpdate',
  /** Account Update */
  AccountUpdate = 'AccountUpdate',
  /** Asset Issue */
  AssetIssue = 'AssetIssue',
  /** Clear ABI */
  ClearAbi = 'ClearABI',
  /** Create Smart */
  CreateSmart = 'CreateSmart',
  /** Exchange Create */
  ExchangeCreate = 'ExchangeCreate',
  /** Exchange Inject */
  ExchangeInject = 'ExchangeInject',
  /** Exchange Transaction */
  ExchangeTransaction = 'ExchangeTransaction',
  /** Exchange Withdraw */
  ExchangeWithdraw = 'ExchangeWithdraw',
  /** Freeze Balance */
  FreezeBalance = 'FreezeBalance',
  /** Participate Asset Issue */
  ParticipateAssetIssue = 'ParticipateAssetIssue',
  /** Proposal Approve */
  ProposalApprove = 'ProposalApprove',
  /** Proposal Create */
  ProposalCreate = 'ProposalCreate',
  /** Proposal Delete */
  ProposalDelete = 'ProposalDelete',
  /** Set Account Id */
  SetAccountId = 'SetAccountId',
  /** Transfer */
  Transfer = 'Transfer',
  /** Transfer Asset */
  TransferAsset = 'TransferAsset',
  /** Trigger Smart */
  TriggerSmart = 'TriggerSmart',
  /** Unfreeze Asset */
  UnfreezeAsset = 'UnfreezeAsset',
  /** Unfreeze Balance */
  UnfreezeBalance = 'UnfreezeBalance',
  /** Update Asset */
  UpdateAsset = 'UpdateAsset',
  /** Update Brokerage */
  UpdateBrokerage = 'UpdateBrokerage',
  /** Update Energy Limit */
  UpdateEnergyLimit = 'UpdateEnergyLimit',
  /** Update Setting */
  UpdateSetting = 'UpdateSetting',
  /** Vote Witness */
  VoteWitness = 'VoteWitness',
  /** Withdraw Balance */
  WithdrawBalance = 'WithdrawBalance',
  /** Witness Create */
  WitnessCreate = 'WitnessCreate',
  /** Witness Update */
  WitnessUpdate = 'WitnessUpdate',
}

/** Select contract type(s) */
export type TronContractTypeSelector = {
  /** Contract type is */
  is?: Maybe<TronContractType>
  /** Contract type not */
  not?: Maybe<TronContractType>
  /** Contract type in the list */
  in?: Maybe<Array<TronContractType>>
  /** Contract type not in the list */
  notIn?: Maybe<Array<TronContractType>>
}

export enum TronContractsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Transaction owner */
  TxOwner = 'tx_owner',
  /** Contract */
  ContractType = 'contract_type',
}

/**
 * Currency selector in Tron blockchain.
 * Token identified by address of contract for TRC20 tokens and token name (or numeric token ID )  for TRC10
 */
export type TronCurrencySelector = {
  /** Currency is */
  is?: Maybe<Scalars['String']>
  /** Currency not */
  not?: Maybe<Scalars['String']>
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>
}

export enum TronEventsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Action From */
  TxFrom = 'tx_from',
  /** Action To */
  TxTo = 'tx_to',
  /** Smart Contract */
  SmartContract = 'smart_contract',
  /** Smart Contract Method Name */
  SignatureName = 'signature_name',
  /** Smart Contract Method Signature */
  Signature = 'signature',
  /** Smart Contract Method Signature Hash */
  SignatureHash = 'signature_hash',
}

/** Tron smart contract */
export type TronSmartContract = {
  __typename?: 'TronSmartContract'
  /** Smart Contract Address */
  address: Address
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>
}

export type TronSmartContractCallFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractMethod?: Maybe<MethodSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type TronSmartContractCalls = {
  __typename?: 'TronSmartContractCalls'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  energyUsageTotal?: Maybe<Scalars['Float']>
  /** External call executed explicitly by caller. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>
  fee?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  netUsage?: Maybe<Scalars['Float']>
  /** Smart contract being called */
  smartContract?: Maybe<TronSmartContract>
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>
  /** Action from address */
  txFrom?: Maybe<Address>
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>
  /** Action to address */
  txTo?: Maybe<Address>
}

/** Smart Contract Calls */
export type TronSmartContractCallsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractMethod?: Maybe<MethodSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type TronSmartContractCallsAnyArgs = {
  of: TronCallsMeasureable
}

/** Smart Contract Calls */
export type TronSmartContractCallsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Smart Contract Calls */
export type TronSmartContractCallsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractMethod?: Maybe<MethodSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type TronSmartContractCallsEnergyUsageTotalArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractMethod?: Maybe<MethodSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type TronSmartContractCallsExternalArgs = {
  external?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type TronSmartContractCallsFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractMethod?: Maybe<MethodSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type TronSmartContractCallsMaximumArgs = {
  of: TronCallsMeasureable
  get?: Maybe<TronCallsMeasureable>
}

/** Smart Contract Calls */
export type TronSmartContractCallsMinimumArgs = {
  of: TronCallsMeasureable
  get?: Maybe<TronCallsMeasureable>
}

/** Smart Contract Calls */
export type TronSmartContractCallsNetUsageArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractMethod?: Maybe<MethodSelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
}

/** Smart Contract Calls */
export type TronSmartContractCallsSmartContractArgs = {
  smartContractAddress?: Maybe<AddressSelector>
}

/** Smart Contract Calls */
export type TronSmartContractCallsSmartContractMethodArgs = {
  smartContractMethod?: Maybe<MethodSelector>
}

/** Smart Contract Calls */
export type TronSmartContractCallsSuccessArgs = {
  success?: Maybe<Array<Scalars['Boolean']>>
}

/** Smart Contract Calls */
export type TronSmartContractCallsTxFromArgs = {
  txFrom?: Maybe<AddressSelector>
}

/** Smart Contract Calls */
export type TronSmartContractCallsTxHashArgs = {
  txHash?: Maybe<HashSelector>
}

/** Smart Contract Calls */
export type TronSmartContractCallsTxToArgs = {
  txTo?: Maybe<AddressSelector>
}

export type TronSmartContractEventFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractEvent?: Maybe<EventSelector>
}

/** Smart Contract Events */
export type TronSmartContractEvents = {
  __typename?: 'TronSmartContractEvents'
  any?: Maybe<Scalars['String']>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  /** Smart contract being Evented */
  smartContract?: Maybe<TronSmartContract>
  /** Contract method invoked */
  smartContractEvent?: Maybe<Event>
  /** Action from address */
  txFrom?: Maybe<Address>
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>
  /** Action to address */
  txTo?: Maybe<Address>
}

/** Smart Contract Events */
export type TronSmartContractEventsAnyArgs = {
  of: TronEventsMeasureable
}

/** Smart Contract Events */
export type TronSmartContractEventsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Smart Contract Events */
export type TronSmartContractEventsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  smartContractAddress?: Maybe<AddressSelector>
  smartContractEvent?: Maybe<EventSelector>
}

/** Smart Contract Events */
export type TronSmartContractEventsMaximumArgs = {
  of: TronEventsMeasureable
  get?: Maybe<TronEventsMeasureable>
}

/** Smart Contract Events */
export type TronSmartContractEventsMinimumArgs = {
  of: TronEventsMeasureable
  get?: Maybe<TronEventsMeasureable>
}

/** Smart Contract Events */
export type TronSmartContractEventsSmartContractArgs = {
  smartContractAddress?: Maybe<AddressSelector>
}

/** Smart Contract Events */
export type TronSmartContractEventsSmartContractEventArgs = {
  smartContractEvent?: Maybe<EventSelector>
}

/** Smart Contract Events */
export type TronSmartContractEventsTxFromArgs = {
  txFrom?: Maybe<AddressSelector>
}

/** Smart Contract Events */
export type TronSmartContractEventsTxHashArgs = {
  txHash?: Maybe<HashSelector>
}

/** Smart Contract Events */
export type TronSmartContractEventsTxToArgs = {
  txTo?: Maybe<AddressSelector>
}

/** Blockchain smart contract */
export type TronSmartContractInfo = {
  __typename?: 'TronSmartContractInfo'
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>
}

/** Contracts */
export type TronSmartContracts = {
  __typename?: 'TronSmartContracts'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block in the blockchain */
  block?: Maybe<Block>
  /** Contract type */
  contractType?: Maybe<TronContractType>
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  energyUsageTotal?: Maybe<Scalars['Float']>
  fee?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  netUsage?: Maybe<Scalars['Float']>
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>
  /** Transactio owner from address */
  txOwner?: Maybe<Address>
}

/** Contracts */
export type TronSmartContractsAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txOwner?: Maybe<AddressSelector>
  contractType?: Maybe<TronContractTypeSelector>
  currency?: Maybe<TronCurrencySelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Contracts */
export type TronSmartContractsAnyArgs = {
  of: TronContractsMeasureable
}

/** Contracts */
export type TronSmartContractsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Contracts */
export type TronSmartContractsContractTypeArgs = {
  contractType?: Maybe<TronContractTypeSelector>
}

/** Contracts */
export type TronSmartContractsCountArgs = {
  uniq?: Maybe<SmartContractCallsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txOwner?: Maybe<AddressSelector>
  contractType?: Maybe<TronContractTypeSelector>
  currency?: Maybe<TronCurrencySelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Contracts */
export type TronSmartContractsCurrencyArgs = {
  currency?: Maybe<TronCurrencySelector>
}

/** Contracts */
export type TronSmartContractsEnergyUsageTotalArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txOwner?: Maybe<AddressSelector>
  contractType?: Maybe<TronContractTypeSelector>
  currency?: Maybe<TronCurrencySelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Contracts */
export type TronSmartContractsFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txOwner?: Maybe<AddressSelector>
  contractType?: Maybe<TronContractTypeSelector>
  currency?: Maybe<TronCurrencySelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Contracts */
export type TronSmartContractsMaximumArgs = {
  of: TronContractsMeasureable
  get?: Maybe<TronContractsMeasureable>
}

/** Contracts */
export type TronSmartContractsMinimumArgs = {
  of: TronContractsMeasureable
  get?: Maybe<TronContractsMeasureable>
}

/** Contracts */
export type TronSmartContractsNetUsageArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txOwner?: Maybe<AddressSelector>
  contractType?: Maybe<TronContractTypeSelector>
  currency?: Maybe<TronCurrencySelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Contracts */
export type TronSmartContractsSuccessArgs = {
  success?: Maybe<Array<Scalars['Boolean']>>
}

/** Contracts */
export type TronSmartContractsTxHashArgs = {
  txHash?: Maybe<HashSelector>
}

/** Contracts */
export type TronSmartContractsTxOwnerArgs = {
  txOwner?: Maybe<AddressSelector>
}

export type TronTradeFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<AddressSelector>
  seller?: Maybe<AddressSelector>
  buyCurrency?: Maybe<TronCurrencySelector>
  sellCurrency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  amountSell?: Maybe<Array<AmountSelector>>
  amountBuy?: Maybe<Array<AmountSelector>>
  exchangeId?: Maybe<IntIdSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTrades = {
  __typename?: 'TronTrades'
  amountBuy?: Maybe<Scalars['Float']>
  amountSell?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where Trade transaction is included */
  block?: Maybe<Block>
  /** Buy Currency of Trade */
  buyCurrency?: Maybe<Currency>
  /** Trade buyer */
  buyer?: Maybe<Address>
  /** Contract type */
  contractType?: Maybe<TronContractType>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  energyUsageTotal?: Maybe<Scalars['Float']>
  /** exchange_id */
  exchangeId?: Maybe<Scalars['Int']>
  fee?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  netUsage?: Maybe<Scalars['Float']>
  /** Sell Currency of Trade */
  sellCurrency?: Maybe<Currency>
  /** Trade seller */
  seller?: Maybe<Address>
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>
  /** Transaction hash where Trade happened */
  txHash?: Maybe<Scalars['String']>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesAmountBuyArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<AddressSelector>
  seller?: Maybe<AddressSelector>
  buyCurrency?: Maybe<TronCurrencySelector>
  sellCurrency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  amountSell?: Maybe<Array<AmountSelector>>
  amountBuy?: Maybe<Array<AmountSelector>>
  exchangeId?: Maybe<IntIdSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesAmountSellArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<AddressSelector>
  seller?: Maybe<AddressSelector>
  buyCurrency?: Maybe<TronCurrencySelector>
  sellCurrency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  amountSell?: Maybe<Array<AmountSelector>>
  amountBuy?: Maybe<Array<AmountSelector>>
  exchangeId?: Maybe<IntIdSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesAnyArgs = {
  of: TronTradesMeasureable
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesBuyCurrencyArgs = {
  buyCurrency?: Maybe<TronCurrencySelector>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesBuyerArgs = {
  buyer?: Maybe<AddressSelector>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesContractTypeArgs = {
  contractType?: Maybe<TronContractTypeSelector>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesCountArgs = {
  uniq?: Maybe<TronTradesUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<AddressSelector>
  seller?: Maybe<AddressSelector>
  buyCurrency?: Maybe<TronCurrencySelector>
  sellCurrency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  amountSell?: Maybe<Array<AmountSelector>>
  amountBuy?: Maybe<Array<AmountSelector>>
  exchangeId?: Maybe<IntIdSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesEnergyUsageTotalArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<AddressSelector>
  seller?: Maybe<AddressSelector>
  buyCurrency?: Maybe<TronCurrencySelector>
  sellCurrency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  amountSell?: Maybe<Array<AmountSelector>>
  amountBuy?: Maybe<Array<AmountSelector>>
  exchangeId?: Maybe<IntIdSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesExchangeIdArgs = {
  exchangeId?: Maybe<IntIdSelector>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<AddressSelector>
  seller?: Maybe<AddressSelector>
  buyCurrency?: Maybe<TronCurrencySelector>
  sellCurrency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  amountSell?: Maybe<Array<AmountSelector>>
  amountBuy?: Maybe<Array<AmountSelector>>
  exchangeId?: Maybe<IntIdSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesMaximumArgs = {
  of: TronTradesMeasureable
  get?: Maybe<TronTradesMeasureable>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesMinimumArgs = {
  of: TronTradesMeasureable
  get?: Maybe<TronTradesMeasureable>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesNetUsageArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  buyer?: Maybe<AddressSelector>
  seller?: Maybe<AddressSelector>
  buyCurrency?: Maybe<TronCurrencySelector>
  sellCurrency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  amountSell?: Maybe<Array<AmountSelector>>
  amountBuy?: Maybe<Array<AmountSelector>>
  exchangeId?: Maybe<IntIdSelector>
  success?: Maybe<Scalars['Boolean']>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesSellCurrencyArgs = {
  sellCurrency?: Maybe<TronCurrencySelector>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesSellerArgs = {
  seller?: Maybe<AddressSelector>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesTxHashArgs = {
  txHash?: Maybe<HashSelector>
}

export enum TronTradesMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Amount Sell */
  AmountSell = 'amount_sell',
  /** Amount Sell */
  AmountBuy = 'amount_buy',
  /** Buyer */
  Buyer = 'buyer',
  /** Seller */
  Seller = 'seller',
  /** Buy Currency symbol */
  BuyCurrencySymbol = 'buy_currency_symbol',
  /** Buy Currency name */
  BuyCurrencyName = 'buy_currency_name',
  /** Buy Token address */
  BuyCurrencyAddress = 'buy_currency_address',
  /** Buy Token address */
  BuyTokenId = 'buy_token_id',
  /** Buy Token type */
  BuyTokenType = 'buy_token_type',
  /** Buy Currency symbol */
  SellCurrencySymbol = 'sell_currency_symbol',
  /** Buy Currency name */
  SellCurrencyName = 'sell_currency_name',
  /** Buy Token address */
  SellCurrencyAddress = 'sell_currency_address',
  /** Buy Token address */
  SellTokenId = 'sell_token_id',
  /** Buy Token type */
  SellTokenType = 'sell_token_type',
  /** Exchange ID */
  ExchangeId = 'exchange_id',
  /** Contract Type */
  ContractType = 'contract_type',
}

export enum TronTradesUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Sellers count */
  Sellers = 'sellers',
  /** Buyers count */
  Buyers = 'buyers',
  /** Buy currencies */
  BuyCurrencies = 'buy_currencies',
  /** Sell currencies */
  SellCurrencies = 'sell_currencies',
  /** Exchange IDs */
  Exchanges = 'exchanges',
}

export type TronTransactionFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  refBlockHash?: Maybe<Array<HashSelector>>
  contractAddress?: Maybe<AddressSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactions = {
  __typename?: 'TronTransactions'
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  /** Contract Address */
  contractAddress?: Maybe<Address>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  energyFee?: Maybe<Scalars['Float']>
  energyUsageTotal?: Maybe<Scalars['Float']>
  /** Expiration */
  expiration: Scalars['Int']
  fee?: Maybe<Scalars['Float']>
  /** Fee Limit */
  feeLimit: Scalars['Int']
  /** Hash hex representation */
  hash: Scalars['String']
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>
  internalTransactionsCount?: Maybe<Scalars['Int']>
  logsCount?: Maybe<Scalars['Int']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  netFee?: Maybe<Scalars['Float']>
  netUsage?: Maybe<Scalars['Float']>
  /** Ref block Hash hex representation */
  refBlockHash: Scalars['String']
  /** Result message */
  result?: Maybe<Scalars['String']>
  /** Signatures */
  signatures: Scalars['String']
  /** Success */
  success?: Maybe<Scalars['Boolean']>
}

/** Transactions in Tron blockchain */
export type TronTransactionsAnyArgs = {
  of: TronTransactionsMeasureable
}

/** Transactions in Tron blockchain */
export type TronTransactionsBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactionsContractAddressArgs = {
  contractAddress?: Maybe<AddressSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactionsCountArgs = {
  uniq?: Maybe<TronTransactionsUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  refBlockHash?: Maybe<Array<HashSelector>>
  contractAddress?: Maybe<AddressSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactionsEnergyFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  refBlockHash?: Maybe<Array<HashSelector>>
  contractAddress?: Maybe<AddressSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactionsEnergyUsageTotalArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  refBlockHash?: Maybe<Array<HashSelector>>
  contractAddress?: Maybe<AddressSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactionsFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  refBlockHash?: Maybe<Array<HashSelector>>
  contractAddress?: Maybe<AddressSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactionsHashArgs = {
  txHash?: Maybe<Array<HashSelector>>
}

/** Transactions in Tron blockchain */
export type TronTransactionsIndexArgs = {
  txIndex?: Maybe<Array<TxIndexSelector>>
}

/** Transactions in Tron blockchain */
export type TronTransactionsInternalTransactionsCountArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  refBlockHash?: Maybe<Array<HashSelector>>
  contractAddress?: Maybe<AddressSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactionsLogsCountArgs = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  refBlockHash?: Maybe<Array<HashSelector>>
  contractAddress?: Maybe<AddressSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactionsMaximumArgs = {
  of: TronTransactionsMeasureable
  get?: Maybe<TronTransactionsMeasureable>
}

/** Transactions in Tron blockchain */
export type TronTransactionsMinimumArgs = {
  of: TronTransactionsMeasureable
  get?: Maybe<TronTransactionsMeasureable>
}

/** Transactions in Tron blockchain */
export type TronTransactionsNetFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  refBlockHash?: Maybe<Array<HashSelector>>
  contractAddress?: Maybe<AddressSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactionsNetUsageArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txIndex?: Maybe<TxIndexSelector>
  success?: Maybe<Scalars['Boolean']>
  refBlockHash?: Maybe<Array<HashSelector>>
  contractAddress?: Maybe<AddressSelector>
}

/** Transactions in Tron blockchain */
export type TronTransactionsRefBlockHashArgs = {
  refBlockHash?: Maybe<Array<HashSelector>>
}

/** Transactions in Tron blockchain */
export type TronTransactionsSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

export enum TronTransactionsMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Fee */
  Fee = 'fee',
  /** Fee Limit */
  FeeLimit = 'fee_limit',
  /** Energy Fee */
  EnergyFee = 'energy_fee',
  /** Net usage */
  NetUsage = 'net_usage',
  /** Internal transactions count */
  InternalTransactionsCount = 'internal_transactions_count',
}

export enum TronTransactionsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
}

export type TronTransferFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfers = {
  __typename?: 'TronTransfers'
  amount?: Maybe<Scalars['Float']>
  any?: Maybe<Scalars['String']>
  /** Block where transfer transaction is included */
  block?: Maybe<Block>
  /** Contract type */
  contractType?: Maybe<TronContractType>
  count?: Maybe<Scalars['Int']>
  /** Currency of transfer */
  currency?: Maybe<Currency>
  /** Calendar date */
  date?: Maybe<Date>
  energyUsageTotal?: Maybe<Scalars['Float']>
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>
  fee?: Maybe<Scalars['Float']>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  netUsage?: Maybe<Scalars['Float']>
  /** Transfer receiver */
  receiver?: Maybe<Address>
  /** Transfer sender */
  sender?: Maybe<Address>
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>
  /** Action from address */
  txFrom?: Maybe<Address>
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>
  /** Action to address */
  txTo?: Maybe<Address>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersAmountArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersAnyArgs = {
  of: TronTransfersMeasureable
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersBlockArgs = {
  height?: Maybe<BlockSelector>
  time?: Maybe<DateTimeSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersContractTypeArgs = {
  contractType?: Maybe<TronContractTypeSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersCountArgs = {
  uniq?: Maybe<TransfersUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersCurrencyArgs = {
  currency?: Maybe<TronCurrencySelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersEnergyUsageTotalArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersEntityIdArgs = {
  entityId?: Maybe<EntitySelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersExternalArgs = {
  external?: Maybe<Scalars['Boolean']>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersFeeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  in?: Maybe<BaseCurrencyEnum>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersMaximumArgs = {
  of: TronTransfersMeasureable
  get?: Maybe<TronTransfersMeasureable>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersMinimumArgs = {
  of: TronTransfersMeasureable
  get?: Maybe<TronTransfersMeasureable>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersNetUsageArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  height?: Maybe<BlockSelector>
  txHash?: Maybe<HashSelector>
  txFrom?: Maybe<AddressSelector>
  txTo?: Maybe<AddressSelector>
  sender?: Maybe<AddressSelector>
  receiver?: Maybe<AddressSelector>
  currency?: Maybe<TronCurrencySelector>
  contractType?: Maybe<TronContractTypeSelector>
  entityId?: Maybe<EntitySelector>
  external?: Maybe<Scalars['Boolean']>
  success?: Maybe<Scalars['Boolean']>
  amount?: Maybe<Array<AmountSelector>>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersReceiverArgs = {
  receiver?: Maybe<AddressSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersSenderArgs = {
  sender?: Maybe<AddressSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersSuccessArgs = {
  success?: Maybe<Scalars['Boolean']>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersTxFromArgs = {
  txFrom?: Maybe<AddressSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersTxHashArgs = {
  txHash?: Maybe<HashSelector>
}

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersTxToArgs = {
  txTo?: Maybe<AddressSelector>
}

export enum TronTransfersMeasureable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** Block */
  Block = 'block',
  /** Transaction hash */
  TxHash = 'tx_hash',
  /** Amount */
  Amount = 'amount',
  /** Sender */
  Sender = 'sender',
  /** Receiver */
  Receiver = 'receiver',
  /** Currency symbol */
  CurrencySymbol = 'currency_symbol',
  /** Token address */
  CurrencyAddress = 'currency_address',
  /** Token ID */
  TokenId = 'token_id',
  /** Token type */
  TokenType = 'token_type',
}

/** Selector of index of transaction in block */
export type TxIndexSelector = {
  /** Tx index is */
  is?: Maybe<Scalars['Int']>
  /** Tx index not */
  not?: Maybe<Scalars['Int']>
  /** Tx index in the list */
  in?: Maybe<Array<Scalars['Int']>>
  /** Tx index not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>
}

/** Select transactions by subtype */
export type TxSubtypeSelector = {
  /** Transaction SubType is */
  is?: Maybe<AlgorandTxSubType>
  /** Transaction SubType not */
  not?: Maybe<AlgorandTxSubType>
  /** Transaction SubType in the list */
  in?: Maybe<Array<AlgorandTxSubType>>
  /** Transaction SubType not in the list */
  notIn?: Maybe<Array<AlgorandTxSubType>>
}

/** Select transactions by type */
export type TxTypeSelector = {
  /** Transaction Type is */
  is?: Maybe<AlgorandTxType>
  /** Transaction Type not */
  not?: Maybe<AlgorandTxType>
  /** Transaction Type in the list */
  in?: Maybe<Array<AlgorandTxType>>
  /** Transaction Type not in the list */
  notIn?: Maybe<Array<AlgorandTxType>>
}

/** User account */
export type UserAccount = {
  __typename?: 'UserAccount'
  /** User account creation timestamp */
  createdAt?: Maybe<DateTime>
  /** User account email */
  email?: Maybe<Scalars['String']>
  /** User account id */
  userId?: Maybe<Scalars['Int']>
}

/** User-Agent */
export type UserAgent = {
  __typename?: 'UserAgent'
  /** Is browser */
  browser?: Maybe<Scalars['Boolean']>
  /** User-Agent json string */
  json?: Maybe<Scalars['String']>
}

/** User requests */
export type UserRequest = {
  __typename?: 'UserRequest'
  account?: Maybe<UserAccount>
  any?: Maybe<Scalars['String']>
  apiKey?: Maybe<Scalars['String']>
  /** Clickhouse bytes processed */
  clickhouseBytesProcessed?: Maybe<Scalars['BigInt']>
  /** Clickhouse execution time */
  clickhouseExecutionTime?: Maybe<Scalars['Float']>
  /** Clickhouse rows read */
  clickhouseRowsRead?: Maybe<Scalars['BigInt']>
  clientIp?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  /** Calendar date */
  date?: Maybe<Date>
  errors?: Maybe<Errors>
  /** Execution time */
  executionTime?: Maybe<Scalars['Float']>
  headers?: Maybe<Headers>
  maximum?: Maybe<Scalars['String']>
  minimum?: Maybe<Scalars['String']>
  permission?: Maybe<Scalars['String']>
  /** Points consumed */
  pointsConsumed?: Maybe<Scalars['Float']>
  /** Points estimated */
  pointsEstimated?: Maybe<Scalars['Float']>
  /** Points limit */
  pointsLimit?: Maybe<Scalars['Float']>
  referrer?: Maybe<Scalars['String']>
  request?: Maybe<Request>
  /** Response size */
  responseSize?: Maybe<Scalars['Float']>
  server?: Maybe<Scalars['String']>
  success?: Maybe<Scalars['Boolean']>
  /** Timestamp */
  timestamp?: Maybe<DateTime>
  userAgent?: Maybe<UserAgent>
  variables?: Maybe<Variables>
}

/** User requests */
export type UserRequestAnyArgs = {
  of: UserRequestsMeasurable
}

/** User requests */
export type UserRequestClickhouseBytesProcessedArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
}

/** User requests */
export type UserRequestClickhouseExecutionTimeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
}

/** User requests */
export type UserRequestClickhouseRowsReadArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
}

/** User requests */
export type UserRequestCountArgs = {
  uniq?: Maybe<UserRequestUniq>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
}

/** User requests */
export type UserRequestExecutionTimeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
}

/** User requests */
export type UserRequestMaximumArgs = {
  of: UserRequestsMeasurable
  get?: Maybe<UserRequestsMeasurable>
}

/** User requests */
export type UserRequestMinimumArgs = {
  of: UserRequestsMeasurable
  get?: Maybe<UserRequestsMeasurable>
}

/** User requests */
export type UserRequestPointsConsumedArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
}

/** User requests */
export type UserRequestPointsEstimatedArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
}

/** User requests */
export type UserRequestPointsLimitArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
}

/** User requests */
export type UserRequestResponseSizeArgs = {
  calculate?: Maybe<AmountAggregateFunction>
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
}

export type UserRequestFilter = {
  date?: Maybe<DateSelector>
  time?: Maybe<DateTimeSelector>
  userId?: Maybe<IntegerSelector>
  email?: Maybe<StringSelector>
  apiKey?: Maybe<StringSelector>
  clientIp?: Maybe<StringSelector>
  server?: Maybe<StringSelector>
  browser?: Maybe<BooleanSelector>
  referrer?: Maybe<StringSelector>
  success?: Maybe<BooleanSelector>
  executionTime?: Maybe<FloatSelector>
  clickhouseExecutionTime?: Maybe<FloatSelector>
  clickhouseRowsRead?: Maybe<IntegerSelector>
  clickhouseBytesProcessed?: Maybe<IntegerSelector>
  responseSize?: Maybe<FloatSelector>
}

export enum UserRequestUniq {
  /** Uniq date count */
  Dates = 'dates',
  /** Uniq user ids count */
  UserIds = 'userIds',
  /** Uniq api keys count */
  ApiKeys = 'apiKeys',
  /** Uniq client ips count */
  ClientIps = 'clientIps',
  /** Uniq servers count */
  Servers = 'servers',
  /** Uniq hashes from requests count */
  HashesFromRequests = 'hashesFromRequests',
  /** Uniq user agents count */
  UserAgents = 'userAgents',
}

export enum UserRequestsMeasurable {
  /** Date */
  Date = 'date',
  /** Time */
  Time = 'time',
  /** User id */
  UserId = 'userId',
  /** Execution time */
  ExecutionTime = 'executionTime',
  /** Clickhouse execution time */
  ClickhouseExecutionTime = 'clickhouseExecutionTime',
  /** Clickhouse rows read */
  ClickhouseRowsRead = 'clickhouseRowsRead',
  /** Clickhouse bytes processed */
  ClickhouseBytesProcessed = 'clickhouseBytesProcessed',
  /** Response size */
  ResponseSize = 'responseSize',
  /** Points estimated */
  PointsEstimated = 'pointsEstimated',
  /** Points consumed */
  PointsConsumed = 'pointsConsumed',
  /** Points limit */
  PointsLimit = 'pointsLimit',
}

/** Variables */
export type Variables = {
  __typename?: 'Variables'
  /** Variables json string */
  json?: Maybe<Scalars['String']>
}
