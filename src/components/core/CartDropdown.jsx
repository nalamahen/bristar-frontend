import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { toggleCartHidden } from '../../redux/actions/cart';
import { selectCartItems } from '../../redux/selectors/cart';

import Button from '../core/Button';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/cart');
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-dropdown-item-container">
          {cartItems.map((item) => (
            <CartItem key={item._id} product={item} />
          ))}
        </div>
      ) : (
        <div className="cart-dropdwon-empty-message">Your cart is empty</div>
      )}
      <Button
        onClick={handleClick}
        label="Go To Checkout"
        className="btn btn-outline-danger mt-2 mb-2"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
