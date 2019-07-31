import React from 'react';
import { Button, Header, Icon, Modal, Form, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import StudentSignup from '../StudentSignup';
const StudentSignUpModal = () => (
  <Modal trigger={<Button>Student Sign Up</Button>} centered={true}>
    <Modal.Header>Sign In</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Student Sign In Page</Header>
        Please enter your email and password to sign into your account
        <StudentSignup />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default StudentSignUpModal;
