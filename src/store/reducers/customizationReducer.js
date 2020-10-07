import * as checkBoxTypes from '../../components/CustomizeTable/checkBoxTypes';
import * as actionTypes from '../../actions/actionTypes';
import { toggleCheckBoxHandler } from '../utility';

const initialState = {
  all: false,
  name: false,
  description: false,
  manufacturer: false,
  price: false,
  quantity: false,
};

const customizationReducer = (state = initialState, action) => {
  if (action.type === actionTypes.TOGGLE_FIELD) {
    let otherValues;
    switch (action.checkBoxName) {
      case checkBoxTypes.SHOW_ALL:
        if (state.all) {
          return {
            ...initialState,
          };
        }
        return {
          all: true,
          name: true,
          description: true,
          manufacturer: true,
          price: true,
          quantity: true,
        };

      case checkBoxTypes.PRODUCT_NAME:
        otherValues = Object.values(state).splice(2, 4);
        return toggleCheckBoxHandler(state, 'name', otherValues);

      case checkBoxTypes.PRODUCT_DESCRIPTION:
        otherValues = Object.values(state)
          .splice(1, 1)
          .concat(Object.values(state).splice(3, 3));
        return toggleCheckBoxHandler(state, 'description', otherValues);

      case checkBoxTypes.PRODUCT_MANUFACTURER:
        otherValues = Object.values(state)
          .splice(1, 2)
          .concat(Object.values(state).splice(4, 2));
        return toggleCheckBoxHandler(state, 'manufacturer', otherValues);

      case checkBoxTypes.PRODUCT_PRICE:
        otherValues = Object.values(state)
          .splice(1, 3)
          .concat(Object.values(state).splice(5, 1));
        return toggleCheckBoxHandler(state, 'price', otherValues);

      case checkBoxTypes.PRODUCT_QUANTITY:
        otherValues = Object.values(state).splice(1, 4);
        return toggleCheckBoxHandler(state, 'quantity', otherValues);

      default:
        return {
          ...state,
        };
    }
  } else {
    return state;
  }
};

export default customizationReducer;
