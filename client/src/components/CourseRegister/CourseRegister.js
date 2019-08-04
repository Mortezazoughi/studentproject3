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
  }
}));

class CourseRegister extends Component {
  state = {
    availableCourses: [],
    errors: []
  };

  async componentWillMount() {
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
    // console.log("logged outpur", results.data);
    this.setState({
      availableCourses: results.data
    });
    return results;
  }
  handleSubmit = async e => {
    e.preventDefault();

    let results;
    try {
      // const URL = `http://localhost:8080/${course_id}`;
      results = await Axios({
        url: URL,
        method: 'POST',
        data: {
          course_id: this.state.course_id
        }
      }).catch(err => console.log('erors from client', err));
    } catch (error) {
      console.log('inside errorsz', error);
      console.log(error);
      this.setState({
        errors: error
      });
    }
  };
  registarClass = async c_id => {
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
    return this.state.availableCourses.map(eachCourse => (
      <Paper className={makeStyles.root}>
        <Table className={makeStyles.table}>
          <TableHead>
            <TableRow>
              <TableCell>{this.state.error}</TableCell>
            </TableRow>
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
            <TableRow key={eachCourse.id}>
              <TableCell component="th" scope="row">
                {eachCourse.courseName}
              </TableCell>
              <TableCell align="right">{eachCourse.level}</TableCell>
              <TableCell align="right">{eachCourse.prereq}</TableCell>
              <TableCell align="right">{eachCourse.availableseats}</TableCell>
              <TableCell align="right">
                {
                  <button onClick={() => this.registarClass(eachCourse.id)}>
                    Register
                  </button>
                }
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      // <div key={eachCourse.id}>
      //   <tr>
      //     <td>{eachCourse.id}</td>
      //     <td>{eachCourse.courseName}</td>

      //     <td>{eachCourse.level}</td>
      //     <td>{eachCourse.prereq}</td>
      //     <td>{eachCourse.availableseats}</td>
      //     <td>
      //       <button onClick={() => this.registarClass(eachCourse.id)}>
      //         Register
      //       </button>
      //     </td>
      //   </tr>
      // </div>
    ));
  };
  render() {
    console.log('inside render', this.state.errors);
    return (
      <div>
        <div>
          <h1 id="title">Register for class</h1>
          <h4>{this.state.errors}</h4>
          <table id="students">
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
        {/* <RegisterForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        /> */}
      </div>
    );
  }
}

export default CourseRegister;
