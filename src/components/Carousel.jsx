import React from 'react';
import { useState, useEffect } from 'react';
import './styles/carousel.css';

const Carousel = ({ imageArr }) => {
  const [imageIndex, setImageIndex] = useState(1);
  const carouselImage = imageArr[imageIndex];

  const advanceImage = () => {
    setImageIndex((prev) => (prev == imageArr.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setImageIndex((prev) => (prev == 0 ? imageArr.length - 1 : prev - 1));
  };

  useEffect(() => {
    setInterval(() => {
      advanceImage();
    }, 30000);
  }, []);

  return (
    <section className="carousel">
      <img src={carouselImage} />
      <button onClick={previousImage} className="carousel-button back-button">
        &#10094;
      </button>
      <button onClick={advanceImage} className="carousel-button forward-button">
        &#10095;
      </button>
    </section>
  );
};

export default Carousel;
