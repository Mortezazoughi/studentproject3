<<<<<<< HEAD
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
=======
import React, { Component, Children } from "react";
import { Redirect } from "react-router-dom";
import Student from "./Student";
import Errors from "../Errors";
>>>>>>> b700fb429ac2537241340ec0bb7d7c3b65c6fb2a
// import { Json } from "sequelize/types/lib/utils";
import axios from "axios";
// const StudentProfileInfo = React.createContext();
class StudentSignup extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    campus: "",
<<<<<<< HEAD
    toDashboard: false
=======
    toDashboard: false,
    errors: ""
>>>>>>> b700fb429ac2537241340ec0bb7d7c3b65c6fb2a
  };
  //   <StudentProfileInfo.Provider value= {{this.state.email}}>

  //   <StudentInfo />
  //   {Children}
  // </StudentProfileInfo.Provider>
  handleSubmit = async e => {
    e.preventDefault();
<<<<<<< HEAD
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
=======
    let results;
    try {
      const URL = "http://localhost:8080/studentSignup";
      results = await axios({
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
      });
      this.setState({
        toDashboard: true
      });
      return results;
    } catch (error) {
      console.log("inside erros", error);
      console.log(error);
      this.setState({
        errors: error
>>>>>>> b700fb429ac2537241340ec0bb7d7c3b65c6fb2a
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
<<<<<<< HEAD
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
=======
    console.log("error state", this.state);
    console.log("error BLAH ", this.state.errors);
    console.log(this.state.toDashboard);
    if (this.state.toDashboard === true) {
      console.log("inside to Dashboard");
      return (
        // <Redirect to="/StudentProfile" />
        <Redirect
          to={{
            pathname: "/StudentProfile",
            state: {
              email: this.state.email
            }
          }}
>>>>>>> b700fb429ac2537241340ec0bb7d7c3b65c6fb2a
        />
      );
    }
    return (
      <div>
        <Student
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default StudentSignup;
