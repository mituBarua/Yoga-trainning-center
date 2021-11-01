import React, { useEffect, useState } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(() => {
      fetch("/service.json")
      .then((res) => res.json())
      .then((data) => {
          setServices(data);
      });
    },[])

    return (
        <div id="services">
            <Container>
            <h2 className="service-title">We Offer Different Services</h2>
            <Row className="py-3 my-2">
          {services.map((service) => (
             
            <Col md="4" className="my-2">
              <Service key={service.id} service={service}></Service>
            </Col>
          ))}
        </Row>
            </Container>
        </div>
    );
};

export default Services;