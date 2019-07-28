import React from "react";
function CourseDet(props) {
  return (
    <div>
      <h4>{props.Title}</h4>
      <h4>{props.Start}</h4>
      <h4>{props.Seats}</h4>
      <h4>{props.level}</h4>
      <h4>{props.prereqs}</h4>
      <h4>{props.Instructor}</h4>
    </div>
  );
}
export default CourseDet;
