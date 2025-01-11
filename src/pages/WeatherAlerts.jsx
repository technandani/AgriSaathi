import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import RealTimeWeather from "../components/wheater/RealTimeWeather";
import HandelMap from "../components/wheater/HandelMap";
import WeeklyForcast from "../components/wheater/WeeklyForcast";
import useCurrentLocation from "../context/useCurrentLocation ";
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
      <div className="mt-4">
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="rounded-xl lg:col-span-3 md:col-span-2 sm:col-span-1">
            {loading ? (
              // <Loader />
              <p className="flex justify-center items-center h-full">Weather data Loading...</p>
            ) : error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : (
              <RealTimeWeather weatherData={weatherData} />
            )}
          </div>
          <div className="rounded-xl p-8 bg-[#fff] dark:bg-[#1a1a1a] shadow-lg">
            <h1 className="realWeatherHeading font-bold text-3xl text-gray-800 dark:text-gray-200">
              Offline SMS Alert
            </h1>
            <div className="setAlertBtn flex justify-center items-center gap-4">
              <Link
                to="/weather-alert-registration/set-alert"
                className="setAlertBtn p-2 border-solid border-green-600 rounded"
              >
                set Alert
              </Link>
              <p className="text-gray-600 dark:text-gray-400">
                Enable SMS Alert
              </p>
            </div>
            <p className="para text-gray-600 dark:text-gray-400 text-lg text-center">
              Receive critical weather alerts even offline
            </p>
          </div>
          <div className="rounded-xl shadow-lg bg-[#fff] dark:bg-[#1a1a1a]">
            <WeeklyForcast weatherData={weatherData} />
          </div>
          <div className="rounded-xl lg:col-span-3 md:col-span-2 sm:col-span-1">
            <HandelMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAlerts;
