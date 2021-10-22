import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  ThumbUpIcon,
  ChatAltIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import FeedBack from "./feedback";

function postCard({ profile, title, desc, img, p }) {
  return (
    <div className="flex flex-col w-76 bg-white shadow-md  ml-4 sm:ml-14 rounded-lg mt-5 relative space-y-2">
      <div className="flex items-center space-x-2 pt-3 px-5">
        <img
          src={profile}
          alt=""
          className="w-11 h-11 rounded-full object-cover border-2"
        />
        <div className="flex flex-col">
          <p className=" font-medium text-md">{title}</p>
          <p className=" text-xs text-gray-500">{p}</p>
        </div>
        <DotsHorizontalIcon className="h-5 absolute right-5 text-gray-500 cursor-pointer" />
      </div>
      <p className=" text-md mb-3 px-5">{desc}</p>
      <img src={img} alt="" className="w-110 h-83 object-cover" />

      <div className="flex flex-col">
        <div className="flex items-center justify-around border-t-2 xl:w-23 mx-auto">
          <FeedBack Icon={ThumbUpIcon} title={"Like"} />
          <FeedBack Icon={ChatAltIcon} title={"Comment"} />
          <FeedBack Icon={ChevronDoubleRightIcon} title={"Share"} />
        </div>
      </div>
    </div>
  );
}

export default postCard;
