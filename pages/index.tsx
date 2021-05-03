import Head from 'next/head'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from 'recharts'
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
import { useTheme } from '@material-ui/core'

interface ContractApiProps extends TradingAmountQuery {
  _id: string
  lastId: string
}

function Poop({ tookAPoop, diarrhea }: any) {
  const theme = useTheme()
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
    // router.prefetch(`poop=${diarrhea}`)
  }, [])

  useEffect(() => {
    if (tookAPoop && Array.isArray(tookAPoop)) {
      setContracts((p: any) => [...p, ...tookAPoop])
    }
  }, [tookAPoop])
  return (
    <Grid container>
      <Head>
        <title>Graphy Poopy</title>
        <meta name="description" content="Poop smeared everywhere, delicious" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="prefetch"
          href={`/_next/data/${process.env.buildId}/index.json?poop=${diarrhea}`}
        />
      </Head>
      {contracts.map(({ ethereum }: ContractApiProps) => {
        if (ethereum?.dexTrades?.length === 0) return <></>
        const trades = ethereum?.dexTrades?.map((t) => {
          const { quotePrice, timeInterval } = t
          const minute = timeInterval?.minute as string
          const date = format(new Date(minute), 'M/d p')
          const price = Math.abs(Math.log2(Number(quotePrice)))
          return { ...t, date, price }
        })
        const addr = trades?.[0]?.baseCurrency?.address as string
        const symbol = trades?.[0]?.baseCurrency?.symbol as string
        return (
          <Grid item xs={4} key={symbol}>
            <Grid item xs>
              <Typography align="center" color="secondary">
                ${symbol}
              </Typography>
              <Typography align="center" color="primary">
                <PooCoinLink contractAddress={addr} />
              </Typography>
            </Grid>
            <Grid item>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart width={600} height={400} data={trades}>
                  <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
                  <YAxis
                    stroke={theme.palette.text.secondary}
                    tickFormatter={(t) => t.toExponential()}
                  />
                  <Tooltip
                    itemStyle={{
                      color: theme.palette.secondary.main,
                    }}
                    contentStyle={{
                      color: theme.palette.secondary.main,
                      backgroundColor: theme.palette.text.primary,
                    }}
                  />
                  <CartesianGrid
                    stroke={theme.palette.divider}
                    strokeDasharray="5 5"
                  />
                  <Line
                    stroke={theme.palette.primary.main}
                    dataKey="quotePrice"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        )
      })}
      <Grid xs={12} item container justify="center">
        <Box padding={2}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={(_) => handleFetchNew()}
          >
            <Typography variant="button">Load More Poopy</Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
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
