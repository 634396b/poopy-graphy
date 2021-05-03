import React from 'react'

/**
 *   Remove the server-side injected CSS.
 */
export function useRemoveSSR(): void {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])
}

export default useRemoveSSR
