import React from "react";

function RightSlideBarDiv({ Image, title }) {
  return (
    <div className="flex justify-start items-center gap-3 w-70 h-14 rounded-md p-1 hover:bg-gray-200 cursor-pointer">
      <div className="h-10 w-10 rounded-full">
        <img
          src={Image}
          className="h-10 w-10 rounded-full object-cover"
          alt={title}
        />
      </div>
      <p className=" text-sm font-medium">{title}</p>
    </div>
  );
}

export default RightSlideBarDiv;
