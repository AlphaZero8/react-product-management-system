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

    default:
      return state;
  }
};

export default productReducer;
