import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const MenuOption = ({link , icon, text}) => {
    const isCompressed = useSelector(state => state.sliderSlice)
    return (
        <NavLink
            to={link}
            className={({ isActive }) => `w-full h-12  rounded-sm flex items-center gap-2 px-1 flex-1 mb-2 duration-200 ${isActive ? "bg-white px-2 text-black" : "hover:bg-white/10"}`}
        >
            {icon}
            <h3>{text}</h3>
        </NavLink>
    )
}

export default MenuOption