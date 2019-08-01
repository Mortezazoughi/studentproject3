import React, { Component, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class StudentSignin extends Component {
  state = {
    email: '',
    password: '',
    id: '',
    toDashboard: false
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
        // console.log("I am data", res.data);
        // localStorage.setItem("token", res.data.token);
        localStorage.setItem('id', res.data);
        this.setState({
          toDashboard: true
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.toDashboard === true) {
      return (
        // <Redirect to="/StudentProfile" />
        <Redirect
          to={{
            pathname: '/StudentProfile',
            state: {
              email: this.state.email
            }
          }}
        />
      );
    }
    return (
      <div>
        <Form success onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              type="text"
              placeholder="joe@schmoe.com"
            />
          </Form.Field>
          <Form.Field>
            <label>Password: </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Field>
          <Button>Submit</Button>
        </Form>
      </div>
      // <div>
      //   <form onSubmit={this.handleSubmit}>
      //     <input
      //       value={this.state.email}
      //       onChange={this.handleChange}
      //       name="email"
      //       type="text"
      //       placeholder="email"
      //     />
      //     <input
      //       value={this.state.password}
      //       onChange={this.handleChange}
      //       name="password"
      //       type="password"
      //       placeholder="Password"
      //     />
      //     <button>submit</button>
      //     <a href="/"> Already have an account</a>
      //   </form>
      // </div>
    );
  }
}

export default StudentSignin;
