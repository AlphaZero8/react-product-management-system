import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';

import './ViewProduct.css';

const ViewProduct = (props) => {
  const {
    match: { params },
  } = props;
  const { id } = params;

  const product = props.products.find((product) => product.id === id);

  let msg = '';
  let toBeRendered = null;

  if (product) {
    msg = 'Product Details';
    toBeRendered = (
      <>
        <h1>{msg}</h1>
        <div className="top-margin">
          <div className="card" style={{ width: '30rem', margin: 'auto' }}>
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <h5 className="card-subtitle mb-2 text-muted">{product.manufacturer}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {product.quantity} piece(s), Rs. {product.price}/- per piece
              </h6>
              <p className="card-text">{product.description}</p>
              <NavLink to="/"><h6>Home</h6></NavLink>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    msg = 'Product Not Found!';
    toBeRendered = <h1>{msg}</h1>;
  }

  return <div className="top-margin">{toBeRendered}</div>;
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
  };
};

export default connect(mapStateToProps)(ViewProduct);
