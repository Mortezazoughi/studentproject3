import React from 'react';
import clsx from 'clsx';
import { Button } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import StudentLoginModal from '../Modals/StudentSinginModal.js';
// import StudentSignUpModal from '../Modals/StudentSignUpModal.js';
import StudentProfileModal from '../Modals/StudentProfileModal.js';
import StudentRegisterModal from '../Modals/StudentRegisterModal.js';
import CampusEvents from '../Events/CampusEvents.js';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: '24px'
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
    flexGrow: 1,
    fontSize: '6rem'
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
    height: 600
  }
}));

export default function Studenetpage() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
            <a href="/">Apogee University</a>
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
        </div>
        <div style={{ marginTop: '5vh' }} />

        <div style={{ marginTop: '3vh' }} />
        <Button href="/SignOut" inverted>
          Signout
        </Button>

        <div style={{ marginTop: '3vh' }} />
        <StudentProfileModal />
        <div style={{ marginTop: '3vh' }} />
        <Divider />
        <div style={{ marginTop: '3vh' }} />
        <StudentRegisterModal />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container
          maxWidth="lg"
          className={classes.container}
          style={{ marginTop: '5%' }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={5}>
              <Paper
                className={fixedHeightPaper}
                style={{ backgroundColor: '#9bd4e4' }}
              >
                <CampusEvents />
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={7}>
              <Paper
                className={fixedHeightPaper}
                style={{ backgroundColor: '#9bd4e4' }}
              >
                <div style={{ backgroundColor: '#ecebd7' }}>
                  <p style={{ fontSize: '2.5rem', color: '#dd2c00' }}>
                    Time Management Tips for College Students
                  </p>
                  <p style={{ fontSize: '1rem' }}>
                    <p style={{ color: 'blue', fontSize: '2rem' }}>
                      Time Management Tips
                    </p>
                    <p style={{ fontSize: '1.2rem' }}>
                      Many universities offer time management techniques that
                      can help college students succeed in their classes. These
                      tips include eliminating procrastination, better
                      organizing daily activities, reducing anxiety and
                      increasing motivation and confidence. Dartmouth College
                      and Pennsylvania State University have outlined several
                      time management tips on their school websites.
                    </p>
                    <p
                      style={{
                        color: 'blue',
                        fontSize: '2rem'
                      }}
                    >
                      Get Organized
                    </p>
                    <p style={{ fontSize: '1.2rem' }}>
                      When developing time management techniques in college,
                      it's important that students first understand their goals
                      and then set out to develop and follow a routine schedule.
                      Without these factors, it may be hard for students to get
                      motivated to employ their time management strategies.
                      Students may download or purchase a scheduler; a weekly,
                      monthly and yearly planner; and worksheets pertaining to
                      the distribution and organization of one's tasks. This
                      will help them avoid waiting until the last minute and
                      having to cram. Many universities recommend that students
                      take the time to plan each school day. Making a daily list
                      of tasks to accomplish can help students to concentrate on
                      tasks one at a time. Individuals should be specific when
                      setting goals. For example, a student might want to set
                      the goal of reviewing his or her lecture notes each day
                      after classes. It can also be helpful to schedule fixed
                      blocks of time to study with clear start and stop times,
                      as well as specified break periods. Students can start
                      with more difficult subjects first and also work on
                      assignments or tests that are due first.
                    </p>
                    <p
                      style={{
                        color: 'blue',
                        fontSize: '2rem'
                      }}
                    >
                      Use Mental Exercises
                    </p>
                    <p style={{ fontSize: '1.2rem' }}>
                      Students should devise ways to build on their success,
                      keeping their long-term goals in mind when pursuing better
                      time management. Mental awareness can help with this.
                      Individuals should try to be mindful of when they're
                      falling into unproductive patterns and should identify
                      specific triggers or distractions that lead to
                      procrastination. Meditation and exercise might also help
                      some people clear their heads and help them build
                      confidence and focus when studying.
                    </p>
                    <p
                      style={{
                        color: 'blue',
                        fontSize: '2rem'
                      }}
                    />
                    <p style={{ fontSize: '1.2rem' }}>
                      Seek Help Students may look for advice from teachers,
                      coaches, mentors or peers on better time management
                      strategies. Individuals can also work with other
                      classmates who are on top of their assignments and willing
                      to provide reminders or encouragement.
                    </p>
                    <p
                      style={{
                        color: 'blue',
                        fontSize: '2rem'
                      }}
                    >
                      Avoid Common Time Wasters
                    </p>{' '}
                    <p style={{ fontSize: '1.2rem' }}>
                      Common threats to good time management habits are external
                      distractions. Students should seek to eliminate or at
                      least lessen these common distractions. Some common time
                      wasters include: Television Social media and Internet use
                      Phone conversations Running errands Commuting
                      Extracurricular activities Time management is key to
                      academic success and organizing and planning one's day and
                      tasks using mental exercises, seeking help and avoiding
                      time wasters are some helpful time management strategies
                      for college students.
                    </p>
                  </p>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
