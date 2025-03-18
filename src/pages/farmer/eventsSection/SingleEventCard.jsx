import React from "react";

const SingleEventCard = () => {
  return (
    <>
      <div className="card flex h-fit gap-4 bg-[#eee] dark:bg-[#121212] p-2 rounded">
        <div className="w-[340px] h-auto">
          <img src="images/user.jpg" alt="" className="rounded h-full w-full" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">Organic Farming Workshop</h2>
          <p className="text-md leading-[1.2]">
          Learn the fundamentals of organic farming practices, including composting, crop rotation, and pest control without chemicals.
          </p>
          <div><span className="font-semibold">Date: </span>12/12/2012</div>
          <div><span className="font-semibold">Location:</span> Bhimnagar, Bihar</div>
          <div><span className="font-semibold">Target audence:</span> farmers, agriculture students</div>
          <div className="flex justify-between">
            <button className="bg-green-700 dark:bg-green-500 text-white dark:text-black px-6 py-1 rounded-xl">Join Event</button>
            <button className="bg-gray-800 text-white dark:bg-gray-300 dark:text-black px-6 py-1 rounded-xl">See More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEventCard;
