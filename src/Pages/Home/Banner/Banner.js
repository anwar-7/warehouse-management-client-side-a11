import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import './Banner.css';
import banner1 from '../../../Assets/images/banner/banner1.png';
import banner2 from '../../../Assets/images/banner/banner2.png';
import banner3 from '../../../Assets/images/banner/banner3.png';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        className="bannerItem"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h4 className=" fw-bold text-dark bg-light bg-opacity-75">
              Inventory Management
            </h4>
            <p className="fw-bold text-dark bg-light bg-opacity-75">
              {' '}
              We are the largest inventory management company in BD.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h4 className=" fw-bold text-dark bg-light bg-opacity-75">
              Service Management
            </h4>
            <p className="fw-bold text-dark bg-light bg-opacity-75">
              {' '}
              We are the biggest service provider for DELL, ACER, APPLE, etc.
              company in BD.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h4 className=" fw-bold text-dark bg-light bg-opacity-75">
              Customer Service
            </h4>
            <p className="fw-bold text-dark bg-light bg-opacity-75">
              {' '}
              We provide 24 hour customer service. We believe in service.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
