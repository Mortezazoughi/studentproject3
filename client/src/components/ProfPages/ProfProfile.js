import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ProfProfile() {
  useEffect(() => {
    const storedprofid = localStorage.getItem('profid');
    getprofinfo(storedprofid);
  }, []);

  const [profinforeturned, setprofinforeturned] = useState();

  const getprofinfo = async id => {
    let results;
    try {
      const URL = `http://localhost:8080/profprofile/${id}`;
      results = await Axios({
        method: 'GET',
        url: URL
      });

      setprofinforeturned(results.data);


      console.log("*****PROF INFO RETURNED", profinforeturned);
    } catch (error) {
      console.log(error);
    }

    // console.log(results.data);

    return;
  };

  return (
    <div>
      {profinforeturned ? (
        <div>
          <p>Blah</p>
          <p> XXXXXXX {profinforeturned.firstName}</p>
          <p>Blah</p>
        </div>
      ) : null}
    </div>
  );
}

export default ProfProfile;
