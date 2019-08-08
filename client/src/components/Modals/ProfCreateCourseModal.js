import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CreateCourse from '../ProfPages/CreateCourse.js';
const ProfCreateCourseModal = () => (
  <Modal
    closeIcon
    trigger={<Button inverted> Create A Course</Button>}
    centered={true}
    style={{ marginTop: '5%' }}
  >
    <Modal.Header style={{ fontSize: '3rem', backgroundColor: '#ecebd7' }}>
      Create A Course
    </Modal.Header>
    <Modal.Content style={{ backgroundColor: '#ecebd7' }}>
      <Modal.Description>
        <CreateCourse />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ProfCreateCourseModal;
