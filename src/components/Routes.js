import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AddProduct from './AddProduct/AddProduct';
import ProductHome from '../containers/ProductHome';
import EditProduct from './EditProduct/EditProduct';
import SignUp from './SignUp/SignUpForm';
import Login from './Login/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductHome} />
      <Route path="/add-product" component={AddProduct} />
      <Route
        path="/edit-product/:id"
        render={(props) => <EditProduct products={props.products} {...props} />}
      />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/log-in" component={Login} />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
  };
};

export default connect(mapStateToProps)(Routes);
