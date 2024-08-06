// src/redux/actions/userActions.js

// Action creator for registering a new user
export const registerUser = (user) => {
  return {
    type: 'REGISTER_USER', // Action type for registering a user
    payload: user, // The user object to be registered (payload)
  };
};

// Action creator for logging in a user
export const loginUser = (credentials) => {
  return {
    type: 'LOGIN_USER', // Action type for logging in a user
    payload: credentials, // The credentials object for user login (payload)
  };
};
