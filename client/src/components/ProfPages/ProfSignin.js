import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function ProfSignin() {
  const [profsignin, setprofsignin] = useState({
    email: "",
    password: ""
  });
  const [anyerrrors, setanyerrrors] = useState({
    errorsFlag: false,
    actualErrors: ""
  });
  const handleSubmit = async e => {
    e.preventDefault();
    setanyerrrors({
      errorsFlag: false,
      actualErrors: ""
    });
    let results;
    try {
      const URL = `http://localhost:8080/profsignin`;
      results = await axios({
        url: URL,
        method: "POST",
        data: {
          email: profsignin.email,
          password: profsignin.password
        }
      });
      localStorage.setItem("profid", results.data);
    } catch (error) {
      setanyerrrors({
        errorsFlag: true,
        actualErrors: error.response.data.message
      });
    }
  };
  return (
    <div>
      <p> {anyerrrors.actualErrors}</p>
      <Form onSubmit={handleSubmit}>
        <Form.Field required>
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
        <Form.Field required>
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
    </div>
  );
}

export default ProfSignin;
