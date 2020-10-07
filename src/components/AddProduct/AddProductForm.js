import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';

import './AddProductForm.css';

const AddProductForm = ({ errors, touched, isSubmitting }) => {
  const style = {
    color: 'red',
  };

  // const submitHandler = () => {
  //   ProductHome._onChange();
  // };

  return (
    <Form>
      <br />
      <div className="form-group row">
        <label htmlFor="productName" className="col-sm-2 col-form-label">
          Product Name
        </label>
        <div className="col-sm-6">
          <Field
            size="40"
            className="form-control"
            type="text"
            name="productName"
            placeholder="What's the product name?"
            autoFocus
          />
          {touched.productName && errors.productName && (
            <p style={style}>{errors.productName}</p>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="productDescription" className="col-sm-2 col-form-label">
          Description
        </label>
        <div className="col-sm-6">
          <Field
            size="40"
            className="form-control"
            type="text"
            name="productDescription"
            placeholder="Please add a brief description"
          />
          {touched.productDescription && errors.productDescription && (
            <p style={style}>{errors.productDescription}</p>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="productManufacturer"
          className="col-sm-2 col-form-label"
        >
          Manufacturer
        </label>
        <div className="col-sm-6">
          <Field
            size="40"
            className="form-control"
            type="text"
            name="productManufacturer"
            placeholder="Who manufactured it?"
          />
          {touched.productManufacturer && errors.productManufacturer && (
            <p style={style}>{errors.productManufacturer}</p>
          )}
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="productQuantity" className="col-sm-2">
          Quantity
        </label>
        <div className="col-sm-2">
          <Field
            className="form-control"
            type="number"
            name="productQuantity"
            placeholder="Quantity"
          />
          {touched.productQuantity && errors.productQuantity && (
            <p style={style}>{errors.productQuantity}</p>
          )}
        </div>
        <label htmlFor="productPrice" className="col-sm-2 col-form-label">
          Price/Unit
        </label>
        <div className="col-sm-2">
          <Field
            className="form-control"
            type="number"
            name="productPrice"
            placeholder="Price"
          />
          {touched.productPrice && errors.productPrice && (
            <p style={style}>{errors.productPrice}</p>
          )}
        </div>
      </div>
      <div className="form-group row">
          <div className="col-sm-2">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Add
            </button>
          </div>
        </div>
    </Form>
  );
};

const formikAddProductForm = withRouter(
  withFormik({
    mapPropsToValues({ name, description, manufacturer, price, quantity }) {
      return {
        productName: name || '',
        productDescription: description || '',
        productManufacturer: manufacturer || '',
        productQuantity: quantity || '',
        productPrice: price || '',
      };
    },
    validationSchema: Yup.object().shape({
      productName: Yup.string().required('Product name is required!'),
      productDescription: Yup.string().required(
        'Description name is required!'
      ),
      productManufacturer: Yup.string().required(
        'Manufacturer name is required!'
      ),
      productQuantity: Yup.number()
        .min(1, 'Quantity should at least be 1 piece!')
        .required('Quantity is required!'),
      productPrice: Yup.number().required('Product price is required!'),
    }),
    handleSubmit(values, { resetForm, setSubmitting, props }) {
      resetForm();
      setSubmitting(false);
      console.dir(props);
      props.onAddProduct(values);
      props.history.push('/');
    },
  })(AddProductForm)
);

export default formikAddProductForm;
