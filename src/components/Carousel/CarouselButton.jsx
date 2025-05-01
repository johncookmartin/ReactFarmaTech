import React from 'react';
import { useContext } from 'react';
import { CarouselContext } from './Carousel';

const CarouselButton = ({ advance = true, className, onClick, children }) => {
  const display = !!children ? children : advance ? '>' : '<';
  const { advanceImage, reverseImage } = useContext(CarouselContext);

  const onClickHandler = () => {
    if (!!onClick) {
      onClick();
    } else {
      advance ? advanceImage() : reverseImage();
    }
  };

  return (
    <button onClick={onClickHandler} className={className}>
      {display}
    </button>
  );
};

export default CarouselButton;
