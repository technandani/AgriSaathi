import React from "react";
import { useSidebar } from "../SidebarContext"; // Use the context
import useTheme from "../context/theme"; // Import theme context

const Navbar = () => {
  const { isCompressed } = useSidebar(); // Access isCompressed
  const { themeMode, lightTheme, darkTheme } = useTheme(); // Access theme functionality

  // Handle theme toggle
  const handleToggle = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <div
      className={`navbar transition-all duration-300 ease-in-out ${themeMode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      style={{ width: isCompressed ? "91vw" : "79vw" }}
    >
      <div className="navbar-content flex justify-between items-center p-4">
        <div className="searchbar flex-grow mr-4">
          <input
            type="search"
            className="searchbar w-full p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Search..."
          />
        </div>
        <div className="icons flex items-center space-x-4">
          <div className="icon">
            <i className="fa fa-bell"></i>
          </div>
          <div className="icon">
            <i className="fa fa-globe"></i>
          </div>
          <div className="icon modeBtn cursor-pointer" onClick={handleToggle}>
            <i className={`fa ${themeMode === "dark" ? "fa-sun" : "fa-moon"}`}></i>
          </div>
        </div>
        <div
          className="profilePic"
          style={{
            height: "40px",
            width: "40px",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <img
            src="./images/user.jpg"
            alt="User"
            className="h-full w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;