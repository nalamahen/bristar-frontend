import React from 'react';
import { connect } from 'react-redux';

import {
  addCartItem,
  removeItem,
  clearItemFromCart,
} from '../../redux/actions/cart';

const CheckoutItem = ({ item, addItem, removeItem, clearItem }) => {
  return (
    <div>
      <div>{item.name}</div>
      <di className="checkout-item-quantity">
        <div onClick={() => removeItem(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{item.count}</span>
        <div onClick={() => addItem(item)} className="arrow">
          &#10095;
        </div>
        <div>{item.price}</div>
        <div onClick={() => clearItem(item)}>Remove Iitem</div>
      </di>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addCartItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
