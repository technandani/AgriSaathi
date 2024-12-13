import React from "react";

const RealTimeWeather = () => {
  return (
    <>
      <div
        className="realWheaterBox flex h-full w-[70%] bg-transparent rounded-xl"
      >
        <div className="realWheaterRightBox flex flex-col gap-3 p-4 dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-1/2">
          <div className="realWheaterHeading text-center text-2xl font-bold">
            Real Time Weather
          </div>
          <div className="realWheaterPara text-center text-lg">Supaul, Bihar</div>
          <div className="realWheaterView flex items-center justify-center gap-5">
            <div className="realWheaterViewIcon text-6xl">
              <i className="fa-solid fa-cloud-sun"></i>
            </div>
            <div className="realWheaterViewData text-center">
              <div className="realWheaterViewDataTem text-2xl">33°C</div>
              <div className="realWheaterViewDataMinMaxTem">30°C / 35°C</div>
            </div>
          </div>
        </div>

        <div className="realWheaterLeftBox grid grid-cols-2 gap-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-1/2">
          {[
            { icon: "fa-cloud-sun", label: "Chance of rain", value: "0%" },
            { icon: "fa-cloud", label: "Lightning", value: "N/A" },
            { icon: "fa-cloud", label: "Wind speed", value: "0.2 KM/h" },
            { icon: "fa-cloud-sun", label: "Humidity", value: "40.67%" },
            { icon: "fa-sun", label: "Sunrise", value: "07:00:23" },
            { icon: "fa-cloud", label: "Sunset", value: "18:10:03" },
          ].map((item, index) => (
            <div
              key={index}
              className="realWheaterView flex gap-3 items-center p-2 shadow-sm"
            >
              <div className="realWheaterViewIcon text-xl">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div className="realWheaterViewData">
                <div className="realWheaterViewDataTem text-lg font-medium">
                  {item.label}
                </div>
                <div className="realWheaterViewDataMinMaxTem text-sm">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RealTimeWeather;