import { Typography, Grid } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  notFound: {
    fontSize: '5vw',
  },
}))

export default function Custom404() {
  const classes = useStyles()
  return (
    <Grid
      container
      style={{ height: '200px' }}
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12}>
        <Typography align="center" variant="h1" className={classes.notFound}>
          Tracking for this contract doesn't exist
        </Typography>
      </Grid>
    </Grid>
  )
}
