import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
      <div className="form-group my-margin">
        <label>
          Product Name
          <Field
            size="40"
            className="form-control"
            type="text"
            name="productName"
            placeholder="What's the product name?"
          />
          {touched.productName && errors.productName && (
            <p style={style}>{errors.productName}</p>
          )}
        </label>
      </div>
      <div className="form-group my-margin" style={{ marginTop: '15px' }}>
        <label>
          Description
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
        </label>
      </div>
      <div className="form-group my-margin" style={{ marginTop: '25px' }}>
        <label>
          Manufacturer
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
        </label>
      </div>

      <div className="form-group my-margin">
        <label>
          Quantity
          <Field
            className="form-control my-width"
            type="number"
            name="productQuantity"
            placeholder="Kindly add the required quantity"
          />
          {touched.productQuantity && errors.productQuantity && (
            <p style={style}>{errors.productQuantity}</p>
          )}
        </label>
      </div>
      <div className="form-group my-margin">
        <label>
          Price
          <Field
            className="form-control my-width"
            type="number"
            name="productPrice"
            placeholder="How much it costs for?"
          />
          {touched.productPrice && errors.productPrice && (
            <p style={style}>{errors.productPrice}</p>
          )}
        </label>
      </div>
      <div className="form-group my-margin">
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

const formikAddProductForm = withFormik({
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
    productDescription: Yup.string().required('Description name is required!'),
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
    console.log(props.onAdd);
    props.onAdd(values);
  },
})(AddProductForm);

export default formikAddProductForm;
