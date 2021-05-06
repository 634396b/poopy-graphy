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

function Poop({ tookA, diarrhea, urine }: any) {
  const contracts = tookA
  const router = useRouter()
  const handleDigest = (type: string) => {
    router.replace(
      {
        pathname: '/',
        query: { poop: diarrhea, needsTo: type, pee: urine },
      },
      undefined,
      {
        scroll: false,
      }
    )
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
        </Head>
        {contracts.map(({ symbol, address, trades, _id }: any) => {
          typeof window !== 'undefined' && console.log(trades)
          return (
            <Grid item xs={12} md={6} lg={4} key={symbol}>
              <Grid item xs={12}>
                <Box height={100} mt={1}>
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
          xs={12}
          item
          alignContent="space-around"
          justify="center"
          container
        >
          <Grid xs={1} item>
            <Button
              style={{ padding: '1px' }}
              onClick={(_) => handleDigest('poop')}
              color="primary"
              variant="contained"
            >
              Poop
            </Button>
          </Grid>
          <Grid xs={1} item>
            <Button
              style={{ padding: '1px' }}
              onClick={(_) => handleDigest('pee')}
              color="secondary"
              variant="contained"
            >
              Pee
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const poop = context?.query?.poop as string
  const pee = context?.query?.pee as string
  const needsTo = context?.query?.needsTo as string
  const tookA = await getContracts(
    needsTo === 'poop' ? poop : pee,
    sub(new Date(), { years: 14 })
  )
  const diarrhea = tookA?.[tookA?.length - 1]?._id
  return {
    props: { tookA, diarrhea: diarrhea ?? null, urine: poop ?? null },
  }
}

export default Poop
