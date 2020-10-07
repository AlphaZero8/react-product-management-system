export const loadObject = (oldState) => {
  const productsArray = oldState.products.map((product) => ({ ...product }));
  return {
    products: productsArray,
  };
};

export const updateObject = (oldState, newState) => {
  const clonedArray = oldState.products.map((product) => ({ ...product }));
  const newArray = clonedArray.concat([newState]);
  return {
    products: newArray,
  };
};

export const toggleCheckBoxHandler = (oldState, field, otherValues) => {
  let toggleAll = true;

  for (const value of otherValues) {
    if (!value) {
      toggleAll = false;
      break;
    }
  }
  switch (field) {
    case 'name':
      if (toggleAll) {
        return {
          ...oldState,
          name: !oldState.name,
          all: !oldState.name,
        };
      }
      return {
        ...oldState,
        name: !oldState.name,
      };

      case 'description':
      if (toggleAll) {
        return {
          ...oldState,
          description: !oldState.description,
          all: !oldState.description,
        };
      }
      return {
        ...oldState,
        description: !oldState.description,
      };

      case 'manufacturer':
      if (toggleAll) {
        return {
          ...oldState,
          manufacturer: !oldState.manufacturer,
          all: !oldState.manufacturer,
        };
      }
      return {
        ...oldState,
        manufacturer: !oldState.manufacturer,
      };

      case 'price':
      if (toggleAll) {
        return {
          ...oldState,
          price: !oldState.price,
          all: !oldState.price,
        };
      }
      return {
        ...oldState,
        price: !oldState.price,
      };

      case 'quantity':
      if (toggleAll) {
        return {
          ...oldState,
          quantity: !oldState.quantity,
          all: !oldState.quantity,
        };
      }
      return {
        ...oldState,
        quantity: !oldState.quantity,
      };

    default:
      return null;
  }
};
