import React from "react";

function ProfSignUpForm(props) {
  console.log(props.setprofinfo);
  console.log(props);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="enter First Name"
          onChange={e =>
            setprofinfo({ ...props.profinfo, firstName: e.target.value })
          }
          name={props.profinfo.firstName}
        />
        <input
          type="text"
          placeholder="enter last Name"
          onChange={e =>
            props.setprofinfo({ ...props.profinfo, lastName: e.target.value })
          }
          name={props.profinfo.lasttName}
        />
      </form>
    </div>
  );
}

export default ProfSignUpForm;
