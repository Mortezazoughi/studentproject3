import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    isAuthenticated: false
  };

  login(cb) {
    this.state.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  }
  logout(cb) {
    this.state.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  }
  isAuthenticated() {
    return this.state.isAuthenticated;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.authenticate === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/StudentSignin" />
      )
    }
  />
);
export default { Auth, PrivateRoute };
