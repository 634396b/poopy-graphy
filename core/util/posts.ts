import formatISO from 'date-fns/formatISO'
import sub from 'date-fns/sub'
import { TradingAmount, TradingAmountQueryVariables } from '../graphql/index'
import { print } from 'graphql'
import { getHeaders } from './http'
import fetch from 'node-fetch'
export function getTrades(addr: string, start: Date, end: Date) {
  console.log('Getting trades for', addr)
  return fetch('https://graphql.bitquery.io/', {
    ...getHeaders(),
    body: JSON.stringify(fmtQuery(start, end, addr)),
    method: 'POST',
  })
}

export function fmtQuery(start: Date, end: Date, addr: string) {
  const startDateISO = formatISO(start)
  const endDateISO = formatISO(end)
  return {
    query: print(TradingAmount),
    variables: {
      from: startDateISO,
      till: endDateISO,
      address: addr,
      minTradeUsd: 10,
      exchanges: [
        '0xbcfccbde45ce874adcb698cc183debcf17952812',
        '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
      ],
      quoteAddress: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      intervalMinutes: 60,
    },
  } as {
    query: any
    variables: TradingAmountQueryVariables
  }
}

async function pp() {
  //@ts-ignore
  const d = await getTrades(
    '0x63a4644142CA6dc83CfE0E2bdba8d62174491fD8',
    sub(new Date(), { days: 1 }),
    new Date()
  )
  const p = await d.json()
  console.log(JSON.stringify(p))
}

pp()
