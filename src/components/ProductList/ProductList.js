import React from 'react';
import Table from 'react-bootstrap/Table';

import ProductEntry from '../ProductEntry/ProductEntry';
import './ProductList.css';

const ProductList = (props) => {
  let toBeRendered;

  if (props.products.length === 0) {
    toBeRendered = <h3 className="no-product">No products to show!</h3>;
  } else {
    let productEntries = props.products.map((product) => (
      <ProductEntry
        key={product.id}
        id={product.id}
        name={product.name}
        description={product.description}
        manufacturer={product.manufacturer}
        price={product.price}
        quantity={product.quantity}
        deleteProduct={props.onDelete}
      />
    ));
    toBeRendered = (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Manufacturer</th>
            <th>Price/Unit</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{productEntries}</tbody>
      </Table>
    );
  }

  return <div>{toBeRendered}</div>;
};

export default ProductList;
