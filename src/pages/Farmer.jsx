import React from "react";
// import VideoCall from "../components/farmer/VideoCall ";
import Navbar from "../components/common/Navbar";
import Chat from "../components/farmer/Chat";

const Farmer = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
    <Navbar/>
    <Chat/>
    </div>
  );
};

export default Farmer;