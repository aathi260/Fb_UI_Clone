import React from "react";

function card({ source, title }) {
  return (
    <div>
      <div className="w-28 h-44 sm:w-28 sm:h-48 border-gray-600 rounded-lg shadow-md cursor-pointer relative ">
        <img
          className="w-28 h-44 sm:w-28 sm:h-48 object-cover rounded-lg  hover:scale-105 transform transition duration-300 ease-out filter brightness-75"
          src={source}
          alt=""
        />
        <p className="absolute bottom-1 left-3 text-md font-semibold text-white ">
          {title}
        </p>
      </div>
    </div>
  );
}

export default card;
