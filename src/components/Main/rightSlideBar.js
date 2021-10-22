import React from "react";
import {
  VideoCameraIcon,
  SearchIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import RightDiv from "./RightSlideBarDiv";
import Sponsored from "../UI/sponsored";

function leftSlideBar() {
  const rightSlideBar = [
    { Image: "images/raina.jpg", title: "Raina" },
    { Image: "images/virat.jpg", title: "Virat" },
    { Image: "images/rohit.jpg", title: "Rohit" },
    { Image: "images/thakur.jpg", title: "Thakur" },
    { Image: "images/bumrah.jpg", title: "Bumrah" },
    { Image: "images/max.jpg", title: "Max" },
  ];
  return (
    <div className="hidden xl:inline-flex flex-col mr-2">
      <div>
        <Sponsored />
      </div>
      <div className="w-80 h-80 scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-cgray">
        <div className="mt-3">
          <div className="flex items-center justify-between ">
            <p className="font-semibold text-md text-gray-500 px-1 pb-3">
              Contacts
            </p>
            <div className="flex px-5 space-x-4">
              <VideoCameraIcon className="h-5 cursor-pointer  " />
              <SearchIcon className="h-5 cursor-pointer" />
              <DotsHorizontalIcon className="h-5 cursor-pointer" />
            </div>
          </div>
          <div>
            {rightSlideBar.map((div) => (
              <RightDiv Image={div.Image} title={div.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default leftSlideBar;
