import React from 'react';

const productContext = React.createContext({
  deleteProductHandler: () => {},
});

export default productContext;
