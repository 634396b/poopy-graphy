import React from 'react'

import Head from 'next/head'
import { getWhales } from '$/api/contracts'
import WhaleTracker from 'src/pages/WhaleTracker'
import type { NextPageContext } from 'next'
import { useRouter } from 'next/router'

function Whales(props: any) {
  const router = useRouter()
  router.replace('/whales/0x5e90253fbae4dab78aa351f4e6fed08a64ab5590')
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
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    redirect: {
      destination: 'whales/0x5e90253fbae4dab78aa351f4e6fed08a64ab5590',
      permanent: false,
    },
  }
}

export default Whales
