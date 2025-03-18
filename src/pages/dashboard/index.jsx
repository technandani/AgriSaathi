import React from "react";
import SiteOverview from "./components/SiteOverview";
import FeatureOverview from "./components/FeatureOverview";
import GraphsAndAnalytics from "./components/GraphsAndAnalytics";
import Navbar from "../../components/common/Navbar";
import WelcomeSection from "./components/WelcomeSection";

const Dashboard = () => {
  return (
    <div className="w-full h-full overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col gap-4 mt-4">
        <WelcomeSection />
        <SiteOverview />
        <FeatureOverview />
        <GraphsAndAnalytics />
      </div>
    </div>
  );
};

export default Dashboard;
