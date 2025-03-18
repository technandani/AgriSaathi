import React from "react";
import SingleEventCard from "./SingleEventCard";

const Events = () => {
  return (
    <>
      <div className="h-full p-4">
        <div className="flex justify-between pb-2">
          <div className="text-2xl font-bold">Events</div>
          <div className="text-md font-semibold">view more</div>
        </div>
        <div className="flex flex-col gap-2 w-full h-[90%] overflow-y-scroll">
            <SingleEventCard/>
            <SingleEventCard/>
            <SingleEventCard/>
            <SingleEventCard/>
            <SingleEventCard/>
            <SingleEventCard/>
            <SingleEventCard/>
            <SingleEventCard/>
            <SingleEventCard/>
            <SingleEventCard/>
        </div>
      </div>
    </>
  );
};

export default Events;
