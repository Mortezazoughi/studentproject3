import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import { Json } from "sequelize/types/lib/utils";
import axios from "axios";
class StudentSignup extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    campus: "",
    toDashboard: false
  };
  handleSubmit = e => {
    e.preventDefault();
    const URL = "http://localhost:8080/studentSignup";
    axios({
      method: "POST",
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
    })
      .then(res => {
        this.setState({
          status: res.status,
          toDashboard: true
        });
      })
      .catch(err => {
        // res.status(500).json({ message: "Server errors".err });
        console.log(err);
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/StudentProfile" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name: </label>
        <input
          value={this.state.firstName}
          name="firstName"
          placeholder="Enter first name"
          onChange={this.handleChange}
          type="text"
        />
        <br />
        <label>Last Name: </label>
        <input
          value={this.state.lastName}
          name="lastName"
          placeholder="Enter last name"
          onChange={this.handleChange}
          type="text"
        />
        <br />
        <label>Phone : </label>
        <input
          value={this.state.phoneNumber}
          name="phoneNumber"
          placeholder="Enter phone"
          onChange={this.handleChange}
          type="text"
        />
        <br />
        <label>Email: </label>
        <input
          value={this.state.email}
          name="email"
          placeholder="Enter Email"
          onChange={this.handleChange}
          type="email"
        />
        <br />
        <label>Campus: </label>
        <input
          value={this.state.campus}
          name="campus"
          placeholder="Enter campus"
          onChange={this.handleChange}
          type="text"
        />
        <br />
        <label>Password: </label>
        <input
          value={this.state.password}
          name="password"
          placeholder="Enter password"
          onChange={this.handleChange}
          type="password"
        />
        <br />
        <label>Confirm Password: </label>
        <input
          value={this.state.confirmPassword}
          name="confirmPassword"
          placeholder="Enter Confirm Password"
          onChange={this.handleChange}
          type="password"
        />
        <br />
        <button>Register</button>
        <button>Cancel</button>
      </form>
    );
  }
}

export default StudentSignup;
