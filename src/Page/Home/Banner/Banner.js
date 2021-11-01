import React from "react";
import { Button, Carousel } from "react-bootstrap";
import img1 from "../../../images/banner/img1.jpg";
import img2 from "../../../images/banner/img2.jpg";
import img3 from "../../../images/banner/img3.jpg";
import img4 from "../../../images/banner/img4.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <Carousel fade className="custom-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h1>Keeping Your Body At Its Best</h1>
            <p>Yoga improves strength, balance and flexibility.</p>
            <Button variant="danger">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h1>Experience the Difference</h1>
            <p>
              It is known for its ability to ease stress and promote relaxation.
            </p>
            <Button variant="danger">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Third slide" />

          <Carousel.Caption>
            <h1>Beautiful Body. Built by You</h1>
            <p>
              Studies suggest that practicing yoga may reduce inflammation as
              well.
            </p>
            <Button variant="danger">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <img className="d-block w-100" src={img4} alt="Third slide" /> */}
      </Carousel>
    </div>
  );
};

export default Banner;
