import React, { useState, useEffect } from 'react';
import ProductApi from '../../assets/api/ProductApi';

const TopViewed = () => {
  const [topFive, setTopFive] = useState([]);
  // let views = useRef([]);

  useEffect(() => {
    ProductApi.getAllProducts((products) => {
      products
        .sort((product1, product2) => product2.views - product1.views)
        .splice(5);
      // views.current = products.map(product => product.views);
      // views.current.sort((views1, views2) => views2 - views1);
      setTopFive(products);
    });
  }, []);

  return (
    <div>
      {topFive.map((product) => (
        <div key={product.name} className="card" style={{ width: '30rem', margin: 'auto' }}>
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <h5 className="card-subtitle mb-2 text-muted">
              {product.manufacturer}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {product.quantity} piece(s), Rs. {product.price}/- per piece
            </h6>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopViewed;
