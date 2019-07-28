import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Databar from '../Databar/Databar.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>This is the first row</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Databar />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CenteredGrid;
