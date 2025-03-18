import React from "react";
import { useNavigate } from "react-router-dom";
import ChatUser from "./ChatUser";

const Chat = () => {
  const navigate = useNavigate();
  function startVideocall() {
    navigate("videocall");
  }

  return (
    <div className="grid lg:grid-cols-4 h-[85vh] mt-2 bg-[#fff] dark:bg-[#1a1a1a]">
      <div className="lg:col-span-1 md:col-span-2 sm:col-span-1 h-full overflow-y-scroll">
        <ChatUser />
      </div>
      <div className="lg:col-span-3 md:col-span-2 sm:col-span-1 h-full">
        <div className="flex-1 flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-3 border-b shadow-sm">
            <h3 className="text-lg font-medium">Nandani</h3>
            <div className="flex space-x-4">
              <button>
                <i className="fa-solid fa-phone cursor-pointer"></i>
              </button>
              <button onClick={startVideocall}>
                <i className="fa-solid fa-video cursor-pointer"></i>
              </button>
              <button>
                <i className="fa-solid fa-ellipsis cursor-pointer"></i>
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex">
                <div className="px-4 py-2 rounded-lg text-gray-800">
                  Hi, Ram
                </div>
                <span className="text-xs ml-2 self-end">5:20 PM</span>
              </div>

              <div className="flex justify-end">
                <div className="bg-green-500 px-4 py-2 rounded-lg text-white">
                  Hello, Shyam
                </div>
                <span className="text-xs ml-2 self-end">5:20 PM</span>
              </div>

              <div className="flex justify-center text-red-500 text-sm">
                <i className="fa-solid fa-phone-slash mr-1"></i> Missed voice
                call at 5:20 PM
              </div>
            </div>
          </div>

          <div className="p-4 flex items-center">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-full">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
