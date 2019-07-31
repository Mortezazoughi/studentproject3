import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import StudentSignin from '../StudentSignin';

const StudentLoginModal = () => (
  <Modal trigger={<Button>Student Sign In</Button>} centered={true}>
    <Modal.Header>Sign In</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Student Sign In Page</Header>
        Please enter your email and password to sign into your account
        <StudentSignin />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default StudentLoginModal;
