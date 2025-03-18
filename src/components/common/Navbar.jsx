import React from "react";

const Navbar = () => {
  const [icon,setIcon] = React.useState(false);

  const handleToggle = () => {
    setIcon(!icon)
    document.documentElement.classList.toggle("dark")
  };

  return (
    <div className="w-full h-16 flex gap-4 items-center justify-end px-6 sticky top-0 z-20] bg-[#eee] dark:bg-[#121212]">
      <div className="lg:w-[30%] sm:w-[70%] h-[68%]">
        <input
          type="search"
          className="w-full h-full px-2 rounded-md dark:border-gray-600 dark:text-white dark:bg-[#1a1a1a] bg-[#fff] shadow-lg"
          placeholder="Search..."
        />
      </div>
      <div className="lg:w-[15%] sm:w-[45%] flex items-center gap-5 justify-end">
        <div className="icon">
          <i className="fa fa-bell text-[25px] text-[#111] dark:text-[#fff]"></i>
        </div>
        <div className="icon">
          <i className="fa fa-globe text-[25px] text-[#111] dark:text-[#fff]"></i>
        </div>
        <div className="icon modeBtn cursor-pointer" >
          <button onClick={handleToggle} className="duration-200">
            {icon?<i className="fa fa-sun text-[25px] text-[#111] dark:text-[#fff]"></i>:<i className="fa fa-moon text-[25px] text-[#111] dark:text-[#fff]"></i>}
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