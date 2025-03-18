import React from "react";
import Chat from "./Chat";
import Navbar from "../../../components/common/Navbar";

const ChatPage = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <Chat />
    </div>
  );
};

export default ChatPage;
