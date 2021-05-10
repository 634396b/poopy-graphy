import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import makeStyles from '@material-ui/styles/makeStyles'
import Table from '@material-ui/core/Table'
import format from 'date-fns/format'

import { numberWithCommas } from '$/core/util/strings'
import { getUTCDate } from '$/core/util/data'

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

function WhaleTracker({ whales, t }: any) {
  const classes = useStyles()

  return (
    <Grid container alignItems="stretch" className={classes.grid}>
      <Grid container item className={classes.grid}>
        <Paper className={classes.grid}>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">$</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Tx</TableCell>
                  <TableCell align="center">All Txs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {whales.map((whale: any) => {
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
                        <Typography component="span">${numberWithCommas(whale.amount.toFixed(2))}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        {format(getUTCDate(whale.date), 'MMM dd yyyy')}
                      </TableCell>
                      <TableCell align="center">
                        <Link href={`https://bscscan.com/tx/${whale.hash}`}>
                          Tx
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="caption">
                          <Link
                            rel="noopener"
                            target="_blank"
                            href={`https://bscscan.com/token/${t}?a=${whale.address}`}
                          >
                            Bscscan
                          </Link>
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Grid>
          {/* <Grid item container justify="center">
                
              </Grid> */}
        </Paper>
      </Grid>
      )
    </Grid>
  )
}

export default React.memo(WhaleTracker)
