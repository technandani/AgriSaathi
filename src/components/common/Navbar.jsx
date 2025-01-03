import React from "react";

const Navbar = () => {
  const [icon, setIcon] = React.useState(false);

  const handleToggle = () => {
    setIcon(!icon);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="w-full h-14 flex items-center justify-between px-4 sticky top-0 bg-white dark:bg-gray-800 dark:text-white shadow-md">
      {/* Search Bar */}
      <div className="w-[30%] h-[80%]">
        <input
          type="search"
          className="w-full h-full px-4 rounded-md border-2 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none"
          placeholder="Search..."
        />
      </div>

      {/* Icons and Profile Section */}
      <div className="w-[15%] flex items-center gap-4 justify-end">
        <div className="icon cursor-pointer">
          <i className="fa fa-bell"></i>
        </div>
        <div className="icon cursor-pointer">
          <i className="fa fa-globe"></i>
        </div>
        <div className="icon modeBtn cursor-pointer">
          <button onClick={handleToggle} className="duration-200">
            {icon ? (
              <i className="fa fa-sun text-yellow-500"></i>
            ) : (
              <i className="fa fa-moon text-gray-500"></i>
            )}
          </button>
        </div>
        <div className="w-10 h-10 bg-center">
          <img
            src="./images/user.jpg"
            alt="User"
            className="h-full w-full rounded-md border-2 border-gray-300 dark:border-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
