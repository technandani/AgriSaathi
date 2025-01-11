import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkMenu } from '../../features/sliderSlice'
import MenuOption from './MenuOption'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    const isCompressed = useSelector((state) => state.slider.menuOpen)
    const dispatch = useDispatch();
    
    return (
        <header id="header" className={`${isCompressed?"lg:w-[20%] max-md:w-[90vw] max-md:absolute z-30 py-4 px-6":"lg:w-[5%] max-md:hidden p-4"} h-full flex flex-col duration-500 bg-[#155d27] dark:bg-[#040404]`}>
            <div className="w-full h-[10%] flex item-center font-bold text-2xl gap-2">
                <img src="./images/agriculture.png" alt="no image" className="h-10 w-10 rounded-full" />
                {isCompressed && <h1 className='text-white'>AgriSathi</h1>}
            </div>
            <div className="w-full h-[90%] overflow-y-scroll text-white text-lg">
                <MenuOption link="/" icon={<i className="text-xl fa-solid fa-house"></i>} text="Home" />
                <MenuOption link="/goverment" icon={<i className="text-xl fa-solid fa-building-columns"></i>} text="Government" />
                <MenuOption link="/weather-alerts" icon={<i className="text-xl fa-solid fa-cloud-sun"></i>} text="Weather Alerts" />
                <MenuOption link="/posts" icon={<i className="text-xl fa-regular fa-clipboard"></i>} text="Posts" />
                <MenuOption link="/farmer" icon={<i className="text-xl fa-solid fa-person-digging"></i>} text="Farmer" />
                <MenuOption link="/crops" icon={<i className="text-xl fa-brands fa-pagelines"></i>} text="Crops" />
                <MenuOption link="/marketplace" icon={<i className="text-xl fa-solid fa-tractor"></i>} text="MarketPlace" />
                <MenuOption link="/settings" icon={<i className="text-xl fa-solid fa-gear"></i>} text="Settings" />
                <MenuOption link="/manageScheme" icon={<i className="text-xl fa-solid fa-calendar-days"></i>} text="Scheme management" />
                <MenuOption link="/profile" icon={<i className="text-xl fa fa-user"></i>} text="Sign Out" />
            </div>
        </header>
    )
}

export default Header