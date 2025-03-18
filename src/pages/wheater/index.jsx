import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import RealTimeWeather from "./weatherForecast/RealTimeWeather";
import HandelMap from "./MapSection/HandelMap";
import WeeklyForcast from "./weatherForecast/WeeklyForcast";
import useCurrentLocation from "../../context/useCurrentLocation ";
import axios from "axios";
// import Loader from "../../components/common/Loader";
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
              <>
                <div className="p-4 flex bg-white rounded-lg shadow-md animate-pulse mx-auto">
                  <div className="w-1/2 m-auto">
                    <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mt-2"></div>
                    <div className="flex items-center justify-center mt-8">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div className="ml-4">
                        <div className="h-8 bg-gray-300 rounded w-24"></div>
                        <div className="h-4 bg-gray-300 rounded w-16 mt-2"></div>
                      </div>
                    </div>
                  </div>

                  {/* Skeleton Weather Details Grid */}
                  <div className="grid grid-cols-2 w-1/2 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg"
                      >
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-300 rounded w-1/2 mt-1"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : (
              <RealTimeWeather weatherData={weatherData} />
            )}
          </div>
          <div className="rounded-xl p-8 bg-[#fff] dark:bg-[#1a1a1a] shadow-lg">
            <h1 className="realWeatherHeading font-bold text-2xl text-gray-800 dark:text-gray-200">
              Offline SMS Alert
            </h1>
            <div className="setAlertBtn flex flex-col justify-center items-center gap-4">
              <Link
                to="/weather-alert-registration"
                className="setAlertBtn p-2 border border-green-600 rounded"
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
          <div className="rounded-xl lg:col-span-3 md:col-span-2 sm:col-span-1 overflow-hidden border">
            <HandelMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAlerts;
