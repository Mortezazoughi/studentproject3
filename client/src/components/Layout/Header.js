import React from 'react';
// import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '10vh'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <header>
      <Typography variant="h3" className={classes.title}>
        University of Tech
      </Typography>
      <Button color="inherit" name="students" href="/LoginPage">
        Students
      </Button>
      <Button color="inherit" name="faculty" href="/Facultypage">
        Faculty
      </Button>
      {/* <NavLink to="/" exact>
        Students
      </NavLink>
      {'  '} | {'  '}
      <NavLink to="/">Faculty</NavLink> */}
    </header>
  );
}

export default Header;
