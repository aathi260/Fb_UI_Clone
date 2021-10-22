import React from "react";

function Activity({ Icon, title }) {
  return (
    <div className="flex items-center justify-center hover:bg-gray-100 rounded-lg w-48 p-1 gap-2 cursor-pointer">
      <img src={Icon} className="h-7" alt="" />
      <p className="text-gray-500 text-sm font-semibold">{title}</p>
    </div>
  );
}

export default Activity;
