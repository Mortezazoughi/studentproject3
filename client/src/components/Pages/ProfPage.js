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
import ProfProfileModal from '../Modals/ProfProfileModal.js';
import ProfCreateCourseModal from '../Modals/ProfCreateCourseModal.js';
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
  ul: {
    display: 'flex',
    verticalAlign: 'middle',
    fontSize: '2em',

    fontWeight: 'normal',
    listStyleType: 'none'
  },
  li: {
    display: 'inline',
    color: 'textPrimary'
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

export default function ProfPage() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        style={{
          height: '16%',
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
          <ul className={classes.ul}>
            <li>
              <a href="/" style={{ fontSize: '2rem' }}>
                Home
              </a>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper)
        }}
      >
        <Divider />
        <div style={{ marginTop: '25%' }}>
          <p style={{ fontSize: '3rem' }}>Welcome</p>
          <p style={{ fontSize: '2rem' }}>Professor</p>
        </div>
        <div style={{ marginTop: '5vh' }} />

        <div style={{ marginTop: '3vh' }} />
        <Button href="/SignOut" inverted>
          Signout
        </Button>

        <div style={{ marginTop: '3vh' }} />
        <ProfProfileModal />
        <div style={{ marginTop: '3vh' }} />
        <Divider />
        <div style={{ marginTop: '3vh' }} />
        <ProfCreateCourseModal />
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
                    New Faculty Orientation Features Advice from Students
                  </p>
                  <p style={{ fontSize: '1.6rem' }}>
                    As director of our faculty support center, one of my
                    responsibilities is to coordinate an orientation program for
                    new faculty. Years ago we decapitated the “talking head”
                    format of traditional orientation sessions and now try to
                    provide interactive sessions that introduce our new
                    colleagues to both our campus policies and our campus
                    culture. While the transition of most topics to the
                    interactive format has been easy, the session on the course
                    syllabus has remained relatively dry—until this year.
                  </p>
                  <p style={{ fontSize: '1.6rem' }}>
                    On most campuses there are a number of required policy
                    statements that must be included on all syllabi (e.g.,
                    disability accommodations, email policy, plagiarism policy,
                    and classroom decorum). All these requirements, while
                    necessary, support the traditional “contract” analogy of a
                    course syllabus. To return the personal touch to the
                    syllabus, our new faculty orientation session on the course
                    syllabus now features a Voices of Our Students video.
                  </p>
                  <p style={{ fontSize: '1.6rem' }}>
                    The video, actually created by one of our student interns,
                    provides a preview of student expectations through student
                    responses to a variety of prompts such as, “What one word
                    describes the most important characteristic for a professor?
                    Who is your favorite professor and why? What advice would
                    you give to a new professor?” Examples of student responses
                    are provided below.
                  </p>
                  <p style={{ fontSize: '1.6rem' }}>
                    When asked to give one word to describe a great professor,
                    our students replied:
                  </p>
                  <p style={{ fontSize: '1.6rem' }}>
                    .Honest
                    <br /> .Available
                    <br /> .Enthusiastic
                    <br /> .Understanding
                    <br /> .Relatable
                    <br />
                    .Engaging
                    <br /> .Invested
                    <br /> .Energetic
                    <br /> .Concerned
                    <br /> .Entertaining When asked why a professor was their
                    favorite, students offered a variety of reasons, such as:
                    <br /> .He motivates students every class meeting via video,
                    lecture, guest speaker, etc.
                    <br />
                    .She incorporates open discussion after the lecture.
                    <br /> .She always makes the lecture entertaining and the
                    class enjoyable.
                    <br /> .He is very straightforward—you know what to expect.
                    He connects what we’re learning to the real world.
                    <br /> .She is available to help outside the classroom.
                    <br /> .He treats each student as a person, not a number.
                    She takes a personal interest in students beyond the
                    classroom.
                    <br /> .He provides study tips and helps students when they
                    struggle.
                    <br /> .She provides detailed feedback when you miss points.
                    <br />
                    .She goes the extra mile to make sure you know what you need
                    to know.
                    <br /> .She uses challenging assignments to push students
                    beyond their comfort zone.
                    <br /> .He believes in students and helps them succeed!
                    <br /> .Students then offered faculty the following advice
                    on
                    <br />
                    how to become someone’s favorite professor:
                    <br /> .Use real-world examples in the classroom.
                    <br /> .Show students that you value them as people.
                    <br /> .Recognize and accommodate different learning styles.
                    <br /> .Be personal—share your story with students.
                    <br /> .Get feedback from students.
                    <br /> .Be available.
                    <br /> .Help struggling students.
                    <br /> .Be relatable—students want to connect with
                    professors on some level.
                    <br /> .Keep communication open.
                    <br /> .Offer virtual office hours if you teach online.
                    <br /> Do what you say and say what you do Hearing students’
                    responses to these prompts provides a natural segue to many
                    key elements of a course syllabus—office hours, course
                    requirements, classroom engagement, and student-professor
                    relationships—that we cover during faculty orientation. We
                    continue the conversation by stating, “Now that you’ve heard
                    students’ expectations, let’s talk about how you will meet
                    theirs and communicate yours!” The discussion is lively (and
                    often amusing) as faculty rebut some of the students’
                    comments. They’ve even suggested we produce a Voices of
                    Professors video and share it at student orientation! What
                    used to be a session of reading through the requirements is
                    now more of an open discussion on creative ways to
                    communicate expectations and engage with our students. Ideas
                    that surfaced during a recent discussion included: Using the
                    first day of class to model expectations. The use of a
                    content-based ice-breaker activity in which every student
                    has to speak sends the message that students are expected to
                    contribute in every class and that every class will be rich
                    with content. Using the first day of class to model
                    consequences. A colleague described an activity where one
                    student is selected to leave the room and then asked to
                    contribute to the discussion immediately upon returning to
                    the classroom. Of course, the student has no clue as to what
                    had been said, which serves as a powerful way to demonstrate
                    the importance of attendance and the impact of missing
                    class. Creating a short video or podcast and posting it on
                    the course website in the learning management system
                    (Blackboard, Moodle, etc.). Asking a successful student from
                    a previous semester to share tips on what to expect and how
                    to be successful—this could be via email, video, or guest
                    appearance. Leading an open discussion on the first day of
                    class to give current students some input on select syllabus
                    items. Repercussions of not “doing what you say” and failing
                    to follow course guidelines also bubble up in the
                    conversation and give credence to the university-required
                    components of a syllabus. Potential repercussions include:
                    Loss of respect from students Poor attendance Disengaged
                    students Poor performance from students Poor student
                    evaluations at the end of the course Student complaints that
                    reach the department head and upper administration Grade
                    challenges Poor annual evaluations from colleagues and/or
                    department head Developing a “do not take this professor”
                    reputation Incorporating the Voices of Our Students video
                    within the traditional session on course syllabi in new
                    faculty orientation has been a big success. It has prompted
                    rich discussions and helped faculty regain interest in and
                    ownership of their course syllabi. Now the creation of
                    course syllabi feels more like an opportunity than a
                    requirement.
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
