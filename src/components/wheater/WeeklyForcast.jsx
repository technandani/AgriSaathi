import React from "react";

const WeeklyForcast = () => {
  return (
    <div
      className="weatehers bg-transparent shadow-md rounded-xl w-1/3 p-5 dark:bg-gray-800 dark:text-white"
      style={{ boxShadow: "0 0 2px #fff" }}
    >
      <div className="heading text-lg font-bold pb-8">7-days weather forecast</div>
      <div className="forcastBox flex flex-col gap-2.5">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="days flex justify-between items-center h-12 px-5 shadow-md rounded-xl dark:bg-gray-700 dark:text-white"
            style={{ boxShadow: "0 0 2px #fff" }}
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
