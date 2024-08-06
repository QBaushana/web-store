// src/redux/reducers/userReducer.js

// Define initial state for user management
const initialState = {
  users: [],         // Array to store registered users
  currentUser: null, // Object to store the currently logged-in user
};

// Reducer function to manage user state
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle user registration action
    case 'REGISTER_USER':
      return {
        ...state,
        // Add the new user to the users array
        users: [...state.users, action.payload],
      };
    
    // Handle user login action
    case 'LOGIN_USER':
      // Find the user matching the provided credentials
      const user = state.users.find(
        (user) => user.username === action.payload.username && user.password === action.payload.password
      );
      return {
        ...state,
        // Set currentUser to the found user or null if no match is found
        currentUser: user || null,
      };
    
    // Return current state if action type is not handled
    default:
      return state;
  }
};

// Export the userReducer to be used in the Redux store
export default userReducer;
