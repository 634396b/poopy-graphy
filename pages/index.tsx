import React, { useEffect, useState } from 'react'

import sub from 'date-fns/sub'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import Box from '@material-ui/core/Box'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next'
import { useInView } from 'react-intersection-observer'

// Server functions :D
import { getContracts } from '$/api/contracts'

// Components :D
import PooCoinLink from '$/components/PooCoinLink'
import Graph from '$/components/Graph'

// Types :D
import type { TradingAmountQuery } from '$/bitquery/generated'

interface ContractApiProps extends TradingAmountQuery {
  _id: string
  lastId: string
}

function Poop({ tookAPoop, diarrhea }: any) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })
  const router = useRouter()
  const [contracts, setContracts] = useState<ContractApiProps[] | []>([])
  const handleFetchNew = () => {
    router.replace(
      {
        pathname: '/',
        query: { poop: diarrhea },
      },
      undefined,
      {
        scroll: false,
      }
    )
  }
  useEffect(() => {
    if (inView && entry) {
      handleFetchNew()
    }
  }, [inView, entry])

  useEffect(() => {
    if (tookAPoop && Array.isArray(tookAPoop)) {
      setContracts((p: any) => [...p, ...tookAPoop])
    }
  }, [tookAPoop])
  return (
    <Box paddingTop={1}>
      <Grid container>
        <Head>
          <title>Graphy Poopy</title>
          <meta
            name="description"
            content="Poop smeared everywhere, delicious"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="prefetch"
            href={`/_next/data/${process.env.buildId}/index.json?poop=${diarrhea}`}
          />
        </Head>
        {contracts.map(({ s, a, t, _id }: any) => {
          return (
            <Grid item xs={12} md={6} key={s}>
              <Grid item xs>
                <PooCoinLink contractAddress={a} symbol={s} />
              </Grid>
              <Grid item>
                <Box height={300} p={0.5}>
                  <Graph trades={t} symbol={s} />
                </Box>
              </Grid>
            </Grid>
          )
        })}
        <Grid xs={12} item ref={ref}>
          <LinearProgress className="loading" />
        </Grid>
      </Grid>
    </Box>
  )
}
export async function getServerSideProps(context: NextPageContext) {
  const poop = context?.query?.poop as string
  const tookAPoop = await getContracts(poop, sub(new Date(), { years: 1 }))
  const diarrhea = tookAPoop?.[tookAPoop?.length - 1]?._id
  return {
    props: { tookAPoop, diarrhea },
  }
}

export default Poop
