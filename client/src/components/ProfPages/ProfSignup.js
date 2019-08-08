import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import API from '../../utils/API';
// import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import SignupForm from './Form.js';
// import ProfSignUpForm from "./ProfSignUpForm";

function ProfSignup(props) {
  const [profinfo, setprofinfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    campus: '',
    password: '',
    confirmpassword: '',
    errors: []
  });
  //redirect to Dashboard
  const [toDash, settoDash] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    // API.profsignup()

    let results;
    try {
      const URL = 'http://localhost:8080/profsignup';
      results = await axios({
        method: 'post',
        url: URL,
        data: {
          firstName: profinfo.firstName,
          lastName: profinfo.lastName,
          phoneNumber: profinfo.phoneNumber,
          email: profinfo.email,
          campus: profinfo.campus,
          password: profinfo.password,
          confirmpassword: profinfo.confirmpassword
        }
      });

      // set localStorage
      localStorage.setItem('profid', results.data.id);
      // console.log('fired');
      // res.redirect()
      props.history.push('/ProfPage');
    } catch (errors) {
      console.error(errors.response.data.message);
      setprofinfo({
        errors: [...errors.response.data.message.split('Validation error:')]
      });
    }

    // console.log(results.data.id);
    // // set localStorage
    // localStorage.setItem('profid', results.data.id);

    // set todash flag to true
    settoDash({
      toDash: true
    });
    console.log(toDash);
  };
  return (
    <div>
      {profinfo.errors.length
        ? profinfo.errors.map(error => (
            <p>{error.replace(/\,|SequelizeValidationError:/gi, '')}</p>
          ))
        : ''}
      <SignupForm
        handleSubmit={handleSubmit}
        setprofinfo={setprofinfo}
        profinfo={profinfo}
      />
    </div>
  );
}

export default withRouter(ProfSignup);
