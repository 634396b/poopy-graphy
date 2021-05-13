import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import useCustomTheme from '$/styles/theme'
import PoopBar from '$/ui/components/PoopBar'

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
