import React from 'react';
import { Card } from 'react-bootstrap';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withRouter, Link } from 'react-router-dom';

import './SignUp.css';

const SignUp = ({ errors, touched, isSubmitting, values }) => {
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
                    placeholder="Please enter a Password"
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

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numberRegex = /(?=.*[0-9])/;
const specialCharRegex = /(?=.*[!@#$%^&*])/;
const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Required!').min(2, 'Too short!'),
  lastName: Yup.string().required('Last Required!').min(2, 'Too short!'),
  email: Yup.string()
    .email('Please enter a valid email!')

    // .notOneOf(emails)
    .required('Required!'),

  password: Yup.string()
    .required('Required!')
    .matches(uppercaseRegex, 'The password should contain an uppercase letter!')
    .matches(lowercaseRegex, 'The password should contain a lowercase letter!')
    .matches(
      specialCharRegex,
      'The password should contain a special character!'
    )
    .matches(numberRegex, 'The password should contain a number!')
    .min(8, 'The password must be at least 8 characters long!'),

  confirmPassword: Yup.string()
    .required('Required!')
    .oneOf([Yup.ref('password'), null], 'The passwords must match'),

  userLocation: Yup.string().required('Required!'),
  mobile: Yup.string()
    .required('Required!')
    .matches(mobileRegex, 'Invalid mobile!'),
});

const formikSignUp = withRouter(
  withFormik({
    validationSchema,

    mapPropsToValues({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      userLocation,
      mobile,
      emails,
      mobiles,
    }) {
      return {
        firstName: firstName || '',
        lastName: lastName || '',
        email: email || '',
        password: password || '',
        confirmPassword: confirmPassword || '',
        userLocation: userLocation || '',
        mobile: mobile || '',
        emails: emails || [],
        mobiles: mobiles || [],
      };
    },

    handleSubmit(values, { resetForm, setSubmitting, props }) {
      resetForm();
      setSubmitting(false);
      props.onRegister(values);
      props.history.push('/log-in');
    },
    validate: (values, props) => {
      const errors = {};
      for (const email of props.emails) {
        if (values.email === email) {
          errors.email = 'The email has already been taken!';
          break;
        }
      }
      for (const mobile of props.mobiles) {
        if (values.mobile === mobile) {
          errors.mobile = 'The mobile number is already registered!';
        }
      }
      return errors;
    },
  })(SignUp)
);

export default formikSignUp;
