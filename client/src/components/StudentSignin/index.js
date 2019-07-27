<<<<<<< HEAD
import React, { Component, useState } from 'react';
import axios from 'axios';
=======
import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
>>>>>>> master

class StudentSignin extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log(this.state.email);
  };
  handleSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:8080/signIn',
      data: {
        email: this.state.email,
        pass: this.state.password
      }
    })
      .then(res => {
<<<<<<< HEAD
        console.log(res.data);
        // <Redirect to="/StudentProfile" />
=======
        localStorage.setItem("token", res.data.token);

        // <Redirect to="/StudentProfile" />;
>>>>>>> b700fb429ac2537241340ec0bb7d7c3b65c6fb2a
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            type="text"
            placeholder="email"
          />
          <input
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default StudentSignin;
