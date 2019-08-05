import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import StudentProfile from '../StudentProfile';
const StudentProfileModal = () => (
  <Modal trigger={<Button inverted>Student Profile</Button>} centered={true}>
    <Modal.Header>Profile</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Student Profile</Header>

        <StudentProfile />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default StudentProfileModal;
