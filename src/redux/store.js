// src/redux/store.js

import { createStore, combineReducers } from 'redux';
import { productsReducer, cartReducer, userReducer } from './reducers';

// Combine all reducers into a rootReducer
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

// Create the Redux store with the rootReducer
const store = createStore(rootReducer);

export default store; // Export the store as the default export
