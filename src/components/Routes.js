import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddProduct from './AddProduct/AddProduct';
import ProductHome from '../containers/ProductHome';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductHome} />
      <Route path="/add-product" component={AddProduct} />
    </Switch>
  );
};

export default Routes;
