// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the Redux store
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import StorePage from './components/StorePage';
import CartPage from './components/CartPage';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <Provider store={store}> {/* Provide the Redux store to the app */}
      <Router>
        <Header /> {/* Include the header component */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Route for the landing page */}
          <Route path="/store" element={<StorePage />} /> {/* Route for the store page */}
          <Route path="/cart" element={<CartPage />} /> {/* Route for the cart page */}
          <Route path="/register" element={<RegistrationForm />} /> {/* Route for the registration page */}
          <Route path="/login" element={<LoginForm />} /> {/* Route for the login page */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App; // Export the App component as the default export
