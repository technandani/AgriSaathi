import React from "react";
// import VideoCall from "../components/farmer/VideoCall ";
import Navbar from "../../components/common/Navbar";
import TopInfoContainer from "./topLeftSection/TopInfoContainer";
import Farmers from "./farmerSection/Farmers";
import Events from "./eventsSection/Events";
import CommunitiesList from "./communitiesSection/CommunitiesList";

const Farmer = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <div className="overflow-y-scroll">
      <div className="grid lg:grid-cols-6 gap-4 mb-2">
        <div className="rounded-xl lg:col-span-4 md:col-span-2 sm:col-span-1 bg-[#fff] dark:bg-[#1a1a1a] h-[300px]">
          <TopInfoContainer />
        </div>
        <div className="rounded-xl lg:col-span-2 md:col-span-2 sm:col-span-1 bg-[#fff] dark:bg-[#1a1a1a] h-[300px]">
          <Farmers />
        </div>
      </div>
      <div className="grid lg:grid-cols-6 gap-4">
        <div className="rounded-xl lg:col-span-4 md:col-span-2 sm:col-span-1 bg-[#fff] dark:bg-[#1a1a1a] h-[300px]">
          <Events />
        </div>
        <div className="rounded-xl lg:col-span-2 md:col-span-2 sm:col-span-1 bg-[#fff] dark:bg-[#1a1a1a] h-[300px]">
          <CommunitiesList />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Farmer;
