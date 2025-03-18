import React, { useState, useEffect } from "react";
import FilterSchemes from "./FilterSchemes";
import styled from "styled-components";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";

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
  const [showFilterPopup, setShowFilterPopup] = useState(false); // State to handle popup visibility

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

  const handleFilterChange = (filters) => {
    const filtered = schemes.filter((scheme) => {
      const stateMatch =
        !filters.state || scheme.applicable_states?.includes(filters.state);
      const genderMatch = !filters.gender || scheme.gender === filters.gender;
      const ageMatch = !filters.age || scheme.age === filters.age;
      const casteMatch = !filters.caste || scheme.caste === filters.caste;
      const ministryMatch =
        !filters.ministry || scheme.ministry === filters.ministry;

      return (
        stateMatch && genderMatch && ageMatch && casteMatch && ministryMatch
      );
    });
    setFilteredSchemes(filtered);
  };

  if (loading) {
    return (
      <>
        <div className="w-full h-full flex gap-2  animate-pulse">
          <div className=" rounded bg-gray-50 w-1/3"></div>
          <div className=" rounded bg-gray-50 w-2/3 px-4">
            <div className="flex items-center justify-center mt-4 rounded bg-gray-300 py-4 px-2">
              <div className="ml-4 w-full rounded">
                <div className="h-8 bg-gray-50 rounded w-1/3"></div>
                <div className="h-4 bg-gray-50 rounded w-2/3 mt-2"></div>
              </div>
              <div className="ml-4 w-1/6 bg-gray-300 py-4 px-2 rounded">
                <div className="h-8 bg-gray-50 rounded w-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 rounded bg-gray-300 py-4 px-2">
              <div className="ml-4 w-full rounded">
                <div className="h-8 bg-gray-50 rounded w-1/3"></div>
                <div className="h-4 bg-gray-50 rounded w-2/3 mt-2"></div>
              </div>
              <div className="ml-4 w-1/6 bg-gray-300 py-4 px-2 rounded">
                <div className="h-8 bg-gray-50 rounded w-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 rounded bg-gray-300 py-4 px-2">
              <div className="ml-4 w-full rounded">
                <div className="h-8 bg-gray-50 rounded w-1/3"></div>
                <div className="h-4 bg-gray-50 rounded w-2/3 mt-2"></div>
              </div>
              <div className="ml-4 w-1/6 bg-gray-300 py-4 px-2 rounded">
                <div className="h-8 bg-gray-50 rounded w-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 rounded bg-gray-300 py-4 px-2">
              <div className="ml-4 w-full rounded">
                <div className="h-8 bg-gray-50 rounded w-1/3"></div>
                <div className="h-4 bg-gray-50 rounded w-2/3 mt-2"></div>
              </div>
              <div className="ml-4 w-1/6 bg-gray-300 py-4 px-2 rounded">
                <div className="h-8 bg-gray-50 rounded w-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 rounded bg-gray-300 py-4 px-2">
              <div className="ml-4 w-full rounded">
                <div className="h-8 bg-gray-50 rounded w-1/3"></div>
                <div className="h-4 bg-gray-50 rounded w-2/3 mt-2"></div>
              </div>
              <div className="ml-4 w-1/6 bg-gray-300 py-4 px-2 rounded">
                <div className="h-8 bg-gray-50 rounded w-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 rounded bg-gray-300 py-4 px-2">
              <div className="ml-4 w-full rounded">
                <div className="h-8 bg-gray-50 rounded w-1/3"></div>
                <div className="h-4 bg-gray-50 rounded w-2/3 mt-2"></div>
              </div>
              <div className="ml-4 w-1/6 bg-gray-300 py-4 px-2 rounded">
                <div className="h-8 bg-gray-50 rounded w-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 rounded bg-gray-300 py-4 px-2">
              <div className="ml-4 w-full rounded">
                <div className="h-8 bg-gray-50 rounded w-1/3"></div>
                <div className="h-4 bg-gray-50 rounded w-2/3 mt-2"></div>
              </div>
              <div className="ml-4 w-1/6 bg-gray-300 py-4 px-2 rounded">
                <div className="h-8 bg-gray-50 rounded w-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 rounded bg-gray-300 py-4 px-2">
              <div className="ml-4 w-full rounded">
                <div className="h-8 bg-gray-50 rounded w-1/3"></div>
                <div className="h-4 bg-gray-50 rounded w-2/3 mt-2"></div>
              </div>
              <div className="ml-4 w-1/6 bg-gray-300 py-4 px-2 rounded">
                <div className="h-8 bg-gray-50 rounded w-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 rounded bg-gray-300 py-4 px-2">
              <div className="ml-4 w-full rounded">
                <div className="h-8 bg-gray-50 rounded w-1/3"></div>
                <div className="h-4 bg-gray-50 rounded w-2/3 mt-2"></div>
              </div>
              <div className="ml-4 w-1/6 bg-gray-300 py-4 px-2 rounded">
                <div className="h-8 bg-gray-50 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log("filter scheme", filteredSchemes);

  return (
    <div className="h-full w-full min-h-screen my-4">
      <div className="grid grid-cols-4 space-x-4">
        <div className="col-span-1 lg:flex hidden max-h-[600px]">
          <FilterSchemes onFilterChange={handleFilterChange} />
        </div>
        <SchemeCards className="col-span-3">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-md flex items-center px-4 py-2 mb-6 shadow-md">
            <input
              type="text"
              placeholder="Search Schemes"
              className="flex-1 outline-none text-gray-700 dark:text-gray-900 bg-transparent border-none"
            />
            <button>
              <i className="fa-solid fa-microphone text-gray-500 dark:text-gray-900"></i>
            </button>
          </div>
          <div className="flex align-center justify-between">
            <div className="text-gray-800 dark:text-gray-50 text-2xl font-semibold mb-4">
              Total {filteredSchemes?.length || 0} Schemes Available
            </div>
            <div className="lg:hidden">
              <button
                className="text-green-600 dark:text-green-400"
                onClick={() => setShowFilterPopup(true)}
              >
                <i className="fa-solid fa-filter text-2xl"></i>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {filteredSchemes.map((scheme) => (
              <div
                key={scheme.scheme_id}
                className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md p-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-50">
                    {scheme.scheme_name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {scheme.short_description}
                  </p>
                </div>
                <div>
                  <button className="text-green-600 dark:text-green-400 text-3xl">
                    <FaArrowRight />
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

      {/* Popup Filter for Mobile */}
      {showFilterPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50">
                Filters
              </h3>
              <button
                className="text-red-600 dark:text-red-400"
                onClick={() => setShowFilterPopup(false)}
              >
                <i className="fa-solid fa-times text-2xl"></i>
              </button>
            </div>
            <FilterSchemes onFilterChange={handleFilterChange} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Schemes;
