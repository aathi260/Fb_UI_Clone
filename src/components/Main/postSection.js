import React from "react";
import { VideoCameraIcon } from "@heroicons/react/solid";
import Activity from "./Activity";
import PostCard from "../UI/postCard";
import Create from "../UI/createRoom";

function postSection(props) {
  const postCard = [
    {
      profile: "images/profile4.jpg",
      title: "CSK Veriyan",
      p: "15 Octobar 19:19 .",
      image: "images/csk.jpg",
      description:
        "CSK have won four of the last five fixtures against KKR. In Match 15 of IPL 2021, KKR were blown away by the CSK brigade by 18 runs. In the return fixture, CSK again walked away victorious by two wickets.",
    },
    {
      profile: "images/profile3.jpg",
      title: "Mr.Bean Fanclub",
      p: "12 October ar 17:51 .",
      image: "images/bean.jpg",
      description:
        "Meet Fabiola Baglieri and Arnaldo Mangini, the lookalikes of Mr Bean and his daughter. 18-year-old Fabiola is a resident of Rome who has impressed her social media followers with her impressive talent of emulating the wide range of comical facial expressions similar to that of Mr Bean. ",
    },
    {
      profile: "images/profile1.jpeg",
      title: "A.P.J Abdul Kalam",
      p: "10 min .",
      image: "images/apj.jpg",
      description:
        "You should not give up and we should not allow the problem to defeat us. I was willing to accept what I couldn't change.",
    },
    {
      profile: "images/profile2.png",
      title: "Cricket Club",
      p: "8 Octobar at 23:31 .",
      image: "images/cricketclub.jpg",
      description:
        "Club cricket is a mainly amateur, but still formal, form of the sport of cricket, usually involving teams playing in competitions at weekends or in the evening. There is a great deal of variation in game format although the Laws of Cricket are observed. ",
    },
  ];

  return (
    <div className="w-120 sm:w-102 xl:w-full  sm:ml-8 md:ml-0 py-4">
      <div className="flex flex-col w-76 bg-white shadow-md py-2 px-5 ml-4 sm:ml-14 rounded-lg mr-0">
        <div className="flex items-center space-x-2">
          <div>
            <img
              className=" w-11 h-11 rounded-full object-cover"
              src="images/profile.jpg"
              alt=""
            />
          </div>
          <div className="items-center bg-gray-100 w-11/12 h-10 rounded-full cursor-pointer hover:bg-gray-200">
            <input
              className="p-2 px-5 w-11/12 flex flex-grow bg-transparent outline-none  placeholder-gray-500 text-md"
              type="text"
              placeholder="What's on your mind, Aathithya?"
            />
          </div>
        </div>
        <hr className="mt-2" />
        <div className="flex items-center justify-between mt-2">
          {props.activity.map((activity) => (
            <Activity Icon={activity.Icon} title={activity.title} />
          ))}
        </div>
      </div>

      <div className="flex justify-between w-76 bg-white shadow-md p-2 ml-4 sm:ml-14 rounded-lg mt-5 mr-0 space-x-4 overflow-hidden">
        <div className="flex items-center border-2 border-gray-300 rounded-full px-5 w-52 hover:bg-gray-100 cursor-pointer space-x-2">
          <VideoCameraIcon className="h-7" />
          <p className="text-xs md:text-lg">Create Room</p>
        </div>
        <div className="flex w-110 gap-1 md:gap-0 ">
          {props.items.map((create) => (
            <Create image={create.img} title={create.title} />
          ))}
        </div>
      </div>

      {postCard.map((card) => (
        <PostCard
          profile={card.profile}
          title={card.title}
          p={card.p}
          desc={card.description}
          img={card.image}
        />
      ))}
    </div>
  );
}

export default postSection;
