import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import Brightness from '@material-ui/icons/Brightness6'
import '../styles/globals.css'
import { brown, amber } from '@material-ui/core/colors'
function MyApp({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [overrideDarkMode, setMode] = React.useState(true)
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: brown,
          secondary: amber,
          type: overrideDarkMode === true ? 'dark' : 'light',
        },
      }),
    [overrideDarkMode]
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={(_) => setMode((m) => !m)}
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

export default MyApp
