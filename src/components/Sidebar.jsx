import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext"; 

const Sidebar = () => {
  const { isCompressed, toggleSidebar } = useSidebar(); 

  return (
    <div className={`sidebar ${isCompressed ? "compressed" : "expanded"}`}>
      <div className="sidebar-header">
        <div
          className="logo flex item-center font-bold text-3xl gap-2 h-12 w-12 min-w-12 min-h-12"
        >
          <img
            src="./images/agriculture.png"
            alt="" className="h-full w-full"
          />
          {!isCompressed && <span>AgriSathi</span>}
        </div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCompressed ? (
            <i className="fa-solid fa-angle-right"></i>
          ) : (
            <i className="fa-solid fa-angle-left"></i>
          )}
        </button>
      </div>
      <div className="menu">
      <NavLink
  to="/"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa-solid fa-house"></i>
  {!isCompressed && <span>Home</span>}
</NavLink>
<NavLink
  to="/goverment"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa-solid fa-building-columns"></i>
  {!isCompressed && <span>Goverment</span>}
</NavLink>
<NavLink
  to="/weather-alerts"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa-solid fa-cloud-sun"></i>
  {!isCompressed && <span>Weather Alerts</span>}
</NavLink>
<NavLink
  to="/posts"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa-regular fa-clipboard"></i>
  {!isCompressed && <span>Posts</span>}
</NavLink>
<NavLink
  to="/farmer"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa-solid fa-person-digging"></i>
  {!isCompressed && <span>Farmer</span>}
</NavLink>
<NavLink
  to="/crops"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa-brands fa-pagelines"></i>
  {!isCompressed && <span>crops</span>}
</NavLink>
<NavLink
  to="/marketplace"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa-solid fa-tractor"></i>
  {!isCompressed && <span>MarketPlace</span>}
</NavLink>
<NavLink
  to="/settings"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa-solid fa-gear"></i>
  {!isCompressed && <span>Settings</span>}
</NavLink>
<NavLink
  to="/manageScheme"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
   <i className="fa-solid fa-calendar-days"></i>
  {!isCompressed && <span>Scheme management</span>}
</NavLink>
<NavLink
  to="/profile"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa fa-user"></i>
  {!isCompressed && <span>Sign Out</span>}
</NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
