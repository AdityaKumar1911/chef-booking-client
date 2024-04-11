import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../Slider/Slider.css";

const MyCarousel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://coox-beta.s3.ap-south-1.amazonaws.com/images/website/homePage/waiter_service_mobile.png?v=1658245154"
            alt="Waiter Service"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://coox-beta.s3.ap-south-1.amazonaws.com/images/website/homePage/chef_service_mobile.png?v=1658245154"
            alt="Chef Service"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://coox-beta.s3.ap-south-1.amazonaws.com/images/website/homePage/cleaner_service_mobile.png?v=1658245154'
            alt="Cleaner Service"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
