import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

class ProductApi {
  static getAllProducts(cb) {
    axios
      .get('http://localhost:5000/products')
      .then((res) => cb(res.data))
      .catch((err) => {
        throw err;
      });
  }

  static addProduct(
    {
      productName,
      productDescription,
      productManufacturer,
      productPrice,
      productQuantity,
    },
    cb
  ) {
    const params = {
      id: uuidv4(),
      name: productName,
      description: productDescription,
      manufacturer: productManufacturer,
      price: productPrice,
      quantity: productQuantity,
      views: 0
    };
    axios
      .post('http://localhost:5000/products', params)
      .then((res) => cb(res.data))
      .catch((err) => {
        throw err;
      });
  }

  static deleteProduct(id, cb) {
    axios
      .delete(`http://localhost:5000/products/${id}`)
      .then(cb(id))
      .catch((err) => {
        throw err;
      });
  }

  static updateProduct(
    {
      productName,
      productDescription,
      productManufacturer,
      productPrice,
      productQuantity,
    },
    id,
    cb
  ) {
    const params = {
      name: productName,
      description: productDescription,
      manufacturer: productManufacturer,
      price: productPrice,
      quantity: productQuantity,
    };
    axios
      .put(`http://localhost:5000/products/${id}`, params)
      .then((res) => cb(res.data))
      .catch((err) => {
        throw err;
      });
  }

  static updateProductViews(productId, cb) {
    let params = {};
    axios
      .get(`http://localhost:5000/products/${productId}`)
      .then((res) => {
        params = { ...res.data };
        params.views = res.data.views + 1;
        axios
          .put(`http://localhost:5000/products/${productId}`, params)
          .then((res) => cb(res.data))
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  }
}

export default ProductApi;
