import React from "react";
import aboutImg from "../../images/about.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className="aboutBg">
        <h5>About us</h5>
      </div>
      <div className="row about">
        <div className="col-md-6">
          <img src={aboutImg} alt="aboutImg" />
        </div>
        <div className="col-md-6 about-desc">
          <h2>Tack Your Yoga To The Next Level With Us</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>
          <div className="row">
            <div className="col-md-6">
              <li>Vestibulum a lacus sed ex</li>
              <li>Curabitur id tellus in ipsum</li>
              <li>Curabitur id tellus in ipsum</li>
              <li>Vestibulum a lacus sed ex</li>
              <li>Vestibulum a lacus sed ex</li>
            </div>
            <div className="col-md-6">
              <li>Vestibulum a lacus sed ex</li>
              <li>Curabitur id tellus in ipsum</li>
              <li>Curabitur id tellus in ipsum</li>
              <li>Vestibulum a lacus sed ex</li>
              <li>Vestibulum a lacus sed ex</li>
            </div>
          </div>
          <div className="about-btn">
            <button className="btn btn-danger">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
