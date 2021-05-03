import '../styles/globals.css'

import React, { useEffect } from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { Badge, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Brightness from '@material-ui/icons/Brightness6'
import Poopy from '@material-ui/icons/BubbleChart'
import type { AppProps } from 'next/app'
import useCustomTheme from '@/styles/theme'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
}))
function App({ Component, pageProps }: AppProps) {
  const classes = useStyles()

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
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              color="inherit"
              variant="h6"
              className={classes.menuButton}
            >
              💩
            </Typography>
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
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
