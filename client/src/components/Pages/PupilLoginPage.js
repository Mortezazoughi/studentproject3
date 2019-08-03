import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import StudentSignin from '../StudentSignin';
import StudentSignup from '../StudentSignup';

import logo from './blue-glass-ball.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    width: '100%',
    height: '10vh',
    paddingRight: '15%',
    paddingLeft: '15%'
  },

  title: {
    flexGrow: 1,
    fontSize: '3rem'
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: '1%'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: '#aeecf7'
  },
  fixedHeight: {
    height: 240
  },
  ul: {
    display: 'flex',
    verticalAlign: 'middle',
    fontSize: '2em',
    fontWeight: 'normal',
    listStyleType: 'none'
  },
  li: {
    display: 'inline',
    paddingRight: '10%'
  }
}));

function SLoginPage() {
  const [ShowForm, setShowForm] = useState(true);
  const buttonText = ShowForm ? 'Sign Up' : 'Already Have Account';

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Apogee University
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <Paper className={classes.paper}>
                <img src={logo} alt="Logo" />
              </Paper>
            </Grid>
            <Grid item xs={7}>
              <Paper className={classes.paper}>
                <button onClick={() => setShowForm(!ShowForm)}>
                  {buttonText}
                </button>
                {ShowForm ? <StudentSignin /> : <StudentSignup />}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default SLoginPage;
