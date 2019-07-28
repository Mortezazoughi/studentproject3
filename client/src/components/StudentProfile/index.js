import React, { Component } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import Axios from "axios";
// function StudentProfile(props) {}
class StudentProfile extends Component {
  state = {
    student: {}
  };
  // componentDidMount() {
  //   let usertoken = localStorage.getItem("token");
  //   var decoded = jwt.decode(usertoken);
  //   console.log("decoded", decoded);
  //   let config = {
  //     headers: {
  //       Authorization: "Bearer " + usertoken
  //     }
  //   };

  //   console.log({ usertoken });
  //   const url = `http://localhost:8080/studentinfo/${decoded.userId}`;
  //   axios
  //     .get(url, config)
  //     .then(data => {
  //       this.setState({
  //         student: data.data
  //       });
  //       console.log(data.data);
  //     })
  //     .catch(err => console.log(err));
  // }
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
