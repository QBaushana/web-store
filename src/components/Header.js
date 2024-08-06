// src/components/Header.js

// Import necessary libraries and components
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // React-Bootstrap components
import { Link } from 'react-router-dom'; // Link component for navigation

// Header component
const Header = () => {
  return (
    // Navbar component from React-Bootstrap for the header
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Navbar brand which links to the home page */}
        <Navbar.Brand as={Link} to="/">WebStore</Navbar.Brand>
        {/* Navbar toggle button for responsive design */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar collapse for responsive design */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav component for navigation links */}
          <Nav className="me-auto">
            {/* Navigation links using the Link component from react-router-dom */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; // Export the Header component as the default export
