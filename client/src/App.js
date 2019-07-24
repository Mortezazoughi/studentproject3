import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import CourseRegister from "../src/components/CourseRegister/CourseRegister";
import ProfSignin from "../src/components/ProfSignin/ProfSignin";
import ProfSignup from "./components/ProfSignup/ProfSignup";
import StudentSignin from "./components/StudentSignin";
import StudentSignup from "./components/StudentSignup";
import Grid from "@material-ui/core/Grid";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Grid container spacing={3} />
      <Router>
        <div>
          <Navbar />
        </div>
        <div>
          <ul>
            <li>
              <Link to="/profsignup"> Prof sign up</Link>
            </li>
            <li>
              <Link to="/profsignin"> Prof sign in</Link>
            </li>
            <li>
              <Link to="/studentsignin"> Student Sign in</Link>
            </li>
            <li>
              <Link to="/studentsignup"> Student sign up</Link>
            </li>
            <li>
              <Link to="/courseregister"> Course register</Link>
            </li>
            <hr />
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/profsignup" component={ProfSignup} />
            <Route path="/profsignin" component={ProfSignin} />
            <Route path="/studentsignin" component={StudentSignin} />
            <Route path="/studentsignup" component={StudentSignup} />
            <Route path="/courseregister" component={CourseRegister} />
            {/* <CourseRegister />
        <ProfSignin />
        <ProfSignup />
        <StudentSignin />
        <StudentSignup /> */}
          </ul>
        </div>
        <p> Test</p>
      </Router>
      <Grid container spacing={1} />
    </div>
  );
}

export default App;
