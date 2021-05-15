import '../styles/global.css'
import type { AppProps } from 'next/app'

import React from 'react'

import useCustomTheme from '$/styles/theme'
import Footer from '$/ui/components/Footer'
import PoopBar from '$/ui/components/PoopBar'
import useRemoveSSR from '$/ui/hooks/useRemoveSSR'

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'
import { ThemeProvider } from '@material-ui/core/styles'

function App({ Component, pageProps }: AppProps) {
  const [theme, toggleDarkMode] = useCustomTheme()
  useRemoveSSR()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grow in={true}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
          wrap="nowrap"
          style={{ minHeight: '100%' }}
        >
          <Grid item xs={12}>
            <PoopBar {...pageProps} />
          </Grid>
          <Grid item xs={12}>
            <Component {...pageProps} />
          </Grid>
          <Grid item xs={12}>
            <Footer {...pageProps} />
          </Grid>
        </Grid>
      </Grow>
    </ThemeProvider>
  )
}

export default App
