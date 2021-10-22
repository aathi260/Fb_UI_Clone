import React from "react";
import LeftSlideBar from "./leftSlideBar";
import MiddleSection from "./middleSection";
import RightSlideBar from "./rightSlideBar";

const stories = [
  { source: "images/profile.jpg", title: "Aathithya" },
  { source: "images/rock.jpg", title: "Dwayne Johnson" },
  { source: "images/emilia.jpg", title: "Emilia Clark" },
  { source: "images/emma.jpg", title: "Emma Watson" },
  { source: "images/andrew.jpg", title: "Andrew Garfield" },
  { source: "images/chris.jpg", title: "Chris Evans" },
];
function Main() {
  return (
    <div className="flex md:justify-center xl:justify-between xl:gap-1">
      <div className="flex">
        <LeftSlideBar />
      </div>
      <div className="w-full">
        <MiddleSection items={stories} />
      </div>
      <div className="flex">
        <RightSlideBar />
      </div>
    </div>
  );
}

export default Main;
