import React, { Component } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
// function StudentProfile(props) {}
class StudentProfile extends Component {
  state = {
    student: {}
  };
<<<<<<< HEAD

  // componentDidMount() {
  //   const url = "http://localhost:8080/getStudent";
  //   axios
  //     .get(url)
  //     .then(data => {
  //       this.setState({
  //         student: data.body
  //       });
  //       console.log(data.body);
  //     })
  //     .catch(err => console.log(err));
  // }
=======
  componentDidMount() {
    let usertoken = localStorage.getItem("token");
    var decoded = jwt.decode(usertoken);
    console.log("decoded", decoded);
    let config = {
      headers: {
        Authorization: "Bearer " + usertoken
      }
    };

    console.log({ usertoken });
    const url = `http://localhost:8080/studentinfo/${decoded.userId}`;
    axios
      .get(url, config)
      .then(data => {
        this.setState({
          student: data.data
        });
        console.log(data.data);
      })
      .catch(err => console.log(err));
  }
>>>>>>> b700fb429ac2537241340ec0bb7d7c3b65c6fb2a

  render() {
    // console.log(this.props);
    return (
      <div>
<<<<<<< HEAD
        {/* {this.state.student.map(details => (
          <div>
            <p>Blah</p>
            <p>{details.firstName} </p>
            <p>testz</p>
          </div>
        ))} */}
=======
        <p> email{this.state.student.email}</p>

>>>>>>> b700fb429ac2537241340ec0bb7d7c3b65c6fb2a
        <p>testz</p>
      </div>
    );
  }
}

export default StudentProfile;
