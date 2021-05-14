import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import makeStyles from '@material-ui/styles/makeStyles'
import Table from '@material-ui/core/Table'
import format from 'date-fns/format'
import TableContainer from '@material-ui/core/TableContainer'
import ForwardIcon from '@material-ui/icons/Forward'

import { numberWithCommas } from '$/core/util/strings'
import IconButton from '@material-ui/core/IconButton'
import NextLink from 'next/link'

import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: '5px',
    marginBottom: '5px',
    flexGrow: 1,
  },
  header: {
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  txtBuy: {
    color: green[400],
  },
  txtSell: {
    color: red[800],
  },
  flippedIcon: {
    transform: 'rotate(180deg)',
  },
  iconButton: {
    paddingLeft: '5px',
  },
  center: {
    flexGrow: 4,
  },
  rowBuy: {
    backgroundColor: green[900],
  },
  rowSell: {
    backgroundColor: '#801313',
  },
}))

function WhaleTracker({ whales, t, symbol }: any) {
  const classes = useStyles()

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} className={classes.grid}>
        <Paper elevation={3} className={classes.header}>
          <Grid container alignItems="center" alignContent="space-around">
            <Grid item xs className={classes.iconButton}>
              <NextLink href="/" passHref prefetch={false}>
                <IconButton color="inherit">
                  <ForwardIcon className={classes.flippedIcon} />
                </IconButton>
              </NextLink>
            </Grid>
            <Grid item xs className={classes.center}>
              <Typography variant="h6" align="center">
                <Link
                  color="inherit"
                  rel="noopener"
                  target="_blank"
                  href={`https://poocoin.app/tokens/${t}`}
                >
                  {symbol}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} className={classes.grid}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {whales.map((whale: any) => {
                // In future use market cap to scale "big amount"
                const isBigAmount = whale.amount > 100000
                const isBuy = whale.type === 'Buy'
                const isSell = whale.type === 'Sell'
                const getClass = (
                  classSell: string,
                  classBuy: string,
                  precond: boolean
                ) => {
                  if (!precond) {
                    return ''
                  } else {
                    if (isBuy) return classBuy
                    else if (isSell) return classSell
                    else return ''
                  }
                }
                const txAmountClass = getClass(
                  classes.txtSell,
                  classes.txtBuy,
                  !isBigAmount
                )
                const txRowClass = getClass(
                  classes.rowSell,
                  classes.rowBuy,
                  isBigAmount
                )
                return (
                  <TableRow
                    key={`tx-${whale.hash}${whale.type}${whale.amount}`}
                    className={txRowClass}
                  >
                    <TableCell align="center">
                      <Typography
                        component="span"
                        variant="body2"
                        className={txAmountClass}
                      >
                        ${numberWithCommas(whale.amount.toFixed(0))}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography component="span" variant="body2">
                        {format(new Date(whale.date), 'M/d/yy p')}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Link
                        href={`https://bscscan.com/tx/${whale.hash}`}
                        color="inherit"
                        rel="noopener"
                        target="_blank"
                      >
                        Tx
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="caption">
                        <Link
                          color="inherit"
                          rel="noopener"
                          target="_blank"
                          href={`https://bscscan.com/token/${t}?a=${whale.address}`}
                        >
                          Logs
                        </Link>
                      </Typography>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default WhaleTracker
