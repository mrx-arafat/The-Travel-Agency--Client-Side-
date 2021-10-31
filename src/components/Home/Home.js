import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../img/slide/slide-1.jpg";
import slide2 from "../../img/slide/slide-2.jpg";
import slide3 from "../../img/slide/slide-3.jpg";
import Newsletter from "../Newsletter/Newsletter";
import Services from "../Services/Services";
const Home = () => {
  return (
    <div>
      <h2>Home sweet Home</h2>

      {/* carousel */}

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Services></Services>

      {/* newsletter */}

      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
