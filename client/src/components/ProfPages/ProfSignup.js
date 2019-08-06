import React, { useState } from 'react';
import API from '../../utils/API';
// import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import SignupForm from './Form.js';
// import ProfSignUpForm from "./ProfSignUpForm";

function ProfSignup() {
  const [profinfo, setprofinfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    campus: '',
    password: '',
    confirmpassword: ''
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
    } catch (errors) {
      console.error(errors);
    }

    console.log(results.data.id);
    // set localStorage
    localStorage.setItem('profid', results.data.id);

    // set todash flag to true
    settoDash({
      toDash: true
    });
    console.log(toDash);
  };
  return (
    <div>
      <SignupForm />
      {/* <Form
        success
        onSubmit={handleSubmit}
        style={{ backgroundColor: '#a8e5ee' }}
      >
        <Form.Field>
          <label>First Name</label>
          <input
            name={profinfo.firstName}
            placeholder="Enter first name"
            onChange={e =>
              setprofinfo({ ...profinfo, firstName: e.target.value })
            }
            type="text"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name={profinfo.lasttName}
            placeholder="Enter last name"
            onChange={e =>
              setprofinfo({ ...profinfo, lastName: e.target.value })
            }
            type="text"
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input
            name={profinfo.phoneNumber}
            placeholder="Enter Phone Number"
            onChange={e =>
              setprofinfo({ ...profinfo, phoneNumber: e.target.value })
            }
            type="text"
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            name={profinfo.email}
            placeholder="Enter Email"
            onChange={e => setprofinfo({ ...profinfo, email: e.target.value })}
            type="email"
          />
        </Form.Field>
        <Form.Field>
          <label>Campus: </label>
          <input
            name={profinfo.campus}
            placeholder="Enter campus location"
            onChange={e => setprofinfo({ ...profinfo, campus: e.target.value })}
            type="text"
          />
        </Form.Field>
        <Form.Field>
          <label>Password: </label>
          <input
            name={profinfo.lasttName}
            placeholder="Enter password"
            onChange={e =>
              setprofinfo({ ...profinfo, password: e.target.value })
            }
            type="password"
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password: </label>
          <input
            name={profinfo.lasttName}
            placeholder=" Confirm Password"
            onChange={e =>
              setprofinfo({ ...profinfo, confirmpassword: e.target.value })
            }
            type="password"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button primary>Register</Button>
      </Form> */}
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter First Name"
          onChange={e =>
            setprofinfo({ ...profinfo, firstName: e.target.value })
          }
          name={profinfo.firstName}
        />
        <input
          type="text"
          placeholder="enter last Name"
          onChange={e => setprofinfo({ ...profinfo, lastName: e.target.value })}
          name={profinfo.lasttName}
        />
        <input
          type="text"
          placeholder="enter Phone Number"
          onChange={e =>
            setprofinfo({ ...profinfo, phoneNumber: e.target.value })
          }
          name={profinfo.phoneNumber}
        />
        <input
          type="text"
          placeholder="enter email"
          onChange={e => setprofinfo({ ...profinfo, email: e.target.value })}
          name={profinfo.email}
        />
        <input
          type="text"
          placeholder="enter Campus"
          onChange={e => setprofinfo({ ...profinfo, campus: e.target.value })}
          name={profinfo.campus}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={e => setprofinfo({ ...profinfo, password: e.target.value })}
          name={profinfo.lasttName}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={e =>
            setprofinfo({ ...profinfo, confirmpassword: e.target.value })
          }
          name={profinfo.lasttName}
        />
        <button> Register</button>
      </form> */}
      handleSubmit={handleSubmit}
      setprofinfo={setprofinfo}
      profinfo={profinfo}
      />
    </div>
  );
}

export default ProfSignup;
