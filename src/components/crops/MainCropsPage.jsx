import React from "react";
import Navbar from "../common/Navbar";
import Banner from "../marketPlace/banner";
import CategoryFilter from "./CatageryFilter";
import MainPriceScrollbar from "./MainPriceScrollbar";
import CropPricePage from "./CropPricePage";

const MainCropsPage = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <div className="mt-4 w-full h-full overflow-y-scroll">
        {/* <div className="TopContainer">
          <Banner />
        </div> */}
        <CategoryFilter />
        <MainPriceScrollbar/>
        <CropPricePage/>
      </div>
    </div>
  );
};

export default MainCropsPage;
