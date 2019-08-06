import React, { useState, useEffect } from "react";
import axios from "axios";

function RegisteredStudents() {
  useEffect(() => {
    const prof_id = JSON.parse(localStorage.getItem("profid"));
    console.log(prof_id);
    axios
      .get(`http://localhost:8080/allstudentsregistered/${prof_id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log("*****Client error****", err));
  }, []);
  return (
    <div>
      <p>blah</p>
    </div>
  );
}

export default RegisteredStudents;
