import React, { Component } from 'react';

class SignOu extends Component {
  state = {};

  componentWillMount() {
    localStorage.clear('id');
  }
  render() {
    return (
      <div>
        <p>YOU ARE SIGNED OUT</p>
      </div>
    );
  }
}

export default SignOu;
