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
import StudentLoginModal from '../Modals/StudentSinginModal.js';
import StudentSignUpModal from '../Modals/StudentSignUpModal.js';
import StudentProfileModal from '../Modals/StudentProfileModal.js';
import StudentRegisterModal from '../Modals/StudentRegisterModal.js';
import CampusEvents from '../Events/CampusEvents.js';
import SLoginPage from './PupilLoginPage.js';
// import { fName, lName } from '../StudentProfile';

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
            Apogee University
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
            <Grid item xs={12} md={6} lg={7}>
              <Paper
                className={fixedHeightPaper}
                style={{ backgroundColor: '#9bd4e4' }}
              >
                <CampusEvents />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={5}>
              <Paper
                className={fixedHeightPaper}
                style={{ backgroundColor: '#9bd4e4' }}
              >
                <div style={{ backgroundColor: '#ecebd7' }}>
                  <p>
                    <span style={{ fontSize: '2rem', color: 'blue' }}>
                      Stop sharing YOUR existence. Put away the Instagram and
                      enjoy the view!
                    </span>
                    <p style={{ fontSize: '1.5rem' }}>
                      By Kaylee Johnson Campus News
                    </p>
                  </p>
                  <p style={{ fontSize: '1rem' }}>
                    I appear deeply pompous and disingenuous; no matter how hard
                    I try to be self-actualized, I flippantly fixate on lousy
                    photo angles and corny captions, as if any of it actually
                    matters. Look at my Instagram and you will see pictures of
                    me smiling on exoctic beaches in Mexico, petting stray dogs,
                    and swimming in breathtaking cenotes, but you will not see
                    the stories attached to them; none of them are candid or
                    authentic. I was in a constant state of apathy throughout
                    the entire trip, so those photos of me laughing on the beach
                    were painstakingly staged. Looking at the photos now, I see
                    dread and pressure in my eyes. It is the pressure that
                    leaves me perplexed, not the dread. All talented artists
                    have deep dread embedded in their eyes; they see the world
                    for the sick, soulless place that it truly is. But why do I
                    feel pressure to smile and put on a carefree bimbo facade
                    for my meaningless social media followers? Time is blurry in
                    general, but on social media it is nonexistent and everybody
                    seems to be drunk off of the power of floating through
                    society without being affected by the illusion of time, when
                    in reality the clockmaster is just momentarily humoring
                    them; he is sadistic and they are pathetically gullible. Two
                    subgroups of people viewed my Instagram stories while I was
                    in Mexico, in a flimsy red bathing suit that exposed my
                    perky breasts and untamed blond wavy hair: men that I had
                    once had feelings for, exes or almost lovers that maddened
                    me with their artistic mania and manipulation. Months of
                    mind games left me staring at my bathroom ceiling while I
                    lay nakedly in rose water baths trying to reconfigure my
                    identity time and time again; soaking in their resonating
                    lines like X-rated alphabet soup with traces of
                    hallucinogenic drugs, the secret ingredient, courtesy of the
                    chefs who were constantly pouring bleach into my porridge;
                    pruney fingers exhausted from stroking egos of broken men.
                    The other subgroup of viewers were shameless men that had
                    bullied me ruthlessly in high school, yet feel no guilt
                    gawking at pictures of me as a bold adult. They are stuck in
                    time; homecoming junior year. They are eternally seventeen,
                    and I am twisted in their warped schema of their glory days;
                    a timid teenager with a flower in my hair and a leather
                    journal in my hand; an archetype. I visited Chichen Itza,
                    one of the seven wonders of the world, while in Mexico,
                    hoping to feel some arousal of splendor, like the family
                    wearing matching plaid outfits with mouths agape on the tour
                    brochure. In reality, the parking lot of the historic Mayan
                    ruins archaeological site was filled with tour buses of
                    grotesque, greedy tourists carrying electric fans and
                    smartphones; completely out of touch with their
                    surroundings. The beautiful site with history oozing out of
                    it has been bastardized by “influencers” and social media
                    addicts wearing Coachella-esque outfits, trying to take the
                    perfect selfie for their robo followers. They too feel that
                    heavy, toxic pressure to prove that they are well-traveled
                    and enjoying their lives and not crying about an ex,
                    drowning in student loan debt, or dealing with mental health
                    problems; raw reality is just too much to handle on the
                    internet, a place that thrives off of lies, sexuality, and
                    escapism. If I post a picture of myself in a sheer shirt, it
                    will get twice as many likes as a picture of me reading a
                    newspaper. And the man that messages me at three o’clock in
                    the morning to tell me that I am a fantastic writer and a
                    “wild soul,” is not looking to talk about politics and
                    literature; everything has soft, but sexual undertones on
                    the internet after midnight. Lust with caution. If you want
                    to really enjoy your travels, turn off your phone. Social
                    media and narcissistic societal traditions have conditioned
                    you to believe that you are going to want to look back at
                    pictures of yourself years from now, and maybe you will, but
                    everything is done in excess now, and it is not only
                    unnecessary, it is unhealthy. Think about the purpose of the
                    photos before you take them: are they for you to remember
                    your experience, or to gain silicone validation from
                    strangers on the internet? And if you see confusion and
                    hollowness in your eyes while taking selfies, stop.
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
