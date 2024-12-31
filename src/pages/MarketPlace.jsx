import React from "react";
import Navbar from "../components/common/Navbar";
import MainProductCard from "../components/marketPlace/MainProductCard";

const MarketPlace = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <div className="w-full p-4 bg-green-100">
        <MainProductCard />
      </div>
    </div>
  );
};

export default MarketPlace;
