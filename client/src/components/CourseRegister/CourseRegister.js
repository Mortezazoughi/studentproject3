import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import Axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650,
    fontWeight: 600
  },
  Button: {
    margin: theme.spacing(1)
  }
}));

class CourseRegister extends Component {
  state = {
    availableCourses: [],
    errors: []
  };

  async componentWillMount() {
    // this.setState(this.state.availableCourses);
    const URL = 'http://localhost:8080/searchallcourses';
    let results;
    try {
      results = await Axios({
        url: URL,
        method: 'GET'
      }).catch(err => console.log('ERRROSS', err));
    } catch (error) {
      console.log({ error: error });
      this.setState({ errors: error });
    }
    this.setState({
      availableCourses: results.data
    });
    this.forceUpdate();
    return results;
  }

  registerClass = async c_id => {
    const studentId = JSON.parse(localStorage.getItem('id'));
    let results;
    try {
      const URL = `http://localhost:8080/registerforclass/${c_id}/${studentId}`;
      results = await Axios({
        url: URL,
        method: 'POST',
        data: {
          student_id: studentId,
          course_id: c_id
        }
      });
      return results;
    } catch (error) {
      this.setState({
        errors: error.response.data.message
      });
    }
  };
  renderTableData = () => {
    return (
      <Paper className={makeStyles.root}>
        <Table className={makeStyles.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 900 }}>Name</TableCell>
              <TableCell align="right" style={{ fontWeight: 900 }}>
                Level
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 900 }}>
                Pre-Requisit
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 900 }}>
                available Seats
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 900 }}>
                Register
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.availableCourses.map(eachCourse => (
              <TableRow key={eachCourse.id}>
                <TableCell scope="row">{eachCourse.courseName}</TableCell>
                <TableCell align="right">{eachCourse.level}</TableCell>
                <TableCell align="right">{eachCourse.prereq}</TableCell>
                <TableCell align="right">{eachCourse.availableseats}</TableCell>
                <TableCell align="right">
                  {
                    <button
                      style={{ backgroundColor: '#2196f3', color: 'white' }}
                      onClick={() => this.registerClass(eachCourse.id)}
                    >
                      Register
                    </button>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  };
  render() {
    return (
      <div>
        <div>
          <h4 style={{ fontSize: '1.5rem', color: 'red' }}>
            {this.state.errors}
          </h4>
          <table id="students">
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CourseRegister;
