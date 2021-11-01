import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = (props) => {
  const { id, name, img, type, desc, price } = props.service;
  return (
    <div>
      <Col>
        <Card className="custom-card">
          <Card.Img variant="top" src={img} className="card-img" />
          <span className="price">{price}</span>
          <Card.Body className="card-des">
            <h6 className="type">{type}</h6>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Link to={`/serviceDetails/${id}`}>
              <Button variant="danger">Learn More</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
