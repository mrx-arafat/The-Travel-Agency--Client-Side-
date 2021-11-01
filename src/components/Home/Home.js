import React from "react";
import { Carousel, Toast } from "react-bootstrap";
import slide1 from "../../img/slide/slide-1.jpg";
import slide2 from "../../img/slide/slide-2.jpg";
import slide3 from "../../img/slide/slide-3.jpg";
import Newsletter from "../Newsletter/Newsletter";
import Services from "../Services/Services";
import "./Home.css";
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

      {/* toast*/}

      <Toast className="toast">
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Travel Agency</strong>
          <small>10 mins ago</small>
        </Toast.Header>
        <Toast.Body>
          Hello, world! This is our message. That we are providing the best
          travel experience.
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default Home;
