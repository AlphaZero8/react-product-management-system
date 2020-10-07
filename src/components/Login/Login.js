import React from 'react';
import {connect} from 'react-redux';

import LoginForm from './LoginForm';

const Login = () => {
  return (
    <LoginForm />
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginBtnHandler: (userData) => {
//       disapatch()
//     }
//   };
// };

export default connect()(Login);