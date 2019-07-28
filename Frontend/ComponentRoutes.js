import React, { Component } from 'react';
import LogIn from './LogIn.js';
import SignUp from './StudentSignUp.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/LogIn" component={LogIn} />
        <Route path="/SignUp" component={SignUp} />
      </Router>
    );
  }
}
export default App;
