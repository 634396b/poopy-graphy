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
import { format } from 'date-fns'
import {
  Grid,
  Typography,
  Link,
  Paper,
  Box,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import brown from '@material-ui/core/colors/brown'
import { connectToDatabase } from '../core/util/mongodb'
import useSWR from 'swr'
import differenceInSeconds from 'date-fns/differenceInSeconds'
import { useEffect, useState } from 'react'
import { useInterval } from 'react-use'
const fetcher = (url) => fetch(url).then((r) => r.json())

const toDecimal = (value) => value.toFixed(Math.abs(Math.log10(value)) + 20)

const CustomTooltip = ({ active, payload, label, trades }) => {
  if (active && payload && payload.length) {
    return (
      <Paper>
        <Box p={2}>
          <Typography>{label}</Typography>
          <Typography>${toDecimal(payload[0].value)}</Typography>
        </Box>
      </Paper>
    )
  }

  return null
}

export default function Home({ isConnected }) {
  const theme = useTheme()
  const [graphdata, setData] = useState([])
  const [lastId, setLastId] = useState('undefined')
  const [fetchNew, setFetchNew] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const { data: newData, error } = useSWR(
    `/api/contracts?oid=${lastId}`,
    fetcher
  )
  useEffect(() => {
    setIsFetching(false)
    if (!Array.isArray(newData)) return
    setData((p) => [...p, ...newData])
  }, [newData])

  useEffect(() => {
    if (fetchNew) {
      setLastId(graphdata?.[graphdata?.length - 1]?._id)
      setIsFetching(true)
    }
    setFetchNew(false)
  }, [fetchNew])
  console.log(graphdata)
  return (
    <Grid container>
      <Head>
        <title>Graphy Poopy</title>
        <meta name="description" content="Poop smeared everywhere, delicious" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {graphdata.map(({ commentCount, details, title, created, ethereum }) => {
        if (ethereum.dexTrades.length === 0) return <></>
        const trades = ethereum.dexTrades.map((t) => {
          const {
            quotePrice,
            timeInterval: { minute },
          } = t
          const date = format(new Date(minute), 'M/d p')
          const price = Math.abs(Math.log2(+quotePrice))
          return { ...t, date, price }
        })
        const addr = trades[0].baseCurrency.address
        const symbol = trades[0].baseCurrency.symbol
        return (
          <Grid item xs={4} key={symbol}>
            <Grid item xs>
              <Typography align="center" variant="body1">
                ${symbol}
              </Typography>
              <Typography align="center" variant="body1">
                <Link
                  color="textPrimary"
                  target="_blank"
                  href={`https://poocoin.app/tokens/${addr}`}
                  rel="noreferrer"
                >
                  {addr}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart width={600} height={400} data={trades}>
                  <XAxis dataKey="date" stroke={theme.palette.primary.main} />
                  <YAxis
                    stroke={brown['A400']}
                    name="Price"
                    tickFormatter={(t) => t.toExponential()}
                  />
                  <Tooltip
                    stroke={brown.A100}
                    content={<CustomTooltip trades={trades} />}
                    contentStyle={{
                      backgroundColor: brown['900'],
                      color: brown['A100'],
                    }}
                    formatter={(value, name) => [
                      value.toFixed(Math.abs(Math.log10(value))),
                      trades[0].baseCurrency.symbol,
                    ]}
                  />
                  <CartesianGrid
                    stroke={theme.palette.action.hover}
                    strokeDasharray="5 5"
                  />
                  <Line
                    type="monotone"
                    dataKey="quotePrice"
                    label="Price"
                    stroke={brown.A200}
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
            onClick={(_) => setFetchNew(true)}
          >
            {!isFetching && !fetchNew ? (
              <Typography variant="button">Load More Poopy</Typography>
            ) : (
              <Typography variant="button">Loading Mr. Poopy</Typography>
            )}
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected()
  return {
    props: {
      isConnected,
    },
  }
}
