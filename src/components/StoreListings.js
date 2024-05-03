import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/StoreListing.css';

const stores = [
  { id: 1, name: "Store A", description: "Description A" },
  { id: 2, name: "Store B", description: "Description B" },
  { id: 3, name: "Store C", description: "Description C" },
  { id: 4, name: "Store D", description: "Description D" },
  { id: 5, name: "Store E", description: "Description E" },
  { id: 6, name: "Store F", description: "Description F" },
  // Add more stores as needed
];

const StoreListings = () => {
  return (
    <Container>
      <Row className="g-4">
        {stores.map(store => (
          <Col xs={12} md={6} key={store.id}>
            <Card>
              <Card.Body>
                <Card.Title>{store.name}</Card.Title>
                <Card.Text>
                  {store.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StoreListings;
