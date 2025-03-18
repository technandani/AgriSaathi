import React from "react";
import Navbar from "../../../components/common/Navbar";

const VideoCall = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar/>
      <div div className="w-full h-full overflow-y-scroll">
      <div className="flex items-center justify-center">
      <div className="rounded-lg overflow-hidden">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Video Call</h3>
        </div>
        <div className="relative h-[450px] w-[800px]">
          <img
            src="/images/user1.jpg" 
            alt="Main Participant"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-4 right-4 rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/user2.jpg" 
              alt="Participant"
              className="w-40 h-24 object-cover"
            />
          </div>
          <div className="absolute top-4 left-4 px-3 py-1 rounded-lg text-sm bg-[#fff] dark:bg-[#1a1a1a]">
            13:23
          </div>
        </div>
        <div className="flex justify-center items-center p-4 space-x-6">
          <button className="w-[90px] h-[50px] shadow-inner py-2 bg-green-800 dark:bg-green-800 hover:dark:bg-green-600 text-white rounded flex items-center justify-center flex-col">
            <div className="">
              <i className="fa-solid fa-microphone"></i>
            </div>
            <span className="text-xs">Audio</span>
          </button>
          <button className="w-[90px] h-[50px] shadow-inner py-2 bg-green-800 dark:bg-green-800 hover:dark:bg-green-600 text-white rounded flex items-center justify-center flex-col">
            <div className="">
              <i className="fa-solid fa-video"></i>
            </div>
            <span className="text-xs">Video</span>
          </button>
          <button className="w-[90px] h-[50px] shadow-inner py-2 bg-green-800 dark:bg-green-800 hover:dark:bg-green-600 text-white rounded flex items-center justify-center flex-col">
            <div className="">
              <i className="fa-solid fa-video"></i>
            </div>
            <span className="text-xs">Video</span>
          </button>
          <button className=" flex items-center w-[90px] h-[50px] bg-[#bd1f36] dark:bg-[#c71f37] hover:bg-[#e01e37] hover:hover:bg-[#e01e37] rounded-xl scale-[1.05] justify-center flex-col text-white">
            <div className="text-xl">
              <i className="fa-solid fa-phone"></i>
            </div>
          </button>
          <button className="w-[90px] h-[50px] shadow-inner py-2 bg-green-800 dark:bg-green-800 hover:dark:bg-green-600 text-white rounded flex items-center justify-center flex-col">
            <div className="">
              <i className="fa-solid fa-desktop"></i>
            </div>
            <span className="text-xs">Screen Share</span>
          </button>
          <button className="w-[90px] h-[50px] shadow-inner py-2 bg-green-800 dark:bg-green-800 hover:dark:bg-green-600 text-white rounded flex items-center justify-center flex-col">
            <div className="">
              <i className="fa-solid fa-circle-dot"></i>
            </div>
            <span className="text-xs">Record</span>
          </button>
          <button className="w-[90px] h-[50px] shadow-inner py-2 bg-green-800 dark:bg-green-800 hover:dark:bg-green-600 text-white rounded flex items-center justify-center flex-col">
            <div className="">
              <i className="fa-solid fa-comment"></i>
            </div>
            <span className="text-xs">Chat</span>
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default VideoCall;
