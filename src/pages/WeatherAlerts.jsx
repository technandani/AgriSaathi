import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RealTimeWeather from "../components/wheater/RealTimeWeather";
import SetAlert from '../components/wheater/SetAlert'
import HandelMap from '../components/wheater/HandelMap';
import WeeklyForcast from '../components/wheater/WeeklyForcast';
import useCurrentLocation from '../context/useCurrentLocation ';
import axios from "axios";

const WeatherAlerts = () => {
  const { cityName } = useCurrentLocation(); 
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (cityName) { 
        setLoading(true); 
        try {
          const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=G9LND5LG6QJG8Y3QN3EAQPHFE`;
          const response = await axios.get(apiUrl);
          setWeatherData(response.data);
        } catch (err) {
          console.error("Error fetching weather data:", err.message);
          setError("Failed to fetch weather data. Please try again.");
        } finally {
          setLoading(false); 
        }
      }
    };
    fetchWeatherData();
  }, [cityName]);

  useEffect(() => {
    if (weatherData) {
      // console.log("Updated weather data: ", weatherData);
    }
  }, [weatherData]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              {loading ? (
                <p className="text-gray-500 text-center">Loading weather data...</p>
              ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
              ) : (
                <RealTimeWeather weatherData={weatherData} />
              )}
            </div>
            <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <SetAlert />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <WeeklyForcast weatherData={weatherData} />
            </div>
            <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <HandelMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherAlerts;