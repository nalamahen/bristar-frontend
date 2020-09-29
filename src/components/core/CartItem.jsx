import React, { useState } from 'react';

import { getImageUrl } from '../../utils/cartHelpers';

const CartItem = ({ product }) => {
  const { name, price, count } = product;

  return (
    <div className="cart-item">
      <img src={getImageUrl(product)} alt="product" />
      <div className="cart-item-details">
        <span>{name}</span>
        <span>
          {count} x €{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
