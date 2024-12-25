import React from "react";

const VideoCall = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full p-12 pt-0 max-w-full">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Video Call</h3>
        </div>
        <div className="relative bg-gray-800 h-[500px]">
          <img
            src="https://via.placeholder.com/900x500" 
            alt="Main Participant"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-gray-200 border-2 border-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/160x90" 
              alt="Participant"
              className="w-40 h-24 object-cover"
            />
          </div>
          <div className="absolute top-4 left-4 bg-gray-900 text-gray-100 px-3 py-1 rounded-lg text-sm">
            13:23
          </div>
        </div>
        <div className="flex justify-center items-center p-4 space-x-6 bg-gray-100">
          <button className="flex flex-col items-center text-gray-700 hover:text-green-600">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-100">
              <i className="fa-solid fa-microphone"></i>
            </div>
            <span className="text-xs mt-1">Audio</span>
          </button>
          <button className="flex flex-col items-center text-gray-700 hover:text-green-600">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-100">
              <i className="fa-solid fa-video"></i>
            </div>
            <span className="text-xs mt-1">Video</span>
          </button>
          <button className="flex flex-col items-center text-gray-700 hover:text-green-600">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-100">
              <i className="fa-solid fa-desktop"></i>
            </div>
            <span className="text-xs mt-1">Screen Share</span>
          </button>
          <button className="flex flex-col items-center text-gray-700 hover:text-green-600">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-100">
              <i className="fa-solid fa-circle-dot"></i>
            </div>
            <span className="text-xs mt-1">Record</span>
          </button>
          <button className="flex flex-col items-center text-gray-700 hover:text-green-600">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-100">
              <i className="fa-solid fa-comment"></i>
            </div>
            <span className="text-xs mt-1">Chat</span>
          </button>
          <button className="flex flex-col items-center text-white">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600">
              <i className="fa-solid fa-phone"></i>
            </div>
            <span className="text-xs mt-1">End Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
