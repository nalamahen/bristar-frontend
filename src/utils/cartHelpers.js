import { API } from '../config';

export const addItem = (item = [], count = 0, next = (f) => f) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push({
      ...item,
      count: 1,
    });

    // remove duplicates
    // build an Array from new Set and turn it back into array using Array.from
    // so that later we can re-map it
    // new set will only allow unique values in it
    // so pass the ids of each object/product
    // If the loop tries to add the same value again, it'll get ignored
    // ...with the array of ids we got on when first map() was used
    // run map() on it again and return the actual product from the cart

    cart = Array.from(new Set(cart.map((p) => p._id))).map((id) => {
      return cart.find((p) => p._id === id);
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    next();
  }
};

export const itemTotal = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart')).length;
    }
  }
  return 0;
};

export const getCart = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart'));
    }
  }
  return [];
};

export const updateItem = (productId, count) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }

    cart.map((product, i) => {
      if (product._id === productId) {
        cart[i].count = count;
      }
    });

    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

export const removeItem = (productId) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }

    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
      }
    });

    localStorage.setItem('cart', JSON.stringify(cart));
  }
  return cart;
};

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

export const getTotal = (products) => {
  return products.reduce((currentValue, nextValue) => {
    return currentValue + nextValue.count * nextValue.price;
  }, 0);
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
