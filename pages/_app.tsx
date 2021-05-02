import '../styles/globals.css'

import React, { useEffect } from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Brightness from '@material-ui/icons/Brightness6'

import type { AppProps } from 'next/app'
import useCustomTheme from '@/styles/theme'

function App({ Component, pageProps }: AppProps) {
  const [theme, toggleDarkMode] = useCustomTheme()
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => toggleDarkMode()}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Brightness />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
