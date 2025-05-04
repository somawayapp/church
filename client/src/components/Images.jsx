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
            className={`flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden relative ${
              isSquare ? "aspect-[3/4] w-48" : "aspect-[3/4] w-48"
            }`}
          >
            <div
              className={`w-full h-full ${
                isSquare ? "" : "flex items-center justify-center"
              }`}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className={`object-cover rounded-lg ${
                  isSquare ? "w-full h-full" : "w-48 h-48"
                }`}
              />
            </div>
          </div>
          
          );
        })}
        {/* Duplicate for seamless scroll */}
        {images.map((src, index) => {
          const isSquare = index % 2 === 0;
          return (
            <div
            key={index}
            className={`flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden relative ${
              isSquare ? "aspect-[3/4] w-48" : "aspect-[3/4] w-48"
            }`}
          >
            <div
              className={`w-full h-full ${
                isSquare ? "" : "flex items-center justify-center"
              }`}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className={`object-cover rounded-lg ${
                  isSquare ? "w-full h-full" : "w-48 h-48"
                }`}
              />
            </div>
          </div>
          
          );
        })}
      </div>
    </div>
  );
};

export default Images;
