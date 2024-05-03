import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../App.css';  // Ensure this is the path to your CSS file

const BackgroundWithForm = () => {
  return (
    <div className="background-with-form">
      <Container style={{ width: '300px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px' }}>
        <Form>
          <Form.Group>
            <Form.Label>Enter your location:</Form.Label>
            <Form.Control type="text" placeholder="Type here..." />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default BackgroundWithForm;