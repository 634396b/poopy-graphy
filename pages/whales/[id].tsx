import React from 'react'

import Head from 'next/head'
import getWhales from '$/core/whales/getWhales'
import WhaleTracker from 'src/pages/WhaleTracker'
import type { GetStaticPaths, GetStaticProps } from 'next'

function Whales(props: any) {
  return (
    <>
      <Head>
        <title>BSC Whale Tracker</title>
        <meta
          name="description"
          content="Displays sells/buys on BSC tokens from the top wallets"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WhaleTracker {...props} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '0x5e90253fbae4dab78aa351f4e6fed08a64ab5590' } }, // bonfire
      { params: { id: '0x2a9718deff471f3bb91fa0eceab14154f150a385' } }, // elongate
      { params: { id: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3' } }, // safemoon
      { params: { id: '0xb0b924c4a31b7d4581a7f78f57cee1e65736be1d' } }, // happy
      { params: { id: '0x33a3d962955a3862c8093d1273344719f03ca17c' } }, // spore
    ],
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  const t = context?.params?.id

  const dexTrades = (await getWhales(t as string))?.data?.ethereum?.dexTrades
  if (!dexTrades || !Array.isArray(dexTrades)) return { notFound: true }

  const whales = dexTrades.map(
    ({ transaction, date: _date, block, buyAmountInUsd, sellAmountInUsd }) => {
      const hash = transaction?.hash
      const address = transaction?.txFrom?.address ?? ''
      const index = transaction?.index
      const date = _date?.date
      const height = block?.height

      return {
        amount: buyAmountInUsd || sellAmountInUsd,
        type: buyAmountInUsd ? 'Buy' : 'Sell',
        date: date,
        index,
        hash,
        height,
        address,
      }
    }
  )
  // sort by date descending
  whales?.sort((a: any, b: any) => b.index + b.height - (a.index + a.height))
  return {
    props: {
      whales,
      t,
    },
    revalidate: 60,
  }
}

export default Whales
