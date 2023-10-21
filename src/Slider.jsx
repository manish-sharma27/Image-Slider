import React, { useState } from "react";
import image1 from './images/image1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
const images  = [
  image1,
  img2,
  img3
  
];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-slider">
      <button onClick={prevSlide}>Previous</button>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};
export default ImageSlider;
