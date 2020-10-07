import React from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

import ProductEntry from '../ProductEntry/ProductEntry';
import './ProductList.css';
import CustomizeTable from '../CustomizeTable/CustomizeTable';

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
      <div>
        <CustomizeTable />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              {props.name ? <th>Name</th> : null}
              {props.description ? <th>Description</th> : null}
              {props.manufacturer ? <th>Manufacturer</th> : null}
              {props.price ? <th>Price/Unit</th> : null}
              {props.quantity ? <th>Quantity</th> : null}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{productEntries}</tbody>
        </Table>
      </div>
    );
  }

  return <div>{toBeRendered}</div>;
};

const mapStateToProps = (state) => {
  return {
    name: state.customize.name,
    description: state.customize.description,
    manufacturer: state.customize.manufacturer,
    price: state.customize.price,
    quantity: state.customize.quantity,
  };
};

export default connect(mapStateToProps)(ProductList);
