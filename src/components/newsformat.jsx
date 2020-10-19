import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React from "react";

export default (news) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={7}>
            <div>
              <Card style={{ width: "90%" }}>
                <Card.Img variant="top" src={news[0].img_url} />
                <Card.Body>
                  <Card.Subtitle>{news[0].title}</Card.Subtitle>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
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
};
