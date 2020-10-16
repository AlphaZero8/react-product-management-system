import * as actionTypes from '../../actions/actionTypes';
import { loadProducts, updateProducts } from '../utility';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_PRODUCTS:
      return loadProducts({ products: action.data });

    case actionTypes.ADD_PRODUCT:
      return updateProducts(state, action.data);

    case actionTypes.DELETE_PRODUCT:
      const filteredArray = state.products.filter(
        (product) => product.id !== action.id
      );
      return loadProducts({ products: filteredArray });

    case actionTypes.UPDATE_PRODUCT:
      const {products} = loadProducts(state);
      const rqProductIndex = products.findIndex(product => product.id === action.data.id);
      products[rqProductIndex] = {...action.data};
      return {products};
    default:
      return state;
  }
};

export default productReducer;
