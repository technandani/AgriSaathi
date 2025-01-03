import React from "react";
import { useSidebar } from "../../context/SidebarContext";

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
      
    </div>
  );
};

export default Sidebar;