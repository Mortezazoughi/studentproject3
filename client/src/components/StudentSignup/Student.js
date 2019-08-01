import React from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';

function Student(props) {
  return (
    <Form
      success
      onSubmit={props.handleSubmit}
      style={{ backgroundColor: '#a8e5ee' }}
    >
      <Form.Field>
        <label>First Name</label>
        <input
          value={props.firstName}
          name="firstName"
          placeholder="Enter first name"
          onChange={props.handleChange}
          type="text"
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          value={props.lastName}
          name="lastName"
          placeholder="Enter last name"
          onChange={props.handleChange}
          type="text"
        />
      </Form.Field>
      <Form.Field>
        <label>Phone Number</label>
        <input
          value={props.phoneNumber}
          name="phoneNumber"
          placeholder="Enter phone"
          onChange={props.handleChange}
          type="text"
        />
      </Form.Field>

      <Form.Field>
        <label>Email</label>
        <input
          value={props.email}
          name="email"
          placeholder="Enter Email"
          onChange={props.handleChange}
          type="email"
          placeholder="joe@schmoe.com"
        />
      </Form.Field>
      <Form.Field>
        <label>Campus: </label>
        <input
          value={props.campus}
          name="campus"
          placeholder="Enter campus location"
          onChange={props.handleChange}
          type="text"
        />
      </Form.Field>
      <Form.Field>
        <label>Password: </label>
        <input
          value={props.password}
          name="password"
          placeholder="Enter password"
          onChange={props.handleChange}
          type="password"
        />
      </Form.Field>
      <Form.Field>
        <label>Confirm Password: </label>
        <input
          value={props.confirmPassword}
          name="confirmPassword"
          placeholder="Enter Confirm Password"
          onChange={props.handleChange}
          type="password"
        />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button>Register</Button>
    </Form>

    // <form onSubmit={props.handleSubmit}>
    //   <label>First Name: </label>
    //   <input
    //     value={props.firstName}
    //     name="firstName"
    //     placeholder="Enter first name"
    //     onChange={props.handleChange}
    //     type="text"
    //   />
    //   <br />
    //   <label>Last Name: </label>
    //   <input
    //     value={props.lastName}
    //     name="lastName"
    //     placeholder="Enter last name"
    //     onChange={props.handleChange}
    //     type="text"
    //   />
    //   <br />
    //   <label>Phone : </label>
    //   <input
    //     value={props.phoneNumber}
    //     name="phoneNumber"
    //     placeholder="Enter phone"
    //     onChange={props.handleChange}
    //     type="text"
    //   />
    //   <br />
    //   <label>Email: </label>
    //   <input
    //     value={props.email}
    //     name="email"
    //     placeholder="Enter Email"
    //     onChange={props.handleChange}
    //     type="email"
    //   />
    //   <br />
    //   <label>Campus: </label>
    //   <input
    //     value={props.campus}
    //     name="campus"
    //     placeholder="Enter campus"
    //     onChange={props.handleChange}
    //     type="text"
    //   />
    //   <br />
    //   <label>Password: </label>
    //   <input
    //     value={props.password}
    //     name="password"
    //     placeholder="Enter password"
    //     onChange={props.handleChange}
    //     type="password"
    //   />
    //   <br />
    //   <label>Confirm Password: </label>
    //   <input
    //     value={props.confirmPassword}
    //     name="confirmPassword"
    //     placeholder="Enter Confirm Password"
    //     onChange={props.handleChange}
    //     type="password"
    //   />
    //   <br />
    //   <button>Register</button>
    // </form>
  );
}
export default Student;
