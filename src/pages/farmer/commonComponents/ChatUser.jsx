import React from "react";

const contacts = Array(20).fill({
  name: "Nandani Singh",
  time: "12:01 PM",
  status: "Video",
});

const ChatUser = () => {
  return (
    <>
      <div className="shadow-lg border-r">
        <h2 className="text-lg font-semibold px-4 py-3 border-b">Messages</h2>
        <div className="">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center p-3 cursor-pointer rounded m-1 bg-[#fff] dark:bg-[#121212]">
              <img
                src="/images/user.jpg"
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{contact.name}</h4>
                <p className="text-xs">{contact.status}</p>
              </div>
              <span className="text-xs text-gray-400">{contact.time}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatUser;
