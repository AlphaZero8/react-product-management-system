import React from 'react';
import Table from 'react-bootstrap/Table';

import ProductEntry from './ProductEntry';

const ProductList = (props) => {
  let productEntries = props.products.map((product) => (
    <ProductEntry
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      manufacturer={product.manufacturer}
      price={product.price}
      quantity={product.quantity}
    />
  ));

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productEntries}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
