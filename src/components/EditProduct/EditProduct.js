import React, { useState } from 'react';
import { connect } from 'react-redux';

import EditProductForm from './EditProductForm';
import * as actionCreators from '../../actions/actions';

const EditProduct = (props) => {
  const [blockRouting, setBlockRouting] = useState(true);
  const {
    match: { params },
  } = props;
  const { id } = params;
  console.dir(props);
  const product = props.products.find((product) => product.id === id);

  const saveButtonHandler = (product) => {
    props.updateProductHandler(product, id);
  };

  const cancelButtonHandler = () => {
    props.history.push('/');
  };

  return (
    <div>
      {product ? (
        <div>
          <h1>Edit the Product {product.name}</h1>
          <EditProductForm
            product={product}
            onUpdateProduct={(product) => saveButtonHandler(product)}
            goBack={cancelButtonHandler}
            blockRouting={blockRouting}
            setBlockRouting={setBlockRouting}
          />
        </div>
      ) : (
        <h1>Product not Found!</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProductHandler: (updatedProduct, id) => {
      dispatch(actionCreators.updateProduct(updatedProduct, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
