import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap';
import './notfound.css';

const NotFound = () => {
  return (
    <Container className="notfound">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="text-danger">404 - Not Found</h1>
          <p className="lead">Oops! The page you're looking for doesn't exist.</p>
          <Button variant="primary" as={NavLink} to="/">Go to HomePage</Button>
        </Col>
        <Col md={6}>
          <Image src="src/assets/404-image.jpg" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
