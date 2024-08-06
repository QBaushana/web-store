// Import necessary libraries and hooks
import React, { useState } from 'react';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

// Define the CartPage component
const CartPage = () => {
  // Use the Redux useSelector hook to get the cart items from the store
  const cartItems = useSelector((state) => state.cart);

  // State for shipment method
  const [shipmentMethod, setShipmentMethod] = useState('standard');

  // State for help modal visibility
  const [showHelp, setShowHelp] = useState(false);

  // Calculate the total price of items in the cart
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Handle shipment method change
  const handleShipmentChange = (event) => {
    setShipmentMethod(event.target.value);
  };

  // Handle closing of help modal
  const handleHelpClose = () => setShowHelp(false);

  // Handle showing of help modal
  const handleHelpShow = () => setShowHelp(true);

  return (
    <Container>
      {/* Cart page title */}
      <h1 className="text-center my-5">Your Cart</h1>
      
      {/* Table for displaying cart items */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>1</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Display total price */}
      <h3 className="text-right">Total: ${total.toFixed(2)}</h3>

      <Form>
        <Form.Group controlId="shipmentMethod">
          <Form.Label>Select Shipment Method</Form.Label>
          <Form.Control as="select" value={shipmentMethod} onChange={handleShipmentChange}>
            <option value="standard">Standard Shipping</option>
            <option value="express">Express Shipping</option>
          </Form.Control>
        </Form.Group>
      </Form>

      {/* Help button */}
      <Button variant="info" onClick={handleHelpShow}>Help</Button>

      {/* Checkout button */}
      <Button variant="success" size="lg" block>Proceed to Checkout</Button>

      {/* Help modal */}
      <Modal show={showHelp} onHide={handleHelpClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Standard Shipping:</strong> Delivers in 5-7 business days.</p>
          <p><strong>Express Shipping:</strong> Delivers in 2-3 business days.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHelpClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

// Export the CartPage component as the default export
export default CartPage;
