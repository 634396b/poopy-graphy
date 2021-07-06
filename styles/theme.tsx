import brown from '@material-ui/core/colors/brown'
import { useState } from 'react'
import { createTheme } from '@material-ui/core/styles'
import useLocalStorage from 'react-use/lib/useLocalStorage'

export const palette = {
  primary: {
    main: brown[500],
  },
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
  const appTheme = createTheme({
    palette: {
      ...palette,
      type: isDarkMode,
    },
  })
  return [appTheme, toggleDarkMode] as const
}
export default useCustomTheme
