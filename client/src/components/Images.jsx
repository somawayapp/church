import React from "react";
import "../index.css"; // Assuming styles are in App.css


const Images = () => {
  const images = Array.from({ length: 50 }, (_, i) => `/pics${i + 1}.jpg`);

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll-left gap-4 w-max">
        {images.map((src, index) => {
          const isSquare = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex-shrink-0 rounded-lg bg-gray-100 ${
                isSquare ? "aspect-square w-48" : "aspect-[3/3] w-32"
              } overflow-hidden`}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          );
        })}
        {/* Duplicate for seamless scroll */}
        {images.map((src, index) => {
          const isSquare = index % 2 === 0;
          return (
            <div
              key={`dup-${index}`}
              className={`flex-shrink-0 rounded-lg bg-gray-100 ${
                isSquare ? "aspect-square w-48" : "aspect-[3/3] w-32"
              } overflow-hidden`}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Images;
