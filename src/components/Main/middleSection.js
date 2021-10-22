import React from "react";
import Card from "../UI/card";
import Post from "./postSection";

const createRoom = [
  {
    img: "images/chris.jpg",
    title: "Chris",
  },
  { img: "images/acid.jpg", title: "acid" },
  { img: "images/max.jpg", title: "Max" },
  { img: "images/bumrah.jpg", title: "Bumrah" },
  { img: "images/emma.jpg", title: "Emma" },
  { img: "images/emilia.jpg", title: "Emilia" },
  { img: "images/msdhoni.jpg", title: "Dhoni" },
];
const activities = [
  { Icon: "images/video.png", title: "Live Video" },
  { Icon: "images/photos.png", title: "Photos/Videos" },
  { Icon: "images/activity.png", title: "Feeling/Activity" },
];
function middleSection(props) {
  return (
    <div className="sm:w-49 xl:w-51 sm:h-26 xl:h-25 overflow-scroll scrollbar-hide">
      <div className="space-y-2 xl:ml-5 overflow-hidden">
        {/* top */}
        <div className=" mt-3 sm:ml-18 md:ml-10 p-4 flex items-center space-x-2 md:space-x-3 w-100 sm:w-79 xl:w-78 overflow-x-scroll scrollbar-hide h-52 xl:h-56">
          {props.items.map((story) => (
            <Card source={story.source} title={story.title} />
          ))}
        </div>
        {/* center */}
        <Post items={createRoom} activity={activities} />
      </div>
    </div>
  );
}

export default middleSection;
