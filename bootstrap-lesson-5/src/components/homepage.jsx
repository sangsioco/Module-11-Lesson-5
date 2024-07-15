import React from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import '../homepage_style.css'; // Adjust the path if necessary

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="gallery.html">Entertainment Gallery</a></li>
          <li><a href="ctabuttons.html">Watch Now</a></li>
          <li><a href="feedback.html">Feedback</a></li>
        </ul>
      </nav>

      <div className="cta-button">
        <Button variant="primary" className="shop-now-btn">Shop Now</Button>
      </div>

      <Container>
        <Row>
          <Col md={4}>
            <Card className="featured-card">
              <Card.Body>
                <Card.Title>Featured Product 1</Card.Title>
                <Card.Text>
                  Check out this amazing product that you won't want to miss!
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="featured-card">
              <Card.Body>
                <Card.Title>Featured Product 2</Card.Title>
                <Card.Text>
                  Discover the features and benefits of this product.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="featured-card">
              <Card.Body>
                <Card.Title>Featured Product 3</Card.Title>
                <Card.Text>
                  Don't miss out on the special offer for this product.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
