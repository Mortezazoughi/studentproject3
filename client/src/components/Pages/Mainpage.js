import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../Layout/Header.js';

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

class Mainpage extends React.Component {
  state = {
    fields: {}
  };

  render() {
    return (
      <div>
        <Header />

        <div style={{ height: '30vh' }} />

        <div className={useStyles.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={makeStyles.paper} />
            </Grid>
            <Grid item xs={6}>
              <Paper className={useStyles.paper} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Mainpage;
