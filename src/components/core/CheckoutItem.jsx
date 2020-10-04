import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  addCartItem,
  removeItem,
  clearItemFromCart,
} from '../../redux/actions/cart';

import { getImageUrl } from '../../utils/cartHelpers';

const CheckoutItem = ({ item, addItem, removeItem, clearItem }) => {
  return (
    <>
      <div className="checkout-item">
        <div className="checkout-item-image">
          <Link to={`/product/${item._id}`}>
            <img src={getImageUrl(item)} alt="item.name" />
          </Link>
        </div>
        <div className="checkout-item-details">
          <div>{item.name}</div>
          <div className="checkout-item-quantity">
            <div onClick={() => removeItem(item)} className="arrow">
              -
            </div>
            <span className="arrow value">{item.count}</span>
            <div onClick={() => addItem(item)} className="arrow">
              +
            </div>
          </div>
          <div>&euro;{item.price}</div>
          <div className="checkout-item-remove" onClick={() => clearItem(item)}>
            Remove
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addCartItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
