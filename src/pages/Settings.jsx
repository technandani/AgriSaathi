import React from "react";

const Settings = () => {
  return (
    <div>
      <div className="main m-4 grid lg:grid-cols-4">
        <div className="con1 bg-red-400 min-h-[100px] lg:col-span-3 md:col-span-2 sm:col-span-1"></div>
        <div className="con1 bg-green-400 min-h-[100px]"></div>
        <div className="con1 bg-orange-400 min-h-[100px]"></div>
        <div className="con1 bg-purple-400 min-h-[100px] lg:col-span-3 md:col-span-2 sm:col-span-1"></div>
      </div>
    </div>
  );
};

export default Settings;