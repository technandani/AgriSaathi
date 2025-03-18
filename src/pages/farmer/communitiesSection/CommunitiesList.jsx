import React from "react";
import SingleCommunityCard from "./SingleCommunityCard";

const CommunitiesList = () => {
  return (
    <>
      <div className="h-full p-4">
        <div className="flex justify-between pb-2">
          <div className="text-2xl font-bold">Popular communities</div>
          <div className="text-md font-semibold">view more</div>
        </div>
        <div className="flex flex-col gap-2 w-full h-[90%] overflow-y-scroll">
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
          <SingleCommunityCard />
        </div>
      </div>
    </>
  );
};

export default CommunitiesList;
