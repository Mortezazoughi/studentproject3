import React, { useState, useEffect } from "react";
import Axios from "axios";

function ProfProfile() {
  useEffect(() => {
    const storedprofid = localStorage.getItem("profid");
    getprofinfo(storedprofid);
    getallmycourses(storedprofid);
    // allstudentsregistered(storedprofid);
  }, []);

  const [profinforeturned, setprofinforeturned] = useState();
  const [profcourses, setprofcourses] = useState([]);
  const [allmystudents, setallmystudents] = useState([]);
  //get prof info
  const getprofinfo = async id => {
    let results;
    try {
      const URL = `http://localhost:8080/profprofile/${id}`;
      results = await Axios({
        method: "GET",
        url: URL
      });

      setprofinforeturned(results.data);
    } catch (error) {
      console.log(error);
      return;
    }
    return;
  };
  //get all courses taught by prof
  const getallmycourses = async id => {
    let results;
    const URL = `http://localhost:8080/getmycourse/${id}`;
    try {
      results = await Axios({
        method: "GET",
        url: URL
      });
      setprofcourses(results.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };
  //get all students signed up for my courses
  const allstudentsregistered = async id => {
    let results;
    const URL = ` http://localhost:8080/allstudentsregistered/${id}}`;

    try {
      results = await Axios({
        method: "GET",
        url: URL
      });
      console.log(results.data[0]);
      setallmystudents(results.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };
  console.log(allmystudents);
  return (
    <div>
      <div>
        {profinforeturned ? (
          <div>
            <p> First Name:{profinforeturned.firstName}</p>
            <p> Last Name: {profinforeturned.firstName}</p>
            <p> Email: {profinforeturned.email}</p>
            <p> Campus {profinforeturned.campus}</p>
          </div>
        ) : null}
      </div>
      <div>
        {profcourses.map(mycourse => (
          <div>
            <p>Course Name: {mycourse.courseName}</p>
            <p> Course Level: {mycourse.level}</p>
            <p>Available Seats: {mycourse.availableseats}</p>
            <p>Pre-requisites: {mycourse.prereq}</p>
            <p>Course Start Date: {mycourse.startdate}</p>
            <p>Course End Date: {mycourse.enddate}</p>
          </div>
        ))}
      </div>
      {/* <div>
        {allmystudents.map(allcourses => (
          <p>Meh:{allcourses.firstName}</p>
        ))}
        <p>BLah{allmystudents.firstName}</p>
      </div> */}
    </div>
  );
}

export default ProfProfile;
