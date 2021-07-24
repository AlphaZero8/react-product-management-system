import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withRouter, Link } from 'react-router-dom';

import './Login.css';
import * as actionCreators from '../../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const Login = ({ errors, touched, isSubmitting, values }) => {
  const style = {
    color: 'red',
  };
  console.log(values);
  const textType = 'text',
    passwordType = 'password';

  const [type, setType] = useState(passwordType);
  const [show, setShow] = useState(true);

  const showBtnHandler = () => {
    if (type === passwordType) {
      setType(textType);
      setShow(false);
    } else {
      setType(passwordType);
      setShow(true);
    }
  };

  return (
    <Card style={{ width: '35rem', margin: '30px auto' }}>
      <Card.Body className="col-centered">
        <Card.Title>Login</Card.Title>
        <div className="row">
          <div className="col-centered">
            <Form>
              {errors.general && <p style={style}>{errors.general}</p>}
              <div className="form-group row">
                <label htmlFor="userId" className="col-sm-4 col-form-label">
                  User ID
                </label>
                <div className="col-sm-8">
                  <Field
                    id="first-field"
                    size="40"
                    className="form-control"
                    type="text"
                    name="userId"
                    placeholder="Please enter your Email"
                    autoFocus
                  />
                  {touched.userId && errors.userId && (
                    <p style={style}>{errors.userId}</p>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="col-sm-4 col-form-label">
                  Password
                </label>
                <div className="col-sm-7">
                  <Field
                    id="second-field"
                    size="40"
                    className="form-control"
                    type={type}
                    name="password"
                    placeholder="Please enter your Password"
                  />
                  {touched.password && errors.password && (
                    <p style={style}>{errors.password}</p>
                  )}
                </div>
                <div className="col-sm-1 form-control">
                  {show ? (
                    <FontAwesomeIcon
                      className="icon"
                      icon={faEye}
                      onClick={showBtnHandler}
                    ></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon
                      className="icon"
                      icon={faEyeSlash}
                      onClick={showBtnHandler}
                    ></FontAwesomeIcon>
                  )}
                </div>
              </div>

              {/* <div className="form-group row">
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={showBtnHandler}
                  >
                    Show Password
                  </button>
                </div>
              </div> */}

              <div className="form-group row">
                <div className="col-sm-4">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <Link to="/sign-up" onClick={values.hideModal}>
          New User? Register
        </Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

const logUserIn = (userData) => {
  console.log('[LoginForm.js] logUserIn');
  return new Promise((resolve, reject) => {
    actionCreators.loginUser(userData, (isAuthenticated) => {
      if (isAuthenticated) {
        resolve(true);
      } else {
        reject(new Error('Invalid email or password!'));
      }
    });
  });
};

const formikLogin = withRouter(
  withFormik({
    mapPropsToValues({ userId, password, hideModal, redirectPath }) {
      return {
        userId: userId || '',
        password: password || '',
        hideModal: hideModal || null,
        redirectPath: redirectPath || '/',
      };
    },
    validationSchema: Yup.object().shape({
      userId: Yup.string()
        .email('Please enter a valid userId!')
        .required('User ID is required!'),

      password: Yup.string().required('Password is required!'),
    }),

    // validate: (values, props) => {
    //   const errors = {};
    //   console.log(props.isLoggedIn);
    //   if (!props.isLoggedIn) {
    //     errors.general = 'Invalid User ID or Password!';
    //   }
    //   else {
    //     props.history.push('/');
    //   }
    // },

    handleSubmit: (values, { resetForm, setSubmitting, props, setErrors }) => {
      // resetForm();
      setSubmitting(false);
      console.log(values);
      logUserIn(values)
        .then(() => {
          resetForm();
          props.logUserIn([true, values]);
          if (props.redirectPath === '/') {
            props.hideModal();
          } else {
            props.history.push(values.redirectPath);
          }
        })
        .catch((err) => {
          // const userIdField = document.querySelector('#first-field');
          // userIdField.focus();
          // props.history.push('/log-in');
          // const passwordField = document.getElementById('second-field');
          // passwordField.blur();
          setErrors({ general: err.message });
        });
    },
    // validateOnBlur: false,
  })(Login)
);

export default formikLogin;
