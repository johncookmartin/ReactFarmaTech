import React from 'react';
import { useState, useEffect, createContext } from 'react';
import Modal from '../Modal';

const CarouselContext = createContext();

const Carousel = ({
  imageArr,
  className,
  children,
  automate = true,
  pop = false,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const carouselImage = imageArr[imageIndex];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const advanceImage = () => {
    setImageIndex((prev) => (prev == imageArr.length - 1 ? 0 : prev + 1));
  };

  const reverseImage = () => {
    setImageIndex((prev) => (prev == 0 ? imageArr.length - 1 : prev - 1));
  };

  const toggleModal = () => {
    if (!pop) return;
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (automate) {
      setInterval(() => {
        advanceImage();
      }, 10000);
    }
  }, []);

  return (
    <CarouselContext.Provider
      value={{ advanceImage: advanceImage, reverseImage: reverseImage }}
    >
      <section className={className}>
        <img src={carouselImage} onClick={toggleModal} />
        {children}
      </section>

      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <img src={carouselImage} />
      </Modal>
    </CarouselContext.Provider>
  );
};

export default Carousel;
export { CarouselContext };
