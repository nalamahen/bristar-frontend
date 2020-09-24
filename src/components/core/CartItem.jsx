import React, { useState } from 'react';

import { getImageUrl } from '../../utils/cartHelpers';

const CartItem = ({ product, setRun = (f) => f, run = undefined }) => {
  const [count, setCount] = useState(product.count);

  // const getItemsTotal = (product) => {
  //   return product.price * count;
  // };

  // const handleChange = (productId) => (event) => {
  //   setRun(!run); // run useEffect in parent Cart
  //   setCount(event.target.value < 1 ? 1 : event.target.value);
  //   if (event.target.value >= 1) {
  //     updateItem(productId, event.target.value);
  //   }
  // };

  const { name, price } = product;

  return (
    <div className="cart-item">
      <img src={getImageUrl(product)} alt="product" />
      <div className="cart-item-details">
        <span>{name}</span>
        <span>{count}</span>
        <span>{count * price}</span>
      </div>
    </div>
  );
};

export default CartItem;
