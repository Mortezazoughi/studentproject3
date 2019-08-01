import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import StudentSignup from '../StudentSignup';
const StudentSignUpModal = () => (
  <Modal trigger={<Button>Student Sign Up</Button>} centered={true}>
    <Modal.Header>
      <h1>Sign Up For a New Account</h1>
    </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Student Sign up Page</Header>

        <StudentSignup />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default StudentSignUpModal;
