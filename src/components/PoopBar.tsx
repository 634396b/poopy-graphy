import AppBar from '@material-ui/core/AppBar'
import BrightnessIcon from '@material-ui/icons/Brightness6'
import FavoriteIcon from '@material-ui/icons/Favorite'
import GitHubIcon from '@material-ui/icons/GitHub'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'
import withTheme from '@material-ui/styles/withTheme'
import useCopyToClipboard from 'react-use/lib/useCopyToClipboard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'around',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
    textAlign: 'left',
  },
}))
const addr = '0x6257d93ABdb970f1cB35EcB872CF9b13AE0d0459'
function PoopBar({ toggleDarkMode, theme }: any) {
  const classes = useStyles()
  const [state, copyToClipboard] = useCopyToClipboard()
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          onClick={(_) => copyToClipboard(addr)}
          edge="start"
          aria-label="love"
        >
          <FavoriteIcon />
        </IconButton>
        <div className={classes.menuButton}></div>
        <IconButton
          onClick={() => toggleDarkMode()}
          aria-label="brightness"
          edge="start"
        >
          <BrightnessIcon />
        </IconButton>
        <IconButton
          aria-label="github"
          href="https://github.com/634396b/poopy-graphy"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default withTheme(PoopBar)
