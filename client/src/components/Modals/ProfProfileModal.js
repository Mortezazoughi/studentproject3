import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ProfProfile from '../ProfPages/ProfProfile';
const ProfProfileModal = () => (
  <Modal trigger={<Button inverted> Profile</Button>} centered={true}>
    <Modal.Header style={{ fontSize: '3rem', backgroundColor: '#ecebd7' }}>
      Your Profile
    </Modal.Header>
    <Modal.Content style={{ backgroundColor: '#ecebd7' }}>
      <Modal.Description>
        <ProfProfile />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ProfProfileModal;
