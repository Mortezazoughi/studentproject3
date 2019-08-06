import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

function SignupForm({ handleSubmit, profinfo, setprofinfo, ...props }) {
  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ backgroundColor: '#a8e5ee' }}>
        <Form.Field Required>
          <label>First Name</label>
          <input
            name={profinfo.firstName}
            placeholder="Enter first name"
            onChange={e =>
              setprofinfo({ ...profinfo, firstName: e.target.value })
            }
            type="text"
          />
        </Form.Field>
        <Form.Field Required>
          <label>Last Name</label>
          <input
            name={profinfo.lasttName}
            placeholder="Enter last name"
            onChange={e =>
              setprofinfo({ ...profinfo, lastName: e.target.value })
            }
            name={profinfo.lasttName}
          />
          type="text" />
        </Form.Field>
        <Form.Field Required>
          <label>Phone Number</label>
          <input
            name={profinfo.phoneNumber}
            placeholder="Enter Phone Number"
            onChange={e =>
              setprofinfo({
                ...profinfo,
                phoneNumber: e.target.value
              })
            }
            type="text"
          />
        </Form.Field>

        <Form.Field Required>
          <label>Email</label>
          <input
            name={profinfo.email}
            placeholder="Enter Email"
            onChange={e => setprofinfo({ ...profinfo, email: e.target.value })}
            type="text"
          />
        </Form.Field>
        <Form.Field Required>
          <label>Campus: </label>
          <input
            name={profinfo.campus}
            placeholder="Enter campus location"
            onChange={e => setprofinfo({ ...profinfo, campus: e.target.value })}
            type="text"
          />
        </Form.Field>
        <Form.Field Required>
          <label>Password: </label>
          <input
            name={profinfo.lasttName}
            placeholder="Enter password"
            onChange={e =>
              setprofinfo({ ...profinfo, password: e.target.value })
            }
            type="password"
          />
        </Form.Field>
        <Form.Field Required>
          <label>Confirm Password: </label>
          <input
            name={profinfo.lasttName}
            placeholder=" Confirm Password"
            onChange={e =>
              setprofinfo({
                ...profinfo,
                confirmpassword: e.target.value
              })
            }
            type="password"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button primary>Register</Button>
      </Form>
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
    </div>
  );
}

export default SignupForm;
