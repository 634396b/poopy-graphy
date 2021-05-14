import formatISO from 'date-fns/formatISO'
import { DocumentNode, print } from 'graphql'
import fetch from 'node-fetch'
import {
  TradingAmount,
  TradingAmountQueryVariables,
  TradingAmountQuery,
  WhalesQueryVariables,
  Whales,
  WhalesQuery,
} from '$/core/bitquery/generated'
import { graphqlEndpoint, getHeaders } from '$/core/bitquery/constants'
interface Result {
  data: TradingAmountQuery
}
type Optional<T> = T | null

export async function getTrades(
  address: string,
  from: Date,
  till: Date,
  intervalMinutes: Optional<number> = 30,
  quoteAddress: Optional<string> = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // WBNB
  exchanges: Optional<string[]> = [
    '0xbcfccbde45ce874adcb698cc183debcf17952812', // Pancakeswap factory 1
    '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73', // Pancakeswap factory 2
  ],
  minTradeUsd: Optional<number> = 10
): Promise<Result> {
  console.log('Getting trades for', address, from, till)

  const startDateISO = formatISO(from)
  const endDateISO = formatISO(till)
  const body = fmtQuery(TradingAmount, {
    from: startDateISO,
    till: endDateISO,
    address,
    minTradeUsd,
    exchanges,
    quoteAddress,
    intervalMinutes,
  } as TradingAmountQueryVariables)
  return (
    await fetch(graphqlEndpoint, {
      ...getHeaders(),
      body: JSON.stringify(body),
      method: 'POST',
    })
  ).json() as Promise<Result>
}

export async function getWhalesTrades(
  contract: string,
  from: Date,
  minTradeUsd: Optional<number> = 10000,
  limit = 5000
) {
  const startDateISO = formatISO(from)
  const body = fmtQuery(Whales, {
    since: startDateISO,
    contract,
    minTradeUsd,
    limit,
  } as WhalesQueryVariables)
  return (
    await fetch(graphqlEndpoint, {
      ...getHeaders(),
      body: JSON.stringify(body),
      method: 'POST',
    })
  ).json() as Promise<{ data: WhalesQuery }>
}

export function fmtQuery(Query: DocumentNode, variables: any) {
  return {
    query: print(Query),
    variables: variables,
  }
}
