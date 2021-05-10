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
  Token = 'token'
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
export const PaperHands = gql`
    query PaperHands($minTradeUsd: Float, $since: ISO8601DateTime, $contract: String, $limit: Int) {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: $limit, desc: "tradeAmount"}
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
      date {
        date(format: "%Y-%m-%dT%H:%M:%SZ")
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
export const DexExchanges = gql`
    query DexExchanges {
  ethereum {
    dexTrades(options: {asc: ["date.date"]}, date: {since: "2021-01-01"}) {
      numberOfTrades: count
      tradeAmount(in: USD)
      date {
        date
      }
      exchange {
        fullName
        fullNameWithId
        name
      }
    }
  }
}
    `;
export const Eth20 = gql`
    query Eth20($from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum {
    smartContractEvents(
      options: {desc: "date.date"}
      smartContractAddress: {is: "0x00000000219ab540356cbb839cbe05303d7705fa"}
      date: {since: $from, till: $till}
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
    `;
export const BuySellPriceSpread = gql`
    query BuySellPriceSpread {
  ethereum(network: ethereum) {
    dexTrades(
      date: {is: "2020-11-01"}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
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
    `;
export const BitcoinBlocksByHeight = gql`
    query BitcoinBlocksByHeight {
  bitcoin {
    blocks(options: {limit: 5, desc: "height"}) {
      height
      blockHash
      transactionCount
      date {
        date
      }
    }
  }
}
    `;
export const DexTradesByProtocols = gql`
    query DexTradesByProtocols {
  ethereum {
    dexTrades(options: {limit: 100, desc: "count"}) {
      count
      protocol
    }
  }
}
    `;
export const Balance = gql`
    query Balance($network: EthereumNetwork!, $address: String!) {
  ethereum(network: $network) {
    address(address: {is: $address}) {
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
    `;
export const QueryDexBaseQuotePrices = gql`
    query QueryDexBaseQuotePrices {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 100, asc: "timeInterval.day"}
      date: {between: ["2020-11-01", "2020-11-05"]}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
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
    `;
export const HasToContract = gql`
    query HasToContract {
  ethereum(network: bsc) {
    transfers(
      txHash: {in: "0x06a308e1a7de81f55f3dd57da7ce284f1493560fe17e537890f879752f88e63c", is: "0x06a308e1a7de81f55f3dd57da7ce284f1493560fe17e537890f879752f88e63c"}
    ) {
      currency {
        symbol
        name
        address
        tokenType
      }
    }
  }
}
    `;
export const Eth20ContractBalance = gql`
    query Eth20ContractBalance {
  ethereum {
    address(address: {is: "0x00000000219ab540356cbb839cbe05303d7705fa"}) {
      balances {
        currency {
          symbol
        }
        value
      }
    }
  }
}
    `;
export const BaseQuoteQueryForMirrorPairs = gql`
    query BaseQuoteQueryForMirrorPairs {
  ethereum {
    dexTrades(
      date: {is: "2020-11-29"}
      options: {limit: 10}
      baseCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      quoteCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
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
    `;
export const UniswapOhlcData5MinuteCandleUsdtweth = gql`
    query UniswapOhlcData5MinuteCandleUsdtweth {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 100000, asc: "timeInterval.minute"}
      date: {since: "2021-04-21"}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
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
    `;
export const CakeusdtCurrentPrice = gql`
    query CakeusdtCurrentPrice {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"}
      quoteCurrency: {is: "0x55d398326f99059ff775485246999027b3197955"}
      options: {desc: ["block.height", "transaction.index"], limit: 1}
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
      price
    }
  }
}
    `;
export const UsdtethDailyVolume = gql`
    query UsdtethDailyVolume {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 100, asc: "timeInterval.day"}
      date: {since: "2020-11-01"}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
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
    `;
export const TradesForASpecificTokenOnThePancakedex = gql`
    query TradesForASpecificTokenOnThePancakedex {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "block.height", limit: 1}
      exchangeName: {in: ["Pancake", "Pancake v2"]}
      baseCurrency: {is: "0x36c0556c2b15aed79f842675ff030782738ef9e8"}
      date: {after: "2021-04-28"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const TokenVolumeOnUniswap = gql`
    query TokenVolumeOnUniswap {
  ethereum {
    dexTrades(
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
    ) {
      count
      tradeAmount(in: USD)
    }
  }
}
    `;
export const BitcoinDailyTransactionVolume = gql`
    query BitcoinDailyTransactionVolume($from: ISO8601DateTime, $till: ISO8601DateTime) {
  bitcoin {
    transactions(options: {desc: "date.date"}, date: {since: $from, till: $till}) {
      txVolUSD: inputValue(calculate: sum, in: USD)
      date {
        date
      }
    }
  }
}
    `;
export const TransactionsRelatedToAnAddressAfterCertainBlockHeight = gql`
    query TransactionsRelatedToAnAddressAfterCertainBlockHeight($network: EthereumNetwork!, $address: String!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "block.timestamp.time", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      height: {gt: 9000000}
      smartContractAddress: {is: $address}
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
    `;
export const TopTradesByUsdAmountInDex = gql`
    query TopTradesByUsdAmountInDex {
  ethereum {
    dexTrades(
      options: {limit: 10, desc: "tradeAmount"}
      date: {after: "2020-11-01"}
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
    `;
export const TopGasBurnersInDexTrades = gql`
    query TopGasBurnersInDexTrades {
  ethereum {
    dexTrades(options: {desc: "gasValue", limit: 10}, date: {after: "2020-10-01"}) {
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
    `;
export const PancakeTotalVolumeAndTrades = gql`
    query PancakeTotalVolumeAndTrades {
  ethereum(network: bsc) {
    dexTrades {
      baseCurrency {
        address
        decimals
        name
        symbol
        tokenId
        tokenType
      }
    }
  }
}
    `;
export const BandProtocolOracleReadings = gql`
    query BandProtocolOracleReadings {
  ethereum(network: bsc_testnet) {
    smartContractEvents(
      options: {desc: "block.height", limit: 10}
      smartContractEvent: {is: "RefDataUpdate(string,uint64,uint64,uint64)"}
      smartContractAddress: {is: "0x56761c813fecb76b4df87ddb1912f5855b22ae5a"}
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
    `;
export const InflowOutflowForAddress = gql`
    query InflowOutflowForAddress {
  ethereum {
    out: transfers(
      currency: {is: "ETH"}
      date: {is: "2020-06-11"}
      options: {asc: "out"}
      any: [{sender: {is: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d"}}, {receiver: {is: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d"}}]
    ) {
      in: amount(receiver: {is: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d"})
      out: amount(sender: {is: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d"})
      currency {
        symbol
      }
      transaction {
        hash
      }
    }
  }
}
    `;
export const BalancesQueryWithTimeFilterExample = gql`
    query BalancesQueryWithTimeFilterExample {
  ethereum {
    address(address: {is: "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4"}) {
      balances(time: {till: "2019-07-17T35:04+00:00"}) {
        value
        currency {
          symbol
        }
      }
    }
  }
}
    `;
export const HoprChannelsUsersInTitlisBsc = gql`
    query HoprChannelsUsersInTitlisBsc($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "date.date"}
      date: {since: $from, till: $till}
      smartContractAddress: {is: $address}
      height: {gt: 3970950}
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
    `;
export const NewQuery = gql`
    query NewQuery {
  ethereum {
    dexTrades(options: {limit: 10, desc: "tradeAmount"}) {
      tradeAmount(in: USD)
      exchange {
        fullName
      }
    }
  }
}
    `;
export const BtcTransfers = gql`
    query BtcTransfers($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: [String!]) {
  ethereum(network: $network) {
    transfers(
      options: {desc: "total"}
      date: {since: $from, till: $till}
      currency: {in: $address}
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
    `;
export const BalancerPoolVolumeAtASpecificBlockHeight = gql`
    query BalancerPoolVolumeAtASpecificBlockHeight {
  ethereum {
    dexTrades(
      options: {desc: "count"}
      smartContractAddress: {is: "0x1eff8af5d577060ba4ac8a29a13525bb0ee2a3d5"}
      height: {lteq: 11404498}
    ) {
      count
      tradeAmount(in: USD)
      exchange {
        fullName
      }
    }
  }
}
    `;
export const BitcoinAndZcashFee = gql`
    query BitcoinAndZcashFee {
  bitcoin {
    transactions(options: {asc: "date.date"}) {
      date: date {
        date(format: "%Y")
      }
      count: count
      feeValue
      avgFee: feeValue(calculate: average)
    }
  }
  zcash: bitcoin(network: zcash) {
    transactions(options: {asc: "date.date"}) {
      date: date {
        date(format: "%Y")
      }
      count: count
      feeValue
      avgFee: feeValue(calculate: average)
    }
  }
}
    `;
export const LatestSwapsForABalancerPool = gql`
    query LatestSwapsForABalancerPool {
  ethereum {
    arguments(
      smartContractAddress: {is: "0x1eff8af5d577060ba4ac8a29a13525bb0ee2a3d5"}
      smartContractEvent: {is: "LOG_SWAP"}
      options: {desc: "block.height", limit: 10}
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
    `;
export const Top10TransactionSendersByDateInBsc = gql`
    query Top10TransactionSendersByDateInBsc {
  ethereum(network: bsc) {
    transactions(
      date: {since: "2020-11-15"}
      options: {desc: "Txs", asc: "date.date", limitBy: {each: "date.date", limit: 10}}
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
    `;
export const PancakeTradeVolumeForDifferentCurrencyPairs = gql`
    query PancakeTradeVolumeForDifferentCurrencyPairs {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "tradeAmount"}
      exchangeName: {is: "Pancake"}
      date: {since: "2020-09-12", till: "2020-12-12"}
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
    `;
export const Top10TransactionSendersByDateInBscv1 = gql`
    query Top10TransactionSendersByDateInBscv1 {
  ethereum(network: bsc) {
    transactions(
      date: {since: "2020-11-15"}
      options: {desc: "Txs", asc: "date.date", limitBy: {each: "date.date", limit: 10}}
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
    `;
export const QueryAddressFirstLastTx = gql`
    query QueryAddressFirstLastTx {
  ethereum(network: bsc) {
    transactions(options: {desc: "count", limit: 10}) {
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
    `;
export const PancakeswapDailyActiveUsers = gql`
    query PancakeswapDailyActiveUsers($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "date.date"}
      date: {since: $from, till: $till}
      smartContractAddress: {is: $address}
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
    `;
export const GasCostsSpentByTradersOnDexExchanges = gql`
    query GasCostsSpentByTradersOnDexExchanges {
  ethereum {
    dexTrades(options: {desc: "gasValue"}, date: {after: "2020-10-01"}) {
      exchange {
        fullName
      }
      gasValue
    }
  }
}
    `;
export const BscWeeklyTxsSendersGascost = gql`
    query BscWeeklyTxsSendersGascost($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transactions(options: {desc: "date.date"}, date: {since: $from, till: $till}) {
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
    `;
export const BurgerswapFactoryContractActiveUsersBsc = gql`
    query BurgerswapFactoryContractActiveUsersBsc($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "date.date"}
      date: {since: $from, till: $till}
      smartContractAddress: {is: $address}
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
    `;
export const EthereumUniqueSendersByMonth = gql`
    query EthereumUniqueSendersByMonth {
  ethereum {
    transactions(options: {desc: "date.date", limit: 10}) {
      activeAddress: count(uniq: senders)
      date: date {
        date(format: "%Y-%m")
      }
    }
  }
  binanceSmartChain: ethereum(network: bsc) {
    transactions(options: {desc: "date.date", limit: 10}) {
      activeAddress: count(uniq: senders)
      date: date {
        date(format: "%Y-%m")
      }
    }
  }
}
    `;
export const HowToGetFeeForDexTrades = gql`
    query HowToGetFeeForDexTrades {
  ethereum {
    dexTrades(options: {desc: "gasValue", limit: 10}, date: {after: "2020-10-01"}) {
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
    `;
export const LimitbyExample = gql`
    query LimitbyExample {
  ethereum(network: bsc) {
    transactions(
      date: {since: "2020-11-15"}
      options: {desc: "Txs", asc: "date.date", limitBy: {each: "date.date", limit: 3}}
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
    `;
export const ConfluxDailyTransactionVolumeActiveAddressesTransactionCounts = gql`
    query ConfluxDailyTransactionVolumeActiveAddressesTransactionCounts($from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux {
    transactions(options: {desc: "date.date"}, date: {since: $from, till: $till}) {
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
    `;
export const SpecificBalancerPoolTradesUsingItsAddress = gql`
    query SpecificBalancerPoolTradesUsingItsAddress {
  ethereum {
    dexTrades(
      options: {limit: 50, desc: "block.height"}
      smartContractAddress: {is: "0x1eff8af5d577060ba4ac8a29a13525bb0ee2a3d5"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const QueryKnownDexOnlyWithNames = gql`
    query QueryKnownDexOnlyWithNames {
  ethereum {
    dexTrades(
      options: {desc: "tradeAmount", limit: 100}
      exchangeName: {not: ""}
      date: {since: "2020-01-01", till: null}
    ) {
      protocol
      exchange {
        name
      }
      tradeAmount(in: USD)
    }
  }
}
    `;
export const NewlyCreatedBalancerPools = gql`
    query NewlyCreatedBalancerPools {
  ethereum {
    arguments(
      smartContractAddress: {is: "0x9424b1412450d0f8fc2255faf6046b98213b76bd"}
      smartContractEvent: {is: "LOG_NEW_POOL"}
      options: {asc: "block.height", limit: 100}
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
    `;
export const HackathonQueryBscWeeklyTxsSendersGascost = gql`
    query HackathonQueryBscWeeklyTxsSendersGascost {
  ethereum(network: bsc) {
    transactions(options: {desc: "date.date"}) {
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
    `;
export const Link = gql`
    query Link {
  ethereum {
    uniswap: dexTrades(
      options: {asc: "date.date"}
      smartContractAddress: {is: "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974"}
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
      options: {asc: "date.date"}
      exchangeAddress: {is: "0x2f9ec37d6ccfff1cab21733bdadede11c823ccb0"}
      baseCurrency: {is: "0x514910771af9ca656af840dff83e8264ecf986ca"}
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
      options: {asc: "date.date"}
      smartContractAddress: {is: "0xc40d16476380e4037e6b1a2594caf6a6cc8da967"}
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
    `;
export const BitcoinActiveAddressesByMonth = gql`
    query BitcoinActiveAddressesByMonth {
  bitcoin {
    inputs(options: {desc: ["month.year", "month.month"]}) {
      activeAddress: count(uniq: addresses)
      month: date {
        year
        month
      }
    }
  }
}
    `;
export const PancakeAllSwapsOfAPool = gql`
    query PancakeAllSwapsOfAPool {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "block.height"}
      exchangeName: {is: "Pancake"}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const ExampleOfTimeQuery = gql`
    query ExampleOfTimeQuery {
  ethereum {
    dexTrades(date: {since: "2020-11-24"}, time: {since: "2020-11-24T13:42:00"}) {
      count
      tradeAmount(in: USD)
      exchange {
        fullName
      }
    }
  }
}
    `;
export const LatestPancakeswapPairs = gql`
    query LatestPancakeswapPairs {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      argument: {is: "pair"}
      options: {desc: "block.height", limit: 9}
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
    `;
export const LatestPriceOfAPairOnUniswap = gql`
    query LatestPriceOfAPairOnUniswap {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 1, desc: "block.timestamp.time"}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
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
    `;
export const DexTradesVolumesMonthly = gql`
    query DexTradesVolumesMonthly {
  ethereum {
    dexTrades(options: {asc: ["date.year", "date.month"]}) {
      count
      tradeAmount(in: USD)
      date {
        year
        month
      }
    }
  }
}
    `;
export const AggregateSmartContractArgument = gql`
    query AggregateSmartContractArgument {
  ethereum(network: ethereum) {
    arguments(
      smartContractEvent: {is: "LOG_SWAP(address,address,address,uint256,uint256)"}
      smartContractAddress: {is: "0x003a70265a3662342010823bea15dc84c6f7ed54"}
      argument: {is: "tokenAmountIn"}
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
    `;
export const BalancerProtocolLatestTrades = gql`
    query BalancerProtocolLatestTrades {
  ethereum {
    dexTrades(
      options: {limit: 1, desc: "block.height"}
      exchangeName: {is: "Balancer"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const ExampleOfTransferQueryWithAmountsInUsd = gql`
    query ExampleOfTransferQueryWithAmountsInUsd {
  ethereum {
    transfers(
      options: {limit: 10, asc: "block.height"}
      date: {after: "2020-11-01"}
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
    `;
export const OceanComparisonBancorUniswap = gql`
    query OceanComparisonBancorUniswap {
  ethereum {
    uniswap: dexTrades(
      options: {asc: "date.date"}
      smartContractAddress: {is: "0x9b7dad79fc16106b47a3dab791f389c167e15eb0"}
    ) {
      date {
        date
      }
      tradeAmount(in: USD)
      count
    }
    bancor: dexTrades(
      options: {asc: "date.date"}
      exchangeAddress: {is: "0x2f9ec37d6ccfff1cab21733bdadede11c823ccb0"}
      baseCurrency: {is: "0x967da4048cd07ab37855c090aaf366e4ce1b9f48"}
    ) {
      date {
        date
      }
      tradeAmount(in: USD)
      count
    }
  }
}
    `;
export const UsdtethReserve = gql`
    query UsdtethReserve {
  ethereum {
    arguments(
      smartContractAddress: {is: "0x1eff8af5d577060ba4ac8a29a13525bb0ee2a3d5"}
      smartContractEvent: {is: "LOG_SWAP"}
      options: {desc: "block.height", limit: 10}
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
    `;
export const TopTradesByUsdAmountInDexv1 = gql`
    query TopTradesByUsdAmountInDexv1 {
  ethereum {
    dexTrades(
      options: {limit: 10, desc: "tradeAmount"}
      date: {after: "2021-02-05"}
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
    `;
export const ExampleOfQueryBtcTxsList = gql`
    query ExampleOfQueryBtcTxsList {
  bitcoin {
    transactions(
      date: {is: "2021-01-14"}
      options: {desc: "block.height", limit: 100}
    ) {
      hash
      block {
        height
      }
    }
  }
}
    `;
export const TransferTotalSumOfTotal = gql`
    query TransferTotalSumOfTotal($network: EthereumNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $limit: Int!, $offset: Int!) {
  ethereum(network: $network) {
    transfers(
      date: {since: $from, till: $till}
      amount: {gt: 0}
      options: {limit: $limit, offset: $offset, desc: "count_in"}
    ) {
      sum_in: amount(calculate: sum, receiver: {is: $address})
      sum_out: amount(calculate: sum, sender: {is: $address})
      count_in: count(receiver: {is: $address})
      count_out: count(sender: {is: $address})
      currency {
        address
        symbol
        tokenType
      }
    }
  }
}
    `;
export const FilterByCurrency = gql`
    query FilterByCurrency($network: EthereumNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transfers(
      options: {desc: "count", limit: $limit, offset: $offset}
      amount: {gt: 0}
      date: {since: $from, till: $till}
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
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
    `;
export const PooledTokenForAWbnbcakePairOnPancake = gql`
    query PooledTokenForAWbnbcakePairOnPancake {
  ethereum(network: bsc) {
    address(address: {is: "0xa527a61703d82139f8a06bc30097cc9caa2df5a6"}) {
      balances {
        currency {
          symbol
        }
        value
      }
    }
  }
}
    `;
export const BtcOutputExactly1btc = gql`
    query BtcOutputExactly1btc($network: BitcoinNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $outVal: Float!) {
  bitcoin(network: $network) {
    outputs(
      options: {desc: ["block.height", "transaction.index"], limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      outputValue: {is: $outVal}
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
    `;
export const InboundOutboundTransactionsForBtcAddress = gql`
    query InboundOutboundTransactionsForBtcAddress {
  bitcoin(network: bitcoin) {
    inbound: coinpath(receiver: {is: "3CG5hs3YLhKg8zgxsxc8UPxBmFj4e4oBb2"}) {
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
      sender: {is: "3CG5hs3YLhKg8zgxsxc8UPxBmFj4e4oBb2"}
      receiver: {not: ""}
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
    `;
export const PancakePoolsVolumeForADate = gql`
    query PancakePoolsVolumeForADate {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "count"}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      date: {since: "2020-12-12", till: "2020-12-12"}
    ) {
      count
      tradeAmount(in: USD)
    }
  }
}
    `;
export const Ethdai = gql`
    query Ethdai($baseAddress: String, $quoteAddress: String, $interval: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: $baseAddress}
      quoteCurrency: {is: $quoteAddress}
      date: {is: "2021-01-28"}
      priceAsymmetry: {lt: 0.7}
      any: [{tradeAmountUsd: {gt: 0.00001}}, {tradeAmountUsd: {is: 0}}]
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
    `;
export const TopTradesInDexByGasValueInUsd = gql`
    query TopTradesInDexByGasValueInUsd {
  ethereum {
    dexTrades(
      options: {limit: 10, desc: "gasValueUsd"}
      date: {after: "2020-11-01"}
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
    `;
export const BitcoinMonthlyInputAddresses = gql`
    query BitcoinMonthlyInputAddresses {
  bitcoin {
    inputs(options: {asc: "month.date"}) {
      activeAddress: count(uniq: addresses)
      month: date {
        date(format: "%Y-%m")
      }
    }
  }
}
    `;
export const PancakePools24HourTransfersData = gql`
    query PancakePools24HourTransfersData {
  ethereum(network: bsc) {
    transfers(
      currency: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      amount: {gt: 0}
      date: {since: "2020-12-12", till: "2020-12-12"}
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
    `;
export const PancakeTradingVol = gql`
    query PancakeTradingVol {
  ethereum(network: bsc) {
    dexTrades(options: {limit: 5, desc: "date.date"}, exchangeName: {is: "Pancake"}) {
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
    `;
export const DexTradesVolumesMonthlyv1 = gql`
    query DexTradesVolumesMonthlyv1 {
  ethereum {
    dexTrades(options: {desc: ["date.year"]}) {
      count
      tradeAmount(in: USD)
      date {
        year
      }
    }
  }
}
    `;
export const ConfluxGasSpentByDay = gql`
    query ConfluxGasSpentByDay($network: ConfluxNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux(network: $network) {
    transactions(options: {asc: "date.date"}, date: {since: $from, till: $till}) {
      date: date {
        date(format: $dateFormat)
      }
      count: count
      gasValue(in: USD)
    }
  }
}
    `;
export const DexExchangesByTradeAmounts = gql`
    query DexExchangesByTradeAmounts {
  ethereum {
    dexTrades(options: {limit: 10, desc: "tradeAmount"}) {
      tradeAmount(in: USD)
      exchange {
        fullName
      }
    }
  }
}
    `;
export const NewQueryv1 = gql`
    query NewQueryv1 {
  ethereum {
    dexTrades(options: {limit: 10, desc: "tradeAmount"}) {
      tradeAmount(in: USD)
      exchange {
        fullName
      }
    }
  }
}
    `;
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
    `;
export const TransferTotalSumOfTotalv1 = gql`
    query TransferTotalSumOfTotalv1($network: EthereumNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $limit: Int!, $offset: Int!) {
  ethereum(network: $network) {
    transfers(
      date: {since: $from, till: $till}
      amount: {gt: 0}
      options: {limit: $limit, offset: $offset, desc: "count_in"}
    ) {
      sum_in: amount(calculate: sum, receiver: {is: $address})
      sum_out: amount(calculate: sum, sender: {is: $address})
      count_in: count(receiver: {is: $address})
      count_out: count(sender: {is: $address})
      currency {
        address
        symbol
        tokenType
      }
    }
  }
}
    `;
export const TopTradesByUsdAmountInDexv2 = gql`
    query TopTradesByUsdAmountInDexv2 {
  ethereum {
    dexTrades(
      options: {limit: 10, desc: "tradeAmount"}
      date: {after: "2019-12-31"}
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
    `;
export const PancakeOhlcDataWbnbbusd = gql`
    query PancakeOhlcDataWbnbbusd {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 100, asc: "timeInterval.minute"}
      date: {since: "2020-11-01"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
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
    `;
export const LatestTradesOnPancake = gql`
    query LatestTradesOnPancake {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "block.height"}
      exchangeName: {is: "Pancake"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const NewQueryv2 = gql`
    query NewQueryv2 {
  ethereum {
    dexTrades(
      options: {limit: 10, desc: "tradeAmount"}
      date: {after: "2020-11-01"}
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
    `;
export const ConfluxBlocksOverTime = gql`
    query ConfluxBlocksOverTime($from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux {
    blocks(date: {since: $from, till: $till}) {
      count
      date {
        date
      }
    }
  }
}
    `;
export const PancakePools24HourTransfersDatav1 = gql`
    query PancakePools24HourTransfersDatav1 {
  ethereum(network: bsc) {
    transfers(
      currency: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      date: {since: "2020-12-12", till: "2020-12-12"}
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
    `;
export const PancakePoolsVolumeDayWise = gql`
    query PancakePoolsVolumeDayWise {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "date.date"}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
    ) {
      count
      tradeAmount(in: USD)
      date {
        date(format: "%y-%m-%d")
      }
    }
  }
}
    `;
export const ExampleOfDexCandlestickPairQueryByAllExchangesProtocols = gql`
    query ExampleOfDexCandlestickPairQueryByAllExchangesProtocols($baseAddress: String, $quoteAddress: String, $from: ISO8601DateTime!, $to: ISO8601DateTime!, $interval: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: $baseAddress}
      quoteCurrency: {is: $quoteAddress}
      date: {between: [$from, $to]}
      priceAsymmetry: {lt: 0.7}
      any: [{tradeAmountUsd: {gt: 0.00001}}, {tradeAmountUsd: {is: 0}}]
    ) {
      timeInterval {
        minute(format: "%FT%TZ", count: $interval)
      }
      buyCurrency: baseCurrency {
        symbol
        address
        tokenId
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
    `;
export const Firstone = gql`
    query Firstone {
  ethereum {
    dexTrades(options: {limit: 100, desc: "count"}) {
      count
      exchange {
        fullName
      }
    }
  }
}
    `;
export const NewQueryv3 = gql`
    query NewQueryv3 {
  ethereum {
    dexTrades(options: {desc: "gasValue", limit: 10}, date: {after: "2020-10-01"}) {
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
    `;
export const QueryMinMaxBlockPerDate = gql`
    query QueryMinMaxBlockPerDate {
  ethereum {
    blocks(date: {is: "2020-06-11"}) {
      minimum(of: block)
      maximum(of: block)
    }
  }
}
    `;
export const TwtbusdSpreadInfo = gql`
    query TwtbusdSpreadInfo {
  ethereum(network: bsc) {
    dexTrades(
      date: {is: "2020-12-21"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0x4b0f1812e5df2a09796481ff14017e6005508003"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
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
    `;
export const CurveDexTradesByScDaily = gql`
    query CurveDexTradesByScDaily {
  ethereum {
    dexTrades(
      options: {asc: ["smartContract.address.address", "date.date"]}
      exchangeName: {is: "Curve"}
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
    `;
export const DexFilteringByTakerAddressTypeSmartContract = gql`
    query DexFilteringByTakerAddressTypeSmartContract {
  ethereum {
    dexTrades(date: {is: "2021-01-11"}, takerSmartContractType: {notIn: [None]}) {
      count
      taker {
        smartContract {
          contractType
        }
      }
    }
  }
}
    `;
export const TxListInSpecificTimeframe = gql`
    query TxListInSpecificTimeframe($baseAddress: String, $quoteAddress: String, $from: ISO8601DateTime!) {
  ethereum(network: ethereum) {
    dexTrades(
      time: {between: ["2021-01-29T11:00:00Z", "2021-01-29T11:05:00Z"]}
      baseCurrency: {is: $baseAddress}
      quoteCurrency: {is: $quoteAddress}
      date: {since: $from}
      priceAsymmetry: {lt: 0.7}
      any: [{tradeAmountUsd: {gt: 0.00001}}, {tradeAmountUsd: {is: 0}}]
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
    `;
export const NewQueryv4 = gql`
    query NewQueryv4 {
  ethereum {
    dexTrades(options: {asc: ["date.year", "date.month"]}) {
      count
      tradeAmount(in: USD)
      date {
        year
        month
      }
    }
  }
}
    `;
export const DexTradeVolumeYearly = gql`
    query DexTradeVolumeYearly {
  ethereum {
    dexTrades(options: {desc: ["date.year"]}) {
      count
      tradeAmount(in: USD)
      date {
        year
      }
    }
  }
}
    `;
export const NewQueryv5 = gql`
    query NewQueryv5 {
  ethereum {
    dexTrades(
      options: {limit: 10, desc: "gasValueUsd"}
      date: {after: "2020-11-01"}
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
    `;
export const BuildReward = gql`
    query BuildReward($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: [String!]) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "txsCount"}
      date: {since: $from, till: $till}
      smartContractAddress: {in: $address}
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
    `;
export const PooledTokenInAPancakePool = gql`
    query PooledTokenInAPancakePool {
  ethereum(network: bsc) {
    address(address: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}) {
      balances {
        currency {
          symbol
        }
        value
      }
    }
  }
}
    `;
export const PancakePoolsVolumeDataFor24HoursOverTime = gql`
    query PancakePoolsVolumeDataFor24HoursOverTime {
  ethereum(network: bsc) {
    transfers(
      currency: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      date: {since: "2020-12-01", till: "2020-12-12"}
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
    `;
export const PancakeVolumeOverMonth = gql`
    query PancakeVolumeOverMonth {
  ethereum(network: bsc) {
    dexTrades(
      options: {asc: ["date.year", "date.month"]}
      exchangeName: {is: "Pancake"}
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
    `;
export const DodoDexTrades = gql`
    query DodoDexTrades {
  ethereum {
    dexTrades(
      options: {limit: 10, desc: "block.height"}
      exchangeName: {is: "Dodo"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const BalancesQueryWithTimeFilterExamplev1 = gql`
    query BalancesQueryWithTimeFilterExamplev1 {
  ethereum {
    address(address: {is: "0x664706C3b5ccE1f2C7f89988ca5b804365E1f97b"}) {
      balances(time: {till: "2019-01-13T12:35:04+00:00"}) {
        value
        currency {
          symbol
        }
      }
    }
  }
}
    `;
export const SliceByTakerScType = gql`
    query SliceByTakerScType {
  ethereum {
    uniswap: dexTrades(
      smartContractAddress: {is: "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974"}
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
      exchangeAddress: {is: "0x2f9ec37d6ccfff1cab21733bdadede11c823ccb0"}
      baseCurrency: {is: "0x514910771af9ca656af840dff83e8264ecf986ca"}
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
      smartContractAddress: {is: "0xc40d16476380e4037e6b1a2594caf6a6cc8da967"}
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
    `;
export const QueryCoinpath = gql`
    query QueryCoinpath($network: EthereumNetwork!, $address: String!, $inboundDepth: Int!, $outboundDepth: Int!, $limit: Int!, $currency: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: $inboundDepth}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
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
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: $outboundDepth}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
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
    `;
export const NewQueryv6 = gql`
    query NewQueryv6($from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum {
    smartContractEvents(
      options: {desc: "date.date"}
      smartContractAddress: {is: "0x00000000219ab540356cbb839cbe05303d7705fa"}
      date: {since: $from, till: $till}
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
    `;
export const ExampleOfQueryWithTimestampWithZone = gql`
    query ExampleOfQueryWithTimestampWithZone {
  ethereum {
    dexTrades(date: {is: "2020-11-01"}, options: {limit: 10}) {
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
    `;
export const PancakeUsdtcakePairLatestSwaps = gql`
    query PancakeUsdtcakePairLatestSwaps {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "block.height"}
      exchangeName: {is: "Pancake"}
      smartContractAddress: {is: "0x3f3d4ce222a7c919ea7f0231471c77478e36fc0d"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const QueryScArgsForTheLatestEventSwap = gql`
    query QueryScArgsForTheLatestEventSwap {
  ethereum(network: bsc) {
    arguments(
      options: {limitBy: {each: "sender", limit: 1}, desc: "block.height"}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      smartContractEvent: {is: "Swap"}
    ) {
      block {
        height
      }
      transaction {
        hash
      }
      sender: any(of: argument_value, argument: {is: "sender"})
      to: any(of: argument_value, argument: {is: "to"})
      amount0In: any(of: argument_value, argument: {is: "amount0In"})
      amount0Out: any(of: argument_value, argument: {is: "amount0Out"})
      amount1In: any(of: argument_value, argument: {is: "amount1In"})
      amount1Out: any(of: argument_value, argument: {is: "amount1Out"})
    }
  }
}
    `;
export const PancakeSwapEventsNewApis = gql`
    query PancakeSwapEventsNewApis {
  ethereum(network: bsc) {
    arguments(
      options: {limitBy: {each: "sender", limit: 1}, desc: "block.height"}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      smartContractEvent: {is: "Swap"}
    ) {
      block {
        height
      }
      transaction {
        hash
      }
      sender: any(of: argument_value, argument: {is: "sender"})
      to: any(of: argument_value, argument: {is: "to"})
      amount0In: any(of: argument_value, argument: {is: "amount0In"})
      amount0Out: any(of: argument_value, argument: {is: "amount0Out"})
      amount1In: any(of: argument_value, argument: {is: "amount1In"})
      amount1Out: any(of: argument_value, argument: {is: "amount1Out"})
    }
  }
}
    `;
export const Asd = gql`
    query Asd {
  ethereum {
    dexTrades(options: {limit: 100, desc: "count"}) {
      count
      exchange {
        fullName
      }
    }
  }
}
    `;
export const NewQueryv7 = gql`
    query NewQueryv7 {
  ethereum {
    dexTrades(options: {desc: ["date.year"]}) {
      count
      tradeAmount(in: USD)
      date {
        year
      }
    }
  }
}
    `;
export const QeueryName = gql`
    query QeueryName($address: [String!]) {
  ethereum(network: bsc) {
    transactions(txSender: {in: $address}) {
      sender {
        address
      }
      first_tx_time: minimum(of: date)
    }
  }
}
    `;
export const CopyOfQeueryName = gql`
    query CopyOfQeueryName($address: [String!]) {
  ethereum(network: bsc) {
    transactions(txSender: {in: $address}) {
      sender {
        address
      }
      first_tx_time: minimum(of: date)
    }
  }
}
    `;
export const Test = gql`
    query Test($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime, $limit: Int!, $offset: Int!) {
  ethereum(network: $network) {
    dexTrades(
      options: {desc: "currencyAmount", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
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
    `;
export const UsdtethDailyVolumev1 = gql`
    query UsdtethDailyVolumev1 {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 100, asc: "timeInterval.day"}
      date: {since: "2020-11-01"}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
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
    `;
export const Limit5ByCallerSc = gql`
    query Limit5ByCallerSc($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: [String!]) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {asc: "block.height", limitBy: {each: "caller.address", limit: 5}}
      date: {since: $from, till: $till}
      smartContractAddress: {in: $address}
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
    `;
export const AggregateSmartContractArgumentv1 = gql`
    query AggregateSmartContractArgumentv1 {
  ethereum(network: ethereum) {
    arguments(
      smartContractEvent: {is: "LOG_SWAP(address,address,address,uint256,uint256)"}
      smartContractAddress: {is: "0x003a70265a3662342010823bea15dc84c6f7ed54"}
      argument: {is: "tokenAmountIn"}
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
    `;
export const AllPancakeMints = gql`
    query AllPancakeMints {
  ethereum(network: bsc) {
    smartContractEvents(
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      smartContractEvent: {is: "Mint"}
      options: {limit: 10, desc: "block.height"}
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
    `;
export const NewQueryv8 = gql`
    query NewQueryv8 {
  ethereum {
    dexTrades(options: {limit: 100, desc: "count"}) {
      count
      exchange {
        fullName
      }
    }
  }
}
    `;
export const Ghghgh = gql`
    query Ghghgh($address: [String!]) {
  ethereum(network: bsc) {
    transactions(txSender: {in: $address}) {
      sender {
        address
      }
      first_tx_time: minimum(of: date)
    }
  }
}
    `;
export const GraphqlAliasExample = gql`
    query GraphqlAliasExample {
  ethereum {
    transactions(options: {desc: "date.date", limit: 10}) {
      activeAddress: count(uniq: senders)
      date: date {
        date(format: "%Y-%m")
      }
    }
  }
  binanceSmartChain: ethereum(network: bsc) {
    transactions(options: {desc: "date.date", limit: 10}) {
      activeAddress: count(uniq: senders)
      date: date {
        date(format: "%Y-%m")
      }
    }
  }
}
    `;
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
    `;
export const NewQueryv9 = gql`
    query NewQueryv9 {
  ethereum {
    dexTrades(
      options: {limit: 10, desc: "tradeAmount"}
      date: {after: "2020-11-01"}
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
    `;
export const NewQueryv10 = gql`
    query NewQueryv10 {
  ethereum {
    dexTrades(
      options: {limit: 10, desc: "tradeAmount"}
      date: {after: "2020-11-01"}
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
    `;
export const NewQueryv11 = gql`
    query NewQueryv11($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "date.date"}
      date: {since: $from, till: $till}
      smartContractAddress: {is: $address}
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
    `;
export const Yuyu = gql`
    query Yuyu($address: [String!]) {
  ethereum(network: bsc) {
    transactions(txSender: {in: $address}) {
      sender {
        address
      }
      first_tx_time: minimum(of: date)
    }
  }
}
    `;
export const Uiuiui = gql`
    query Uiuiui($address: [String!]) {
  ethereum(network: bsc) {
    transactions(txSender: {in: $address}) {
      sender {
        address
      }
      first_tx_time: minimum(of: date)
    }
  }
}
    `;
export const Q787878 = gql`
    query q787878($address: [String!]) {
  ethereum(network: bsc) {
    transactions(txSender: {in: $address}) {
      sender {
        address
      }
      first_tx_time: minimum(of: date)
    }
  }
}
    `;
export const DiverisfyTradesOver0x = gql`
    query DiverisfyTradesOver0x {
  ethereum {
    dexTrades(exchangeName: {is: "DeversiFi"}) {
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
    `;
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
    `;
export const CopyOfDexExchanges = gql`
    query CopyOfDexExchanges {
  ethereum {
    dexTrades(options: {desc: "count"}) {
      count
      tradeAmount(in: USD)
      exchange {
        fullName
      }
    }
  }
}
    `;
export const CopyOfDexExchangesv1 = gql`
    query CopyOfDexExchangesv1 {
  ethereum {
    dexTrades(options: {desc: "count"}) {
      count
      tradeAmount(in: USD)
      exchange {
        fullName
      }
    }
  }
}
    `;
export const SfpbnbLpFarm = gql`
    query SfpbnbLpFarm($network: EthereumNetwork!, $limit: Int!, $offset: Int!, $contract: String!, $event: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    smartContractEvents(
      options: {desc: "block.timestamp.time", limit: $limit, offset: $offset}
      smartContractAddress: {is: $contract}
      smartContractEvent: {is: $event}
      date: {since: $from, till: $till}
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
    `;
export const ReferenceAddressIsNotImplementedForCubequery = gql`
    query ReferenceAddressIsNotImplementedForCubequery {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      txFrom: {is: "0xcb9beb32743e7d55ed4176ec099edf52bdffaa07"}
      options: {desc: "block.height", limit: 9}
    ) {
      transaction {
        hash
      }
      callDepth
      block {
        height
      }
      token0_address: any(argument: {is: "token0"}, of: argument_value)
      token0_symbol: any(
        argument: {is: "token0"}
        of: argument_value
        as: token_symbol
      )
      token0_name: any(argument: {is: "token0"}, of: argument_value, as: token_name)
      token1_address: any(argument: {is: "token1"}, of: argument_value)
      token1_symbol: any(
        argument: {is: "token1"}
        of: argument_value
        as: token_symbol
      )
      token1_name: any(argument: {is: "token1"}, of: argument_value, as: token_name)
      pair_address: any(argument: {is: "pair"}, of: argument_value)
      pair_symbol: any(argument: {is: "pair"}, of: argument_value, as: token_symbol)
      pair_name: any(argument: {is: "pair"}, of: argument_value, as: token_name)
    }
  }
}
    `;
export const ConfluxTotalTxSendersAndReceivers = gql`
    query ConfluxTotalTxSendersAndReceivers($network: ConfluxNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  conflux(network: $network) {
    transactions(date: {since: $from, till: $till}) {
      senders: count(uniq: senders)
      receivers: count(uniq: receivers)
      gasValue
    }
  }
}
    `;
export const ReferenceAddressIsNotImplementedForCubequeryv1 = gql`
    query ReferenceAddressIsNotImplementedForCubequeryv1 {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      txFrom: {is: "0xcb9beb32743e7d55ed4176ec099edf52bdffaa07"}
      reference: {is: "0x47ff6511939ab379d7756b003f61010b9eab3077"}
      argument: {in: ["token0"]}
      options: {desc: "block.height", limit: 9}
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
    `;
export const ConfluxTotalTransfersSendersReceivers = gql`
    query ConfluxTotalTransfersSendersReceivers {
  conflux(network: conflux_tethys) {
    transfers(amount: {gt: 0}) {
      senders: count(uniq: senders)
      receivers: count(uniq: receivers)
      transfers: count(uniq: transfers)
    }
  }
}
    `;
export const BogbusdPairPrice = gql`
    query BogbusdPairPrice($baseAddress: String!, $quoteAddress: String!, $interval: Int) {
  ethereum(network: bsc) {
    dexTrades(
      date: {since: "2021-04-29"}
      baseCurrency: {is: $baseAddress}
      quoteCurrency: {is: $quoteAddress}
      exchangeName: {in: ["Pancake", "Pancake v2"]}
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
    `;
export const Bsc1inchV2AggregationProtocolTotalVolume = gql`
    query Bsc1inchV2AggregationProtocolTotalVolume {
  ethereum(network: bsc) {
    dexTrades(any: {txTo: {is: "0x111111254bf8547e7183e4bbfc36199f3cedf4a1"}}) {
      tradeAmount(in: USD)
      trades: count(uniq: txs)
      uniqueWallets: count(uniq: senders)
    }
  }
}
    `;
export const Bsc1inchV3AggregationProtocolTotalVolume = gql`
    query Bsc1inchV3AggregationProtocolTotalVolume {
  ethereum(network: bsc) {
    dexTrades(any: {txTo: {is: "0x11111112542D85B3EF69AE05771c2dCCff4fAa26"}}) {
      tradeAmount(in: USD)
      trades: count(uniq: txs)
      uniqueWallets: count(uniq: senders)
    }
  }
}
    `;
export const QueryPancakeswapPairsCreatedForToken = gql`
    query QueryPancakeswapPairsCreatedForToken {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      options: {asc: "block.height", limit: 10}
    ) {
      block {
        height
      }
      any(
        of: argument_value
        argument: {is: "token0"}
        value: {in: "0x1af3b59a839e97e944c65177ab3a024b499133f8"}
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
    `;
export const CopyOfUsdPrice = gql`
    query CopyOfUsdPrice($baseAddress: String!, $quoteAddress: String!, $connector1: String!, $from: ISO8601DateTime!, $interval: Int) {
  ethereum(network: bsc) {
    dexTrades(
      any: [{baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $quoteAddress}}, {baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $connector1}}, {baseCurrency: {is: $connector1}, quoteCurrency: {is: $quoteAddress}}]
      date: {since: $from}
      tradeAmountUsd: {gt: 10}
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
    `;
export const TradesForASpecificTokenOnThePancakedexv1 = gql`
    query TradesForASpecificTokenOnThePancakedexv1 {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "block.height", limit: 1}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0x36c0556c2b15aed79f842675ff030782738ef9e8"}
      date: {after: "2021-03-28"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const WeirdIssueChangingData = gql`
    query WeirdIssueChangingData {
  ethereum(network: bsc) {
    transfers(
      currency: {is: "0x9706874413ce8dc647a6303d4a257031ad85483e"}
      receiver: {is: "0x000000000000000000000000000000000000dead"}
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
    `;
export const UbiLastPrice = gql`
    query UbiLastPrice {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 1, desc: "block.timestamp.time"}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0xdd1ad9a21ce722c151a836373babe42c868ce9a4"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
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
    `;
export const AllTokensOfBscAddress = gql`
    query AllTokensOfBscAddress {
  ethereum(network: bsc) {
    address(address: {is: "0x1425844319d9a7a375c8f0d05c528948ca2fe3ce"}) {
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
    `;
export const ListFegPairsOnBsc = gql`
    query ListFegPairsOnBsc($in: [String!], $network: EthereumNetwork, $since: ISO8601DateTime) {
  ethereum(network: $network) {
    dexTrades(baseCurrency: {in: $in}, time: {since: $since}) {
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
    `;
export const HederaEffectOfOutage = gql`
    query HederaEffectOfOutage {
  hedera {
    messages(date: {between: ["2021-03-12", "2021-03-13"]}) {
      hour: time {
        time(format: "%Y-%m-%dT%H:00:00")
      }
      count
    }
  }
}
    `;
export const HederaMessagesSplitByTopics = gql`
    query HederaMessagesSplitByTopics {
  hedera {
    messages(date: {between: ["2021-03-12", "2021-03-13"]}) {
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
    `;
export const QueryBalanceBsc = gql`
    query QueryBalanceBsc {
  ethereum(network: bsc) {
    address(address: {is: "0x441949e9F37A84A0E080Cc6E58247dEE9668D160"}) {
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
    `;
export const CakeCurrencyPriceUsingCakeusdtPair = gql`
    query CakeCurrencyPriceUsingCakeusdtPair {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0xa4973ac278604e5b101aa1d5f224edaa49f77924"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
      options: {desc: ["block.height", "transaction.index"], limit: 1}
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
    `;
export const Pancake = gql`
    query Pancake {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "block.height"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0x36c0556c2b15aed79f842675ff030782738ef9e8"}
      date: {after: "2021-03-28"}
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
    `;
export const NotReturningResults = gql`
    query NotReturningResults {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      options: {asc: "block.height", limit: 10}
    ) {
      block {
        height
      }
      any(
        of: argument_value
        value: {in: "0x62A9B39e3F851dE684954e0b013997A96De1f7C8"}
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
    `;
export const ExampleForDexPie = gql`
    query ExampleForDexPie {
  ethereum {
    dexTrades(
      date: {since: "2021-01-01"}
      options: {desc: "tradeAmount", limit: 10}
    ) {
      count
      tradeAmount(in: USD)
      exchange {
        fullName
      }
    }
  }
}
    `;
export const NotReturningResultsv1 = gql`
    query NotReturningResultsv1 {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      options: {asc: "block.height", limit: 10}
    ) {
      block {
        height
      }
      any(
        of: argument_value
        value: {in: "0x62A9B39e3F851dE684954e0b013997A96De1f7C8"}
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
    `;
export const BscDailyActiveAddressesTxs = gql`
    query BscDailyActiveAddressesTxs($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transactions(options: {desc: "date.date"}, date: {since: $from, till: $till}) {
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
    `;
export const Mfxy_01 = gql`
    query Mfxy_01($network: EthereumNetwork!, $address: String!) {
  ethereum(network: $network) {
    address(address: {is: $address}) {
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
    `;
export const CopyOfQueryThatExecutesSqlFastAndSlowRenders = gql`
    query CopyOfQueryThatExecutesSqlFastAndSlowRenders {
  ethereum(network: ethereum) {
    dexTrades(date: {since: "2020-08-08", till: null}, exchangeName: {not: ""}) {
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
    `;
export const OracleEvents = gql`
    query OracleEvents {
  ethereum(network: ethereum) {
    smartContractEvents(
      options: {desc: "block.timestamp.time", limit: 10, offset: 0}
      date: {since: "2021-03-14"}
      smartContractAddress: {is: "0x00c7a37b03690fb9f41b5c5af8131735c7275446"}
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
    `;
export const Allpricesquery = gql`
    query Allpricesquery {
  ethereum(network: bsc) {
    count0: dexTrades(
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-21"}
      quoteCurrency: {not: "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830"}
      baseCurrency: {is: "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2020-11-30"}
      quoteCurrency: {not: "0x12e34cdf6a031a10fe241864c32fb03a4fdad739"}
      baseCurrency: {is: "0x12e34cdf6a031a10fe241864c32fb03a4fdad739"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-21"}
      quoteCurrency: {not: "0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d"}
      baseCurrency: {is: "0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2020-09-18"}
      quoteCurrency: {not: "0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa"}
      baseCurrency: {is: "0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-21"}
      quoteCurrency: {not: "0xe4ae305ebe1abe663f261bc00534067c80ad677c"}
      baseCurrency: {is: "0xe4ae305ebe1abe663f261bc00534067c80ad677c"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-17"}
      quoteCurrency: {not: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63"}
      baseCurrency: {is: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-21"}
      quoteCurrency: {not: "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95"}
      baseCurrency: {is: "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-03-11"}
      quoteCurrency: {not: "0x851f7a700c5d67db59612b871338a85526752c25"}
      baseCurrency: {is: "0x851f7a700c5d67db59612b871338a85526752c25"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-20"}
      quoteCurrency: {not: "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8"}
      baseCurrency: {is: "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-21"}
      quoteCurrency: {not: "0xa184088a740c695e156f91f5cc086a06bb78b827"}
      baseCurrency: {is: "0xa184088a740c695e156f91f5cc086a06bb78b827"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-20"}
      quoteCurrency: {not: "0xf952fc3ca7325cc27d15885d37117676d25bfda6"}
      baseCurrency: {is: "0xf952fc3ca7325cc27d15885d37117676d25bfda6"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-21"}
      quoteCurrency: {not: "0xe02df9e3e622debdd69fb838bb799e3f168902c5"}
      baseCurrency: {is: "0xe02df9e3e622debdd69fb838bb799e3f168902c5"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-16"}
      quoteCurrency: {not: "BNB"}
      baseCurrency: {is: "BNB"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-25"}
      quoteCurrency: {not: "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51"}
      baseCurrency: {is: "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51"}
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
      options: {asc: "timeInterval.minute", limitBy: {each: "timeInterval.minute", limit: 1}}
      date: {since: "2021-02-23"}
      quoteCurrency: {not: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e"}
      baseCurrency: {is: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e"}
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
    `;
export const FilteredArguments = gql`
    query FilteredArguments {
  ethereum(network: ethereum) {
    arguments(
      options: {desc: "block.timestamp.time", limit: 10, offset: 0}
      date: {since: "2021-03-14"}
      smartContractMethod: {is: "submit"}
      argument: {is: "_submission"}
      smartContractAddress: {is: "0x00c7a37b03690fb9f41b5c5af8131735c7275446"}
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
    `;
export const FenixswapTotalVolumeAndTrades = gql`
    query FenixswapTotalVolumeAndTrades {
  ethereum(network: bsc) {
    dexTrades(exchangeName: {is: "FenixSwap"}) {
      count
      tradeAmount(in: USD)
    }
  }
}
    `;
export const TradesForASpecificTokenOnTheFenixswap = gql`
    query TradesForASpecificTokenOnTheFenixswap {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "block.height"}
      exchangeName: {is: "FenixSwap"}
      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const FenixswapTradeVolumeForDifferentCurrencyPairs = gql`
    query FenixswapTradeVolumeForDifferentCurrencyPairs {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "tradeAmount"}
      exchangeName: {is: "FenixSwap"}
      date: {since: "2020-09-12", till: "2020-12-12"}
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
    `;
export const PieChartDexExchanges = gql`
    query PieChartDexExchanges {
  ethereum {
    dexTrades(
      date: {since: "2021-01-01"}
      options: {desc: "tradeAmount", limit: 10}
    ) {
      count
      tradeAmount(in: USD)
      exchange {
        fullName
      }
    }
  }
}
    `;
export const FenixswapNewPair = gql`
    query FenixswapNewPair {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0x22574998Bb242B74847089e435D552a5A30D109F"}
      smartContractEvent: {is: "PairCreated"}
      argument: {is: "token0"}
      options: {desc: "block.height", limit: 10}
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
    `;
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
    `;
export const LatestFenixswapPairs = gql`
    query LatestFenixswapPairs {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0x22574998Bb242B74847089e435D552a5A30D109F"}
      smartContractEvent: {is: "PairCreated"}
      argument: {is: "pair"}
      options: {desc: "block.height", limit: 9}
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
    `;
export const BtcRewardByMonthByMiner = gql`
    query BtcRewardByMonthByMiner($network: BitcoinNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  bitcoin(network: $network) {
    outputs(
      options: {asc: "date.month"}
      date: {since: $from, till: $till}
      txIndex: {is: 0}
      outputDirection: {is: mining}
      outputScriptType: {notIn: [nulldata, nonstandard]}
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
    `;
export const FenixswapDailyActiveUsers = gql`
    query FenixswapDailyActiveUsers($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "date.date"}
      date: {since: $from, till: $till}
      smartContractAddress: {is: $address}
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
    `;
export const BtcRewardByDay = gql`
    query BtcRewardByDay($network: BitcoinNetwork!, $dateFormat: String!) {
  bitcoin(network: $network) {
    outputs(
      options: {asc: "date.date"}
      txIndex: {is: 0}
      outputDirection: {is: mining}
      outputScriptType: {notIn: [nulldata, nonstandard]}
    ) {
      date {
        date(format: $dateFormat)
      }
      reward: value
    }
  }
}
    `;
export const BtcMoneyFlow = gql`
    query BtcMoneyFlow($network: BitcoinNetwork!, $address: String!, $inboundDepth: Int!, $outboundDepth: Int!, $limit: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  bitcoin(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: $inboundDepth}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
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
      initialAddress: {is: $address}
      depth: {lteq: $outboundDepth}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
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
    `;
export const Moooo = gql`
    query Moooo($network: EthereumNetwork!, $address: String!, $inboundDepth: Int!, $outboundDepth: Int!, $limit: Int!, $currency: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: $inboundDepth}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
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
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: $outboundDepth}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
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
    `;
export const EventsForTxsByHash = gql`
    query EventsForTxsByHash($network: EthereumNetwork, $txHashes: [String!]) {
  ethereum(network: $network) {
    smartContractEvents(txHash: {in: $txHashes}) {
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
    `;
export const AverageGasPriceInBscNetwork = gql`
    query AverageGasPriceInBscNetwork($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transactions(
      options: {asc: "block.timestamp.time"}
      date: {since: $from, till: $till}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:00:00")
        }
      }
      medianGasPrice: gasPrice(calculate: median)
      averageGasPrice: gasPrice(calculate: average)
      minGasPrice: gasPrice(calculate: minimum)
      maxGasPrice: gasPrice(calculate: maximum)
    }
  }
}
    `;
export const GraphOfMoneyFlowFor1inchDexInEth = gql`
    query GraphOfMoneyFlowFor1inchDexInEth($network: EthereumNetwork!, $address: String!, $inboundDepth: Int!, $outboundDepth: Int!, $limit: Int!, $currency: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: $inboundDepth}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
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
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: $outboundDepth}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
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
    `;
export const Bsc0xApiFillsByDex = gql`
    query Bsc0xApiFillsByDex($from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: bsc) {
    dexTrades(
      options: {asc: "date.date"}
      date: {since: $from, till: $till}
      txTo: {is: "0xdef1c0ded9bec7f1a1670819833240f027b25eff"}
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
    `;
export const BinanceSmartChainTxPerDayv1 = gql`
    query BinanceSmartChainTxPerDayv1 {
  ethereum(network: bsc) {
    transactions {
      date {
        date
      }
      count
    }
  }
}
    `;
export const BscWeeklyTxsSendersAndGascost = gql`
    query BscWeeklyTxsSendersAndGascost($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transactions(options: {desc: "date.date"}, date: {since: $from, till: $till}) {
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
    `;
export const Error_1MyQuery = gql`
    query Error_1MyQuery {
  ethereum(network: bsc) {
    smartContractCalls(
      date: {after: "2021-03-15"}
      options: {desc: "senders", limitBy: {each: "date.date", limit: 5}, limit: 100}
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
    `;
export const Error_2 = gql`
    query Error_2 {
  ethereum(network: bsc) {
    smartContractCalls(
      options: {desc: "external_txs", limitBy: {each: "date.date", limit: 100}, limit: 100}
      date: {in: "2021-03-16"}
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
    `;
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
    `;
export const Error_2_FixMyQuery = gql`
    query Error_2_fixMyQuery($network: EthereumNetwork!) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "external_txs", limitBy: {each: "date.date", limit: 5}, limit: 100}
      date: {since: "2021-03-12", till: "2021-03-14"}
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
    `;
export const NewQueryv12MyQuery = gql`
    query NewQueryv12MyQuery {
  bitcoin {
    blocks(date: {after: "2021-04-02", before: "2021-05-02"}) {
      difficulty(difficulty: {})
      date {
        date
      }
    }
  }
}
    `;
export const BtcGetTheAddressAnnotation = gql`
    query BtcGetTheAddressAnnotation {
  bitcoin(network: bitcoin) {
    inbound: coinpath(receiver: {is: "11111111111111111"}) {
      receiver {
        address
        annotation
      }
    }
  }
}
    `;
export const QueryPancakeswapPairsForFegToken = gql`
    query QueryPancakeswapPairsForFegToken {
  ethereum(network: bsc) {
    arguments(
      smartContractEvent: {is: "PairCreated"}
      options: {desc: "block.height", limit: 100}
    ) {
      any(
        of: argument_value
        argument: {is: "token0"}
        value: {in: "0xacfc95585d80ab62f67a14c566c1b7a49fe91167"}
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
    `;
export const StackTrace = gql`
    query StackTrace($network: EthereumNetwork, $txHashes: [String!]) {
  ethereum(network: $network) {
    smartContractCalls(txHash: {in: $txHashes}) {
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
    `;
export const MechanismBscTop100MostTransferredTokens = gql`
    query MechanismBscTop100MostTransferredTokens {
  ethereum(network: bsc) {
    transfers(options: {desc: "count", limit: 100}, amount: {gt: 0}) {
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
    `;
export const QuerySenderOrRecieverForFilecoin = gql`
    query QuerySenderOrRecieverForFilecoin {
  filecoin {
    transfers(
      options: {desc: "block.height", limit: 10000}
      any: [{sender: {is: "f024633"}}, {receiver: {is: "f024633"}}]
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
    `;
export const QuerySenderReceiverForFilecoinSeparate = gql`
    query QuerySenderReceiverForFilecoinSeparate {
  filecoin {
    inbound: transfers(
      options: {desc: "block.height", limit: 10000}
      receiver: {is: "f024633"}
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
      options: {desc: "block.height", limit: 10000}
      sender: {is: "f024633"}
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
    `;
export const MatterPair = gql`
    query MatterPair {
  ethereum(network: bsc) {
    dexTrades(
      options: {}
      exchangeName: {is: "Pancake"}
      buyCurrency: {is: "0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F"}
      date: {since: "2021-03-25"}
      time: {since: "2021-03-25T10:00:00"}
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
    `;
export const Bsc0xApiPancakeVip = gql`
    query Bsc0xApiPancakeVip($from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "currencyAmount"}
      date: {since: $from, till: $till}
      txTo: {is: "0xdef1c0ded9bec7f1a1670819833240f027b25eff"}
      exchangeName: {is: "Pancake"}
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
    `;
export const LabradorRetriever = gql`
    query LabradorRetriever($network: EthereumNetwork!, $currency: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    dexTrades(
      buyCurrency: {is: $currency}
      date: {since: $from, till: $till}
      options: {asc: "timeInterval.day"}
    ) {
      timeInterval {
        day(count: 1)
      }
      count
      tradeAmount(in: USD)
    }
  }
}
    `;
export const GetPairToken = gql`
    query GetPairToken($address: String!) {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "block.height"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: $address}
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
    `;
export const CopyOfLatestCoinsPancake = gql`
    query CopyOfLatestCoinsPancake {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      argument: {not: "pair"}
      options: {desc: "block.height", limit: 100}
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
    `;
export const OhlcQuery = gql`
    query OhlcQuery($network: EthereumNetwork!, $starttime: ISO8601DateTime, $endtime: ISO8601DateTime) {
  ethereum(network: $network) {
    dexTrades(
      options: {desc: "USD", limit: 10}
      exchangeName: {is: "Pancake"}
      quoteCurrency: {in: ["0xe9e7cea3dedca5984780bafc599bd69add087d56", "0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3"]}
      time: {since: $starttime, till: $endtime}
      baseCurrency: {in: ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]}
    ) {
      exchange {
        name
      }
      block {
        timestamp {
          time(format: "%Y-%m-%d %H")
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
      Txs: count
      maximum_price: quotePrice(calculate: maximum)
      minimum_price: quotePrice(calculate: minimum)
      open_price: minimum(of: block, get: quote_price)
      close_price: maximum(of: block, get: quote_price)
    }
  }
}
    `;
export const CakeCurrencyPriceUsingCakeusdtPairv1 = gql`
    query CakeCurrencyPriceUsingCakeusdtPairv1 {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"}
      quoteCurrency: {is: "0x55d398326f99059ff775485246999027b3197955"}
      options: {desc: ["block.height", "transaction.index"], limit: 1}
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
    `;
export const BitcoinBlocks = gql`
    query BitcoinBlocks {
  bitcoin {
    blocks(date: {since: "2021-01-01"}) {
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
    `;
export const Q = gql`
    query q($network: EthereumNetwork!, $limit: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $amount: Float!) {
  ethereum(network: $network) {
    transfers(
      options: {desc: "block.timestamp.time", limit: $limit}
      amount: {gt: $amount}
      time: {since: $from, till: $till}
      txHash: {is: "0x16fb974c3b7ee7effd88bd8ae10ca485ce32c17e016d4538c278b1ee946b3eee"}
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
    `;
export const Shared = gql`
    query Shared {
  ethereum {
    dexTrades(options: {desc: ["date.year"]}) {
      numberOfTrades: count
      tradeAmount(in: USD)
      date {
        year
        month
      }
    }
  }
}
    `;
export const PancakeTradingVolv1 = gql`
    query PancakeTradingVolv1 {
  ethereum(network: bsc) {
    dexTrades(options: {limit: 5, desc: "date.date"}, exchangeName: {is: "Pancake"}) {
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
    `;
export const Sharedv1 = gql`
    query Sharedv1 {
  ethereum {
    dexTrades(options: {desc: ["date.year"]}) {
      numberOfTrades: count
      tradeAmount(in: USD)
      date {
        year
        month
      }
    }
  }
}
    `;
export const MilkBalanceOfHoldersMyQuery = gql`
    query MilkBalanceOfHoldersMyQuery {
  ethereum(network: bsc) {
    address(address: {in: ["0x56F6c4513b79aD9950a823346C7eF1fBf64f73d5"]}) {
      address
      balances(
        currency: {is: "0xb7cef49d89321e22dd3f51a212d58398ad542640"}
        height: {between: [5873977, 115873979]}
      ) {
        value
      }
    }
  }
}
    `;
export const Sadg = gql`
    query Sadg {
  ethereum {
    dexTrades(options: {desc: ["date.year"]}) {
      numberOfTrades: count
      tradeAmount(in: USD)
      date {
        year
        month
      }
    }
  }
}
    `;
export const Easybnb = gql`
    query Easybnb($network: EthereumNetwork!, $contract: String!, $event: String!) {
  ethereum(network: $network) {
    smartContractEvents(
      options: {desc: "block.timestamp.time"}
      smartContractAddress: {is: $contract}
      smartContractEvent: {is: $event}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      arguments {
        argument
        value
      }
    }
  }
}
    `;
export const PancakeswapLotteryClaim = gql`
    query PancakeswapLotteryClaim {
  ethereum(network: bsc) {
    smartContractEvents(
      smartContractAddress: {is: "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91"}
      smartContractEvent: {is: "Claim"}
      options: {desc: "block.height", limit: 500}
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
    `;
export const PancakeOhlcData = gql`
    query PancakeOhlcData {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "timeInterval.minute"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xb7f2bca9b034f8cc143339dd12bb31d3d50cf27a"}
      quoteCurrency: {is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
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
    `;
export const SpDividends = gql`
    query SpDividends($network: EthereumNetwork!, $address: String!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transfers(
      options: {desc: "block.timestamp.time", asc: "currency.symbol", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      amount: {gt: 0}
      currency: {is: "SPARTA"}
      sender: {is: $address}
      receiver: {in: ["0x3de669c4f1f167a8afbc9993e4753b84b576426f", "0x86320acc1169e5a61a8b365aaba0f8ebadc872e0", "0x119c70f4605e07e4bb229e2360e203a1bbd52ce4", "0xbf6728454b96a36c720c1bbcae5773aaafd6959b", "0x2720ec9809f77e040d4682cf9f7294276b9ccc56"]}
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
    `;
export const TradesForASpecificTokenOnTheUniswap = gql`
    query TradesForASpecificTokenOnTheUniswap {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 1, desc: "block.height"}
      baseCurrency: {is: "0x95b3497bBcCcc46a8F45F5Cf54b0878b39f8D96C"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
    ) {
      transaction {
        hash
        gasPrice
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
    `;
export const BethBalanceOnPancakelp = gql`
    query BethBalanceOnPancakelp($network: EthereumNetwork!, $address: String!, $time: ISO8601DateTime!) {
  ethereum(network: $network) {
    address(address: {is: $address}) {
      balances(time: {till: $time}) {
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
    `;
export const MdxPancake = gql`
    query MdxPancake {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0x9c65ab58d8d978db963e63f2bfb7121627e3a739"}
      quoteCurrency: {is: "0x55d398326f99059ff775485246999027b3197955"}
      options: {desc: ["block.height", "transaction.index"], limit: 1}
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
    `;
export const QueryByTxSenderDexTxsLimit10 = gql`
    query QueryByTxSenderDexTxsLimit10 {
  ethereum {
    dexTrades(
      txSender: {is: "0x740b097af71f55ab430b870b1aed9b4e00140460"}
      options: {desc: "block.height"}
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
    `;
export const FmtPrice = gql`
    query FmtPrice {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 1, desc: "block.timestamp.time"}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0x99c6e435ec259a7e8d65e1955c9423db624ba54c"}
      quoteCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
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
    `;
export const PancakeOhlcData5MinuteCandleUsdtweth = gql`
    query PancakeOhlcData5MinuteCandleUsdtweth {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1000, asc: "timeInterval.minute"}
      date: {since: "2020-11-01"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      quoteCurrency: {is: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"}
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
    `;
export const GetBalanceHistory = gql`
    query GetBalanceHistory($network: EthereumNetwork!, $address: String!) {
  ethereum(network: $network) {
    address(address: {is: $address}) {
      balances {
        history(currency: [{is: "vBTC"}]) {
          value
          block
          timestamp
          transferAmount
        }
      }
    }
  }
}
    `;
export const CakeCurrencyPriceUsingCakeusdtPair10LastMinutes = gql`
    query CakeCurrencyPriceUsingCakeusdtPair10LastMinutes {
  ethereum(network: bsc) {
    smartContractCalls(
      success: true
      options: {limit: 10}
      date: {after: "2021-04-04"}
      smartContractAddress: {is: "0x05ff2b0db69458a0750badebc4f9e13add608c7f"}
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
    `;
export const BscTopTradedPairsOn0xApi = gql`
    query BscTopTradedPairsOn0xApi {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "currencyAmount"}
      txTo: {is: "0xdef1c0ded9bec7f1a1670819833240f027b25eff"}
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
    `;
export const HoprChannelsUsersInBienneGoerli = gql`
    query HoprChannelsUsersInBienneGoerli($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "date.date"}
      date: {since: $from, till: $till}
      smartContractAddress: {is: $address}
      height: {gt: 3970950}
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
    `;
export const CopyOfTest = gql`
    query CopyOfTest($base_token: String!, $quote_token: String!) {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 10000, asc: "timeInterval.minute"}
      date: {since: "2020-11-01"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: $base_token}
      quoteCurrency: {is: $quote_token}
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
    `;
export const LatestPancakeTrades = gql`
    query LatestPancakeTrades {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "block.height"}
      exchangeName: {is: "Pancake"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const DexTradesByProtocolsv1 = gql`
    query DexTradesByProtocolsv1 {
  ethereum(network: bsc) {
    dexTrades(options: {limit: 100, desc: "date.date"}, date: {after: "2021-01-01"}) {
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
    `;
export const DexBsc = gql`
    query DexBsc {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "USD"}
      date: {in: "2021-01-01"}
      exchangeName: {is: "Pancake"}
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
    `;
export const CurveScDexAddresses = gql`
    query CurveScDexAddresses {
  ethereum {
    dexTrades(exchangeName: {is: "Curve"}) {
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
    `;
export const JetmoonbnbPrice = gql`
    query JetmoonbnbPrice {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "timeInterval.minute"}
      baseCurrency: {is: "0x2e841bf1a959f5edcdc320053810ad86396f05ed"}
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
    `;
export const BaseQuoteQueryTradingvolDexBySymbol = gql`
    query BaseQuoteQueryTradingvolDexBySymbol {
  ethereum {
    dexTrades(
      date: {is: "2020-11-29"}
      options: {limit: 10}
      baseCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      quoteCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
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
    `;
export const KitHoldersAtEndOfMarchAirdrop = gql`
    query KitHoldersAtEndOfMarchAirdrop($holders: [String!]) {
  ethereum {
    address(address: {in: $holders}) {
      address
      balances(
        currency: {is: "0x7866E48C74CbFB8183cd1a929cd9b95a7a5CB4F4"}
        date: {before: "2021-03-31"}
      ) {
        value
      }
    }
  }
}
    `;
export const BscTradesPerBlock = gql`
    query BscTradesPerBlock {
  ethereum(network: bsc) {
    dexTrades(date: {is: "2021-02-22"}) {
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
    `;
export const NewPancakeswapCoins = gql`
    query NewPancakeswapCoins {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      argument: {not: "pair"}
      options: {desc: "block.height", limit: 1000}
    ) {
      block {
        height
        timestamp {
          unixtime
        }
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
    `;
export const CopyOfGetPairsDataInfoFromUniswap = gql`
    query CopyOfGetPairsDataInfoFromUniswap {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 100}
      date: {between: ["2021-04-11", "2021-04-12"]}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0x7866E48C74CbFB8183cd1a929cd9b95a7a5CB4F4"}
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
    `;
export const Smartcontactevent = gql`
    query Smartcontactevent {
  ethereum(network: bsc) {
    smartContractEvents(
      txHash: {is: "0x3450fee48e352ae9c457c77c004c2e9e44d5a7a3cd6f89fae988c9c8d3b4d3e2"}
    ) {
      eventIndex
      smartContract(
        smartContractAddress: {is: "0x9B989A7B8963f4b08eC094710e2966FB3c7F6C43"}
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
    `;
export const Cakeusdt = gql`
    query Cakeusdt($thisDate: ISO8601DateTime!) {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"}
      quoteCurrency: {is: "0x55d398326f99059ff775485246999027b3197955"}
      options: {desc: ["block.height", "transaction.index"]}
      date: {since: $thisDate}
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
    `;
export const PancakeOhlcDataTradingPair = gql`
    query PancakeOhlcDataTradingPair {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 100, asc: "timeInterval.minute"}
      date: {since: "2020-11-01"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
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
    `;
export const LatestPairsOnPancake = gql`
    query LatestPairsOnPancake {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      argument: {not: "pair"}
      options: {desc: "block.height", limit: 100}
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
    `;
export const SmartcontractCallingSwapAndAnyOthers = gql`
    query SmartcontractCallingSwapAndAnyOthers {
  ethereum(network: ethereum) {
    arguments(
      options: {limitBy: {each: "sender", limit: 1}, desc: "block.height"}
      smartContractAddress: {is: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"}
      smartContractEvent: {is: "Swap"}
      txHash: {is: "0x29ba1d290b684ed8f5010d8cc83667a7ff10b2fb9da15a147544e2458f7e4a6f"}
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
      sender: any(of: argument_value, argument: {is: "sender"})
      to: any(of: argument_value, argument: {is: "to"})
      amount0In: any(of: argument_value, argument: {is: "amount0In"})
      amount0Out: any(of: argument_value, argument: {is: "amount0Out"})
      amount1In: any(of: argument_value, argument: {is: "amount1In"})
      amount1Out: any(of: argument_value, argument: {is: "amount1Out"})
    }
  }
}
    `;
export const NewlyCreatedEthereumTokens = gql`
    query NewlyCreatedEthereumTokens {
  ethereum {
    smartContractCalls(
      options: {desc: "block.height", limit: 10}
      smartContractMethod: {is: "Contract Creation"}
      smartContractType: {is: Token}
    ) {
      block {
        height
        timestamp {
          time
        }
      }
      smartContract {
        contractType
        address {
          address
          annotation
        }
        currency {
          name
          symbol
          decimals
          tokenType
        }
      }
    }
  }
}
    `;
export const DexTradesByProtocolsv2 = gql`
    query DexTradesByProtocolsv2 {
  ethereum {
    dexTrades(options: {limit: 100, desc: "count"}) {
      count
      protocol
    }
  }
}
    `;
export const NewlyCreatedBscTokens = gql`
    query NewlyCreatedBscTokens {
  ethereum(network: bsc) {
    smartContractCalls(
      options: {desc: "block.height", limit: 10}
      smartContractMethod: {is: "Contract Creation"}
      smartContractType: {is: Token}
    ) {
      block {
        height
        timestamp {
          time
        }
      }
      smartContract {
        contractType
        address {
          address
          annotation
        }
        currency {
          name
          symbol
          decimals
          tokenType
        }
      }
    }
  }
}
    `;
export const PancakeNewPair = gql`
    query PancakeNewPair {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      argument: {is: "token0"}
      options: {desc: "block.height", limit: 10}
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
    `;
export const CakeCurrencyPriceUsingCakeusdtPairv2 = gql`
    query CakeCurrencyPriceUsingCakeusdtPairv2 {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0x706954491ebfd6b38e5b1e6f079dbefae0f5eba0"}
      quoteCurrency: {is: "0x55d398326f99059ff775485246999027b3197955"}
      options: {desc: ["block.height", "transaction.index"], limit: 1}
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
    `;
export const LatestPancakeswapPairsdan = gql`
    query LatestPancakeswapPairsdan {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {in: "PairCreated"}
      argument: {is: "pair"}
      options: {desc: "block.height", limit: 3}
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
    `;
export const TrackingBalance = gql`
    query TrackingBalance($network: EthereumNetwork!, $address: String!) {
  ethereum(network: $network) {
    address(address: {is: $address}) {
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
    `;
export const PancakeOhlcDatav1 = gql`
    query PancakeOhlcDatav1 {
  ethereum(network: bsc) {
    dexTrades(
      options: {asc: "timeInterval.minute", limit: 1}
      date: {is: "2021-05-05T18:16:41"}
      exchangeName: {in: ["Pancake", "Pancake v2"]}
      baseCurrency: {is: "0xFaa41A7DB72f0cB466De97df78A021D17DF966Ac"}
      quoteCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
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
      USD: tradeAmount(in: USD, calculate: sum)
      maximum_price: quotePrice(calculate: maximum)
      minimum_price: quotePrice(calculate: minimum)
      median_price: quotePrice(calculate: median)
      open_price: minimum(of: block, get: quote_price)
      close_price: maximum(of: block, get: quote_price)
    }
  }
}
    `;
export const ElongatePrice = gql`
    query ElongatePrice {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "timeInterval.minute"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0x2A9718defF471f3Bb91FA0ECEAB14154F150a385"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
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
    `;
export const Smartcontractcall = gql`
    query Smartcontractcall($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {asc: "date.date"}
      date: {since: $from, till: $till}
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
    `;
export const LastPancakeTrade = gql`
    query LastPancakeTrade {
  ethereum(network: bsc) {
    dexTrades(date: {is: "2021-03-28"}, options: {limit: 1, desc: "block.height"}) {
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
    `;
export const LatestWethdaiTrades = gql`
    query LatestWethdaiTrades {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 100, desc: "block.height"}
      baseCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      quoteCurrency: {is: "0x6b175474e89094c44da98b954eedeac495271d0f"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const TotalVolTradedUsdForTokenInPancakeswap = gql`
    query TotalVolTradedUsdForTokenInPancakeswap {
  ethereum(network: bsc) {
    dexTrades(
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0x4c79b8c9cB0BD62B047880603a9DEcf36dE28344"}
    ) {
      count
      tradeAmount(in: USD)
    }
  }
}
    `;
export const GroupedByDayTotalVolTradedUsdForTokenInPancakeswap = gql`
    query GroupedByDayTotalVolTradedUsdForTokenInPancakeswap {
  ethereum(network: bsc) {
    dexTrades(
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0x4c79b8c9cB0BD62B047880603a9DEcf36dE28344"}
    ) {
      count
      tradeAmount(in: USD)
      date {
        date
      }
    }
  }
}
    `;
export const PancakswapMostTradedPairsPrice = gql`
    query PancakswapMostTradedPairsPrice {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "tradeAmount"}
      exchangeName: {is: "Pancake"}
      date: {since: "2020-09-12", till: "2020-12-12"}
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
    `;
export const Balancev3 = gql`
    query Balancev3 {
  ethereum {
    blocks {
      date {
        year
      }
      count
    }
  }
}
    `;
export const PancakeLpPools = gql`
    query PancakeLpPools($address: [String!], $event: [String!]) {
  ethereum(network: bsc) {
    smartContractEvents(
      smartContractAddress: {in: $address}
      smartContractEvent: {in: $event}
      date: {since: "2021-02-11"}
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
    `;
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
    `;
export const LatestWethdaiTradesv1 = gql`
    query LatestWethdaiTradesv1 {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 100, desc: "block.height"}
      baseCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      quoteCurrency: {is: "0x6b175474e89094c44da98b954eedeac495271d0f"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const Thangquery = gql`
    query Thangquery {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      argument: {not: "pair"}
      options: {desc: "block.height", limit: 100}
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
    `;
export const BscBlockCount = gql`
    query BscBlockCount {
  binance {
    blocks {
      count
    }
  }
}
    `;
export const FilecoinMinerRewardsTotalByDates = gql`
    query FilecoinMinerRewardsTotalByDates {
  filecoin {
    blocks(options: {asc: "date.date"}) {
      date {
        date
      }
      reward
    }
  }
}
    `;
export const ExampleOfQueryMultiplePairs = gql`
    query ExampleOfQueryMultiplePairs($baseAddress: String!, $quoteAddress: String!, $connector1: String!, $connector2: String!, $from: ISO8601DateTime!, $interval: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      any: [{baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $quoteAddress}}, {baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $connector1}}, {baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $connector2}}, {baseCurrency: {is: $connector1}, quoteCurrency: {is: $quoteAddress}}, {baseCurrency: {is: $connector2}, quoteCurrency: {is: $quoteAddress}}]
      date: {since: $from}
      tradeAmountUsd: {gt: 10}
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
    `;
export const ExampleOfQueryPairsWithBasequoteAndConnectorsBetween = gql`
    query ExampleOfQueryPairsWithBasequoteAndConnectorsBetween($baseAddress: String!, $quoteAddress: String!, $baseConnectors: [String!], $quoteConnectors: [String!], $from: ISO8601DateTime!, $interval: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      any: [{baseCurrency: {is: $baseAddress}, quoteCurrency: {in: $quoteConnectors}}, {baseCurrency: {in: $baseConnectors}, quoteCurrency: {is: $quoteAddress}}]
      date: {since: $from}
      tradeAmountUsd: {gt: 10}
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
    `;
export const TradesForASpecificTokenOnThePancakedexv2 = gql`
    query TradesForASpecificTokenOnThePancakedexv2 {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "block.height"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xd1587ee50e0333f0c4adcf261379a61b1486c5d2"}
      date: {after: "2021-03-28"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const Uniswap_New_Pool = gql`
    query Uniswap_new_pool {
  ethereum {
    arguments(
      smartContractAddress: {is: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"}
      smartContractEvent: {is: "PairCreated"}
      options: {desc: "block.height", limit: 3}
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
    `;
export const QueryDexBaseQuotePricesv1 = gql`
    query QueryDexBaseQuotePricesv1($wallet: String) {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 10, desc: "timeInterval.second"}
      any: [{txSender: {is: $wallet}}, {txTo: {is: $wallet}}]
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
    `;
export const ConvertingArgumentsAsTokenSymbolsNames = gql`
    query ConvertingArgumentsAsTokenSymbolsNames {
  ethereum(network: ethereum) {
    arguments(
      smartContractAddress: {is: "0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac"}
      smartContractEvent: {is: "PairCreated"}
      options: {limit: 10}
    ) {
      transaction {
        hash
      }
      callDepth
      token0_address: any(argument: {is: "token0"}, of: argument_value)
      token0_symbol: any(
        argument: {is: "token0"}
        of: argument_value
        as: token_symbol
      )
      token0_name: any(argument: {is: "token0"}, of: argument_value, as: token_name)
      token1_address: any(argument: {is: "token1"}, of: argument_value)
      token1_symbol: any(
        argument: {is: "token1"}
        of: argument_value
        as: token_symbol
      )
      token1_name: any(argument: {is: "token1"}, of: argument_value, as: token_name)
      pair_address: any(argument: {is: "pair"}, of: argument_value)
      pair_symbol: any(argument: {is: "pair"}, of: argument_value, as: token_symbol)
      pair_name: any(argument: {is: "pair"}, of: argument_value, as: token_name)
    }
  }
}
    `;
export const Sbdo = gql`
    query Sbdo {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "timeInterval.minute"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0x0d9319565be7f53cefe84ad201be3f40feae2740"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
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
    `;
export const PancakeSwapDataForParticularPair = gql`
    query PancakeSwapDataForParticularPair {
  ethereum(network: bsc) {
    arguments(
      options: {limitBy: {each: "sender", limit: 1}, desc: "block.height"}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      smartContractEvent: {is: "Swap"}
    ) {
      block {
        height
      }
      transaction {
        hash
      }
      sender: any(of: argument_value, argument: {is: "sender"})
      to: any(of: argument_value, argument: {is: "to"})
      amount0In: any(of: argument_value, argument: {is: "amount0In"})
      amount0Out: any(of: argument_value, argument: {is: "amount0Out"})
      amount1In: any(of: argument_value, argument: {is: "amount1In"})
      amount1Out: any(of: argument_value, argument: {is: "amount1Out"})
    }
  }
}
    `;
export const LatestPairCreatedOnPancakeSwap = gql`
    query LatestPairCreatedOnPancakeSwap {
  ethereum(network: bsc) {
    arguments(
      options: {desc: "block.height", limit: 3}
      smartContractAddress: {}
      smartContractEvent: {is: "PairCreated"}
    ) {
      block {
        height
      }
      pair: any(of: argument_value, argument: {is: "pair"})
      token0: any(of: argument_value, argument: {is: "token0"})
      token0Name: any(of: argument_value, argument: {is: "token0"}, as: token_name)
      token1: any(of: argument_value, argument: {is: "token1"})
      token1Name: any(of: argument_value, argument: {is: "token1"}, as: token_name)
    }
  }
}
    `;
export const TotalNumberOfPairsOnPancakeSwap = gql`
    query TotalNumberOfPairsOnPancakeSwap {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
    ) {
      pair: count(uniq: values, argument: {is: "pair"})
    }
  }
}
    `;
export const VaultBalance = gql`
    query VaultBalance($network: EthereumNetwork!, $address: String!) {
  ethereum(network: $network) {
    address(address: {is: $address}) {
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
    `;
export const VltPrice = gql`
    query VltPrice {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0x82DA15e36F23A4b603Bc8A57c27813F2fAEb04B2"}
      quoteCurrency: {is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
      options: {desc: ["block.height", "transaction.index"], limit: 1}
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
    `;
export const TradesForASpecificTokenOnThePancakedexv3 = gql`
    query TradesForASpecificTokenOnThePancakedexv3 {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "block.height"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0x36c0556c2b15aed79f842675ff030782738ef9e8"}
      date: {after: "2021-03-28"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const ExampleQueryAllFromToTransfers = gql`
    query ExampleQueryAllFromToTransfers {
  ethereum(network: bsc) {
    transfers(
      any: [{sender: {is: "0x5a384227b65fa093dec03ec34e111db80a040615"}}, {receiver: {is: "0x5a384227b65fa093dec03ec34e111db80a040615"}}]
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
    `;
export const PancakePairInfoTxBaseAndQuoteCurrencyCountQuotePrice = gql`
    query PancakePairInfoTxBaseAndQuoteCurrencyCountQuotePrice {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "count"}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
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
    `;
export const UniswapOhlcData5MinuteCandleUsdtwethv1 = gql`
    query UniswapOhlcData5MinuteCandleUsdtwethv1 {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 100000, asc: "timeInterval.minute"}
      date: {since: "2021-04-26"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
      quoteCurrency: {is: "0x05b339b0a346bf01f851dde47a5d485c34fe220c"}
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
    `;
export const QueryWithParametersGet_Ohlc_Day = gql`
    query QueryWithParametersGET_OHLC_DAY($dates: [ISO8601DateTime!], $quote: String, $base: String, $time: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 20000, asc: "timeInterval.day"}
      date: {between: $dates}
      baseCurrency: {is: $base}
      quoteCurrency: {is: $quote}
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
    `;
export const QueryTokenBalancesOfAYearnVault = gql`
    query QueryTokenBalancesOfAYearnVault($network: EthereumNetwork!, $address: String!, $date: ISO8601DateTime!) {
  ethereum(network: $network) {
    address(address: {is: $address}) {
      balances(date: {before: $date}) {
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
    `;
export const HoprChannelsUsersInTitlisBscv1 = gql`
    query HoprChannelsUsersInTitlisBscv1($network: EthereumNetwork!, $dateFormat: String!, $address: String!) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "date.date"}
      date: {since: "2021-01-18", till: "2021-01-30"}
      smartContractAddress: {is: $address}
      height: {gt: 3970950}
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
    `;
export const CowFarm = gql`
    query CowFarm($network: EthereumNetwork!, $address: String!, $inboundDepth: Int!, $outboundDepth: Int!, $limit: Int!, $currency: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: $inboundDepth}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
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
      initialAddress: {is: $address}
      currency: {is: $currency}
      depth: {lteq: $outboundDepth}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: $limit}}
      date: {since: $from, till: $till}
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
    `;
export const MultiPairDexQuery = gql`
    query MultiPairDexQuery($baseAddress: String!, $quoteAddress: String!, $connector1: String!, $from: ISO8601DateTime!, $interval: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      any: [{baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $quoteAddress}}, {baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $connector1}}, {baseCurrency: {is: $connector1}, quoteCurrency: {is: $quoteAddress}}]
      date: {since: $from}
      tradeAmountUsd: {gt: 10}
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
    `;
export const PancakesPairSwapEvent = gql`
    query PancakesPairSwapEvent {
  ethereum(network: bsc) {
    arguments(
      options: {desc: "block.height", limit: 3}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      smartContractEvent: {is: "Swap"}
    ) {
      block {
        height
      }
      transaction {
        hash
      }
      sender: any(of: argument_value, argument: {is: "sender"})
      to: any(of: argument_value, argument: {is: "to"})
      amount0In: any(of: argument_value, argument: {is: "amount0In"})
      amount0Out: any(of: argument_value, argument: {is: "amount0Out"})
      amount1In: any(of: argument_value, argument: {is: "amount1In"})
      amount1Out: any(of: argument_value, argument: {is: "amount1Out"})
    }
  }
}
    `;
export const Balancev4 = gql`
    query Balancev4($network: EthereumNetwork!, $address: String!) {
  ethereum(network: $network) {
    address(address: {is: $address}) {
      balance
      balances {
        currency {
          address
          symbol
          tokenType
          name
        }
        value
      }
    }
  }
}
    `;
export const PancakesPairMintEvent = gql`
    query PancakesPairMintEvent {
  ethereum(network: bsc) {
    arguments(
      options: {desc: "block.height", limit: 3}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      smartContractEvent: {is: "Mint"}
    ) {
      block {
        height
      }
      transaction {
        hash
      }
      sender: any(of: argument_value, argument: {is: "sender"})
      amount0: any(of: argument_value, argument: {is: "amount0"})
      amount1: any(of: argument_value, argument: {is: "amount1"})
    }
  }
}
    `;
export const PancakesPairBurnEvent = gql`
    query PancakesPairBurnEvent {
  ethereum(network: bsc) {
    arguments(
      options: {desc: "block.height", limit: 3}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      smartContractEvent: {is: "Burn"}
    ) {
      block {
        height
      }
      transaction {
        hash
      }
      sender: any(of: argument_value, argument: {is: "sender"})
      amount0: any(of: argument_value, argument: {is: "amount0"})
      amount1: any(of: argument_value, argument: {is: "amount1"})
      to: any(of: argument_value, argument: {is: "to"})
    }
  }
}
    `;
export const BlockRewards = gql`
    query BlockRewards {
  ethereum {
    blocks(date: {after: "2020-10-01"}) {
      date {
        date
      }
      count
      reward
    }
  }
}
    `;
export const NrugPrice = gql`
    query NrugPrice {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 1, desc: "timeInterval.minute"}
      baseCurrency: {is: "0x805208354ba01a0fe0b42934195ea298b9a731ea"}
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
    `;
export const PancakePairsForAParticularToken = gql`
    query PancakePairsForAParticularToken {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      options: {limit: 10}
    ) {
      pair: any(of: argument_value, argument: {is: "pair"})
      token0: any(
        of: argument_value
        argument: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      )
      block {
        height
      }
    }
  }
}
    `;
export const Bsc1inchUniqueUsersByMonth = gql`
    query Bsc1inchUniqueUsersByMonth {
  binanceSmartChain: ethereum(network: bsc) {
    transactions(
      options: {desc: "date.date", limit: 10}
      txTo: {is: "0x111111254bf8547e7183e4bbfc36199f3cedf4a1"}
    ) {
      activeAddress: count(uniq: senders)
      date: date {
        date(format: "%Y-%m")
      }
    }
  }
}
    `;
export const TradesByMonth1inchInUsd = gql`
    query TradesByMonth1inchInUsd {
  ethereum(network: bsc) {
    dexTrades(any: {txTo: {is: "0x111111254bf8547e7183e4bbfc36199f3cedf4a1"}}) {
      date {
        month
        year
      }
      tradeAmount(in: USD)
    }
  }
}
    `;
export const LatestTransactionOfASpecificTokenOnPancake = gql`
    query LatestTransactionOfASpecificTokenOnPancake {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "block.height", limit: 1}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0x36c0556c2b15aed79f842675ff030782738ef9e8"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
export const CreationBlockOfASmartContract = gql`
    query CreationBlockOfASmartContract {
  ethereum {
    smartContractCalls(
      smartContractMethod: {is: "Contract Creation"}
      smartContractAddress: {is: "0xb443dea978b39178cb05ae005074227a4390dfce"}
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
    `;
export const Getaffiliatetradesflashwallet = gql`
    query Getaffiliatetradesflashwallet($receiver: String!) {
  ethereum(network: ethereum) {
    transfers(
      options: {desc: "block.height"}
      amount: {gt: 0}
      sender: {is: "0x22F9dCF4647084d6C31b2765F6910cd85C178C18"}
      receiver: {is: $receiver}
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
    `;
export const Test_2021_Mar_31 = gql`
    query Test_2021_mar_31 {
  ethereum(network: bsc) {
    dexTrades(date: {in: "2021-03-25"}) {
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
    `;
export const LinkSmartContractAverageGasDetails = gql`
    query LinkSmartContractAverageGasDetails {
  ethereum {
    smartContractCalls(
      time: {since: "2020-11-01", till: "2020-12-31"}
      external: true
      smartContractAddress: {is: "0x514910771af9ca656af840dff83e8264ecf986ca"}
    ) {
      gasValueAvg: gasValue(calculate: average, in: USD)
      gasValueMedian: gasValue(calculate: median, in: USD)
      gasValueMax: gasValue(calculate: maximum)
    }
  }
}
    `;
export const SmartcontractDauTxsMyQuery = gql`
    query SmartcontractDauTxsMyQuery($address1: [String!], $address2: [String!], $address3: [String!]) {
  ethereum(network: bsc) {
    smartContractCalls(options: {desc: "date.date"}, date: {in: "2021-02-25"}) {
      date {
        date(format: "%Y-%m-%d")
      }
      one_inch_external: count(
        uniq: callers
        smartContractAddress: {in: $address1}
        external: true
      )
      one_inch_internal: count(
        uniq: callers
        smartContractAddress: {in: $address1}
        external: false
      )
      ACryptoS: count(uniq: callers, smartContractAddress: {in: $address2})
      bDollar: count(uniq: callers, smartContractAddress: {in: $address3})
    }
  }
}
    `;
export const TradesForAPairOnThePancakedex = gql`
    query TradesForAPairOnThePancakedex {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "block.height"}
      exchangeName: {is: "Pancake"}
      smartContractAddress: {is: "0xbd1ec00b0d1cca9d5b28fbe0bb7d664238af2ffa"}
      height: {between: [6601336, 6603500]}
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
    `;
export const PriceForTokenOnBscPancake = gql`
    query PriceForTokenOnBscPancake {
  ethereum(network: bsc) {
    count0: dexTrades(
      exchangeName: {is: "Pancake"}
      options: {limit: 9, asc: "quoteCurrency.symbol"}
      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      quoteCurrency: {is: "0x81a2ac1a5ee681af6113ed440f1e378d46c23ef2"}
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
      exchangeName: {is: "Pancake"}
      options: {limit: 9, asc: "quoteCurrency.symbol"}
      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      quoteCurrency: {in: ["0xd8f90438DDd9e99B581F49257D078E8E39fC5e31", "0x9b93c29595dd603f75854eba3c5f4ee078ee4454", "0x72eb1afddb5652e0f5c7b9a6cc1c3241348b16c6", "0x98fc5b3a39d712fa5a826df4f9c47bb6c0f6f8a9"]}
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
    `;
export const QuerySmartcontractEventsForATransactionHash = gql`
    query QuerySmartcontractEventsForATransactionHash($network: EthereumNetwork!, $address: String!, $limit: Int!, $offset: Int!, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    smartContractCalls(
      options: {desc: "block.timestamp.time", limit: $limit, offset: $offset}
      date: {since: "2021-03-01", till: $till}
      txHash: {is: $address}
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
    `;
export const TokenInfo = gql`
    query TokenInfo($network: EthereumNetwork!, $tokens: [String!], $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transfers(
      currency: {in: $tokens}
      amount: {gt: 0}
      date: {since: $from, till: $till}
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
    `;
export const Rebasedittomoney = gql`
    query Rebasedittomoney {
  ethereum(network: bsc) {
    smartContractEvents(
      options: {desc: "block.height", limit: 21}
      smartContractAddress: {is: "0xdaE0B6F111c62010a8dC6A003B02053C004cFFc1"}
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
    `;
export const BnbVsBusd = gql`
    query BnbVsBusd {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
      time: {after: "2021-04-08T06:00:00Z"}
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
      quoteCurrency {
        address
        symbol
        name
      }
    }
  }
}
    `;
export const FilecoinMessages = gql`
    query FilecoinMessages {
  filecoin {
    by_method: messages(options: {desc: "count"}) {
      count
      method {
        name
      }
    }
  }
}
    `;
export const QuerymarketstatsGet_Markets_Stats = gql`
    query QuerymarketstatsGET_MARKETS_STATS($base: String!, $dates: [ISO8601DateTime!]) {
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: $base}
      date: {between: $dates}
      tradeAmountUsd: {gt: 10}
      priceAsymmetry: {lt: 0.05}
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
    `;
export const LatestPriceOfATokenOnPancakeswap = gql`
    query LatestPriceOfATokenOnPancakeswap {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 2, desc: "block.timestamp.time"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
      quoteCurrency: {is: "0x92a42db88ed0f02c71d439e55962ca7cab0168b5"}
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
    `;
export const MelloBurnMelloFellow = gql`
    query MelloBurnMelloFellow {
  ethereum(network: bsc) {
    address(address: {is: "0x000000000000000000000000000000000000dead"}) {
      balances(currency: {is: "0x651bfbb26455294408aabc61a7adf427bf149898"}) {
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
    `;
export const YearnEventsOverTime = gql`
    query YearnEventsOverTime($network: EthereumNetwork!) {
  ethereum(network: $network) {
    smartContractEvents(
      smartContractAddress: {is: "0x986b4AFF588a109c09B50A03f42E4110E29D353F"}
      smartContractEvent: {is: "StrategyReported"}
      options: {limit: 100}
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
    `;
export const F2poolbtcflow = gql`
    query F2poolbtcflow {
  bitcoin {
    inbound: coinpath(
      initialAddress: {is: "1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY"}
      depth: {lteq: 2}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
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
      currency {
        symbol
      }
      depth
      count
    }
    outbound: coinpath(
      initialAddress: {is: "1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY"}
      depth: {lteq: 2}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
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
      currency {
        symbol
      }
      depth
      count
    }
  }
}
    `;
export const DexTradingvolCombineSameSymbol = gql`
    query DexTradingvolCombineSameSymbol($symbol1: [String!]) {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "USD"}
      date: {in: "2021-01-01"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {in: $symbol1}
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
    `;
export const PancakePairTradingvol = gql`
    query PancakePairTradingvol {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "USD", limitBy: {each: "date.date", limit: 100}}
      exchangeName: {is: "Pancake"}
      baseCurrency: {in: ["0xe9e7cea3dedca5984780bafc599bd69add087d56", "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", "0x55d398326f99059fF775485246999027B3197955", "0x57067a6bd75c0e95a6a5f158455926e43e79beb0", "0xe9e7cea3dedca5984780bafc599bd69add087d56", "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd", "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7", "0x7083609fce4d1d8dc0c979aab8c869ea2c873402", "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f", "0x111111111117dc0aa78b770fa6a738034120c302", "0x4197c6ef3879a08cd51e5560da5064b773aa1d29", "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389", "0x83d69ef5c9837e21e2389d47d791714f5771f29b", "0xeb7dc7b3bff60a450eff31edf1330355361ea5ad", "0x49440376254290b3264183807a16450457f02b28", "0xd3debe4a971e4492d0d61ab145468a5b2c23301b", "0x72faa679e1008ad8382959ff48e392042a8b06f7", "0x8f0528ce5ef7b51152a59745befdd91d97091d2f", "0xa184088a740c695e156f91f5cc086a06bb78b827", "0xe02df9e3e622debdd69fb838bb799e3f168902c5", "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454", "0x0d9319565be7f53cefe84ad201be3f40feae2740", "0xca3f508b8e4dd382ee878a314789373d80a5190a", "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830", "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4", "0x250632378e573c6be1ac2f97fcdf00515d0aa91b", "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8", "0xba2ae424d960c26247dd6c32edc70b295c744c43", "0x2170ed0880ac9a755fd29b2688956bd959f933f8", "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", "0x55d398326f99059ff775485246999027b3197955", "0x48dc0190df5ece990c649a7a07ba19d3650a9572", "0xf388ee045cab30321db3fb69eab7dfb0c20f10ec", "0x5ac52ee5b2a633895292ff6d8a89bb9190451587", "0x78650b139471520656b9e7aa7a5e9276814a38e9", "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51", "0xc40c9a843e1c6d01b7578284a9028854f6683b1b", "0xbc5609612b7c44bef426de600b5fd1379db2ecf1", "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c", "0x80d5f92c2c8c682070c95495313ddb680b267320", "0x25e9d05365c867e59c1904e7463af9f312296f9e", "0xab301dae71f5b386c566f484e636aee60318f12f", "0x233d91a0713155003fc4dce0afa871b508b3b715", "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2", "0xe6df05ce8c8301223373cf5b969afcb1498c5528", "0x658a109c5900bc6d2357c87549b651670e5b0539", "0xf952fc3ca7325cc27d15885d37117676d25bfda6", "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8", "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a", "0x10702bebd7d15507f4ed2078bc76da44d3bef060", "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75", "0x7979f6c54eba05e18ded44c4f986f49a5de551c2", "0x23e8a70534308a4aaf76fb8c32ec13d17a3bd89e", "0x762539b45a1dcce3d36d080f74d1aed37844b878", "0x35e869b7456462b81cdb5e6e42434bd27f3f788c", "0x242e46490397acca94ed930f2c4edf16250237fa", "0xeccf35f941ab67ffcaa9a1265c2ff88865caa005", "0x23396cf899ca06c4472205fc903bdb4de249d6fc", "0xffbdb9bdcae97a962535479bb96cc2778d65f4dd", "0x7d5f9f8cf59986743f34bc137fc197e2e22b7b05", "0x41d74991509318517226755e508695c4d1ce43a6", "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9", "0x900aeb8c40b26a8f8dfaf283f884b03ee7abb3ec", "0x62d71b23bf15218c7d2d7e48dbbd9e9c650b173f", "0xf215a127a196e3988c09d052e16bcfd365cd7aa3", "0xa04f060077d90fe2647b61e4da4ad1f97d6649dc", "0x1cb4183ac708e07511ac57a2e45a835f048d7c56", "0x7426ab52a0e057691e2544fae9c8222e958b2cfb", "0x0ab06caa3ca5d6299925efaa752a2d2154ece929", "0x3947b992dc0147d2d89df0392213781b04b25075", "0xca2f75930912b85d8b2914ad06166483c0992945", "0x1658aed6c7dbab2ddbd8f5d898b0e9eab0305813", "0x211e763d0b9311c08ec92d72ddc20ab024b6572a", "0x9cddf33466ce007676c827c76e799f5109f1843c", "0x92e744307694ece235cd02e82680ec37c657d23e", "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6", "0x4131b87f74415190425ccd873048c708f8005823", "0xa1303e6199b319a891b79685f0537d289af1fc83", "0xd7410c38a86dcf3d5ec0f75e9763111e07d9c95b", "0x7e3656fccf19583dc432fb3af813e53ea566814b", "0xf8645e8f6d7f88bdb2ae7fabdeb315f9259be5b0", "0xbfa0841f7a90c4ce6643f651756ee340991f99d5", "0x2eb5ecc40e403b12ee4428d70fddf34e2c2c27b0", "0xb9784c1633ef3b839563b988c323798634714368", "0x8b09b6eb1d263644a267dfb2b2bc8d6b0fb72e7d", "0x1a2fb0af670d0234c2857fad35b789f8cb725584", "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e", "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb", "0xb0a51d5e242b6a86420ec34660b14d8b9cd4d5fc", "0x541e619858737031a1244a5d0cd47e5ef480342c", "0x849233ff1aea15d80ef658b2871664c9ca994063", "0x37109a51e712471bd2c72d8d70718627e7ff0032", "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb", "0x4b0f1812e5df2a09796481ff14017e6005508003", "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0", "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d", "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0", "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7", "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b", "0x95c78222b3d6e262426483d42cfa53685a67ab9d", "0xa07c5b74c9b40447a954e1466938b865b6bbea36", "0xeca88125a5adbe82614ffc12d0db554e2e2867c8", "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8", "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1", "0x972207a639cc1b374b893cc33fa251b55ceb7c07", "0x1610bc33319e9398de5f57b33a5b184c806ad217", "0xf91d58b5ae142dacc749f58a49fcbac340cb0343", "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f", "0xfd5840cd36d94d7229439859c0112a4185bc0255", "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b", "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63", "0x4f0ed527e8a95ecaa132af214dfd41f30b361600", "0x3f515f0a8e93f2e2f891ceeb3db4e62e202d7110", "0x44754455564474a89358b2c2265883df993b12f0", "0x55d398326f99059ff775485246999027b3197955"]}
      quoteCurrency: {notIn: ["0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", "0x131224bb0270bc4b9bcd0e8216e0c6a7047af48a", "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51", "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f", "0x111111111117dc0aa78b770fa6a738034120c302", "0x57067a6bd75c0e95a6a5f158455926e43e79beb0", "0x4197c6ef3879a08cd51e5560da5064b773aa1d29", "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389", "0x83d69ef5c9837e21e2389d47d791714f5771f29b", "0xeb7dc7b3bff60a450eff31edf1330355361ea5ad", "0x49440376254290b3264183807a16450457f02b28", "0xd3debe4a971e4492d0d61ab145468a5b2c23301b", "0x72faa679e1008ad8382959ff48e392042a8b06f7", "0x8f0528ce5ef7b51152a59745befdd91d97091d2f", "0xa184088a740c695e156f91f5cc086a06bb78b827", "0xe02df9e3e622debdd69fb838bb799e3f168902c5", "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454", "0x0d9319565be7f53cefe84ad201be3f40feae2740", "0xca3f508b8e4dd382ee878a314789373d80a5190a", "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830", "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4", "0x250632378e573c6be1ac2f97fcdf00515d0aa91b", "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8", "0xba2ae424d960c26247dd6c32edc70b295c744c43", "0x2170ed0880ac9a755fd29b2688956bd959f933f8", "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", "0x55d398326f99059ff775485246999027b3197955", "0x48dc0190df5ece990c649a7a07ba19d3650a9572", "0xf388ee045cab30321db3fb69eab7dfb0c20f10ec", "0x5ac52ee5b2a633895292ff6d8a89bb9190451587", "0x78650b139471520656b9e7aa7a5e9276814a38e9", "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51", "0xc40c9a843e1c6d01b7578284a9028854f6683b1b", "0xbc5609612b7c44bef426de600b5fd1379db2ecf1", "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c", "0x80d5f92c2c8c682070c95495313ddb680b267320", "0x25e9d05365c867e59c1904e7463af9f312296f9e", "0xab301dae71f5b386c566f484e636aee60318f12f", "0x233d91a0713155003fc4dce0afa871b508b3b715", "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2", "0xe6df05ce8c8301223373cf5b969afcb1498c5528", "0x658a109c5900bc6d2357c87549b651670e5b0539", "0xf952fc3ca7325cc27d15885d37117676d25bfda6", "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8", "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a", "0x10702bebd7d15507f4ed2078bc76da44d3bef060", "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75", "0x7979f6c54eba05e18ded44c4f986f49a5de551c2", "0x23e8a70534308a4aaf76fb8c32ec13d17a3bd89e", "0x762539b45a1dcce3d36d080f74d1aed37844b878", "0x35e869b7456462b81cdb5e6e42434bd27f3f788c", "0x242e46490397acca94ed930f2c4edf16250237fa", "0xeccf35f941ab67ffcaa9a1265c2ff88865caa005", "0x23396cf899ca06c4472205fc903bdb4de249d6fc", "0xffbdb9bdcae97a962535479bb96cc2778d65f4dd", "0x7d5f9f8cf59986743f34bc137fc197e2e22b7b05", "0x41d74991509318517226755e508695c4d1ce43a6", "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9", "0x900aeb8c40b26a8f8dfaf283f884b03ee7abb3ec", "0x62d71b23bf15218c7d2d7e48dbbd9e9c650b173f", "0xf215a127a196e3988c09d052e16bcfd365cd7aa3", "0xa04f060077d90fe2647b61e4da4ad1f97d6649dc", "0x1cb4183ac708e07511ac57a2e45a835f048d7c56", "0x7426ab52a0e057691e2544fae9c8222e958b2cfb", "0x0ab06caa3ca5d6299925efaa752a2d2154ece929", "0x3947b992dc0147d2d89df0392213781b04b25075", "0xca2f75930912b85d8b2914ad06166483c0992945", "0x1658aed6c7dbab2ddbd8f5d898b0e9eab0305813", "0x211e763d0b9311c08ec92d72ddc20ab024b6572a", "0x9cddf33466ce007676c827c76e799f5109f1843c", "0x92e744307694ece235cd02e82680ec37c657d23e", "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6", "0x4131b87f74415190425ccd873048c708f8005823", "0xa1303e6199b319a891b79685f0537d289af1fc83", "0xd7410c38a86dcf3d5ec0f75e9763111e07d9c95b", "0x7e3656fccf19583dc432fb3af813e53ea566814b", "0xf8645e8f6d7f88bdb2ae7fabdeb315f9259be5b0", "0xbfa0841f7a90c4ce6643f651756ee340991f99d5", "0x2eb5ecc40e403b12ee4428d70fddf34e2c2c27b0", "0xb9784c1633ef3b839563b988c323798634714368", "0x8b09b6eb1d263644a267dfb2b2bc8d6b0fb72e7d", "0x1a2fb0af670d0234c2857fad35b789f8cb725584", "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e", "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb", "0xb0a51d5e242b6a86420ec34660b14d8b9cd4d5fc", "0x541e619858737031a1244a5d0cd47e5ef480342c", "0x849233ff1aea15d80ef658b2871664c9ca994063", "0x37109a51e712471bd2c72d8d70718627e7ff0032", "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb", "0x4b0f1812e5df2a09796481ff14017e6005508003", "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0", "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d", "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0", "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7", "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b", "0x95c78222b3d6e262426483d42cfa53685a67ab9d", "0xa07c5b74c9b40447a954e1466938b865b6bbea36", "0xeca88125a5adbe82614ffc12d0db554e2e2867c8", "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8", "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1", "0x972207a639cc1b374b893cc33fa251b55ceb7c07", "0x1610bc33319e9398de5f57b33a5b184c806ad217", "0xf91d58b5ae142dacc749f58a49fcbac340cb0343", "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f", "0xfd5840cd36d94d7229439859c0112a4185bc0255", "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b", "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63", "0x4f0ed527e8a95ecaa132af214dfd41f30b361600", "0x3f515f0a8e93f2e2f891ceeb3db4e62e202d7110", "0x44754455564474a89358b2c2265883df993b12f0", "0x7083609fce4d1d8dc0c979aab8c869ea2c873402", "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7", "0x55d398326f99059ff775485246999027b3197955", "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd", "0x55d398326f99059fF775485246999027B3197955"]}
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
      Trades_greater_10k: count(tradeAmountUsd: {gt: 10000})
      Trades_greater_50k: count(tradeAmountUsd: {gt: 50000})
      Trades_greater_100k: count(tradeAmountUsd: {gt: 100000})
      Trades_greater_500k: count(tradeAmountUsd: {gt: 500000})
    }
  }
}
    `;
export const Shitshow = gql`
    query Shitshow {
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      argument: {not: "pair"}
      options: {desc: "block.height", limit: 100}
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
    `;
export const PancakeDailyTradingvol = gql`
    query PancakeDailyTradingvol {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "USD"}
      exchangeName: {is: "Pancake"}
      date: {after: "2021-03-24"}
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
    `;
export const DexAssetPriceIndex = gql`
    query DexAssetPriceIndex($baseAddress: String!, $quoteAddress: String!, $connector1: String!, $from: ISO8601DateTime!, $interval: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      any: [{baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $quoteAddress}}, {baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $connector1}}, {baseCurrency: {is: $connector1}, quoteCurrency: {is: $quoteAddress}}]
      date: {since: $from}
      tradeAmountUsd: {gt: 10}
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
    `;
export const PancakeswapVolumePair = gql`
    query PancakeswapVolumePair {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "count"}
      smartContractAddress: {is: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"}
      date: {since: "2020-12-12", till: "2020-12-12"}
    ) {
      count
      tradeAmount(in: USD)
    }
  }
}
    `;
export const UniswapOhlcData5MinuteCandleUsdtwethv2 = gql`
    query UniswapOhlcData5MinuteCandleUsdtwethv2 {
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 5, asc: "timeInterval.minute"}
      date: {since: "2020-11-01"}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0x95b3497bBcCcc46a8F45F5Cf54b0878b39f8D96C"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
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
    `;
export const JudeQuery = gql`
    query JudeQuery {
  ethereum(network: bsc) {
    dexTrades(
      options: {limitBy: {limit: 2, each: "baseCurrency.address"}, desc: "timeInterval.minute"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xdf6b2112c9d7ec7ea9f65a23a2e8e5bec562426f"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
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
    `;
export const JudeQueryv1 = gql`
    query JudeQueryv1 {
  ethereum(network: bsc) {
    dexTrades(
      options: {limitBy: {limit: 2, each: "baseCurrency.address"}, desc: "timeInterval.minute"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xdf6b2112c9d7ec7ea9f65a23a2e8e5bec562426f"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
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
    `;
export const TradesForAnyWalletAddress = gql`
    query TradesForAnyWalletAddress {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "block.height", limit: 1}
      makerOrTaker: {is: "0xeF1F0eB4e392a45986D7cE889C95c086FB170E1e"}
      exchangeName: {in: ["Pancake", "Pancake v2"]}
      date: {after: "2021-04-28"}
    ) {
      transaction {
        hash
        gasValue
        gasPrice
        gas
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
    `;
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
    `;
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
    `;
export const MidasDollarOhlc15m = gql`
    query MidasDollarOhlc15m {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 200, desc: "timeInterval.minute"}
      date: {since: "2020-11-01"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0x242E46490397ACCa94ED930F2C4EdF16250237fa"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
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
    `;
export const TradesForSpecificWallet = gql`
    query TradesForSpecificWallet {
  ethereum(network: bsc) {
    dexTrades(
      makerOrTaker: {is: "0xeF1F0eB4e392a45986D7cE889C95c086FB170E1e"}
      date: {after: "2021-03-01"}
    ) {
      transaction {
        hash
      }
      date: date {
        date(format: "%d/%m/%y %H:%M")
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
    }
  }
}
    `;
export const BinanceChainDexBnbDelegated = gql`
    query BinanceChainDexBnbDelegated($from: ISO8601DateTime, $till: ISO8601DateTime) {
  binance {
    transactions(
      options: {desc: "date.date"}
      date: {since: $from, till: $till}
      transactionType: {is: SIDECHAIN_DELEGATE}
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
    `;
export const CeloDailyUniqueReceivers = gql`
    query CeloDailyUniqueReceivers {
  celo: ethereum(network: celo_rc1) {
    transfers(options: {limit: 30, desc: "date.date"}) {
      receiver: count(uniq: receivers)
      date: date {
        date(format: "%Y-%m-%d")
      }
    }
  }
}
    `;
export const ChiTrades = gql`
    query ChiTrades($network: EthereumNetwork!, $token: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    dexTrades(
      options: {desc: "amount"}
      date: {since: $from, till: $till}
      baseCurrency: {is: $token}
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
    `;
export const AlgorandDailyReceivers = gql`
    query AlgorandDailyReceivers {
  algorand {
    transfers(options: {limit: 30, desc: "date.date"}) {
      receiver: count(uniq: receivers)
      date: date {
        date(format: "%Y-%m-%d")
      }
    }
  }
}
    `;
export const ConfluxDailyReceivers = gql`
    query ConfluxDailyReceivers {
  conflux {
    transfers(options: {limit: 30, desc: "date.date"}) {
      receiver: count(uniq: receivers)
      date: date {
        date(format: "%Y-%m-%d")
      }
    }
  }
}
    `;
export const UsdPrice = gql`
    query UsdPrice($baseAddress: String!, $quoteAddress: String!, $connector1: String!, $from: ISO8601DateTime!, $interval: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      any: [{baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $quoteAddress}}, {baseCurrency: {is: $baseAddress}, quoteCurrency: {is: $connector1}}, {baseCurrency: {is: $connector1}, quoteCurrency: {is: $quoteAddress}}]
      date: {since: $from}
      tradeAmountUsd: {gt: 10}
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
    `;
export const PancakePairTradingvolv1 = gql`
    query PancakePairTradingvolv1 {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "USD"}
      date: {in: "2021-03-30"}
      exchangeName: {is: "Pancake"}
      quoteCurrency: {in: ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", "", "0xe9e7cea3dedca5984780bafc599bd69add087d56", "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f", "0x111111111117dc0aa78b770fa6a738034120c302", "0x4197c6ef3879a08cd51e5560da5064b773aa1d29", "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389", "0x83d69ef5c9837e21e2389d47d791714f5771f29b", "0xeb7dc7b3bff60a450eff31edf1330355361ea5ad", "0x49440376254290b3264183807a16450457f02b28", "0xd3debe4a971e4492d0d61ab145468a5b2c23301b", "0x72faa679e1008ad8382959ff48e392042a8b06f7", "0x8f0528ce5ef7b51152a59745befdd91d97091d2f", "0xa184088a740c695e156f91f5cc086a06bb78b827", "0xe02df9e3e622debdd69fb838bb799e3f168902c5", "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454", "0x0d9319565be7f53cefe84ad201be3f40feae2740", "0xca3f508b8e4dd382ee878a314789373d80a5190a", "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830", "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4", "0x250632378e573c6be1ac2f97fcdf00515d0aa91b", "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8", "0xba2ae424d960c26247dd6c32edc70b295c744c43", "0x2170ed0880ac9a755fd29b2688956bd959f933f8", "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", "0x55d398326f99059ff775485246999027b3197955", "0x48dc0190df5ece990c649a7a07ba19d3650a9572", "0xf388ee045cab30321db3fb69eab7dfb0c20f10ec", "0x5ac52ee5b2a633895292ff6d8a89bb9190451587", "0x78650b139471520656b9e7aa7a5e9276814a38e9", "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51", "0xc40c9a843e1c6d01b7578284a9028854f6683b1b", "0xbc5609612b7c44bef426de600b5fd1379db2ecf1", "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c", "0x80d5f92c2c8c682070c95495313ddb680b267320", "0x25e9d05365c867e59c1904e7463af9f312296f9e", "0xab301dae71f5b386c566f484e636aee60318f12f", "0x233d91a0713155003fc4dce0afa871b508b3b715", "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2", "0xe6df05ce8c8301223373cf5b969afcb1498c5528", "0x658a109c5900bc6d2357c87549b651670e5b0539", "0xf952fc3ca7325cc27d15885d37117676d25bfda6", "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8", "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a", "0x10702bebd7d15507f4ed2078bc76da44d3bef060", "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75", "0x7979f6c54eba05e18ded44c4f986f49a5de551c2", "0x23e8a70534308a4aaf76fb8c32ec13d17a3bd89e", "0x762539b45a1dcce3d36d080f74d1aed37844b878", "0x35e869b7456462b81cdb5e6e42434bd27f3f788c", "0x242e46490397acca94ed930f2c4edf16250237fa", "0xeccf35f941ab67ffcaa9a1265c2ff88865caa005", "0x23396cf899ca06c4472205fc903bdb4de249d6fc", "0xffbdb9bdcae97a962535479bb96cc2778d65f4dd", "0x7d5f9f8cf59986743f34bc137fc197e2e22b7b05", "0x41d74991509318517226755e508695c4d1ce43a6", "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9", "0x900aeb8c40b26a8f8dfaf283f884b03ee7abb3ec", "0x62d71b23bf15218c7d2d7e48dbbd9e9c650b173f", "0xf215a127a196e3988c09d052e16bcfd365cd7aa3", "0xa04f060077d90fe2647b61e4da4ad1f97d6649dc", "0x1cb4183ac708e07511ac57a2e45a835f048d7c56", "0x7426ab52a0e057691e2544fae9c8222e958b2cfb", "0x0ab06caa3ca5d6299925efaa752a2d2154ece929", "0x3947b992dc0147d2d89df0392213781b04b25075", "0xca2f75930912b85d8b2914ad06166483c0992945", "0x1658aed6c7dbab2ddbd8f5d898b0e9eab0305813", "0x211e763d0b9311c08ec92d72ddc20ab024b6572a", "0x9cddf33466ce007676c827c76e799f5109f1843c", "0x92e744307694ece235cd02e82680ec37c657d23e", "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6", "0x4131b87f74415190425ccd873048c708f8005823", "0xa1303e6199b319a891b79685f0537d289af1fc83", "0xd7410c38a86dcf3d5ec0f75e9763111e07d9c95b", "0x7e3656fccf19583dc432fb3af813e53ea566814b", "0xf8645e8f6d7f88bdb2ae7fabdeb315f9259be5b0", "0xbfa0841f7a90c4ce6643f651756ee340991f99d5", "0x2eb5ecc40e403b12ee4428d70fddf34e2c2c27b0", "0xb9784c1633ef3b839563b988c323798634714368", "0x8b09b6eb1d263644a267dfb2b2bc8d6b0fb72e7d", "0x1a2fb0af670d0234c2857fad35b789f8cb725584", "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e", "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb", "0xb0a51d5e242b6a86420ec34660b14d8b9cd4d5fc", "0x541e619858737031a1244a5d0cd47e5ef480342c", "0x849233ff1aea15d80ef658b2871664c9ca994063", "0x37109a51e712471bd2c72d8d70718627e7ff0032", "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb", "0x4b0f1812e5df2a09796481ff14017e6005508003", "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0", "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d", "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0", "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7", "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b", "0x95c78222b3d6e262426483d42cfa53685a67ab9d", "0xa07c5b74c9b40447a954e1466938b865b6bbea36", "0xeca88125a5adbe82614ffc12d0db554e2e2867c8", "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8", "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1", "0x972207a639cc1b374b893cc33fa251b55ceb7c07", "0x1610bc33319e9398de5f57b33a5b184c806ad217", "0xf91d58b5ae142dacc749f58a49fcbac340cb0343", "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f", "0xfd5840cd36d94d7229439859c0112a4185bc0255", "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b", "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63", "0x4f0ed527e8a95ecaa132af214dfd41f30b361600", "0x3f515f0a8e93f2e2f891ceeb3db4e62e202d7110", "0x44754455564474a89358b2c2265883df993b12f0", "0x7083609fce4d1d8dc0c979aab8c869ea2c873402", "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7", "0x55d398326f99059ff775485246999027b3197955", "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd", "0x55d398326f99059fF775485246999027B3197955"]}
      baseCurrency: {notIn: ["0xe9e7cea3dedca5984780bafc599bd69add087d56", "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", "0x55d398326f99059fF775485246999027B3197955", "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd", "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7", "0x7083609fce4d1d8dc0c979aab8c869ea2c873402", "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f", "0x111111111117dc0aa78b770fa6a738034120c302", "0x4197c6ef3879a08cd51e5560da5064b773aa1d29", "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389", "0x83d69ef5c9837e21e2389d47d791714f5771f29b", "0xeb7dc7b3bff60a450eff31edf1330355361ea5ad", "0x49440376254290b3264183807a16450457f02b28", "0xd3debe4a971e4492d0d61ab145468a5b2c23301b", "0x72faa679e1008ad8382959ff48e392042a8b06f7", "0x8f0528ce5ef7b51152a59745befdd91d97091d2f", "0xa184088a740c695e156f91f5cc086a06bb78b827", "0xe02df9e3e622debdd69fb838bb799e3f168902c5", "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454", "0x0d9319565be7f53cefe84ad201be3f40feae2740", "0xca3f508b8e4dd382ee878a314789373d80a5190a", "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830", "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4", "0x250632378e573c6be1ac2f97fcdf00515d0aa91b", "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8", "0xba2ae424d960c26247dd6c32edc70b295c744c43", "0x2170ed0880ac9a755fd29b2688956bd959f933f8", "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", "0x55d398326f99059ff775485246999027b3197955", "0x48dc0190df5ece990c649a7a07ba19d3650a9572", "0xf388ee045cab30321db3fb69eab7dfb0c20f10ec", "0x5ac52ee5b2a633895292ff6d8a89bb9190451587", "0x78650b139471520656b9e7aa7a5e9276814a38e9", "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51", "0xc40c9a843e1c6d01b7578284a9028854f6683b1b", "0xbc5609612b7c44bef426de600b5fd1379db2ecf1", "0xf05e45ad22150677a017fbd94b84fbb63dc9b44c", "0x80d5f92c2c8c682070c95495313ddb680b267320", "0x25e9d05365c867e59c1904e7463af9f312296f9e", "0xab301dae71f5b386c566f484e636aee60318f12f", "0x233d91a0713155003fc4dce0afa871b508b3b715", "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2", "0xe6df05ce8c8301223373cf5b969afcb1498c5528", "0x658a109c5900bc6d2357c87549b651670e5b0539", "0xf952fc3ca7325cc27d15885d37117676d25bfda6", "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8", "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a", "0x10702bebd7d15507f4ed2078bc76da44d3bef060", "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75", "0x7979f6c54eba05e18ded44c4f986f49a5de551c2", "0x23e8a70534308a4aaf76fb8c32ec13d17a3bd89e", "0x762539b45a1dcce3d36d080f74d1aed37844b878", "0x35e869b7456462b81cdb5e6e42434bd27f3f788c", "0x242e46490397acca94ed930f2c4edf16250237fa", "0xeccf35f941ab67ffcaa9a1265c2ff88865caa005", "0x23396cf899ca06c4472205fc903bdb4de249d6fc", "0xffbdb9bdcae97a962535479bb96cc2778d65f4dd", "0x7d5f9f8cf59986743f34bc137fc197e2e22b7b05", "0x41d74991509318517226755e508695c4d1ce43a6", "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9", "0x900aeb8c40b26a8f8dfaf283f884b03ee7abb3ec", "0x62d71b23bf15218c7d2d7e48dbbd9e9c650b173f", "0xf215a127a196e3988c09d052e16bcfd365cd7aa3", "0xa04f060077d90fe2647b61e4da4ad1f97d6649dc", "0x1cb4183ac708e07511ac57a2e45a835f048d7c56", "0x7426ab52a0e057691e2544fae9c8222e958b2cfb", "0x0ab06caa3ca5d6299925efaa752a2d2154ece929", "0x3947b992dc0147d2d89df0392213781b04b25075", "0xca2f75930912b85d8b2914ad06166483c0992945", "0x1658aed6c7dbab2ddbd8f5d898b0e9eab0305813", "0x211e763d0b9311c08ec92d72ddc20ab024b6572a", "0x9cddf33466ce007676c827c76e799f5109f1843c", "0x92e744307694ece235cd02e82680ec37c657d23e", "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6", "0x4131b87f74415190425ccd873048c708f8005823", "0xa1303e6199b319a891b79685f0537d289af1fc83", "0xd7410c38a86dcf3d5ec0f75e9763111e07d9c95b", "0x7e3656fccf19583dc432fb3af813e53ea566814b", "0xf8645e8f6d7f88bdb2ae7fabdeb315f9259be5b0", "0xbfa0841f7a90c4ce6643f651756ee340991f99d5", "0x2eb5ecc40e403b12ee4428d70fddf34e2c2c27b0", "0xb9784c1633ef3b839563b988c323798634714368", "0x8b09b6eb1d263644a267dfb2b2bc8d6b0fb72e7d", "0x1a2fb0af670d0234c2857fad35b789f8cb725584", "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e", "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb", "0xb0a51d5e242b6a86420ec34660b14d8b9cd4d5fc", "0x541e619858737031a1244a5d0cd47e5ef480342c", "0x849233ff1aea15d80ef658b2871664c9ca994063", "0x37109a51e712471bd2c72d8d70718627e7ff0032", "0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb", "0x4b0f1812e5df2a09796481ff14017e6005508003", "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0", "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d", "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0", "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7", "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b", "0x95c78222b3d6e262426483d42cfa53685a67ab9d", "0xa07c5b74c9b40447a954e1466938b865b6bbea36", "0xeca88125a5adbe82614ffc12d0db554e2e2867c8", "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8", "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1", "0x972207a639cc1b374b893cc33fa251b55ceb7c07", "0x1610bc33319e9398de5f57b33a5b184c806ad217", "0xf91d58b5ae142dacc749f58a49fcbac340cb0343", "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f", "0xfd5840cd36d94d7229439859c0112a4185bc0255", "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b", "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63", "0x4f0ed527e8a95ecaa132af214dfd41f30b361600", "0x3f515f0a8e93f2e2f891ceeb3db4e62e202d7110", "0x44754455564474a89358b2c2265883df993b12f0", "0x55d398326f99059ff775485246999027b3197955"]}
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
      Txs_greater_10k: count(tradeAmountUsd: {gt: 10000})
      Txs_greater_50k: count(tradeAmountUsd: {gt: 50000})
      Txs_greater_100k: count(tradeAmountUsd: {gt: 100000})
      Txs_greater_500k: count(tradeAmountUsd: {gt: 500000})
    }
  }
}
    `;
export const TotalDailyTradeVolume = gql`
    query TotalDailyTradeVolume {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0xc13a1b47377a8382bd3f6f9105137c1e838758b9"}
      time: {since: "2021-05-09T05:37:33.732Z"}
    ) {
      count
      tradeAmount(in: USD)
    }
  }
}
    `;
export const SmartcontracteventLp = gql`
    query SmartcontracteventLp {
  ethereum(network: bsc) {
    smartContractEvents(
      options: {desc: "block.height", limit: 10}
      smartContractAddress: {is: "0xa527a61703d82139f8a06bc30097cc9caa2df5a6"}
      txHash: {is: "0x2f624d5a1170c2e9462edc723a73dc6d157add223ed044cfc9644e078b7d7451"}
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
    `;
export const TokenTransaction = gql`
    query TokenTransaction {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 100, asc: "timeInterval.minute"}
      date: {since: "2021-01-01"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      quoteCurrency: {is: "0x9b93c29595dd603f75854eba3c5f4ee078ee4454"}
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
    `;
export const GetPoolMultiple = gql`
    query GetPoolMultiple {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "count"}
      smartContractAddress: {in: ["0x9adc6Fb78CEFA07E13E9294F150C1E8C1Dd566c0", "0xD6F91E5ecFEF046A5400541770F1435747332d31"]}
    ) {
      count
      tradeAmount(in: USD)
    }
  }
}
    `;
export const TransfersLast24Hours = gql`
    query TransfersLast24Hours {
  ethereum(network: bsc) {
    transfers(
      options: {desc: "date.date"}
      currency: {is: "0x47ff6511939ab379d7756b003f61010b9eab3077"}
      date: {after: "2021-03-07"}
    ) {
      date: date {
        date(format: "%y-%m-%d %H:%M")
      }
      amount
    }
  }
}
    `;
export const TokenCharting = gql`
    query TokenCharting {
  ethereum(network: bsc) {
    dexTrades(
      options: {limit: 100, asc: "timeInterval.minute"}
      date: {since: "2021-01-01"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      quoteCurrency: {is: "0x9b93c29595dd603f75854eba3c5f4ee078ee4454"}
    ) {
      timeInterval {
        minute(count: 5)
      }
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      open: minimum(of: block, get: quote_price)
      close: maximum(of: block, get: quote_price)
      baseCurrency {
        name
      }
      quoteCurrency {
        name
      }
    }
  }
}
    `;
export const PairsCreatedByTokenCreator = gql`
    query PairsCreatedByTokenCreator {
  ethereum(network: bsc) {
    arguments(
      smartContractEvent: {is: "PairCreated"}
      txFrom: {is: "0xb5b0059aa3c2b17993d24f6e8b39bc5e57501c3a"}
      options: {desc: "block.height"}
    ) {
      transaction {
        hash
      }
      callDepth
      block {
        height
      }
      token0_address: any(argument: {is: "token0"}, of: argument_value)
      token0_symbol: any(
        argument: {is: "token0"}
        of: argument_value
        as: token_symbol
      )
      token0_name: any(argument: {is: "token0"}, of: argument_value, as: token_name)
      token1_address: any(argument: {is: "token1"}, of: argument_value)
      token1_symbol: any(
        argument: {is: "token1"}
        of: argument_value
        as: token_symbol
      )
      token1_name: any(argument: {is: "token1"}, of: argument_value, as: token_name)
      pair_address: any(argument: {is: "pair"}, of: argument_value)
      pair_symbol: any(argument: {is: "pair"}, of: argument_value, as: token_symbol)
      pair_name: any(argument: {is: "pair"}, of: argument_value, as: token_name)
    }
  }
}
    `;
export const SnogeTransfers = gql`
    query SnogeTransfers {
  ethereum(network: ethereum) {
    transfers(currency: {is: "0x072c46f392e729c1f0d92a307c2c6dba06b5d078"}) {
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
    `;
export const SnogeDextrades = gql`
    query SnogeDextrades {
  ethereum {
    dexTrades(baseCurrency: {is: "0x072c46f392e729c1f0d92a307c2c6dba06b5d078"}) {
      count
      baseCurrency {
        symbol
      }
    }
  }
}
    `;
export const SnogeSmartcontractswaps = gql`
    query SnogeSmartcontractswaps {
  ethereum(network: ethereum) {
    smartContractEvents(
      smartContractAddress: {is: "0x98904add2880c06e7a9ba444dc463d034f29ecf4"}
    ) {
      count(smartContractEvent: {is: "Swap"})
    }
  }
}
    `;
export const HederaMessagesByTopics = gql`
    query HederaMessagesByTopics($network: HederaNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime, $dateFormat: String!) {
  hedera(network: $network) {
    messages(options: {asc: "date.date"}, date: {since: $from, till: $till}) {
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
    `;
export const CopyOfGetBalanceOfHoldersPublicMyQuery = gql`
    query CopyOfGetBalanceOfHoldersPublicMyQuery {
  ethereum(network: bsc) {
    address(
      address: {in: ["0x81b688a7fc4d7fa77ab1bddaacc5cb9cee8840a7", "0x81bc425a457ba4e19a112c8143c1a3788056cbf0", "0x81eec6627003150828a60f23441ca3a0d6988887", "0x820aad8ec0b3f99e53e744ea9409ceafa6db4914", "0x82253a56825a53ebfcf4b18611521e6d24c5a9ff"]}
    ) {
      address
      balances(
        currency: {is: "0x1CAA1e68802594EF24111ff0D10Eca592A2B5c58"}
        height: {between: [5873977, 5873979]}
      ) {
        value
      }
    }
  }
}
    `;
export const QuotepricePalm = gql`
    query QuotepricePalm {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0x9768e5b2d8e761905bc81dfc554f9437a46cdcc6"}
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
      options: {desc: ["block.height"], limit: 1}
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
    `;
export const QueryPairOfToken = gql`
    query QueryPairOfToken {
  ethereum {
    arguments(
      smartContractAddress: {is: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"}
      smartContractEvent: {is: "PairCreated"}
      options: {desc: "block.height", limit: 3}
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
    `;
export const PriceForListOfTokensInBusd = gql`
    query PriceForListOfTokensInBusd {
  ethereum(network: bsc) {
    count0: dexTrades(
      exchangeName: {in: ["Pancake", "Pancake v2"]}
      options: {limit: 9, asc: "quoteCurrency.symbol"}
      baseCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
      quoteCurrency: {in: ["0x86622caaca67c99661b3c27be5e42d629eac23db", "0x9897d2577754c6a2b6c4ab71357a4369d1781758", "0xbbdfb043c69739814c18f74a6a588465d70c61d2", "0xe9e7cea3dedca5984780bafc599bd69add087d56", "0x98fc5b3a39d712fa5a826df4f9c47bb6c0f6f8a9", "0x25f6524c2bfa5eebcc50beafd08525e0786082cf", "0xfd08766fbcf21c77eda29006f83becdcf0d93d8d", "0x1d807932297bd25f71e2635a9840833ae23e61a5", "0x91ba1d7ce730a28b3b77a688225fb46fd0e7b070", "0xa3b7446d998475aa4b521243da8a139d83ef1435", "0xd4d177803495c25896e4384e1dc97700297140d7", "0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf", "0x41b6e648e163d3b2f7b3a6594fa93094102e7c1e", "0x7302074b5290d4fda424f223d6a777974d3fe57b", "0xcd272bf348c3e2d50ed883c19fee73e10fdf1249", "0x3bd4fdcae62a6b3a867be5193396ffcc8aa3466d", "0xf4e91889284952d9cc9bb67f487a64d7b4bc36c5", "0x7b2124de75c7dc1ef61ee666b6b5e9d8506105e5", "0x1d6c7f4d7b83fbf6c5ed7dedca20134221c5707c", "0x4a81c37cb73bcf44fdd91c20453ecc1021795edd", "0xe5c5923843ba152758773af7ea73c21793899135", "0x878ae6ceea6466d70dbc5550f0427d096c4d9cde", "0x0b6f2e261431dac90b2883ae4190cc1526afaef4", "0xa1667e96dd0898318f8bb9bddb5a9d354f63db65", "0xcf4d3e848d872dbf5f40986713ac9e0601a02861", "0x023eac15a071d46ede0cb59ab84243eab9b6d559", "0xd6936e5ec01c4bb4dc0120235fa8bd23eace687e", "0x8357357420291d2d2e275afac69d77f98524c35e", "0x45b110fcdd1a20fceb1805ec0f7ca6ef3712befc", "0xc59824a2ab5db97b8202e283fd1b8584c69348d0", "0x55bde4c69e975c4d2c1a99d4469545e5fe316462", "0xa56d4b4736cfcac1bd8107e375a04ca8411244d7", "0x36457585c3ae609a86a97b5b077d4a656fcd61ac", "0x338196a509b4c66749c3f44c21c00501e6acf7bc", "0x8dddae156714b4031f787771da5b2a2b21d20ac5", "0x0e11829ffc774e140a6b3b7334f5446226a52996", "0x6bb7c07efe378b06dcd4df29538d8c680c407499", "0x87ffc48c9f89fc5dfa05836e083406d684fd6331", "0xaa9a06fb14c1957583a1dabb1db00ad9c1366b5c", "0x3ec90564ac30edc6113269c96f0cedbfb5f281ec", "0xb90d276032d85ce5369e8e6544acf28e64389f00", "0x20f84bdfa2e042700d03cfad3a02026e201c18fc", "0x0bf3302203af2439dfd94d212a714e5f3f49e6be", "0xd85cc913f9f4e947b87ebe29584f03181cc82c4d", "0x862827e70221c3a0ba27ab608ddfe4d5d3fe27c2", "0xe33d8729f2e63b9cfde594f572b058e542d34d34", "0x6d7d0ca264ea9ca0fed88be7e125bb8a63aa0259", "0x214831fefc6d1cbc10525ded384f5855162a2999", "0x2f801292924433f41e34669b0817f990764ecaa0", "0x380624a4a7e69db1ca07deecf764025fc224d056", "0x0d40ad2766cc51be2909c27c300fde54372afe04", "0xfcc49626a3c2bb2e61a7ee909daf8d7714318e57", "0x72eb1afddb5652e0f5c7b9a6cc1c3241348b16c6", "0xc5c8abcebd71c5a1c3d06a5f430750d981a5e904", "0x6e4c25766fd235ae623319569a5aefc4f7b233fe", "0x8631fa055884da43e920322078666a03db03e6ea", "0xed9d24caebf748a40be619d8c513042bf02dd6a5", "0xd0d81db06c7af6746302c1540eea1166bceebd61", "0xb41505c3b53208aafe0755ae35a7d344cd69a433", "0x096da101ad55c0b51a4b925afebefabdaaad1fbc", "0xce5814efff15d53efd8025b9f2006d4d7d640b9b", "0xcda92620ac41966327537f480f20f0297a341a61", "0xefd6fc7dadbac8251bb8310bb68ba015845619e4", "0xdb93dd34602e17c60e4d63af3f0955d4442d1556", "0x4e6415a5727ea08aae4580057187923aec331227", "0xf1b72b212fc8f9a61002beab0be9d4369d182a4c", "0xbcd3fca7d60e738753e09955c03f75427e42761a", "0x00db09ed9088c05dc6f05458a2e3c6254d382475", "0x13969bbeece18da1354561e9b59dc2937ef5c95c", "0xec86ab5c9052b1dae0b9749136965f573a85754f", "0xd68d55b6dcc7a0c88e287b6a632c9754e0b2504f", "0xe6d9ff7733a8563ef723df9c0ec650b2aa7594df", "0xf33f0adcc26ef9d87926797263f4a2a71aa0f153", "0x3f6e57cfe1a5c2f81be2bb7edc462e1d64acdc44", "0xdebec6efaebfcc6657305fdf6871d744ef5ebd0f", "0x1da9cea6043e868e9d3ef4cb2f3d8df06c376c9e", "0xb0b924c4a31b7d4581a7f78f57cee1e65736be1d", "0x79ba0ab945fae020424f2a0d8a0ec8520e26f5b0", "0x9fcf747efedc94bf56d883ea4ffb71a5c596609c", "-", "0x124b5ba962d5288eb0be2f6043f80eb9a925ad65", "0x22da44f5b3ae52521377a12459945f6cf50400a6", "0x8496a36ec6c6315ea27e14a35e25d26e4d2f3207", "0x06f444138dc00647bc2d23f2b8c61a53ac979d7d", "0xc7dd396326fa5e4cd0c64ff8985b3f19b82164f3", "0x533f28bef8529bdcf1270ddf794344410a45ae72", "0x221b0815b38fccd0aa212162414ab2335d7988ec", "0xe3ad11878f8b5f3a7f6e8dd5318b2f3350612bd7", "0x8f5c13668354c742ba410b221807897372369e9b", "0xb0a1978a5465b949ffef1783feb36645927111b2", "0x946d1cfd8e3b0b5aa7440979b1bb97d2aada9310", "0x6a4572533d090690e829db5236655d3d0aeae592", "0x6ed26d8a3059c2ca7ecee4f35841079187de761a", "0x958a0166ae5022a96c1d870bd158bc167cebda81", "0xdeccd579a9622965251ef5a5a8d9a8050cf517b2", "0xf333c198796ae65bee8b586dd886f7583dfbf479", "0x1991501f1398663f69dd7391c055bb0df6514f76", "0xdf6b2112c9d7ec7ea9f65a23a2e8e5bec562426f", "0xb568b7cd9664db38e2a629d78f2631bc7ec4fe3b", "0x9ac54ccd649537a5e4f9ae1dbe732c84bb617064", "0x7fce7f3ac878a3a06974f30a7069be5df70a31c4", "0x5cd2fde277c19dd1e5a75026b95125988676f6b9", "0xc64084567abbb7c19814ebc56885d6ac802ba88e", "0x849eb81c160541100f6f11e1d268567a971d9c3d", "0x43f4de561081a756d3caebbdbf6c8c30b58ef5e3", "0xba03f91b4eee43b34ee28130541c489efb7093e2", "0x3ae24ec70800c1cceb0ce7a5573cfd1f04464899", "0x6cfeb2d07623fd884f525e7c33b6fc97147c4f41", "0xfe4cbeaf7cef9066690507b40d43203be69857ac", "0x9fdcf499f1b05ccb0e89f4fc99833f42c783124a", "0x7d255e05b9cfb0f0c9849493e9dad79268b6794b", "0x70a9bb27154875fb2f6c6b924030a89ff0423f53", "0xa917079dd2d2d97734447f9c6269d949c20467e7", "0x47f1a0ee48ab1ce122a51b3b8037cc3aca6e1d63", "0x2a9718deff471f3bb91fa0eceab14154f150a385", "0x295f2122ebfcc5c38b4bd33879a37348195b61fb", "0x5e90253fbae4dab78aa351f4e6fed08a64ab5590", "0x0a4dc3ac9426e1c85db6b618de48a2bbdd596c4e", "0xad070194f0644cec996b9a8076eabf09e82921ea", "0xb27adaffb9fea1801459a1a81b17218288c097cc", "0x6e2307de122cd9465b7f47dd73a5f89bb29e4285", "0x95afdae61c17af09b5d484b63d7e421d7b743313", "0xb24cc33a63908e308c986e6fafca164e992ee490", "0xe2318e548684f77c73fa7191f5eed86d4ee3c810", "0xe95748df47e3ed06f545735bdedc63331c520c6d", "0xc015009a79ff1deac03e64a0e3a7fd044e999e03", "0x7c4fbdb8f1bdf2746f9f853c7a6949d47b84b716", "0xb2330da0d3b95e2c427f375986b394be4b11960c", "0x9056a0b53f39594abee23d73d5a99e10338f2dc0", "0xbfcb3a513d6af17ffb2451fa6c3adb2714671db6", "0x88176fc32a5951c01bad3212e1cdb16ba54320eb", "0x02f793822f18dd9f7035149a831c823e0af07f3b", "0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3", "0x4d8883ee27d521ae2f7fea5104a9f85b86bccdd4", "0xe8baa62473e50703645d5f769a3052f1dc182d3f", "0x4f58fa47fa3a7aee33ceb388baac1dca7795012d", "0xc35731db276ca7b01715c40999909a178c6bbdb8", "0xd5a0dad4e6f399cdc346ff04fd90ec0b511fcef9", "0x8891de345808e77228677f0efb56125db1e93a49", "0xa2f5087756a0a49ec9ff76dc4493df4022a1a9eb", "0xfbc92a6b7a388ab9e99d7acc8ecfb3b315f481f4", "0x44c928e154d2f8bf41557ac2c93fb398263af0dd", "0x5bc94e9347f3b9be8415bdfd24af16666704e44f", "0x7aecb24d2943115b136d953aafd84e82c9c766ca", "0x869dd7a64afbe5370a8c591d9b8650be60c0b8f6"]}
    ) {
      quoteCurrency {
        symbol
        name
        address
      }
      quotePrice
      median_price: quotePrice(calculate: median)
    }
  }
}
    `;
export const GetCakeBnbPriceOnSpecBlock = gql`
    query GetCakeBnbPriceOnSpecBlock {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"}
      quoteCurrency: {is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
      height: {gteq: 6481098}
      options: {asc: ["block.height", "transaction.index"], limit: 1}
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
    `;
export const Latest24hPancakeLpPoolsTrading = gql`
    query Latest24hPancakeLpPoolsTrading {
  ethereum(network: bsc) {
    dexTrades(
      options: {desc: "timeInterval.hour", limit: 24}
      smartContractAddress: {in: ["0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6", "0x86e650350c40a5178a5d014ba37fe8556232b898", "0x9d8b7e4a9d53654d82f12c83448d8f92732bc761", "0x9e642d174b14faea31d842dc83037c42b53236e6", "0x4576C456AF93a37a096235e5d83f812AC9aeD027", "0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC", "0xb5ab3996808c7e489dcdc0f1af2ab212ae0059af", "0xc1800c29cf91954357cd0bf3f0accaada3d0109c", "0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3", "0x60bB03D1010b99CEAdD0dd209b64bC8bd83da161", "0x66b9e1eac8a81f3752f7f3a5e95de460688a17ee", "0x74690f829fec83ea424ee1f1654041b2491a7be9", "0x3ef4952c7a9afbe374ea02d1bf5ed5a0015b7716", "0xffb9e2d5ce4378f1a89b29bf53f80804cc078102", "0x36b7d2e5c7877392fb17f9219efad56f3d794700", "0x6411310c07d8c48730172146fd6f31fa84034a8b", "0x91589786D36fEe5B27A5539CfE638a5fc9834665", "0xbc765fd113c5bdb2ebc25f711191b56bb8690aec", "0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8", "0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275", "0xbe14f3a89a4f7f279af9d99554cf12e8c29db921", "0x64373608f2e93ea97ad4d8ca2cce6b2575db2f55", "0xd6b900d5308356317299dafe303e661271aa12f1", "0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029", "0x58B58cab6C5cF158f63A2390b817710826d116D0", "0x470bc451810b312bbb1256f96b0895d95ea659b1", "0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e", "0x9c4f6a5050cf863e67a402e8b377973b4e3372c1", "0xbEA35584b9a88107102ABEf0BDeE2c4FaE5D8c31", "0xC743Dc05F03D25E1aF8eC5F8228f4BD25513c8d0", "0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d", "0x1b96b92314c44b159149f7e0303511fb2fc4774f", "0xba51d1ab95756ca4eab8737ecd450cd8f05384cf", "0xc639187ef82271d8f517de6feae4faf5b517533c", "0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c", "0x981d2ba1b298888408d342c39c2ab92e8991691e", "0xaebe45e3a03b734c68e5557ae04bfc76917b4686", "0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483", "0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb", "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422", "0x7561EEe90e24F3b348E1087A005F78B4c8453524", "0x4e0f3385d932F7179DeE045369286FFa6B03d887", "0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd", "0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2", "0x2333c77fc0b2875c11409cdcd3c75d42d402e834", "0x574a978c2d0d36d707a05e459466c7a1054f1210", "0x56c77d59e82f33c712f919d09fceddf49660a829", "0x5acac332f0f49c8badc7afd0134ad19d3db972e6", "0x54edd846db17f43b6e43296134ecd96284671e81", "0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1", "0x4269e7F43A63CEA1aD7707Be565a94a9189967E9", "0x35fe9787f0ebf2a200bac413d3030cf62d312774", "0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6", "0x30479874f9320a62bce3bc0e315c920e1d73e278", "0x752E713fB70E3FA1Ac08bCF34485F14A986956c4", "0x7793870484647a7278907498ec504879d6971EAb", "0xd937FB9E6e47F3805981453BFB277a49FFfE04D7", "0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB", "0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67", "0xdc6c130299e53acd2cc2d291fa10552ca2198a6b", "0xeb325a8ea1c5abf40c7ceaf645596c1f943d0948", "0xD1F12370b2ba1C79838337648F820a87eDF5e1e6", "0x680dd100e4b394bda26a59dd5c119a391e747d18", "0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC", "0xff17ff314925dff772b71abdff2782bc913b3575", "0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd", "0x36b8b28d37f93372188f2aa2507b68a5cd8b2664", "0x4db28767d1527ba545ca5bbda1c96a94ed6ff242", "0x292ca56ed5b3330a19037f835af4a9c0098ea6fa", "0x7cd05f8b960ba071fdf69c750c0e5a57c8366500", "0x745c4fd226e169d6da959283275a8e0ecdd7f312", "0x2730bf486d658838464a4ef077880998d944252d", "0x970858016C963b780E06f7DCfdEf8e809919BcE8", "0x17580340f3daedae871a8c21d15911742ec79e0f", "0x0392957571f28037607c14832d16f8b653edd472", "0x99d865ed50d2c32c1493896810fa386c1ce81d91", "0xc92Dc34665c8a21f98E1E38474580b61b4f3e1b9", "0x852A68181f789AE6d1Da3dF101740a59A071004f", "0xF609ade3846981825776068a8eD7746470029D1f", "0xD5664D2d15cdffD597515f1c0D945c6c1D3Bf85B", "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"]}
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
    `;
export const AffiliateappsTradesReceive = gql`
    query AffiliateappsTradesReceive($network: EthereumNetwork!, $limit: Int!, $offset: Int!, $sender: String!, $receiver: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transfers(
      options: {desc: "block.height", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      amount: {gt: 0}
      sender: {is: $sender}
      receiver: {is: $receiver}
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
    `;
export const AffiliateappsSumTradesReceive = gql`
    query AffiliateappsSumTradesReceive($network: EthereumNetwork!, $sender: String!, $receiver: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transfers(
      date: {since: $from, till: $till}
      amount: {gt: 0}
      sender: {is: $sender}
      receiver: {is: $receiver}
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

export type PaperHandsQueryVariables = Exact<{
  minTradeUsd?: Maybe<Scalars['Float']>;
  since?: Maybe<Scalars['ISO8601DateTime']>;
  contract?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type PaperHandsQuery = (
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
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
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

export type DexExchangesQueryVariables = Exact<{ [key: string]: never; }>;


export type DexExchangesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { numberOfTrades: EthereumDexTrades['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName' | 'fullNameWithId' | 'name'>
      )> }
    )>> }
  )> }
);

export type Eth20QueryVariables = Exact<{
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type Eth20Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & { times: EthereumSmartContractEvent['count'], uniqueCallers: EthereumSmartContractEvent['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['startOfInterval'] }
      )>, smartContractEvent?: Maybe<(
        { __typename: 'Event' }
        & Pick<Event, 'name'>
      )> }
    )>> }
  )> }
);

export type BuySellPriceSpreadQueryVariables = Exact<{ [key: string]: never; }>;


export type BuySellPriceSpreadQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice' | 'side'>
      & { trades: EthereumDexTrades['count'] }
      & { baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type BitcoinBlocksByHeightQueryVariables = Exact<{ [key: string]: never; }>;


export type BitcoinBlocksByHeightQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'BitcoinBlock' }
      & Pick<BitcoinBlock, 'height' | 'blockHash' | 'transactionCount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type DexTradesByProtocolsQueryVariables = Exact<{ [key: string]: never; }>;


export type DexTradesByProtocolsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'protocol'>
    )>> }
  )> }
);

export type BalanceQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
}>;


export type BalanceQuery = (
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
          & Pick<Currency, 'address' | 'symbol' | 'tokenType'>
        )> }
      )>> }
    )> }
  )> }
);

export type QueryDexBaseQuotePricesQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryDexBaseQuotePricesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount' | 'quotePrice' | 'baseAmount'>
      & { trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'day'>
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

export type HasToContractQueryVariables = Exact<{ [key: string]: never; }>;


export type HasToContractQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'name' | 'address' | 'tokenType'>
      )> }
    )>> }
  )> }
);

export type Eth20ContractBalanceQueryVariables = Exact<{ [key: string]: never; }>;


export type Eth20ContractBalanceQuery = (
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
          & Pick<Currency, 'symbol'>
        )> }
      )>> }
    )> }
  )> }
);

export type BaseQuoteQueryForMirrorPairsQueryVariables = Exact<{ [key: string]: never; }>;


export type BaseQuoteQueryForMirrorPairsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type UniswapOhlcData5MinuteCandleUsdtwethQueryVariables = Exact<{ [key: string]: never; }>;


export type UniswapOhlcData5MinuteCandleUsdtwethQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
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

export type CakeusdtCurrentPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type CakeusdtCurrentPriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice' | 'price'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'index'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type UsdtethDailyVolumeQueryVariables = Exact<{ [key: string]: never; }>;


export type UsdtethDailyVolumeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice' | 'tradeAmount'>
      & { trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'day'>
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

export type TradesForASpecificTokenOnThePancakedexQueryVariables = Exact<{ [key: string]: never; }>;


export type TradesForASpecificTokenOnThePancakedexQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type TokenVolumeOnUniswapQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenVolumeOnUniswapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
    )>> }
  )> }
);

export type BitcoinDailyTransactionVolumeQueryVariables = Exact<{
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type BitcoinDailyTransactionVolumeQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'BitcoinTransaction' }
      & { txVolUSD: BitcoinTransaction['inputValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type TransactionsRelatedToAnAddressAfterCertainBlockHeightQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type TransactionsRelatedToAnAddressAfterCertainBlockHeightQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & Pick<EthereumSmartContractCalls, 'gasValue' | 'external'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, smartContractMethod?: Maybe<(
        { __typename?: 'Method' }
        & Pick<Method, 'name' | 'signatureHash'>
      )>, address?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type TopTradesByUsdAmountInDexQueryVariables = Exact<{ [key: string]: never; }>;


export type TopTradesByUsdAmountInDexQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type TopGasBurnersInDexTradesQueryVariables = Exact<{ [key: string]: never; }>;


export type TopGasBurnersInDexTradesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'protocol' | 'gasValue' | 'buyAmount' | 'sellAmount' | 'tradeIndex'>
      & { txs: EthereumDexTrades['count'] }
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type PancakeTotalVolumeAndTradesQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeTotalVolumeAndTradesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'decimals' | 'name' | 'symbol' | 'tokenId' | 'tokenType'>
      )> }
    )>> }
  )> }
);

export type BandProtocolOracleReadingsQueryVariables = Exact<{ [key: string]: never; }>;


export type BandProtocolOracleReadingsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & Pick<EthereumSmartContractEvent, 'eventIndex'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, arguments?: Maybe<Array<(
        { __typename?: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'value' | 'argument'>
      )>> }
    )>> }
  )> }
);

export type InflowOutflowForAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type InflowOutflowForAddressQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { out?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & { in: EthereumTransfers['amount'], out: EthereumTransfers['amount'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type BalancesQueryWithTimeFilterExampleQueryVariables = Exact<{ [key: string]: never; }>;


export type BalancesQueryWithTimeFilterExampleQuery = (
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
          & Pick<Currency, 'symbol'>
        )> }
      )>> }
    )> }
  )> }
);

export type HoprChannelsUsersInTitlisBscQueryVariables = Exact<{
  network: EthereumNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  address: Scalars['String'];
}>;


export type HoprChannelsUsersInTitlisBscQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { count: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], totalGas: EthereumSmartContractCalls['gasValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type NewQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type BtcTransfersQueryVariables = Exact<{
  network: EthereumNetwork;
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  address?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type BtcTransfersQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & { total: EthereumTransfers['amount'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['date'] }
      )>, sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type BalancerPoolVolumeAtASpecificBlockHeightQueryVariables = Exact<{ [key: string]: never; }>;


export type BalancerPoolVolumeAtASpecificBlockHeightQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type BitcoinAndZcashFeeQueryVariables = Exact<{ [key: string]: never; }>;


export type BitcoinAndZcashFeeQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'BitcoinTransaction' }
      & Pick<BitcoinTransaction, 'feeValue'>
      & { count: BitcoinTransaction['count'], avgFee: BitcoinTransaction['feeValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )>, zcash?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'BitcoinTransaction' }
      & Pick<BitcoinTransaction, 'feeValue'>
      & { count: BitcoinTransaction['count'], avgFee: BitcoinTransaction['feeValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type LatestSwapsForABalancerPoolQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestSwapsForABalancerPoolQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type Top10TransactionSendersByDateInBscQueryVariables = Exact<{ [key: string]: never; }>;


export type Top10TransactionSendersByDateInBscQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & Pick<EthereumTransactions, 'gasValue'>
      & { Txs: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type PancakeTradeVolumeForDifferentCurrencyPairsQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeTradeVolumeForDifferentCurrencyPairsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { trades: EthereumDexTrades['count'] }
      & { buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type Top10TransactionSendersByDateInBscv1QueryVariables = Exact<{ [key: string]: never; }>;


export type Top10TransactionSendersByDateInBscv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & Pick<EthereumTransactions, 'gasValue'>
      & { Txs: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type QueryAddressFirstLastTxQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryAddressFirstLastTxQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & Pick<EthereumTransactions, 'count'>
      & { first_tx_time: EthereumTransactions['minimum'], last_tx_time: EthereumTransactions['maximum'], first_tx_hash: EthereumTransactions['minimum'], last_tx_hash: EthereumTransactions['maximum'] }
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type PancakeswapDailyActiveUsersQueryVariables = Exact<{
  network: EthereumNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  address: Scalars['String'];
}>;


export type PancakeswapDailyActiveUsersQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { count: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], totalGas: EthereumSmartContractCalls['gasValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type GasCostsSpentByTradersOnDexExchangesQueryVariables = Exact<{ [key: string]: never; }>;


export type GasCostsSpentByTradersOnDexExchangesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'gasValue'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type BscWeeklyTxsSendersGascostQueryVariables = Exact<{
  network: EthereumNetwork;
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type BscWeeklyTxsSendersGascostQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & Pick<EthereumTransactions, 'gasValue' | 'gasPrice'>
      & { gasValueAvg: EthereumTransactions['gasValue'], avgGasPrice: EthereumTransactions['gasPrice'], medGasPrice: EthereumTransactions['gasPrice'], maxGasPrice: EthereumTransactions['gasPrice'], Txs: EthereumTransactions['count'], Senders: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['startOfInterval'] }
      )> }
    )>> }
  )> }
);

export type BurgerswapFactoryContractActiveUsersBscQueryVariables = Exact<{
  network: EthereumNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  address: Scalars['String'];
}>;


export type BurgerswapFactoryContractActiveUsersBscQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { count: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], totalGas: EthereumSmartContractCalls['gasValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type EthereumUniqueSendersByMonthQueryVariables = Exact<{ [key: string]: never; }>;


export type EthereumUniqueSendersByMonthQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { activeAddress: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )>, binanceSmartChain?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { activeAddress: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type HowToGetFeeForDexTradesQueryVariables = Exact<{ [key: string]: never; }>;


export type HowToGetFeeForDexTradesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'protocol' | 'gasValue' | 'buyAmount' | 'sellAmount' | 'tradeIndex'>
      & { txs: EthereumDexTrades['count'] }
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type LimitbyExampleQueryVariables = Exact<{ [key: string]: never; }>;


export type LimitbyExampleQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & Pick<EthereumTransactions, 'gasValue'>
      & { Txs: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type ConfluxDailyTransactionVolumeActiveAddressesTransactionCountsQueryVariables = Exact<{
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type ConfluxDailyTransactionVolumeActiveAddressesTransactionCountsQuery = (
  { __typename?: 'Query' }
  & { conflux?: Maybe<(
    { __typename?: 'Conflux' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'ConfluxTransactions' }
      & { txVolUSD: ConfluxTransactions['amount'], txs: ConfluxTransactions['count'], activeAddresses: ConfluxTransactions['count'], averageGasPrice: ConfluxTransactions['gasPrice'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type SpecificBalancerPoolTradesUsingItsAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type SpecificBalancerPoolTradesUsingItsAddressQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type QueryKnownDexOnlyWithNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryKnownDexOnlyWithNamesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'protocol' | 'tradeAmount'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name'>
      )> }
    )>> }
  )> }
);

export type NewlyCreatedBalancerPoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewlyCreatedBalancerPoolsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type HackathonQueryBscWeeklyTxsSendersGascostQueryVariables = Exact<{ [key: string]: never; }>;


export type HackathonQueryBscWeeklyTxsSendersGascostQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & Pick<EthereumTransactions, 'gasPrice'>
      & { totalGasUsed: EthereumTransactions['gasValue'], totalGasUsedInUSD: EthereumTransactions['gasValue'], gasValueAvgPerTx: EthereumTransactions['gasValue'], gasValueAvgPerTxInUSD: EthereumTransactions['gasValue'], avgGasPrice: EthereumTransactions['gasPrice'], medGasPrice: EthereumTransactions['gasPrice'], maxGasPrice: EthereumTransactions['gasPrice'], Txs: EthereumTransactions['count'], Senders: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['startOfInterval'] }
      )> }
    )>> }
  )> }
);

export type LinkQueryVariables = Exact<{ [key: string]: never; }>;


export type LinkQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { uniswap?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, taker?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>>, bancor?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, taker?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>>, sushiswap?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, taker?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type BitcoinActiveAddressesByMonthQueryVariables = Exact<{ [key: string]: never; }>;


export type BitcoinActiveAddressesByMonthQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { inputs?: Maybe<Array<(
      { __typename?: 'BitcoinTransactionInput' }
      & { activeAddress: BitcoinTransactionInput['count'] }
      & { month?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year' | 'month'>
      )> }
    )>> }
  )> }
);

export type PancakeAllSwapsOfAPoolQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeAllSwapsOfAPoolQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type ExampleOfTimeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleOfTimeQueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type LatestPancakeswapPairsQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestPancakeswapPairsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type LatestPriceOfAPairOnUniswapQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestPriceOfAPairOnUniswapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'] }
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
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

export type DexTradesVolumesMonthlyQueryVariables = Exact<{ [key: string]: never; }>;


export type DexTradesVolumesMonthlyQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year' | 'month'>
      )> }
    )>> }
  )> }
);

export type AggregateSmartContractArgumentQueryVariables = Exact<{ [key: string]: never; }>;


export type AggregateSmartContractArgumentQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & Pick<EthereumArguments, 'number'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'hour'>
        )> }
      )> }
    )>> }
  )> }
);

export type BalancerProtocolLatestTradesQueryVariables = Exact<{ [key: string]: never; }>;


export type BalancerProtocolLatestTradesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type ExampleOfTransferQueryWithAmountsInUsdQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleOfTransferQueryWithAmountsInUsdQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount'>
      & { amountInUsd: EthereumTransfers['amount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type OceanComparisonBancorUniswapQueryVariables = Exact<{ [key: string]: never; }>;


export type OceanComparisonBancorUniswapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { uniswap?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'count'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>>, bancor?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'count'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type UsdtethReserveQueryVariables = Exact<{ [key: string]: never; }>;


export type UsdtethReserveQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type TopTradesByUsdAmountInDexv1QueryVariables = Exact<{ [key: string]: never; }>;


export type TopTradesByUsdAmountInDexv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type ExampleOfQueryBtcTxsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleOfQueryBtcTxsListQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'BitcoinTransaction' }
      & Pick<BitcoinTransaction, 'hash'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )> }
    )>> }
  )> }
);

export type TransferTotalSumOfTotalQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type TransferTotalSumOfTotalQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & { sum_in: EthereumTransfers['amount'], sum_out: EthereumTransfers['amount'], count_in: EthereumTransfers['count'], count_out: EthereumTransfers['count'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol' | 'tokenType'>
      )> }
    )>> }
  )> }
);

export type FilterByCurrencyQueryVariables = Exact<{
  network: EthereumNetwork;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type FilterByCurrencyQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'count' | 'amount'>
      & { senders: EthereumTransfers['count'], receivers: EthereumTransfers['count'], days: EthereumTransfers['count'], from_date: EthereumTransfers['minimum'], till_date: EthereumTransfers['maximum'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address' | 'name'>
      )> }
    )>> }
  )> }
);

export type PooledTokenForAWbnbcakePairOnPancakeQueryVariables = Exact<{ [key: string]: never; }>;


export type PooledTokenForAWbnbcakePairOnPancakeQuery = (
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
          & Pick<Currency, 'symbol'>
        )> }
      )>> }
    )> }
  )> }
);

export type BtcOutputExactly1btcQueryVariables = Exact<{
  network: BitcoinNetwork;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  outVal: Scalars['Float'];
}>;


export type BtcOutputExactly1btcQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { outputs?: Maybe<Array<(
      { __typename?: 'BitcoinTransactionOutput' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'TransactionHashIndex' }
        & Pick<TransactionHashIndex, 'hash' | 'index'>
      )>, outputAddress?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address'>
      )> }
    )>> }
  )> }
);

export type InboundOutboundTransactionsForBtcAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type InboundOutboundTransactionsForBtcAddressQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { inbound?: Maybe<Array<(
      { __typename?: 'BitcoinCoinpath' }
      & { totalInbound: BitcoinCoinpath['amount'] }
      & { sender?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )>, transactions?: Maybe<Array<(
        { __typename?: 'CoinpathEntry' }
        & Pick<CoinpathEntry, 'amount' | 'height' | 'timestamp' | 'txHash' | 'txValue'>
      )>> }
    )>>, outbound?: Maybe<Array<(
      { __typename?: 'BitcoinCoinpath' }
      & { totalOutbound: BitcoinCoinpath['amount'] }
      & { receiver?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )>, transactions?: Maybe<Array<(
        { __typename?: 'CoinpathEntry' }
        & Pick<CoinpathEntry, 'amount' | 'height' | 'timestamp' | 'txHash' | 'txValue'>
      )>> }
    )>> }
  )> }
);

export type PancakePoolsVolumeForADateQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakePoolsVolumeForADateQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
    )>> }
  )> }
);

export type EthdaiQueryVariables = Exact<{
  baseAddress?: Maybe<Scalars['String']>;
  quoteAddress?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['Int']>;
}>;


export type EthdaiQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], high: EthereumDexTrades['quotePrice'], low: EthereumDexTrades['quotePrice'], open: EthereumDexTrades['minimum'], close: EthereumDexTrades['maximum'] }
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

export type TopTradesInDexByGasValueInUsdQueryVariables = Exact<{ [key: string]: never; }>;


export type TopTradesInDexByGasValueInUsdQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'], gasValueUsd: EthereumDexTrades['gasValue'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type BitcoinMonthlyInputAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type BitcoinMonthlyInputAddressesQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { inputs?: Maybe<Array<(
      { __typename?: 'BitcoinTransactionInput' }
      & { activeAddress: BitcoinTransactionInput['count'] }
      & { month?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type PancakePools24HourTransfersDataQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakePools24HourTransfersDataQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount' | 'count'>
      & { average: EthereumTransfers['amount'], days: EthereumTransfers['count'], sender_count: EthereumTransfers['count'], receiver_count: EthereumTransfers['count'], min_date: EthereumTransfers['minimum'], max_date: EthereumTransfers['maximum'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type PancakeTradingVolQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeTradingVolQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['date'] }
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type DexTradesVolumesMonthlyv1QueryVariables = Exact<{ [key: string]: never; }>;


export type DexTradesVolumesMonthlyv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year'>
      )> }
    )>> }
  )> }
);

export type ConfluxGasSpentByDayQueryVariables = Exact<{
  network: ConfluxNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type ConfluxGasSpentByDayQuery = (
  { __typename?: 'Query' }
  & { conflux?: Maybe<(
    { __typename?: 'Conflux' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'ConfluxTransactions' }
      & Pick<ConfluxTransactions, 'gasValue'>
      & { count: ConfluxTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type DexExchangesByTradeAmountsQueryVariables = Exact<{ [key: string]: never; }>;


export type DexExchangesByTradeAmountsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type NewQueryv1QueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type HistoryOfBlockRewardsInUsdQueryVariables = Exact<{ [key: string]: never; }>;


export type HistoryOfBlockRewardsInUsdQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'EthereumBlocks' }
      & { rewardInUsd: EthereumBlocks['reward'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type TransferTotalSumOfTotalv1QueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type TransferTotalSumOfTotalv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & { sum_in: EthereumTransfers['amount'], sum_out: EthereumTransfers['amount'], count_in: EthereumTransfers['count'], count_out: EthereumTransfers['count'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol' | 'tokenType'>
      )> }
    )>> }
  )> }
);

export type TopTradesByUsdAmountInDexv2QueryVariables = Exact<{ [key: string]: never; }>;


export type TopTradesByUsdAmountInDexv2Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type PancakeOhlcDataWbnbbusdQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeOhlcDataWbnbbusdQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], median_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
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

export type LatestTradesOnPancakeQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestTradesOnPancakeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type NewQueryv2QueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryv2Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type ConfluxBlocksOverTimeQueryVariables = Exact<{
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type ConfluxBlocksOverTimeQuery = (
  { __typename?: 'Query' }
  & { conflux?: Maybe<(
    { __typename?: 'Conflux' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'ConfluxBlocks' }
      & Pick<ConfluxBlocks, 'count'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type PancakePools24HourTransfersDatav1QueryVariables = Exact<{ [key: string]: never; }>;


export type PancakePools24HourTransfersDatav1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount' | 'count'>
      & { median: EthereumTransfers['amount'], average: EthereumTransfers['amount'], days: EthereumTransfers['count'], sender_count: EthereumTransfers['count'], receiver_count: EthereumTransfers['count'], min_date: EthereumTransfers['minimum'], max_date: EthereumTransfers['maximum'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type PancakePoolsVolumeDayWiseQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakePoolsVolumeDayWiseQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type ExampleOfDexCandlestickPairQueryByAllExchangesProtocolsQueryVariables = Exact<{
  baseAddress?: Maybe<Scalars['String']>;
  quoteAddress?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  to: Scalars['ISO8601DateTime'];
  interval?: Maybe<Scalars['Int']>;
}>;


export type ExampleOfDexCandlestickPairQueryByAllExchangesProtocolsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { buyAmount: EthereumDexTrades['baseAmount'], volume: EthereumDexTrades['quoteAmount'], trades: EthereumDexTrades['count'], high: EthereumDexTrades['quotePrice'], low: EthereumDexTrades['quotePrice'], open: EthereumDexTrades['minimum'], close: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address' | 'tokenId'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type FirstoneQueryVariables = Exact<{ [key: string]: never; }>;


export type FirstoneQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type NewQueryv3QueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryv3Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'protocol' | 'gasValue' | 'buyAmount' | 'sellAmount' | 'tradeIndex'>
      & { txs: EthereumDexTrades['count'] }
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type QueryMinMaxBlockPerDateQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryMinMaxBlockPerDateQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'EthereumBlocks' }
      & Pick<EthereumBlocks, 'minimum' | 'maximum'>
    )>> }
  )> }
);

export type TwtbusdSpreadInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type TwtbusdSpreadInfoQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice' | 'side'>
      & { trades: EthereumDexTrades['count'] }
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

export type CurveDexTradesByScDailyQueryVariables = Exact<{ [key: string]: never; }>;


export type CurveDexTradesByScDailyQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )> }
    )>> }
  )> }
);

export type DexFilteringByTakerAddressTypeSmartContractQueryVariables = Exact<{ [key: string]: never; }>;


export type DexFilteringByTakerAddressTypeSmartContractQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { taker?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
        )> }
      )> }
    )>> }
  )> }
);

export type TxListInSpecificTimeframeQueryVariables = Exact<{
  baseAddress?: Maybe<Scalars['String']>;
  quoteAddress?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
}>;


export type TxListInSpecificTimeframeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'protocol'>
      & { buyAmount: EthereumDexTrades['baseAmount'], volume: EthereumDexTrades['quoteAmount'], trades: EthereumDexTrades['count'], high: EthereumDexTrades['quotePrice'], low: EthereumDexTrades['quotePrice'], open: EthereumDexTrades['minimum'], close: EthereumDexTrades['maximum'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type NewQueryv4QueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryv4Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year' | 'month'>
      )> }
    )>> }
  )> }
);

export type DexTradeVolumeYearlyQueryVariables = Exact<{ [key: string]: never; }>;


export type DexTradeVolumeYearlyQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year'>
      )> }
    )>> }
  )> }
);

export type NewQueryv5QueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryv5Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'], gasValueUsd: EthereumDexTrades['gasValue'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type BuildRewardQueryVariables = Exact<{
  network: EthereumNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  address?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type BuildRewardQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { txsCount: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], totalGas: EthereumSmartContractCalls['gasValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )> }
    )>> }
  )> }
);

export type PooledTokenInAPancakePoolQueryVariables = Exact<{ [key: string]: never; }>;


export type PooledTokenInAPancakePoolQuery = (
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
          & Pick<Currency, 'symbol'>
        )> }
      )>> }
    )> }
  )> }
);

export type PancakePoolsVolumeDataFor24HoursOverTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakePoolsVolumeDataFor24HoursOverTimeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount' | 'count'>
      & { average: EthereumTransfers['amount'], days: EthereumTransfers['count'], sender_count: EthereumTransfers['count'], receiver_count: EthereumTransfers['count'], min_date: EthereumTransfers['minimum'], max_date: EthereumTransfers['maximum'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type PancakeVolumeOverMonthQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeVolumeOverMonthQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year' | 'month'>
      )> }
    )>> }
  )> }
);

export type DodoDexTradesQueryVariables = Exact<{ [key: string]: never; }>;


export type DodoDexTradesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type BalancesQueryWithTimeFilterExamplev1QueryVariables = Exact<{ [key: string]: never; }>;


export type BalancesQueryWithTimeFilterExamplev1Query = (
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
          & Pick<Currency, 'symbol'>
        )> }
      )>> }
    )> }
  )> }
);

export type SliceByTakerScTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type SliceByTakerScTypeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { uniswap?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, taker?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
        )> }
      )> }
    )>>, bancor?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, taker?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
        )> }
      )> }
    )>>, sushiswap?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, taker?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
        )> }
      )> }
    )>> }
  )> }
);

export type QueryCoinpathQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  inboundDepth: Scalars['Int'];
  outboundDepth: Scalars['Int'];
  limit: Scalars['Int'];
  currency: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type QueryCoinpathQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { inbound?: Maybe<Array<(
      { __typename?: 'EthereumCoinpath' }
      & Pick<EthereumCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>>, outbound?: Maybe<Array<(
      { __typename?: 'EthereumCoinpath' }
      & Pick<EthereumCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type NewQueryv6QueryVariables = Exact<{
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type NewQueryv6Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & { times: EthereumSmartContractEvent['count'], uniqueCallers: EthereumSmartContractEvent['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['startOfInterval'] }
      )>, smartContractEvent?: Maybe<(
        { __typename: 'Event' }
        & Pick<Event, 'name'>
      )> }
    )>> }
  )> }
);

export type ExampleOfQueryWithTimestampWithZoneQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleOfQueryWithTimestampWithZoneQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )> }
    )>> }
  )> }
);

export type PancakeUsdtcakePairLatestSwapsQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeUsdtcakePairLatestSwapsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type QueryScArgsForTheLatestEventSwapQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryScArgsForTheLatestEventSwapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { sender: EthereumArguments['any'], to: EthereumArguments['any'], amount0In: EthereumArguments['any'], amount0Out: EthereumArguments['any'], amount1In: EthereumArguments['any'], amount1Out: EthereumArguments['any'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type PancakeSwapEventsNewApisQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeSwapEventsNewApisQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { sender: EthereumArguments['any'], to: EthereumArguments['any'], amount0In: EthereumArguments['any'], amount0Out: EthereumArguments['any'], amount1In: EthereumArguments['any'], amount1Out: EthereumArguments['any'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type AsdQueryVariables = Exact<{ [key: string]: never; }>;


export type AsdQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type NewQueryv7QueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryv7Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year'>
      )> }
    )>> }
  )> }
);

export type QeueryNameQueryVariables = Exact<{
  address?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type QeueryNameQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { first_tx_time: EthereumTransactions['minimum'] }
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type CopyOfQeueryNameQueryVariables = Exact<{
  address?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type CopyOfQeueryNameQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { first_tx_time: EthereumTransactions['minimum'] }
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type TestQueryVariables = Exact<{
  network: EthereumNetwork;
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type TestQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { currencyAmount: EthereumDexTrades['baseAmount'], dates: EthereumDexTrades['count'], started: EthereumDexTrades['minimum'] }
      & { baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol' | 'name' | 'decimals'>
      )> }
    )>> }
  )> }
);

export type UsdtethDailyVolumev1QueryVariables = Exact<{ [key: string]: never; }>;


export type UsdtethDailyVolumev1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice' | 'tradeAmount'>
      & { trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'day'>
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

export type Limit5ByCallerScQueryVariables = Exact<{
  network: EthereumNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  address?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type Limit5ByCallerScQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { senders_address_amount: EthereumSmartContractCalls['count'], txs: EthereumSmartContractCalls['count'], external_txs: EthereumSmartContractCalls['count'], internal_txs: EthereumSmartContractCalls['count'], external_totalGas: EthereumSmartContractCalls['gasValue'], internal_totalGas: EthereumSmartContractCalls['gasValue'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, caller?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type AggregateSmartContractArgumentv1QueryVariables = Exact<{ [key: string]: never; }>;


export type AggregateSmartContractArgumentv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & Pick<EthereumArguments, 'number'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'hour'>
        )> }
      )> }
    )>> }
  )> }
);

export type AllPancakeMintsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPancakeMintsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, arguments?: Maybe<Array<(
        { __typename?: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'value' | 'argument'>
      )>> }
    )>> }
  )> }
);

export type NewQueryv8QueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryv8Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type GhghghQueryVariables = Exact<{
  address?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GhghghQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { first_tx_time: EthereumTransactions['minimum'] }
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type GraphqlAliasExampleQueryVariables = Exact<{ [key: string]: never; }>;


export type GraphqlAliasExampleQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { activeAddress: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )>, binanceSmartChain?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { activeAddress: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type ConfluxActiveAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type ConfluxActiveAddressesQuery = (
  { __typename?: 'Query' }
  & { conflux?: Maybe<(
    { __typename?: 'Conflux' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'ConfluxTransactions' }
      & { activeAddress: ConfluxTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type NewQueryv9QueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryv9Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type NewQueryv10QueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryv10Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type NewQueryv11QueryVariables = Exact<{
  network: EthereumNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  address: Scalars['String'];
}>;


export type NewQueryv11Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { count: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], totalGas: EthereumSmartContractCalls['gasValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type YuyuQueryVariables = Exact<{
  address?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type YuyuQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { first_tx_time: EthereumTransactions['minimum'] }
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type UiuiuiQueryVariables = Exact<{
  address?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type UiuiuiQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { first_tx_time: EthereumTransactions['minimum'] }
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type Q787878QueryVariables = Exact<{
  address?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type Q787878Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { first_tx_time: EthereumTransactions['minimum'] }
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type DiverisfyTradesOver0xQueryVariables = Exact<{ [key: string]: never; }>;


export type DiverisfyTradesOver0xQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ) }
      )> }
    )>> }
  )> }
);

export type ConfluxNetworkAverageMedianMaxMinGasValueQueryVariables = Exact<{ [key: string]: never; }>;


export type ConfluxNetworkAverageMedianMaxMinGasValueQuery = (
  { __typename?: 'Query' }
  & { conflux?: Maybe<(
    { __typename?: 'Conflux' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'ConfluxTransactions' }
      & { gasValueAvg: ConfluxTransactions['gasValue'], gasValueMedian: ConfluxTransactions['gasValue'], gasValueMax: ConfluxTransactions['gasValue'], gasValueMinimum: ConfluxTransactions['gasValue'] }
    )>> }
  )> }
);

export type CopyOfDexExchangesQueryVariables = Exact<{ [key: string]: never; }>;


export type CopyOfDexExchangesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type CopyOfDexExchangesv1QueryVariables = Exact<{ [key: string]: never; }>;


export type CopyOfDexExchangesv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type SfpbnbLpFarmQueryVariables = Exact<{
  network: EthereumNetwork;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  contract: Scalars['String'];
  event: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type SfpbnbLpFarmQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type ReferenceAddressIsNotImplementedForCubequeryQueryVariables = Exact<{ [key: string]: never; }>;


export type ReferenceAddressIsNotImplementedForCubequeryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & Pick<EthereumArguments, 'callDepth'>
      & { token0_address: EthereumArguments['any'], token0_symbol: EthereumArguments['any'], token0_name: EthereumArguments['any'], token1_address: EthereumArguments['any'], token1_symbol: EthereumArguments['any'], token1_name: EthereumArguments['any'], pair_address: EthereumArguments['any'], pair_symbol: EthereumArguments['any'], pair_name: EthereumArguments['any'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )> }
    )>> }
  )> }
);

export type ConfluxTotalTxSendersAndReceiversQueryVariables = Exact<{
  network: ConfluxNetwork;
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type ConfluxTotalTxSendersAndReceiversQuery = (
  { __typename?: 'Query' }
  & { conflux?: Maybe<(
    { __typename?: 'Conflux' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'ConfluxTransactions' }
      & Pick<ConfluxTransactions, 'gasValue'>
      & { senders: ConfluxTransactions['count'], receivers: ConfluxTransactions['count'] }
    )>> }
  )> }
);

export type ReferenceAddressIsNotImplementedForCubequeryv1QueryVariables = Exact<{ [key: string]: never; }>;


export type ReferenceAddressIsNotImplementedForCubequeryv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
        & { txFrom: (
          { __typename?: 'EthereumAddressInfo' }
          & Pick<EthereumAddressInfo, 'address'>
        ) }
      )> }
    )>> }
  )> }
);

export type ConfluxTotalTransfersSendersReceiversQueryVariables = Exact<{ [key: string]: never; }>;


export type ConfluxTotalTransfersSendersReceiversQuery = (
  { __typename?: 'Query' }
  & { conflux?: Maybe<(
    { __typename?: 'Conflux' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & { senders: EthereumTransfers['count'], receivers: EthereumTransfers['count'], transfers: EthereumTransfers['count'] }
    )>> }
  )> }
);

export type BogbusdPairPriceQueryVariables = Exact<{
  baseAddress: Scalars['String'];
  quoteAddress: Scalars['String'];
  interval?: Maybe<Scalars['Int']>;
}>;


export type BogbusdPairPriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { buyAmount: EthereumDexTrades['baseAmount'], buyAmountInUsd: EthereumDexTrades['baseAmount'], sellAmountInUsd: EthereumDexTrades['quoteAmount'], volume: EthereumDexTrades['quoteAmount'], trades: EthereumDexTrades['count'], high: EthereumDexTrades['quotePrice'], low: EthereumDexTrades['quotePrice'], open: EthereumDexTrades['minimum'], close: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type Bsc1inchV2AggregationProtocolTotalVolumeQueryVariables = Exact<{ [key: string]: never; }>;


export type Bsc1inchV2AggregationProtocolTotalVolumeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { trades: EthereumDexTrades['count'], uniqueWallets: EthereumDexTrades['count'] }
    )>> }
  )> }
);

export type Bsc1inchV3AggregationProtocolTotalVolumeQueryVariables = Exact<{ [key: string]: never; }>;


export type Bsc1inchV3AggregationProtocolTotalVolumeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { trades: EthereumDexTrades['count'], uniqueWallets: EthereumDexTrades['count'] }
    )>> }
  )> }
);

export type QueryPancakeswapPairsCreatedForTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryPancakeswapPairsCreatedForTokenQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & Pick<EthereumArguments, 'any'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
        & { txFrom: (
          { __typename?: 'EthereumAddressInfo' }
          & Pick<EthereumAddressInfo, 'address'>
        ) }
      )> }
    )>> }
  )> }
);

export type CopyOfUsdPriceQueryVariables = Exact<{
  baseAddress: Scalars['String'];
  quoteAddress: Scalars['String'];
  connector1: Scalars['String'];
  from: Scalars['ISO8601DateTime'];
  interval?: Maybe<Scalars['Int']>;
}>;


export type CopyOfUsdPriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type TradesForASpecificTokenOnThePancakedexv1QueryVariables = Exact<{ [key: string]: never; }>;


export type TradesForASpecificTokenOnThePancakedexv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type WeirdIssueChangingDataQueryVariables = Exact<{ [key: string]: never; }>;


export type WeirdIssueChangingDataQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount'>
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type UbiLastPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type UbiLastPriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'] }
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
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

export type AllTokensOfBscAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTokensOfBscAddressQuery = (
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
          & Pick<Currency, 'symbol' | 'address'>
        )> }
      )>> }
    )> }
  )> }
);

export type ListFegPairsOnBscQueryVariables = Exact<{
  in?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  network?: Maybe<EthereumNetwork>;
  since?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type ListFegPairsOnBscQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice' | 'count' | 'buyAmount' | 'sellAmount'>
      & { baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ) }
      )> }
    )>> }
  )> }
);

export type HederaEffectOfOutageQueryVariables = Exact<{ [key: string]: never; }>;


export type HederaEffectOfOutageQuery = (
  { __typename?: 'Query' }
  & { hedera?: Maybe<(
    { __typename?: 'Hedera' }
    & { messages?: Maybe<Array<(
      { __typename?: 'HederaMessage' }
      & Pick<HederaMessage, 'count'>
      & { hour?: Maybe<(
        { __typename?: 'DateTime' }
        & Pick<DateTime, 'time'>
      )> }
    )>> }
  )> }
);

export type HederaMessagesSplitByTopicsQueryVariables = Exact<{ [key: string]: never; }>;


export type HederaMessagesSplitByTopicsQuery = (
  { __typename?: 'Query' }
  & { hedera?: Maybe<(
    { __typename?: 'Hedera' }
    & { messages?: Maybe<Array<(
      { __typename?: 'HederaMessage' }
      & Pick<HederaMessage, 'count'>
      & { hour?: Maybe<(
        { __typename?: 'DateTime' }
        & Pick<DateTime, 'time'>
      )>, entity?: Maybe<(
        { __typename?: 'Entity' }
        & Pick<Entity, 'id'>
      )> }
    )>> }
  )> }
);

export type QueryBalanceBscQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryBalanceBscQuery = (
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
          & Pick<Currency, 'symbol' | 'address'>
        )> }
      )>> }
    )> }
  )> }
);

export type CakeCurrencyPriceUsingCakeusdtPairQueryVariables = Exact<{ [key: string]: never; }>;


export type CakeCurrencyPriceUsingCakeusdtPairQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'index'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type PancakeQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )> }
    )>> }
  )> }
);

export type NotReturningResultsQueryVariables = Exact<{ [key: string]: never; }>;


export type NotReturningResultsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & Pick<EthereumArguments, 'any'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
        & { txFrom: (
          { __typename?: 'EthereumAddressInfo' }
          & Pick<EthereumAddressInfo, 'address'>
        ) }
      )> }
    )>> }
  )> }
);

export type ExampleForDexPieQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleForDexPieQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type NotReturningResultsv1QueryVariables = Exact<{ [key: string]: never; }>;


export type NotReturningResultsv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & Pick<EthereumArguments, 'any'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
        & { txFrom: (
          { __typename?: 'EthereumAddressInfo' }
          & Pick<EthereumAddressInfo, 'address'>
        ) }
      )> }
    )>> }
  )> }
);

export type BscDailyActiveAddressesTxsQueryVariables = Exact<{
  network: EthereumNetwork;
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type BscDailyActiveAddressesTxsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { Txs: EthereumTransactions['count'], Senders: EthereumTransactions['count'], Senders_True: EthereumTransactions['count'], Receiver: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['startOfInterval'] }
      )> }
    )>> }
  )> }
);

export type Mfxy_01QueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
}>;


export type Mfxy_01Query = (
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
          & Pick<Currency, 'address' | 'symbol' | 'tokenType'>
        )> }
      )>> }
    )> }
  )> }
);

export type CopyOfQueryThatExecutesSqlFastAndSlowRendersQueryVariables = Exact<{ [key: string]: never; }>;


export type CopyOfQueryThatExecutesSqlFastAndSlowRendersQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { volume: EthereumDexTrades['tradeAmount'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name'>
      )> }
    )>> }
  )> }
);

export type OracleEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type OracleEventsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, arguments?: Maybe<Array<(
        { __typename?: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'argument' | 'argumentType' | 'value'>
      )>>, smartContractEvent?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'name' | 'signatureHash'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type AllpricesqueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllpricesqueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { count0?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count1?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count2?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count3?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count4?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count5?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count6?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count7?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count8?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count9?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count10?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count11?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count12?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count13?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>>, count14?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount'>
      & { trades: EthereumDexTrades['count'], usd_amount: EthereumDexTrades['tradeAmount'], tot_amount: EthereumDexTrades['baseAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
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

export type FilteredArgumentsQueryVariables = Exact<{ [key: string]: never; }>;


export type FilteredArgumentsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, value?: Maybe<(
        { __typename?: 'ArgumentValue' }
        & Pick<ArgumentValue, 'value'>
      )> }
    )>> }
  )> }
);

export type FenixswapTotalVolumeAndTradesQueryVariables = Exact<{ [key: string]: never; }>;


export type FenixswapTotalVolumeAndTradesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
    )>> }
  )> }
);

export type TradesForASpecificTokenOnTheFenixswapQueryVariables = Exact<{ [key: string]: never; }>;


export type TradesForASpecificTokenOnTheFenixswapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type FenixswapTradeVolumeForDifferentCurrencyPairsQueryVariables = Exact<{ [key: string]: never; }>;


export type FenixswapTradeVolumeForDifferentCurrencyPairsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { trades: EthereumDexTrades['count'] }
      & { buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type PieChartDexExchangesQueryVariables = Exact<{ [key: string]: never; }>;


export type PieChartDexExchangesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type FenixswapNewPairQueryVariables = Exact<{ [key: string]: never; }>;


export type FenixswapNewPairQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type LineChartOfBscTxCountQueryVariables = Exact<{ [key: string]: never; }>;


export type LineChartOfBscTxCountQuery = (
  { __typename?: 'Query' }
  & { binance?: Maybe<(
    { __typename?: 'Binance' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'BinanceTransactions' }
      & Pick<BinanceTransactions, 'count'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type LatestFenixswapPairsQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestFenixswapPairsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type BtcRewardByMonthByMinerQueryVariables = Exact<{
  network: BitcoinNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type BtcRewardByMonthByMinerQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { outputs?: Maybe<Array<(
      { __typename?: 'BitcoinTransactionOutput' }
      & Pick<BitcoinTransactionOutput, 'count'>
      & { reward: BitcoinTransactionOutput['value'] }
      & { address?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & { month: Date['date'] }
      )> }
    )>> }
  )> }
);

export type FenixswapDailyActiveUsersQueryVariables = Exact<{
  network: EthereumNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  address: Scalars['String'];
}>;


export type FenixswapDailyActiveUsersQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { count: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], totalGas: EthereumSmartContractCalls['gasValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type BtcRewardByDayQueryVariables = Exact<{
  network: BitcoinNetwork;
  dateFormat: Scalars['String'];
}>;


export type BtcRewardByDayQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { outputs?: Maybe<Array<(
      { __typename?: 'BitcoinTransactionOutput' }
      & { reward: BitcoinTransactionOutput['value'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type BtcMoneyFlowQueryVariables = Exact<{
  network: BitcoinNetwork;
  address: Scalars['String'];
  inboundDepth: Scalars['Int'];
  outboundDepth: Scalars['Int'];
  limit: Scalars['Int'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type BtcMoneyFlowQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { inbound?: Maybe<Array<(
      { __typename?: 'BitcoinCoinpath' }
      & Pick<BitcoinCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )>, receiver?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )> }
    )>>, outbound?: Maybe<Array<(
      { __typename?: 'BitcoinCoinpath' }
      & Pick<BitcoinCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )>, receiver?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )> }
    )>> }
  )> }
);

export type MooooQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  inboundDepth: Scalars['Int'];
  outboundDepth: Scalars['Int'];
  limit: Scalars['Int'];
  currency: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type MooooQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { inbound?: Maybe<Array<(
      { __typename?: 'EthereumCoinpath' }
      & Pick<EthereumCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>>, outbound?: Maybe<Array<(
      { __typename?: 'EthereumCoinpath' }
      & Pick<EthereumCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type EventsForTxsByHashQueryVariables = Exact<{
  network?: Maybe<EthereumNetwork>;
  txHashes?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type EventsForTxsByHashQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & { arguments?: Maybe<Array<(
        { __typename?: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'argument' | 'value'>
      )>>, smartContractEvent?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'name'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type AverageGasPriceInBscNetworkQueryVariables = Exact<{
  network: EthereumNetwork;
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type AverageGasPriceInBscNetworkQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { medianGasPrice: EthereumTransactions['gasPrice'], averageGasPrice: EthereumTransactions['gasPrice'], minGasPrice: EthereumTransactions['gasPrice'], maxGasPrice: EthereumTransactions['gasPrice'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )> }
    )>> }
  )> }
);

export type GraphOfMoneyFlowFor1inchDexInEthQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  inboundDepth: Scalars['Int'];
  outboundDepth: Scalars['Int'];
  limit: Scalars['Int'];
  currency: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type GraphOfMoneyFlowFor1inchDexInEthQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { inbound?: Maybe<Array<(
      { __typename?: 'EthereumCoinpath' }
      & Pick<EthereumCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>>, outbound?: Maybe<Array<(
      { __typename?: 'EthereumCoinpath' }
      & Pick<EthereumCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type Bsc0xApiFillsByDexQueryVariables = Exact<{
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type Bsc0xApiFillsByDexQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )> }
    )>> }
  )> }
);

export type BinanceSmartChainTxPerDayv1QueryVariables = Exact<{ [key: string]: never; }>;


export type BinanceSmartChainTxPerDayv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & Pick<EthereumTransactions, 'count'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type BscWeeklyTxsSendersAndGascostQueryVariables = Exact<{
  network: EthereumNetwork;
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type BscWeeklyTxsSendersAndGascostQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & Pick<EthereumTransactions, 'gasValue' | 'gasPrice'>
      & { gasValueAvg: EthereumTransactions['gasValue'], avgGasPrice: EthereumTransactions['gasPrice'], medGasPrice: EthereumTransactions['gasPrice'], maxGasPrice: EthereumTransactions['gasPrice'], Txs: EthereumTransactions['count'], Senders: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['startOfInterval'] }
      )> }
    )>> }
  )> }
);

export type Error_1MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Error_1MyQueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & Pick<EthereumSmartContractCalls, 'amount'>
      & { senders: EthereumSmartContractCalls['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ) }
      )> }
    )>> }
  )> }
);

export type Error_2QueryVariables = Exact<{ [key: string]: never; }>;


export type Error_2Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { senders: EthereumSmartContractCalls['count'], senders_external: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], callers_external: EthereumSmartContractCalls['count'], txs: EthereumSmartContractCalls['count'], external_txs: EthereumSmartContractCalls['count'], internal_txs: EthereumSmartContractCalls['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['date'] }
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ) }
      )> }
    )>> }
  )> }
);

export type EtheruemTransactionsOverTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type EtheruemTransactionsOverTimeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & Pick<EthereumTransactions, 'count'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type Error_2_FixMyQueryQueryVariables = Exact<{
  network: EthereumNetwork;
}>;


export type Error_2_FixMyQueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { senders: EthereumSmartContractCalls['count'], senders_external: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], callers_external: EthereumSmartContractCalls['count'], txs: EthereumSmartContractCalls['count'], external_txs: EthereumSmartContractCalls['count'], internal_txs: EthereumSmartContractCalls['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['date'] }
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ) }
      )> }
    )>> }
  )> }
);

export type NewQueryv12MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NewQueryv12MyQueryQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'BitcoinBlock' }
      & Pick<BitcoinBlock, 'difficulty'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type BtcGetTheAddressAnnotationQueryVariables = Exact<{ [key: string]: never; }>;


export type BtcGetTheAddressAnnotationQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { inbound?: Maybe<Array<(
      { __typename?: 'BitcoinCoinpath' }
      & { receiver?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )> }
    )>> }
  )> }
);

export type QueryPancakeswapPairsForFegTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryPancakeswapPairsForFegTokenQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & Pick<EthereumArguments, 'any'>
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )> }
    )>> }
  )> }
);

export type StackTraceQueryVariables = Exact<{
  network?: Maybe<EthereumNetwork>;
  txHashes?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type StackTraceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & Pick<EthereumSmartContractCalls, 'callDepth'>
      & { arguments?: Maybe<Array<(
        { __typename?: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'argument' | 'value'>
      )>>, smartContractMethod?: Maybe<(
        { __typename?: 'Method' }
        & Pick<Method, 'name'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type MechanismBscTop100MostTransferredTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type MechanismBscTop100MostTransferredTokensQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'count' | 'amount'>
      & { senders: EthereumTransfers['count'], receivers: EthereumTransfers['count'], days: EthereumTransfers['count'], from_date: EthereumTransfers['minimum'], till_date: EthereumTransfers['maximum'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type QuerySenderOrRecieverForFilecoinQueryVariables = Exact<{ [key: string]: never; }>;


export type QuerySenderOrRecieverForFilecoinQuery = (
  { __typename?: 'Query' }
  & { filecoin?: Maybe<(
    { __typename?: 'Filecoin' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'FilecoinTransfers' }
      & Pick<FilecoinTransfers, 'callHash' | 'amount'>
      & { sender?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address'>
      )>, receiver?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, timestamp?: Maybe<(
        { __typename?: 'DateTime' }
        & Pick<DateTime, 'time'>
      )>, messageMethod?: Maybe<(
        { __typename?: 'NameWithId' }
        & Pick<NameWithId, 'name'>
      )>, method?: Maybe<(
        { __typename?: 'NameWithId' }
        & Pick<NameWithId, 'name'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type QuerySenderReceiverForFilecoinSeparateQueryVariables = Exact<{ [key: string]: never; }>;


export type QuerySenderReceiverForFilecoinSeparateQuery = (
  { __typename?: 'Query' }
  & { filecoin?: Maybe<(
    { __typename?: 'Filecoin' }
    & { inbound?: Maybe<Array<(
      { __typename?: 'FilecoinTransfers' }
      & Pick<FilecoinTransfers, 'callHash' | 'amount'>
      & { sender?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address'>
      )>, receiver?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, timestamp?: Maybe<(
        { __typename?: 'DateTime' }
        & Pick<DateTime, 'time'>
      )>, messageMethod?: Maybe<(
        { __typename?: 'NameWithId' }
        & Pick<NameWithId, 'name'>
      )>, method?: Maybe<(
        { __typename?: 'NameWithId' }
        & Pick<NameWithId, 'name'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>>, outbound?: Maybe<Array<(
      { __typename?: 'FilecoinTransfers' }
      & Pick<FilecoinTransfers, 'callHash' | 'amount'>
      & { sender?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address'>
      )>, receiver?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, timestamp?: Maybe<(
        { __typename?: 'DateTime' }
        & Pick<DateTime, 'time'>
      )>, messageMethod?: Maybe<(
        { __typename?: 'NameWithId' }
        & Pick<NameWithId, 'name'>
      )>, method?: Maybe<(
        { __typename?: 'NameWithId' }
        & Pick<NameWithId, 'name'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type MatterPairQueryVariables = Exact<{ [key: string]: never; }>;


export type MatterPairQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'sellAmount' | 'buyAmount'>
      & { closePrice: EthereumDexTrades['maximum'], time: EthereumDexTrades['maximum'], trades: EthereumDexTrades['count'] }
      & { buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol' | 'name'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol' | 'name'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )> }
    )>> }
  )> }
);

export type Bsc0xApiPancakeVipQueryVariables = Exact<{
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type Bsc0xApiPancakeVipQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { currencyAmount: EthereumDexTrades['baseAmount'], dates: EthereumDexTrades['count'], started: EthereumDexTrades['minimum'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type LabradorRetrieverQueryVariables = Exact<{
  network: EthereumNetwork;
  currency: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type LabradorRetrieverQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'day'>
      )> }
    )>> }
  )> }
);

export type GetPairTokenQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetPairTokenQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type CopyOfLatestCoinsPancakeQueryVariables = Exact<{ [key: string]: never; }>;


export type CopyOfLatestCoinsPancakeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'unixtime'>
        )> }
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name' | 'type'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'name'>
          )> }
        )> }
      )> }
    )>> }
  )> }
);

export type OhlcQueryQueryVariables = Exact<{
  network: EthereumNetwork;
  starttime?: Maybe<Scalars['ISO8601DateTime']>;
  endtime?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type OhlcQueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { USD: EthereumDexTrades['tradeAmount'], Txs: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type CakeCurrencyPriceUsingCakeusdtPairv1QueryVariables = Exact<{ [key: string]: never; }>;


export type CakeCurrencyPriceUsingCakeusdtPairv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'index'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type BitcoinBlocksQueryVariables = Exact<{ [key: string]: never; }>;


export type BitcoinBlocksQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'BitcoinBlock' }
      & Pick<BitcoinBlock, 'height' | 'blockHash' | 'blockVersion' | 'chainwork' | 'difficulty' | 'blockSize' | 'blockStrippedSize' | 'blockWeight' | 'count'>
      & { medianTime?: Maybe<(
        { __typename?: 'DateTime' }
        & Pick<DateTime, 'iso8601'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type QQueryVariables = Exact<{
  network: EthereumNetwork;
  limit: Scalars['Int'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  amount: Scalars['Float'];
}>;


export type QQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount' | 'external'>
      & { Sumtotal: EthereumTransfers['amount'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type SharedQueryVariables = Exact<{ [key: string]: never; }>;


export type SharedQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { numberOfTrades: EthereumDexTrades['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year' | 'month'>
      )> }
    )>> }
  )> }
);

export type PancakeTradingVolv1QueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeTradingVolv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & { date: Date['date'] }
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type Sharedv1QueryVariables = Exact<{ [key: string]: never; }>;


export type Sharedv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { numberOfTrades: EthereumDexTrades['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year' | 'month'>
      )> }
    )>> }
  )> }
);

export type MilkBalanceOfHoldersMyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MilkBalanceOfHoldersMyQueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { address: Array<(
      { __typename?: 'EthereumAddressInfoWithBalance' }
      & Pick<EthereumAddressInfoWithBalance, 'address'>
      & { balances?: Maybe<Array<(
        { __typename?: 'EthereumBalance' }
        & Pick<EthereumBalance, 'value'>
      )>> }
    )> }
  )> }
);

export type SadgQueryVariables = Exact<{ [key: string]: never; }>;


export type SadgQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { numberOfTrades: EthereumDexTrades['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year' | 'month'>
      )> }
    )>> }
  )> }
);

export type EasybnbQueryVariables = Exact<{
  network: EthereumNetwork;
  contract: Scalars['String'];
  event: Scalars['String'];
}>;


export type EasybnbQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, arguments?: Maybe<Array<(
        { __typename?: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'argument' | 'value'>
      )>> }
    )>> }
  )> }
);

export type PancakeswapLotteryClaimQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeswapLotteryClaimQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, smartContractEvent?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'name'>
      )>, arguments?: Maybe<Array<(
        { __typename?: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'argument' | 'argumentType' | 'value'>
      )>> }
    )>> }
  )> }
);

export type PancakeOhlcDataQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeOhlcDataQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], median_price: EthereumDexTrades['quotePrice'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
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

export type SpDividendsQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type SpDividendsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount' | 'external'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, address?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type TradesForASpecificTokenOnTheUniswapQueryVariables = Exact<{ [key: string]: never; }>;


export type TradesForASpecificTokenOnTheUniswapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'buyAmount' | 'sellAmount' | 'quotePrice' | 'side'>
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasPrice'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'second'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type BethBalanceOnPancakelpQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  time: Scalars['ISO8601DateTime'];
}>;


export type BethBalanceOnPancakelpQuery = (
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
          & Pick<Currency, 'address' | 'symbol' | 'tokenType'>
        )> }
      )>> }
    )> }
  )> }
);

export type MdxPancakeQueryVariables = Exact<{ [key: string]: never; }>;


export type MdxPancakeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'index'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type QueryByTxSenderDexTxsLimit10QueryVariables = Exact<{ [key: string]: never; }>;


export type QueryByTxSenderDexTxsLimit10Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'protocol' | 'buyAmount' | 'sellAmount'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type FmtPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type FmtPriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'] }
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
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

export type PancakeOhlcData5MinuteCandleUsdtwethQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeOhlcData5MinuteCandleUsdtwethQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
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

export type GetBalanceHistoryQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
}>;


export type GetBalanceHistoryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { address: Array<(
      { __typename?: 'EthereumAddressInfoWithBalance' }
      & { balances?: Maybe<Array<(
        { __typename?: 'EthereumBalance' }
        & { history?: Maybe<Array<(
          { __typename?: 'EthereumBalanceChange' }
          & Pick<EthereumBalanceChange, 'value' | 'block' | 'timestamp' | 'transferAmount'>
        )>> }
      )>> }
    )> }
  )> }
);

export type CakeCurrencyPriceUsingCakeusdtPair10LastMinutesQueryVariables = Exact<{ [key: string]: never; }>;


export type CakeCurrencyPriceUsingCakeusdtPair10LastMinutesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'protocolType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'decimals' | 'name'>
        )> }
      )> }
    )>> }
  )> }
);

export type BscTopTradedPairsOn0xApiQueryVariables = Exact<{ [key: string]: never; }>;


export type BscTopTradedPairsOn0xApiQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { currencyAmount: EthereumDexTrades['baseAmount'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type HoprChannelsUsersInBienneGoerliQueryVariables = Exact<{
  network: EthereumNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  address: Scalars['String'];
}>;


export type HoprChannelsUsersInBienneGoerliQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { count: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], totalGas: EthereumSmartContractCalls['gasValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type CopyOfTestQueryVariables = Exact<{
  base_token: Scalars['String'];
  quote_token: Scalars['String'];
}>;


export type CopyOfTestQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height' | 'hash'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )> }
    )>> }
  )> }
);

export type LatestPancakeTradesQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestPancakeTradesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type DexTradesByProtocolsv1QueryVariables = Exact<{ [key: string]: never; }>;


export type DexTradesByProtocolsv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'protocol' | 'count'>
      & { USD: EthereumDexTrades['tradeAmount'], BTC: EthereumDexTrades['tradeAmount'], ETH: EthereumDexTrades['tradeAmount'], USDT: EthereumDexTrades['tradeAmount'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name' | 'fullName'>
      )> }
    )>> }
  )> }
);

export type DexBscQueryVariables = Exact<{ [key: string]: never; }>;


export type DexBscQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { USD: EthereumDexTrades['tradeAmount'], BTC: EthereumDexTrades['tradeAmount'], ETH: EthereumDexTrades['tradeAmount'], USDT: EthereumDexTrades['tradeAmount'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type CurveScDexAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type CurveScDexAddressesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ) }
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ) }
      )> }
    )>> }
  )> }
);

export type JetmoonbnbPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type JetmoonbnbPriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], median_price: EthereumDexTrades['quotePrice'] }
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

export type BaseQuoteQueryTradingvolDexBySymbolQueryVariables = Exact<{ [key: string]: never; }>;


export type BaseQuoteQueryTradingvolDexBySymbolQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name' | 'fullName' | 'fullNameWithId'>
        & { address: (
          { __typename: 'Address' }
          & Pick<Address, 'annotation'>
        ) }
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

export type KitHoldersAtEndOfMarchAirdropQueryVariables = Exact<{
  holders?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type KitHoldersAtEndOfMarchAirdropQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { address: Array<(
      { __typename?: 'EthereumAddressInfoWithBalance' }
      & Pick<EthereumAddressInfoWithBalance, 'address'>
      & { balances?: Maybe<Array<(
        { __typename?: 'EthereumBalance' }
        & Pick<EthereumBalance, 'value'>
      )>> }
    )> }
  )> }
);

export type BscTradesPerBlockQueryVariables = Exact<{ [key: string]: never; }>;


export type BscTradesPerBlockQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )> }
    )>> }
  )> }
);

export type NewPancakeswapCoinsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewPancakeswapCoinsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'unixtime'>
        )> }
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'name'>
          )> }
        )> }
      )> }
    )>> }
  )> }
);

export type CopyOfGetPairsDataInfoFromUniswapQueryVariables = Exact<{ [key: string]: never; }>;


export type CopyOfGetPairsDataInfoFromUniswapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )> }
    )>> }
  )> }
);

export type SmartcontacteventQueryVariables = Exact<{ [key: string]: never; }>;


export type SmartcontacteventQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & Pick<EthereumSmartContractEvent, 'eventIndex'>
      & { smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType' | 'protocolType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'address' | 'decimals' | 'name' | 'tokenId' | 'symbol' | 'tokenType'>
        )> }
      )>, arguments?: Maybe<Array<(
        { __typename: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'argumentType' | 'index' | 'value' | 'argument'>
      )>>, smartContractEvent?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'signature' | 'name' | 'signatureHash'>
      )> }
    )>> }
  )> }
);

export type CakeusdtQueryVariables = Exact<{
  thisDate: Scalars['ISO8601DateTime'];
}>;


export type CakeusdtQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'index'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type PancakeOhlcDataTradingPairQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeOhlcDataTradingPairQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
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

export type LatestPairsOnPancakeQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestPairsOnPancakeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'unixtime'>
        )> }
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name' | 'type'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'name'>
          )> }
        )> }
      )> }
    )>> }
  )> }
);

export type SmartcontractCallingSwapAndAnyOthersQueryVariables = Exact<{ [key: string]: never; }>;


export type SmartcontractCallingSwapAndAnyOthersQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { sender: EthereumArguments['any'], to: EthereumArguments['any'], amount0In: EthereumArguments['any'], amount0Out: EthereumArguments['any'], amount1In: EthereumArguments['any'], amount1Out: EthereumArguments['any'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'address' | 'name'>
        )> }
      )> }
    )>> }
  )> }
);

export type NewlyCreatedEthereumTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type NewlyCreatedEthereumTokensQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name' | 'symbol' | 'decimals' | 'tokenType'>
        )> }
      )> }
    )>> }
  )> }
);

export type DexTradesByProtocolsv2QueryVariables = Exact<{ [key: string]: never; }>;


export type DexTradesByProtocolsv2Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'protocol'>
    )>> }
  )> }
);

export type NewlyCreatedBscTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type NewlyCreatedBscTokensQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address' | 'annotation'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name' | 'symbol' | 'decimals' | 'tokenType'>
        )> }
      )> }
    )>> }
  )> }
);

export type PancakeNewPairQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeNewPairQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type CakeCurrencyPriceUsingCakeusdtPairv2QueryVariables = Exact<{ [key: string]: never; }>;


export type CakeCurrencyPriceUsingCakeusdtPairv2Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'index'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type LatestPancakeswapPairsdanQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestPancakeswapPairsdanQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type TrackingBalanceQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
}>;


export type TrackingBalanceQuery = (
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
          & Pick<Currency, 'address' | 'symbol' | 'tokenType'>
        )> }
      )>> }
    )> }
  )> }
);

export type PancakeOhlcDatav1QueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeOhlcDatav1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { USD: EthereumDexTrades['tradeAmount'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], median_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
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

export type ElongatePriceQueryVariables = Exact<{ [key: string]: never; }>;


export type ElongatePriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], median_price: EthereumDexTrades['quotePrice'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
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

export type SmartcontractcallQueryVariables = Exact<{
  network: EthereumNetwork;
  dateFormat: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type SmartcontractcallQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { count: EthereumSmartContractCalls['count'], contracts: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], methods: EthereumSmartContractCalls['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type LastPancakeTradeQueryVariables = Exact<{ [key: string]: never; }>;


export type LastPancakeTradeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], median_price: EthereumDexTrades['quotePrice'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
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

export type LatestWethdaiTradesQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestWethdaiTradesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type TotalVolTradedUsdForTokenInPancakeswapQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalVolTradedUsdForTokenInPancakeswapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
    )>> }
  )> }
);

export type GroupedByDayTotalVolTradedUsdForTokenInPancakeswapQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupedByDayTotalVolTradedUsdForTokenInPancakeswapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type PancakswapMostTradedPairsPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakswapMostTradedPairsPriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'price'>
      & { buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type Balancev3QueryVariables = Exact<{ [key: string]: never; }>;


export type Balancev3Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'EthereumBlocks' }
      & Pick<EthereumBlocks, 'count'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year'>
      )> }
    )>> }
  )> }
);

export type PancakeLpPoolsQueryVariables = Exact<{
  address?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  event?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type PancakeLpPoolsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & Pick<EthereumSmartContractEvent, 'count'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & { dt: Date['date'] }
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & { sc: Address['address'] }
        ) }
      )> }
    )>> }
  )> }
);

export type BscQueryVariables = Exact<{ [key: string]: never; }>;


export type BscQuery = (
  { __typename?: 'Query' }
  & { binance?: Maybe<(
    { __typename?: 'Binance' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'BinanceBlock' }
      & Pick<BinanceBlock, 'count'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'year'>
      )> }
    )>> }
  )> }
);

export type LatestWethdaiTradesv1QueryVariables = Exact<{ [key: string]: never; }>;


export type LatestWethdaiTradesv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'baseAmount' | 'quoteAmount' | 'tradeAmount'>
      & { baseAmountInUsd: EthereumDexTrades['buyAmount'], quoteAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
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

export type ThangqueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ThangqueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'unixtime'>
        )> }
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name' | 'type'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'name'>
          )> }
        )> }
      )> }
    )>> }
  )> }
);

export type BscBlockCountQueryVariables = Exact<{ [key: string]: never; }>;


export type BscBlockCountQuery = (
  { __typename?: 'Query' }
  & { binance?: Maybe<(
    { __typename?: 'Binance' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'BinanceBlock' }
      & Pick<BinanceBlock, 'count'>
    )>> }
  )> }
);

export type FilecoinMinerRewardsTotalByDatesQueryVariables = Exact<{ [key: string]: never; }>;


export type FilecoinMinerRewardsTotalByDatesQuery = (
  { __typename?: 'Query' }
  & { filecoin?: Maybe<(
    { __typename?: 'Filecoin' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'FilecoinBlock' }
      & Pick<FilecoinBlock, 'reward'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type ExampleOfQueryMultiplePairsQueryVariables = Exact<{
  baseAddress: Scalars['String'];
  quoteAddress: Scalars['String'];
  connector1: Scalars['String'];
  connector2: Scalars['String'];
  from: Scalars['ISO8601DateTime'];
  interval?: Maybe<Scalars['Int']>;
}>;


export type ExampleOfQueryMultiplePairsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { buyAmount: EthereumDexTrades['baseAmount'], buyAmountInUsd: EthereumDexTrades['baseAmount'], sellAmountInUsd: EthereumDexTrades['quoteAmount'], volume: EthereumDexTrades['quoteAmount'], trades: EthereumDexTrades['count'], high: EthereumDexTrades['quotePrice'], low: EthereumDexTrades['quotePrice'], open: EthereumDexTrades['minimum'], close: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type ExampleOfQueryPairsWithBasequoteAndConnectorsBetweenQueryVariables = Exact<{
  baseAddress: Scalars['String'];
  quoteAddress: Scalars['String'];
  baseConnectors?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  quoteConnectors?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  interval?: Maybe<Scalars['Int']>;
}>;


export type ExampleOfQueryPairsWithBasequoteAndConnectorsBetweenQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { buyAmount: EthereumDexTrades['baseAmount'], buyAmountInUsd: EthereumDexTrades['baseAmount'], sellAmountInUsd: EthereumDexTrades['quoteAmount'], volume: EthereumDexTrades['quoteAmount'], trades: EthereumDexTrades['count'], high: EthereumDexTrades['quotePrice'], low: EthereumDexTrades['quotePrice'], open: EthereumDexTrades['minimum'], close: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type TradesForASpecificTokenOnThePancakedexv2QueryVariables = Exact<{ [key: string]: never; }>;


export type TradesForASpecificTokenOnThePancakedexv2Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type Uniswap_New_PoolQueryVariables = Exact<{ [key: string]: never; }>;


export type Uniswap_New_PoolQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type QueryDexBaseQuotePricesv1QueryVariables = Exact<{
  wallet?: Maybe<Scalars['String']>;
}>;


export type QueryDexBaseQuotePricesv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount' | 'buyAmount' | 'sellAmount' | 'gasValue' | 'gasPrice'>
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address' | 'name'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address' | 'name'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'second'>
      )> }
    )>> }
  )> }
);

export type ConvertingArgumentsAsTokenSymbolsNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type ConvertingArgumentsAsTokenSymbolsNamesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & Pick<EthereumArguments, 'callDepth'>
      & { token0_address: EthereumArguments['any'], token0_symbol: EthereumArguments['any'], token0_name: EthereumArguments['any'], token1_address: EthereumArguments['any'], token1_symbol: EthereumArguments['any'], token1_name: EthereumArguments['any'], pair_address: EthereumArguments['any'], pair_symbol: EthereumArguments['any'], pair_name: EthereumArguments['any'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type SbdoQueryVariables = Exact<{ [key: string]: never; }>;


export type SbdoQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
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

export type PancakeSwapDataForParticularPairQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeSwapDataForParticularPairQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { sender: EthereumArguments['any'], to: EthereumArguments['any'], amount0In: EthereumArguments['any'], amount0Out: EthereumArguments['any'], amount1In: EthereumArguments['any'], amount1Out: EthereumArguments['any'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type LatestPairCreatedOnPancakeSwapQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestPairCreatedOnPancakeSwapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { pair: EthereumArguments['any'], token0: EthereumArguments['any'], token0Name: EthereumArguments['any'], token1: EthereumArguments['any'], token1Name: EthereumArguments['any'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )> }
    )>> }
  )> }
);

export type TotalNumberOfPairsOnPancakeSwapQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalNumberOfPairsOnPancakeSwapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { pair: EthereumArguments['count'] }
    )>> }
  )> }
);

export type VaultBalanceQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
}>;


export type VaultBalanceQuery = (
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
          & Pick<Currency, 'address' | 'symbol' | 'tokenType'>
        )> }
      )>> }
    )> }
  )> }
);

export type VltPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type VltPriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'index'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type TradesForASpecificTokenOnThePancakedexv3QueryVariables = Exact<{ [key: string]: never; }>;


export type TradesForASpecificTokenOnThePancakedexv3Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type ExampleQueryAllFromToTransfersQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQueryAllFromToTransfersQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol' | 'decimals' | 'tokenType'>
      )>, sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type PancakePairInfoTxBaseAndQuoteCurrencyCountQuotePriceQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakePairInfoTxBaseAndQuoteCurrencyCountQuotePriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount' | 'quotePrice' | 'baseAmount' | 'quoteAmount'>
      & { tx_count: EthereumDexTrades['count'] }
      & { baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'name' | 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'name' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type UniswapOhlcData5MinuteCandleUsdtwethv1QueryVariables = Exact<{ [key: string]: never; }>;


export type UniswapOhlcData5MinuteCandleUsdtwethv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
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

export type QueryWithParametersGet_Ohlc_DayQueryVariables = Exact<{
  dates?: Maybe<Array<Scalars['ISO8601DateTime']> | Scalars['ISO8601DateTime']>;
  quote?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Int']>;
}>;


export type QueryWithParametersGet_Ohlc_DayQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'day'>
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

export type QueryTokenBalancesOfAYearnVaultQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  date: Scalars['ISO8601DateTime'];
}>;


export type QueryTokenBalancesOfAYearnVaultQuery = (
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
          & Pick<Currency, 'address' | 'symbol' | 'tokenType'>
        )> }
      )>> }
    )> }
  )> }
);

export type HoprChannelsUsersInTitlisBscv1QueryVariables = Exact<{
  network: EthereumNetwork;
  dateFormat: Scalars['String'];
  address: Scalars['String'];
}>;


export type HoprChannelsUsersInTitlisBscv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { count: EthereumSmartContractCalls['count'], callers: EthereumSmartContractCalls['count'], totalGas: EthereumSmartContractCalls['gasValue'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type CowFarmQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  inboundDepth: Scalars['Int'];
  outboundDepth: Scalars['Int'];
  limit: Scalars['Int'];
  currency: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type CowFarmQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { inbound?: Maybe<Array<(
      { __typename?: 'EthereumCoinpath' }
      & Pick<EthereumCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>>, outbound?: Maybe<Array<(
      { __typename?: 'EthereumCoinpath' }
      & Pick<EthereumCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & Pick<EthereumSmartContractInfo, 'contractType'>
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'symbol' | 'name'>
          )> }
        )> }
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type MultiPairDexQueryQueryVariables = Exact<{
  baseAddress: Scalars['String'];
  quoteAddress: Scalars['String'];
  connector1: Scalars['String'];
  from: Scalars['ISO8601DateTime'];
  interval?: Maybe<Scalars['Int']>;
}>;


export type MultiPairDexQueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { buyAmount: EthereumDexTrades['baseAmount'], buyAmountInUsd: EthereumDexTrades['baseAmount'], sellAmountInUsd: EthereumDexTrades['quoteAmount'], volume: EthereumDexTrades['quoteAmount'], trades: EthereumDexTrades['count'], high: EthereumDexTrades['quotePrice'], low: EthereumDexTrades['quotePrice'], open: EthereumDexTrades['minimum'], close: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type PancakesPairSwapEventQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakesPairSwapEventQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { sender: EthereumArguments['any'], to: EthereumArguments['any'], amount0In: EthereumArguments['any'], amount0Out: EthereumArguments['any'], amount1In: EthereumArguments['any'], amount1Out: EthereumArguments['any'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type Balancev4QueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
}>;


export type Balancev4Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { address: Array<(
      { __typename?: 'EthereumAddressInfoWithBalance' }
      & Pick<EthereumAddressInfoWithBalance, 'balance'>
      & { balances?: Maybe<Array<(
        { __typename?: 'EthereumBalance' }
        & Pick<EthereumBalance, 'value'>
        & { currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'address' | 'symbol' | 'tokenType' | 'name'>
        )> }
      )>> }
    )> }
  )> }
);

export type PancakesPairMintEventQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakesPairMintEventQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { sender: EthereumArguments['any'], amount0: EthereumArguments['any'], amount1: EthereumArguments['any'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type PancakesPairBurnEventQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakesPairBurnEventQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { sender: EthereumArguments['any'], amount0: EthereumArguments['any'], amount1: EthereumArguments['any'], to: EthereumArguments['any'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type BlockRewardsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlockRewardsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'EthereumBlocks' }
      & Pick<EthereumBlocks, 'count' | 'reward'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type NrugPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type NrugPriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
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

export type PancakePairsForAParticularTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakePairsForAParticularTokenQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { pair: EthereumArguments['any'], token0: EthereumArguments['any'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )> }
    )>> }
  )> }
);

export type Bsc1inchUniqueUsersByMonthQueryVariables = Exact<{ [key: string]: never; }>;


export type Bsc1inchUniqueUsersByMonthQuery = (
  { __typename?: 'Query' }
  & { binanceSmartChain?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'EthereumTransactions' }
      & { activeAddress: EthereumTransactions['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type TradesByMonth1inchInUsdQueryVariables = Exact<{ [key: string]: never; }>;


export type TradesByMonth1inchInUsdQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'month' | 'year'>
      )> }
    )>> }
  )> }
);

export type LatestTransactionOfASpecificTokenOnPancakeQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestTransactionOfASpecificTokenOnPancakeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type CreationBlockOfASmartContractQueryVariables = Exact<{ [key: string]: never; }>;


export type CreationBlockOfASmartContractQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )> }
    )>> }
  )> }
);

export type GetaffiliatetradesflashwalletQueryVariables = Exact<{
  receiver: Scalars['String'];
}>;


export type GetaffiliatetradesflashwalletQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount' | 'external'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol' | 'name'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type Test_2021_Mar_31QueryVariables = Exact<{ [key: string]: never; }>;


export type Test_2021_Mar_31Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { USD: EthereumDexTrades['tradeAmount'], BTC: EthereumDexTrades['tradeAmount'], USDT: EthereumDexTrades['tradeAmount'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )> }
    )>> }
  )> }
);

export type LinkSmartContractAverageGasDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type LinkSmartContractAverageGasDetailsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { gasValueAvg: EthereumSmartContractCalls['gasValue'], gasValueMedian: EthereumSmartContractCalls['gasValue'], gasValueMax: EthereumSmartContractCalls['gasValue'] }
    )>> }
  )> }
);

export type SmartcontractDauTxsMyQueryQueryVariables = Exact<{
  address1?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  address2?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  address3?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type SmartcontractDauTxsMyQueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & { one_inch_external: EthereumSmartContractCalls['count'], one_inch_internal: EthereumSmartContractCalls['count'], ACryptoS: EthereumSmartContractCalls['count'], bDollar: EthereumSmartContractCalls['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type TradesForAPairOnThePancakedexQueryVariables = Exact<{ [key: string]: never; }>;


export type TradesForAPairOnThePancakedexQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'buyAmount' | 'sellAmount'>
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'index'>
      )>, timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'second'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type PriceForTokenOnBscPancakeQueryVariables = Exact<{ [key: string]: never; }>;


export type PriceForTokenOnBscPancakeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { count0?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], median_price: EthereumDexTrades['quotePrice'] }
      & { quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'name' | 'address'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address' | 'name'>
      )> }
    )>>, count2?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], median_price: EthereumDexTrades['quotePrice'] }
      & { quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'name' | 'address'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address' | 'name'>
      )> }
    )>> }
  )> }
);

export type QuerySmartcontractEventsForATransactionHashQueryVariables = Exact<{
  network: EthereumNetwork;
  address: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type QuerySmartcontractEventsForATransactionHashQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractCalls?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractCalls' }
      & Pick<EthereumSmartContractCalls, 'gasValue' | 'external'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, smartContractMethod?: Maybe<(
        { __typename?: 'Method' }
        & Pick<Method, 'name' | 'signatureHash'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
      )>, address?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address' | 'annotation'>
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type TokenInfoQueryVariables = Exact<{
  network: EthereumNetwork;
  tokens?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type TokenInfoQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount' | 'count'>
      & { median: EthereumTransfers['amount'], average: EthereumTransfers['amount'], days: EthereumTransfers['count'], sender_count: EthereumTransfers['count'], receiver_count: EthereumTransfers['count'], min_date: EthereumTransfers['minimum'], max_date: EthereumTransfers['maximum'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'name' | 'address'>
      )> }
    )>> }
  )> }
);

export type RebasedittomoneyQueryVariables = Exact<{ [key: string]: never; }>;


export type RebasedittomoneyQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & Pick<EthereumSmartContractEvent, 'eventIndex'>
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'iso8601' | 'unixtime'>
        )> }
      )>, arguments?: Maybe<Array<(
        { __typename?: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'value' | 'argument'>
      )>> }
    )>> }
  )> }
);

export type BnbVsBusdQueryVariables = Exact<{ [key: string]: never; }>;


export type BnbVsBusdQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
      & { maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )>, timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol' | 'name'>
      )> }
    )>> }
  )> }
);

export type FilecoinMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type FilecoinMessagesQuery = (
  { __typename?: 'Query' }
  & { filecoin?: Maybe<(
    { __typename?: 'Filecoin' }
    & { by_method?: Maybe<Array<(
      { __typename?: 'FilecoinMessages' }
      & Pick<FilecoinMessages, 'count'>
      & { method?: Maybe<(
        { __typename?: 'NameWithId' }
        & Pick<NameWithId, 'name'>
      )> }
    )>> }
  )> }
);

export type QuerymarketstatsGet_Markets_StatsQueryVariables = Exact<{
  base: Scalars['String'];
  dates?: Maybe<Array<Scalars['ISO8601DateTime']> | Scalars['ISO8601DateTime']>;
}>;


export type QuerymarketstatsGet_Markets_StatsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount'>
      & { baseAmountUSD: EthereumDexTrades['baseAmount'], quoteAmountUSD: EthereumDexTrades['quoteAmount'], trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type LatestPriceOfATokenOnPancakeswapQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestPriceOfATokenOnPancakeswapQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'] }
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
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

export type MelloBurnMelloFellowQueryVariables = Exact<{ [key: string]: never; }>;


export type MelloBurnMelloFellowQuery = (
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
          & Pick<Currency, 'address' | 'symbol' | 'tokenType'>
        )> }
      )>> }
    )> }
  )> }
);

export type YearnEventsOverTimeQueryVariables = Exact<{
  network: EthereumNetwork;
}>;


export type YearnEventsOverTimeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & Pick<EthereumSmartContractEvent, 'eventIndex'>
      & { arguments?: Maybe<Array<(
        { __typename?: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'argument' | 'argumentType' | 'index' | 'value'>
      )>>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )> }
    )>> }
  )> }
);

export type F2poolbtcflowQueryVariables = Exact<{ [key: string]: never; }>;


export type F2poolbtcflowQuery = (
  { __typename?: 'Query' }
  & { bitcoin?: Maybe<(
    { __typename?: 'Bitcoin' }
    & { inbound?: Maybe<Array<(
      { __typename?: 'BitcoinCoinpath' }
      & Pick<BitcoinCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )>, receiver?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>>, outbound?: Maybe<Array<(
      { __typename?: 'BitcoinCoinpath' }
      & Pick<BitcoinCoinpath, 'amount' | 'depth' | 'count'>
      & { sender?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )>, receiver?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'address' | 'annotation'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type DexTradingvolCombineSameSymbolQueryVariables = Exact<{
  symbol1?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type DexTradingvolCombineSameSymbolQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { USD: EthereumDexTrades['tradeAmount'], BTC: EthereumDexTrades['tradeAmount'], ETH: EthereumDexTrades['tradeAmount'], USDT: EthereumDexTrades['tradeAmount'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type PancakePairTradingvolQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakePairTradingvolQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { USD: EthereumDexTrades['tradeAmount'], USD_Avg: EthereumDexTrades['tradeAmount'], USD_Med: EthereumDexTrades['tradeAmount'], BTC: EthereumDexTrades['tradeAmount'], USDT: EthereumDexTrades['tradeAmount'], Takers: EthereumDexTrades['count'], Trades: EthereumDexTrades['count'], Trades_greater_10k: EthereumDexTrades['count'], Trades_greater_50k: EthereumDexTrades['count'], Trades_greater_100k: EthereumDexTrades['count'], Trades_greater_500k: EthereumDexTrades['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type ShitshowQueryVariables = Exact<{ [key: string]: never; }>;


export type ShitshowQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'unixtime'>
        )> }
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name' | 'type'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
        & { smartContract?: Maybe<(
          { __typename?: 'EthereumSmartContractInfo' }
          & { currency?: Maybe<(
            { __typename?: 'Currency' }
            & Pick<Currency, 'name'>
          )> }
        )> }
      )> }
    )>> }
  )> }
);

export type PancakeDailyTradingvolQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeDailyTradingvolQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { USD: EthereumDexTrades['tradeAmount'], BTC: EthereumDexTrades['tradeAmount'], ETH: EthereumDexTrades['tradeAmount'], USDT: EthereumDexTrades['tradeAmount'], traders: EthereumDexTrades['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & { currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'symbol'>
        )> }
      )> }
    )>> }
  )> }
);

export type DexAssetPriceIndexQueryVariables = Exact<{
  baseAddress: Scalars['String'];
  quoteAddress: Scalars['String'];
  connector1: Scalars['String'];
  from: Scalars['ISO8601DateTime'];
  interval?: Maybe<Scalars['Int']>;
}>;


export type DexAssetPriceIndexQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { buyAmount: EthereumDexTrades['baseAmount'], buyAmountInUsd: EthereumDexTrades['baseAmount'], sellAmountInUsd: EthereumDexTrades['quoteAmount'], volume: EthereumDexTrades['quoteAmount'], trades: EthereumDexTrades['count'], averageQuotePrice: EthereumDexTrades['quotePrice'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type PancakeswapVolumePairQueryVariables = Exact<{ [key: string]: never; }>;


export type PancakeswapVolumePairQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
    )>> }
  )> }
);

export type UniswapOhlcData5MinuteCandleUsdtwethv2QueryVariables = Exact<{ [key: string]: never; }>;


export type UniswapOhlcData5MinuteCandleUsdtwethv2Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
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

export type JudeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type JudeQueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute' | 'day'>
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

export type JudeQueryv1QueryVariables = Exact<{ [key: string]: never; }>;


export type JudeQueryv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
      & { trades: EthereumDexTrades['count'], maximum_price: EthereumDexTrades['quotePrice'], minimum_price: EthereumDexTrades['quotePrice'], open_price: EthereumDexTrades['minimum'], close_price: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute' | 'day'>
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

export type TradesForAnyWalletAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type TradesForAnyWalletAddressQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeIndex' | 'buyAmount' | 'sellAmount' | 'tradeAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash' | 'gasValue' | 'gasPrice' | 'gas'>
      )>, smartContract?: Maybe<(
        { __typename?: 'EthereumSmartContract' }
        & Pick<EthereumSmartContract, 'contractType'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ), currency?: Maybe<(
          { __typename?: 'Currency' }
          & Pick<Currency, 'name'>
        )> }
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type FilecoinUniqueMinersByDayQueryVariables = Exact<{ [key: string]: never; }>;


export type FilecoinUniqueMinersByDayQuery = (
  { __typename?: 'Query' }
  & { filecoin?: Maybe<(
    { __typename?: 'Filecoin' }
    & { blocks?: Maybe<Array<(
      { __typename?: 'FilecoinBlock' }
      & { uniq_miners: FilecoinBlock['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type FilecoinAverageMessageCostPerDayQueryVariables = Exact<{ [key: string]: never; }>;


export type FilecoinAverageMessageCostPerDayQuery = (
  { __typename?: 'Query' }
  & { filecoin?: Maybe<(
    { __typename?: 'Filecoin' }
    & { messages?: Maybe<Array<(
      { __typename?: 'FilecoinMessages' }
      & { average_cost: FilecoinMessages['totalCost'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type MidasDollarOhlc15mQueryVariables = Exact<{ [key: string]: never; }>;


export type MidasDollarOhlc15mQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
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

export type TradesForSpecificWalletQueryVariables = Exact<{ [key: string]: never; }>;


export type TradesForSpecificWalletQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'buyAmount' | 'sellAmount'>
      & { buyAmountInUsd: EthereumDexTrades['buyAmount'], sellAmountInUsd: EthereumDexTrades['sellAmount'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'hash'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type BinanceChainDexBnbDelegatedQueryVariables = Exact<{
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type BinanceChainDexBnbDelegatedQuery = (
  { __typename?: 'Query' }
  & { binance?: Maybe<(
    { __typename?: 'Binance' }
    & { transactions?: Maybe<Array<(
      { __typename?: 'BinanceTransactions' }
      & Pick<BinanceTransactions, 'count' | 'deposit'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, transactionSource?: Maybe<(
        { __typename?: 'TransactionSource' }
        & Pick<TransactionSource, 'name'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type CeloDailyUniqueReceiversQueryVariables = Exact<{ [key: string]: never; }>;


export type CeloDailyUniqueReceiversQuery = (
  { __typename?: 'Query' }
  & { celo?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & { receiver: EthereumTransfers['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type ChiTradesQueryVariables = Exact<{
  network: EthereumNetwork;
  token: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type ChiTradesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { trades: EthereumDexTrades['count'], takers: EthereumDexTrades['count'], makers: EthereumDexTrades['count'], amount: EthereumDexTrades['baseAmount'] }
      & { exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'fullName'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type AlgorandDailyReceiversQueryVariables = Exact<{ [key: string]: never; }>;


export type AlgorandDailyReceiversQuery = (
  { __typename?: 'Query' }
  & { algorand?: Maybe<(
    { __typename?: 'Algorand' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'AlgorandTransfers' }
      & { receiver: AlgorandTransfers['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type ConfluxDailyReceiversQueryVariables = Exact<{ [key: string]: never; }>;


export type ConfluxDailyReceiversQuery = (
  { __typename?: 'Query' }
  & { conflux?: Maybe<(
    { __typename?: 'Conflux' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & { receiver: EthereumTransfers['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type UsdPriceQueryVariables = Exact<{
  baseAddress: Scalars['String'];
  quoteAddress: Scalars['String'];
  connector1: Scalars['String'];
  from: Scalars['ISO8601DateTime'];
  interval?: Maybe<Scalars['Int']>;
}>;


export type UsdPriceQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { buyAmount: EthereumDexTrades['baseAmount'], buyAmountInUsd: EthereumDexTrades['baseAmount'], sellAmountInUsd: EthereumDexTrades['quoteAmount'], volume: EthereumDexTrades['quoteAmount'], trades: EthereumDexTrades['count'], high: EthereumDexTrades['quotePrice'], low: EthereumDexTrades['quotePrice'], open: EthereumDexTrades['minimum'], close: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, buyCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )>, sellCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'address'>
      )> }
    )>> }
  )> }
);

export type PancakePairTradingvolv1QueryVariables = Exact<{ [key: string]: never; }>;


export type PancakePairTradingvolv1Query = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { USD: EthereumDexTrades['tradeAmount'], USD_Avg: EthereumDexTrades['tradeAmount'], USD_Med: EthereumDexTrades['tradeAmount'], BTC: EthereumDexTrades['tradeAmount'], USDT: EthereumDexTrades['tradeAmount'], Takers: EthereumDexTrades['count'], Txs: EthereumDexTrades['count'], Txs_greater_10k: EthereumDexTrades['count'], Txs_greater_50k: EthereumDexTrades['count'], Txs_greater_100k: EthereumDexTrades['count'], Txs_greater_500k: EthereumDexTrades['count'] }
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, exchange?: Maybe<(
        { __typename?: 'EthereumDex' }
        & Pick<EthereumDex, 'name'>
        & { address: (
          { __typename?: 'Address' }
          & Pick<Address, 'address'>
        ) }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type TotalDailyTradeVolumeQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalDailyTradeVolumeQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
    )>> }
  )> }
);

export type SmartcontracteventLpQueryVariables = Exact<{ [key: string]: never; }>;


export type SmartcontracteventLpQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & Pick<EthereumSmartContractEvent, 'eventIndex'>
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'unixtime'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, arguments?: Maybe<Array<(
        { __typename?: 'ArgumentNameValue' }
        & Pick<ArgumentNameValue, 'value' | 'argument' | 'index' | 'argumentType'>
      )>>, smartContractEvent?: Maybe<(
        { __typename?: 'Event' }
        & Pick<Event, 'name' | 'signature' | 'signatureHash'>
      )>, date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type TokenTransactionQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenTransactionQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'baseAmount' | 'quoteAmount' | 'quotePrice'>
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

export type GetPoolMultipleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPoolMultipleQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count' | 'tradeAmount'>
    )>> }
  )> }
);

export type TransfersLast24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type TransfersLast24HoursQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )> }
    )>> }
  )> }
);

export type TokenChartingQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenChartingQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & { high: EthereumDexTrades['quotePrice'], low: EthereumDexTrades['quotePrice'], open: EthereumDexTrades['minimum'], close: EthereumDexTrades['maximum'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'minute'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'name'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'name'>
      )> }
    )>> }
  )> }
);

export type PairsCreatedByTokenCreatorQueryVariables = Exact<{ [key: string]: never; }>;


export type PairsCreatedByTokenCreatorQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & Pick<EthereumArguments, 'callDepth'>
      & { token0_address: EthereumArguments['any'], token0_symbol: EthereumArguments['any'], token0_name: EthereumArguments['any'], token1_address: EthereumArguments['any'], token1_symbol: EthereumArguments['any'], token1_name: EthereumArguments['any'], pair_address: EthereumArguments['any'], pair_symbol: EthereumArguments['any'], pair_name: EthereumArguments['any'] }
      & { transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )> }
    )>> }
  )> }
);

export type SnogeTransfersQueryVariables = Exact<{ [key: string]: never; }>;


export type SnogeTransfersQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount'>
      & { sender?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )>, receiver?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type SnogeDextradesQueryVariables = Exact<{ [key: string]: never; }>;


export type SnogeDextradesQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'count'>
      & { baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type SnogeSmartcontractswapsQueryVariables = Exact<{ [key: string]: never; }>;


export type SnogeSmartcontractswapsQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { smartContractEvents?: Maybe<Array<(
      { __typename?: 'EthereumSmartContractEvent' }
      & Pick<EthereumSmartContractEvent, 'count'>
    )>> }
  )> }
);

export type HederaMessagesByTopicsQueryVariables = Exact<{
  network: HederaNetwork;
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
  dateFormat: Scalars['String'];
}>;


export type HederaMessagesByTopicsQuery = (
  { __typename?: 'Query' }
  & { hedera?: Maybe<(
    { __typename?: 'Hedera' }
    & { messages?: Maybe<Array<(
      { __typename?: 'HederaMessage' }
      & Pick<HederaMessage, 'count'>
      & { date?: Maybe<(
        { __typename?: 'Date' }
        & Pick<Date, 'date'>
      )>, entity?: Maybe<(
        { __typename?: 'Entity' }
        & Pick<Entity, 'id'>
      )> }
    )>> }
  )> }
);

export type CopyOfGetBalanceOfHoldersPublicMyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CopyOfGetBalanceOfHoldersPublicMyQueryQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { address: Array<(
      { __typename?: 'EthereumAddressInfoWithBalance' }
      & Pick<EthereumAddressInfoWithBalance, 'address'>
      & { balances?: Maybe<Array<(
        { __typename?: 'EthereumBalance' }
        & Pick<EthereumBalance, 'value'>
      )>> }
    )> }
  )> }
);

export type QuotepricePalmQueryVariables = Exact<{ [key: string]: never; }>;


export type QuotepricePalmQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time' | 'unixtime'>
        )> }
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type QueryPairOfTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryPairOfTokenQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { arguments?: Maybe<Array<(
      { __typename?: 'EthereumArguments' }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
      )>, argument?: Maybe<(
        { __typename?: 'ArgumentName' }
        & Pick<ArgumentName, 'name'>
      )>, reference?: Maybe<(
        { __typename?: 'EthereumAddressInfo' }
        & Pick<EthereumAddressInfo, 'address'>
      )> }
    )>> }
  )> }
);

export type PriceForListOfTokensInBusdQueryVariables = Exact<{ [key: string]: never; }>;


export type PriceForListOfTokensInBusdQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { count0?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
      & { median_price: EthereumDexTrades['quotePrice'] }
      & { quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol' | 'name' | 'address'>
      )> }
    )>> }
  )> }
);

export type GetCakeBnbPriceOnSpecBlockQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCakeBnbPriceOnSpecBlockQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'quotePrice'>
      & { block?: Maybe<(
        { __typename?: 'BlockExtended' }
        & Pick<BlockExtended, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time' | 'unixtime'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfoExtended' }
        & Pick<EthereumTransactionInfoExtended, 'index'>
      )>, baseCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )>, quoteCurrency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'symbol'>
      )> }
    )>> }
  )> }
);

export type Latest24hPancakeLpPoolsTradingQueryVariables = Exact<{ [key: string]: never; }>;


export type Latest24hPancakeLpPoolsTradingQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { dexTrades?: Maybe<Array<(
      { __typename?: 'EthereumDexTrades' }
      & Pick<EthereumDexTrades, 'tradeAmount'>
      & { traders: EthereumDexTrades['count'], trades: EthereumDexTrades['count'] }
      & { timeInterval?: Maybe<(
        { __typename?: 'TimeInterval' }
        & Pick<TimeInterval, 'hour'>
      )> }
    )>> }
  )> }
);

export type AffiliateappsTradesReceiveQueryVariables = Exact<{
  network: EthereumNetwork;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sender: Scalars['String'];
  receiver: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type AffiliateappsTradesReceiveQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount' | 'external'>
      & { amountUSD: EthereumTransfers['amount'] }
      & { block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'height'>
        & { timestamp?: Maybe<(
          { __typename?: 'DateTime' }
          & Pick<DateTime, 'time'>
        )> }
      )>, transaction?: Maybe<(
        { __typename?: 'EthereumTransactionInfo' }
        & Pick<EthereumTransactionInfo, 'hash'>
      )>, currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'name' | 'symbol'>
      )> }
    )>> }
  )> }
);

export type AffiliateappsSumTradesReceiveQueryVariables = Exact<{
  network: EthereumNetwork;
  sender: Scalars['String'];
  receiver: Scalars['String'];
  from?: Maybe<Scalars['ISO8601DateTime']>;
  till?: Maybe<Scalars['ISO8601DateTime']>;
}>;


export type AffiliateappsSumTradesReceiveQuery = (
  { __typename?: 'Query' }
  & { ethereum?: Maybe<(
    { __typename?: 'Ethereum' }
    & { transfers?: Maybe<Array<(
      { __typename?: 'EthereumTransfers' }
      & Pick<EthereumTransfers, 'amount' | 'count'>
      & { amountUSD: EthereumTransfers['amount'] }
      & { currency?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'address' | 'name' | 'symbol' | 'decimals'>
      )> }
    )>> }
  )> }
);
