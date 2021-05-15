import NextLink from 'next/link'
import Love from '$/ui/components/Love'

import AppBar from '@material-ui/core/AppBar'
import GitHubIcon from '@material-ui/icons/GitHub'
import HomeIcon from '@material-ui/icons/Home'
import Toolbar from '@material-ui/core/Toolbar'
import Grow from '@material-ui/core/Grow'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'around',
  },
  spacer: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
    textAlign: 'left',
  },
  iconButton: {
    margin: '1px',
  },
}))
function PoopBar() {
  const classes = useStyles()

  return (
    <Grow in={true}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <NextLink href="/" passHref>
            <IconButton
              aria-label="Brightness"
              edge="start"
              className={classes.iconButton}
            >
              <HomeIcon />
            </IconButton>
          </NextLink>
          <div className={classes.spacer}></div>
          <Love />
          <IconButton
            aria-label="Github Source"
            edge="start"
            rel="noopener"
            href="https://github.com/634396b/poopy-graphy"
            target="_blank"
            className={classes.iconButton}
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Grow>
  )
}

export default PoopBar
