import React, { useState } from 'react';

import {
  getImageBackground,
  removeItem,
  updateItem,
} from '../../utils/cartHelpers';

const CartItem = ({ product, setRun = (f) => f, run = undefined }) => {
  const [count, setCount] = useState(product.count);

  const getItemsTotal = (product) => {
    return product.price * count;
  };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  return (
    <tr className="alert" role="alert">
      <td>
        <div className="img" style={getImageBackground(product)}></div>
      </td>
      <td>
        <div className="email">
          <span>{product.name}</span>
          <span>{product.description.substring(0, 50)}</span>
        </div>
      </td>
      <td>&euro;{product.price}</td>
      <td className="quantity">
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            value={count}
            onChange={handleChange(product._id)}
          />
        </div>
      </td>
      <td>&euro;{getItemsTotal(product)}</td>
      <td>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">
            <i
              onClick={() => {
                removeItem(product._id);
                setRun(!run); // run useEffect in parent Cart
              }}
              className="fa fa-close"
            ></i>
          </span>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
