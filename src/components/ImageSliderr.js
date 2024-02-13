import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
  'https://placekitten.com/600/300',
  'https://placekitten.com/601/300',
  'https://placekitten.com/602/300',
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden h-64">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transform transition-transform ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
