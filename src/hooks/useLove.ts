import React from 'react'

const useLove = () => {
  const [loved, setLoved] = React.useState(false)
  const [loveCount, setLoveCount] = React.useState(0)
  const handleLove = () => {
    setLoved(true)
  }
  React.useEffect(() => {
    if (loved) {
      setTimeout(() => {
        setLoved(false)
        setLoveCount((p) => p + 1)
      }, 200)
    }

    if (loveCount > 5) {
      setTimeout(() => {
        setLoveCount(0)
      }, 2500)
    }
  }, [loved, loveCount])

  return [loved, loveCount, handleLove]
}

export default useLove
