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
import { Grid, Typography, Link, Paper, Box } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import brown from '@material-ui/core/colors/brown'
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

export default function Home({ data }) {
  const theme = useTheme()
  typeof window !== 'undefined' && console.log(data)

  return (
    <>
      <Head>
        <title>Graphy Poopy</title>
        <meta name="description" content="Poop smeared everywhere, delicious" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={1}>
        {data.map(({ commentCount, details, title, created, data }) => {
          const trades = data?.data?.ethereum?.dexTrades?.map((t) => {
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
            <Grid item xs key={symbol}>
              <Grid item xs>
                <Typography align="center">
                  <Typography variant="button">${symbol}</Typography>
                  <Typography variant="body1">
                    <Link
                      color="textPrimary"
                      target="_blank"
                      href={`https://bscscan.com/token/${addr}`}
                      rel="noreferrer"
                    >
                      {addr}
                    </Link>
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs>
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
      </Grid>
    </>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/contracts?page=1')
  const data = await res.json()
  return {
    props: {
      data: data.filter((d) => d?.data?.data?.ethereum?.dexTrades?.length > 0),
    },
  }
}
