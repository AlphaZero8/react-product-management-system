import * as actionTypes from '../../actions/actionTypes';
import { loadUsers, addUser } from '../utility';
const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_USERS:
      return loadUsers({users: action.payload});

    case actionTypes.REGISTER_USER:
      return addUser(state, action.payload);
    default:
      return state;
  }
};

export default userReducer;
