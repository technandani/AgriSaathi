import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const SingleCommunityCard = () => {
    const navigate = useNavigate(); 
    function navigateToCommunity(){
        navigate('/farmer/chat')
    }
  return (
    <>
      <div className="card flex  flex-col h-fit gap-4 bg-[#eee] dark:bg-[#121212] p-2 rounded">
        <div
          className="w-full max-h-[150px] overflow-hidden rounded flex items-center justify-center"
        >
          <img src="images/user.jpg" alt="" className="rounded h-fit w-full" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">Lorem, ipsum dolor.</h2>
          <p className="text-md leading-[1.2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            laboriosam veritatis iste quae officia culpa ex cumque neque minima
            nihil.
          </p>
          <button className="bg-green-700 dark:bg-green-500 text-white dark:text-black px-6 py-1 rounded-xl" onClick={navigateToCommunity}>
            Join Event
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleCommunityCard;
