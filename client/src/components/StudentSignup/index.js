
import React, { Component, Children } from "react";
import { Redirect } from "react-router-dom";
import Student from "./Student";
import Errors from "../Errors";

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

    toDashboard: false,
    errors: ""

  };
  //   <StudentProfileInfo.Provider value= {{this.state.email}}>

  //   <StudentInfo />
  //   {Children}
  // </StudentProfileInfo.Provider>
  handleSubmit = async e => {
    e.preventDefault();

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
      console.log("my localstorage", results.data.message.id);
      localStorage.setItem("id", results.data.message.id);

      console.log("localStorage id ", localStorage);
      this.setState({
        toDashboard: true
      });

      return results;
    } catch (error) {
      console.log("inside erros", error);
      console.log(error);
      this.setState({
        errors: error

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
