import React from 'react'

import useLove from '$/ui/hooks/useLove'

import FavoriteIcon from '@material-ui/icons/Favorite'
import Grow from '@material-ui/core/Grow'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => {
  return {
    loved: {
      transform: 'scale(12) translate(-30%, 75%)',
      transition: 'all 1s',
      zIndex: 9999,
    },
    notLoved: {
      transform: 'scale(1)',
      transition: 'all 1s',
      zIndex: 9999,
    },
    iconButton: {
      margin: '1px',
    },
  }
})
const Love = () => {
  const classes = useStyles()
  const [loved, loveCount, handleLove] = useLove()

  return (
    <Grow in={!loved}>
      <IconButton
        disabled={loveCount > 5}
        onClick={handleLove as () => void}
        edge="start"
        aria-label="Love me"
        className={classes.iconButton}
      >
        <FavoriteIcon
          className={loveCount > 5 ? classes.loved : classes.notLoved}
          color={loveCount > 5 ? 'secondary' : 'inherit'}
        />
      </IconButton>
    </Grow>
  )
}

export default Love
