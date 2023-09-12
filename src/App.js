import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Navbar, Nav, Card, Row, Col } from "react-bootstrap";

function App() {
  const firstImage =
    "https://images.pexels.com/photos/17960002/pexels-photo-17960002/free-photo-of-man-in-dotted-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const secondImage =
    "https://images.pexels.com/photos/5189865/pexels-photo-5189865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const thirdImage =
    "https://images.pexels.com/photos/14823051/pexels-photo-14823051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <React.Fragment>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">My Photo Lab</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-5">
          <h1>Welcome to My Photo Lab</h1>
        </Container>

        <Container className="mt-4">
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={firstImage} />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is the first card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={secondImage} />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>This is the second card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={thirdImage} />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>This is the third card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
