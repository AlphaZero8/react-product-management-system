import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import { connect } from 'react-redux';

import AddProduct from './AddProduct/AddProduct';
import ProductHome from '../containers/ProductHome';
import EditProduct from './EditProduct/EditProduct';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import ViewProduct from './ViewProduct/ViewProduct';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductHome} />
      <Route exact path="/add-product" component={AddProduct} />
      <Route
        path="/edit-product/:id"
        component={EditProduct}
      />
      <Route
        path="/view-product/:id"
        render={(props) => <ViewProduct {...props} />}
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
