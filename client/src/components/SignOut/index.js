import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
class SignOu extends Component {
  state = {};

  componentWillMount() {
    localStorage.clear('id');
  }
  render() {
    return (
      <div>
        <Router>
          <Link to="/" />
          <p>YOU ARE SIGNED OUT</p>
        </Router>
      </div>
    );
  }
}

export default SignOu;
