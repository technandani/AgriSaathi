import React from "react";

const WeeklyForcast = ({ weatherData }) => {
  console.log("weather data is: ", weatherData);
  const {
    minTemp = "N/A",
    maxTemp = "N/A",
    chanceOfRain = "N/A",
  } = weatherData || {};
  return (
    <div
      className="weatehers rounded-xl w-full p-5 shadow-inner"

    >
      <div className="heading text-lg font-bold pb-8">7-days weather forecast</div>
      <div className="forcastBox flex flex-col gap-2.5">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="days flex justify-between items-center h-12 px-5 shadow-md rounded-xl bg-[#eee] dark:bg-[#121212]"
      
          >
            <div className="day">Today</div>
            <div className="dayIcon text-2xl">
              <i className="fa-solid fa-cloud-sun"></i>
            </div>
            <div className="dayTemp">22D/25D</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForcast;
