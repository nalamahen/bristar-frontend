import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

//Helper methods
import { getCart } from '../../utils/cartHelpers';

// Actions
import { toggleCartHidden } from '../../redux/actions/cart';
import { selectCartItems } from '../../redux/selectors/cart';

import Button from '../core/Button';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  const history = useHistory();

  const handleClick = () => {
    toggleCartHidden();
    history.push('/cart');
  };

  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <React.Fragment>
          <div className="cart-dropdown-item-container">
            {cartItems.map((item) => (
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
        <React.Fragment>
          <div className="cart-dropdwon-empty-message">Your cart is empty</div>
          <Button
            onClick={handleClick}
            label="Go To Checkout"
            className="btn btn-primary py-3 px-4"
          />
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
