import React from "react";
import ProductCards from "../components/marketPlace/ProductCards";
import Navbar from "../components/Navbar";
import TopBanner from "../components/marketPlace/TopBanner";
import MainProductCard from "../components/marketPlace/MainProductCard";

const MarketPlace = () => {
  return (
    <>
      <Navbar />
      <div className="bg-green-100 min-h-screen">
        <TopBanner />
        <MainProductCard />
      </div>
    </>
  );
};

export default MarketPlace;
