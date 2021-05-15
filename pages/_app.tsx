import '../styles/global.css'
import type { AppProps } from 'next/app'

import React from 'react'
import { useRouter } from 'next/router'
import useCustomTheme from '$/styles/theme'
import Footer from '$/ui/components/Footer'
import PoopBar from '$/ui/components/PoopBar'
import useRemoveSSR from '$/ui/hooks/useRemoveSSR'

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'
import * as gtag from '$/core/analytics/gtag'

function App({ Component, pageProps }: AppProps) {
  const [theme, toggleDarkMode] = useCustomTheme()
  const router = useRouter()
  useRemoveSSR()
  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  )
}

export default App
