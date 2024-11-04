import React, { useState, useEffect } from "react";

const ImageCarousel = ({images}) => {
  // State to keep track of the currently active image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate the images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  // Function to handle dot click (jump to a specific image)
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mt-2 h-[550px] lg:h-[100vh] ">
      {/* Image Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out  ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-fill lg:object-cover"
          />
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
