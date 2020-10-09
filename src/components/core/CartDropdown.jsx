import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Actions
import { toggleCartHidden, hideCartDropdown } from '../../redux/actions/cart';
import { selectCartItems, selectCartTotal } from '../../redux/selectors/cart';

import Button from '../core/Button';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems, cartTotal, dispatch }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/cart');
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <>
          <div
            onClick={() => dispatch(hideCartDropdown())}
            className="cart-dropdown-delete"
          >
            &#10005;
          </div>
          <div className="cart-dropdown-item-container">
            {cartItems.map((item) => (
              <CartItem key={item._id} product={item} />
            ))}
            <div className="cart-dropdown-total">Total: &euro;{parseFloat(cartTotal).toFixed(2)}</div>
          </div>
        </>
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CartDropdown);
