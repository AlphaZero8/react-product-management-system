import React, { Component } from 'react';

import ProductList from '../components/ProductList';
import ProductApi from '../assets/api/ProductApi';
import ActionsContext from '../context/actionsContext';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    ProductApi.getAllProducts((data) => this.setState({ products: data }));
  }

  // Dummy delete
  deleteProductHandler = (id) => {
    console.log(this.state.products);
    const updatedProducts = this.state.products.filter(
      (product) => product.id !== id
    );
    this.setState({ products: updatedProducts });
  };

  addProductHandler = (product) => {
    console.log(product);
    ProductApi.addProduct(product, (addedProduct) =>
      this.setState(() => {
        const newProductsArr = this.state.products.map((prevProduct) => ({
          ...prevProduct,
        }));
        return {
          products: [...newProductsArr, addedProduct],
        };
      })
    );
  };

  render() {
    return (
      <>
        {/* component to Customize choice */}
        <ActionsContext.Provider
          value={{ onDeleteProduct: this.deleteProductHandler }}
        >
          <ProductList products={this.state.products} />
        </ActionsContext.Provider>
      </>
    );
  }
}

export default Dashboard;
