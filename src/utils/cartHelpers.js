import { API } from '../config';

export const emptyCart = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('cart');
    next();
  }
};

export const getImageBackground = (product) => {
  return { backgroundImage: `url(${API}/product/photo/${product._id})` };
};

export const getImageUrl = (product) => {
  return `${API}/product/photo/${product._id}`;
};

/*** new method to addItem ****/

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const cartItemExisits = cartItems.find(
    (item) => item._id === cartItemToAdd._id
  );

  if (cartItemExisits) {
    return cartItems.map((cartItem) =>
      cartItem._id === cartItemToAdd._id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, count: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToRemove._id
  );

  if (existingCartItem.count === 1) {
    return cartItems.filter(
      (cartItem) => cartItem._id !== cartItemToRemove._id
    );
  }

  return cartItems.map((cartItem) =>
    cartItem._id === cartItemToRemove._id
      ? { ...cartItem, count: cartItem.count - 1 }
      : cartItem
  );
};
