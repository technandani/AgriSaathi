import React from "react";
import Style from "../components/Home/Style";
import Navbar from "../components/common/Navbar.jsx";

const Dashboard = () => {
  return (
    <div className="w-full h-full overflow-auto">
      <Navbar />
      <div className="w-full p-2">
        <div className="w-full">
          <h1 className="text-2xl font-serif">Home Page</h1>
          <p className="text-xl font-serif">Welcome to the Dashboard!</p>
        </div>
        <Style />
      </div>
    </div>
  );
};

export default Dashboard;
