import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import * as actionCreators from '../../actions/actions';

const Login = (props) => {
  return <LoginForm login={(userData) => props.loginBtnHandler(userData)} isLoggedIn={props.isLoggedIn} />;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginBtnHandler: (userData) => {
      dispatch(actionCreators.loginUser(userData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
