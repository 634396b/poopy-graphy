import React from 'react'

import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import makeStyles from '@material-ui/styles/makeStyles'
import Table from '@material-ui/core/Table'
import Box from '@material-ui/core/Box'
import { NextPageContext } from 'next'

import { getWhales } from '$/api/contracts'

import { format } from 'date-fns'
import { PaperHandsQuery } from '$/bitquery/generated'

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: '5px',
    marginBottom: '5px',
    flexGrow: 1,
  },
  txtBuy: {
    //@ts-ignore
    color: theme.palette.buy,
  },
  txtSell: {
    //@ts-ignore
    color: theme.palette.sell,
  },
}))

const getUTCDate = (dateString = Date.now()) => {
  const date = new Date(dateString)

  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
}
function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function WhaleTracker({ whales, t }: any) {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Bonfire Whale Tracker</title>
        <meta name="description" content="Bonfire whale tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container alignItems="stretch" className={classes.grid}>
        {Object.keys(whales).map((address: any) => {
          return (
            <Grid container item key={address} className={classes.grid}>
              <Paper className={classes.grid}>
                <Grid item xs={12}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">$</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Tx</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {whales[address].map((whale: any) => {
                        return (
                          <TableRow key={`${whale.hash}`}>
                            <TableCell align="center">
                              <Typography
                                className={
                                  whale.type === 'Buy'
                                    ? classes.txtBuy
                                    : classes.txtSell
                                }
                              >
                                {whale.type}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              ${numberWithCommas(whale.amount.toFixed(2))}
                            </TableCell>
                            <TableCell align="center">
                              {format(getUTCDate(whale.date), 'MMM dd yyyy')}
                            </TableCell>
                            <TableCell align="center">
                              <Link
                                href={`https://bscscan.com/tx/${whale.hash}`}
                              >
                                Tx
                              </Link>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </Grid>
                <Grid item container justify="center">
                  <Typography variant="caption">
                    <Link
                      rel="noopener"
                      target="_blank"
                      href={`https://bscscan.com/token/${t}?a=${address}`}
                    >
                      Bscscan - {address}
                    </Link>
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
interface WhaleMap {
  [key: string]: [(PaperHandsQuery['ethereum'] | any)['dexTrades']] | any
}
export async function getServerSideProps(context: NextPageContext) {
  const t =
    (context?.query?.t as string) ??
    '0x5e90253fbae4dab78aa351f4e6fed08a64ab5590'

  const whales = (await getWhales(t))?.data?.ethereum?.dexTrades
  if (!whales || !Array.isArray(whales)) return { notFound: true }
  const whalesMap = {} as WhaleMap
  whales.forEach(
    ({ transaction, date: _date, block, buyAmountInUsd, sellAmountInUsd }) => {
      const hash = transaction?.hash
      const address = transaction?.txFrom?.address ?? ''
      const index = transaction?.index
      const date = _date?.date
      const height = block?.height

      if (!whalesMap[address]) whalesMap[address] = []
      whalesMap[address]?.push({
        amount: buyAmountInUsd || sellAmountInUsd,
        type: buyAmountInUsd ? 'Buy' : 'Sell',
        date: date,
        index,
        hash,
        height,
      })
      // sort by date descending
      whalesMap?.[address]?.sort(
        (a: any, b: any) => b.index + b.height - (a.index + a.height)
      )
    }
  )
  return {
    props: {
      whales: whalesMap,
      t,
    },
  }
}

export default WhaleTracker
