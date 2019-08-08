import React, { Component } from 'react';
import MainPage from '../Pages/MainPage.js';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
class SignOu extends Component {
  state = {};

  componentWillMount() {
    localStorage.clear('id');
  }
  render() {
    return (
      <div>
        <Switch>
          <Redirect from="/SignOut" to="/" />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default SignOu;
