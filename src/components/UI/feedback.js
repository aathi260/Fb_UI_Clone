import React from "react";

function feedback({ Icon, title }) {
  return (
    <div className="flex items-center justify-  center cursor-pointer hover:bg-gray-100 w-34 h-10 mt-1 mb-1 rounded-md px-9">
      <Icon className="h-6 text-gray-500 mr-1" />
      <p className="text-gray-600 font-normal text-md">{title}</p>
    </div>
  );
}

export default feedback;
