import React, { Component } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import CourseRegister from "../src/components/CourseRegister/CourseRegister";
import ProfSignin from "../src/components/ProfPages/ProfSignin";
import ProfSignup from "./components/ProfPages/ProfSignup";
import ProfProfile from "./components/ProfPages/ProfProfile";
import StudentSignin from "./components/StudentSignin";
import StudentSignup from "./components/StudentSignup";
import SearchAllCourses from "./components/SearchAllCourses";
import Grid from "@material-ui/core/Grid";
import StudentProfile from "./components/StudentProfile";
import SearchTitle from "./components/SearchTitle";
import CreateCourse from "./components/ProfPages/CreateCourse";
import SignOut from "./components/SignOut";
import MainPage from "./components/Pages/MainPage.js";
import StudentPage from "./components/Pages/StudentPage.js";
import RegisteredStudents from "./components/ProfPages/RegisteredStudents.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import SLoginPage from "./components/Pages/PupilLoginPage.js";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/profsignup"> Prof sign up</Link>
            </li>
            <li>
              <Link to="/profsignin"> Prof sign in</Link>
            </li>
            <li>
              <Link to="/profprofile"> Prof profile</Link>
            </li>
            <li>
              <Link to="/StudentProfile"> Student Profile</Link>
            </li>
            <li>
              <Link to="/SearchTitle"> Search Title</Link>
            </li>
            <li>
              <Link to="/CreateCourse"> Create Course</Link>
            </li>
            <li>
              <Link to="/studentsignin"> Student Sign in</Link>
            </li>
            <li>
              <Link to="/StudentProfile"> Student Profile</Link>
            </li>
            <li>
              <Link to="/SignOut"> Sign Out</Link>
            </li>
            <li>
              <Link to="/allstudentsregistered"> RegisteredStudents</Link>
            </li>
            <hr />
          </ul>
        </div>

        <Switch>
          <Route exact path="/profsignup" component={ProfSignup} />
          <Route exact path="/profsignin" component={ProfSignin} />
          <Route exact path="/profprofile" component={ProfProfile} />
          <Route exact path="/studentsignin" component={StudentSignin} />
          <Route exact path="/studentsignup" component={StudentSignup} />
          <Route exact path="/courseregister" component={CourseRegister} />
          <Route exact path="/SearchAllCourses" component={SearchAllCourses} />
          <Route exact path="/SearchTitle" component={SearchTitle} />
          <Route exact path="/CreateCourse" component={CreateCourse} />
          <Route exact path="/StudentProfile" component={StudentProfile} />
          <Route exact path="/SignOut" component={SignOut} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/StudentPage" component={StudentPage} />
          <Route exact path="/StudentLogin" component={SLoginPage} />
          <Route
            exact
            path="/allstudentsregistered"
            component={RegisteredStudents}
          />
        </Switch>
      </Router>
      {/* <Grid container spacing={1} /> */}
    </React.Fragment>
  );
}

export default App;
