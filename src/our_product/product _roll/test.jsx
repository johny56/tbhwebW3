import { useState } from "react";
import React from "react";

export default function Product_Rolltest() {
  const [currentProduct, setCurrentProduct] = useState(1);
  const [IsRolling_R, setIsRolling_R] = useState(false);
  const [IsRolling_L, setIsRolling_L] = useState(false);

  const handleClick = (product) => {
    if ((currentProduct % 3) !== 0) {
      setIsRolling_L(currentProduct > product);
      setIsRolling_R(currentProduct < product);
    } else {
      setIsRolling_L(currentProduct > product);
      setIsRolling_R(currentProduct < product);
    }
  }

  return (
    <div className="relative h-screen bg-white">
      <div className="relative flex flex-row-4 justify-center">
        {[1, 2, 3, 4].map((block, index) => (
          <div
            key={index}
            className={`absolute h-64 w-64 bg-red-300 ${
              index === 0 ? 'left-36' : ''
            } ${IsRolling_L ? 'transform -translate-x-96 -ml-48 duration-700 ease-out object-fit delay-700 z-20' :
                     IsRolling_R ? 'transform duration-700 ease-out translate-x-96 ml-44 object-fit delay-700 overflow-clip z-10' : 'transform translate-x-0'
              }`}
          ></div>
        ))}
      </div>
      <button
        onClick={() => handleClick(currentProduct + 1)}
        className={`absolute left-56 h-12 w-12 bg-gray-500 rounded-full`}
      >
        {"<"}
      </button>
      <button
        onClick={() => handleClick(currentProduct - 1)}
        className={`absolute right-72 h-12 w-12 bg-gray-500 rounded-full`}
      >
        {">"}
      </button>
    </div>
  );
}
