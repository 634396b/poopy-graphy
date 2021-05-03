import formatISO from 'date-fns/formatISO'
import fetch from 'node-fetch'
import {
  TradingAmount,
  TradingAmountQueryVariables,
  TradingAmountQuery,
} from './generated'
import { DocumentNode, print } from 'graphql'
import { getHeaders } from '@/util/http'
import { graphqlEndpoint } from '@/bitquery/constants'
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

export function fmtQuery(Query: DocumentNode, variables: any) {
  return {
    query: print(Query),
    variables: variables,
  }
}
