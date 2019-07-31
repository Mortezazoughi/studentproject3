import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import StudentLoginModal from '../Modals/StudentSinginModal.js';
import StudentSignUpModal from '../Modals/StudentSignUpModal.js';
import StudentProfileModal from '../Modals/StudentProfileModal.js';
import StudentRegisterModal from '../Modals/StudentRegisterModal.js';
import CampusEvents from '../Events/CampusEvents.js';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: '24px' // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },

  title: {
    flexGrow: 1
  },
  drawerPaper: {
    backgroundColor: '#3f51b5',
    color: '#fff',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
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
  }
}));

export default function Studenetpage() {
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
            <h1>Apogee University</h1>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper)
        }}
      >
        <Divider />
        <div style={{ marginTop: '25%', fontSize: '2rem' }}>
          <p>Welcome</p>
          <p>Student Page</p>
        </div>
        <div style={{ marginTop: '5vh' }} />
        {/* <Divider /> */}
        {/* <List>{mainListItems}</List>
				<Divider />
				<List>{secondaryListItems}</List> */}

        <div style={{ marginTop: '3vh' }} />
        <Button href="/" style={{ color: '#fff' }}>
          Home
        </Button>

        <div style={{ marginTop: '3vh' }} />
        <StudentProfileModal />

        <div style={{ marginTop: '3vh' }} />
        <StudentLoginModal />
        <div style={{ marginTop: '3vh' }} />
        <StudentSignUpModal />
        <div style={{ marginTop: '3vh' }} />
        <Divider />
        <div style={{ marginTop: '3vh' }} />
        <StudentRegisterModal />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <CampusEvents />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <h1>This is the second area</h1>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1>This is the third area of the Grid</h1>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
