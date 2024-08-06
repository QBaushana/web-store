// src/redux/actions/index.js

// Define action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_USER = 'SET_USER';

// Action creator for adding a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

// Action creator for setting the user information
export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});
