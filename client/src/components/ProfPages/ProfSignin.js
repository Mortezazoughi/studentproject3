import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function ProfSignin() {
  const [profsignin, setprofsignin] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = async e => {
    e.preventDefault();
    let results;

    try {
      const URL = `http://localhost:8080/profsignin`;
      let results = await axios({
        url: URL,
        method: 'POST',
        data: {
          email: profsignin.email,
          password: profsignin.password
        }
      });
      console.log('******SEND BACK DATA********', results.data);
      localStorage.setItem('profid', results.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            onChange={e =>
              setprofsignin({ ...profsignin, email: e.target.value })
            }
            name={profsignin.email}
            type="text"
            placeholder="joe@mail.com"
          />
        </Form.Field>
        <Form.Field>
          <label>Password: </label>
          <input
            onChange={e =>
              setprofsignin({ ...profsignin, password: e.target.value })
            }
            name={profsignin.password}
            type="password"
            placeholder=" Enter Password"
          />
        </Form.Field>
        <Button primary>Submit</Button>
      </Form>

      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter email"
          onChange={e =>
            setprofsignin({ ...profsignin, email: e.target.value })
          }
          name={profsignin.email}
        />
        <input
          type="password"
          placeholder="enter Password"
          onChange={e =>
            setprofsignin({ ...profsignin, password: e.target.value })
          }
          name={profsignin.password}
        />
        <button>Submit</button>
      </form> */}
    </div>
  );
}

export default ProfSignin;
