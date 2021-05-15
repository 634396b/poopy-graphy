import type { GetStaticPaths, GetStaticProps } from 'next'

import React from 'react'

import Head from 'next/head'
import getWhales from '$/core/whales/getWhales'
import WhaleTracker from 'src/pages/WhaleTracker'
import { useRouter } from 'next/router'
import LinearProgress from '@material-ui/core/LinearProgress'
import redis from '$/core/redis'
import web3 from 'web3'

function Whales(props: any) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{props?.symbol ?? ''} Whales</title>
        <meta
          name="description"
          content="Displays trades on Binance Smart Chain from the top wallets"
        />
      </Head>
      {/* When a token has not been discovered by fallback */}
      {router.isFallback ? <LinearProgress /> : <WhaleTracker {...props} />}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const notFoundRevalidate = { notFound: true, revalidate: 24, props: {} }
  const t = ((context?.params?.id ?? '') as string)?.toLowerCase()
  // Pre-condition: Token must be hex-like
  const isHexLike = web3.utils.isHexStrict(t)
  // Return notFound and do not allow revalidating
  if (!isHexLike) return { notFound: true }
  // Pre-condition: Is allowed to fetch again
  const isExpired = (await redis.ttl(`ttl:${t}`)) <= 0
  // Return previously cached data
  if (!isExpired) {
    return { props: JSON.parse((await redis.get(t)) ?? '{}') }
  }
  // Re-set expiration now in case of error
  redis.setex(`ttl:${t}`, Math.round(Math.random() * 10 + 33), '')
  // Retrieve trades
  const dexTrades = (await getWhales(t as string))?.data?.ethereum?.dexTrades
  // Return not found for any errors and allow revalidation
  if (!dexTrades || !Array.isArray(dexTrades)) return notFoundRevalidate
  if (dexTrades.length === 0) return notFoundRevalidate
  const symbol = dexTrades[0].baseCurrency?.symbol as string

  // Transform data
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

  const props = {
    whales,
    t,
    symbol,
  }

  // Cache result & symbol
  await redis.hmset('tokens', t, symbol)
  await redis.set(t, JSON.stringify(props))
  return {
    props,
    revalidate: 30,
  }
}

export default Whales
