import React from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';
import * as actionCreators from '../../actions/actions';

const SignUp = (props) => {
  const emails = props.users.map(user => user.email);
  const mobiles = props.users.map(user => user.mobile);
  return <SignUpForm onRegister={(data) => props.registerBtnHandler(data)} emails={emails} mobiles={mobiles} />;
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerBtnHandler: (userData) => {
      dispatch(actionCreators.registerUser(userData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
