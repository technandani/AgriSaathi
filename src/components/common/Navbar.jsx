import React from "react";

const Navbar = () => {
  const [icon,setIcon] = React.useState(false);

  const handleToggle = () => {
    setIcon(!icon)
    document.documentElement.classList.toggle("dark")
  };

  return (
    <div className="w-full h-14 flex items-center justify-end px-2 sticky top-0 bg-white z-50">
      <div className="w-[30%] h-[80%]">
        <input
          type="search"
          className="w-full h-full px-2 rounded-md border-2 border-gray-300 dark:bg-gray-600 dark:border-gray-600 dark:text-white"
          placeholder="Search..."
        />
      </div>
      <div className="w-[15%] flex items-center gap-3 justify-end">
        <div className="icon">
          <i className="fa fa-bell"></i>
        </div>
        <div className="icon">
          <i className="fa fa-globe"></i>
        </div>
        <div className="icon modeBtn cursor-pointer" >
          <button onClick={handleToggle} className="duration-200">
            {icon?<i className="fa fa-sun"></i>:<i className="fa fa-moon"></i>}
          </button>
        </div>
        <div
        className="w-10 h-10 bg-center"
      >
        <img
          src="./images/user.jpg"
          alt="User"
          className="h-full w-full rounded-md"
        />
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;