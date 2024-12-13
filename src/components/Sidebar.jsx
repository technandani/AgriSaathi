// Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../SidebarContext"; // Use the context
import "./Sidebar.css";

const Sidebar = () => {
  const { isCompressed, toggleSidebar } = useSidebar(); // Access isCompressed and toggleSidebar

  return (
    <div className={`sidebar ${isCompressed ? "compressed" : "expanded"}`}>
      <div className="sidebar-header">
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
            fontWeight: "700",
            gap: "8px",
          }}
        >
          <img
            src="./images/agriculture.png"
            alt=""
            style={{ height: "50px", width: "50px" }}
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
  to="/settings"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa-solid fa-gear"></i>
  {!isCompressed && <span>Settings</span>}
</NavLink>
<NavLink
  to="/profile"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  <i className="fa fa-user"></i>
  {!isCompressed && <span>Profile</span>}
</NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
