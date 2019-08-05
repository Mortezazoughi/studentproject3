import React, { useState, useEffect } from "react";
import Axios from "axios";

function ProfProfile() {
  useEffect(() => {
    const storedprofid = localStorage.getItem("profid");
    getprofinfo(storedprofid);
  }, []);

  const [profinforeturned, setprofinforeturned] = useState({});
  console.log("*****PROF INFO RETURNED", profinforeturned.profinforeturned);

  const getprofinfo = async id => {
    let results;
    try {
      const URL = `http://localhost:8080/profprofile/${id}`;
      results = await Axios({
        method: "GET",
        url: URL
      });
    } catch (error) {
      console.log(error);
    }
    setprofinforeturned({
      profinforeturned: results.data
    });

    // console.log(results.data);
    return;
  };

  return (
    //   console.log(typeof profinforeturned)
    <div>
      <p>Blah</p>
      <p> XXXXXXX {profinforeturned.firstName}</p>
      <p>Blah</p>
    </div>
  );
}

export default ProfProfile;
