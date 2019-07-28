import React, { Component, useState } from 'react';
import axios from 'axios';

// function StudentSignin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   React.useEffect(() => {
//     const fetchTodos = async () => {
//       await axios.get('todos')
//     }
//   });
//   return (
//     <form>
//       <input value={email} onChange={event => setEmail(event.target.value)} />
//       <input value={password} onChange={event => setPassword(event.target.value)} />
//     </form>
//   );
// }

class StudentSignin extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log(this.state.email);
  };
  handleSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:8080/signIn',
      data: {
        email: this.state.email,
        pass: this.state.password
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            type="text"
            placeholder="email"
          />
          <input
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default StudentSignin;
