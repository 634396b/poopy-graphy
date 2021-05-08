import React from 'react'

import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import { NextPageContext } from 'next'

// Server functions :D
import { getWhales } from '$/api/contracts'

// Types :D
import { format } from 'date-fns'
import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: '5px',
    marginBottom: '5px',
  },
}))

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function WhaleTracker({ whales }: any) {
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
            <Grid item xs={12} key={address} className={classes.grid}>
              <Paper>
                <TableContainer component={Box}>
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
                            <TableCell align="center">{whale.type}</TableCell>
                            <TableCell align="center">
                              ${numberWithCommas(whale.amount.toFixed(2))}
                            </TableCell>
                            <TableCell align="center">
                              {format(new Date(whale.date), 'MMM dd yyyy')}
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
                </TableContainer>
                <Link
                  rel="noopener"
                  target="_blank"
                  href={`https://bscscan.com/token/0x5e90253fbae4dab78aa351f4e6fed08a64ab5590?a=${address}`}
                >
                  BscScan
                </Link>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
export async function getServerSideProps(context: NextPageContext) {
  const whales = (await getWhales())?.data?.ethereum?.dexTrades as any
  const whalesMap = {} as any
  whales?.forEach(
    ({
      transaction: {
        hash,
        txFrom: { address },
        index,
      },
      date: { date },
      block: { height },
      buyAmountInUsd,
      sellAmountInUsd,
    }: any) => {
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
      whalesMap[address].sort(
        (a: any, b: any) => b.index + b.height - (a.index + a.height)
      )
    }
  )
  return {
    props: {
      whales: whalesMap,
    },
  }
}

export default WhaleTracker
