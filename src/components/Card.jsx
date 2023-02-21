import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import TUi from "../assets/tailwindui.jpg";
import Business_1 from "../assets/business_1.png";

const Card = ({ t1, t2, t3, linkName }) => {
  const [isHovering, setIsHovering] = useState(false);

  const imgSrc = isHovering ? TUi : Business_1;

  //place onMouseEnter on parent element to wrap the whole function
  return (
    <div
      className="container"
      /* hover wrap */
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`w-80 bg-white overflow-hidden shadow-xl rounded-md group
        ${isHovering ? "transform scale-110 " : "transform scale-90 "} 
        transition-all duration-300 ease-out hover:ease-in 
      hover:bg-slate-800 hover:text-white 
        `}
      >
        {/* image */}
        <div className="h-48 overflow-hidden">
          <img
            className={`w-full ${
              isHovering ? "transform scale-90 " : "transform scale-110 "
            } transition-transform duration-500 hover:cursor-pointer`}
            src={imgSrc}
            alt="Image"
          />
        </div>
        {/* content */}
        <div className="h-80 group-hover:h-full">
          <h1 className=" text-xl font-bold mt-1">{t1}</h1>
          {isHovering ? (
            <div className="justify-items-center p-4">
              <span className="text-start">
                <p>{t3}</p>
              </span>
              <NavLink to={`./${linkName}`} key={linkName}>
                <button
                  className=" font-semibold rounded-md px-2 my-1 mt-4 bg-slate-200 text-gray-600 
                hover:bg-pink-500 hover:text-gray-100 "
                >
                  Learn More
                </button>
              </NavLink>
            </div>
          ) : (
            <p>{t2}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
