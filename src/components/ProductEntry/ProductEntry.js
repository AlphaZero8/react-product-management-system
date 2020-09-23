import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import * as actionCreators from '../../actions/actions';
import './ProductEntry.css';

const ProductEntry = (props) => {
  let editProductPath = `edit-product/${props.id}`;
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.manufacturer}</td>
      <td>{props.price}</td>
      <td>{props.quantity}</td>
      <td>
        <LinkContainer to={editProductPath} style={{ marginRight: '15px' }}>
          <FontAwesomeIcon icon={faEdit} className="icon" />
        </LinkContainer>
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="icon"
          onClick={() => props.deleteProduct(props.id)}
        />
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => {
      dispatch(actionCreators.deleteProduct(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductEntry);
