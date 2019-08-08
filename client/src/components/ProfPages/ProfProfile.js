import React, { useState, useEffect } from "react";
import Axios from "axios";

function ProfProfile() {
  useEffect(() => {
    const storedprofid = localStorage.getItem("profid");
    getprofinfo(storedprofid);
    getallmycourses(storedprofid);
  }, []);

  const [profinforeturned, setprofinforeturned] = useState();
  const [profcourses, setprofcourses] = useState([]);

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
            <p>{mycourse.courseName}</p>
            <p>{mycourse.level}</p>
            <p>{mycourse.availableseats}</p>
            <p>{mycourse.prereq}</p>
            <p>{mycourse.startdate}</p>
            <p>{mycourse.enddate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfProfile;
