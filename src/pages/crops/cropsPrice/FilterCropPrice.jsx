import React from "react";

const FilterCropPrice = () => {
  return (
    <div className="bg-green-900 text-white p-4 flex gap-4 justify-between">
      <select className="p-2 rounded bg-white text-black">
        <option value="">Date To</option>
        <option value="2025-01-01">2025-01-01</option>
        <option value="2025-01-01">2025-01-02</option>
        <option value="2025-01-01">2025-01-03</option>
      </select>
      <select className="p-2 rounded bg-white text-black">
        <option value="">Date From</option>
        <option value="2024-12-01">2024-12-01</option>
        <option value="2024-12-01">2024-12-02</option>
        <option value="2024-12-01">2024-12-03</option>
      </select>
      <select className="p-2 rounded bg-white text-black">
        <option value="">Commodity</option>
        <option value="Paddy">Paddy</option>
        <option value="Paddy">Wheat</option>
        <option value="Paddy">green gram</option>
        <option value="Paddy">black gram</option>
        <option value="Paddy">red gram</option>
      </select>
      <select className="p-2 rounded bg-white text-black">
        <option value="">State</option>
        <option value="Bihar">Bihar</option>
        <option value="Bihar">UP</option>
      </select>
      <select className="p-2 rounded bg-white text-black">
        <option value="">District</option>
        <option value="Supaul">Supaul</option>
      </select>
      <select className="p-2 rounded bg-white text-black">
        <option value="">Market</option>
        <option value="Simrahi">Simrahi</option>
      </select>
      <select className="p-2 rounded bg-white text-black">
        <option value="">Price/Arrivals</option>
        <option value="Price">Price</option>
      </select>
      <button className="bg-white text-green-500 px-4 py-2 rounded hover:bg-green-600 hover:text-white">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default FilterCropPrice;
