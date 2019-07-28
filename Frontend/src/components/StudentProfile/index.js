import React, { Component } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
// function StudentProfile(props) {}
class StudentProfile extends Component {
  state = {
    student: {}
  };

  componentDidMount() {
    let usertoken = localStorage.getItem('token');
    var decoded = jwt.decode(usertoken);
    console.log('decoded', decoded);
    let config = {
      headers: {
        Authorization: 'Bearer ' + usertoken
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

  render() {
    // console.log(this.props);
    return (
      <div>
        <p> email{this.state.student.email}</p>

        <p>testz</p>
      </div>
    );
  }
}

export default StudentProfile;
