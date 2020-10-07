import React from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';
import * as actionCreators from '../../actions/actions';

const SignUp = (props) => {
  return <SignUpForm onRegister={(data) => props.registerBtnHandler(data)}/>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerBtnHandler: (userData) => {
      dispatch(actionCreators.registerUser(userData));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
