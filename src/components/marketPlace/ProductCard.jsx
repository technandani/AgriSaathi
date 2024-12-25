import React from "react";

const ProductCard = ({ title, price, originalPrice, discount, image }) => {
  return (
    <div className="max-w-xs min-w-72 bg-green-900 text-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full object-cover" />
        <div className="absolute top-2 left-2 bg-orange-400 text-white text-sm font-bold px-2 py-1 rounded">
          {discount}% OFF
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">₹{price}</span>
          <span className="line-through text-gray-400">₹{originalPrice}</span>
        </div>
        <p className="text-green-300 mt-2">Save ₹{originalPrice - price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
