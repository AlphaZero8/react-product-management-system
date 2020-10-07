import UserApi from '../assets/api/UserApi';
import { REGISTER_USER } from './actionTypes';

const addUser = (userData) => {
  return {
    type: REGISTER_USER,
    payload: userData
  };
};

export const registerUser = (data) => {
  return (dispatch) => {
    UserApi.registerUser(data, (userData) => {
      dispatch(addUser(userData));
    });
  };
};
