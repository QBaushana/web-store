// src/components/StorePage.js

// Import necessary libraries and components
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'; // React-Bootstrap components
import { useDispatch } from 'react-redux'; // Redux dispatch hook
import { addToCart } from '../redux/actions'; // Import addToCart action
import './StorePage.css'; // Custom CSS for styling

// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: 10.0, image: '/images/p9.jpeg' },
  { id: 2, name: 'Product 2', price: 20.0, image: '/images/p10.jpeg' },
  { id: 3, name: 'Product 3', price: 30.0, image: '/images/p11.jpeg' },
];

// StorePage component
const StorePage = () => {
  const dispatch = useDispatch(); // Initialize dispatch

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch addToCart action
  };

  return (
    // Container for the entire store page
    <Container>
      <h1 className="text-center my-5">Store</h1> {/* Store page title */}
      
      <Row>
        {/* Map through the products array and create a Card for each product */}
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} /> {/* Product image */}
              <Card.Body>
                <Card.Title>{product.name}</Card.Title> {/* Product name */}
                <Card.Text>${product.price.toFixed(2)}</Card.Text> {/* Product price */}
                <Button 
                  variant="primary" 
                  block
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button> {/* Add to Cart button */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StorePage; // Export the StorePage component as the default export
