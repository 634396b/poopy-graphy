import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string. */
  BigInt: any;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
}

/** Account */
export interface Account {
  __typename?: 'Account';
  /** Account ID */
  id: Scalars['String'];
  /** Account number, the equivalent of a human-friendly public key */
  num: Scalars['Int'];
  /** Realm number  */
  realmId: Scalars['Int'];
  /** Shard number */
  shardId: Scalars['Int'];
}

/** Blockchain address */
export interface Address {
  __typename?: 'Address';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
}

/** Address selector */
export interface AddressSelector {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Scalars['String']>;
  /** Not in the list of Addresses */
  notIn?: Maybe<Scalars['String']>;
}

/** Address selector */
export interface AddressSelectorIn {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Scalars['String']>;
}

/** Blockchain account with address and type */
export interface AddressWithAccount {
  __typename?: 'AddressWithAccount';
  /** Account ID */
  account: Scalars['String'];
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Account type */
  type: Scalars['String'];
}

/** Algorand Blockchain */
export interface Algorand {
  __typename?: 'Algorand';
  /** Basic information about address ( or smart contract ) */
  address: Array<AlgorandAddressInfo>;
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<AlgorandArguments>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<AlgorandBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<AlgorandCoinpath>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<AlgorandSmartContractCalls>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<AlgorandTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<AlgorandTransfers>>;
}


/** Algorand Blockchain */
export interface AlgorandAddressArgs {
  address: Array<AlgorandAddressSelector>;
}


/** Algorand Blockchain */
export interface AlgorandArgumentsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txType?: Maybe<TxTypeSelector>;
  txFrom?: Maybe<Array<AlgorandAddressSelector>>;
  caller?: Maybe<Array<AlgorandAddressSelector>>;
  reference?: Maybe<Array<AlgorandAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  argindex?: Maybe<ArgumentIndexSelector>;
  any?: Maybe<Array<AlgorandArgumentFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Algorand Blockchain */
export interface AlgorandBlocksArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  nextProtocol?: Maybe<StringIdSelector>;
  currentProtocol?: Maybe<StringIdSelector>;
  any?: Maybe<Array<AlgorandBlockFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Algorand Blockchain */
export interface AlgorandCoinpathArgs {
  sender?: Maybe<AlgorandAddressSelector>;
  receiver?: Maybe<AlgorandAddressSelector>;
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
  initialAddress?: Maybe<AlgorandAddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
}


/** Algorand Blockchain */
export interface AlgorandSmartContractCallsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  txType?: Maybe<TxTypeSelector>;
  any?: Maybe<Array<AlgorandSmartContractCallFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Algorand Blockchain */
export interface AlgorandTransactionsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>;
  txType?: Maybe<TxTypeSelector>;
  txSubtype?: Maybe<TxSubtypeSelector>;
  any?: Maybe<Array<AlgorandTransactionFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Algorand Blockchain */
export interface AlgorandTransfersArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  sender?: Maybe<Array<AlgorandAddressSelector>>;
  receiver?: Maybe<Array<AlgorandAddressSelector>>;
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  txType?: Maybe<TxTypeSelector>;
  transferType?: Maybe<AlgorandTransferTypeSelector>;
  any?: Maybe<Array<AlgorandTransferFilter>>;
  options?: Maybe<QueryOptions>;
}

/** Address detailed information for Algorand network */
export interface AlgorandAddressInfo {
  __typename?: 'AlgorandAddressInfo';
  /** Address */
  address?: Maybe<Address>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<AlgorandSmartContract>;
}

/** Algorand Address */
export interface AlgorandAddressSelector {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Array<Scalars['String']>>;
  /** Not in the list of Addresses */
  notIn?: Maybe<Array<Scalars['String']>>;
}

export interface AlgorandArgumentFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txType?: Maybe<TxTypeSelector>;
  txFrom?: Maybe<Array<AlgorandAddressSelector>>;
  caller?: Maybe<Array<AlgorandAddressSelector>>;
  reference?: Maybe<Array<AlgorandAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  argindex?: Maybe<ArgumentIndexSelector>;
}

/** Arguments of Smart Contract Calls */
export interface AlgorandArguments {
  __typename?: 'AlgorandArguments';
  any?: Maybe<Scalars['String']>;
  /** Sequential index of value in array ( multi-dimensional) */
  argindex: Scalars['Int'];
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  firstRound?: Maybe<Scalars['Int']>;
  genesisHash64?: Maybe<Scalars['String']>;
  genesisId?: Maybe<Scalars['String']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  poolerror?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<AlgorandSmartContract>;
  /** Transaction where call happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transaction sender */
  txSender?: Maybe<Address>;
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>;
  /** The Value of argument */
  value?: Maybe<Scalars['String']>;
}


/** Arguments of Smart Contract Calls */
export interface AlgorandArgumentsAnyArgs {
  of: AlgorandArgumentsMeasureable;
}


/** Arguments of Smart Contract Calls */
export interface AlgorandArgumentsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Arguments of Smart Contract Calls */
export interface AlgorandArgumentsCountArgs {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txType?: Maybe<TxTypeSelector>;
  txFrom?: Maybe<Array<AlgorandAddressSelector>>;
  caller?: Maybe<Array<AlgorandAddressSelector>>;
  reference?: Maybe<Array<AlgorandAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  argindex?: Maybe<ArgumentIndexSelector>;
}


/** Arguments of Smart Contract Calls */
export interface AlgorandArgumentsMaximumArgs {
  of: AlgorandArgumentsMeasureable;
  get?: Maybe<AlgorandArgumentsMeasureable>;
}


/** Arguments of Smart Contract Calls */
export interface AlgorandArgumentsMinimumArgs {
  of: AlgorandArgumentsMeasureable;
  get?: Maybe<AlgorandArgumentsMeasureable>;
}


/** Arguments of Smart Contract Calls */
export interface AlgorandArgumentsSmartContractArgs {
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Arguments of Smart Contract Calls */
export interface AlgorandArgumentsTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Arguments of Smart Contract Calls */
export interface AlgorandArgumentsTxSenderArgs {
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Arguments of Smart Contract Calls */
export interface AlgorandArgumentsTxTypeArgs {
  txType?: Maybe<Array<AlgorandTxType>>;
}


/** Arguments of Smart Contract Calls */
export interface AlgorandArgumentsValueArgs {
  value?: Maybe<Array<ArgumentValueSelector>>;
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
  ArgumentIndex = 'argument_index'
}

export interface AlgorandBlockFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  nextProtocol?: Maybe<StringIdSelector>;
  currentProtocol?: Maybe<StringIdSelector>;
}

/** Blocks in Algorand blockchain */
export interface AlgorandBlocks {
  __typename?: 'AlgorandBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  currentProtocol?: Maybe<Scalars['String']>;
  /** Calendar date */
  date?: Maybe<Date>;
  frac: Scalars['BigInt'];
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  nextProtocol?: Maybe<Scalars['String']>;
  nextProtocolApprovals?: Maybe<Scalars['BigInt']>;
  nextProtocolSwitchOn?: Maybe<Scalars['BigInt']>;
  nextProtocolVoteBefore?: Maybe<Scalars['BigInt']>;
  /** Previous block hash */
  previousBlockHash: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Address>;
  rate?: Maybe<Scalars['Float']>;
  reward?: Maybe<Scalars['Float']>;
  seed?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  txnRoot: Scalars['String'];
  upgradeApprove?: Maybe<Scalars['Int']>;
  upgradePropose?: Maybe<Scalars['String']>;
}


/** Blocks in Algorand blockchain */
export interface AlgorandBlocksAnyArgs {
  of: AlgorandBlocksMeasureable;
}


/** Blocks in Algorand blockchain */
export interface AlgorandBlocksCountArgs {
  uniq?: Maybe<AlgorandBlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  nextProtocol?: Maybe<StringIdSelector>;
  currentProtocol?: Maybe<StringIdSelector>;
}


/** Blocks in Algorand blockchain */
export interface AlgorandBlocksHashArgs {
  blockHash?: Maybe<Array<HashSelector>>;
}


/** Blocks in Algorand blockchain */
export interface AlgorandBlocksHeightArgs {
  height?: Maybe<BlockSelector>;
}


/** Blocks in Algorand blockchain */
export interface AlgorandBlocksMaximumArgs {
  of: AlgorandBlocksMeasureable;
  get?: Maybe<AlgorandBlocksMeasureable>;
}


/** Blocks in Algorand blockchain */
export interface AlgorandBlocksMinimumArgs {
  of: AlgorandBlocksMeasureable;
  get?: Maybe<AlgorandBlocksMeasureable>;
}


/** Blocks in Algorand blockchain */
export interface AlgorandBlocksProposerArgs {
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Blocks in Algorand blockchain */
export interface AlgorandBlocksRateArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  nextProtocol?: Maybe<StringIdSelector>;
  currentProtocol?: Maybe<StringIdSelector>;
}


/** Blocks in Algorand blockchain */
export interface AlgorandBlocksRewardArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<Array<AlgorandAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  nextProtocol?: Maybe<StringIdSelector>;
  currentProtocol?: Maybe<StringIdSelector>;
}


/** Blocks in Algorand blockchain */
export interface AlgorandBlocksTimestampArgs {
  time?: Maybe<DateTimeSelector>;
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
  NextProtocolApprovals = 'next_protocol_approvals'
}

export enum AlgorandBlocksUniq {
  /** Unique proposer count */
  Proposers = 'proposers',
  /** Unique date count */
  Dates = 'dates'
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
  SmartContract = 'smart_contract'
}

/** Coinpath */
export interface AlgorandCoinpath {
  __typename?: 'AlgorandCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
}


/** Coinpath */
export interface AlgorandCoinpathAmountArgs {
  in?: Maybe<BaseCurrencyEnum>;
}


/** Coinpath */
export interface AlgorandCoinpathAnyArgs {
  of: CoinpathMeasureable;
}


/** Coinpath */
export interface AlgorandCoinpathMaximumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}


/** Coinpath */
export interface AlgorandCoinpathMinimumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}

/**
 * Currency selector in Algorand blockchain.
 *   Currency is selected by asset ID. To select ALGO use ID=0
 */
export interface AlgorandCurrencySelector {
  /** Currency is */
  is?: Maybe<Scalars['Int']>;
  /** Currency not */
  not?: Maybe<Scalars['Int']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export enum AlgorandNetwork {
  /** Algorand Mainnet (ALGO) */
  Algorand = 'algorand',
  /** Algorand Testnet */
  AlgorandTestnet = 'algorand_testnet',
  /** Algorand Betanet */
  AlgorandBetanet = 'algorand_betanet'
}

/** Algorand smart contract */
export interface AlgorandSmartContract {
  __typename?: 'AlgorandSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract byte code */
  bytecode?: Maybe<Scalars['String']>;
  /** Smart Contract Deassembled source code */
  source?: Maybe<Scalars['String']>;
}

export interface AlgorandSmartContractCallFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  txType?: Maybe<TxTypeSelector>;
}

/** Smart Contract Calls */
export interface AlgorandSmartContractCalls {
  __typename?: 'AlgorandSmartContractCalls';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Fee used in transaction call */
  fee?: Maybe<Scalars['Float']>;
  firstRound?: Maybe<Scalars['Int']>;
  genesisHash64?: Maybe<Scalars['String']>;
  genesisId?: Maybe<Scalars['String']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  poolerror?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<AlgorandSmartContract>;
  /** Transaction where call happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transaction sender */
  txSender?: Maybe<Address>;
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>;
}


/** Smart Contract Calls */
export interface AlgorandSmartContractCallsAnyArgs {
  of: AlgorandCallsMeasureable;
}


/** Smart Contract Calls */
export interface AlgorandSmartContractCallsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Smart Contract Calls */
export interface AlgorandSmartContractCallsCountArgs {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  txType?: Maybe<TxTypeSelector>;
}


/** Smart Contract Calls */
export interface AlgorandSmartContractCallsFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
  txType?: Maybe<TxTypeSelector>;
}


/** Smart Contract Calls */
export interface AlgorandSmartContractCallsMaximumArgs {
  of: AlgorandCallsMeasureable;
  get?: Maybe<AlgorandCallsMeasureable>;
}


/** Smart Contract Calls */
export interface AlgorandSmartContractCallsMinimumArgs {
  of: AlgorandCallsMeasureable;
  get?: Maybe<AlgorandCallsMeasureable>;
}


/** Smart Contract Calls */
export interface AlgorandSmartContractCallsSmartContractArgs {
  smartContractAddress?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Smart Contract Calls */
export interface AlgorandSmartContractCallsTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Smart Contract Calls */
export interface AlgorandSmartContractCallsTxSenderArgs {
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Smart Contract Calls */
export interface AlgorandSmartContractCallsTxTypeArgs {
  txType?: Maybe<Array<AlgorandTxType>>;
}

export interface AlgorandTransactionFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>;
  txType?: Maybe<TxTypeSelector>;
  txSubtype?: Maybe<TxSubtypeSelector>;
}

/** Transactions in Algorand blockchain */
export interface AlgorandTransactions {
  __typename?: 'AlgorandTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Asset related to transaction */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  fee?: Maybe<Scalars['Float']>;
  firstRound?: Maybe<Scalars['Int']>;
  genesisHash?: Maybe<Scalars['String']>;
  genesisId?: Maybe<Scalars['String']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  poolerror?: Maybe<Scalars['String']>;
  /** Transaction sender */
  sender?: Maybe<Address>;
  /** Transaction sub type */
  subtype?: Maybe<AlgorandTxSubType>;
  /** Transaction type */
  type?: Maybe<AlgorandTxType>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsAnyArgs {
  of: AlgorandTransactionsMeasureable;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsCountArgs {
  uniq?: Maybe<AlgorandTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>;
  txType?: Maybe<TxTypeSelector>;
  txSubtype?: Maybe<TxSubtypeSelector>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsCurrencyArgs {
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  txCurrency?: Maybe<Array<AlgorandCurrencySelector>>;
  txType?: Maybe<TxTypeSelector>;
  txSubtype?: Maybe<TxSubtypeSelector>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsHashArgs {
  txHash?: Maybe<Array<HashSelector>>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsIndexArgs {
  txIndex?: Maybe<Array<TxIndexSelector>>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsMaximumArgs {
  of: AlgorandTransactionsMeasureable;
  get?: Maybe<AlgorandTransactionsMeasureable>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsMinimumArgs {
  of: AlgorandTransactionsMeasureable;
  get?: Maybe<AlgorandTransactionsMeasureable>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsSenderArgs {
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsSubtypeArgs {
  txType?: Maybe<TxSubtypeSelector>;
}


/** Transactions in Algorand blockchain */
export interface AlgorandTransactionsTypeArgs {
  txType?: Maybe<TxTypeSelector>;
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
  TxSender = 'tx_sender'
}

export enum AlgorandTransactionsUniq {
  /** Unique TX senders count */
  Senders = 'senders',
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique currencies */
  Currencies = 'currencies'
}

export interface AlgorandTransferFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  sender?: Maybe<Array<AlgorandAddressSelector>>;
  receiver?: Maybe<Array<AlgorandAddressSelector>>;
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  txType?: Maybe<TxTypeSelector>;
  transferType?: Maybe<AlgorandTransferTypeSelector>;
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
  Unfreeze = 'unfreeze'
}

/** Select transfers by type */
export interface AlgorandTransferTypeSelector {
  /** Transfer Type is */
  is?: Maybe<AlgorandTransferType>;
  /** Transfer Type not */
  not?: Maybe<AlgorandTransferType>;
  /** Transfer Type in the list */
  in?: Maybe<Array<AlgorandTransferType>>;
  /** Transfer Type not in the list */
  notIn?: Maybe<Array<AlgorandTransferType>>;
}

/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfers {
  __typename?: 'AlgorandTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  firstRound?: Maybe<Scalars['Int']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transaction where transfer happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transfer Type */
  transferType?: Maybe<AlgorandTransferType>;
  /** Transfer transaction sender */
  txSender?: Maybe<Address>;
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  sender?: Maybe<Array<AlgorandAddressSelector>>;
  receiver?: Maybe<Array<AlgorandAddressSelector>>;
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  txType?: Maybe<TxTypeSelector>;
  transferType?: Maybe<AlgorandTransferTypeSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersAnyArgs {
  of: AlgorandTransfersMeasureable;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersCountArgs {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  sender?: Maybe<Array<AlgorandAddressSelector>>;
  receiver?: Maybe<Array<AlgorandAddressSelector>>;
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  txType?: Maybe<TxTypeSelector>;
  transferType?: Maybe<AlgorandTransferTypeSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersCurrencyArgs {
  currency?: Maybe<Array<AlgorandCurrencySelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersMaximumArgs {
  of: AlgorandTransfersMeasureable;
  get?: Maybe<AlgorandTransfersMeasureable>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersMinimumArgs {
  of: AlgorandTransfersMeasureable;
  get?: Maybe<AlgorandTransfersMeasureable>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersReceiverArgs {
  receiver?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersSenderArgs {
  sender?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersTransferTypeArgs {
  transferType?: Maybe<Array<AlgorandTransferType>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersTxSenderArgs {
  txSender?: Maybe<Array<AlgorandAddressSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface AlgorandTransfersTxTypeArgs {
  txType?: Maybe<Array<AlgorandTxType>>;
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
  TransferType = 'transfer_type'
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
  None = 'none'
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
  Appl = 'appl'
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
  AnyLast = 'anyLast'
}

/** Select by amount */
export interface AmountSelector {
  /** Amount is */
  is?: Maybe<Scalars['Float']>;
  /** Amount not */
  not?: Maybe<Scalars['Float']>;
  /** Amount in the list */
  in?: Maybe<Array<Scalars['Float']>>;
  /** Amount not in the list */
  notIn?: Maybe<Array<Scalars['Float']>>;
  /** Amount greater than */
  gt?: Maybe<Scalars['Float']>;
  /** Amount less than */
  lt?: Maybe<Scalars['Float']>;
  /** Amount less or equal than */
  lteq?: Maybe<Scalars['Float']>;
  /** Amount greater or equal than */
  gteq?: Maybe<Scalars['Float']>;
  /** Amount in range */
  between?: Maybe<Array<Scalars['Float']>>;
}

/** Selector of index of argument in call */
export interface ArgumentIndexSelector {
  /** Tx index is */
  is?: Maybe<Scalars['Int']>;
  /** Tx index not */
  not?: Maybe<Scalars['Int']>;
  /** Tx index in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Tx index not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
}

/** Argument of Smart contract method or event */
export interface ArgumentName {
  __typename?: 'ArgumentName';
  /** Name */
  name: Scalars['String'];
  /** Type */
  type: Scalars['String'];
}

/** Argument name and value of smart contract call or event */
export interface ArgumentNameValue {
  __typename?: 'ArgumentNameValue';
  /** Argument name */
  argument: Scalars['String'];
  /** Argument data type */
  argumentType: Scalars['String'];
  /** Sequential index of value in array ( multi-dimensional) */
  index: Scalars['String'];
  /** Value as String */
  value: Scalars['String'];
}

/** Selector of argument for smart contract method or event */
export interface ArgumentSelector {
  /** Argument is */
  is?: Maybe<Scalars['String']>;
  /** Argument not */
  not?: Maybe<Scalars['String']>;
  /** Argument in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Argument not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Selector of argument type for smart contract method or event */
export interface ArgumentTypeSelector {
  /** Argument type is */
  is?: Maybe<Scalars['String']>;
  /** Argument type not */
  not?: Maybe<Scalars['String']>;
  /** Argument type in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Argument type not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Argument value of smart contract call or event */
export interface ArgumentValue {
  __typename?: 'ArgumentValue';
  /** Value as Address */
  address?: Maybe<EthereumAddressInfo>;
  /** Value as String */
  value: Scalars['String'];
}

/** Selector of value of argument for smart contract method or event */
export interface ArgumentValueSelector {
  /** Value is */
  is?: Maybe<Scalars['String']>;
  /** Value not */
  not?: Maybe<Scalars['String']>;
  /** Value in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Value not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

export enum BaseCurrencyEnum {
  /** Dollar */
  Usd = 'USD',
  /** Ethereum */
  Eth = 'ETH',
  /** Tether USDT */
  Usdt = 'USDT',
  /** Bitcoin */
  Btc = 'BTC'
}


/** Binance DEX */
export interface Binance {
  __typename?: 'Binance';
  /** Binance DEX Network Blocks */
  blocks?: Maybe<Array<BinanceBlock>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<BinanceCoinpath>>;
  /** Binance DEX Network Exchange Orders */
  orders?: Maybe<Array<BinanceOrders>>;
  /** Binance DEX Network Trades between currencies */
  trades?: Maybe<Array<BinanceTrades>>;
  /** Binance DEX Network Transactions */
  transactions?: Maybe<Array<BinanceTransactions>>;
  /** Binance DEX Network Currency Transfers */
  transfers?: Maybe<Array<BinanceTransfers>>;
}


/** Binance DEX */
export interface BinanceBlocksArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockId?: Maybe<StringIdSelector>;
  validatorMoniker?: Maybe<StringIdSelector>;
  validatorFeeAddr?: Maybe<BinanceAddressSelector>;
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>;
  validatorOperahraddress?: Maybe<BinanceAddressSelector>;
  any?: Maybe<Array<BinanceBlockFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Binance DEX */
export interface BinanceCoinpathArgs {
  sender?: Maybe<BinanceAddressSelector>;
  receiver?: Maybe<BinanceAddressSelector>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  initialAddress?: Maybe<BinanceAddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
}


/** Binance DEX */
export interface BinanceOrdersArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  orderOwner?: Maybe<Array<BinanceAddressSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
  orderType?: Maybe<Array<OrderTypeSelector>>;
  orderSide?: Maybe<Array<OrderSideSelector>>;
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
  any?: Maybe<Array<BinanceOrderFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Binance DEX */
export interface BinanceTradesArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<Array<BinanceAddressSelector>>;
  seller?: Maybe<Array<BinanceAddressSelector>>;
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<BinanceTradeFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Binance DEX */
export interface BinanceTransactionsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  transactionType?: Maybe<BinanceTransactionTypeSelector>;
  proposalId?: Maybe<StringIdSelector>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transactionCode?: Maybe<IntIdSelector>;
  transactionSource?: Maybe<IntIdSelector>;
  deposit?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<BinanceTransactionFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Binance DEX */
export interface BinanceTransfersArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  sender?: Maybe<Array<BinanceAddressSelector>>;
  receiver?: Maybe<Array<BinanceAddressSelector>>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  outputIndex?: Maybe<Array<OutputIndexSelector>>;
  any?: Maybe<Array<BinanceTransferFilter>>;
  options?: Maybe<QueryOptions>;
}

/** Binance Address should start with bnb and contain 42 chars. */
export interface BinanceAddressSelector {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Scalars['String']>;
  /** Not in the list of Addresses */
  notIn?: Maybe<Scalars['String']>;
}

/** Block */
export interface BinanceBlock {
  __typename?: 'BinanceBlock';
  any?: Maybe<Scalars['String']>;
  /** Block ID */
  blockId?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** Validator consensus pubkey */
  validatorConsensusPubkey?: Maybe<Scalars['String']>;
  /** Validator fee address */
  validatorFeeAddr?: Maybe<Address>;
  /** Validator moniker */
  validatorMoniker?: Maybe<Scalars['String']>;
  /** Validator operator HR address */
  validatorOperaHrAddress?: Maybe<Address>;
  /** Validator operator address */
  validatorOperatorAddress?: Maybe<Address>;
}


/** Block */
export interface BinanceBlockAnyArgs {
  of: BinanceBlocksMeasureable;
}


/** Block */
export interface BinanceBlockBlockIdArgs {
  blockId?: Maybe<StringIdSelector>;
}


/** Block */
export interface BinanceBlockCountArgs {
  uniq?: Maybe<BinanceBlockUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockId?: Maybe<StringIdSelector>;
  validatorMoniker?: Maybe<StringIdSelector>;
  validatorFeeAddr?: Maybe<BinanceAddressSelector>;
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>;
  validatorOperahraddress?: Maybe<BinanceAddressSelector>;
}


/** Block */
export interface BinanceBlockHeightArgs {
  height?: Maybe<BlockSelector>;
}


/** Block */
export interface BinanceBlockMaximumArgs {
  of: BinanceBlocksMeasureable;
  get?: Maybe<BinanceBlocksMeasureable>;
}


/** Block */
export interface BinanceBlockMinimumArgs {
  of: BinanceBlocksMeasureable;
  get?: Maybe<BinanceBlocksMeasureable>;
}


/** Block */
export interface BinanceBlockTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Block */
export interface BinanceBlockValidatorConsensusPubkeyArgs {
  validatorConsensusPubkey?: Maybe<StringIdSelector>;
}


/** Block */
export interface BinanceBlockValidatorFeeAddrArgs {
  validatorFeeAddr?: Maybe<BinanceAddressSelector>;
}


/** Block */
export interface BinanceBlockValidatorMonikerArgs {
  validatorMoniker?: Maybe<StringIdSelector>;
}


/** Block */
export interface BinanceBlockValidatorOperaHrAddressArgs {
  validatorOperaHrAddress?: Maybe<BinanceAddressSelector>;
}


/** Block */
export interface BinanceBlockValidatorOperatorAddressArgs {
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>;
}

export interface BinanceBlockFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockId?: Maybe<StringIdSelector>;
  validatorMoniker?: Maybe<StringIdSelector>;
  validatorFeeAddr?: Maybe<BinanceAddressSelector>;
  validatorOperatorAddress?: Maybe<BinanceAddressSelector>;
  validatorOperahraddress?: Maybe<BinanceAddressSelector>;
}

export enum BinanceBlockUniq {
  /** Validator operators */
  ValidatorOperatorAddresses = 'validator_operator_addresses',
  /** Validator fee addresses */
  ValidatorFeeAddresses = 'validator_fee_addresses',
  /** Unique date count */
  Dates = 'dates'
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
  ValidatorMoniker = 'validator_moniker'
}

/** Coinpath */
export interface BinanceCoinpath {
  __typename?: 'BinanceCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
}


/** Coinpath */
export interface BinanceCoinpathAmountArgs {
  in?: Maybe<BaseCurrencyEnum>;
}


/** Coinpath */
export interface BinanceCoinpathAnyArgs {
  of: CoinpathMeasureable;
}


/** Coinpath */
export interface BinanceCoinpathMaximumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}


/** Coinpath */
export interface BinanceCoinpathMinimumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}

/**
 * Binance token selector by tokenId.
 *     Native binance token has BNB symbol.
 *     Note that most Binance symbols has two dash separated parts, for example: 'TROY-9B8_BNB'
 */
export interface BinanceCurrencySelector {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

export interface BinanceOrderFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  orderOwner?: Maybe<Array<BinanceAddressSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
  orderType?: Maybe<Array<OrderTypeSelector>>;
  orderSide?: Maybe<Array<OrderSideSelector>>;
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
}

export enum BinanceOrderSide {
  /** Sell Side */
  Sell = 'sell',
  /** Buy Side */
  Buy = 'buy'
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
  IocExpire = 'IocExpire'
}

export enum BinanceOrderTimeInForce {
  /** Good Till Expiry */
  Gte = 'GTE',
  /** Immediate Or Cancel */
  Ioc = 'IOC'
}

export enum BinanceOrderType {
  /** Limit Order */
  LimitOrder = 'LimitOrder'
}

/** Binance DEX Order */
export interface BinanceOrders {
  __typename?: 'BinanceOrders';
  any?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['Float']>;
  baseCurrency?: Maybe<Currency>;
  /** Block where order transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Order ID */
  orderId?: Maybe<Scalars['String']>;
  /** Order owner address */
  orderOwner?: Maybe<Address>;
  /** Order Side */
  orderSide?: Maybe<BinanceOrderSide>;
  /** Order Status */
  orderStatus?: Maybe<BinanceOrderStatus>;
  /** Order Time In Force */
  orderTimeInForce?: Maybe<BinanceOrderTimeInForce>;
  /** Order Type */
  orderType?: Maybe<BinanceOrderType>;
  price?: Maybe<Scalars['Float']>;
  quoteAmount?: Maybe<Scalars['Float']>;
  quoteCurrency?: Maybe<Currency>;
  /** Transaction where order created */
  transaction?: Maybe<TransactionHash>;
}


/** Binance DEX Order */
export interface BinanceOrdersAnyArgs {
  of: BinanceOrdersMeasureable;
}


/** Binance DEX Order */
export interface BinanceOrdersBaseAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  orderOwner?: Maybe<Array<BinanceAddressSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
  orderType?: Maybe<Array<OrderTypeSelector>>;
  orderSide?: Maybe<Array<OrderSideSelector>>;
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersBaseCurrencyArgs {
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Binance DEX Order */
export interface BinanceOrdersCountArgs {
  uniq?: Maybe<BinanceOrdersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  orderOwner?: Maybe<Array<BinanceAddressSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
  orderType?: Maybe<Array<OrderTypeSelector>>;
  orderSide?: Maybe<Array<OrderSideSelector>>;
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersMaximumArgs {
  of: BinanceOrdersMeasureable;
  get?: Maybe<BinanceOrdersMeasureable>;
}


/** Binance DEX Order */
export interface BinanceOrdersMinimumArgs {
  of: BinanceOrdersMeasureable;
  get?: Maybe<BinanceOrdersMeasureable>;
}


/** Binance DEX Order */
export interface BinanceOrdersOrderIdArgs {
  orderId?: Maybe<Array<OrderIdSelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersOrderOwnerArgs {
  owner?: Maybe<Array<BinanceAddressSelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersOrderSideArgs {
  orderSide?: Maybe<Array<OrderSideSelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersOrderStatusArgs {
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersOrderTimeInForceArgs {
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersOrderTypeArgs {
  orderType?: Maybe<Array<OrderTypeSelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersQuoteAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  orderOwner?: Maybe<Array<BinanceAddressSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  orderStatus?: Maybe<Array<OrderStatusSelector>>;
  orderType?: Maybe<Array<OrderTypeSelector>>;
  orderSide?: Maybe<Array<OrderSideSelector>>;
  orderTimeInForce?: Maybe<Array<OrderTimeInForceSelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersQuoteCurrencyArgs {
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
}


/** Binance DEX Order */
export interface BinanceOrdersTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
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
  Price = 'price'
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
  Orders = 'orders'
}

export interface BinanceTradeFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<Array<BinanceAddressSelector>>;
  seller?: Maybe<Array<BinanceAddressSelector>>;
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
}

/** Binance DEX Trades */
export interface BinanceTrades {
  __typename?: 'BinanceTrades';
  any?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['Float']>;
  baseCurrency?: Maybe<Currency>;
  /** Block where trade transaction is included */
  block?: Maybe<Block>;
  /** Buy Order ID */
  buyOrderId?: Maybe<Scalars['String']>;
  /** Trade buyer address */
  buyer?: Maybe<Address>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quoteAmount?: Maybe<Scalars['Float']>;
  quoteCurrency?: Maybe<Currency>;
  /** Sell Order ID */
  sellOrderId?: Maybe<Scalars['String']>;
  /** Trade seller address */
  seller?: Maybe<Address>;
  /** Trade ID */
  tradeId?: Maybe<Scalars['String']>;
  /** Transaction where trade happened */
  transaction?: Maybe<TransactionHashIndex>;
}


/** Binance DEX Trades */
export interface BinanceTradesAnyArgs {
  of: BinanceTradesMeasureable;
}


/** Binance DEX Trades */
export interface BinanceTradesBaseAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<Array<BinanceAddressSelector>>;
  seller?: Maybe<Array<BinanceAddressSelector>>;
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
}


/** Binance DEX Trades */
export interface BinanceTradesBaseCurrencyArgs {
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
}


/** Binance DEX Trades */
export interface BinanceTradesBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Binance DEX Trades */
export interface BinanceTradesBuyOrderIdArgs {
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
}


/** Binance DEX Trades */
export interface BinanceTradesBuyerArgs {
  buyer?: Maybe<Array<BinanceAddressSelector>>;
}


/** Binance DEX Trades */
export interface BinanceTradesCountArgs {
  uniq?: Maybe<BinanceTradesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<Array<BinanceAddressSelector>>;
  seller?: Maybe<Array<BinanceAddressSelector>>;
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
}


/** Binance DEX Trades */
export interface BinanceTradesMaximumArgs {
  of: BinanceTradesMeasureable;
  get?: Maybe<BinanceTradesMeasureable>;
}


/** Binance DEX Trades */
export interface BinanceTradesMinimumArgs {
  of: BinanceTradesMeasureable;
  get?: Maybe<BinanceTradesMeasureable>;
}


/** Binance DEX Trades */
export interface BinanceTradesQuoteAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<Array<BinanceAddressSelector>>;
  seller?: Maybe<Array<BinanceAddressSelector>>;
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
  buyOrderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  baseCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
  quoteAmount?: Maybe<Array<AmountSelector>>;
  baseAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
}


/** Binance DEX Trades */
export interface BinanceTradesQuoteCurrencyArgs {
  quoteCurrency?: Maybe<Array<BinanceCurrencySelector>>;
}


/** Binance DEX Trades */
export interface BinanceTradesSellOrderIdArgs {
  sellOrderId?: Maybe<Array<OrderIdSelector>>;
}


/** Binance DEX Trades */
export interface BinanceTradesSellerArgs {
  seller?: Maybe<Array<BinanceAddressSelector>>;
}


/** Binance DEX Trades */
export interface BinanceTradesTradeIdArgs {
  tradeId?: Maybe<Array<TradeIdSelector>>;
}


/** Binance DEX Trades */
export interface BinanceTradesTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
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
  Price = 'price'
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
  Dates = 'dates'
}

export interface BinanceTransactionFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  transactionType?: Maybe<BinanceTransactionTypeSelector>;
  proposalId?: Maybe<StringIdSelector>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transactionCode?: Maybe<IntIdSelector>;
  transactionSource?: Maybe<IntIdSelector>;
  deposit?: Maybe<Array<AmountSelector>>;
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
  Unbind = 'UNBIND'
}

/** Select by transaction type */
export interface BinanceTransactionTypeSelector {
  /** Transaction Type is */
  is?: Maybe<BinanceTransactionType>;
  /** Transaction Type not */
  not?: Maybe<BinanceTransactionType>;
  /** Transaction Type in the list */
  in?: Maybe<Array<BinanceTransactionType>>;
  /** Transaction Type not in the list */
  notIn?: Maybe<Array<BinanceTransactionType>>;
}

/** Transaction */
export interface BinanceTransactions {
  __typename?: 'BinanceTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Currency issued in transaction */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Deposit amount in transaction */
  deposit?: Maybe<Scalars['Float']>;
  /** Transaction Description */
  description?: Maybe<Scalars['String']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** TX index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  /** Transaction Log */
  log?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Transaction Memo */
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Proposal ID */
  proposalId?: Maybe<Scalars['Int']>;
  /** Transaction Type */
  transactionCode?: Maybe<Scalars['Int']>;
  /** Transaction Source */
  transactionSource?: Maybe<TransactionSource>;
  /** Transaction Type */
  transactionType?: Maybe<BinanceTransactionType>;
}


/** Transaction */
export interface BinanceTransactionsAnyArgs {
  of: BinanceTransactionsMeasureable;
}


/** Transaction */
export interface BinanceTransactionsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transaction */
export interface BinanceTransactionsCountArgs {
  uniq?: Maybe<BinanceTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  transactionType?: Maybe<BinanceTransactionTypeSelector>;
  proposalId?: Maybe<StringIdSelector>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transactionCode?: Maybe<IntIdSelector>;
  transactionSource?: Maybe<IntIdSelector>;
  deposit?: Maybe<Array<AmountSelector>>;
}


/** Transaction */
export interface BinanceTransactionsCurrencyArgs {
  currency?: Maybe<Array<BinanceCurrencySelector>>;
}


/** Transaction */
export interface BinanceTransactionsDepositArgs {
  deposit?: Maybe<Array<AmountSelector>>;
}


/** Transaction */
export interface BinanceTransactionsHashArgs {
  txHash?: Maybe<Array<HashSelector>>;
}


/** Transaction */
export interface BinanceTransactionsMaximumArgs {
  of: BinanceTransactionsMeasureable;
  get?: Maybe<BinanceTransactionsMeasureable>;
}


/** Transaction */
export interface BinanceTransactionsMinimumArgs {
  of: BinanceTransactionsMeasureable;
  get?: Maybe<BinanceTransactionsMeasureable>;
}


/** Transaction */
export interface BinanceTransactionsProposalIdArgs {
  proposalId?: Maybe<Array<IntIdSelector>>;
}


/** Transaction */
export interface BinanceTransactionsTransactionCodeArgs {
  transactionCode?: Maybe<IntIdSelector>;
}


/** Transaction */
export interface BinanceTransactionsTransactionSourceArgs {
  transactionSource?: Maybe<IntIdSelector>;
}


/** Transaction */
export interface BinanceTransactionsTransactionTypeArgs {
  transactionType?: Maybe<Array<BinanceTransactionTypeSelector>>;
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
  CurrencySymbol = 'currency_symbol'
}

export enum BinanceTransactionsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique transaction source count */
  TransactionSources = 'transaction_sources'
}

export interface BinanceTransferFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  sender?: Maybe<Array<BinanceAddressSelector>>;
  receiver?: Maybe<Array<BinanceAddressSelector>>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  outputIndex?: Maybe<Array<OutputIndexSelector>>;
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
  Unbind = 'UNBIND'
}

/** Select transfer type(s) */
export interface BinanceTransferTypeSelector {
  /** Transfer type is */
  is?: Maybe<BinanceTransferType>;
  /** Transfer type not */
  not?: Maybe<BinanceTransferType>;
  /** Transfer type in the list */
  in?: Maybe<Array<BinanceTransferType>>;
  /** Transfer type not in the list */
  notIn?: Maybe<Array<BinanceTransferType>>;
}

/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfers {
  __typename?: 'BinanceTransfers';
  /** Transfer amount */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  /** Transfer count */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Order Id of trade where transfer happened */
  orderId?: Maybe<Scalars['String']>;
  /** Index of the output for the transfer, 0-based */
  outputIndex?: Maybe<Scalars['Int']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Id of trade where transfer happened */
  tradeId?: Maybe<Scalars['String']>;
  /** Transaction where transfer happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transfer type */
  transferType?: Maybe<BinanceTransferType>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  sender?: Maybe<Array<BinanceAddressSelector>>;
  receiver?: Maybe<Array<BinanceAddressSelector>>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  outputIndex?: Maybe<Array<OutputIndexSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersAnyArgs {
  of: BinanceTransfersMeasureable;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersCountArgs {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  sender?: Maybe<Array<BinanceAddressSelector>>;
  receiver?: Maybe<Array<BinanceAddressSelector>>;
  currency?: Maybe<Array<BinanceCurrencySelector>>;
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>;
  orderId?: Maybe<Array<OrderIdSelector>>;
  tradeId?: Maybe<Array<TradeIdSelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  outputIndex?: Maybe<Array<OutputIndexSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersCurrencyArgs {
  currency?: Maybe<Array<BinanceCurrencySelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersMaximumArgs {
  of: BinanceTransfersMeasureable;
  get?: Maybe<BinanceTransfersMeasureable>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersMinimumArgs {
  of: BinanceTransfersMeasureable;
  get?: Maybe<BinanceTransfersMeasureable>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersOrderIdArgs {
  orderId?: Maybe<Array<OrderIdSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersOutputIndexArgs {
  outputIndex?: Maybe<Array<OutputIndexSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersReceiverArgs {
  receiver?: Maybe<Array<BinanceAddressSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersSenderArgs {
  sender?: Maybe<Array<BinanceAddressSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersTradeIdArgs {
  tradeId?: Maybe<Array<TradeIdSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface BinanceTransfersTransferTypeArgs {
  transferType?: Maybe<Array<BinanceTransferTypeSelector>>;
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
  CurrencySymbol = 'currency_symbol'
}

/** Bitcoin and other UTXO type blockchains */
export interface Bitcoin {
  __typename?: 'Bitcoin';
  /** Blockchain Blocks */
  blocks?: Maybe<Array<BitcoinBlock>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<BitcoinCoinpath>>;
  /** Blockchain Transaction Inputs */
  inputs?: Maybe<Array<BitcoinTransactionInput>>;
  /** Blockchain Transaction Outputs */
  outputs?: Maybe<Array<BitcoinTransactionOutput>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<BitcoinTransaction>>;
}


/** Bitcoin and other UTXO type blockchains */
export interface BitcoinBlocksArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<StringIdSelector>;
  blockSize?: Maybe<IntegerSelector>;
  blockWeight?: Maybe<IntegerSelector>;
  blockVersion?: Maybe<IntegerSelector>;
  transactionCount?: Maybe<IntegerSelector>;
  blockStrippedSize?: Maybe<IntegerSelector>;
  difficulty?: Maybe<FloatSelector>;
  any?: Maybe<Array<BitcoinBlockFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Bitcoin and other UTXO type blockchains */
export interface BitcoinCoinpathArgs {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<BitcoinCoinpathOptions>;
}


/** Bitcoin and other UTXO type blockchains */
export interface BitcoinInputsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  inputIndex?: Maybe<IntegerSelector>;
  inputAddress?: Maybe<AddressSelector>;
  inOutputTxId?: Maybe<HashSelector>;
  inOutputIndex?: Maybe<IntegerSelector>;
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>;
  inputValue?: Maybe<FloatSelector>;
  any?: Maybe<Array<BitcoinInputFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Bitcoin and other UTXO type blockchains */
export interface BitcoinOutputsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  outputIndex?: Maybe<IntegerSelector>;
  outputAddress?: Maybe<AddressSelector>;
  outputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>;
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>;
  outputValue?: Maybe<FloatSelector>;
  any?: Maybe<Array<BitcoinOutputFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Bitcoin and other UTXO type blockchains */
export interface BitcoinTransactionsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
  any?: Maybe<Array<BitcoinTransactionFilter>>;
  options?: Maybe<QueryOptions>;
}

/** Block */
export interface BitcoinBlock {
  __typename?: 'BitcoinBlock';
  any?: Maybe<Scalars['String']>;
  /** Block Hash */
  blockHash?: Maybe<Scalars['String']>;
  /** Block size */
  blockSize?: Maybe<Scalars['Int']>;
  /** Block stripped size */
  blockStrippedSize?: Maybe<Scalars['Int']>;
  /** Block version */
  blockVersion?: Maybe<Scalars['Int']>;
  /** Block weight */
  blockWeight?: Maybe<Scalars['Int']>;
  /** Block chainwork */
  chainwork?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Difficulty */
  difficulty?: Maybe<Scalars['Float']>;
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  /** Block median timestamp */
  medianTime?: Maybe<DateTime>;
  minimum?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** Transaction count in block */
  transactionCount?: Maybe<Scalars['Int']>;
}


/** Block */
export interface BitcoinBlockAnyArgs {
  of: BitcoinBlocksMeasureable;
}


/** Block */
export interface BitcoinBlockBlockHashArgs {
  blockHash?: Maybe<StringIdSelector>;
}


/** Block */
export interface BitcoinBlockBlockSizeArgs {
  blockSize?: Maybe<IntegerSelector>;
}


/** Block */
export interface BitcoinBlockBlockStrippedSizeArgs {
  blockStrippedSize?: Maybe<IntegerSelector>;
}


/** Block */
export interface BitcoinBlockBlockVersionArgs {
  blockVersion?: Maybe<IntegerSelector>;
}


/** Block */
export interface BitcoinBlockBlockWeightArgs {
  blockWeight?: Maybe<IntegerSelector>;
}


/** Block */
export interface BitcoinBlockCountArgs {
  uniq?: Maybe<BitcoinBlockUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<StringIdSelector>;
  blockSize?: Maybe<IntegerSelector>;
  blockWeight?: Maybe<IntegerSelector>;
  blockVersion?: Maybe<IntegerSelector>;
  txCount?: Maybe<IntegerSelector>;
  blockStrippedSize?: Maybe<IntegerSelector>;
  difficulty?: Maybe<FloatSelector>;
}


/** Block */
export interface BitcoinBlockDifficultyArgs {
  difficulty?: Maybe<FloatSelector>;
}


/** Block */
export interface BitcoinBlockHeightArgs {
  height?: Maybe<BlockSelector>;
}


/** Block */
export interface BitcoinBlockMaximumArgs {
  of: BitcoinBlocksMeasureable;
  get?: Maybe<BitcoinBlocksMeasureable>;
}


/** Block */
export interface BitcoinBlockMinimumArgs {
  of: BitcoinBlocksMeasureable;
  get?: Maybe<BitcoinBlocksMeasureable>;
}


/** Block */
export interface BitcoinBlockTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Block */
export interface BitcoinBlockTransactionCountArgs {
  transactionCount?: Maybe<IntegerSelector>;
}

export interface BitcoinBlockFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<StringIdSelector>;
  blockSize?: Maybe<IntegerSelector>;
  blockWeight?: Maybe<IntegerSelector>;
  blockVersion?: Maybe<IntegerSelector>;
  transactionCount?: Maybe<IntegerSelector>;
  blockStrippedSize?: Maybe<IntegerSelector>;
  difficulty?: Maybe<FloatSelector>;
}

export enum BitcoinBlockUniq {
  /** Unique date count */
  Dates = 'dates'
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
  TransactionCount = 'transaction_count'
}

/** Coinpath */
export interface BitcoinCoinpath {
  __typename?: 'BitcoinCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashIndexValues>;
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>;
}


/** Coinpath */
export interface BitcoinCoinpathAmountArgs {
  in?: Maybe<BaseCurrencyEnum>;
}


/** Coinpath */
export interface BitcoinCoinpathAnyArgs {
  of: CoinpathMeasureable;
}


/** Coinpath */
export interface BitcoinCoinpathMaximumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}


/** Coinpath */
export interface BitcoinCoinpathMinimumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}

export enum BitcoinCoinpathMethod {
  /** Tracking money flow by amounts, ignoring coins (default) */
  Moneyflow = 'moneyflow',
  /** Tracking coins by UTXO transactions */
  Utxo = 'utxo'
}

/** Limits, Ordering, Constraints, Coinpath Options */
export interface BitcoinCoinpathOptions {
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>;
  /** Limit number of results by specific field */
  limitBy?: Maybe<LimitByOption>;
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>;
  /** Ordering field(s) for ascending */
  asc?: Maybe<Array<Scalars['String']>>;
  /** Ordering field(s) for descending */
  desc?: Maybe<Array<Scalars['String']>>;
  /** Flow direction */
  direction?: Maybe<FlowDirection>;
  /** Do not include transactions below this amount */
  minimumTxAmount?: Maybe<Scalars['Float']>;
  /** Do not expand addresses having count transactions more than this */
  maximumAddressTxCount?: Maybe<Scalars['Int']>;
  /** Maximum total transaction count returned */
  maximumTotalTxCount?: Maybe<Scalars['Int']>;
  /** Raise error if complexity ( currently measured in transaction count ) is higher than this option */
  complexityLimit?: Maybe<Scalars['Int']>;
  /** Invalidating cache seed */
  seed?: Maybe<Scalars['Int']>;
  /** Method to use coinpath */
  coinpathMethod?: Maybe<BitcoinCoinpathMethod>;
}

export interface BitcoinInputFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  inputIndex?: Maybe<IntegerSelector>;
  inputAddress?: Maybe<AddressSelector>;
  inOutputTxId?: Maybe<HashSelector>;
  inOutputIndex?: Maybe<IntegerSelector>;
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>;
  inputValue?: Maybe<FloatSelector>;
}

export enum BitcoinInputScriptType {
  /** Input Script Signature */
  ScriptSig = 'scriptSig',
  /** Input Script TX Witness Script */
  Txinwitness = 'txinwitness',
  /** Input Script Coinbase Script */
  Coinbase = 'coinbase'
}

/** Selector of input script type */
export interface BitcoinInputScriptTypeSelector {
  /** Equal to Script Type */
  is?: Maybe<BitcoinInputScriptType>;
  /** Not Equal to Script Type */
  not?: Maybe<BitcoinInputScriptType>;
  /** In the list of Script Type */
  in?: Maybe<Array<BitcoinInputScriptType>>;
  /** Not in the list of Script Type */
  notIn?: Maybe<Array<BitcoinInputScriptType>>;
}

export enum BitcoinInputUniq {
  /** Unique transactions count */
  Transactions = 'transactions',
  /** Unique block count */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique addresses count */
  Addresses = 'addresses'
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
  InputIndex = 'input_index'
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
  Zcash = 'zcash'
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
  Genesis = 'genesis'
}

/** A guessed direction of output */
export interface BitcoinOutputDirectionSelector {
  /** Equal to direction */
  is?: Maybe<BitcoinOutputDirection>;
  /** Not Equal to direction */
  not?: Maybe<BitcoinOutputDirection>;
  /** In the list of direction */
  in?: Maybe<Array<BitcoinOutputDirection>>;
  /** Not in the list of direction */
  notIn?: Maybe<Array<BitcoinOutputDirection>>;
}

export interface BitcoinOutputFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  outputIndex?: Maybe<IntegerSelector>;
  outputAddress?: Maybe<AddressSelector>;
  outputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>;
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>;
  outputValue?: Maybe<FloatSelector>;
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
  WitnessUnknown = 'witness_unknown'
}

/** Selector of output script type */
export interface BitcoinOutputScriptTypeSelector {
  /** Equal to Script Type */
  is?: Maybe<BitcoinOutputScriptType>;
  /** Not Equal to Script Type */
  not?: Maybe<BitcoinOutputScriptType>;
  /** In the list of Script Type */
  in?: Maybe<Array<BitcoinOutputScriptType>>;
  /** Not in the list of Script Type */
  notIn?: Maybe<Array<BitcoinOutputScriptType>>;
}

export enum BitcoinOutputUniq {
  /** Unique transactions count */
  Transactions = 'transactions',
  /** Unique block count */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique input addresses count */
  Addresses = 'addresses'
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
  OutputIndex = 'output_index'
}

/** Transaction */
export interface BitcoinTransaction {
  __typename?: 'BitcoinTransaction';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Transaction  count */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Transaction total fee value */
  feeValue?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
  /** Transaction total input count */
  inputCount?: Maybe<Scalars['Int']>;
  /** Transaction total input value */
  inputValue?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  /** Transaction total mined value */
  minedValue?: Maybe<Scalars['Float']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction total output count */
  outputCount?: Maybe<Scalars['Int']>;
  /** Transaction total output value */
  outputValue?: Maybe<Scalars['Float']>;
  /** Transaction is coinbase */
  txCoinbase?: Maybe<Scalars['Boolean']>;
  /** Transaction locktime */
  txLocktime?: Maybe<Scalars['BigInt']>;
  /** Transaction size */
  txSize?: Maybe<Scalars['Int']>;
  /** Transaction version */
  txVersion?: Maybe<Scalars['Int']>;
  /** Transaction vsize */
  txVsize?: Maybe<Scalars['Int']>;
  /** Transaction weight */
  txWeight?: Maybe<Scalars['Int']>;
}


/** Transaction */
export interface BitcoinTransactionAnyArgs {
  of: BitcoinTransactionsMeasureable;
}


/** Transaction */
export interface BitcoinTransactionBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transaction */
export interface BitcoinTransactionCountArgs {
  uniq?: Maybe<BitcoinTransactionUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionFeeValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionHashArgs {
  txHash?: Maybe<StringIdSelector>;
}


/** Transaction */
export interface BitcoinTransactionIndexArgs {
  txIndex?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionInputCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionInputValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionMaximumArgs {
  of: BitcoinTransactionsMeasureable;
  get?: Maybe<BitcoinTransactionsMeasureable>;
}


/** Transaction */
export interface BitcoinTransactionMinedValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionMinimumArgs {
  of: BitcoinTransactionsMeasureable;
  get?: Maybe<BitcoinTransactionsMeasureable>;
}


/** Transaction */
export interface BitcoinTransactionOutputCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionOutputValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionTxCoinbaseArgs {
  txCoinbase?: Maybe<Scalars['Boolean']>;
}


/** Transaction */
export interface BitcoinTransactionTxLocktimeArgs {
  txLocktime?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionTxSizeArgs {
  txSize?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionTxVersionArgs {
  txVersion?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionTxVsizeArgs {
  txVsize?: Maybe<IntegerSelector>;
}


/** Transaction */
export interface BitcoinTransactionTxWeightArgs {
  txWeight?: Maybe<IntegerSelector>;
}

export interface BitcoinTransactionFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  txSize?: Maybe<IntegerSelector>;
  txVsize?: Maybe<IntegerSelector>;
  txWeight?: Maybe<IntegerSelector>;
  txVersion?: Maybe<IntegerSelector>;
  txCoinbase?: Maybe<Scalars['Boolean']>;
  inputCount?: Maybe<IntegerSelector>;
  outputCount?: Maybe<IntegerSelector>;
  inputValue?: Maybe<FloatSelector>;
  outputValue?: Maybe<FloatSelector>;
  feeValue?: Maybe<FloatSelector>;
  minedValue?: Maybe<FloatSelector>;
  txLocktime?: Maybe<IntegerSelector>;
}

/** Transaction Input */
export interface BitcoinTransactionInput {
  __typename?: 'BitcoinTransactionInput';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Input count */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Input address */
  inputAddress?: Maybe<Address>;
  /** Input index */
  inputIndex?: Maybe<Scalars['Int']>;
  /** Input script */
  inputScript?: Maybe<Scalars['String']>;
  /** Input script type and attributes */
  inputScriptType?: Maybe<InputScript>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Output Transaction for this input */
  outputTransaction?: Maybe<TransactionHashIndex>;
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>;
  /** Input value */
  value?: Maybe<Scalars['Float']>;
}


/** Transaction Input */
export interface BitcoinTransactionInputAnyArgs {
  of: BitcoinInputsMeasureable;
}


/** Transaction Input */
export interface BitcoinTransactionInputBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transaction Input */
export interface BitcoinTransactionInputCountArgs {
  uniq?: Maybe<BitcoinInputUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  inputIndex?: Maybe<IntegerSelector>;
  inputAddress?: Maybe<AddressSelector>;
  inOutputTxId?: Maybe<HashSelector>;
  inOutputIndex?: Maybe<IntegerSelector>;
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>;
  inputValue?: Maybe<FloatSelector>;
}


/** Transaction Input */
export interface BitcoinTransactionInputInputAddressArgs {
  inputAddress?: Maybe<AddressSelector>;
}


/** Transaction Input */
export interface BitcoinTransactionInputInputIndexArgs {
  inputIndex?: Maybe<IntegerSelector>;
}


/** Transaction Input */
export interface BitcoinTransactionInputInputScriptTypeArgs {
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>;
}


/** Transaction Input */
export interface BitcoinTransactionInputMaximumArgs {
  of: BitcoinInputsMeasureable;
  get?: Maybe<BitcoinInputsMeasureable>;
}


/** Transaction Input */
export interface BitcoinTransactionInputMinimumArgs {
  of: BitcoinInputsMeasureable;
  get?: Maybe<BitcoinInputsMeasureable>;
}


/** Transaction Input */
export interface BitcoinTransactionInputOutputTransactionArgs {
  inOutputTxId?: Maybe<StringIdSelector>;
  inOutputIndex?: Maybe<IntegerSelector>;
}


/** Transaction Input */
export interface BitcoinTransactionInputTransactionArgs {
  txId?: Maybe<StringIdSelector>;
  txIndex?: Maybe<IntegerSelector>;
}


/** Transaction Input */
export interface BitcoinTransactionInputValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  inputIndex?: Maybe<IntegerSelector>;
  inputAddress?: Maybe<AddressSelector>;
  inOutputTxId?: Maybe<HashSelector>;
  inOutputIndex?: Maybe<IntegerSelector>;
  inputScriptType?: Maybe<BitcoinInputScriptTypeSelector>;
  inputValue?: Maybe<FloatSelector>;
}

/** Transaction Output */
export interface BitcoinTransactionOutput {
  __typename?: 'BitcoinTransactionOutput';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Output count */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Output address */
  outputAddress?: Maybe<Address>;
  /** Output guessed direction */
  outputDirection?: Maybe<BitcoinOutputDirection>;
  /** Output index */
  outputIndex?: Maybe<Scalars['Int']>;
  /** Output script */
  outputScript?: Maybe<Scalars['String']>;
  /** Output script type and attributes */
  outputScriptType?: Maybe<OutputScript>;
  reqSigs?: Maybe<Scalars['Int']>;
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>;
  /** Output value */
  value?: Maybe<Scalars['Float']>;
}


/** Transaction Output */
export interface BitcoinTransactionOutputAnyArgs {
  of: BitcoinOutputsMeasureable;
}


/** Transaction Output */
export interface BitcoinTransactionOutputBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transaction Output */
export interface BitcoinTransactionOutputCountArgs {
  uniq?: Maybe<BitcoinOutputUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  outputIndex?: Maybe<IntegerSelector>;
  outputAddress?: Maybe<AddressSelector>;
  outputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>;
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>;
  outputValue?: Maybe<FloatSelector>;
}


/** Transaction Output */
export interface BitcoinTransactionOutputMaximumArgs {
  of: BitcoinOutputsMeasureable;
  get?: Maybe<BitcoinOutputsMeasureable>;
}


/** Transaction Output */
export interface BitcoinTransactionOutputMinimumArgs {
  of: BitcoinOutputsMeasureable;
  get?: Maybe<BitcoinOutputsMeasureable>;
}


/** Transaction Output */
export interface BitcoinTransactionOutputOutputAddressArgs {
  outputAddress?: Maybe<AddressSelector>;
}


/** Transaction Output */
export interface BitcoinTransactionOutputOutputDirectionArgs {
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>;
}


/** Transaction Output */
export interface BitcoinTransactionOutputOutputIndexArgs {
  outputIndex?: Maybe<IntegerSelector>;
}


/** Transaction Output */
export interface BitcoinTransactionOutputOutputScriptTypeArgs {
  inputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>;
}


/** Transaction Output */
export interface BitcoinTransactionOutputTransactionArgs {
  txId?: Maybe<StringIdSelector>;
  txIndex?: Maybe<IntegerSelector>;
}


/** Transaction Output */
export interface BitcoinTransactionOutputValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<IntegerSelector>;
  outputIndex?: Maybe<IntegerSelector>;
  outputAddress?: Maybe<AddressSelector>;
  outputScriptType?: Maybe<BitcoinOutputScriptTypeSelector>;
  outputDirection?: Maybe<BitcoinOutputDirectionSelector>;
  outputValue?: Maybe<FloatSelector>;
}

export enum BitcoinTransactionUniq {
  /** Unique block count */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates'
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
  OutputValue = 'output_value'
}

/** Block */
export interface Block {
  __typename?: 'Block';
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
}

/** BlockExtended */
export interface BlockExtended {
  __typename?: 'BlockExtended';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
}

/** ConfluxBlock */
export interface BlockInfo {
  __typename?: 'BlockInfo';
  /** Block hash */
  hash?: Maybe<Scalars['String']>;
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
}

/** Select block by height ( sequence number) */
export interface BlockSelector {
  /** Block height is */
  is?: Maybe<Scalars['Int']>;
  /** Block height not */
  not?: Maybe<Scalars['Int']>;
  /** Block height in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Block height not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** Block height greater than */
  gt?: Maybe<Scalars['Int']>;
  /** Block height less than */
  lt?: Maybe<Scalars['Int']>;
  /** Block height less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** Block height greater or equal than */
  gteq?: Maybe<Scalars['Int']>;
  /** Block height in range */
  between?: Maybe<Array<Scalars['Int']>>;
}

/** Select block by height ( sequence number) */
export interface BlockSelectorRange {
  /** Block height less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** Block height greater or equal than */
  gteq?: Maybe<Scalars['Int']>;
  /** Block height in range */
  between?: Maybe<Array<Scalars['Int']>>;
}

/** Blockchain network */
export interface BlockchainNetwork {
  __typename?: 'BlockchainNetwork';
  /** Network name */
  network: Network;
  /** Network protocol type */
  protocol: Protocol;
}

/** Transaction attributes in coinpath */
export interface CoinpathEntry {
  __typename?: 'CoinpathEntry';
  /** Amount involved in the flow */
  amount: Scalars['Float'];
  /** Block of transaction */
  height: Scalars['Int'];
  /** Time of transaction in ISO 8601 format */
  timestamp: Scalars['ISO8601DateTime'];
  /** Hash of transaction */
  txHash: Scalars['String'];
  /** Amount transfered in transaction */
  txValue: Scalars['Float'];
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
  Depth = 'depth'
}

/** Limits, Ordering, Constraints, Coinpath Options */
export interface CoinpathOptions {
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>;
  /** Limit number of results by specific field */
  limitBy?: Maybe<LimitByOption>;
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>;
  /** Ordering field(s) for ascending */
  asc?: Maybe<Array<Scalars['String']>>;
  /** Ordering field(s) for descending */
  desc?: Maybe<Array<Scalars['String']>>;
  /** Flow direction */
  direction?: Maybe<FlowDirection>;
  /** Do not include transactions below this amount */
  minimumTxAmount?: Maybe<Scalars['Float']>;
  /** Do not expand addresses having count transactions more than this */
  maximumAddressTxCount?: Maybe<Scalars['Int']>;
  /** Maximum total transaction count returned */
  maximumTotalTxCount?: Maybe<Scalars['Int']>;
  /** Raise error if complexity ( currently measured in transaction count ) is higher than this option */
  complexityLimit?: Maybe<Scalars['Int']>;
  /** Invalidating cache seed */
  seed?: Maybe<Scalars['Int']>;
}

/** Conflux Chain */
export interface Conflux {
  __typename?: 'Conflux';
  /** Basic information about address ( or smart contract ) */
  address: Array<EthereumAddressInfoWithBalance>;
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<EthereumArguments>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<ConfluxBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EthereumCoinpath>>;
  /** Trades on Ethereum DEX Smart Contracts */
  dexTrades?: Maybe<Array<EthereumDexTrades>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EthereumSmartContractCalls>>;
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<EthereumSmartContractEvent>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<ConfluxTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<EthereumTransfers>>;
}


/** Conflux Chain */
export interface ConfluxAddressArgs {
  address: Array<EthereumAddressSelectorIn>;
}


/** Conflux Chain */
export interface ConfluxArgumentsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<EthereumArgumentFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Conflux Chain */
export interface ConfluxBlocksArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<ConfluxBlockFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Conflux Chain */
export interface ConfluxCoinpathArgs {
  sender?: Maybe<EthereumAddressSelector>;
  receiver?: Maybe<EthereumAddressSelector>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  initialAddress?: Maybe<EthereumAddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
}


/** Conflux Chain */
export interface ConfluxDexTradesArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
  any?: Maybe<Array<EthereumDexTradeFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Conflux Chain */
export interface ConfluxSmartContractCallsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
  any?: Maybe<Array<EthereumSmartContractCallFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Conflux Chain */
export interface ConfluxSmartContractEventsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: Maybe<EventSelector>;
  any?: Maybe<Array<EthereumSmartContractEventFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Conflux Chain */
export interface ConfluxTransactionsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
  any?: Maybe<Array<ConfluxTransactionFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Conflux Chain */
export interface ConfluxTransfersArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<EthereumTransferFilter>>;
  options?: Maybe<QueryOptions>;
}

export interface ConfluxBlockFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}

/** Blocks in Conflux blockchain */
export interface ConfluxBlocks {
  __typename?: 'ConfluxBlocks';
  /** Block is adaptive */
  adaptive: Scalars['Boolean'];
  any?: Maybe<Scalars['String']>;
  /** Blame */
  blame: Scalars['Int'];
  /** Block index in epoch */
  blockPosition: Scalars['Int'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Epoch in blockchain */
  epoch: Scalars['Int'];
  /** Block hash */
  hash: Scalars['String'];
  /** Block height in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  /** Block miner */
  miner?: Maybe<EthereumAddressInfo>;
  minimum?: Maybe<Scalars['String']>;
  /** Block nonce */
  nonce: Scalars['Int'];
  /** Parent block hash */
  parentHash: Scalars['String'];
  /** Block is pivot */
  pivot: Scalars['Boolean'];
  /** Power Quality */
  powerQuality: Scalars['BigInt'];
  refereeCount?: Maybe<Scalars['Int']>;
  /** Reference Block hash */
  referenceBlockHash: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  transactionCount?: Maybe<Scalars['Int']>;
  /** Hash of Transaction included in block */
  txHash: Scalars['String'];
  uncleCount?: Maybe<Scalars['Int']>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksAnyArgs {
  of: ConfluxBlocksMeasureable;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksCountArgs {
  uniq?: Maybe<EthereumBlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksEpochArgs {
  height?: Maybe<BlockSelector>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksHashArgs {
  blockHash?: Maybe<Array<HashSelector>>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksHeightArgs {
  height?: Maybe<BlockSelector>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksMaximumArgs {
  of: ConfluxBlocksMeasureable;
  get?: Maybe<ConfluxBlocksMeasureable>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksMinerArgs {
  miner?: Maybe<Array<EthereumAddressSelector>>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksMinimumArgs {
  of: ConfluxBlocksMeasureable;
  get?: Maybe<ConfluxBlocksMeasureable>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksRefereeCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksReferenceBlockHashArgs {
  referenceBlockHash?: Maybe<Array<HashSelector>>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksSizeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksTotalDifficultyArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksTransactionCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksTxHashArgs {
  txHash?: Maybe<Array<HashSelector>>;
}


/** Blocks in Conflux blockchain */
export interface ConfluxBlocksUncleCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  epoch?: Maybe<BlockSelector>;
  pivot?: Maybe<Scalars['Boolean']>;
  blockHash?: Maybe<HashSelector>;
  referenceBlockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  refereeCount?: Maybe<Array<IntegerSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
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
  TransactionCount = 'transaction_count'
}

export enum ConfluxNetwork {
  /** Conflux Oceanus */
  ConfluxOceanus = 'conflux_oceanus',
  /** Conflux Tethys */
  ConfluxTethys = 'conflux_tethys'
}

export interface ConfluxTransactionFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
}

/** Transactions in Conflux blockchain */
export interface ConfluxTransactions {
  __typename?: 'ConfluxTransactions';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<BlockInfo>;
  count?: Maybe<Scalars['Int']>;
  /** Created smart contract */
  creates?: Maybe<EthereumAddressInfo>;
  /** Currency of amount */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Error message if any */
  error?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['Int']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** Transaction sender */
  sender?: Maybe<EthereumAddressInfo>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsAnyArgs {
  of: ConfluxTransactionsMeasureable;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsBlockArgs {
  blockHash?: Maybe<HashSelector>;
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsCountArgs {
  uniq?: Maybe<EthereumTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsCreatesArgs {
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsGasArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsGasCurrencyArgs {
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsGasPriceArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsGasValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  blockHash?: Maybe<HashSelector>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsHashArgs {
  txHash?: Maybe<Array<HashSelector>>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsIndexArgs {
  txIndex?: Maybe<Array<TxIndexSelector>>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsMaximumArgs {
  of: ConfluxTransactionsMeasureable;
  get?: Maybe<ConfluxTransactionsMeasureable>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsMinimumArgs {
  of: ConfluxTransactionsMeasureable;
  get?: Maybe<ConfluxTransactionsMeasureable>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsSenderArgs {
  txSender?: Maybe<Array<EthereumAddressSelector>>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Transactions in Conflux blockchain */
export interface ConfluxTransactionsToArgs {
  txTo?: Maybe<Array<EthereumAddressSelector>>;
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
  Gas = 'gas'
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
  Antarctica = 'Antarctica'
}

/** Continent selector */
export interface ContinentSelector {
  /** Country code is */
  is?: Maybe<Continent>;
  /** Country code not */
  not?: Maybe<Continent>;
  /** Country code in the list */
  in?: Maybe<Array<Continent>>;
  /** Country code not in the list */
  notIn?: Maybe<Array<Continent>>;
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
  Zw = 'ZW'
}

/** Country selector by 3 digit ISO code */
export interface CountrySelector {
  /** Country code is */
  is?: Maybe<CountryCode>;
  /** Country code not */
  not?: Maybe<CountryCode>;
  /** Country code in the list */
  in?: Maybe<Array<CountryCode>>;
  /** Country code not in the list */
  notIn?: Maybe<Array<CountryCode>>;
}

/** Country */
export interface CovidCountry {
  __typename?: 'CovidCountry';
  /** Area, km2 */
  areaKm2?: Maybe<Scalars['Float']>;
  /** Continent name */
  continent?: Maybe<Continent>;
  /** Gross Domestic Product */
  gdp?: Maybe<Scalars['Float']>;
  /** ISO 2 letter code */
  iso2?: Maybe<CountryCode>;
  /** ISO 3 letter code */
  iso3?: Maybe<Scalars['String']>;
  /** ISO numeric code */
  isoNumeric?: Maybe<Scalars['Int']>;
  /** Location latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Location longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Country name */
  name?: Maybe<Scalars['String']>;
  /** Population density in thousands per km2 */
  populationPerKm2?: Maybe<Scalars['Float']>;
  /** Population total in thousands */
  populationTotal?: Maybe<Scalars['Float']>;
}

/** Facts of Covid virus development */
export interface CovidFact {
  __typename?: 'CovidFact';
  /** Count of confirmed cases */
  confirmed?: Maybe<Scalars['Int']>;
  /** Country */
  country?: Maybe<CovidCountry>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Count of death cases */
  deaths?: Maybe<Scalars['Int']>;
  /** Location */
  location?: Maybe<CovidLocation>;
  /** Count of recovered cases */
  recovered?: Maybe<Scalars['Int']>;
}


/** Facts of Covid virus development */
export interface CovidFactConfirmedArgs {
  date?: Maybe<DateSelector>;
  country?: Maybe<CountrySelector>;
  continent?: Maybe<ContinentSelector>;
}


/** Facts of Covid virus development */
export interface CovidFactCountryArgs {
  country?: Maybe<CountrySelector>;
  continent?: Maybe<ContinentSelector>;
}


/** Facts of Covid virus development */
export interface CovidFactDeathsArgs {
  date?: Maybe<DateSelector>;
  country?: Maybe<CountrySelector>;
  continent?: Maybe<ContinentSelector>;
}


/** Facts of Covid virus development */
export interface CovidFactRecoveredArgs {
  date?: Maybe<DateSelector>;
  country?: Maybe<CountrySelector>;
  continent?: Maybe<ContinentSelector>;
}

/** Covid History */
export interface CovidHistory {
  __typename?: 'CovidHistory';
  /** COVID daily facts */
  facts?: Maybe<Array<CovidFact>>;
}


/** Covid History */
export interface CovidHistoryFactsArgs {
  date?: Maybe<DateSelector>;
  country?: Maybe<CountrySelector>;
  continent?: Maybe<ContinentSelector>;
  options?: Maybe<QueryOptions>;
}

/** Geo Location */
export interface CovidLocation {
  __typename?: 'CovidLocation';
  /** Admin center name */
  adminCenter?: Maybe<Scalars['String']>;
  /** FIPS code for USA */
  fipsCode?: Maybe<Scalars['Int']>;
  /** Location latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Location longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Location Country name */
  name?: Maybe<Scalars['String']>;
  /** Location Province / State name */
  province?: Maybe<Scalars['String']>;
}

/** Crypto currency ( token, coin, currency ) */
export interface Currency {
  __typename?: 'Currency';
  /** Token Smart Contract Address */
  address?: Maybe<Scalars['String']>;
  /** Decimals */
  decimals: Scalars['Int'];
  /** Currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol */
  symbol: Scalars['String'];
  /** Token ID */
  tokenId?: Maybe<Scalars['String']>;
  /** Token Type */
  tokenType?: Maybe<Scalars['String']>;
}

/** Date */
export interface Date {
  __typename?: 'Date';
  /** String date representation with default format as YYYY-MM-DD */
  date: Scalars['String'];
  /** Day of month (1-31) */
  dayOfMonth: Scalars['Int'];
  /** Day of week  (Monday is 1, and Sunday is 7) */
  dayOfWeek: Scalars['Int'];
  /** Month number (1-12) */
  month: Scalars['Int'];
  /**
   * Returns start of date interval ,
   *     date representation with default format as YYYY-MM-DD. Example is start of interval for 3 weeks each,
   *   starting on wednesdays will read as: 'startOfInterval(unit: week, interval: 3, offset: 2)'
   */
  startOfInterval: Scalars['String'];
  /** Year number */
  year: Scalars['Int'];
}


/** Date */
export interface DateDateArgs {
  format?: Maybe<Scalars['String']>;
}


/** Date */
export interface DateStartOfIntervalArgs {
  format?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  unit: DateInterval;
}

export enum DateInterval {
  /** Year */
  Year = 'year',
  /** Month */
  Month = 'month',
  /** Week */
  Week = 'week',
  /** Day */
  Day = 'day'
}

/** Selecting the date in a range, list or just date */
export interface DateSelector {
  /** Since date */
  since?: Maybe<Scalars['ISO8601DateTime']>;
  /** Till date */
  till?: Maybe<Scalars['ISO8601DateTime']>;
  /** Range of dates */
  between?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Before date */
  before?: Maybe<Scalars['ISO8601DateTime']>;
  /** After date */
  after?: Maybe<Scalars['ISO8601DateTime']>;
  /** In dates */
  in?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Not in dates */
  notIn?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Date equals */
  is?: Maybe<Scalars['ISO8601DateTime']>;
  /** Date not equals */
  not?: Maybe<Scalars['ISO8601DateTime']>;
}

/** Date and Time */
export interface DateTime {
  __typename?: 'DateTime';
  /** Day of month (1-31) */
  dayOfMonth: Scalars['Int'];
  /** Day of week  (Monday is 1, and Sunday is 7) */
  dayOfWeek: Scalars['Int'];
  /** Hour (0-23) */
  hour: Scalars['Int'];
  /** ISO8601 date time such as '2020-03-02T13:30:41+00:00' */
  iso8601: Scalars['ISO8601DateTime'];
  /** Minute (0-59) */
  minute: Scalars['Int'];
  /** Month number (1-12) */
  month: Scalars['Int'];
  /** Second (0-59) */
  second: Scalars['Int'];
  /** String date representation with default format as YYYY-MM-DD */
  time: Scalars['String'];
  /** Unix timestamp */
  unixtime: Scalars['Int'];
  /** Year number */
  year: Scalars['Int'];
}


/** Date and Time */
export interface DateTimeTimeArgs {
  format?: Maybe<Scalars['String']>;
}

/** Selecting the time in a range, list or just time */
export interface DateTimeSelector {
  /** Since time */
  since?: Maybe<Scalars['ISO8601DateTime']>;
  /** Till time */
  till?: Maybe<Scalars['ISO8601DateTime']>;
  /** Range of time */
  between?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Before time */
  before?: Maybe<Scalars['ISO8601DateTime']>;
  /** After time */
  after?: Maybe<Scalars['ISO8601DateTime']>;
  /** In times */
  in?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Not in times */
  notIn?: Maybe<Array<Scalars['ISO8601DateTime']>>;
  /** Time equals */
  is?: Maybe<Scalars['ISO8601DateTime']>;
  /** Time not equals */
  not?: Maybe<Scalars['ISO8601DateTime']>;
}

export enum DiemNetwork {
  /** Diem Testnet */
  DiemTestnet = 'diem_testnet',
  /** Libra Testnet */
  LibraTestnet = 'libra_testnet'
}

/** Entity */
export interface Entity {
  __typename?: 'Entity';
  /** Entity ID */
  id: Scalars['String'];
  /** Entity number */
  num: Scalars['Int'];
  /** Entity realm ID */
  realmId: Scalars['Int'];
  /** Entity shard ID */
  shardId: Scalars['Int'];
  /** Entity Type */
  type: Scalars['String'];
}


/** Entity */
export interface EntityIdArgs {
  entityId?: Maybe<Scalars['String']>;
}

/** Selector of entity ID for NFT  tokens */
export interface EntitySelector {
  /** EntityID is */
  is?: Maybe<Scalars['String']>;
  /** EntityID not */
  not?: Maybe<Scalars['String']>;
  /** EntityID in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** EntityID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
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
  /** schedule */
  Schedule = 'schedule'
}

/** Select by entity type */
export interface EntityTypeSelector {
  /** Type is */
  is?: Maybe<EntityTypeEnum>;
  /** Type not */
  not?: Maybe<EntityTypeEnum>;
  /** Type in the list */
  in?: Maybe<Array<EntityTypeEnum>>;
  /** Type not in the list */
  notIn?: Maybe<Array<EntityTypeEnum>>;
}

/** EOS Chain */
export interface Eos {
  __typename?: 'Eos';
  /** Basic information about address ( or smart contract ) */
  address: Array<EosAddressInfo>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<EosBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EosCoinpath>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EosSmartContractCalls>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<EosTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<EosTransfers>>;
}


/** EOS Chain */
export interface EosAddressArgs {
  address: Array<AddressSelectorIn>;
}


/** EOS Chain */
export interface EosBlocksArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<AddressSelector>;
  any?: Maybe<Array<EosBlockFilter>>;
  options?: Maybe<QueryOptions>;
}


/** EOS Chain */
export interface EosCoinpathArgs {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<EosCurrencySelector>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
}


/** EOS Chain */
export interface EosSmartContractCallsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<EosSmartContractCallFilter>>;
  options?: Maybe<QueryOptions>;
}


/** EOS Chain */
export interface EosTransactionsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<EosTransactionFilter>>;
  options?: Maybe<QueryOptions>;
}


/** EOS Chain */
export interface EosTransfersArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<EosCurrencySelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<EosTransferFilter>>;
  options?: Maybe<QueryOptions>;
}

/** Address detailed information for EOS network */
export interface EosAddressInfo {
  __typename?: 'EosAddressInfo';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EosSmartContractInfo>;
}

export interface EosBlockFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<AddressSelector>;
}

/** Blocks in EOS blockchain */
export interface EosBlocks {
  __typename?: 'EosBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block producer */
  producer?: Maybe<Address>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
}


/** Blocks in EOS blockchain */
export interface EosBlocksAnyArgs {
  of: EosBlocksMeasureable;
}


/** Blocks in EOS blockchain */
export interface EosBlocksCountArgs {
  uniq?: Maybe<EosBlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  proposer?: Maybe<AddressSelector>;
}


/** Blocks in EOS blockchain */
export interface EosBlocksHashArgs {
  blockHash?: Maybe<Array<HashSelector>>;
}


/** Blocks in EOS blockchain */
export interface EosBlocksHeightArgs {
  height?: Maybe<BlockSelector>;
}


/** Blocks in EOS blockchain */
export interface EosBlocksMaximumArgs {
  of: EosBlocksMeasureable;
  get?: Maybe<EosBlocksMeasureable>;
}


/** Blocks in EOS blockchain */
export interface EosBlocksMinimumArgs {
  of: EosBlocksMeasureable;
  get?: Maybe<EosBlocksMeasureable>;
}


/** Blocks in EOS blockchain */
export interface EosBlocksProducerArgs {
  producer?: Maybe<AddressSelector>;
}


/** Blocks in EOS blockchain */
export interface EosBlocksTimestampArgs {
  time?: Maybe<DateTimeSelector>;
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
  Proposer = 'proposer'
}

export enum EosBlocksUniq {
  /** Unique proposer count */
  Proposers = 'proposers',
  /** Unique date count */
  Dates = 'dates'
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
  CallDepth = 'call_depth'
}

/** Coinpath */
export interface EosCoinpath {
  __typename?: 'EosCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<EosAddressInfo>;
  /** Sender address */
  sender?: Maybe<EosAddressInfo>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
}


/** Coinpath */
export interface EosCoinpathAmountArgs {
  in?: Maybe<BaseCurrencyEnum>;
}


/** Coinpath */
export interface EosCoinpathAnyArgs {
  of: CoinpathMeasureable;
}


/** Coinpath */
export interface EosCoinpathMaximumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}


/** Coinpath */
export interface EosCoinpathMinimumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}

/**
 * Currency selector in EOS blockchain.
 * Token identified by address of contract ( eosio.token for main EOS token )
 */
export interface EosCurrencySelector {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Eos smart contract */
export interface EosSmartContract {
  __typename?: 'EosSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
}

export interface EosSmartContractCallFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
}

/** Smart Contract Calls */
export interface EosSmartContractCalls {
  __typename?: 'EosSmartContractCalls';
  /** Actors */
  actors?: Maybe<Scalars['String']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Console */
  console?: Maybe<Scalars['String']>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Error Code */
  errorCode?: Maybe<Scalars['Int']>;
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Permissions */
  permissions?: Maybe<Scalars['String']>;
  /** Receivers */
  receivers?: Maybe<Scalars['String']>;
  /** True if call scheduled */
  scheduled?: Maybe<Scalars['Boolean']>;
  /** Smart contract being called */
  smartContract?: Maybe<EosSmartContract>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsAnyArgs {
  of: EosCallsMeasureable;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsCountArgs {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsErrorCodeArgs {
  errorCode?: Maybe<IntIdSelector>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsExternalArgs {
  external?: Maybe<Scalars['Boolean']>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsMaximumArgs {
  of: EosCallsMeasureable;
  get?: Maybe<EosCallsMeasureable>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsMinimumArgs {
  of: EosCallsMeasureable;
  get?: Maybe<EosCallsMeasureable>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsScheduledArgs {
  scheduled?: Maybe<Array<Scalars['Boolean']>>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsSmartContractArgs {
  smartContractAddress?: Maybe<AddressSelector>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsSmartContractMethodArgs {
  smartContractMethod?: Maybe<MethodSelector>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsSuccessArgs {
  success?: Maybe<Array<Scalars['Boolean']>>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsTxFromArgs {
  txFrom?: Maybe<AddressSelector>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsTxHashArgs {
  txHash?: Maybe<HashSelector>;
}


/** Smart Contract Calls */
export interface EosSmartContractCallsTxToArgs {
  txTo?: Maybe<AddressSelector>;
}

/** Blockchain smart contract */
export interface EosSmartContractInfo {
  __typename?: 'EosSmartContractInfo';
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
}

export interface EosTransactionFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
}

/** Transactions in EOS blockchain */
export interface EosTransactions {
  __typename?: 'EosTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  cpuUsageUs?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsageWords?: Maybe<Scalars['Int']>;
  /** Success */
  scheduled?: Maybe<Scalars['Boolean']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsAnyArgs {
  of: EosTransactionsMeasureable;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsCountArgs {
  uniq?: Maybe<EosTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsCpuUsageUsArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsHashArgs {
  txHash?: Maybe<Array<HashSelector>>;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsIndexArgs {
  txIndex?: Maybe<Array<TxIndexSelector>>;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsMaximumArgs {
  of: EosTransactionsMeasureable;
  get?: Maybe<EosTransactionsMeasureable>;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsMinimumArgs {
  of: EosTransactionsMeasureable;
  get?: Maybe<EosTransactionsMeasureable>;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsNetUsageWordsArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  scheduled?: Maybe<Scalars['Boolean']>;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsScheduledArgs {
  scheduled?: Maybe<Scalars['Boolean']>;
}


/** Transactions in EOS blockchain */
export interface EosTransactionsSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
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
  NetUsageWords = 'net_usage_words'
}

export enum EosTransactionsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates'
}

export interface EosTransferFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<EosCurrencySelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}

/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfers {
  __typename?: 'EosTransfers';
  /** Actors */
  actors?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>;
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  maximum?: Maybe<Scalars['String']>;
  /** Memo */
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<EosCurrencySelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersAnyArgs {
  of: EosTransfersMeasureable;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersCountArgs {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<EosCurrencySelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersCurrencyArgs {
  currency?: Maybe<EosCurrencySelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersEntityIdArgs {
  entityId?: Maybe<EntitySelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersExternalArgs {
  external?: Maybe<Scalars['Boolean']>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersMaximumArgs {
  of: EosTransfersMeasureable;
  get?: Maybe<EosTransfersMeasureable>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersMinimumArgs {
  of: EosTransfersMeasureable;
  get?: Maybe<EosTransfersMeasureable>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersReceiverArgs {
  receiver?: Maybe<AddressSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersSenderArgs {
  sender?: Maybe<AddressSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersTxFromArgs {
  txFrom?: Maybe<AddressSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersTxHashArgs {
  txHash?: Maybe<HashSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EosTransfersTxToArgs {
  txTo?: Maybe<AddressSelector>;
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
  CurrencyAddress = 'currency_address'
}

/** Ethereum Chain */
export interface Ethereum {
  __typename?: 'Ethereum';
  /** Basic information about address ( or smart contract ) */
  address: Array<EthereumAddressInfoWithBalance>;
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<EthereumArguments>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<EthereumBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EthereumCoinpath>>;
  /** Trades on Ethereum DEX Smart Contracts */
  dexTrades?: Maybe<Array<EthereumDexTrades>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EthereumSmartContractCalls>>;
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<EthereumSmartContractEvent>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<EthereumTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<EthereumTransfers>>;
}


/** Ethereum Chain */
export interface EthereumAddressArgs {
  address: Array<EthereumAddressSelectorIn>;
}


/** Ethereum Chain */
export interface EthereumArgumentsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<EthereumArgumentFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum Chain */
export interface EthereumBlocksArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<EthereumBlockFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum Chain */
export interface EthereumCoinpathArgs {
  sender?: Maybe<EthereumAddressSelector>;
  receiver?: Maybe<EthereumAddressSelector>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  initialAddress?: Maybe<EthereumAddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
}


/** Ethereum Chain */
export interface EthereumDexTradesArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
  any?: Maybe<Array<EthereumDexTradeFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum Chain */
export interface EthereumSmartContractCallsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
  any?: Maybe<Array<EthereumSmartContractCallFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum Chain */
export interface EthereumSmartContractEventsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: Maybe<EventSelector>;
  any?: Maybe<Array<EthereumSmartContractEventFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum Chain */
export interface EthereumTransactionsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<EthereumTransactionFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum Chain */
export interface EthereumTransfersArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<EthereumTransferFilter>>;
  options?: Maybe<QueryOptions>;
}

/** Ethereum v 2.0 Baecon Chain */
export interface Ethereum2 {
  __typename?: 'Ethereum2';
  /** Attestations in block */
  attestations?: Maybe<Array<Ethereum2Attestation>>;
  /** Attester Slashings */
  attesterSlashings?: Maybe<Array<Ethereum2AttesterSlashing>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<Ethereum2Blocks>>;
  /** Attestations of blocks */
  deposits?: Maybe<Array<Ethereum2Deposit>>;
  /** Proposer Slashings */
  proposerSlashings?: Maybe<Array<Ethereum2ProposerSlashing>>;
  /** Voluntary Exits */
  voluntaryExits?: Maybe<Array<Ethereum2VoluntaryExit>>;
}


/** Ethereum v 2.0 Baecon Chain */
export interface Ethereum2AttestationsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  committeeIndex?: Maybe<Array<IntegerSelector>>;
  attestationSlot?: Maybe<Array<IntegerSelector>>;
  attestationEpoch?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum v 2.0 Baecon Chain */
export interface Ethereum2AttesterSlashingsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  attestationSlot?: Maybe<Array<IntegerSelector>>;
  attestationEpoch?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum v 2.0 Baecon Chain */
export interface Ethereum2BlocksArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum v 2.0 Baecon Chain */
export interface Ethereum2DepositsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum v 2.0 Baecon Chain */
export interface Ethereum2ProposerSlashingsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  slashingProposerIndex?: Maybe<Array<IntegerSelector>>;
  slashingSlot?: Maybe<Array<IntegerSelector>>;
  slashingEpoch?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
}


/** Ethereum v 2.0 Baecon Chain */
export interface Ethereum2VoluntaryExitsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  voluntaryExitEpoch?: Maybe<Array<IntegerSelector>>;
  any?: Maybe<Array<Ethereum2Filter>>;
  options?: Maybe<QueryOptions>;
}

/** Attestations in Ethereum v2.0 blockchain */
export interface Ethereum2Attestation {
  __typename?: 'Ethereum2Attestation';
  aggregationBits: Scalars['String'];
  any?: Maybe<Scalars['String']>;
  attestation: Ethereum2AttestationInfo;
  /** Attestation Index (0 based ) in block */
  attestationIndex: Scalars['Int'];
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  /** Committee index for attestation */
  committeeIndex: Scalars['Int'];
  count?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
  /** Sequential index of validator in committee ( 0-based) */
  validatorInCommitteeIndex: Scalars['Int'];
}


/** Attestations in Ethereum v2.0 blockchain */
export interface Ethereum2AttestationAnyArgs {
  of: Ethereum2AttestationsMeasureable;
}


/** Attestations in Ethereum v2.0 blockchain */
export interface Ethereum2AttestationBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Attestations in Ethereum v2.0 blockchain */
export interface Ethereum2AttestationBlockRootArgs {
  blockRootHash?: Maybe<Array<HashSelector>>;
}


/** Attestations in Ethereum v2.0 blockchain */
export interface Ethereum2AttestationCountArgs {
  uniq?: Maybe<Ethereum2AttestationsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  committeeIndex?: Maybe<Array<IntegerSelector>>;
  attestationSlot?: Maybe<Array<IntegerSelector>>;
  attestationEpoch?: Maybe<Array<IntegerSelector>>;
}


/** Attestations in Ethereum v2.0 blockchain */
export interface Ethereum2AttestationMaximumArgs {
  of: Ethereum2AttestationsMeasureable;
  get?: Maybe<Ethereum2AttestationsMeasureable>;
}


/** Attestations in Ethereum v2.0 blockchain */
export interface Ethereum2AttestationMinimumArgs {
  of: Ethereum2AttestationsMeasureable;
  get?: Maybe<Ethereum2AttestationsMeasureable>;
}


/** Attestations in Ethereum v2.0 blockchain */
export interface Ethereum2AttestationProposerArgs {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
}

/** AttestationFieldInfo for Ethereum v 2.0 network */
export interface Ethereum2AttestationFieldInfo {
  __typename?: 'Ethereum2AttestationFieldInfo';
  epoch: Scalars['Int'];
  /** Root Hash */
  root: Scalars['String'];
}

/** AttestationInfo for Ethereum v 2.0 network */
export interface Ethereum2AttestationInfo {
  __typename?: 'Ethereum2AttestationInfo';
  beaconBlockRoot: Scalars['String'];
  epoch: Scalars['Int'];
  signature: Scalars['String'];
  slot: Scalars['Int'];
  source: Ethereum2AttestationFieldInfo;
  target: Ethereum2AttestationFieldInfo;
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
  Validator = 'validator'
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
  AttestationEpochs = 'attestation_epochs'
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2AttesterSlashing {
  __typename?: 'Ethereum2AttesterSlashing';
  any?: Maybe<Scalars['String']>;
  attestation: Ethereum2AttestationInfo;
  /** Attestation slashing sequential number */
  attestationOrder: Scalars['Int'];
  /** Attester Slashing Index (0 based ) in block */
  attesterSlashingIndex: Scalars['Int'];
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
  /** Validator index in slashing sequential numbern */
  validatorInAttestationIndex: Scalars['Int'];
}


/** Attester Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2AttesterSlashingAnyArgs {
  of: Ethereum2AttesterSlashingMeasureable;
}


/** Attester Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2AttesterSlashingBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Attester Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2AttesterSlashingBlockRootArgs {
  blockRootHash?: Maybe<Array<HashSelector>>;
}


/** Attester Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2AttesterSlashingCountArgs {
  uniq?: Maybe<Ethereum2AttesterSlashingsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  attestationSlot?: Maybe<Array<IntegerSelector>>;
  attestationEpoch?: Maybe<Array<IntegerSelector>>;
}


/** Attester Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2AttesterSlashingMaximumArgs {
  of: Ethereum2AttesterSlashingMeasureable;
  get?: Maybe<Ethereum2AttesterSlashingMeasureable>;
}


/** Attester Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2AttesterSlashingMinimumArgs {
  of: Ethereum2AttesterSlashingMeasureable;
  get?: Maybe<Ethereum2AttesterSlashingMeasureable>;
}


/** Attester Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2AttesterSlashingProposerArgs {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
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
  Validator = 'validator'
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
  AttestationEpochs = 'attestation_epochs'
}

/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2Blocks {
  __typename?: 'Ethereum2Blocks';
  any?: Maybe<Scalars['String']>;
  attestationsCount?: Maybe<Scalars['Int']>;
  attesterSlashingsCount?: Maybe<Scalars['Int']>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  depositsCount?: Maybe<Scalars['Int']>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  /** Graffiti */
  graffiti: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  proposerSlashingsCount?: Maybe<Scalars['Int']>;
  /** Randao Reveal */
  randaoReveal: Scalars['String'];
  /** Block signature */
  signature: Scalars['String'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  voluntaryExitsCount?: Maybe<Scalars['Int']>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksAnyArgs {
  of: Ethereum2BlocksMeasureable;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksAttestationsCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksAttesterSlashingsCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksBlockRootArgs {
  blockRootHash?: Maybe<Array<HashSelector>>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksCountArgs {
  uniq?: Maybe<Ethereum2BlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksDepositsCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksHeightArgs {
  height?: Maybe<BlockSelector>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksMaximumArgs {
  of: Ethereum2BlocksMeasureable;
  get?: Maybe<Ethereum2BlocksMeasureable>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksMinimumArgs {
  of: Ethereum2BlocksMeasureable;
  get?: Maybe<Ethereum2BlocksMeasureable>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksProposerArgs {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksProposerSlashingsCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Blocks in Ethereum v2.0 blockchain */
export interface Ethereum2BlocksVoluntaryExitsCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
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
  BlockProposer = 'block_proposer'
}

export enum Ethereum2BlocksUniq {
  /** Unique proposers */
  BlockProposers = 'block_proposers',
  /** Unique date count */
  Dates = 'dates'
}

/** Deposit in Ethereum v2.0 blockchain */
export interface Ethereum2Deposit {
  __typename?: 'Ethereum2Deposit';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Deposit Index (0 based ) in block */
  depositIndex: Scalars['Int'];
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  proof: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  signature: Scalars['String'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
}


/** Deposit in Ethereum v2.0 blockchain */
export interface Ethereum2DepositAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
}


/** Deposit in Ethereum v2.0 blockchain */
export interface Ethereum2DepositAnyArgs {
  of: Ethereum2DepositsMeasureable;
}


/** Deposit in Ethereum v2.0 blockchain */
export interface Ethereum2DepositBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Deposit in Ethereum v2.0 blockchain */
export interface Ethereum2DepositBlockRootArgs {
  blockRootHash?: Maybe<Array<HashSelector>>;
}


/** Deposit in Ethereum v2.0 blockchain */
export interface Ethereum2DepositCountArgs {
  uniq?: Maybe<Ethereum2DepositsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
}


/** Deposit in Ethereum v2.0 blockchain */
export interface Ethereum2DepositMaximumArgs {
  of: Ethereum2DepositsMeasureable;
  get?: Maybe<Ethereum2DepositsMeasureable>;
}


/** Deposit in Ethereum v2.0 blockchain */
export interface Ethereum2DepositMinimumArgs {
  of: Ethereum2DepositsMeasureable;
  get?: Maybe<Ethereum2DepositsMeasureable>;
}


/** Deposit in Ethereum v2.0 blockchain */
export interface Ethereum2DepositProposerArgs {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
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
  Validator = 'validator'
}

export enum Ethereum2DepositsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique block proposers */
  BlockProposers = 'block_proposers',
  /** Unique date count */
  Dates = 'dates',
  /** Unique validators */
  Validators = 'validators'
}

/** Eth1 attributes for Ethereum v 2.0 network */
export interface Ethereum2Eth1Info {
  __typename?: 'Ethereum2Eth1Info';
  /** Block Eth1 block hash */
  blockHash: Scalars['String'];
  /** Block Eth1 deposit count */
  depositCount: Scalars['Int'];
  /** Block Eth1 deposit root hash */
  depositRoot: Scalars['String'];
}

export interface Ethereum2Filter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
}

export enum Ethereum2Network {
  /** Beacon Chain Ethereum 2.0 */
  Eth2 = 'eth2',
  /** Medalla Ethereum 2.0 Beacon Testnet */
  Medalla = 'medalla'
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2ProposerSlashing {
  __typename?: 'Ethereum2ProposerSlashing';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  /** Header slashing sequential numbern */
  headerOrder: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Proposer Slashing Index (0 based ) in block */
  proposerSlashingIndex: Scalars['Int'];
  slashing: Ethereum2SlashingInfo;
  /** Block state root hash */
  stateRoot: Scalars['String'];
}


/** Proposer Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2ProposerSlashingAnyArgs {
  of: Ethereum2ProposerSlashingMeasureable;
}


/** Proposer Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2ProposerSlashingBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Proposer Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2ProposerSlashingBlockRootArgs {
  blockRootHash?: Maybe<Array<HashSelector>>;
}


/** Proposer Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2ProposerSlashingCountArgs {
  uniq?: Maybe<Ethereum2ProposerSlashingsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  slashingProposerIndex?: Maybe<Array<IntegerSelector>>;
  slashingSlot?: Maybe<Array<IntegerSelector>>;
  slashingEpoch?: Maybe<Array<IntegerSelector>>;
}


/** Proposer Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2ProposerSlashingMaximumArgs {
  of: Ethereum2ProposerSlashingMeasureable;
  get?: Maybe<Ethereum2ProposerSlashingMeasureable>;
}


/** Proposer Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2ProposerSlashingMinimumArgs {
  of: Ethereum2ProposerSlashingMeasureable;
  get?: Maybe<Ethereum2ProposerSlashingMeasureable>;
}


/** Proposer Slashing in Ethereum v2.0 blockchain */
export interface Ethereum2ProposerSlashingProposerArgs {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
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
  Proposer = 'proposer'
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
  SlashingProposers = 'slashing_proposers'
}

/** SlashingInfo for Ethereum v 2.0 network */
export interface Ethereum2SlashingInfo {
  __typename?: 'Ethereum2SlashingInfo';
  /** Block body hash */
  bodyRoot: Scalars['String'];
  epoch: Scalars['Int'];
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  signature: Scalars['String'];
  slot: Scalars['Int'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
}

/** Validator attributes for Ethereum v 2.0 network */
export interface Ethereum2ValidatorInfo {
  __typename?: 'Ethereum2ValidatorInfo';
  /** Validator Index as Integer */
  index: Scalars['Int'];
  /** Validator Pub Key */
  pubkey: Scalars['String'];
  /** Validator Withdrawal */
  withdrawalCredentials: Scalars['String'];
}

/** Voluntary Exit in Ethereum v2.0 blockchain */
export interface Ethereum2VoluntaryExit {
  __typename?: 'Ethereum2VoluntaryExit';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Signature */
  signature: Scalars['String'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
  voluntaryExitEpoch: Scalars['Int'];
  /** Voluntary Exit Index (0 based ) in block */
  voluntaryExitIndex: Scalars['Int'];
}


/** Voluntary Exit in Ethereum v2.0 blockchain */
export interface Ethereum2VoluntaryExitAnyArgs {
  of: Ethereum2VoluntaryExitsMeasureable;
}


/** Voluntary Exit in Ethereum v2.0 blockchain */
export interface Ethereum2VoluntaryExitBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Voluntary Exit in Ethereum v2.0 blockchain */
export interface Ethereum2VoluntaryExitBlockRootArgs {
  blockRootHash?: Maybe<Array<HashSelector>>;
}


/** Voluntary Exit in Ethereum v2.0 blockchain */
export interface Ethereum2VoluntaryExitCountArgs {
  uniq?: Maybe<Ethereum2VoluntaryExitsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockRootHash?: Maybe<HashSelector>;
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
  validatorIndex?: Maybe<Array<IntegerSelector>>;
  voluntaryExitEpoch?: Maybe<Array<IntegerSelector>>;
}


/** Voluntary Exit in Ethereum v2.0 blockchain */
export interface Ethereum2VoluntaryExitMaximumArgs {
  of: Ethereum2VoluntaryExitsMeasureable;
  get?: Maybe<Ethereum2VoluntaryExitsMeasureable>;
}


/** Voluntary Exit in Ethereum v2.0 blockchain */
export interface Ethereum2VoluntaryExitMinimumArgs {
  of: Ethereum2VoluntaryExitsMeasureable;
  get?: Maybe<Ethereum2VoluntaryExitsMeasureable>;
}


/** Voluntary Exit in Ethereum v2.0 blockchain */
export interface Ethereum2VoluntaryExitProposerArgs {
  blockProposerIndex?: Maybe<Array<IntegerSelector>>;
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
  Validator = 'validator'
}

export enum Ethereum2VoluntaryExitsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique block proposers */
  BlockProposers = 'block_proposers',
  /** Unique date count */
  Dates = 'dates',
  /** Unique validators */
  Validators = 'validators'
}

/** Address detailed information for Ethereum network */
export interface EthereumAddressInfo {
  __typename?: 'EthereumAddressInfo';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EthereumSmartContractInfo>;
}

/** Blockchain address */
export interface EthereumAddressInfoWithBalance {
  __typename?: 'EthereumAddressInfoWithBalance';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** DEPRECATED Current address balance */
  balance?: Maybe<Scalars['Float']>;
  /** DEPRECATED Balances by currencies for the address */
  balances?: Maybe<Array<EthereumBalance>>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EthereumSmartContractInfoWithAttributes>;
}


/** Blockchain address */
export interface EthereumAddressInfoWithBalanceBalancesArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  currency?: Maybe<EthereumCurrencySelector>;
  height?: Maybe<BlockSelectorRange>;
}

/**
 * Address should start from 0x and contain hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export interface EthereumAddressSelector {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Array<Scalars['String']>>;
  /** Not in the list of Addresses */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/**
 * Address should start from 0x and contain hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export interface EthereumAddressSelectorIn {
  /** Equal to Address */
  is?: Maybe<Scalars['String']>;
  /** In the list of Addresses */
  in?: Maybe<Array<Scalars['String']>>;
}

export interface EthereumArgumentFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
}

/** Arguments of Smart Contract Calls and Events */
export interface EthereumArguments {
  __typename?: 'EthereumArguments';
  any?: Maybe<Scalars['String']>;
  /** Method or event argument */
  argument?: Maybe<ArgumentName>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Caller of the method invocation ( tx sender or another smart contract ) */
  caller?: Maybe<EthereumAddressInfo>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  /** Sequential index of value in array ( multi-dimensional) */
  index: Scalars['String'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Float']>;
  /** Address value of method or event argument */
  reference?: Maybe<EthereumAddressInfo>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Contract method or event */
  smartContractSignature?: Maybe<Signature>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction where call happened */
  transaction?: Maybe<EthereumTransactionInfo>;
  /** The Value of method or event argument */
  value?: Maybe<ArgumentValue>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsAnyArgs {
  of: EthereumArgumentsMeasureable;
  as?: Maybe<EthereumArgumentsConvertable>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsArgumentArgs {
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Scalars['String']>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsCallerArgs {
  caller?: Maybe<Array<EthereumAddressSelector>>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsCountArgs {
  uniq?: Maybe<SmartContractArgumentsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsExternalArgs {
  external?: Maybe<Scalars['Boolean']>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsMaximumArgs {
  of: EthereumArgumentsMeasureable;
  get?: Maybe<EthereumArgumentsMeasureable>;
  as?: Maybe<EthereumArgumentsConvertable>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsMinimumArgs {
  of: EthereumArgumentsMeasureable;
  get?: Maybe<EthereumArgumentsMeasureable>;
  as?: Maybe<EthereumArgumentsConvertable>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsNumberArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  reference?: Maybe<Array<EthereumAddressSelector>>;
  value?: Maybe<Array<ArgumentValueSelector>>;
  argument?: Maybe<Array<ArgumentSelector>>;
  argumentType?: Maybe<Array<ArgumentTypeSelector>>;
  signatureType?: Maybe<SignatureTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  external?: Maybe<Scalars['Boolean']>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsReferenceArgs {
  reference?: Maybe<Array<EthereumAddressSelector>>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsSmartContractArgs {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsSmartContractSignatureArgs {
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  signatureType?: Maybe<SignatureTypeSelector>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsSuccessArgs {
  success?: Maybe<Array<Scalars['Boolean']>>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
}


/** Arguments of Smart Contract Calls and Events */
export interface EthereumArgumentsValueArgs {
  value?: Maybe<Array<ArgumentValueSelector>>;
}

export enum EthereumArgumentsConvertable {
  /** Token symbol */
  TokenSymbol = 'token_symbol',
  /** Token name */
  TokenName = 'token_name'
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
  ArgumentIndex = 'argument_index'
}

/** Balance in a currency */
export interface EthereumBalance {
  __typename?: 'EthereumBalance';
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** History of balance changes by currencies for the address */
  history?: Maybe<Array<EthereumBalanceChange>>;
  value?: Maybe<Scalars['Float']>;
}


/** Balance in a currency */
export interface EthereumBalanceHistoryArgs {
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  height?: Maybe<BlockSelectorRange>;
}

/** Change of balance in a currency */
export interface EthereumBalanceChange {
  __typename?: 'EthereumBalanceChange';
  /** Block number (height) in blockchain */
  block: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<Scalars['ISO8601DateTime']>;
  /** Transfer amount ( positive inbound, negative outbound) */
  transferAmount?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
}

export interface EthereumBlockFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}

/** Blocks in Ethereum blockchain */
export interface EthereumBlocks {
  __typename?: 'EthereumBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  difficulty?: Maybe<Scalars['Float']>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  /** Block miner */
  miner?: Maybe<EthereumAddressInfo>;
  minimum?: Maybe<Scalars['String']>;
  /** Block nonce */
  nonce: Scalars['Int'];
  /** Parent block hash */
  parentHash: Scalars['String'];
  reward?: Maybe<Scalars['Float']>;
  /** Currency of reward */
  rewardCurrency?: Maybe<Currency>;
  size?: Maybe<Scalars['Int']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  transactionCount?: Maybe<Scalars['Int']>;
  uncleCount?: Maybe<Scalars['Int']>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksAnyArgs {
  of: EthereumBlocksMeasureable;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksCountArgs {
  uniq?: Maybe<EthereumBlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksDifficultyArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksHashArgs {
  blockHash?: Maybe<Array<HashSelector>>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksHeightArgs {
  height?: Maybe<BlockSelector>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksMaximumArgs {
  of: EthereumBlocksMeasureable;
  get?: Maybe<EthereumBlocksMeasureable>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksMinerArgs {
  miner?: Maybe<Array<EthereumAddressSelector>>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksMinimumArgs {
  of: EthereumBlocksMeasureable;
  get?: Maybe<EthereumBlocksMeasureable>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksRewardArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksSizeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksTotalDifficultyArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksTransactionCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
}


/** Blocks in Ethereum blockchain */
export interface EthereumBlocksUncleCountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<EthereumAddressSelector>>;
  blockReward?: Maybe<Array<AmountSelector>>;
  transactionCount?: Maybe<Array<IntegerSelector>>;
  uncleCount?: Maybe<Array<IntegerSelector>>;
  size?: Maybe<Array<IntegerSelector>>;
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
  Miner = 'miner'
}

export enum EthereumBlocksUniq {
  /** Unique miner count */
  Miners = 'miners',
  /** Unique date count */
  Dates = 'dates'
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
  CallDepth = 'call_depth'
}

/** Coinpath */
export interface EthereumCoinpath {
  __typename?: 'EthereumCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<EthereumAddressInfo>;
  /** Sender address */
  sender?: Maybe<EthereumAddressInfo>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>;
}


/** Coinpath */
export interface EthereumCoinpathAmountArgs {
  in?: Maybe<BaseCurrencyEnum>;
}


/** Coinpath */
export interface EthereumCoinpathAnyArgs {
  of: CoinpathMeasureable;
}


/** Coinpath */
export interface EthereumCoinpathMaximumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}


/** Coinpath */
export interface EthereumCoinpathMinimumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}

/**
 * Currency selector in Ethereum blockchain.
 *   Currencies supported are native ( ETH / ETC ), ERC20, ERC721 tokens.
 *   You can specify currency symbol or smart contract address. Symbols ETH/ETC are reserved for native currencies in Ethereum mainnet and classic.
 *   Ethereum Smart contract address should start from 0x and contain 40 hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export interface EthereumCurrencySelector {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Ethereum DEX attributes */
export interface EthereumDex {
  __typename?: 'EthereumDex';
  /** Address for DEX exchange identification */
  address: Address;
  /** Full name ( name for known, Protocol for unknown ) */
  fullName: Scalars['String'];
  /** Full name ( name for known, Protocol / address for unknown ) */
  fullNameWithId: Scalars['String'];
  /** Name for known exchanges */
  name?: Maybe<Scalars['String']>;
}

export interface EthereumDexTradeFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
}

/** Trades on DEX smart contracts */
export interface EthereumDexTrades {
  __typename?: 'EthereumDexTrades';
  /** Trader (maker or taker) */
  address?: Maybe<EthereumAddressInfo>;
  any?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['Float']>;
  /** Base currency */
  baseCurrency?: Maybe<Currency>;
  /** Block in the blockchain */
  block?: Maybe<BlockExtended>;
  buyAmount?: Maybe<Scalars['Float']>;
  /** Maker buys this currency */
  buyCurrency?: Maybe<Currency>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Identification of admin / manager / factory of smart contract, executing trades */
  exchange?: Maybe<EthereumDex>;
  gas?: Maybe<Scalars['Float']>;
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Trade 'maker' side */
  maker?: Maybe<EthereumAddressInfo>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  /** Protocol name of the smart contract */
  protocol?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['Float']>;
  /** Quote currency */
  quoteCurrency?: Maybe<Currency>;
  quotePrice?: Maybe<Scalars['Float']>;
  sellAmount?: Maybe<Scalars['Float']>;
  /** Maker sells this currency */
  sellCurrency?: Maybe<Currency>;
  /** Side of trade ( SELL / BUY ) */
  side?: Maybe<TradeSide>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Trade 'taker' side */
  taker?: Maybe<EthereumAddressInfo>;
  /** Time interval */
  timeInterval?: Maybe<TimeInterval>;
  tradeAmount?: Maybe<Scalars['Float']>;
  /** Index of trade in transaction, used to separate trades in transaction */
  tradeIndex?: Maybe<Scalars['String']>;
  /** Transaction of DexTrade */
  transaction?: Maybe<EthereumTransactionInfoExtended>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesAddressArgs {
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesAnyArgs {
  of: EthereumDexTradesMeasureable;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesBaseAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesBaseCurrencyArgs {
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesBuyAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesBuyCurrencyArgs {
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesCountArgs {
  uniq?: Maybe<EthereumDexTradesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesExchangeArgs {
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesGasArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesGasPriceArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesGasValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesMakerArgs {
  maker?: Maybe<Array<EthereumAddressSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesMaximumArgs {
  of: EthereumDexTradesMeasureable;
  get?: Maybe<EthereumDexTradesMeasureable>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesMinimumArgs {
  of: EthereumDexTradesMeasureable;
  get?: Maybe<EthereumDexTradesMeasureable>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesPriceArgs {
  calculate?: Maybe<PriceAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesProtocolArgs {
  protocol?: Maybe<Array<StringSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesQuoteAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesQuoteCurrencyArgs {
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesQuotePriceArgs {
  calculate?: Maybe<PriceAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  protocol?: Maybe<Array<StringSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeAddress?: Maybe<Array<EthereumAddressSelector>>;
  exchangeName?: Maybe<Array<StringSelector>>;
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  buyCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  baseCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  quoteCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  maker?: Maybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  taker?: Maybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: Maybe<Array<SmartContractTypeSelector>>;
  makerOrTaker?: Maybe<Array<EthereumAddressSelector>>;
  tradeIndex?: Maybe<Array<StringSelector>>;
  buyAmount?: Maybe<Array<AmountSelector>>;
  sellAmount?: Maybe<Array<AmountSelector>>;
  price?: Maybe<Array<AmountSelector>>;
  priceAsymmetry?: Maybe<Array<FloatSelector>>;
  tradeAmountUsd?: Maybe<Array<FloatSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesSellAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesSellCurrencyArgs {
  sellCurrency?: Maybe<Array<EthereumCurrencySelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesSmartContractArgs {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesTakerArgs {
  taker?: Maybe<Array<EthereumAddressSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesTradeAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in: BaseCurrencyEnum;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesTradeIndexArgs {
  tradeIndex?: Maybe<Array<StringSelector>>;
}


/** Trades on DEX smart contracts */
export interface EthereumDexTradesTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
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
  SellCurrencyAddress = 'sell_currency_address'
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
  Protocols = 'protocols'
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
  SignatureHash = 'signature_hash'
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
  Goerli = 'goerli'
}

/** Ethereum smart contract */
export interface EthereumSmartContract {
  __typename?: 'EthereumSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
}

export interface EthereumSmartContractCallFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
}

/** Smart Contract Calls */
export interface EthereumSmartContractCalls {
  __typename?: 'EthereumSmartContractCalls';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Call arguments */
  arguments?: Maybe<Array<ArgumentNameValue>>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Caller of the method invocation ( tx sender or another smart contract ) */
  caller?: Maybe<EthereumAddressInfo>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  /** Gas used for transaction in external call, or by methd in internal call */
  gasValue?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction where call happened */
  transaction?: Maybe<EthereumTransactionInfo>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsAnyArgs {
  of: EthereumCallsMeasureable;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsCallerArgs {
  caller?: Maybe<Array<EthereumAddressSelector>>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsCountArgs {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsExternalArgs {
  external?: Maybe<Scalars['Boolean']>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsGasValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  caller?: Maybe<Array<EthereumAddressSelector>>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: Maybe<MethodSelector>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Array<Scalars['Boolean']>>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsMaximumArgs {
  of: EthereumCallsMeasureable;
  get?: Maybe<EthereumCallsMeasureable>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsMinimumArgs {
  of: EthereumCallsMeasureable;
  get?: Maybe<EthereumCallsMeasureable>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsSmartContractArgs {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsSmartContractMethodArgs {
  smartContractMethod?: Maybe<MethodSelector>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsSuccessArgs {
  success?: Maybe<Array<Scalars['Boolean']>>;
}


/** Smart Contract Calls */
export interface EthereumSmartContractCallsTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
}

/** Smart Contract Events */
export interface EthereumSmartContractEvent {
  __typename?: 'EthereumSmartContractEvent';
  any?: Maybe<Scalars['String']>;
  /** Event arguments */
  arguments?: Maybe<Array<ArgumentNameValue>>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Event index */
  eventIndex?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Contract event logged */
  smartContractEvent?: Maybe<Event>;
  /** Transaction where event happened */
  transaction?: Maybe<EthereumTransactionInfo>;
}


/** Smart Contract Events */
export interface EthereumSmartContractEventAnyArgs {
  of: EthereumEventsMeasureable;
}


/** Smart Contract Events */
export interface EthereumSmartContractEventBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Smart Contract Events */
export interface EthereumSmartContractEventCountArgs {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: Maybe<EventSelector>;
}


/** Smart Contract Events */
export interface EthereumSmartContractEventMaximumArgs {
  of: EthereumEventsMeasureable;
  get?: Maybe<EthereumEventsMeasureable>;
}


/** Smart Contract Events */
export interface EthereumSmartContractEventMinimumArgs {
  of: EthereumEventsMeasureable;
  get?: Maybe<EthereumEventsMeasureable>;
}


/** Smart Contract Events */
export interface EthereumSmartContractEventSmartContractArgs {
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
}


/** Smart Contract Events */
export interface EthereumSmartContractEventSmartContractEventArgs {
  smartContractEvent?: Maybe<EventSelector>;
}


/** Smart Contract Events */
export interface EthereumSmartContractEventTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
}

export interface EthereumSmartContractEventFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  smartContractType?: Maybe<SmartContractTypeSelector>;
  smartContractAddress?: Maybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: Maybe<EventSelector>;
}

/** Blockchain smart contract */
export interface EthereumSmartContractInfo {
  __typename?: 'EthereumSmartContractInfo';
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
}

/** Blockchain smart contract */
export interface EthereumSmartContractInfoWithAttributes {
  __typename?: 'EthereumSmartContractInfoWithAttributes';
  /** Attributes from readonly methods */
  attributes?: Maybe<Array<SmartContractReadonlyAttribute>>;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
}

export interface EthereumTransactionFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
}

/** Blockchain transaction info */
export interface EthereumTransactionInfo {
  __typename?: 'EthereumTransactionInfo';
  /** Gas consumed */
  gas: Scalars['Int'];
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  /** Gas value cost */
  gasValue: Scalars['Float'];
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction from address */
  txFrom: EthereumAddressInfo;
}

/** Blockchain Transaction Extended info */
export interface EthereumTransactionInfoExtended {
  __typename?: 'EthereumTransactionInfoExtended';
  /** Gas consumed */
  gas: Scalars['Int'];
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  /** Gas value cost */
  gasValue: Scalars['Float'];
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>;
  /** Transaction from address */
  txFrom: EthereumAddressInfo;
}

/** Transactions in Ethereum blockchain */
export interface EthereumTransactions {
  __typename?: 'EthereumTransactions';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Created smart contract */
  creates?: Maybe<EthereumAddressInfo>;
  /** Currency of amount */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Error message if any */
  error?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['Float']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** Transaction sender */
  sender?: Maybe<EthereumAddressInfo>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsAnyArgs {
  of: EthereumTransactionsMeasureable;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsCountArgs {
  uniq?: Maybe<EthereumTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsCreatesArgs {
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsGasArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsGasCurrencyArgs {
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsGasPriceArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsGasValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txSender?: Maybe<Array<EthereumAddressSelector>>;
  txTo?: Maybe<Array<EthereumAddressSelector>>;
  txCreates?: Maybe<Array<EthereumAddressSelector>>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  gasCurrency?: Maybe<Array<EthereumCurrencySelector>>;
  gasValue?: Maybe<Array<AmountSelector>>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsHashArgs {
  txHash?: Maybe<Array<HashSelector>>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsIndexArgs {
  txIndex?: Maybe<Array<TxIndexSelector>>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsMaximumArgs {
  of: EthereumTransactionsMeasureable;
  get?: Maybe<EthereumTransactionsMeasureable>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsMinimumArgs {
  of: EthereumTransactionsMeasureable;
  get?: Maybe<EthereumTransactionsMeasureable>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsSenderArgs {
  txSender?: Maybe<Array<EthereumAddressSelector>>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Transactions in Ethereum blockchain */
export interface EthereumTransactionsToArgs {
  txTo?: Maybe<Array<EthereumAddressSelector>>;
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
  Gas = 'gas'
}

export enum EthereumTransactionsUniq {
  /** Unique TX senders count */
  Senders = 'senders',
  /** Unique TX receivers count */
  Receivers = 'receivers',
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates'
}

export interface EthereumTransferFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}

/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfers {
  __typename?: 'EthereumTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>;
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  gasValue?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<EthereumAddressInfo>;
  /** Transfer sender */
  sender?: Maybe<EthereumAddressInfo>;
  /** Transaction where transfer happened */
  transaction?: Maybe<EthereumTransactionInfo>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersAnyArgs {
  of: EthereumTransfersMeasureable;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersCountArgs {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersCurrencyArgs {
  currency?: Maybe<Array<EthereumCurrencySelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersEntityIdArgs {
  entityId?: Maybe<EntitySelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersExternalArgs {
  external?: Maybe<Scalars['Boolean']>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersGasValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
  entityId?: Maybe<EntitySelector>;
  sender?: Maybe<Array<EthereumAddressSelector>>;
  receiver?: Maybe<Array<EthereumAddressSelector>>;
  currency?: Maybe<Array<EthereumCurrencySelector>>;
  external?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersMaximumArgs {
  of: EthereumTransfersMeasureable;
  get?: Maybe<EthereumTransfersMeasureable>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersMinimumArgs {
  of: EthereumTransfersMeasureable;
  get?: Maybe<EthereumTransfersMeasureable>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersReceiverArgs {
  receiver?: Maybe<Array<EthereumAddressSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersSenderArgs {
  sender?: Maybe<Array<EthereumAddressSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface EthereumTransfersTransactionArgs {
  txHash?: Maybe<Array<HashSelector>>;
  txFrom?: Maybe<Array<EthereumAddressSelector>>;
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
  EntityId = 'entity_id'
}

/** Smart contract event */
export interface Event {
  __typename?: 'Event';
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature Hash */
  signatureHash: Scalars['String'];
}

/** Smart contract event. In selector you can use the name, signature or hex hash */
export interface EventSelector {
  /** Event signature is */
  is?: Maybe<Scalars['String']>;
  /** Event signature not */
  not?: Maybe<Scalars['String']>;
  /** Event signature in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Event signature not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Filecoin */
export interface Filecoin {
  __typename?: 'Filecoin';
  /** Filecoin Network Blocks */
  blocks?: Maybe<Array<FilecoinBlock>>;
  /** Filecoin Network Calls */
  calls?: Maybe<Array<FilecoinCalls>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<FilecoinCoinpath>>;
  /** Filecoin Network Messages ( blocks, transfers, ... ) */
  messages?: Maybe<Array<FilecoinMessages>>;
  /** Filecoin Network Currency Transfers */
  transfers?: Maybe<Array<FilecoinTransfers>>;
}


/** Filecoin */
export interface FilecoinBlocksArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
  any?: Maybe<Array<FilecoinBlockFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Filecoin */
export interface FilecoinCallsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  messageMethod?: Maybe<IntegerSelector>;
  any?: Maybe<Array<FilecoinCallFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Filecoin */
export interface FilecoinCoinpathArgs {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
}


/** Filecoin */
export interface FilecoinMessagesArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
  any?: Maybe<Array<FilecoinMessageFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Filecoin */
export interface FilecoinTransfersArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  transferType?: Maybe<TransferTypeSelector>;
  messageMethod?: Maybe<IntegerSelector>;
  any?: Maybe<Array<FilecoinTransferFilter>>;
  options?: Maybe<QueryOptions>;
}

/** Block */
export interface FilecoinBlock {
  __typename?: 'FilecoinBlock';
  any?: Maybe<Scalars['String']>;
  blockSig?: Maybe<NameWithId>;
  blsAggregate?: Maybe<NameWithId>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  electionProof?: Maybe<Scalars['String']>;
  forkSignalling?: Maybe<Scalars['BigInt']>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block round in blockchain */
  height: Scalars['Int'];
  /** Block index on height */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  messageCount?: Maybe<Scalars['Int']>;
  messages?: Maybe<Scalars['String']>;
  /** Miner */
  miner?: Maybe<Address>;
  minerTips?: Maybe<Scalars['Float']>;
  minimum?: Maybe<Scalars['String']>;
  parentMessageReceipts?: Maybe<Scalars['String']>;
  parentStateRoot?: Maybe<Scalars['String']>;
  parentWeight?: Maybe<Scalars['BigInt']>;
  reward?: Maybe<Scalars['Float']>;
  ticket?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  totalReward?: Maybe<Scalars['Float']>;
  winCount?: Maybe<Scalars['Int']>;
  wincount?: Maybe<Scalars['Int']>;
}


/** Block */
export interface FilecoinBlockAnyArgs {
  of: FilecoinBlocksMeasureable;
}


/** Block */
export interface FilecoinBlockCountArgs {
  uniq?: Maybe<FilecoinBlockUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
}


/** Block */
export interface FilecoinBlockHashArgs {
  blockHash?: Maybe<Array<HashSelector>>;
}


/** Block */
export interface FilecoinBlockHeightArgs {
  height?: Maybe<BlockSelector>;
}


/** Block */
export interface FilecoinBlockIndexArgs {
  blockIndex?: Maybe<IntegerSelector>;
}


/** Block */
export interface FilecoinBlockMaximumArgs {
  of: FilecoinBlocksMeasureable;
  get?: Maybe<FilecoinBlocksMeasureable>;
}


/** Block */
export interface FilecoinBlockMessageCountArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
}


/** Block */
export interface FilecoinBlockMinerArgs {
  miner?: Maybe<AddressSelector>;
}


/** Block */
export interface FilecoinBlockMinerTipsArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
}


/** Block */
export interface FilecoinBlockMinimumArgs {
  of: FilecoinBlocksMeasureable;
  get?: Maybe<FilecoinBlocksMeasureable>;
}


/** Block */
export interface FilecoinBlockRewardArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
}


/** Block */
export interface FilecoinBlockTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Block */
export interface FilecoinBlockTotalRewardArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
}


/** Block */
export interface FilecoinBlockWinCountArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
}

export interface FilecoinBlockFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  miner?: Maybe<Array<AddressSelector>>;
  blockIndex?: Maybe<IntegerSelector>;
}

export enum FilecoinBlockUniq {
  /** Miner */
  Miners = 'miners',
  /** Unique date count */
  Dates = 'dates',
  /** Unique block height count */
  Heights = 'heights',
  /** Unique block count */
  Blocks = 'blocks'
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
  Miner = 'miner'
}

export interface FilecoinCallFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  messageMethod?: Maybe<IntegerSelector>;
}

/** Calls in Filecoin blockchain */
export interface FilecoinCalls {
  __typename?: 'FilecoinCalls';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer Message is included */
  block?: Maybe<Block>;
  /** Call hash */
  callHash?: Maybe<Scalars['String']>;
  /** Call hash */
  callPath?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  exitCode?: Maybe<Scalars['BigInt']>;
  gas?: Maybe<Scalars['Int']>;
  gasFeeCap?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  gasPremium?: Maybe<Scalars['Float']>;
  /** Message hash */
  hash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Message Method */
  messageMethod?: Maybe<NameWithId>;
  /** Method */
  method?: Maybe<NameWithId>;
  minedBlock?: Maybe<FilecoinMinedBlock>;
  minimum?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['BigInt']>;
  /** Message receiver */
  receiver?: Maybe<AddressWithAccount>;
  returnValue?: Maybe<Scalars['String']>;
  /** Message sender */
  sender?: Maybe<AddressWithAccount>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  messageMethod?: Maybe<IntegerSelector>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsAnyArgs {
  of: FilecoinCallsMeasureable;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsCountArgs {
  uniq?: Maybe<FilecoinMessagesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  messageMethod?: Maybe<IntegerSelector>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsGasArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsHashArgs {
  hash?: Maybe<HashSelector>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsMaximumArgs {
  of: FilecoinCallsMeasureable;
  get?: Maybe<FilecoinCallsMeasureable>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsMessageMethodArgs {
  messageMethod?: Maybe<IntegerSelector>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsMethodArgs {
  method?: Maybe<IntegerSelector>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsMinimumArgs {
  of: FilecoinCallsMeasureable;
  get?: Maybe<FilecoinCallsMeasureable>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsReceiverArgs {
  receiver?: Maybe<AddressSelector>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsSenderArgs {
  sender?: Maybe<AddressSelector>;
}


/** Calls in Filecoin blockchain */
export interface FilecoinCallsSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
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
  Gas = 'gas'
}

/** Coinpath */
export interface FilecoinCoinpath {
  __typename?: 'FilecoinCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  /** Message of transfer happened */
  message?: Maybe<TransactionHashValue>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
}


/** Coinpath */
export interface FilecoinCoinpathAmountArgs {
  in?: Maybe<BaseCurrencyEnum>;
}


/** Coinpath */
export interface FilecoinCoinpathAnyArgs {
  of: CoinpathMeasureable;
}


/** Coinpath */
export interface FilecoinCoinpathMaximumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}


/** Coinpath */
export interface FilecoinCoinpathMinimumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}

export interface FilecoinMessageFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}

/** Messages in Filecoin blockchain */
export interface FilecoinMessages {
  __typename?: 'FilecoinMessages';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  baseFeeBurn?: Maybe<Scalars['Float']>;
  /** Block where transfer Message is included */
  block?: Maybe<Block>;
  burned?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  exitCode?: Maybe<Scalars['BigInt']>;
  gas?: Maybe<Scalars['Int']>;
  gasFeeCap?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  gasPremium?: Maybe<Scalars['Float']>;
  /** Message hash */
  hash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Method */
  method?: Maybe<NameWithId>;
  minedBlock?: Maybe<FilecoinMinedBlock>;
  minerPenalty?: Maybe<Scalars['Float']>;
  minerTip?: Maybe<Scalars['Float']>;
  minimum?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['BigInt']>;
  overEstimationBurn?: Maybe<Scalars['Float']>;
  /** Message receiver */
  receiver?: Maybe<AddressWithAccount>;
  refund?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['String']>;
  /** Message sender */
  sender?: Maybe<AddressWithAccount>;
  signature?: Maybe<Scalars['String']>;
  signatureType?: Maybe<Scalars['String']>;
  /** Signed Message hash */
  signedHash?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  totalCost?: Maybe<Scalars['Float']>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesAnyArgs {
  of: FilecoinMessagesMeasureable;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesBaseFeeBurnArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesBurnedArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesCountArgs {
  uniq?: Maybe<FilecoinMessagesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesGasArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesHashArgs {
  hash?: Maybe<HashSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesMaximumArgs {
  of: FilecoinMessagesMeasureable;
  get?: Maybe<FilecoinMessagesMeasureable>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesMethodArgs {
  method?: Maybe<IntegerSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesMinerPenaltyArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesMinerTipArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesMinimumArgs {
  of: FilecoinMessagesMeasureable;
  get?: Maybe<FilecoinMessagesMeasureable>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesOverEstimationBurnArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesReceiverArgs {
  receiver?: Maybe<AddressSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesRefundArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesSenderArgs {
  sender?: Maybe<AddressSelector>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Messages in Filecoin blockchain */
export interface FilecoinMessagesTotalCostArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  index?: Maybe<IntegerSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<AmountSelector>;
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
  Gas = 'gas'
}

export enum FilecoinMessagesUniq {
  /** Unique block heights */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates',
  /** Unique Message senders */
  Senders = 'senders',
  /** Unique Message receivers */
  Receivers = 'receivers'
}

/** Filecoin Mined Block */
export interface FilecoinMinedBlock {
  __typename?: 'FilecoinMinedBlock';
  /** Hash */
  hash?: Maybe<Scalars['String']>;
  /** Index on height */
  index?: Maybe<Scalars['Int']>;
  /** Miner */
  miner?: Maybe<Address>;
}

export enum FilecoinNetwork {
  /** Filecoin Mainnet */
  Filecoin = 'filecoin'
}

export interface FilecoinTransferFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  transferType?: Maybe<TransferTypeSelector>;
  messageMethod?: Maybe<IntegerSelector>;
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
  Genesis = 'genesis'
}

/** Transfers in Filecoin blockchain */
export interface FilecoinTransfers {
  __typename?: 'FilecoinTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer Transfer is included */
  block?: Maybe<BlockExtended>;
  /** Call hash */
  callHash?: Maybe<Scalars['String']>;
  /** Call hash */
  callPath?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Message hash */
  hash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Message Method */
  messageMethod?: Maybe<NameWithId>;
  /** Method */
  method?: Maybe<NameWithId>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transfer timestamp */
  timestamp?: Maybe<DateTime>;
  /** Type of transfer */
  transferType?: Maybe<FilecoinTransferType>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  transferType?: Maybe<TransferTypeSelector>;
  messageMethod?: Maybe<IntegerSelector>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersAnyArgs {
  of: FilecoinTransfersMeasureable;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersCountArgs {
  uniq?: Maybe<FilecoinMessagesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  hash?: Maybe<HashSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  method?: Maybe<IntegerSelector>;
  amount?: Maybe<AmountSelector>;
  transferType?: Maybe<TransferTypeSelector>;
  messageMethod?: Maybe<IntegerSelector>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersHashArgs {
  hash?: Maybe<HashSelector>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersMaximumArgs {
  of: FilecoinTransfersMeasureable;
  get?: Maybe<FilecoinTransfersMeasureable>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersMessageMethodArgs {
  messageMethod?: Maybe<IntegerSelector>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersMethodArgs {
  method?: Maybe<IntegerSelector>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersMinimumArgs {
  of: FilecoinTransfersMeasureable;
  get?: Maybe<FilecoinTransfersMeasureable>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersReceiverArgs {
  receiver?: Maybe<AddressSelector>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersSenderArgs {
  sender?: Maybe<AddressSelector>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Transfers in Filecoin blockchain */
export interface FilecoinTransfersTransferTypeArgs {
  transferType?: Maybe<TransferTypeSelector>;
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
  Gas = 'gas'
}

/** Select by number */
export interface FloatSelector {
  /** is */
  is?: Maybe<Scalars['Float']>;
  /** not */
  not?: Maybe<Scalars['Float']>;
  /** in the list */
  in?: Maybe<Array<Scalars['Float']>>;
  /** not in the list */
  notIn?: Maybe<Array<Scalars['Float']>>;
  /** greater than */
  gt?: Maybe<Scalars['Float']>;
  /** less than */
  lt?: Maybe<Scalars['Float']>;
  /** less or equal than */
  lteq?: Maybe<Scalars['Float']>;
  /** greater or equal than */
  gteq?: Maybe<Scalars['Float']>;
  /** in range */
  between?: Maybe<Array<Scalars['Float']>>;
}

export enum FlowDirection {
  /** Inbound transfers */
  Inbound = 'inbound',
  /** Outbound transfers */
  Outbound = 'outbound'
}

/** Select by hash */
export interface HashSelector {
  /** Hash is */
  is?: Maybe<Scalars['String']>;
  /** Hash not */
  not?: Maybe<Scalars['String']>;
  /** Hash in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Hash not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Hedera Chain */
export interface Hedera {
  __typename?: 'Hedera';
  /** Blockchain Arguments */
  arguments?: Maybe<Array<HederaArgument>>;
  /** Blockhain Calls */
  calls?: Maybe<Array<HederaCall>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<HederaCoinpath>>;
  /** Blockhain Inputs */
  inputs?: Maybe<Array<HederaInput>>;
  /** Blockhain Messages */
  messages?: Maybe<Array<HederaMessage>>;
  /** Blockchain Outputs */
  outputs?: Maybe<Array<HederaOutput>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<HederaTransaction>>;
}


/** Hedera Chain */
export interface HederaArgumentsArgs {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<HederaArgumentFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Hedera Chain */
export interface HederaCallsArgs {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  callInput?: Maybe<HashSelector>;
  callResult?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<HederaCallFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Hedera Chain */
export interface HederaCoinpathArgs {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
}


/** Hedera Chain */
export interface HederaInputsArgs {
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<HederaInputFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Hedera Chain */
export interface HederaMessagesArgs {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  transactionRunningHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<HederaMessageFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Hedera Chain */
export interface HederaOutputsArgs {
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<HederaOutputFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Hedera Chain */
export interface HederaTransactionsArgs {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<HederaTransactionFilter>>;
  options?: Maybe<QueryOptions>;
}

/** Blockchain accounts */
export interface HederaAccount {
  __typename?: 'HederaAccount';
  /** Account */
  account: Scalars['String'];
}

/** Arguments in Hedera blockchain */
export interface HederaArgument {
  __typename?: 'HederaArgument';
  any?: Maybe<Scalars['String']>;
  /** Argument type */
  argtype?: Maybe<Scalars['String']>;
  /** Argument */
  argument?: Maybe<Scalars['String']>;
  chargedTxFee?: Maybe<Scalars['BigInt']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Smart contract */
  smartContractEntity?: Maybe<Account>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  transactionBytes?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
  /** Value */
  value?: Maybe<Scalars['String']>;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentAnyArgs {
  of: HederaArgumentsMeasureable;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentCountArgs {
  uniq?: Maybe<HederaArgumentsUniq>;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentInitialBalanceArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentMaxFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentMaximumArgs {
  of: HederaArgumentsMeasureable;
  get?: Maybe<HederaArgumentsMeasureable>;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentMinimumArgs {
  of: HederaArgumentsMeasureable;
  get?: Maybe<HederaArgumentsMeasureable>;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentResultArgs {
  result?: Maybe<HashSelector>;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentTransactionFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentTransactionHashArgs {
  transactionHash?: Maybe<HashSelector>;
}


/** Arguments in Hedera blockchain */
export interface HederaArgumentValidStartArgs {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
}

export interface HederaArgumentFilter {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
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
  TransactionFee = 'transaction_fee'
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
  InitialBalance = 'initial_balance'
}

/** Calls in Hedera blockchain */
export interface HederaCall {
  __typename?: 'HederaCall';
  any?: Maybe<Scalars['String']>;
  /** Call input */
  callInput?: Maybe<Scalars['String']>;
  /** Call input */
  callResult?: Maybe<Scalars['String']>;
  chargedTxFee?: Maybe<Scalars['BigInt']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  gas?: Maybe<Scalars['Int']>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Smart contract */
  smartContractEntity?: Maybe<Account>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  transactionBytes?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
}


/** Calls in Hedera blockchain */
export interface HederaCallAnyArgs {
  of: HederaCallsMeasureable;
}


/** Calls in Hedera blockchain */
export interface HederaCallCallInputArgs {
  callInput?: Maybe<HashSelector>;
}


/** Calls in Hedera blockchain */
export interface HederaCallCallResultArgs {
  callResult?: Maybe<HashSelector>;
}


/** Calls in Hedera blockchain */
export interface HederaCallCountArgs {
  uniq?: Maybe<HederaCallsUniq>;
}


/** Calls in Hedera blockchain */
export interface HederaCallGasArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  callInput?: Maybe<HashSelector>;
  callResult?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Calls in Hedera blockchain */
export interface HederaCallInitialBalanceArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Calls in Hedera blockchain */
export interface HederaCallMaxFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Calls in Hedera blockchain */
export interface HederaCallMaximumArgs {
  of: HederaCallsMeasureable;
  get?: Maybe<HederaCallsMeasureable>;
}


/** Calls in Hedera blockchain */
export interface HederaCallMinimumArgs {
  of: HederaCallsMeasureable;
  get?: Maybe<HederaCallsMeasureable>;
}


/** Calls in Hedera blockchain */
export interface HederaCallResultArgs {
  result?: Maybe<HashSelector>;
}


/** Calls in Hedera blockchain */
export interface HederaCallSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Calls in Hedera blockchain */
export interface HederaCallTransactionFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Calls in Hedera blockchain */
export interface HederaCallTransactionHashArgs {
  transactionHash?: Maybe<HashSelector>;
}


/** Calls in Hedera blockchain */
export interface HederaCallValidStartArgs {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
}

export interface HederaCallFilter {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  smartContractEntity?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  callInput?: Maybe<HashSelector>;
  callResult?: Maybe<HashSelector>;
  success?: Maybe<Scalars['Boolean']>;
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
  TransactionFee = 'transaction_fee'
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
  InitialBalance = 'initial_balance'
}

/** Coinpath */
export interface HederaCoinpath {
  __typename?: 'HederaCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>;
}


/** Coinpath */
export interface HederaCoinpathAmountArgs {
  in?: Maybe<BaseCurrencyEnum>;
}


/** Coinpath */
export interface HederaCoinpathAnyArgs {
  of: CoinpathMeasureable;
}


/** Coinpath */
export interface HederaCoinpathMaximumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}


/** Coinpath */
export interface HederaCoinpathMinimumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}

/** Currency selector in Hedera blockchain. */
export interface HederaCurrencySelector {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Inputs in Hedera blockchain */
export interface HederaInput {
  __typename?: 'HederaInput';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar time */
  time?: Maybe<DateTime>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  /** Transfer Account */
  transferEntity?: Maybe<Account>;
  validStart?: Maybe<Timestamp>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputAnyArgs {
  of: HederaInputMeasureable;
}


/** Inputs in Hedera blockchain */
export interface HederaInputCountArgs {
  uniq?: Maybe<HederaInputsUniq>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputCurrencyArgs {
  currency?: Maybe<HederaCurrencySelector>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputEntityArgs {
  entityType?: Maybe<EntityTypeSelector>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputInitialBalanceArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputMaxFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputMaximumArgs {
  of: HederaInputMeasureable;
  get?: Maybe<HederaInputMeasureable>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputMinimumArgs {
  of: HederaInputMeasureable;
  get?: Maybe<HederaInputMeasureable>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputResultArgs {
  result?: Maybe<HashSelector>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputTransactionFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputTransactionHashArgs {
  transactionHash?: Maybe<HashSelector>;
}


/** Inputs in Hedera blockchain */
export interface HederaInputValidStartArgs {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
}

export interface HederaInputFilter {
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
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
  Amount = 'amount'
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
  InitialBalance = 'initial_balance'
}

/** Messages in Hedera blockchain */
export interface HederaMessage {
  __typename?: 'HederaMessage';
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar date time */
  time?: Maybe<DateTime>;
  /** Transaction running hash */
  topicRunningHash?: Maybe<Scalars['String']>;
  /** Transaction running hash */
  topicSequenceNumber?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageAnyArgs {
  of: HederaMessageMeasureable;
}


/** Messages in Hedera blockchain */
export interface HederaMessageCountArgs {
  uniq?: Maybe<HederaMessagesUniq>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageEntityArgs {
  entityType?: Maybe<EntityTypeSelector>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageInitialBalanceArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  transactionRunningHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageMaxFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  transactionRunningHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageMaximumArgs {
  of: HederaMessageMeasureable;
  get?: Maybe<HederaMessageMeasureable>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageMinimumArgs {
  of: HederaMessageMeasureable;
  get?: Maybe<HederaMessageMeasureable>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageResultArgs {
  result?: Maybe<HashSelector>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageTopicRunningHashArgs {
  topicRunningHash?: Maybe<StringSelector>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageTopicSequenceNumberArgs {
  topicSequenceNumber?: Maybe<HashSelector>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageTransactionFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  transactionRunningHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageTransactionHashArgs {
  transactionHash?: Maybe<HashSelector>;
}


/** Messages in Hedera blockchain */
export interface HederaMessageValidStartArgs {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
}

export interface HederaMessageFilter {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  transactionRunningHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
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
  TransactionFee = 'transaction_fee'
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
  InitialBalance = 'initial_balance'
}

export enum HederaNetwork {
  /** The Hedera mainnet */
  Hedera = 'hedera',
  /** The Hedera testnets */
  HederaTestnets = 'hedera_testnets'
}

/** Outputs in Hedera blockchain */
export interface HederaOutput {
  __typename?: 'HederaOutput';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar time */
  time?: Maybe<DateTime>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  /** Transfer Account */
  transferEntity?: Maybe<Account>;
  validStart?: Maybe<Timestamp>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputAnyArgs {
  of: HederaOutputMeasureable;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputCountArgs {
  uniq?: Maybe<HederaOutputUniq>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputCurrencyArgs {
  currency?: Maybe<HederaCurrencySelector>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputEntityArgs {
  entityType?: Maybe<EntityTypeSelector>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputInitialBalanceArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputMaxFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputMaximumArgs {
  of: HederaOutputMeasureable;
  get?: Maybe<HederaOutputMeasureable>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputMinimumArgs {
  of: HederaOutputMeasureable;
  get?: Maybe<HederaOutputMeasureable>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputResultArgs {
  result?: Maybe<HashSelector>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputTransactionFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputTransactionHashArgs {
  transactionHash?: Maybe<HashSelector>;
}


/** Outputs in Hedera blockchain */
export interface HederaOutputValidStartArgs {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
}

export interface HederaOutputFilter {
  date?: Maybe<DateSelector>;
  transferEntity?: Maybe<StringSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
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
  Amount = 'amount'
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
  InitialBalance = 'initial_balance'
}

/** Transactions in Hedera blockchain */
export interface HederaTransaction {
  __typename?: 'HederaTransaction';
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar time */
  time?: Maybe<DateTime>;
  transactionBytes?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  /** Transaction Type */
  transactionType?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionAnyArgs {
  of: HederaTransactionMeasureable;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionCountArgs {
  uniq?: Maybe<HederaTransactionsUniq>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionEntityArgs {
  entityType?: Maybe<EntityTypeSelector>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionInitialBalanceArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionMaxFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionMaximumArgs {
  of: HederaTransactionMeasureable;
  get?: Maybe<HederaTransactionMeasureable>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionMinimumArgs {
  of: HederaTransactionMeasureable;
  get?: Maybe<HederaTransactionMeasureable>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionResultArgs {
  result?: Maybe<HashSelector>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionTransactionFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionTransactionHashArgs {
  transactionHash?: Maybe<HashSelector>;
}


/** Transactions in Hedera blockchain */
export interface HederaTransactionValidStartArgs {
  time?: Maybe<DateTimeSelector>;
  nanoseconds?: Maybe<Scalars['BigInt']>;
}

export interface HederaTransactionFilter {
  date?: Maybe<DateSelector>;
  nodeAccount?: Maybe<StringSelector>;
  payerAccount?: Maybe<StringSelector>;
  transactionHash?: Maybe<HashSelector>;
  result?: Maybe<HashSelector>;
  entityType?: Maybe<EntityTypeSelector>;
  success?: Maybe<Scalars['Boolean']>;
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
  TransactionFee = 'transaction_fee'
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
  InitialBalance = 'initial_balance'
}



/** Input Script Type of UTXO transaction input */
export interface InputScript {
  __typename?: 'InputScript';
  /** Script annotation */
  annotation?: Maybe<Scalars['String']>;
  /** Long script pattern */
  pattern: Scalars['String'];
  /** Short script pattern */
  shortPattern: Scalars['String'];
  /** Simple script pattern */
  simplePattern: Scalars['String'];
  /** Script type */
  type?: Maybe<BitcoinInputScriptType>;
}

/** Select by ID */
export interface IntIdSelector {
  /** ID is */
  is?: Maybe<Scalars['Int']>;
  /** ID not */
  not?: Maybe<Scalars['Int']>;
  /** ID in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** ID not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** ID greater than */
  gt?: Maybe<Scalars['Int']>;
  /** ID less than */
  lt?: Maybe<Scalars['Int']>;
  /** ID less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** ID greater or equal than */
  gteq?: Maybe<Scalars['Int']>;
  /** ID in range */
  between?: Maybe<Array<Scalars['Int']>>;
}

/** Select limited upper number */
export interface IntegerLimitedSelector {
  /** is */
  is?: Maybe<Scalars['Int']>;
  /** in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** less than */
  lt?: Maybe<Scalars['Int']>;
  /** less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** in range */
  between?: Maybe<Array<Scalars['Int']>>;
}

/** Select by number */
export interface IntegerSelector {
  /** is */
  is?: Maybe<Scalars['Int']>;
  /** not */
  not?: Maybe<Scalars['Int']>;
  /** in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** greater than */
  gt?: Maybe<Scalars['Int']>;
  /** less than */
  lt?: Maybe<Scalars['Int']>;
  /** less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** greater or equal than */
  gteq?: Maybe<Scalars['Int']>;
  /** in range */
  between?: Maybe<Array<Scalars['Int']>>;
}

/** Libra */
export interface Libra {
  __typename?: 'Libra';
  /** Libra Network Blocks */
  blocks?: Maybe<Array<LibraBlock>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<LibraCoinpath>>;
  /** Libra Network Currency Minting */
  mints?: Maybe<Array<LibraMints>>;
  /** Libra Network Transactions */
  transactions?: Maybe<Array<LibraTransactions>>;
  /** Libra Network Currency Transfers */
  transfers?: Maybe<Array<LibraTransfers>>;
}


/** Libra */
export interface LibraBlocksArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  proposer?: Maybe<Array<AddressSelector>>;
  metadata?: Maybe<StringSelector>;
  any?: Maybe<Array<LibraBlockFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Libra */
export interface LibraCoinpathArgs {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
}


/** Libra */
export interface LibraMintsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  block?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  minter?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<LibraMintFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Libra */
export interface LibraTransactionsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
  any?: Maybe<Array<LibraTransactionFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Libra */
export interface LibraTransfersArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
  any?: Maybe<Array<LibraTransferFilter>>;
  options?: Maybe<QueryOptions>;
}

/** Block */
export interface LibraBlock {
  __typename?: 'LibraBlock';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  gasUsed?: Maybe<Scalars['Float']>;
  /** Block round in blockchain */
  height: Scalars['Int'];
  /** Key */
  key?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Metadata */
  metadata?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Proposer */
  proposer?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** Version of transaction for this block */
  version: Scalars['Int'];
  /** Version hash of transaction for this block */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
}


/** Block */
export interface LibraBlockAnyArgs {
  of: LibraBlocksMeasureable;
}


/** Block */
export interface LibraBlockCountArgs {
  uniq?: Maybe<LibraBlockUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  proposer?: Maybe<Array<AddressSelector>>;
  metadata?: Maybe<StringSelector>;
}


/** Block */
export interface LibraBlockGasUsedArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  proposer?: Maybe<Array<AddressSelector>>;
  metadata?: Maybe<StringSelector>;
}


/** Block */
export interface LibraBlockHeightArgs {
  height?: Maybe<BlockSelector>;
}


/** Block */
export interface LibraBlockMaximumArgs {
  of: LibraBlocksMeasureable;
  get?: Maybe<LibraBlocksMeasureable>;
}


/** Block */
export interface LibraBlockMetadataArgs {
  metadata?: Maybe<StringSelector>;
}


/** Block */
export interface LibraBlockMinimumArgs {
  of: LibraBlocksMeasureable;
  get?: Maybe<LibraBlocksMeasureable>;
}


/** Block */
export interface LibraBlockProposerArgs {
  proposer?: Maybe<AddressSelector>;
}


/** Block */
export interface LibraBlockTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Block */
export interface LibraBlockVersionArgs {
  version?: Maybe<IntegerSelector>;
}

export interface LibraBlockFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  proposer?: Maybe<Array<AddressSelector>>;
  metadata?: Maybe<StringSelector>;
}

export enum LibraBlockUniq {
  /** Proposer */
  Proposer = 'proposer',
  /** Unique date count */
  Dates = 'dates'
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
  GasUsed = 'gas_used'
}

/** Coinpath */
export interface LibraCoinpath {
  __typename?: 'LibraCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<LibraTransactionValue>;
}


/** Coinpath */
export interface LibraCoinpathAmountArgs {
  in?: Maybe<BaseCurrencyEnum>;
}


/** Coinpath */
export interface LibraCoinpathAnyArgs {
  of: LibraCoinpathMeasureable;
}


/** Coinpath */
export interface LibraCoinpathMaximumArgs {
  of: LibraCoinpathMeasureable;
  get?: Maybe<LibraCoinpathMeasureable>;
}


/** Coinpath */
export interface LibraCoinpathMinimumArgs {
  of: LibraCoinpathMeasureable;
  get?: Maybe<LibraCoinpathMeasureable>;
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
  Depth = 'depth'
}

/**
 * Currency selector in Libra blockchain.
 * Libra has native chain currency (LBR) and a number of others ( Coin1/Coin2 ) for Testnet.
 * Use name of currency for selection
 */
export interface LibraCurrencySelector {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

export interface LibraMintFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  block?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  minter?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
}

/** Mints in Libra blockchain */
export interface LibraMints {
  __typename?: 'LibraMints';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Minter */
  minter?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Mint timestamp */
  timestamp?: Maybe<DateTime>;
  /** Version of blockchain for this transaction */
  version: Scalars['Int'];
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
}


/** Mints in Libra blockchain */
export interface LibraMintsAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  block?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  minter?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Mints in Libra blockchain */
export interface LibraMintsAnyArgs {
  of: LibraMintsMeasureable;
}


/** Mints in Libra blockchain */
export interface LibraMintsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Mints in Libra blockchain */
export interface LibraMintsCountArgs {
  uniq?: Maybe<LibraMintsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  block?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  minter?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Mints in Libra blockchain */
export interface LibraMintsCurrencyArgs {
  currency?: Maybe<Array<LibraCurrencySelector>>;
}


/** Mints in Libra blockchain */
export interface LibraMintsMaximumArgs {
  of: LibraMintsMeasureable;
  get?: Maybe<LibraMintsMeasureable>;
}


/** Mints in Libra blockchain */
export interface LibraMintsMinimumArgs {
  of: LibraMintsMeasureable;
  get?: Maybe<LibraMintsMeasureable>;
}


/** Mints in Libra blockchain */
export interface LibraMintsMinterArgs {
  sender?: Maybe<AddressSelector>;
}


/** Mints in Libra blockchain */
export interface LibraMintsSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Mints in Libra blockchain */
export interface LibraMintsTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Mints in Libra blockchain */
export interface LibraMintsVersionArgs {
  version?: Maybe<IntegerSelector>;
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
  CurrencySymbol = 'currency_symbol'
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
  Currencies = 'currencies'
}

export interface LibraTransactionFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
}

/** Blockchain transaction with value */
export interface LibraTransactionValue {
  __typename?: 'LibraTransactionValue';
  /** Transaction value */
  value: Scalars['Float'];
  /** Transaction version */
  version: Scalars['Int'];
}

/** Transactions in Libra blockchain */
export interface LibraTransactions {
  __typename?: 'LibraTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Expiration Time */
  expirationTime?: Maybe<DateTime>;
  gas?: Maybe<Scalars['Int']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas unit price */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Max gas amount */
  maxGasAmount?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Public key */
  publicKey?: Maybe<Scalars['String']>;
  /** Script Hash */
  scriptHash?: Maybe<Scalars['String']>;
  /** Script Type */
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  /** Transaction sender */
  sender?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature scheme */
  signatureScheme?: Maybe<Scalars['String']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction timestamp */
  timestamp?: Maybe<DateTime>;
  /** Version of blockchain for this transaction */
  version: Scalars['Int'];
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsAnyArgs {
  of: LibraTransactionsMeasureable;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsCountArgs {
  uniq?: Maybe<LibraTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsGasArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsGasCurrencyArgs {
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsGasPriceArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsGasValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  success?: Maybe<Scalars['Boolean']>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  scriptHash?: Maybe<StringSelector>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsMaximumArgs {
  of: LibraTransactionsMeasureable;
  get?: Maybe<LibraTransactionsMeasureable>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsMinimumArgs {
  of: LibraTransactionsMeasureable;
  get?: Maybe<LibraTransactionsMeasureable>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsScriptHashArgs {
  scriptHash?: Maybe<StringSelector>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsSenderArgs {
  txSender?: Maybe<AddressSelector>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Transactions in Libra blockchain */
export interface LibraTransactionsVersionArgs {
  version?: Maybe<IntegerSelector>;
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
  Gas = 'gas'
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
  Scripts = 'scripts'
}

export interface LibraTransferFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
}

/** Transfers in Libra blockchain */
export interface LibraTransfers {
  __typename?: 'LibraTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Expiration Time */
  expirationTime?: Maybe<DateTime>;
  gas?: Maybe<Scalars['Int']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas price */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Max gas amount */
  maxGasAmount?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Public key */
  publicKey?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Script Hash */
  scriptHash?: Maybe<Scalars['String']>;
  /** Script Type */
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature scheme */
  signatureScheme?: Maybe<Scalars['String']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transfer timestamp */
  timestamp?: Maybe<DateTime>;
  /** Transaction sender */
  txSender?: Maybe<Address>;
  /** Version of blockchain for this transaction */
  version: Scalars['Int'];
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersAnyArgs {
  of: LibraTransfersMeasureable;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersCountArgs {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersCurrencyArgs {
  currency?: Maybe<Array<LibraCurrencySelector>>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersGasArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersGasCurrencyArgs {
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersGasValueArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  version?: Maybe<IntegerSelector>;
  txSender?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<Array<LibraCurrencySelector>>;
  gasCurrency?: Maybe<Array<LibraCurrencySelector>>;
  amount?: Maybe<Array<AmountSelector>>;
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  scriptHash?: Maybe<StringSelector>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersMaximumArgs {
  of: LibraTransfersMeasureable;
  get?: Maybe<LibraTransfersMeasureable>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersMinimumArgs {
  of: LibraTransfersMeasureable;
  get?: Maybe<LibraTransfersMeasureable>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersReceiverArgs {
  receiver?: Maybe<AddressSelector>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersScriptHashArgs {
  scriptHash?: Maybe<StringSelector>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersSenderArgs {
  sender?: Maybe<AddressSelector>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersTxSenderArgs {
  txSender?: Maybe<AddressSelector>;
}


/** Transfers in Libra blockchain */
export interface LibraTransfersVersionArgs {
  version?: Maybe<IntegerSelector>;
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
  Gas = 'gas'
}

/** Limit by definition */
export interface LimitByOption {
  /** Take limit for each combination of the field */
  each: Scalars['String'];
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>;
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>;
}

/** Smart contract method */
export interface Method {
  __typename?: 'Method';
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature Hash */
  signatureHash: Scalars['String'];
}

/** Smart contract method. In selector you can use the name, signature or hex hash */
export interface MethodSelector {
  /** Method signature is */
  is?: Maybe<Scalars['String']>;
  /** Method signature not */
  not?: Maybe<Scalars['String']>;
  /** Method signature in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Method signature not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Name with an identifier */
export interface NameWithId {
  __typename?: 'NameWithId';
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
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
  Hedera = 'hedera'
}

/** Offchain Data */
export interface Offchain {
  __typename?: 'Offchain';
  /** Historical COVID data */
  covid?: Maybe<CovidHistory>;
}

/** Select order by ID */
export interface OrderIdSelector {
  /** Order ID is */
  is?: Maybe<Scalars['String']>;
  /** Order ID not */
  not?: Maybe<Scalars['String']>;
  /** Order ID in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Order ID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Select by order side */
export interface OrderSideSelector {
  /** Order Side is */
  is?: Maybe<BinanceOrderSide>;
  /** Order Side not */
  not?: Maybe<BinanceOrderSide>;
  /** Order Side in the list */
  in?: Maybe<Array<BinanceOrderSide>>;
  /** Order Side not in the list */
  notIn?: Maybe<Array<BinanceOrderSide>>;
}

/** Select by order status */
export interface OrderStatusSelector {
  /** Order Status is */
  is?: Maybe<BinanceOrderStatus>;
  /** Order Status not */
  not?: Maybe<BinanceOrderStatus>;
  /** Order Status in the list */
  in?: Maybe<Array<BinanceOrderStatus>>;
  /** Order Status not in the list */
  notIn?: Maybe<Array<BinanceOrderStatus>>;
}

/** Select by order time in force */
export interface OrderTimeInForceSelector {
  /** Order TimeInForce is */
  is?: Maybe<BinanceOrderTimeInForce>;
  /** Order TimeInForce not */
  not?: Maybe<BinanceOrderTimeInForce>;
  /** Order TimeInForce in the list */
  in?: Maybe<Array<BinanceOrderTimeInForce>>;
  /** Order TimeInForce not in the list */
  notIn?: Maybe<Array<BinanceOrderTimeInForce>>;
}

/** Select by order type */
export interface OrderTypeSelector {
  /** Order Type is */
  is?: Maybe<BinanceOrderType>;
  /** Order Type not */
  not?: Maybe<BinanceOrderType>;
  /** Order Type in the list */
  in?: Maybe<Array<BinanceOrderType>>;
  /** Order Type not in the list */
  notIn?: Maybe<Array<BinanceOrderType>>;
}

/** Select by output index ( o based ) */
export interface OutputIndexSelector {
  /** Output index is */
  is?: Maybe<Scalars['Int']>;
  /** Output index not */
  not?: Maybe<Scalars['Int']>;
  /** Output index in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Output index not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** Output index greater than */
  gt?: Maybe<Scalars['Int']>;
  /** Output index less than */
  lt?: Maybe<Scalars['Int']>;
  /** Output index less or equal than */
  lteq?: Maybe<Scalars['Int']>;
  /** Output index greater or equal than */
  gteq?: Maybe<Scalars['Int']>;
  /** Output index in range */
  between?: Maybe<Array<Scalars['Int']>>;
}

/** Output Script Type of UTXO transaction output */
export interface OutputScript {
  __typename?: 'OutputScript';
  /** Script annotation */
  annotation?: Maybe<Scalars['String']>;
  /** Long script pattern */
  pattern: Scalars['String'];
  /** Short script pattern */
  short: Scalars['String'];
  /** Simple script pattern */
  simplePattern: Scalars['String'];
  /** Script type */
  type?: Maybe<BitcoinOutputScriptType>;
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
  AnyLast = 'anyLast'
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
  Hedera = 'hedera'
}

/** Blockchain Unified GraphQL API */
export interface Query {
  __typename?: 'Query';
  /** Algorand Chains Dataset */
  algorand?: Maybe<Algorand>;
  /** Binance DEX Chain Dataset */
  binance?: Maybe<Binance>;
  /** Bitcoin and other UTXO Chains Dataset */
  bitcoin?: Maybe<Bitcoin>;
  /** Conflux Chains Dataset */
  conflux?: Maybe<Conflux>;
  /** Diem ( former Libra ) Testnet Dataset */
  diem?: Maybe<Libra>;
  /** EOS Mainnet Dataset */
  eos?: Maybe<Eos>;
  /** Ethereum Mainnet / Classic Chain Datasets */
  ethereum?: Maybe<Ethereum>;
  /** Ethereum v2.0 Beacon Chain Datasets */
  ethereum2?: Maybe<Ethereum2>;
  /** Filecoin Dataset */
  filecoin?: Maybe<Filecoin>;
  /** Hedera Dataset */
  hedera?: Maybe<Hedera>;
  /** Offchain data */
  offchain?: Maybe<Offchain>;
  /** Search by query string */
  search?: Maybe<Array<Result>>;
  /** Tron Mainnet Dataset */
  tron?: Maybe<Tron>;
}


/** Blockchain Unified GraphQL API */
export interface QueryAlgorandArgs {
  network?: Maybe<AlgorandNetwork>;
}


/** Blockchain Unified GraphQL API */
export interface QueryBitcoinArgs {
  network?: Maybe<BitcoinNetwork>;
}


/** Blockchain Unified GraphQL API */
export interface QueryConfluxArgs {
  network?: Maybe<ConfluxNetwork>;
}


/** Blockchain Unified GraphQL API */
export interface QueryDiemArgs {
  network?: Maybe<DiemNetwork>;
}


/** Blockchain Unified GraphQL API */
export interface QueryEthereumArgs {
  network?: Maybe<EthereumNetwork>;
}


/** Blockchain Unified GraphQL API */
export interface QueryEthereum2Args {
  network?: Maybe<Ethereum2Network>;
}


/** Blockchain Unified GraphQL API */
export interface QueryFilecoinArgs {
  network?: Maybe<FilecoinNetwork>;
}


/** Blockchain Unified GraphQL API */
export interface QueryHederaArgs {
  network?: Maybe<HederaNetwork>;
}


/** Blockchain Unified GraphQL API */
export interface QuerySearchArgs {
  string: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  network?: Maybe<Network>;
}

/** Limits, Ordering, Constraints */
export interface QueryOptions {
  /** Limit number of results */
  limit?: Maybe<Scalars['Int']>;
  /** Limit number of results by specific field */
  limitBy?: Maybe<LimitByOption>;
  /** Offset of results, starting from 0 */
  offset?: Maybe<Scalars['Int']>;
  /** Ordering field(s) for ascending */
  asc?: Maybe<Array<Scalars['String']>>;
  /** Ordering field(s) for descending */
  desc?: Maybe<Array<Scalars['String']>>;
}

/** Search result item */
export interface Result {
  __typename?: 'Result';
  /** Blockchain where result is found */
  network: BlockchainNetwork;
  /** Subject in blockchain */
  subject: Subject;
}

export enum ScriptTypeSelectorSelector {
  /** Unknown Transaction */
  UnknownTransaction = 'unknown_transaction',
  /** Peer-to-peer */
  PeerToPeerTransaction = 'peer_to_peer_transaction'
}

/** Smart contract method or event */
export type Signature = Event | Method;

export enum SignatureTypeSelector {
  /** Smart contract method */
  Function = 'Function',
  /** Smart contract event */
  Event = 'Event'
}

/** Blockchain smart contract */
export interface SmartContract {
  __typename?: 'SmartContract';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract Type */
  contractType: SmartContractType;
  /** Smart Contract Protocol Type */
  protocol?: Maybe<Scalars['String']>;
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
  Dates = 'dates'
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
  Dates = 'dates'
}

export interface SmartContractReadonlyAttribute {
  __typename?: 'SmartContractReadonlyAttribute';
  /** Value as address if applicable */
  address?: Maybe<EthereumAddressInfo>;
  /** Method name */
  name: Scalars['String'];
  /** Method return type */
  type: Scalars['String'];
  /** Method return value */
  value: Scalars['String'];
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
  Teal = 'TEAL'
}

/** Selector of smart contract type */
export interface SmartContractTypeSelector {
  /** Smart Contract type is */
  is?: Maybe<SmartContractType>;
  /** Smart Contract type not */
  not?: Maybe<SmartContractType>;
  /** Smart Contract type in the list */
  in?: Maybe<Array<SmartContractType>>;
  /** Smart Contract type not in the list */
  notIn?: Maybe<Array<SmartContractType>>;
}

/** Select by ID */
export interface StringIdSelector {
  /** ID is */
  is?: Maybe<Scalars['String']>;
  /** ID not */
  not?: Maybe<Scalars['String']>;
  /** ID in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** ID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Select by string */
export interface StringSelector {
  /** String is */
  is?: Maybe<Scalars['String']>;
  /** String not */
  not?: Maybe<Scalars['String']>;
  /** String in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** String not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

/** Search result subject */
export type Subject = Address | Currency | HederaAccount | SmartContract | TransactionHash;

/** Time Interval */
export interface TimeInterval {
  __typename?: 'TimeInterval';
  day: Scalars['String'];
  hour: Scalars['String'];
  minute: Scalars['String'];
  month: Scalars['String'];
  second: Scalars['String'];
  year: Scalars['String'];
}


/** Time Interval */
export interface TimeIntervalDayArgs {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
}


/** Time Interval */
export interface TimeIntervalHourArgs {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
}


/** Time Interval */
export interface TimeIntervalMinuteArgs {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
}


/** Time Interval */
export interface TimeIntervalMonthArgs {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
}


/** Time Interval */
export interface TimeIntervalSecondArgs {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
}


/** Time Interval */
export interface TimeIntervalYearArgs {
  count?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
}

/** Timestamp */
export interface Timestamp {
  __typename?: 'Timestamp';
  /** Nanoseconds */
  nanoseconds: Scalars['BigInt'];
  time: Scalars['ISO8601Date'];
}

/** Select trade by ID */
export interface TradeIdSelector {
  /** Trade ID is */
  is?: Maybe<Scalars['String']>;
  /** Trade ID not */
  not?: Maybe<Scalars['String']>;
  /** Trade ID in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Trade ID not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
}

export enum TradeSide {
  /** Buy side */
  Buy = 'BUY',
  /** Sell side */
  Sell = 'SELL'
}

/** Blockchain transaction */
export interface TransactionHash {
  __typename?: 'TransactionHash';
  /** Hash hex representation */
  hash: Scalars['String'];
}

/** Blockchain transaction */
export interface TransactionHashIndex {
  __typename?: 'TransactionHashIndex';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
}

/** Blockchain transaction */
export interface TransactionHashIndexValues {
  __typename?: 'TransactionHashIndexValues';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
  /** Transaction value in input */
  valueIn: Scalars['Float'];
  /** Transaction value in output */
  valueOut: Scalars['Float'];
}

/** Blockchain transaction with value */
export interface TransactionHashValue {
  __typename?: 'TransactionHashValue';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction value */
  value: Scalars['Float'];
}

/** Transaction result */
export interface TransactionResult {
  __typename?: 'TransactionResult';
  /** Result ID */
  id: Scalars['Int'];
  /** Result name */
  name: Scalars['String'];
}

/** Identification of transaction source as client application */
export interface TransactionSource {
  __typename?: 'TransactionSource';
  /** ID numeric */
  code: Scalars['Int'];
  /** Name */
  name: Scalars['String'];
}

/** Select by type of transfer */
export interface TransferTypeSelector {
  /** Transfer Type is */
  is?: Maybe<FilecoinTransferType>;
  /** Transfer Type not */
  not?: Maybe<FilecoinTransferType>;
  /** Transfer Type in the list */
  in?: Maybe<Array<FilecoinTransferType>>;
  /** Transfer Type not in the list */
  notIn?: Maybe<Array<FilecoinTransferType>>;
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
  Currencies = 'currencies'
}

/** Tron Chain */
export interface Tron {
  __typename?: 'Tron';
  /** Basic information about address ( or smart contract ) */
  address: Array<TronAddressInfo>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<TronBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<TronCoinpath>>;
  /** Blockchain Embedded Contracts */
  contracts?: Maybe<Array<TronSmartContracts>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<TronSmartContractCalls>>;
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<TronSmartContractEvents>>;
  /** Blockchain Embedded Contracts */
  trades?: Maybe<Array<TronTrades>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<TronTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<TronTransfers>>;
}


/** Tron Chain */
export interface TronAddressArgs {
  address: Array<AddressSelectorIn>;
}


/** Tron Chain */
export interface TronBlocksArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  witness?: Maybe<AddressSelector>;
  version?: Maybe<IntegerSelector>;
  parentBlockHash?: Maybe<Array<HashSelector>>;
  any?: Maybe<Array<TronBlockFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Tron Chain */
export interface TronCoinpathArgs {
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  initialAddress?: Maybe<AddressSelector>;
  initialDate?: Maybe<DateSelector>;
  initialTime?: Maybe<DateTimeSelector>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  depth?: Maybe<IntegerLimitedSelector>;
  options?: Maybe<CoinpathOptions>;
}


/** Tron Chain */
export interface TronContractsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<TronContractFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Tron Chain */
export interface TronSmartContractCallsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<TronSmartContractCallFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Tron Chain */
export interface TronSmartContractEventsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractEvent?: Maybe<EventSelector>;
  any?: Maybe<Array<TronSmartContractEventFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Tron Chain */
export interface TronTradesArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
  any?: Maybe<Array<TronTradeFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Tron Chain */
export interface TronTransactionsArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
  any?: Maybe<Array<TronTransactionFilter>>;
  options?: Maybe<QueryOptions>;
}


/** Tron Chain */
export interface TronTransfersArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
  any?: Maybe<Array<TronTransferFilter>>;
  options?: Maybe<QueryOptions>;
}

/** Address detailed information for Tron network */
export interface TronAddressInfo {
  __typename?: 'TronAddressInfo';
  /** String address representation */
  address: Scalars['String'];
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<TronSmartContractInfo>;
}

export interface TronBlockFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  witness?: Maybe<AddressSelector>;
  version?: Maybe<IntegerSelector>;
  parentBlockHash?: Maybe<Array<HashSelector>>;
}

/** Blocks in Tron blockchain */
export interface TronBlocks {
  __typename?: 'TronBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Parent block hash */
  parentBlockHash: Scalars['String'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** TX Trie Root Hash */
  txTrieRoot: Scalars['String'];
  /** Block version */
  version?: Maybe<Scalars['Int']>;
  /** Block witness */
  witness?: Maybe<Address>;
  /** Witness signature */
  witnessSignature: Scalars['String'];
}


/** Blocks in Tron blockchain */
export interface TronBlocksAnyArgs {
  of: TronBlocksMeasureable;
}


/** Blocks in Tron blockchain */
export interface TronBlocksCountArgs {
  uniq?: Maybe<TronBlocksUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  blockHash?: Maybe<HashSelector>;
  witness?: Maybe<AddressSelector>;
  version?: Maybe<IntegerSelector>;
  parentBlockHash?: Maybe<Array<HashSelector>>;
}


/** Blocks in Tron blockchain */
export interface TronBlocksHashArgs {
  blockHash?: Maybe<Array<HashSelector>>;
}


/** Blocks in Tron blockchain */
export interface TronBlocksHeightArgs {
  height?: Maybe<BlockSelector>;
}


/** Blocks in Tron blockchain */
export interface TronBlocksMaximumArgs {
  of: TronBlocksMeasureable;
  get?: Maybe<TronBlocksMeasureable>;
}


/** Blocks in Tron blockchain */
export interface TronBlocksMinimumArgs {
  of: TronBlocksMeasureable;
  get?: Maybe<TronBlocksMeasureable>;
}


/** Blocks in Tron blockchain */
export interface TronBlocksParentBlockHashArgs {
  parentBlockHash?: Maybe<Array<HashSelector>>;
}


/** Blocks in Tron blockchain */
export interface TronBlocksTimestampArgs {
  time?: Maybe<DateTimeSelector>;
}


/** Blocks in Tron blockchain */
export interface TronBlocksVersionArgs {
  version?: Maybe<IntegerSelector>;
}


/** Blocks in Tron blockchain */
export interface TronBlocksWitnessArgs {
  witness?: Maybe<AddressSelector>;
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
  Version = 'version'
}

export enum TronBlocksUniq {
  /** Unique witness count */
  Witnesses = 'witnesses',
  /** Unique date count */
  Dates = 'dates'
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
  CallDepth = 'call_depth'
}

/** Coinpath */
export interface TronCoinpath {
  __typename?: 'TronCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<TronAddressInfo>;
  /** Sender address */
  sender?: Maybe<TronAddressInfo>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
}


/** Coinpath */
export interface TronCoinpathAmountArgs {
  in?: Maybe<BaseCurrencyEnum>;
}


/** Coinpath */
export interface TronCoinpathAnyArgs {
  of: CoinpathMeasureable;
}


/** Coinpath */
export interface TronCoinpathMaximumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}


/** Coinpath */
export interface TronCoinpathMinimumArgs {
  of: CoinpathMeasureable;
  get?: Maybe<CoinpathMeasureable>;
}

export interface TronContractFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
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
  WitnessUpdate = 'WitnessUpdate'
}

/** Select contract type(s) */
export interface TronContractTypeSelector {
  /** Contract type is */
  is?: Maybe<TronContractType>;
  /** Contract type not */
  not?: Maybe<TronContractType>;
  /** Contract type in the list */
  in?: Maybe<Array<TronContractType>>;
  /** Contract type not in the list */
  notIn?: Maybe<Array<TronContractType>>;
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
  ContractType = 'contract_type'
}

/**
 * Currency selector in Tron blockchain.
 * Token identified by address of contract for TRC20 tokens and token name (or numeric token ID )  for TRC10
 */
export interface TronCurrencySelector {
  /** Currency is */
  is?: Maybe<Scalars['String']>;
  /** Currency not */
  not?: Maybe<Scalars['String']>;
  /** Currency in the list */
  in?: Maybe<Array<Scalars['String']>>;
  /** Currency not in the list */
  notIn?: Maybe<Array<Scalars['String']>>;
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
  SignatureHash = 'signature_hash'
}

/** Tron smart contract */
export interface TronSmartContract {
  __typename?: 'TronSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
}

export interface TronSmartContractCallFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
}

/** Smart Contract Calls */
export interface TronSmartContractCalls {
  __typename?: 'TronSmartContractCalls';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** External call executed explicitly by caller. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Smart contract being called */
  smartContract?: Maybe<TronSmartContract>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsAnyArgs {
  of: TronCallsMeasureable;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsCountArgs {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsEnergyUsageTotalArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsExternalArgs {
  external?: Maybe<Scalars['Boolean']>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsMaximumArgs {
  of: TronCallsMeasureable;
  get?: Maybe<TronCallsMeasureable>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsMinimumArgs {
  of: TronCallsMeasureable;
  get?: Maybe<TronCallsMeasureable>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsNetUsageArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractMethod?: Maybe<MethodSelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsSmartContractArgs {
  smartContractAddress?: Maybe<AddressSelector>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsSmartContractMethodArgs {
  smartContractMethod?: Maybe<MethodSelector>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsSuccessArgs {
  success?: Maybe<Array<Scalars['Boolean']>>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsTxFromArgs {
  txFrom?: Maybe<AddressSelector>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsTxHashArgs {
  txHash?: Maybe<HashSelector>;
}


/** Smart Contract Calls */
export interface TronSmartContractCallsTxToArgs {
  txTo?: Maybe<AddressSelector>;
}

export interface TronSmartContractEventFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractEvent?: Maybe<EventSelector>;
}

/** Smart Contract Events */
export interface TronSmartContractEvents {
  __typename?: 'TronSmartContractEvents';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Smart contract being Evented */
  smartContract?: Maybe<TronSmartContract>;
  /** Contract method invoked */
  smartContractEvent?: Maybe<Event>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
}


/** Smart Contract Events */
export interface TronSmartContractEventsAnyArgs {
  of: TronEventsMeasureable;
}


/** Smart Contract Events */
export interface TronSmartContractEventsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Smart Contract Events */
export interface TronSmartContractEventsCountArgs {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  smartContractAddress?: Maybe<AddressSelector>;
  smartContractEvent?: Maybe<EventSelector>;
}


/** Smart Contract Events */
export interface TronSmartContractEventsMaximumArgs {
  of: TronEventsMeasureable;
  get?: Maybe<TronEventsMeasureable>;
}


/** Smart Contract Events */
export interface TronSmartContractEventsMinimumArgs {
  of: TronEventsMeasureable;
  get?: Maybe<TronEventsMeasureable>;
}


/** Smart Contract Events */
export interface TronSmartContractEventsSmartContractArgs {
  smartContractAddress?: Maybe<AddressSelector>;
}


/** Smart Contract Events */
export interface TronSmartContractEventsSmartContractEventArgs {
  smartContractEvent?: Maybe<EventSelector>;
}


/** Smart Contract Events */
export interface TronSmartContractEventsTxFromArgs {
  txFrom?: Maybe<AddressSelector>;
}


/** Smart Contract Events */
export interface TronSmartContractEventsTxHashArgs {
  txHash?: Maybe<HashSelector>;
}


/** Smart Contract Events */
export interface TronSmartContractEventsTxToArgs {
  txTo?: Maybe<AddressSelector>;
}

/** Blockchain smart contract */
export interface TronSmartContractInfo {
  __typename?: 'TronSmartContractInfo';
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
}

/** Contracts */
export interface TronSmartContracts {
  __typename?: 'TronSmartContracts';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Contract type */
  contractType?: Maybe<TronContractType>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Transactio owner from address */
  txOwner?: Maybe<Address>;
}


/** Contracts */
export interface TronSmartContractsAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Contracts */
export interface TronSmartContractsAnyArgs {
  of: TronContractsMeasureable;
}


/** Contracts */
export interface TronSmartContractsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Contracts */
export interface TronSmartContractsContractTypeArgs {
  contractType?: Maybe<TronContractTypeSelector>;
}


/** Contracts */
export interface TronSmartContractsCountArgs {
  uniq?: Maybe<SmartContractCallsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Contracts */
export interface TronSmartContractsCurrencyArgs {
  currency?: Maybe<TronCurrencySelector>;
}


/** Contracts */
export interface TronSmartContractsEnergyUsageTotalArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Contracts */
export interface TronSmartContractsFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Contracts */
export interface TronSmartContractsMaximumArgs {
  of: TronContractsMeasureable;
  get?: Maybe<TronContractsMeasureable>;
}


/** Contracts */
export interface TronSmartContractsMinimumArgs {
  of: TronContractsMeasureable;
  get?: Maybe<TronContractsMeasureable>;
}


/** Contracts */
export interface TronSmartContractsNetUsageArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txOwner?: Maybe<AddressSelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  currency?: Maybe<TronCurrencySelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Contracts */
export interface TronSmartContractsSuccessArgs {
  success?: Maybe<Array<Scalars['Boolean']>>;
}


/** Contracts */
export interface TronSmartContractsTxHashArgs {
  txHash?: Maybe<HashSelector>;
}


/** Contracts */
export interface TronSmartContractsTxOwnerArgs {
  txOwner?: Maybe<AddressSelector>;
}

export interface TronTradeFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
}

/** Currency Trades from/to addresses in crypto currencies */
export interface TronTrades {
  __typename?: 'TronTrades';
  amountBuy?: Maybe<Scalars['Float']>;
  amountSell?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where Trade transaction is included */
  block?: Maybe<Block>;
  /** Buy Currency of Trade */
  buyCurrency?: Maybe<Currency>;
  /** Trade buyer */
  buyer?: Maybe<Address>;
  /** Contract type */
  contractType?: Maybe<TronContractType>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** exchange_id */
  exchangeId?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Sell Currency of Trade */
  sellCurrency?: Maybe<Currency>;
  /** Trade seller */
  seller?: Maybe<Address>;
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction hash where Trade happened */
  txHash?: Maybe<Scalars['String']>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesAmountBuyArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesAmountSellArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesAnyArgs {
  of: TronTradesMeasureable;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesBuyCurrencyArgs {
  buyCurrency?: Maybe<TronCurrencySelector>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesBuyerArgs {
  buyer?: Maybe<AddressSelector>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesContractTypeArgs {
  contractType?: Maybe<TronContractTypeSelector>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesCountArgs {
  uniq?: Maybe<TronTradesUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesEnergyUsageTotalArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesExchangeIdArgs {
  exchangeId?: Maybe<IntIdSelector>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesMaximumArgs {
  of: TronTradesMeasureable;
  get?: Maybe<TronTradesMeasureable>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesMinimumArgs {
  of: TronTradesMeasureable;
  get?: Maybe<TronTradesMeasureable>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesNetUsageArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  buyer?: Maybe<AddressSelector>;
  seller?: Maybe<AddressSelector>;
  buyCurrency?: Maybe<TronCurrencySelector>;
  sellCurrency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  amountSell?: Maybe<Array<AmountSelector>>;
  amountBuy?: Maybe<Array<AmountSelector>>;
  exchangeId?: Maybe<IntIdSelector>;
  success?: Maybe<Scalars['Boolean']>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesSellCurrencyArgs {
  sellCurrency?: Maybe<TronCurrencySelector>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesSellerArgs {
  seller?: Maybe<AddressSelector>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Currency Trades from/to addresses in crypto currencies */
export interface TronTradesTxHashArgs {
  txHash?: Maybe<HashSelector>;
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
  ContractType = 'contract_type'
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
  Exchanges = 'exchanges'
}

export interface TronTransactionFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
}

/** Transactions in Tron blockchain */
export interface TronTransactions {
  __typename?: 'TronTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  /** Contract Address */
  contractAddress?: Maybe<Address>;
  count?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyFee?: Maybe<Scalars['Float']>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** Expiration */
  expiration: Scalars['Int'];
  fee?: Maybe<Scalars['Float']>;
  /** Fee Limit */
  feeLimit: Scalars['Int'];
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  internalTransactionsCount?: Maybe<Scalars['Int']>;
  logsCount?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netFee?: Maybe<Scalars['Float']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Ref block Hash hex representation */
  refBlockHash: Scalars['String'];
  /** Result message */
  result?: Maybe<Scalars['String']>;
  /** Signatures */
  signatures: Scalars['String'];
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsAnyArgs {
  of: TronTransactionsMeasureable;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsContractAddressArgs {
  contractAddress?: Maybe<AddressSelector>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsCountArgs {
  uniq?: Maybe<TronTransactionsUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsEnergyFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsEnergyUsageTotalArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsHashArgs {
  txHash?: Maybe<Array<HashSelector>>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsIndexArgs {
  txIndex?: Maybe<Array<TxIndexSelector>>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsInternalTransactionsCountArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsLogsCountArgs {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsMaximumArgs {
  of: TronTransactionsMeasureable;
  get?: Maybe<TronTransactionsMeasureable>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsMinimumArgs {
  of: TronTransactionsMeasureable;
  get?: Maybe<TronTransactionsMeasureable>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsNetFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsNetUsageArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txIndex?: Maybe<TxIndexSelector>;
  success?: Maybe<Scalars['Boolean']>;
  refBlockHash?: Maybe<Array<HashSelector>>;
  contractAddress?: Maybe<AddressSelector>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsRefBlockHashArgs {
  refBlockHash?: Maybe<Array<HashSelector>>;
}


/** Transactions in Tron blockchain */
export interface TronTransactionsSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
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
  InternalTransactionsCount = 'internal_transactions_count'
}

export enum TronTransactionsUniq {
  /** Unique blocks */
  Blocks = 'blocks',
  /** Unique date count */
  Dates = 'dates'
}

export interface TronTransferFilter {
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}

/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfers {
  __typename?: 'TronTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  /** Contract type */
  contractType?: Maybe<TronContractType>;
  count?: Maybe<Scalars['Int']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>;
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersAmountArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersAnyArgs {
  of: TronTransfersMeasureable;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersBlockArgs {
  height?: Maybe<BlockSelector>;
  time?: Maybe<DateTimeSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersContractTypeArgs {
  contractType?: Maybe<TronContractTypeSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersCountArgs {
  uniq?: Maybe<TransfersUniq>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersCurrencyArgs {
  currency?: Maybe<TronCurrencySelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersEnergyUsageTotalArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersEntityIdArgs {
  entityId?: Maybe<EntitySelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersExternalArgs {
  external?: Maybe<Scalars['Boolean']>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersFeeArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  in?: Maybe<BaseCurrencyEnum>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersMaximumArgs {
  of: TronTransfersMeasureable;
  get?: Maybe<TronTransfersMeasureable>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersMinimumArgs {
  of: TronTransfersMeasureable;
  get?: Maybe<TronTransfersMeasureable>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersNetUsageArgs {
  calculate?: Maybe<AmountAggregateFunction>;
  date?: Maybe<DateSelector>;
  time?: Maybe<DateTimeSelector>;
  height?: Maybe<BlockSelector>;
  txHash?: Maybe<HashSelector>;
  txFrom?: Maybe<AddressSelector>;
  txTo?: Maybe<AddressSelector>;
  sender?: Maybe<AddressSelector>;
  receiver?: Maybe<AddressSelector>;
  currency?: Maybe<TronCurrencySelector>;
  contractType?: Maybe<TronContractTypeSelector>;
  entityId?: Maybe<EntitySelector>;
  external?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Array<AmountSelector>>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersReceiverArgs {
  receiver?: Maybe<AddressSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersSenderArgs {
  sender?: Maybe<AddressSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersSuccessArgs {
  success?: Maybe<Scalars['Boolean']>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersTxFromArgs {
  txFrom?: Maybe<AddressSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersTxHashArgs {
  txHash?: Maybe<HashSelector>;
}


/** Currency transfers from/to addresses in crypto currencies */
export interface TronTransfersTxToArgs {
  txTo?: Maybe<AddressSelector>;
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
  TokenType = 'token_type'
}

/** Selector of index of transaction in block */
export interface TxIndexSelector {
  /** Tx index is */
  is?: Maybe<Scalars['Int']>;
  /** Tx index not */
  not?: Maybe<Scalars['Int']>;
  /** Tx index in the list */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Tx index not in the list */
  notIn?: Maybe<Array<Scalars['Int']>>;
}

/** Select transactions by subtype */
export interface TxSubtypeSelector {
  /** Transaction SubType is */
  is?: Maybe<AlgorandTxSubType>;
  /** Transaction SubType not */
  not?: Maybe<AlgorandTxSubType>;
  /** Transaction SubType in the list */
  in?: Maybe<Array<AlgorandTxSubType>>;
  /** Transaction SubType not in the list */
  notIn?: Maybe<Array<AlgorandTxSubType>>;
}

/** Select transactions by type */
export interface TxTypeSelector {
  /** Transaction Type is */
  is?: Maybe<AlgorandTxType>;
  /** Transaction Type not */
  not?: Maybe<AlgorandTxType>;
  /** Transaction Type in the list */
  in?: Maybe<Array<AlgorandTxType>>;
  /** Transaction Type not in the list */
  notIn?: Maybe<Array<AlgorandTxType>>;
}


export const TradingAmount = gql`
    query TradingAmount($address: String, $quoteAddress: String, $from: ISO8601DateTime, $till: ISO8601DateTime, $minTradeUsd: Float, $exchanges: [String!], $intervalMinutes: Int) {
  ethereum(network: bsc) {
    dexTrades(
      options: {asc: "timeInterval.minute"}
      date: {since: $from, till: $till}
      exchangeAddress: {in: $exchanges}
      baseCurrency: {is: $address}
      quoteCurrency: {is: $quoteAddress}
      tradeAmountUsd: {gt: $minTradeUsd}
    ) {
      timeInterval {
        minute(count: $intervalMinutes, format: "%Y-%m-%dT%H:%M:%SZ")
      }
      baseCurrency {
        symbol
        address
      }
      quoteCurrency {
        symbol
        address
      }
      tradeAmount(in: USD)
      trades: count
      quotePrice
      maximum_price: quotePrice(calculate: maximum)
      minimum_price: quotePrice(calculate: minimum)
      open_price: minimum(of: block, get: quote_price)
      close_price: maximum(of: block, get: quote_price)
    }
  }
}
    `;
export const Whales = gql`
    query Whales($minTradeUsd: Float, $since: ISO8601DateTime, $contract: String, $limit: Int) {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: $limit, desc: "block.timestamp.time"}
      date: {since: $since}
      tradeAmountUsd: {gt: $minTradeUsd}
      baseCurrency: {is: $contract}
    ) {
      transaction {
        index
        hash
        txFrom {
          address
        }
      }
      block {
        height
        timestamp {
          time(format: "%Y-%m-%dT%H:%M:%SZ")
        }
      }
      tradeIndex
      buyAmount
      buyAmountInUsd: buyAmount(in: USD)
      buyCurrency {
        symbol
      }
      sellAmount
      sellCurrency {
        symbol
      }
      baseCurrency {
        symbol
      }
      sellAmountInUsd: sellAmount(in: USD)
      tradeAmount(in: USD)
    }
  }
}
    `;
export const WalletCurrency = gql`
    query WalletCurrency {
  ethereum(network: bsc) {
    address(address: {is: "0x6257d93ABdb970f1cB35EcB872CF9b13AE0d0459"}) {
      balances {
        currency {
          address
          name
          symbol
        }
        value
      }
    }
  }
}
    `;
export type TradingAmountQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
  quoteAddress?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  minTradeUsd?: Maybe<Scalars['Float']>;
  exchanges?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  intervalMinutes?: Maybe<Scalars['Int']>;
}>;


export type TradingAmountQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type WhalesQueryVariables = Exact<{
  minTradeUsd?: Maybe<Scalars['Float']>;
  since?: Maybe<Scalars['ISO8601DateTime']>;
  contract?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type WhalesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'index' | 'hash'>
        & { txFrom: (
          { __typename?: 'EthereumAddressInfo' }
          & Pick<EthereumAddressInfo, 'address'>
        ) }
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type WalletCurrencyQueryVariables = Exact<{ [key: string]: never; }>;


export type WalletCurrencyQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { address: Array<(
      { __typename?: 'EthereumAddressInfoWithBalance' }
      & { balances?: Maybe<Array<(
        { __typename?: 'EthereumBalance' }
        & Pick<EthereumBalance, 'value'>
        & { currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'address' | 'name' | 'symbol'>
        )> }
      )>> }
    )> }
  )> }
);
