import ProductApi from '../assets/api/ProductApi';
import * as actionTypes from './actionTypes';

const dispatchProducts = (allProducts) => {
  return {
    type: actionTypes.LOAD_ALL_PRODUCTS,
    data: allProducts,
  };
};

export const loadAllProducts = () => {
  return (dispatch) => {
    ProductApi.getAllProducts((products) => {
      dispatch(dispatchProducts(products));
    });
  };
};

const saveProduct = (newProduct) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    data: newProduct,
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    ProductApi.addProduct(product, (updatedProduct) => {
      dispatch(saveProduct(updatedProduct));
    });
  };
};

const removeProduct = (productId) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    id: productId,
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    ProductApi.deleteProduct(id, (deletedProductId) => {
      dispatch(removeProduct(deletedProductId));
    });
  };
};

const reviseProduct = (product) => {
  return {
    type: actionTypes.UPDATE_PRODUCT,
    data: product
  };
};

export const updateProduct = (updatedProduct, id) => {
  return (dispatch) => {
    ProductApi.updateProduct(updatedProduct, id, response => {
      dispatch(reviseProduct(response));
    });
  };
}
