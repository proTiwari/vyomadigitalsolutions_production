import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to set the appElement to avoid accessibility warnings
Modal.setAppElement('#root');

const CustomDialog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Custom Dialog"
      className="custom-dialog"
    >
      <h2>Your message has been sent successfully.</h2>
      <p>We will get back to you soon.</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default CustomDialog;
