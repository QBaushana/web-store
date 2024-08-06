// src/components/LandingPage.js

// Import necessary libraries and components
import React from 'react';
import { Container, Button } from 'react-bootstrap'; // React-Bootstrap components
import './LandingPage.css'; // Custom CSS for styling

// LandingPage component
const LandingPage = () => {
  return (
    // Container for the entire landing page
    <Container className="landing-page">
      {/* Content of the landing page */}
      <div className="landing-page-content">
        <h1>Welcome to WebStore</h1> {/* Landing page title */}
        <p>Your one-stop shop for all your needs</p> {/* Subtitle/description */}
        <Button variant="primary" size="lg" href="/store">Shop Now</Button> {/* Button to navigate to the store page */}
      </div>
    </Container>
  );
};

export default LandingPage; // Export the LandingPage component as the default export
