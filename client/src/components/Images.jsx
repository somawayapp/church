import React from "react";
import "../index.css"; // Assuming styles are in App.css


const Images = () => {
  const images = Array.from({ length: 48 }, (_, i) => `/pics${i + 1}.jpg`);

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll-left gap-4 w-max">
        {images.map((src, index) => {
          const isSquare = index % 2 === 0;
          return (
            <div
            key={index}
            className={`flex-shrink-0 bg-gray-100 flex items-center justify-center ${
              isSquare ? "aspect-[3/4] w-48" : "w-48 h-48"
            } overflow-hidden rounded-lg`}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          
          );
        })}
        {/* Duplicate for seamless scroll */}
        {images.map((src, index) => {
          const isSquare = index % 2 === 0;
          return (
            <div
            key={index}
            className={`flex-shrink-0 bg-gray-100 flex items-center justify-center ${
              isSquare ? "aspect-[3/4] w-48" : "w-48 h-48"
            } overflow-hidden rounded-lg`}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          
          );
        })}
      </div>
    </div>
  );
};

export default Images;
