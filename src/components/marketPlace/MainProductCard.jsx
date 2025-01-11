import React from "react";
import { NavLink } from "react-router-dom";
import ProductCards from "./ProductCards";
import Banner from "./banner";
import Fruitseed from "./fruitseed";
import Flowerseed from "./flowerseed";

const MainProductCard = () => {
  const categories = [
    { linkname: "All", link: "/marketplace" },
    { linkname: "Seeds", link: "/" },
    { linkname: "Cattle", link: "/" },
    { linkname: "Tools", link: "/" },
    { linkname: "Fertilizer", link: "/" }
  ];

  return (
    <div className="w-full  bg-green-900 px-5 py-5 rounded-xl"  >
      <Banner />
      <div className="flex gap-5 px-2 bg-green-900 text-white rounded-lg mt-3 mb-6">
        {categories.map((category, index) => (
          <NavLink to={category.link} className={({ isActive }) => `${isActive ? "border-b-2 border-white" : "border-b-0"} px-3 text-lg`} > {category.linkname}</NavLink>
        ))}
      </div>
      <ProductCards />
      <Fruitseed />
      <Flowerseed />

    </div>
  );
};

export default MainProductCard;