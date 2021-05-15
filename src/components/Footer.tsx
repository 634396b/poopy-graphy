import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
  },
  heart: {
    color: red[900],
  },
}))
const addr = '0x6257d93ABdb970f1cB35EcB872CF9b13AE0d0459'
export default function Footer() {
  const classes = useStyles()
  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        style={{ maxWidth: 'unset' }}
        color="inherit"
        label={`${addr}`}
        icon={<FavoriteIcon className={classes.heart} />}
        href={`https://bscscan.com/address/${addr}`}
        target="_blank"
        rel="noopener"
      />
    </BottomNavigation>
  )
}
