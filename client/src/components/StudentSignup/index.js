import React, { Component, Children } from 'react';
import { Redirect } from 'react-router-dom';
import Student from './Student';

import axios from 'axios';
// const StudentProfileInfo = React.createContext();
class StudentSignup extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    campus: '',

    toDashboard: false,

    errors: []
  };

  handleSubmit = async e => {
    e.preventDefault();

    let results;
    try {
      const URL = 'http://localhost:8080/studentSignup';
      results = await axios({
        method: 'POST',
        url: URL,
        data: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phoneNumber: this.state.phoneNumber,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          campus: this.state.campus
        }
      });

      localStorage.setItem('id', results.data.message.id);
      this.setState({
        toDashboard: true
      });

      return results;
    } catch (error) {
      // populate the errors array so that we can display the errors on the screen
      console.log(error);
      this.setState({
        errors: error.response.data.error
      });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    if (this.state.toDashboard === true) {
      console.log('inside to Dashboard');
      return (
        // <Redirect to="/StudentProfile" />
        <Redirect
          to={{
            pathname: '/StudentProfile',
            state: {
              email: this.state.email
            }
          }}
        />
      );
    }
    return (
      <React.Fragment>
        {this.state.errors.map(error => (
          <p>{error}</p>
        ))}
        <Student
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
}

export default StudentSignup;
