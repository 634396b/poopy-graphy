import type { GetStaticPaths, GetStaticProps } from 'next'

import React from 'react'

import Head from 'next/head'
import WhaleTracker from 'src/pages/WhaleTracker'
import { useRouter } from 'next/router'
import LinearProgress from '@material-ui/core/LinearProgress'
import fetch from 'node-fetch'
import web3 from 'web3'

const FETCH_API_ENDPOINT = process.env.FETCH_API_ENDPOINT as string

if (typeof window === 'undefined' && !FETCH_API_ENDPOINT)
  throw new Error('Missing FETCH_API_ENDPOINT in env')

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
  const t = ((context?.params?.id ?? '') as string)?.toLowerCase()
  // Pre-condition: Token must be hex-like
  const isHexLike = web3.utils.isHexStrict(t)
  // Return notFound and do not allow revalidating
  if (!isHexLike) return { notFound: true }
  const url = new URL(FETCH_API_ENDPOINT)
  url.searchParams.append('t', t)
  const { props = {}, error = false } = await (await fetch(url))?.json()
  if (error) {
    return { notFound: true, revalidate: 5 }
  }
  return {
    props: props,
    revalidate: 5,
  }
}

export default Whales
