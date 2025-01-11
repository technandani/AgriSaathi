import React from "react";

const ProductCard = ({ title, price, originalPrice, discount, image }) => {
  return (
    <div className="bg-white text-black shadow-lg w-full rounded-lg">

      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-tl-lg  rounded-tr-lg" />
        <div className="absolute top-0 left-0 bg-orange-400 text-white text-sm font-bold rounded-tl-lg px-4 py-1 rounded-br-2xl">
          {discount}% OFF
        </div>
      </div>

      <div className="p-4">

        <h3 className="text-base font-bold mb-2">{title}</h3>

        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-black">₹{price}</span>
          <span className="line-through text-gray-400">₹{originalPrice}</span>
        </div>

        <p className="text-green-500 mt-2">Save ₹{originalPrice - price}</p>
      </div>
    </div>

  );
};
export default ProductCard;