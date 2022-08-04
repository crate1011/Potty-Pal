import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const About = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        About Us
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Our Story</ModalHeader>
        <ModalBody>
         As a young boy growing up in the streets of florida I quickly learned that a good clean bathroom is something to be treasured, as I got older 
         I spent far too many years in a place called louisiana and that only further cemented those values I held so dear.
         I spent many years gathering information, finding the best bathrooms across the nation! I then realized that I needed to share this information with YOU,
         Potty Pal was born, and the rest is history.
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