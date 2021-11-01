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
      {/* carousel */}

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>The Travel</h3>
            <p>
              Book flights, hotels, trains & rental cars anywhere in the world
              in just seconds.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3>The Travel</h3>
            <p>
              Book flights, hotels, trains & rental cars anywhere in the world
              in just seconds.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>The Travel</h3>
            <p>
              Book flights, hotels, trains & rental cars anywhere in the world
              in just seconds.
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
