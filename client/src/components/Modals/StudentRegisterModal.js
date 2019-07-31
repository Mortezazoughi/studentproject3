import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CourseRegister from '../CourseRegister/CourseRegister.js';
const StudentRegister = () => (
  <Modal trigger={<Button>Class Registration</Button>} centered={true}>
    <Modal.Header>Class Registration</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Register for your classes</Header>

        <CourseRegister />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default StudentRegister;
