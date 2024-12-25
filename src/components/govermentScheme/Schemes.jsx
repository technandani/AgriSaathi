import React, { useState, useEffect } from "react";
import FilterSchemes from "./FilterSchemes";
import styled from "styled-components";
import axios from "axios";

const SchemeCards = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Schemes = () => {
  const [filteredSchemes, setFilteredSchemes] = useState([]); 
  const [schemes, setSchemes] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSchemes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/scheme/getSchemes");
      setSchemes(res.data.data); 
      setFilteredSchemes(res.data.data); 
    } catch (err) {
      console.error("Error fetching schemes:", err);
      setError("Failed to fetch schemes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchemes();
  }, []);

  // Filter Schemes Based on Selected Filters
  const handleFilterChange = (filters) => {
    const filtered = schemes.filter((scheme) => {
      const stateMatch = !filters.state || scheme.applicable_states?.includes(filters.state);
      const genderMatch = !filters.gender || scheme.gender === filters.gender;
      const ageMatch = !filters.age || scheme.age === filters.age; 
      const casteMatch = !filters.caste || scheme.caste === filters.caste; 
      const ministryMatch = !filters.ministry || scheme.ministry === filters.ministry;

      return stateMatch && genderMatch && ageMatch && casteMatch && ministryMatch;
    });
    setFilteredSchemes(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-8 px-4">
      <div className="flex space-x-4">
        <div className="w-1/4">
          <FilterSchemes onFilterChange={handleFilterChange} />
        </div>
        <SchemeCards className="w-3/4 overflow-scroll" style={{ height: "85vh" }}>
          <div className="bg-white dark:bg-gray-800 rounded-md flex items-center px-4 py-2 mb-6 shadow-md">
            <input
              type="text"
              placeholder="Search Schemes"
              className="flex-1 outline-none text-gray-700 dark:text-gray-300 bg-transparent border-none"
            />
            <button>
              <i className="fa-solid fa-microphone text-gray-500 dark:text-gray-300"></i>
            </button>
          </div>
          <h2 className="text-gray-800 dark:text-gray-200 text-2xl font-semibold mb-4">
            Total {filteredSchemes?.length || 0} Schemes Available
          </h2>
          <div className="space-y-6">
            {filteredSchemes.map((scheme) => (
              <div
                key={scheme.scheme_id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-green-800 dark:text-green-400 font-semibold">
                    {scheme.location || "State-Specific"}
                  </p>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {scheme.scheme_name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {scheme.short_description}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    {scheme.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <button className="text-green-600 dark:text-green-400 text-3xl">
                    &#8250;
                  </button>
                </div>
              </div>
            ))}
            {filteredSchemes.length === 0 && (
              <p className="text-gray-600 dark:text-gray-400 text-center">
                No schemes match the selected filters.
              </p>
            )}
          </div>
        </SchemeCards>
      </div>
    </div>
  );
};

export default Schemes;