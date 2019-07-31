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
import SignOut from './components/SignOut';
import MainPage from './components/Pages/MainPage.js';
import StudentPage from './components/Pages/StudentPage.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div>
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
              <Link to="/SignOut"> Sign Out</Link>
            </li>
            <li>
              <Link to="/MainPage"> Main Page</Link>
            </li>
            <li>
              <Link to="/StudentPage"> Student Page</Link>
            </li>
            <hr />

            {/* <CourseRegister />
        <ProfSignin />
        <ProfSignup />
        <StudentSignin />
        <StudentSignup /> */}

            <Switch>
              <Route exact path="/profsignup" component={ProfSignup} />
              <Route exact path="/profsignin" component={ProfSignin} />
              <Route exact path="/studentsignin" component={StudentSignin} />
              <Route exact path="/studentsignup" component={StudentSignup} />
              <Route exact path="/courseregister" component={CourseRegister} />
              <Route
                exact
                path="/SearchAllCourses"
                component={SearchAllCourses}
              />
              <Route exact path="/SearchTitle" component={SearchTitle} />
              <Route exact path="/CreateCourse" component={CreateCourse} />
              <Route exact path="/StudentProfile" component={StudentProfile} />
              <Route exact path="/SignOut" component={SignOut} />
              <Route exact path="/MainPage" component={MainPage} />
              <Route exact path="/StudentPage" component={StudentPage} />
            </Switch>
          </ul>
        </div>
      </Router>
      <Grid container spacing={1} />
    </div>
  );
}

export default App;
