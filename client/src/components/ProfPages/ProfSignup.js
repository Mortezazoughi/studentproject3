import React, { useState } from "react";
import API from "../../utils/API";
import Form from "./Form";

import axios from "axios";
// import ProfSignUpForm from "./ProfSignUpForm";

function ProfSignup() {
  const [profinfo, setprofinfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    campus: "",
    password: "",
    confirmpassword: ""
  });
  //redirect to Dashboard
  const [toDash, settoDash] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    // API.profsignup()

    let results;
    try {
      const URL = "http://localhost:8080/profsignup";
      results = await axios({
        method: "post",
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
      localStorage.setItem("profid", results.data.id);
    } catch (errors) {
      console.error(errors);
    }

    // set todash flag to true
    settoDash({
      toDash: true
    });
    console.log(toDash);
  };
  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        setprofinfo={setprofinfo}
        profinfo={profinfo}
      />
    </div>
  );
}

export default ProfSignup;
