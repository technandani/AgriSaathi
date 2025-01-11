import React from "react";

const contacts = Array(8).fill({
  name: "Nandani Singh",
  time: "12:01 PM",
  status: "Video",
});

const Chat = () => {
  return (
    <div className="flex h-full bg-gray-100 border-t mt-2">
      <div className="w-1/4 bg-white shadow-lg border-r">
        <h2 className="text-lg font-semibold px-4 py-3 border-b">Messages</h2>
        <div className="overflow-y-auto h-[calc(100%-60px)]">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center p-3 hover:bg-gray-100 cursor-pointer border-b"
            >
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{contact.name}</h4>
                <p className="text-xs text-gray-500">{contact.status}</p>
              </div>
              <span className="text-xs text-gray-400">{contact.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Box */}
      <div className="flex-1 bg-white flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b shadow-sm">
          <h3 className="text-lg font-medium">Nandani</h3>
          <div className="flex space-x-4 text-gray-500">
            <i className="fa-solid fa-phone cursor-pointer"></i>
            <i className="fa-solid fa-video cursor-pointer"></i>
            <i className="fa-solid fa-ellipsis cursor-pointer"></i>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-800">
                Hi, Ram
              </div>
              <span className="text-xs text-gray-500 ml-2 self-end">5:20 PM</span>
            </div>

            <div className="flex justify-end">
              <div className="bg-green-500 px-4 py-2 rounded-lg text-white">
                Hello, Shyam
              </div>
              <span className="text-xs text-gray-500 ml-2 self-end">5:20 PM</span>
            </div>

            <div className="flex justify-center text-red-500 text-sm">
              <i className="fa-solid fa-phone-slash mr-1"></i> Missed voice call at 5:20 PM
            </div>
          </div>
        </div>

        <div className="p-4 border-t bg-white flex items-center">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-full">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
