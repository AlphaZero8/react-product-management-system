import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-regular-svg-icons';

import Login from '../Login/Login';

const LoginModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Kindly login to proceed!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Login redirectPath={props.redirectpath} onLogin={() => props.onHide()} />
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
