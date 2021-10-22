import React from "react";

function createRoom({ image, title }) {
  return (
    <div>
      <img
        src={image}
        alt={title}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ml-2 object-cover cursor-pointer"
      />
    </div>
  );
}

export default createRoom;
