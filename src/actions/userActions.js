import UserApi from '../assets/api/UserApi';
import * as actionTypes from './actionTypes';

const dispatchUsers = (allUsers) => {
  return {
    type: actionTypes.LOAD_ALL_USERS,
    payload: allUsers,
  };
};

export const loadAllUsers = () => {
  return (dispatch) => {
    UserApi.loadAllUsers((users) => {
      dispatch(dispatchUsers(users));
    });
  };
};

const addUser = (userData) => {
  return {
    type: actionTypes.REGISTER_USER,
    payload: userData,
  };
};

export const registerUser = (data) => {
  return (dispatch) => {
    UserApi.registerUser(data, (userData) => {
      dispatch(addUser(userData));
    });
  };
};
