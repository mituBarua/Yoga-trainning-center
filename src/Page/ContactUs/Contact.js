import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import contactImg from "../../images/cont.jpg";
import "../AboutUs/About.css";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="aboutBg">
        <h5>Contact us</h5>
      </div>
      {/* <div className="row container"> */}
      {/* <div className="col-md-7">
          <h5>Get in Touch</h5>
          <p>Be Informed. Be Smart. Be Sure.</p> */}

      <div className="contact container">
        <Row>
          <Col md={6} className="py-2">
            <img className="w-100" src={contactImg} alt="map" />
          </Col>
          <Col md={6} className="py-1">
            <h3>Drop us a line</h3>

            <div>
              <Form className="form-ct">
                <div className="contact-form">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Please Enter Your Name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Write a Message</Form.Label>
                  <Form.Control placeholder="Write Us" as="textarea" rows={3} />
                </Form.Group>
                <div className="mb-5">
                  <Button variant="danger">Send Messages</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Contact;
