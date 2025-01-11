import React from 'react'
import Scrollbar from './Scrollbar'

const MainPriceScrollbar = () => {
  return (
    <>
      <div className="mainScrollbar flex mt-6  items-center justify-center">
        <div className="cropImage">
            <img src="./images/crop1.png" className='h-full max-w-24' alt="" />
        </div>
        <Scrollbar/>
      </div>
    </>
  )
}

export default MainPriceScrollbar
