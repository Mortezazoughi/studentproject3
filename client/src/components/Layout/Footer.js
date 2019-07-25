import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '75px',
    color: 'white'
  },
  main: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: '0',
    backgroundColor: '	#050596'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm" />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Copyright 2019</Typography>
          <Typography variant="body2" style={{ fontSize: '2rem' }}>
            Ron & Morteza
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
