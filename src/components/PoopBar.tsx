import AppBar from '@material-ui/core/AppBar'
import BrightnessIcon from '@material-ui/icons/Brightness6'
import Favorite from '@material-ui/icons/Favorite'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
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
          color="inherit"
          aria-label="menu"
        >
          <Typography component="span" variant="h6">
            <Favorite />
          </Typography>
        </IconButton>
        <div className={classes.menuButton}></div>
        <IconButton
          onClick={() => toggleDarkMode()}
          color="inherit"
          aria-label="menu"
        >
          <BrightnessIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default withTheme(PoopBar)
