import React from "react";

const features = [
  {
    title: "Connect with Farmers & Experts",
    description: "Chat, call, or video call to share knowledge.",
    icon: "fas fa-user-friends",
  },
  {
    title: "Real-Time Weather",
    description: "Stay updated with weather alerts.",
    icon: "fas fa-cloud-sun",
  },
  {
    title: "Market Insights",
    description: "Get live crop prices and trends.",
    icon: "fas fa-chart-line",
  },
  {
    title: "Government Schemes",
    description: "Explore and apply for agricultural schemes.",
    icon: "fas fa-file-alt",
  },
];

const FeatureOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-[#eee] dark:bg-[#1a1a1a] p-6 rounded-lg shadow flex items-center gap-4"
        >
          <i className={`${feature.icon} text-4xl text-blue-500`}></i>
          <div>
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureOverview;