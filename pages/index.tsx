import React from 'react'
import { promises as fs } from 'fs'
import path from 'path'

import Head from 'next/head'
import type { GetStaticProps } from 'next'
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
} from '@material-ui/core'
import Icon from '@material-ui/icons/Forward'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}))

function Tokens(props: any) {
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
      <Grid item container xs={12} className={classes.root}>
        <Grid item xs={12}>
          <Paper>
            <List component="nav">
              {props?.tokens?.map((token: any) => {
                return (
                  <ListItem
                    button
                    component="a"
                    href={`whales/${token?.tokenAddress}`}
                  >
                    <ListItemText>{token?.symbol}</ListItemText>
                    <ListItemIcon>
                      <Icon />
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

export const getServerSideProps = async () => {
  const whalesDirectory = path.join(process.cwd(), 'whales')
  const filenames = await fs.readdir(whalesDirectory)

  const tokens = filenames.map(async (filename) => {
    if (filename.indexOf('.html') > -1 || filename.indexOf('[id]') > -1) {
      return null
    } else {
      const filePath = path.join(whalesDirectory, filename)
      const fileContents = JSON.parse(await fs.readFile(filePath, 'utf8'))
      const tokenAddress = filename.replace('.json', '')
      const symbol = fileContents?.pageProps?.symbol
      return {
        tokenAddress,
        symbol,
      }
    }
  })
  return {
    props: {
      tokens: (await Promise.all(tokens)).filter((t) => t !== null),
    },
  }
}

export default Tokens
