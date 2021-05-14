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
  const t = ((context?.params?.id ?? '') as string)?.toLowerCase()
  const isHexLike = web3.utils.isHexStrict(t)
  if (!isHexLike) return { notFound: true }
  const isExpired = (await redis.ttl(t)) <= 0
  if (!isExpired) {
    return { props: JSON.parse((await redis.get(t)) ?? '{}') }
  }
  redis.expire(t, Math.round(Math.random() * 10 + 33))
  const dexTrades = (await getWhales(t as string))?.data?.ethereum?.dexTrades
  if (!dexTrades || !Array.isArray(dexTrades))
    return { notFound: true, revalidate: 24 }
  if (dexTrades.length === 0) return { notFound: true, revalidate: 24 }
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

  const props = {
    whales,
    t,
    symbol,
  }
  await redis.hmset('tokens', t, symbol)
  await redis.set(t, JSON.stringify(props))
  return {
    props,
    revalidate: 24,
  }
}

export default Whales
