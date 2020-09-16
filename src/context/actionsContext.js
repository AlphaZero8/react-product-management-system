import React from 'react';

const actionsContext = React.createContext({
  onDeleteProduct: (id) => {},
  onAddProduct: (product) => {}
});

export default actionsContext;
