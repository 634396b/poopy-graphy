import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/AttachMoney'
const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
  },
  heart: {},
}))
export default function Footer() {
  const classes = useStyles()
  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        style={{ maxWidth: 'unset' }}
        color="inherit"
        label={`Non-KYC Exchange`}
        icon={<FavoriteIcon className={classes.heart} />}
        href={`https://www.coinex.com/register?refer_code=r7cy2`}
        target="_blank"
        rel="noopener"
      />
    </BottomNavigation>
  )
}
