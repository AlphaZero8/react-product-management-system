import React from 'react';
import { Card } from 'react-bootstrap';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withRouter, Link } from 'react-router-dom';

import './SignUp.css';

const SignUp = ({ errors, touched, isSubmitting }) => {
  const style = {
    color: 'red',
  };

  return (
    <Card style={{ width: '35rem', margin: '30px auto' }}>
      <Card.Body className="col-centered">
        <Card.Title>Sign Up</Card.Title>
        <div className="row">
          <div className="col-centered">
            <Form>
              <br />
              <div className="form-group row">
                <label htmlFor="firstName" className="col-sm-4 col-form-label">
                  First Name
                </label>
                <div className="col-sm-8">
                  <Field
                    className="form-control"
                    type="text"
                    name="firstName"
                    placeholder="Please enter your First Name"
                    autoFocus
                  />
                  {touched.firstName && errors.firstName && (
                    <p style={style}>{errors.firstName}</p>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="lastName" className="col-sm-4 col-form-label">
                  Last Name
                </label>
                <div className="col-sm-8">
                  <Field
                    className="form-control"
                    type="text"
                    name="lastName"
                    placeholder="Please enter your Last Name"
                  />
                  {touched.lastName && errors.lastName && (
                    <p style={style}>{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-sm-4 col-form-label">
                  Email
                </label>
                <div className="col-sm-8">
                  <Field
                    size="40"
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="Please enter your Email"
                  />
                  {touched.email && errors.email && (
                    <p style={style}>{errors.email}</p>
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
                    placeholder="Please enter Password"
                  />
                  {touched.password && errors.password && (
                    <p style={style}>{errors.password}</p>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="confirmPassword"
                  className="col-sm-4 col-form-label"
                >
                  Confirm Password
                </label>
                <div className="col-sm-8">
                  <Field
                    size="40"
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    placeholder="Please re-enter the Password"
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p style={style}>{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="userLocation"
                  className="col-sm-4 col-form-label"
                >
                  Location
                </label>
                <div className="col-sm-8">
                  <Field
                    className="form-control"
                    type="text"
                    name="userLocation"
                    placeholder="Please enter your current Location"
                  />
                  {touched.userLocation && errors.userLocation && (
                    <p style={style}>{errors.userLocation}</p>
                  )}
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="mobile" className="col-sm-4 col-form-label">
                  Mobile No
                </label>
                <div className="col-sm-8">
                  <Field
                    className="form-control"
                    type="number"
                    name="mobile"
                    placeholder="Please enter your Mobile Number"
                  />
                  {touched.mobile && errors.mobile && (
                    <p style={style}>{errors.mobile}</p>
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
                    Register
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <Link to="/log-in">Already Registered? Login</Link>
      </Card.Body>
    </Card>
  );
};

const formikSignUp = withRouter(
  withFormik({
    mapPropsToValues({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      userLocation,
      mobile,
    }) {
      return {
        firstName: firstName || '',
        lastName: lastName || '',
        email: email || '',
        password: password || '',
        confirmPassword: confirmPassword || '',
        userLocation: userLocation || '',
        mobile: mobile || '',
      };
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Please enter a valid email!')
        .required('Email is required!'),

      password: Yup.string()
        .required('Password is required!')
        .min(
          8,
          'The password is too short, it has to be minimum 8 characters long!'
        )
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          'Password should contain an uppercase, a lowercase, a special character and a number!'
        ),

      confirmPassword: Yup.string()
        .required('This field is required!')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),

      firstName: Yup.string().required('First Name is required!'),
      lastName: Yup.string().required('Last Name is required!'),
      userLocation: Yup.string().required('Location is required!'),
      mobile: Yup.string()
        .matches(
          /^(\+\d{1,3}[- ]?)?\d{10}$/,
          'Please enter a valid Mobile Number!'
        )
        .required('Mobile Number is required!'),
    }),
    handleSubmit(values, { resetForm, setSubmitting, props }) {
      resetForm();
      setSubmitting(false);
      console.log(typeof props.onRegister);
      console.dir(props);
      console.log(values);
      props.history.push('/log-in');
    },
  })(SignUp)
);

export default formikSignUp;
