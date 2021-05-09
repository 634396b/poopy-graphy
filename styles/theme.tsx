import brown from '@material-ui/core/colors/brown'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import { useMemo, useState } from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { useLocalStorage } from 'react-use'

export const palette = {
  primary: {
    main: brown[500],
  },
  buy: green[500],
  sell: red[500],
}
function useCustomTheme() {
  const [localDarkMode, _setLocalDarkMode, remove] = useLocalStorage('DarkMode')
  const [isDarkMode, _setDarkMode] = useState<'dark' | 'light'>(
    (localDarkMode as 'dark' | 'light') || 'dark'
  )
  const toggleDarkMode = () => {
    const mode = isDarkMode === 'dark' ? 'light' : 'dark'
    _setDarkMode(mode)
    _setLocalDarkMode(mode)
  }
  const appTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          ...palette,
          type: isDarkMode,
        },
      }),
    [isDarkMode]
  )
  return [appTheme, toggleDarkMode] as const
}
export default useCustomTheme
