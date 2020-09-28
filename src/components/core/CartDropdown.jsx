import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

//Helper methods
import { getCart } from '../../utils/cartHelpers';

// Actions
import { toggleCartHidden } from '../../redux/actions/cart';

import Button from '../core/Button';
import CartItem from './CartItem';

const CartDropdown = ({ toggleCartHidden }) => {
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setItems(getCart());
  }, []);

  const handleClick = () => {
    toggleCartHidden();
    history.push('/cart');
  };

  return (
    <div className="cart-dropdown">
      {items.length ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : (
        <div className="cart-dropdwon-empty-message">Your cart is empty</div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartDropdown);
