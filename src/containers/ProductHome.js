import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
import * as actionTypes from '../actions/actionTypes';

class ProductHome extends Component {
  // Dummy delete
  // deleteProductHandler = (id) => {
  //   console.log(this.state.products);
  //   const updatedProducts = this.state.products.filter(
  //     (product) => product.id !== id
  //   );
  //   this.setState({ products: updatedProducts });
  // };

  render() {

    return (
      <>
        {/* component to Customize choice */}

        <ProductList
          products={this.props.products}
          onDelete={(id) => this.props.deleteProductHandler(id)}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProductHandler: (id) => {
      dispatch({ type: actionTypes.DELETE_PRODUCT, productId: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductHome);
