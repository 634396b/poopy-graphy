import React from 'react'

import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import useCustomTheme from '$/styles/theme'
import PoopBar from '$/components/PoopBar'

import type { AppProps } from 'next/app'
import useRemoveSSR from 'src/hooks/useRemoveSSR'

function App({ Component, pageProps }: AppProps) {
  const [theme, toggleDarkMode] = useCustomTheme()
  useRemoveSSR()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PoopBar toggleDarkMode={toggleDarkMode} {...pageProps} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
