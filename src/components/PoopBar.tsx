import AppBar from '@material-ui/core/AppBar'
import FavoriteIcon from '@material-ui/icons/Favorite'
import GitHubIcon from '@material-ui/icons/GitHub'
import HomeIcon from '@material-ui/icons/Home'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useCopyToClipboard from 'react-use/lib/useCopyToClipboard'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'around',
  },
  spacing: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
    textAlign: 'left',
  },
  iconButton: {
    margin: '1px',
  },
  flippedIcon: {
    transform: 'rotate(180deg)',
  },
}))
const addr = '0x6257d93ABdb970f1cB35EcB872CF9b13AE0d0459'
function PoopBar() {
  const classes = useStyles()
  const [state, copyToClipboard] = useCopyToClipboard()
  const router = useRouter()
  return (
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
        <div className={classes.spacing}></div>
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
        <IconButton
          onClick={(_) => copyToClipboard(addr)}
          edge="start"
          aria-label="Love me"
          className={classes.iconButton}
        >
          <FavoriteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default PoopBar
