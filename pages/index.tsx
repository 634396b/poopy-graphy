import type { GetServerSideProps } from 'next'

import React from 'react'

import NextLink from 'next/link'
import Head from 'next/head'

import ForwardIcon from '@material-ui/icons/Forward'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grow from '@material-ui/core/Grow'

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
        <title>Smart Chain, Dumb Tracker</title>
        <meta
          name="description"
          content="Whale spotting from the comfort of your home"
        />
      </Head>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper>
            <List component="nav">
              {Object.keys(tokens)?.map((contractHash: any) => {
                const symbol = tokens[contractHash]
                const whalePage = `/whales/${contractHash}`
                return (
                  <Grow in={true} key={contractHash} unmountOnExit>
                    <Grid container alignItems="center">
                      <NextLink href={whalePage} passHref>
                        <ListItem button component="a">
                          <Grid container item xs alignItems="center">
                            <Grid item xs={11}>
                              <Typography component="span" variant="h6">
                                {symbol}
                              </Typography>{' '}
                            </Grid>
                            <Grid item xs={12}>
                              <Typography component="span" variant="caption">
                                {contractHash}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={1}>
                            <ForwardIcon />
                          </Grid>
                        </ListItem>
                      </NextLink>
                    </Grid>
                  </Grow>
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
    revalidate: 60,
  }
}

export default Tokens
