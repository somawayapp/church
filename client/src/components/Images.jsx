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
        isSquare ? "aspect-[3/4] w-50" : "aspect-[3/4] w-50 flex items-center"
      } overflow-hidden`}
    >
      <div className={`${!isSquare ? "aspect-[3/3] w-full" : "w-full h-full"}`}>
        <img
          src={src}
          alt={`Image ${index + 1}`}
          className="w-full h-full object-cover rounded-lg"
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
      className={`flex-shrink-0 rounded-lg bg-gray-100 ${
        isSquare ? "aspect-[3/4] w-50" : "aspect-[3/4] w-50 flex items-center"
      } overflow-hidden`}
    >
      <div className={`${!isSquare ? "aspect-[3/3] w-full" : "w-full h-full"}`}>
        <img
          src={src}
          alt={`Image ${index + 1}`}
          className="w-full h-full object-cover rounded-lg"
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
