import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

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
    };
    console.log(params);
    axios
      .post('http://localhost:5000/products', params)
      .then((res) => cb(res.data))
      .catch((err) => {
        throw err;
      });
  }
}

export default ProductApi;
