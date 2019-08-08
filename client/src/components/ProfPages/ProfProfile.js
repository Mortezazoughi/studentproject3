import React, { useState, useEffect } from "react";
import Axios from "axios";

function ProfProfile() {
  useEffect(() => {
    const storedprofid = localStorage.getItem("profid");
    getprofinfo(storedprofid);
  }, []);

  const [profinforeturned, setprofinforeturned] = useState();

  const getprofinfo = async id => {
    let results;
    try {
      const URL = `http://localhost:8080/profprofile/${id}`;
      results = await Axios({
        method: "GET",
        url: URL
      });

      setprofinforeturned(results.data);

      console.log("*****PROF INFO RETURNED", profinforeturned);
    } catch (error) {
      console.log(error);
    }
    return;
  };

  return (
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
  );
}

export default ProfProfile;
