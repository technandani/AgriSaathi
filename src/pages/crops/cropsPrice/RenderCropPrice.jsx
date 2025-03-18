import React from "react";

const RenderCropPrice = () => {
  const data = [
    {
      sno: 1,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 2,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 3,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 2,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 3,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 2,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 3,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 2,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 3,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 2,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 3,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 2,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 3,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 2,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 3,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 2,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 3,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 2,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
    {
      sno: 3,
      state: "Bihar",
      district: "Supaul",
      market: "Simrahi",
      commodity: "Paddy",
      avgPrice: "₹ 2000",
      maxPrice: "₹ 2200",
      minPrice: "₹ 1800",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-green-900">
          <tr>
            <th className="border border-gray-300 p-2">SNO</th>
            <th className="border border-gray-300 p-2">State</th>
            <th className="border border-gray-300 p-2">District</th>
            <th className="border border-gray-300 p-2">Market Name</th>
            <th className="border border-gray-300 p-2">Commodity</th>
            <th className="border border-gray-300 p-2">Avg Price (₹/Quintal)</th>
            <th className="border border-gray-300 p-2">Max Price (₹/Quintal)</th>
            <th className="border border-gray-300 p-2">Min Price (₹/Quintal)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{item.sno}</td>
              <td className="border border-gray-300 p-2">{item.state}</td>
              <td className="border border-gray-300 p-2">{item.district}</td>
              <td className="border border-gray-300 p-2">{item.market}</td>
              <td className="border border-gray-300 p-2">{item.commodity}</td>
              <td className="border border-gray-300 p-2">{item.avgPrice}</td>
              <td className="border border-gray-300 p-2">{item.maxPrice}</td>
              <td className="border border-gray-300 p-2">{item.minPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderCropPrice;
