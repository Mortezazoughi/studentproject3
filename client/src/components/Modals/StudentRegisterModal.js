import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CourseRegister from '../CourseRegister/CourseRegister.js';
const StudentRegister = () => (
  <Modal trigger={<Button>Class Registration</Button>} centered={true}>
    <Modal.Header style={{ backgroundColor: '#0784b5' }}>
      Class Registration
    </Modal.Header>
    <Modal.Content style={{ backgroundColor: '#9bd4e4' }}>
      <Modal.Description>
        <Header>
          <h1> Register for your classes</h1>
        </Header>
        <CourseRegister />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default StudentRegister;
