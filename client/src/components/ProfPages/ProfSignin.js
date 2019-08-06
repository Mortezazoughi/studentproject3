import React, { useState } from "react";
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
      <div> {anyerrrors.actualErrors}</div>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default ProfSignin;
