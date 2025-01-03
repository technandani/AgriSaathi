import React from "react";
import { NavLink } from "react-router-dom";
import CategoryFilter from "./CatageryFilter";
import ProductCards from "./ProductCards";
import Banner from "./banner";
import Fruitseed from "./fruitseed";
import Flowerseed from "./flowerseed";

const MainProductCard = () => {
  const categories = [
    {linkname:"All",link:"/marketplace"},
    {linkname:"Seeds",link:"/"},
    {linkname:"Cattle",link:"/"},
    {linkname:"Tools",link:"/"},
    {linkname:"Fertilizer",link:"/"}
    ];

  return (
    <div className="w-full  bg-green-900 px-5 py-5 rounded-xl"  >
      <Banner/>
      <div className="flex gap-10 p-4 bg-green-900 text-white rounded-lg mb-2">
        {categories.map((category, index) => (
         <NavLink to={category.link} className={({ isActive }) => `${isActive ? "border-b-2 border-white" : "border-b-0"}`} > <button
            key={index}
            className=" px-4 py-0"
          >
            {category.linkname}
          </button></NavLink>
        ))}
      </div>
      <ProductCards/>
      <Fruitseed/>
      <Flowerseed/>
     
    </div>
  );
};

export default MainProductCard;
