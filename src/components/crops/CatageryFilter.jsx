import React from "react";
import { NavLink } from "react-router-dom";

const categories = ["Crops price", "Crops Information"];

const CategoryFilter = () => {
  return (
    <div className="flex gap-4 p-4 bg-[#fff] dark:bg-[#1a1a1a] rounded-md">
      {categories.map((category, index) => (
        <div>
          <NavLink to='/crops' className='shadow border-[#000] dark:border-[#fff] border-b-[2px] p-1'>{category}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;