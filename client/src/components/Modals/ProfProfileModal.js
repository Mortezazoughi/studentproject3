import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ProfProfile from '../ProfPages/ProfProfile';
const ProfProfileModal = () => (
  <Modal
    style={{ backgroundColor: '#bbdefb' }}
    closeIcon
    trigger={<Button inverted> Profile</Button>}
    centered={true}
    style={{ marginTop: '5%' }}
  >
    <Modal.Header style={{ fontSize: '3rem', backgroundColor: '#bbdefb' }}>
      Your Profile
    </Modal.Header>
    <Modal.Content style={{ backgroundColor: '#b2dfdb' }}>
      <Modal.Description>
        <ProfProfile />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ProfProfileModal;
