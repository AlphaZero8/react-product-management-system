import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import * as actionCreators from '../../actions/actions';
import './ProductEntry.css';
import LoginModal from '../Modal/LoginModal';

const ProductEntry = (props) => {
  let editProductPath = `/edit-product/${props.id}`;
  let viewProductPath = `/view-product/${props.id}`;

  let [isEditModal, setIsEditModal] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  // const triggerModal = (forType = '', productId = '') => {
  //   console.log('in triggerModal');
  //   setModalShow(true);
  //   if (forType === 'edit') {
  //     return (
  //       <LoginModal
  //         show={modalShow}
  //         onHide={() => setModalShow(false)}
  //         redirectpath={editProductPath}
  //       />
  //     );
  //   }
  //   return <LoginModal show={modalShow} onHide={() => setModalShow(false)} />;
  // };

  return (
    <tr>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>Click to view details</Tooltip>}
      >
        <LinkContainer to={viewProductPath}>
          <td
            onClick={() => props.updateProductViews(props.id)}
            className="prod-id"
          >
            {props.id}
          </td>
        </LinkContainer>
      </OverlayTrigger>
      {props.pName ? <td>{props.name}</td> : null}
      {props.pDescription ? <td>{props.description}</td> : null}
      {props.pManufacturer ? <td>{props.manufacturer}</td> : null}
      {props.pPrice ? <td>{props.price}</td> : null}
      {props.pQuantity ? <td>{props.quantity}</td> : null}
      <td>
        <div>
          {props.isLoggedIn ? (
            <div>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Edit</Tooltip>}
              >
                <LinkContainer to={editProductPath}>
                  <FontAwesomeIcon icon={faEdit} className="icon" />
                </LinkContainer>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Delete</Tooltip>}
              >
                <FontAwesomeIcon
                  style={{ marginLeft: '15px' }}
                  icon={faTrashAlt}
                  className="icon"
                  onClick={() => {
                    props.isLoggedIn
                      ? props.deleteProduct(props.id)
                      : setModalShow(true);
                  }}
                />
              </OverlayTrigger>
            </div>
          ) : (
            <div>
              <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                <FontAwesomeIcon
                  icon={faEdit}
                  className="icon"
                  title="Edit"
                  onClick={() => {
                    setIsEditModal(true);
                    setModalShow(true);
                  }}
                />
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Delete</Tooltip>}
              >
                <FontAwesomeIcon
                  style={{ marginLeft: '15px' }}
                  icon={faTrashAlt}
                  className="icon"
                  onClick={() => {
                    setIsEditModal(false);
                    setModalShow(true);
                  }}
                />
              </OverlayTrigger>
            </div>
          )}
          {isEditModal ? (
            <LoginModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              redirectpath={editProductPath}
            />
          ) : (
            <LoginModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              redirectpath="/"
            />
          )}
        </div>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {
  return {
    pName: state.customize.name,
    pDescription: state.customize.description,
    pManufacturer: state.customize.manufacturer,
    pPrice: state.customize.price,
    pQuantity: state.customize.quantity,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => {
      dispatch(actionCreators.deleteProduct(id));
    },
    updateProductViews: (id) => {
      dispatch(actionCreators.incrementViews(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductEntry);
