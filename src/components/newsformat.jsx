import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React from "react";

function Carditem(news) {
  return (
    <div>
      <Card style={{ width: "90%" }}>
        <Card.Img variant="top" src={news.img_url} />
        <Card.Body>
          <Card.Subtitle>{news.title}</Card.Subtitle>
          <a
            href={news.url}
            target="_blank"
            onclick="window.open(this.href, this.target)"
          >
            <Button variant="primary">Ver más</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
export default (news) => {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col xs={12} sm={6} md={7}>
            {Carditem(news[0])}
          </Col>
          <Col xs={12} sm={6} md={5}>
            <Container>
              <Row>{Carditem(news[1])}</Row>
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
