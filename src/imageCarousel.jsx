import React, { useState } from 'react';
import './index.css';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-carousel">
      <button onClick={prevImage}>&lt;</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default ImageCarousel;
