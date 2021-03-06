import * as actionTypes from '../../actions/actionTypes';
import { loadUsers, addUser } from '../utility';
const initialState = {
  users: [],
  user: {},
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_USERS:
      const users = loadUsers({ users: action.payload });
      return { ...users, ...state };

    case actionTypes.REGISTER_USER:
      return addUser(state, action.payload);

    case actionTypes.LOGIN_USER:
      const clonedUsers = loadUsers({ users: state.users });
      return { ...clonedUsers, isLoggedIn: action.payload[0], user: action.payload[1] };

    case actionTypes.LOGOUT_USER:
      return { ...state, isLoggedIn: action.payload };

    default:
      return state;
  }
};

export default userReducer;
