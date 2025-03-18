import React from 'react'

const SingleFarmerCard = () => {
  return (
    <>
      <div className='flex justify-between items-center rounded px-3 py-1 bg-[#eee] dark:bg-[#121212]'>
        <div>
            <img src="images/user.jpg" alt="" className='rounded-[50%] h-[40px]' />
        </div>
        <div>
            <div className='text-md font-semibold'>Nandani singh</div>
            <div className='text-sm'>farmer</div>
        </div>
        <div>follow</div>
        <div>:</div>
      </div>
    </>
  )
}

export default SingleFarmerCard
