import React from "react";
import "./styles.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <>
      <header ID="jumbotron">
        <h1 className="display-4">Las Noticias</h1>
      </header>
      <Navbar className="Navbar" bg="light" expand="lg">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Política</Nav.Link>
        <Nav.Link href="#">Internacional</Nav.Link>
        <Nav.Link href="#">Deportes</Nav.Link>
        <Nav.Link href="#">Tecnología</Nav.Link>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={7}>
            <p>First</p>
          </Col>
          <Col xs={12} sm={6} md={5}>
            <Container>
              <Row>
                <p>Sencond</p>
              </Row>
              <Row>
                <p>Third</p>
              </Row>
              <Row>
                <p>Fourth</p>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>Fifth</p>
          </Col>
          <Col>
            <p>Six</p>
          </Col>
          <Col>
            <p>Seven</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Eight</p>
          </Col>
          <Col>
            <p>Nine</p>
          </Col>
          <Col>
            <p>Ten</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
