import React from "react";
import useTheme from "../context/theme"; // Import theme context

const Navbar = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme(); // Access theme functionality

  const handleToggle = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <div
      className={`navbar transition-all flex justify-end mb-4`}
    >
      <div className="navbar-content pb-6 pt-4">
        <div className="searchbar flex-grow">
          <input
            type="search"
            className="searchbar w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Search..."
          />
        </div>
        <div className="icons flex items-center">
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