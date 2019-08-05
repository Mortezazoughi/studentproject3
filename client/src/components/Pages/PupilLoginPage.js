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
import Button from '@material-ui/core/Button';
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
    fontSize: '6rem'
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
  button: {
    margin: theme.spacing(1)
  }
}));

function SLoginPage() {
  const [ShowForm, setShowForm] = useState(true);
  const buttonText = ShowForm ? 'Sign Up' : 'Already Have Account';

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        style={{
          height: '12%',
          backgroundImage: 'url(./main-page-background4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Apogee University
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content} style={{ marginTop: '0.5vh' }}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Paper />
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: '20%', marginLeft: '41%' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => setShowForm(!ShowForm)}
                >
                  {buttonText}
                </Button>
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
