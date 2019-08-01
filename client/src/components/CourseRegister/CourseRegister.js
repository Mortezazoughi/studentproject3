import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import Axios from 'axios';
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
    console.log('Course ID from register button', typeof c_id);
    const studentId = JSON.parse(localStorage.getItem('id'));
    console.log('********* STUDENT ID from local storage! ', typeof studentId);

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
      console.log({ error: error });
    }
  };
  renderTableData = () => {
    return this.state.availableCourses.map(eachCourse => (
      <div key={eachCourse.id}>
        <tr>
          <td>{eachCourse.id}</td>
          <td>{eachCourse.courseName}</td>
          <td>{eachCourse.courseName}</td>
          <td>{eachCourse.level}</td>
          <td>{eachCourse.prereq}</td>
          <td>{eachCourse.availableseats}</td>
          <td>
            <button onClick={() => this.registarClass(eachCourse.id)}>
              Register
            </button>
          </td>
        </tr>
      </div>
    ));
  };
  render() {
    console.log('inside render', this.state.errors);
    return (
      <div>
        <div>
          <h1 id="title">Register for class</h1>
          <table id="students">
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
        <RegisterForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default CourseRegister;
