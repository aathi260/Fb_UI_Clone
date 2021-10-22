import "tailwindcss/tailwind.css";
import React from "react";
import MiddleHeader from "./MiddleHeader";
import {
  HomeIcon,
  DesktopComputerIcon,
  UserGroupIcon,
  PuzzleIcon,
  ViewGridIcon,
  ChatAlt2Icon,
  BellIcon,
  MenuAlt3Icon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <div className="flex justify-between sticky top-0 z-50 grid-cols-3 py-1 px-2 bg-white shadow-md md:px-2 xl:px-5">
      {/* right header */}
      <div className="flex justify-between items-center space-x-2">
        <div>
          <img
            className="w-12 h-12 rounded-full  md:cursor-pointer"
            src="images/fb-icon.png"
            alt="fbicon"
          />
        </div>
        <div className="flex justify-start items-center rounded-full  bg-gray-100 h-10 ">
          <SearchIcon className="h-7 p-1 px-3 cursor-pointer text-gray-500 xl:px-2" />
          <input
            className="hidden xl:inline-flex flex-grow bg-transparent outline-none w-48 placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* middle header */}
      <div className="hidden sm:flex justify-center flex-grow xl:pl-9">
        <div className="flex space-x-6 md:space-x-0 xl:space-x-2">
          <MiddleHeader Icon={HomeIcon} />
          <MiddleHeader Icon={DesktopComputerIcon} />
          <MiddleHeader Icon={HomeIcon} />
          <MiddleHeader Icon={UserGroupIcon} />
          <MiddleHeader Icon={PuzzleIcon} />
        </div>
      </div>

      {/* left header */}
      <div className="flex items-center justify-evenly w-56 md:w-3/12">
        <div className="hidden xl:flex items-center gap-2 rounded-full hover:bg-gray-100 p-1">
          <div>
            <img
              className="border-2 w-10 h-10 rounded-full object-cover"
              src="images/profile.jpg"
              alt="dhoni"
            />
          </div>
          <p className="text-md">Aathithya</p>
        </div>
        <div className="flex space-x-3 sm:space-x-2">
          <ViewGridIcon className="h-9 sm:h-10 rounded-full bg-gray-200 p-2 cursor-pointer md:hover:bg-gray-300 " />
          <ChatAlt2Icon className="h-9 sm:h-10 rounded-full bg-gray-200 p-2 cursor-pointer md:hover:bg-gray-300" />
          <BellIcon className="h-9 sm:h-10 rounded-full bg-gray-200 p-2 cursor-pointer md:hover:bg-gray-300" />
          <MenuAlt3Icon className="h-9 sm:h-10 rounded-full bg-gray-200 p-2 cursor-pointer md:hover:bg-gray-300" />
        </div>
      </div>
    </div>
  );
}

export default Header;
