import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//Helper methods
import { getCart } from '../../utils/cartHelpers';

import Button from '../core/Button';
import CartItem from './CartItem';

const CartDropdown = (props) => {
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setItems(getCart());
  }, []);

  const handleClick = () => {
    history.push('/cart');
    props.showCart(false);
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown-item-container">
        {items.map((item) => (
          <CartItem key={item._id} product={item} />
        ))}
      </div>
      <Button
        onClick={handleClick}
        label="Go To Checkout"
        className="btn btn-primary py-3 px-4"
      />
    </div>
  );
};

export default CartDropdown;
