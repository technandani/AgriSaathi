import React from "react";
import useCustomNavigate from "../../context/CustomNavigate";

const SetAlert = () => {
  const { goTo } = useCustomNavigate();

  return (
    <div className="wrapper h-full w-full mx-auto">
      <div
        className="setAlertBox bg-transparent flex flex-col justify-center items-center gap-4 h-full rounded-xl"
      >
        <h1 className="realWeatherHeading font-bold text-3xl text-gray-800 dark:text-gray-200">
          Offline SMS Alert
        </h1>
        <div className="setAlertBtn flex justify-center items-center gap-4">
          <button onClick={() => goTo("/weather-alert-registration")} className="setAlertBtn p-2 border-solid border-green-600 border-2 rounded">set Alert</button>
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
