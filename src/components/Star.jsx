import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
  const rattingStart = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span className="flex" key={index}>
        {stars >= index + 1 ? (
          <FaStar className=" text-yellow-500" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center ">
      {rattingStart}
      <p className=" ml-2">({reviews} customer reviews)</p>
    </div>
  );
};

export default Star;
