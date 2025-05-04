import React from "react";
import "../index.css"; // Assuming styles are in App.css

const Images = () => {
  const images = Array.from({ length: 50 }, (_, i) => `/pics${i + 1}.jpg`);

  // Aspect ratio pattern
  const aspectRatios = [
    "aspect-[3/3]", "aspect-[3/5]", "aspect-[2/2]", "aspect-[5/3]", 
    "aspect-[4/4]", "aspect-[3/6]", "aspect-[5/4]", "aspect-[6/3]",
    "aspect-[4/5]", "aspect-[2/4]"
  ];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll-left gap-4 w-max">
        {images.map((src, index) => {
          const aspectClass = aspectRatios[index % aspectRatios.length]; // Cycle through the aspect ratio array
          return (
            <div
              key={index}
              className={`flex-shrink-0 rounded-lg bg-gray-100 ${aspectClass} w-48 overflow-hidden`}
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
          const aspectClass = aspectRatios[index % aspectRatios.length]; // Cycle through the aspect ratio array
          return (
            <div
              key={`dup-${index}`}
              className={`flex-shrink-0 rounded-lg bg-gray-100 ${aspectClass} w-48 overflow-hidden`}
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

