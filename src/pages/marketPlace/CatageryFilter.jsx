import React from "react";

const categories = ["All", "Seeds", "Cattle", "Tools", "Fertilizer"];

const CategoryFilter = () => {
  return (
    <div className="flex gap-4 p-4 bg-green-900 text-white rounded-lg">
      {categories.map((category, index) => (
        <button
          key={index}
          className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded shadow"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;