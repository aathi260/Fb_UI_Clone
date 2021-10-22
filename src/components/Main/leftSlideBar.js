import React from "react";
import LeftDiv from "./leftSlideBarDiv";

function leftSlideBar() {
  const slideBar = [
    { Icon: "images/profile.jpg", title: "Aathithya Sriram Ganesh" },
    { Icon: "images/friend.png", title: "Friends" },
    { Icon: "images/group.png", title: "Groups" },
    { Icon: "images/market.png", title: "MarketPlace" },
    { Icon: "images/watch.png", title: "Watch" },
    { Icon: "images/clock.png", title: "Memories" },
    { Icon: "images/saved.png", title: "Saved" },
    { Icon: "images/page.png", title: "Pages" },
    { Icon: "images/event.png", title: "Events" },
    { Icon: "images/job.png", title: "Jobs" },
    { Icon: "images/addcenter.png", title: "Add Center" },
    { Icon: "images/ads.png", title: "Ads Manager" },
    { Icon: "images/blood.png", title: "Blood Donations" },
    { Icon: "images/help.png", title: "Community Help" },
    { Icon: "images/health.png", title: "Emotional Health" },
  ];
  return (
    <div className="hidden xl:inline-flex flex-col sticky">
      <div className="ml-3 w-83 h-100 scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-cgray border-b-2 border-gray-300">
        <div className="mt-3">
          {slideBar.map((div) => (
            <LeftDiv Icon={div.Icon} title={div.title} />
          ))}
        </div>
      </div>
      <div className="flex p-5 flex-col gap-5">
        <p className="text-lg font-semibold text-gray-500">Your shortcuts</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-gray-700">
            <img
              className="w-10 h-10 rounded-full"
              src="images/acid.jpg"
              alt=""
            />
          </div>
          <p className="font-medium">Sustenance catalyst acid</p>
        </div>
        <div>
          <ul className="flex text-xs space-x-2">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Advertising</li>
            <li>Cookies</li>
            <li>More</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default leftSlideBar;
