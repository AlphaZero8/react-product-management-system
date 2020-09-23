import * as actionTypes from '../../actions/actionTypes';
import { loadObject, updateObject } from '../utility';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_PRODUCTS:
      return loadObject({ products: action.data });

    case actionTypes.ADD_PRODUCT:
      return updateObject(state, action.data);

    case actionTypes.DELETE_PRODUCT:
      const filteredArray = state.products.filter(
        (product) => product.id !== action.id
      );
      return loadObject({ products: filteredArray });

    case actionTypes.UPDATE_PRODUCT:
      const {products} = loadObject(state);
      const rqProductIndex = products.findIndex(product => product.id === action.data.id);
      products[rqProductIndex] = {...action.data};
      return {products};
    default:
      return state;
  }
};

export default productReducer;
