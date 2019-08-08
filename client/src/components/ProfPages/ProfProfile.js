import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  table: {
    minWidth: 650,
    fontWeight: 600
  }
}));

export default function ProfProfile() {
  useEffect(() => {
    const storedprofid = localStorage.getItem('profid');
    getprofinfo(storedprofid);
    getallmycourses(storedprofid);
    // allstudentsregistered(storedprofid);
  }, []);

  const [profinforeturned, setprofinforeturned] = useState();
  const [profcourses, setprofcourses] = useState([]);
  const [allmystudents, setallmystudents] = useState([]);
  //get prof info
  const getprofinfo = async id => {
    let results;
    try {
      const URL = `http://localhost:8080/profprofile/${id}`;
      results = await Axios({
        method: 'GET',
        url: URL
      });

      setprofinforeturned(results.data);
    } catch (error) {
      console.log(error);
      return;
    }
    return;
  };
  //get all courses taught by prof
  const getallmycourses = async id => {
    let results;
    const URL = `http://localhost:8080/getmycourse/${id}`;
    try {
      results = await Axios({
        method: 'GET',
        url: URL
      });
      setprofcourses(results.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };
  //get all students signed up for my courses
  const allstudentsregistered = async id => {
    let results;
    const URL = ` http://localhost:8080/allstudentsregistered/${id}}`;

    try {
      results = await Axios({
        method: 'GET',
        url: URL
      });
      console.log(results.data[0]);
      setallmystudents(results.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };
  console.log(allmystudents);
  return (
    <div className={useStyles.root}>
      <Grid container spacing={3}>
        <Grid item xs={4} style={{ fontSize: '1.2rem' }}>
          <Paper
            className={useStyles.paper}
            style={{ backgroundColor: '#ecebd7' }}
          >
            {profinforeturned ? (
              <div>
                <p>First Name: {profinforeturned.firstName}</p>
                <p>Last Name: {profinforeturned.lastName}</p>
                <p> email: {profinforeturned.email}</p>
                <p> phone: {profinforeturned.phoneNumber}</p>
              </div>
            ) : null}
            ;
          </Paper>
        </Grid>
        <Grid item xs={8} style={{ fontSize: '1.5rem' }}>
          <Paper
            className={useStyles.paper}
            style={{ backgroundColor: '#ecebd7' }}
          >
            <p> Courses Teaching this semester: </p>
            <div>
              <Table className={useStyles.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="right" style={{ fontWeight: '900' }}>
                      Course Name
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: '900' }}>
                      Course Level
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: '900' }}>
                      Available Seats
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: '900' }}>
                      Course Start Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {profcourses.map(mycourse => (
                    <TableRow>
                      <TableCell scope="row">{mycourse.courseName}</TableCell>
                      <TableCell align="right">{mycourse.level}</TableCell>
                      <TableCell align="right">
                        {mycourse.availableseats}
                      </TableCell>
                      <TableCell align="right">{mycourse.startdate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {/* {profcourses.map(mycourse => (
                <div>
                  <p>Course Name: {mycourse.courseName}</p>
                  <p> Course Level: {mycourse.level}</p>
                  <p>Available Seats: {mycourse.availableseats}</p>
                  <p>Course Start Date: {mycourse.startdate}</p>
                </div>
              ))} */}
            </div>
          </Paper>
        </Grid>
      </Grid>
      {/* {profinforeturned ? (
          <div>
            <p> First Name:{profinforeturned.firstName}</p>
            <p> Last Name: {profinforeturned.firstName}</p>
            <p> Email: {profinforeturned.email}</p>
            <p> Campus {profinforeturned.campus}</p>
            </div>
        ) : null}
      
      
        {profcourses.map(mycourse => (
          <div>
            <p>Course Name: {mycourse.courseName}</p>
            <p> Course Level: {mycourse.level}</p>
            <p>Available Seats: {mycourse.availableseats}</p>
            <p>Pre-requisites: {mycourse.prereq}</p>
            <p>Course Start Date: {mycourse.startdate}</p>
            <p>Course End Date: {mycourse.enddate}</p>
            </div>
        ))}
      
      
        {allmystudents.map(allcourses => (
          <p>Meh:{allcourses.firstName}</p>
        ))}
        <p>BLah{allmystudents.firstName}</p> */}
    </div>
  );
}
