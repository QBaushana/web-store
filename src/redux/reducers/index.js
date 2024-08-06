// src/redux/reducers/index.js

import { ADD_TO_CART, SET_USER } from '../actions';

// Initial state for products
const initialProductsState = [
  // Define initial products here
];

// Products reducer to manage products state
export const productsReducer = (state = initialProductsState, action) => {
  switch(action.type) {
    default:
      return state; // Return current state for any unknown action type
  }
};

// Initial state for cart
const initialCartState = [];

// Cart reducer to manage cart state
export const cartReducer = (state = initialCartState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]; // Add the new product to the cart
    default:
      return state; // Return current state for any unknown action type
  }
};

// Initial state for user
const initialUserState = null;

// User reducer to manage user state
export const userReducer = (state = initialUserState, action) => {
  switch(action.type) {
    case SET_USER:
      return action.payload; // Set the user information
    default:
      return state; // Return current state for any unknown action type
  }
};
