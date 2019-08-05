import React, { useState } from "react";
import axios from "axios";

function ProfSignin() {
  const [profsignin, setprofsignin] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = async e => {
    e.preventDefault();
    let results;

    try {
      const URL = `http://localhost:8080/profsignin`;
      let results = await axios({
        url: URL,
        method: "POST",
        data: {
          email: profsignin.email,
          password: profsignin.password
        }
      });
      console.log("******SEND BACK DATA********", results.data);
      localStorage.setItem("profid", results.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
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
