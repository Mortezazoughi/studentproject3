import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import StudentLoginModal from '../Modals/StudentSinginModal.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    width: '100%',
    height: '100%',
    paddingRight: '10%',
    paddingLeft: '8%'
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  title: {
    flexGrow: 1,
    fontSize: '6rem'
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: '#055e86'
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
    color: 'textPrimary',
    paddingRight: '10%'
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '45%'
  }
}));

export default function MainPage() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        style={{
          height: '20%',
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

          {/* <StudentLoginModal /> */}

          <ul className={classes.ul}>
            <li>
              <a href="./StudentLogin" style={{ fontSize: '3rem' }}>
                Students {'  |  '}
              </a>
            </li>

            <li>
              <a href="./ProfLogin" style={{ fontSize: '3rem' }}>
                {' | '} Faculty
              </a>
            </li>
          </ul>
        </Toolbar>
      </AppBar>

      <main className={classes.content} style={{ marginTop: '7%' }}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Card One */}
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardHeader title="Government Relations" />
                  <CardMedia
                    className={classes.media}
                    image="https://t3.ftcdn.net/jpg/02/24/27/58/240_F_224275849_TziHhEKjdF5QtTVOZrTrqiqkKPYWClCV.jpg"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Working with government and private partners, Apogee
                      University is commited to enriching the lives of students
                      for a brighter future .
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            {/* Card Two */}
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardHeader title="Majors and Degrees" />
                  <CardMedia
                    className={classes.media}
                    image="https://www.framingham.edu/Assets/uploads/images/homepage/lg/move-in-day-aug-2018.jpg"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Apogee University offers a wide variety of technologically
                      focused degrees. Explore the more than 130 majors and
                      minors available.
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            {/* Card Three */}
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardHeader title="Admission" />
                  <CardMedia
                    className={classes.media}
                    image="https://poetsandquantsforundergrads.com/wp-content/uploads/2018/04/Admission.jpg"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Our streamline admission process considers your academic
                      background as well as your pursuits and interests outside
                      the classroom as a whole.
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            {/* Card Four */}
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardHeader title="Prospective Students" />
                  <CardMedia
                    className={classes.media}
                    image="https://www.leeds.ac.uk/images/International_students_2.jpg"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Choosing the right college can be complex. Learn more
                      about Apogee University's academics, admissions, campus
                      life, costs, and financial aid.
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            {/* Card Five */}
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardHeader title="Research" />
                  <CardMedia
                    className={classes.media}
                    image="http://i2.walesonline.co.uk/incoming/article6282481.ece/ALTERNATES/s615/JS28508821.jpg"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      In Apogee University, breaking down barriers and
                      collaborating on research at the intersection of
                      disciplines is our focus.
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            {/* Card Six */}
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardHeader title="Alumni" />
                  <CardMedia
                    className={classes.media}
                    image="https://www.msmc.edu/image.axd/d0fe33a614924659b0350684b10a42d2.jpg"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      At Apogee University, we connecting our global network of
                      alumni through events, volunteer opportunities, and career
                      help as well as mentorship.
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
