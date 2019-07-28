import React, { Component } from 'react';
import axios from 'axios';
import './Signup.css';
import { MenuToggle } from './Main.js';
// import './Main.js';

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { fname, lname, email, password } = this.state;

    axios.post('/', { fname, lname, email, password }).then(result => {
      console.log(result);
    });
  };

  render() {
    const { fname, lname, email, password } = this.state;
    return (
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h2>Create An Account</h2>
            <span>Please enter your information for registration</span>
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              value={fname}
              onChange={this.onChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              value={lname}
              onChange={this.onChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Please sign in to manage your account</p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 style={{ fontSize: '3 rem' }}>Welcome!</h1>
              <p>Enter your information to create an account</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
