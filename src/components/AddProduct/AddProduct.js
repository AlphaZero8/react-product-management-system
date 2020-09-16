import React from 'react';

import AddProductForm from './AddProductForm';
import ActionsContext from '../../context/actionsContext';

const AddProduct = () => {
  return (
    <ActionsContext.Consumer>
      {(context) => <AddProductForm onAdd={(product) => context.onAddProduct(product)}/>}
    </ActionsContext.Consumer>
  );
};

export default AddProduct;
