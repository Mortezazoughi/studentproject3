import React from 'react';
import { render } from 'react-dom';
import Styles from './Styles';
import { Form, Field } from 'react-final-form';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const onSubmit = events => {
  console.log('Submiting information');
  events.preventDefault();
};

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

const SignUp = () => (
  <Styles>
    <h1> Please fill the form to sign up for an acount </h1>
    <h2>All fields are required</h2>

    <a href="/LogIn">Already have an account</a>
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        }
        if (!values.lastName) {
          errors.lastName = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }

        return errors;
      }}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              placeholder="First Name"
            />
            <Error name="firstName" />
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" component="input" placeholder="Last Name" />
            <Error name="lastName" />
          </div>
          <div>
            <label>Email</label>
            <Field name="email" component="input" placeholder="Email" />
            <Error name="email" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component="input" placeholder="Password" />
            <Error name="password" />
          </div>

          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </Styles>
);

export default SignUp;
