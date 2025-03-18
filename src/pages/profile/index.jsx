import React from "react";
import Navbar from "../../components/common/Navbar";
import InfoCard from "./components/InfoCard";
import FarmerPost from "./components/FarmerPost";
import TabSwitcher from "../../components/TabSwitcher";
import FarmersPosts from "../post/postSection/FarmersPosts";
import CommunitiesList from "../farmer/communitiesSection/CommunitiesList";

const tabs = [
  { id: 0, label: 'Bio', content: <FarmerPost/> },
  { id: 1, label: 'Posts', content: <FarmersPosts/> },
  { id: 2, label: 'Communities', content: <CommunitiesList/> },
  { id: 3, label: 'Crops', content: <FarmersPosts/> },
];

const Profile = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <div className="min-h-screen flex flex-col mt-4">
        <InfoCard />
        <div className="flex bg-[#eee] dark:bg-[#121212] rounded-md">
          <TabSwitcher tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
