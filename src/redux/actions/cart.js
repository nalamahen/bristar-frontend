import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './types';

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addCartItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
