import { ADD_ITEM, TOGGLE_CART_HIDDEN, REMOVE_ITEM } from './types';

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addCartItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
