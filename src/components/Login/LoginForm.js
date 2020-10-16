import React from 'react';
import { Card } from 'react-bootstrap';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withRouter, Link } from 'react-router-dom';

import './Login.css';

const Login = ({ errors, touched, isSubmitting }) => {
  const style = {
    color: 'red',
  };

  return (
    <Card style={{ width: '35rem', margin: '30px auto' }}>
      <Card.Body className="col-centered">
        <Card.Title>Login</Card.Title>
        <div className="row">
          <div className="col-centered">
            <Form>
              <br />

              <div className="form-group row">
                <label htmlFor="userId" className="col-sm-4 col-form-label">
                  User ID
                </label>
                <div className="col-sm-8">
                  <Field
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
                <div className="col-sm-8">
                  <Field
                    size="40"
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Please enter your Password"
                  />
                  {touched.password && errors.password && (
                    <p style={style}>{errors.password}</p>
                  )}
                </div>
              </div>

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
        <Link to="/sign-up">New User? Register</Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

const formikLogin = withRouter(
  withFormik({
    mapPropsToValues({ userId, password }) {
      return {
        userId: userId || '',
        password: password || '',
      };
    },
    validationSchema: Yup.object().shape({
      userId: Yup.string()
        .email('Please enter a valid userId!')
        .required('User ID is required!'),

      password: Yup.string().required('Password is required!'),
    }),
    handleSubmit(values, { resetForm, setSubmitting, props }) {
      resetForm();
      setSubmitting(false);
      console.log(typeof props.onRegister);
      console.dir(props);
      console.log(values);
      props.history.push('/');
    },
  })(Login)
);

export default formikLogin;
