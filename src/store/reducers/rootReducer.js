import { combineReducers } from 'redux';

import productReducer from './productReducer';
import customizationReducer from './customizationReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  productReducer,
  customize: customizationReducer,
  user: userReducer,
});

export default rootReducer;
