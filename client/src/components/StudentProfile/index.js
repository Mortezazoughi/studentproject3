import React, { Component, Redirect } from "react";
import jwt from "jsonwebtoken";
import Axios from "axios";
// function StudentProfile(props) {}
class StudentProfile extends Component {
  state = {
    student: {},
    toSignIn: false
  };

  componentDidMount() {
    const userid = localStorage.getItem("id");
    // console.log(userid);
    const URL = `http://localhost:8080/studentinfo/${userid}`;
    Axios({
      url: URL,
      method: "GET"
    })
      .then(res => {
        // console.log("i am here");
        console.log(res.data);
        this.setState({
          student: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p>
          Name {this.state.student.firstName} {this.state.student.lastName}
        </p>

        <p> email{this.state.student.email}</p>
        <p> phone {this.state.student.phoneNumber}</p>
      </div>
    );
  }
}

export default StudentProfile;
