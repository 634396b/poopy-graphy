import { useRouter } from 'next/router'
import AppBar from '@material-ui/core/AppBar'
import BrightnessIcon from '@material-ui/icons/Brightness6'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

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

function PoopBar({ toggleDarkMode }: any) {
  const classes = useStyles()
  const router = useRouter()
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          onClick={(_) => router.replace(`/`)}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <Typography component="span" variant="h6">
            💩
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

export default PoopBar
