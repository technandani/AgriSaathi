import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkMenu } from '../../features/sliderSlice'
import MenuOption from './MenuOption'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    const isCompressed = useSelector(state=>state.menuOpen)
    const dispatch = useDispatch();
    
    return (
        <header id="header" className={`${isCompressed?"w-[20%] py-4 px-6":"w-0 p-0"} h-full flex flex-col duration-500`}>
           
            <div className="w-full h-[10%] flex item-center font-bold text-3xl gap-2">
                <img src="./images/agriculture.png" alt="no image" className="h-10 w-10 rounded-full" />
                {isCompressed && <h1 className='text-white'>AgriSathi</h1>}
            </div>
            <div className="w-full h-[90%] overflow-y-scroll text-white text-lg">
                <MenuOption link="/" icon={<i className="fa-solid fa-house"></i>} text="Home" />
                <MenuOption link="/goverment" icon={<i className="fa-solid fa-building-columns"></i>} text="Government" />
                <MenuOption link="/weather-alerts" icon={<i className="fa-solid fa-cloud-sun"></i>} text="Weather Alerts" />
                <MenuOption link="/posts" icon={<i className="fa-regular fa-clipboard"></i>} text="Posts" />
                <MenuOption link="/farmer" icon={<i className="fa-solid fa-person-digging"></i>} text="Farmer" />
                <MenuOption link="/crops" icon={<i className="fa-brands fa-pagelines"></i>} text="Crops" />
                <MenuOption link="/marketplace" icon={<i className="fa-solid fa-tractor"></i>} text="MarketPlace" />
                <MenuOption link="/settings" icon={<i className="fa-solid fa-gear"></i>} text="Settings" />
                <MenuOption link="/manageScheme" icon={<i className="fa-solid fa-calendar-days"></i>} text="Scheme management" />
                <MenuOption link="/profile" icon={<i className="fa fa-user"></i>} text="Sign Out" />
            </div>
        </header>
    )
}

export default Header