import React, { useState } from "react";
import Axios from "axios";

function CreateCourse() {
  const [coursecreate, setcoursecreate] = useState({
    courseName: "",
    availableseats: "",
    startdate: "",
    enddate: "",
    level: "",
    prereq: "",
    prof_id: ""
  });
  const handlSubmit = async e => {
    // get prof_id from local storage
    const storedprofId = localStorage.getItem("profid");
    //set the value of prof id
    console.log(storedprofId);
    // setcoursecreate({ ...coursecreate, prof_id: storedprofId });
    console.log(coursecreate);
    // console.log(storedprofId.prof_id);
    e.preventDefault();

    let results;
    try {
      URL = "http://localhost:8080/createcourse";
      results = await Axios({
        method: "post",
        url: URL,
        data: {
          courseName: coursecreate.courseName,
          availableseats: coursecreate.availableseats,
          startdate: coursecreate.startdate,
          enddate: coursecreate.enddate,
          level: coursecreate.level,
          prereq: coursecreate.prereq,
          prof_id: coursecreate.prof_id
        }
      }).then(res => console.log(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p>Blah</p>
      <form onSubmit={handlSubmit}>
        <input
          type="text"
          name={coursecreate.courseName}
          placeholder="Course title"
          onChange={e =>
            setcoursecreate({
              ...coursecreate,
              courseName: e.target.value
            })
          }
        />
        <input
          name="availableseats"
          value={coursecreate.availableseats}
          placeholder=" Available seats"
          onChange={e =>
            setcoursecreate({ ...coursecreate, availableseats: e.target.value })
          }
        />
        <input
          name="level"
          value={coursecreate.level}
          placeholder=" Course Level"
          onChange={e =>
            setcoursecreate({ ...coursecreate, level: e.target.value })
          }
        />
        <input
          name="prereq"
          value={coursecreate.prereq}
          placeholder=" Required Prerequistes "
          onChange={e =>
            setcoursecreate({ ...coursecreate, prereq: e.target.value })
          }
        />
        <input
          name="prof_id"
          value={coursecreate.prof_id}
          placeholder=" Cant populate this"
          onChange={e =>
            setcoursecreate({ ...coursecreate, prof_id: e.target.value })
          }
        />
        <input
          name="startdate"
          value={coursecreate.startdate}
          placeholder="Start Date"
          onChange={e =>
            setcoursecreate({ ...coursecreate, startdate: e.target.value })
          }
        />
        <input
          name="enddate"
          value={coursecreate.enddate}
          placeholder=" End Date"
          onChange={e =>
            setcoursecreate({ ...coursecreate, enddate: e.target.value })
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateCourse;
