import type { GetServerSideProps } from 'next'

import React from 'react'

import Head from 'next/head'
import ForwardIcon from '@material-ui/icons/Forward'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'

import redis from '$/core/redis'

type HashSymbol = string
interface TokenHashes {
  [ContractHash: string]: HashSymbol
}
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}))

function Tokens({ tokens }: { tokens: TokenHashes }) {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>BSC Whale Tracker</title>
        <meta
          name="description"
          content="Displays sells/buys on BSC tokens from the top wallets"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper>
            <List component="nav">
              {Object.keys(tokens)?.map((contractHash: any) => {
                const symbol = tokens[contractHash]
                const whalePage = `whales/${contractHash}`
                return (
                  <ListItem button component="a" href={whalePage}>
                    <ListItemText>{symbol}</ListItemText>
                    <ListItemIcon>
                      <ForwardIcon />
                    </ListItemIcon>
                  </ListItem>
                )
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  const tokens = await redis.hgetall('tokens')
  return {
    props: {
      tokens,
    },
    revalidate: 5,
  }
}

export default Tokens
