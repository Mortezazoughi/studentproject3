import React, { Component } from "react";
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
  async componentDidMount() {
    const userid = localStorage.getItem("id");

    let results;
    try {
      results = await Axios.get(`http://localhost:8080/studentinfo/${userid}`);
    } catch (err) {
      console.log(err);
    }

    this.setState({
      student: results.data
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
