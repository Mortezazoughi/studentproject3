import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import CourseRegister from '../src/components/CourseRegister/CourseRegister';
import ProfSignin from '../src/components/ProfSignin/ProfSignin';
import ProfSignup from './components/ProfSignup/ProfSignup';
import StudentSignin from './components/StudentSignin';
import StudentSignup from './components/StudentSignup';
import SearchAllCourses from './components/SearchAllCourses';
import Grid from '@material-ui/core/Grid';
import StudentProfile from './components/StudentProfile';
import SearchTitle from './components/SearchTitle';
import CreateCourse from './components/CreateCourse';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
            <li>
              <Link to="/SearchAllCourses"> Search All Courses</Link>
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
              <Link to="/StudentProfile"> Student Profile</Link>
            </li>
            <hr />

            {/* <CourseRegister />
        <ProfSignin />
        <ProfSignup />
        <StudentSignin />
        <StudentSignup /> */}

            <Switch>
              <Route path="/profsignup" component={ProfSignup} />
              <Route path="/profsignin" component={ProfSignin} />
              <Route path="/studentsignin" component={StudentSignin} />
              <Route path="/studentsignup" component={StudentSignup} />
              <Route path="/courseregister" component={CourseRegister} />
              <Route path="/SearchAllCourses" component={SearchAllCourses} />
              <Route path="/SearchTitle" component={SearchTitle} />
              <Route path="/CreateCourse" component={CreateCourse} />
              <Route path="/StudentProfile" component={StudentProfile} />
            </Switch>
          </ul>
        </div>
      </Router>
      <Grid container spacing={1} />
    </div>
  );
}

export default App;
