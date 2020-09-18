export const loadObject = (oldState) => {
  const productsArray = oldState.products.map((product) => ({ ...product }));
  return {
    products: productsArray
  };
};

export const updateObject = (oldState, newState) => {
  const clonedArray = oldState.products.map((product) => ({ ...product }));
  const newArray = clonedArray.concat([newState]);
  return {
    products: newArray,
  };
};
