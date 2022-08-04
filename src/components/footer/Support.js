import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Support = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Support
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Support</ModalHeader>
        <ModalBody>
          support comes from viewers like you!
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}