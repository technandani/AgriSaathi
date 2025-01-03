import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import RealTimeWeather from "../components/wheater/RealTimeWeather";
import HandelMap from '../components/wheater/HandelMap';
import WeeklyForcast from '../components/wheater/WeeklyForcast';
import useCurrentLocation from '../context/useCurrentLocation ';
import axios from "axios";
import Loader from "../components/common/Loader";
import { Link } from "react-router-dom";

const WeatherAlerts = () => {
  const { cityName } = useCurrentLocation();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchWeatherData();
  }, [cityName]);

  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <div className="bg-gray-200 dark:bg-gray-900 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 relative">
              {loading ? (
                <Loader />
              ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
              ) : (
                <RealTimeWeather weatherData={weatherData} />
              )}
            </div>
            <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-center gap-3 items-center">
              <h1 className="realWeatherHeading font-bold text-3xl text-gray-800 dark:text-gray-200">
                Offline SMS Alert
              </h1>
              <div className="setAlertBtn flex justify-center items-center gap-4">
                <Link to="/weather-alert-registration/set-alert" className="setAlertBtn p-2 border-solid border-green-600 border-2 rounded">set Alert</Link>
                <p className="text-gray-600 dark:text-gray-400">Enable SMS Alert</p>
              </div>
              <p className="para text-gray-600 dark:text-gray-400 text-lg text-center">
                Receive critical weather alerts even offline
              </p>
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
    </div>
  );
};

export default WeatherAlerts;