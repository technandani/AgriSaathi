import React from "react";
import CategoryFilter from "./CatageryFilter";
import ProductCards from "./ProductCards";

const MainProductCard = () => {
  const categories = ["All", "Seeds", "Cattle", "Tools", "Fertilizer"];
  return (
    <div className="w-full">
      <div className="flex gap-4 p-4 bg-green-900 text-white rounded-lg mb-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded shadow"
          >
            {category}
          </button>
        ))}
      </div>
      <ProductCards />
    </div>
  );
};

export default MainProductCard;
