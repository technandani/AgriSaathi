import React from "react";
import Navbar from "../../components/common/Navbar";
import CropPricePage from "./cropsPrice";
import TabSwitcher from "../../components/TabSwitcher";
import CropsInfoSection from "./cropsInformation";

const tabs = [
  { id: 0, label: 'Crops Price', content: <CropPricePage/> },
  { id: 1, label: 'Crops Information', content: <CropsInfoSection/> },
];


const MainCropsPage = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <div className="mt-4 w-full h-full overflow-y-scroll">
        <div className="flex bg-[#eee] dark:bg-[#121212] rounded-md">
          <TabSwitcher tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default MainCropsPage;
