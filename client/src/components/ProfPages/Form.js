import React from "react";

function Form({ handleSubmit, profinfo, setprofinfo, ...props }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter First Name"
          onChange={e =>
            setprofinfo({ ...profinfo, firstName: e.target.value })
          }
          name={profinfo.firstName}
        />
        <input
          type="text"
          placeholder="enter last Name"
          onChange={e => setprofinfo({ ...profinfo, lastName: e.target.value })}
          name={profinfo.lasttName}
        />
        <input
          type="text"
          placeholder="enter Phone Number"
          onChange={e =>
            setprofinfo({
              ...profinfo,
              phoneNumber: e.target.value
            })
          }
          name={profinfo.phoneNumber}
        />
        <input
          type="text"
          placeholder="enter email"
          onChange={e => setprofinfo({ ...profinfo, email: e.target.value })}
          name={profinfo.email}
        />
        <input
          type="text"
          placeholder="enter Campus"
          onChange={e => setprofinfo({ ...profinfo, campus: e.target.value })}
          name={profinfo.campus}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={e => setprofinfo({ ...profinfo, password: e.target.value })}
          name={profinfo.lasttName}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={e =>
            setprofinfo({
              ...profinfo,
              confirmpassword: e.target.value
            })
          }
          name={profinfo.lasttName}
        />
        <button> Register</button>
      </form>
    </div>
  );
}

export default Form;
