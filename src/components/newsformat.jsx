import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import React from "react";
import moment from "moment";

export default (news) => {
  return (
    <>
      <Container fluid className="my-3 px-lg-0">
        <Row style={{ width: "100%" }} className="mx-0 px-lg-0">
          <Col sm={12} lg={6} className="mb-md-3 pl-lg-0">
            {CardItemPrincipal(news[0])}
          </Col>
          <Col sm={12} lg={6} className="px-0">
            <Container fluid className="pr-lg-0">
              <Row>
                <Col md={4} lg={12} className="my-lg-1">
                  {CardItemScondary(news[1])}
                </Col>
                <Col md={4} lg={12} className="my-lg-1">
                  {CardItemScondary(news[2])}
                </Col>
                <Col md={4} lg={12} className="my-lg-1">
                  {CardItemScondary(news[3])}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mx-0 px-lg-0">
        <Row className="my-3 px-md-3">
          <Col>{Carditem(news[4])}</Col>
          <Col>{Carditem(news[5])}</Col>
          <Col>{Carditem(news[6])}</Col>
        </Row>
        <Row className="px-md-3">
          <Col>{Carditem(news[7])}</Col>
          <Col>{Carditem(news[8])}</Col>
          <Col>{Carditem(news[9])}</Col>
        </Row>
      </Container>
    </>
  );
};

function CardItemPrincipal(news) {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={news.img_url} alt="imagen de noticia" />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>
            <Badge variant="secondary">{news.source_name}</Badge>
          </Card.Title>
          <Card.Subtitle id="title">{news.title}</Card.Subtitle>
          <p>{moment.unix(news.date).format("LT")}</p>
          <a
            className="d-flex card-link"
            href={news.url}
            target="_blank"
            onclick="window.open(this.href, this.target)"
          >
            <Button id="info" variant="info" className="ml-auto btn-sm">
              Ver más
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

function CardItemScondary(news) {
  return (
    <div>
      <Card
        style={{ width: "100%" }}
        className="d-flex flex-lg-row justify-content-between"
      >
        <Container fluid className="m-0 p-0">
          <Row className="m-0 p-0">
            <Col md={12} lg={4} className="m-0 p-0">
              <Card.Img
                variant="top"
                src={news.img_url}
                alt="imagen de noticia"
              />
            </Col>
            <Col className="m-0 p-0">
              <Card.Body className=" py-lg-1 d-flex flex-column justify-content-between">
                <Card.Title className="mx-lg-1">
                  <Badge variant="secondary">{news.source_name}</Badge>
                </Card.Title>
                <Card.Subtitle id="title">{news.title}</Card.Subtitle>
                <p>{moment.unix(news.date).format("LT")}</p>
                <a
                  className="d-flex card-link"
                  href={news.url}
                  target="_blank"
                  onclick="window.open(this.href, this.target)"
                >
                  <Button id="info" variant="info" className="ml-auto btn-sm">
                    Ver más
                  </Button>
                </a>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}
function Carditem(news) {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={news.img_url} alt="imagen de noticia" />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>
            <Badge variant="secondary">{news.source_name}</Badge>
          </Card.Title>
          <Card.Subtitle id="title">{news.title}</Card.Subtitle>
          <p>{moment.unix(news.date).format("LT")}</p>
          <a
            className="d-flex card-link"
            href={news.url}
            target="_blank"
            onclick="window.open(this.href, this.target)"
          >
            <Button id="info" variant="info" className="ml-auto btn-sm">
              Ver más
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
