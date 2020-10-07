import * as actionTypes from '../../actions/actionTypes';
const initialState = {
  isLoggedIn: false,
  users: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_USER:
      let clonedArray = state.users.map((user) => ({ ...user }));
      let newArray = clonedArray.concat([action.payload]);
      return newArray;
    default:
      return state;
  }
};

export default customerReducer;
