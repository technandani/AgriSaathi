import React, { useState } from "react";

const FilterSchemes = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    state: "",
    gender: "",
    age: "",
    caste: "",
    ministry: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white dark:bg-[#1a1a1a] shadow-lg rounded-lg p-6 w-full h-full overflow-y-scroll">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-[#1a1a1a] dark:text-gray-200">
          Filters
        </h3>
        <button
          onClick={() =>
            setFilters({
              state: "",
              gender: "",
              age: "",
              caste: "",
              ministry: "",
            })
          }
          className="text-blue-500 dark:text-blue-400 text-sm hover:underline"
        >
          Reset
        </button>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            State
          </label>
          <select
            value={filters.state}
            onChange={(e) => handleFilterChange("state", e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All States</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli">
              Dadra and Nagar Haveli
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Gender
          </label>
          <div className="flex space-x-4">
            {["All", "Female", "Male"].map((gender) => (
              <label
                key={gender}
                className="flex items-center text-gray-700 dark:text-gray-200"
              >
                <input
                  type="radio"
                  value={gender}
                  checked={filters.gender === gender}
                  onChange={() => handleFilterChange("gender", gender)}
                  className="mr-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                />
                {gender}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Age
          </label>
          <input
            type="number"
            value={filters.age}
            onChange={(e) => handleFilterChange("age", e.target.value)}
            placeholder="Enter age"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Caste
          </label>
          <select
            value={filters.caste}
            onChange={(e) => handleFilterChange("caste", e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Castes</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC/ST">SC/ST</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Ministry Name
          </label>
          <input
            type="text"
            value={filters.ministry}
            onChange={(e) => handleFilterChange("ministry", e.target.value)}
            placeholder="Enter ministry name"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSchemes;
