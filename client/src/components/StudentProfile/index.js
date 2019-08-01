import React, { Component, Redirect } from "react";
import jwt from "jsonwebtoken";
import Axios from "axios";
import Auth from "../Auth";

class StudentProfile extends Component {
  state = {
    student: {},
    classes: [],
    toSignIn: false
  };
  componentDidMount() {
    this.studentData();
    this.registeredCourses();
  }
  studentData = () => {
    const userid = localStorage.getItem("id");

    const URL = `http://localhost:8080/studentinfo/${userid}`;
    Axios({
      url: URL,
      method: "GET"
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          student: res.data
        });
      })
      .catch(err => console.log(err));
  };

  registeredCourses = () => {
    const userid = localStorage.getItem("id");
    const URL = `http://localhost:8080/registeredcourses/${userid}`;
    Axios({
      url: URL,
      method: "GET"
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          registered: res.data
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <div>
          <p>
            Name {this.state.student.firstName} {this.state.student.lastName}
          </p>
          <p> Campus: {this.state.student.campus}</p>
          <p> email:{this.state.student.email}</p>
          <p> phone: {this.state.student.phoneNumber}</p>
        </div>
        <div>
          <h4>Courses Registered</h4>
          {this.state.classes.map(coursez => (
            <div>
              <tr>
                <p>HEllo</p>
                <td> {coursez.id}</td>
              </tr>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentProfile;
