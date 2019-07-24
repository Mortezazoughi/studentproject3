import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Studentpage from './components/Pages/Studentpage.js';
import Mainpage from './components/Pages/Mainpage.js';
import LoginPage from './components/Pages/LoginPage.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/LoginPage" component={LoginPage} />
        <Route exact path="/Studentpage" component={Studentpage} />
      </Router>
    );
  }
}

export default App;
