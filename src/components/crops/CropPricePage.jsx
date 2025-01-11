import React from "react";
import FilterCropPrice from "./FilterCropPrice"
import RenderCropPrice from "./RenderCropPrice";

const CropPricePage = () => {
  return (
    <div className="bg-[#fff] dark:bg-[#1a1a1a]">
      <FilterCropPrice />
      <div className="pt-2">
        <RenderCropPrice />
      </div>
    </div>
  );
};

export default CropPricePage;
