import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';

import * as actionCreators from '../../actions/actions';
import './ProductEntry.css';

const ProductEntry = (props) => {
  let editProductPath = `/edit-product/${props.id}`;
  let viewProductPath = `/view-product/${props.id}`;
  return (
    <tr>
      <LinkContainer to={viewProductPath}>
        <td onClick={() => props.updateProductViews(props.id)} className="prod-id">{props.id}</td>
      </LinkContainer>
      {props.pName ? <td>{props.name}</td> : null}
      {props.pDescription ? <td>{props.description}</td> : null}
      {props.pManufacturer ? <td>{props.manufacturer}</td> : null}
      {props.pPrice ? <td>{props.price}</td> : null}
      {props.pQuantity ? <td>{props.quantity}</td> : null}
      <td>
        <LinkContainer to={editProductPath} style={{ marginRight: '15px' }}>
          {/* {props.isLoggedIn ? ( */}
          <FontAwesomeIcon icon={faEdit} className="icon" title="Edit" />
          {/* ) 
          : ( */}
          {/* <FontAwesomeIcon
              icon={faEdit}
              className="fa-disabled"
              title="Edit"
            />
          )} */}
        </LinkContainer>
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="icon"
          title="Delete"
          onClick={() => props.deleteProduct(props.id)}
        />
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
