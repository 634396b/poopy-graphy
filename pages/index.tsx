import React from 'react'

import sub from 'date-fns/sub'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next'

// Server functions :D
import { getContracts } from '$/api/contracts'

// Components :D
import PooCoinLink from '$/components/PooCoinLink'
import Graph from '$/components/Graph/Graph'

// Types :D
import type { TradingAmountQuery } from '$/bitquery/generated'

interface ContractApiProps extends TradingAmountQuery {
  _id: string
  lastId: string
}

function Poop({ tookA, lastLittleBitOfPoopThatWontComeOut }: any) {
  const contracts = tookA
  const router = useRouter()
  const handleDigest = () => {
    router.push({
      pathname: '/',
      query: { poop: lastLittleBitOfPoopThatWontComeOut },
    })
  }
  return (
    <Box paddingTop={1}>
      <Grid container alignItems="center">
        <Head>
          <title>Graphy Poopy</title>
          <meta
            name="description"
            content="Poop smeared everywhere, delicious"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="prefetch"
            href={`/_next/data/${process.env.buildId}/index.json?poop=${lastLittleBitOfPoopThatWontComeOut}`}
          />
        </Head>
        {contracts.map(({ symbol, address, trades, _id }: any) => {
          typeof window !== 'undefined' && console.log(trades)
          return (
            <Grid item xs={12} md={6} lg={4} key={symbol}>
              <Grid item xs={12}>
                <Box height={50} ml={10}>
                  <PooCoinLink contractAddress={address} symbol={symbol} />
                </Box>
              </Grid>
              <Grid item>
                <Box height={500} pl={5} ml={5}>
                  <Graph trades={trades} />
                </Box>
              </Grid>
            </Grid>
          )
        })}
        <Grid
          style={{ height: '50px' }}
          xs={12}
          item
          alignContent="space-around"
          justify="center"
          container
        >
          <Grid xs={1} item>
            <Button onClick={handleDigest} color="primary" variant="contained">
              {'<'}💩_💩{'>'}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
const d = sub(new Date(), { years: 1 })
export async function getServerSideProps(context: NextPageContext) {
  const poop = context?.query?.poop as string
  const tookA = await getContracts(poop, d)
  const lastLittleBitOfPoopThatWontComeOut = tookA?.[tookA?.length - 1]?._id
  return {
    props: {
      tookA,
      lastLittleBitOfPoopThatWontComeOut:
        lastLittleBitOfPoopThatWontComeOut ?? null,
    },
  }
}

export default Poop
