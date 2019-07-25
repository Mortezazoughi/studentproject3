import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SchoolIcon from '@material-ui/icons/School';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  toolbar: theme.mixins.toolbar
}));

class Studentpage extends React.Component {
  // const makeStyles = useStyles();

  modalClick() {
    // event.preventDefault();
    console.log('You clicked me: ');
  }
  render() {
    return (
      <div className={makeStyles.root}>
        <CssBaseline />
        <AppBar position="fixed" className={makeStyles.appBar}>
          <Toolbar>
            <Typography variant="h3" noWrap style={{ textalign: 'center' }}>
              Tech University
            </Typography>
            <Typography variant="h3" noWrap style={{ align: 'right' }}>
              Welcome
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={makeStyles.drawer}
          variant="permanent"
          makeStyles={{
            paper: makeStyles.drawerPaper
          }}
        >
          <div style={{ height: '15vh' }} />
          <div className={makeStyles.toolbar} />
          <List>
            {['Profile', 'Grades', 'Transcript', 'Events'].map(
              (text, index) => (
                <ListItem button key={text} onClick={this.modalClick}>
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {['Register'].map((text, index) => (
              <ListItem button key={text} onClick={this.modalClick}>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <div>
                  <ListItemText primary={text} />
                </div>
              </ListItem>
            ))}
            <div>
              <Button color="primary" className={makeStyles.button}>
                Primary
              </Button>
            </div>
          </List>
        </Drawer>
        <main className={makeStyles.content}>
          <div className={makeStyles.toolbar} />
        </main>
      </div>
    );
  }
}

export default Studentpage;
