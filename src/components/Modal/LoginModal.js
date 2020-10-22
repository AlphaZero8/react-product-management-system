import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-regular-svg-icons';

import Login from '../Login/Login';
import './LoginModal.css';

const LoginModal = (props) => {
  return (
    <Modal
      {...props}
      dialogClassName="modal-37rem"
      aria-labelledby="example-custom-modal-styling-title"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Kindly login to proceed!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Login
          redirectPath={props.redirectpath}
          onLogin={() => props.onHide()}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

    // <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    //       <FontAwesomeIcon icon={faEdit} className="icon" title="Edit" data-toggle="modal" />
    //   <Login />
    // </div>
  );
};

export default LoginModal;
