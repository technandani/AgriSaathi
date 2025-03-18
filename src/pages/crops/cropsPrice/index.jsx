import React from "react";
import FilterCropPrice from "./FilterCropPrice";
import RenderCropPrice from "./RenderCropPrice";
import MainPriceScrollbar from "./MainPriceScrollbar";

const CropPricePage = () => {
  return (
    <>
      <div className="mt-4 w-full h-full overflow-hidden">
      <div className="mt-4 w-full h-full overflow-hidden">
        <MainPriceScrollbar />
      </div>
        <FilterCropPrice />
        <RenderCropPrice />
      </div>
    </>
  );
};

export default CropPricePage;
