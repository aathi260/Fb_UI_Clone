import React from "react";

function MiddleHeader({ Icon }) {
  return (
    <div className="flex items-center cursor-pointer  md:px-6 xl:px-11 sm:h-12 md:hover:bg-gray-100 rounded-xl ">
      <Icon className=" text-center h-5 text-blue-500 sm:h-7 mx-auto " />
    </div>
  );
}

export default MiddleHeader;
