import React from 'react';

import ActionsContext from '../context/actionsContext';

const ProductEntry = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.manufacturer}</td>
      <td>{props.price}</td>
      <td>{props.quantity}</td>
      <ActionsContext.Consumer>
        {(context) => (
          <td>
            <i
              className="far fa-trash-alt"
              onClick={() => context.onDeleteProduct(props.id)}
            ></i>
          </td>
        )}
      </ActionsContext.Consumer>
    </tr>
  );
};

export default ProductEntry;
