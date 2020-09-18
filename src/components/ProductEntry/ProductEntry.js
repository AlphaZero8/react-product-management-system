import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/actions';
import './ProductEntry.css';

const ProductEntry = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.manufacturer}</td>
      <td>{props.price}</td>
      <td>{props.quantity}</td>
      <td>
        <FontAwesomeIcon
          icon={faEdit}
          className="icon"
          style={{ marginRight: '15px' }}
        />
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
