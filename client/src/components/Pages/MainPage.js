import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import CourseModal from './CourseModal';
// import Registration from './Registration';
// import LoginModal from './LoginModal.js';
// import ModalSignUp from './Modal.js';
import Button from '@material-ui/core/Button';
import StudentLoginModal from '../Modals/StudentSinginModal.js';

const drawerWidth = 240;

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

  appBar: {
    zIndex: theme.zIndex.drawer + 1
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
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
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

export default function MainPage() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
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

          {/* <StudentLoginModal /> */}

          <ul className={classes.ul}>
            <li>
              <a href="./StudentLogin">Students {'  |  '}</a>
            </li>

            <li>
              <a href="#">{' | '} Faculty</a>
            </li>
          </ul>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} style={{ marginTop: '5%' }}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <h1>This is the display for campus information</h1>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <h1>This is the information for university</h1>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1>This is the information for campus activities</h1>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
