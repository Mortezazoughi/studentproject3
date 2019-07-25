import React, { Component } from "react";
import axios from "axios";
class StudentProfile extends Component {
  state = {
    student: []
  };

  componentDidMount() {
    const url = "http://localhost:8080/getStudent";
    axios
      .get(url)
      .then(data => {
        this.setState({
          student: data.body
        });
        console.log(data.body);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.student.map(details => (
          <div>
            <p>Blah</p>
            <p>{details.firstName} </p>
          </div>
        ))}
        <p>test</p>
      </div>
    );
  }
}

export default StudentProfile;
