import React from 'react';

class Form extends React.Component {
  state = {
    studentFirstName: '',
    studentLastName: '',
    studentEmail: '',
    password: ''
  };

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log('The values are: ', this.state);
    this.setState({
      studentFirstName: '',
      studentLastName: '',
      userName: '',
      studentEmail: '',
      studentPassword: ''
    });
  };

  render() {
    return (
      <form>
        <input
          name="studentFirstName"
          placeholder="First Name"
          value={this.state.studentFirstName}
          onChange={event => this.change(event)}
        />
        <br />
        <input
          name="studentLastName"
          placeholder="Last Name"
          value={this.state.studentLastName}
          onChange={event => this.change(event)}
        />
        <br />
        <input
          name="studentEmail"
          placeholder="Email"
          value={this.state.studentEmail}
          onChange={event => this.change(event)}
        />
        <br />
        <input
          name="studentPassword"
          type="password"
          placeholder="Password"
          value={this.state.studentPassword}
          onChange={event => this.change(event)}
        />
        <button onClick={event => this.onSubmit(event)}>Submit</button>
      </form>
    );
  }
}

export default Form;
