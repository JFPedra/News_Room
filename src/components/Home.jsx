import { Container, Row, Col } from "react-bootstrap";
import React from "react";

export function Home() {
  return (
    <>
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
