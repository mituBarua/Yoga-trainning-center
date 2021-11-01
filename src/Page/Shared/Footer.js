import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaFacebook,FaInstagramSquare,FaInvision,FaSnapchat} from "react-icons/fa";
import logo from "../../images/logo-normal.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="web-footer">
      <Container>
        <div>
          <Row className="py-5 ms-5">
            <Col md={3}>
             
               <img src={logo} alt="logo"/>
               <br/>
               <br/>
              <p>
                Welcome to WellSpring , where studying music and sharing our
                knowledge comes foremost.
              </p>
            </Col>
            <Col md={4}>
              <h2>WORKING HOURS</h2>
              <p>Monday: 10AM - 9PM</p>
              <p>Twesday: 10AM - 9PM</p>
              <p>Wednessday: 10AM - 9PM</p>
              <p>Thursday: 10AM - 9PM</p>
              <p>Friday: 10AM - 9PM</p>
              <p>Saturday: 10AM - 9PM</p>
              <p>Sunday: Closed</p>
            </Col>
            <Col md={4}>
              <h2>Follow Us!!</h2>
              <div className="social">

              <FaFacebook className="social-icon"/>
              <FaInstagramSquare className="social-icon"/>
              <FaInvision className="social-icon"/>
              <FaSnapchat className="social-icon"/>
              </div>
              <img
                src="https://smart.servier.com/wp-content/uploads/2016/10/world-map-update.png"
                alt="map"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
