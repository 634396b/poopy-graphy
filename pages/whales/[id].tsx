import type { GetStaticPaths, GetStaticProps } from 'next'

import React from 'react'

import Head from 'next/head'
import getWhales from '$/core/whales/getWhales'
import WhaleTracker from 'src/pages/WhaleTracker'
import { useRouter } from 'next/dist/client/router'
import LinearProgress from '@material-ui/core/LinearProgress'
import redis from '$/core/redis'

function Whales(props: any) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{props?.symbol ?? ''} Whale Tracker </title>
        <meta
          name="description"
          content="Displays sells/buys on BSC tokens from the top wallets"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.isFallback ? <LinearProgress /> : <WhaleTracker {...props} />}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: '0xB0B924C4a31b7d4581a7F78F57ceE1E65736Be1D',
        },
      },
    ],
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  const t = context?.params?.id as string

  const dexTrades = (await getWhales(t as string))?.data?.ethereum?.dexTrades
  if (!dexTrades || !Array.isArray(dexTrades)) return { notFound: true }
  if (dexTrades.length === 0) return { notFound: true }
  const symbol = dexTrades[0].baseCurrency?.symbol as string

  const whales = dexTrades.map(
    ({ transaction, block, buyAmountInUsd, sellAmountInUsd }) => {
      const hash = transaction?.hash
      const address = transaction?.txFrom?.address ?? ''
      const blockTime = block?.timestamp?.time

      return {
        amount: buyAmountInUsd || sellAmountInUsd,
        type: buyAmountInUsd ? 'Buy' : 'Sell',
        date: blockTime,
        hash,
        address,
      }
    }
  )
  redis.hmset('tokens', t, symbol)
  // sort by date descending
  whales?.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return {
    props: {
      whales,
      t,
      symbol,
    },
    revalidate: 30,
  }
}

export default Whales
