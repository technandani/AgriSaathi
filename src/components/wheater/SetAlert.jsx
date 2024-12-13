import React from "react";
// import ToggleButton from "../ToggleButton";

const SetAlert = () => {
  // const handleToggle = (state) => {
  //   console.log("Toggle state:", state ? "On" : "Off");
  // };

  return (
    <div className="wrapper h-full w-[500px] mx-auto">
      <div
        className="setAlertBox bg-transparent flex flex-col justify-center items-center gap-4 h-full rounded-xl shadow-md dark:shadow-none border border-gray-300 dark:border-gray-700"
      >
        <h1 className="realWeatherHeading font-bold text-3xl text-gray-800 dark:text-gray-200">
          Offline SMS Alert
        </h1>
        <div className="setAlertBtn flex justify-center items-center gap-4">
          {/* <ToggleButton initialState={false} onToggle={handleToggle} /> */}
          <p className="text-gray-600 dark:text-gray-400">Enable SMS Alert</p>
        </div>
        <p className="para text-gray-600 dark:text-gray-400 text-lg">
          Receive critical weather alerts even offline
        </p>
      </div>
    </div>
  );
};

export default SetAlert;
