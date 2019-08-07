import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import Axios from 'axios';
import Auth from '../Auth';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

class StudentProfile extends Component {
  state = {
    student: {},
    classes: [],
    toSignIn: false
  };
  componentDidMount() {
    this.studentData();
    this.mycoursesandprof();
  }
  studentData = () => {
    const userid = localStorage.getItem('id');

    if (!userid) return this.props.history.push('/StudentLogin');

    const URL = `http://localhost:8080/studentinfo/${userid}`;
    Axios({
      url: URL,
      method: 'GET'
    })
      .then(res => {
        this.setState({
          student: res.data
        });
        console.log('This is wher to get courses');
      })
      .catch(err => console.log(err));
  };
  registeredCourses = () => {
    const userid = localStorage.getItem('id');
    const URL = `http://localhost:8080/registeredcourses/${userid}`;
    Axios({
      url: URL,
      method: 'GET'
    })
      .then(res => {
        console.log('This is registered courses data', res.data);
        this.setState({
          classes: res.data
        });
      })
      .catch(err => console.log(err));
  };

  mycoursesandprof = () => {
    console.log('Inside coursesandprof');
    const userid = localStorage.getItem('id');
    const URL = `http://localhost:8080/mycoursesandprof/${userid}`;
    console.log(userid);
    Axios({
      url: URL,
      method: 'GET'
    })
      .then(res => {
        this.setState({
          classes: res.data
        });
      })
      .catch(err => {
        console.log('Inside catch');
        console.log(err);
      });
  };
  render() {
    let ob = this.state.classes;
    let arr = [];
    if (ob)
      for (var i = 0; i < ob.length; i++) {
        arr.push(ob[i].Course.courseName);
      }
    else {
      console.log('nothing here');
    }

    return (
      <div className={makeStyles.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} style={{ fontSize: '1.5rem' }}>
            <Paper
              className={makeStyles.paper}
              style={{ backgroundColor: '#ecebd7' }}
            >
              <p>First Name: {this.state.student.firstName}</p>
              <p>Last Name: {this.state.student.lastName}</p>
              <p> email: {this.state.student.email}</p>
              <p> phone: {this.state.student.phoneNumber}</p>
            </Paper>
          </Grid>
          <Grid item xs={6} style={{ fontSize: '1.5rem' }}>
            <Paper
              className={makeStyles.paper}
              style={{ backgroundColor: '#ecebd7' }}
            >
              <p> Courses Registered this semester: </p>

              {arr.map((course, i) => (
                <p key={i}>{course}</p>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(StudentProfile);
