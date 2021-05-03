import Head from 'next/head'
import format from 'date-fns/format'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import React, { useEffect, useState } from 'react'
import { TradingAmountQuery } from '@/bitquery/generated'
import { PooCoinLink } from '@/src/components/PooCoinLink'
import { useRouter } from 'next/router'
import { getContracts } from './api/contracts'
import { NextPageContext } from 'next'
import { LinearProgress, useTheme } from '@material-ui/core'
import Graph from '@/src/components/Graph'
import { useInView } from 'react-intersection-observer'

interface ContractApiProps extends TradingAmountQuery {
  _id: string
  lastId: string
}

function Poop({ tookAPoop, diarrhea }: any) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })
  const [isLoading, setLoading] = useState(false)
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
      setLoading(true)
    }
  }, [inView, entry])

  useEffect(() => {
    if (tookAPoop && Array.isArray(tookAPoop)) {
      setContracts((p: any) => [...p, ...tookAPoop])
      setLoading(false)
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
            <iframe>

            </iframe>
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
  const tookAPoop = await getContracts(poop)
  const diarrhea = tookAPoop?.[tookAPoop?.length - 1]?._id
  return {
    props: { tookAPoop, diarrhea },
  }
}

export default Poop
