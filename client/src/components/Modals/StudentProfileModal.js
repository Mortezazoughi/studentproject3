import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import StudentProfile from '../StudentProfile';
const StudentProfileModal = () => (
  <Modal closeIcon trigger={<Button inverted> Profile</Button>} centered={true}>
    <Modal.Header style={{ fontSize: '3rem', backgroundColor: '#ecebd7' }}>
      Your Profile
    </Modal.Header>
    <Modal.Content style={{ backgroundColor: '#ecebd7' }}>
      <Modal.Description>
        <StudentProfile />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default StudentProfileModal;
