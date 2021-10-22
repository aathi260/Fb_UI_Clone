import React from "react";

function sponsored() {
  return (
    <div className="flex flex-col space-y-4 border-b-2 w-80 py-2">
      <p className="mt-4 text-lg text-gray-500 font-semibold ">Sponsored</p>
      <div className="hover:bg-gray-200 w-80 rounded-lg cursor-pointer">
        <div className="flex gap-2 items-center">
          <div className="w-28 h-28 rounded-lg">
            <img
              className="w-28 h-28 rounded-lg"
              src="images/data.jpg"
              alt="data"
            />
          </div>
          <div>
            <p className="font-bold text-gray-700">Set data in motion</p>
            <p className="text-gray-400">confluent.io</p>
          </div>
        </div>
      </div>
      <div className="hover:bg-gray-200 w-80 rounded-lg cursor-pointer">
        <div className="flex gap-2 items-center">
          <div className="w-28 h-28 rounded-lg">
            <img
              className="w-28 h-28 rounded-lg"
              src="images/quantum.jfif"
              alt="data"
            />
          </div>
          <div>
            <p className="font-bold text-gray-700">Automata for Good</p>
            <p className="text-gray-400">hackdev.io</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sponsored;
