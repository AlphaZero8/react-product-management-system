import React from 'react';
import {connect} from 'react-redux';

import AddProductForm from './AddProductForm';
import * as actionCreators from '../../actions/actions';

const AddProduct = (props) => {
  return <AddProductForm onAddProduct={(product) => {props.addProductHandler(product)}}/>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductHandler: (product) => {
      dispatch(actionCreators.addProduct(product))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddProduct);
