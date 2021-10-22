import React from "react";

function leftSlideBarDiv({ Icon, title }) {
  return (
    <div className="flex justify-start items-center gap-3 w-82 h-14 rounded-md p-1 hover:bg-white">
      <div className="w-9 h-9">
        <img className="w-9 h-9 object-cover rounded-full" src={Icon} alt="" />
      </div>
      <p className=" text-sm font-medium">{title}</p>
    </div>
  );
}

export default leftSlideBarDiv;
