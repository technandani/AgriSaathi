import { useState, useEffect } from "react";
import axios from "axios";

const useCurrentLocation = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = `7c8de90b132bc5c57e58a1528dd4e2e8`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            const response = await axios.get(apiUrl);
            setWeatherData(response.data);
            setCityName(response.data.name); // Store city name
            setLoading(false);
          },
          (geoError) => {
            console.error("Geolocation Error: ", geoError.message);
            setError("Unable to retrieve your location. Please enable GPS.");
            setLoading(false);
          }
        );
      } catch (err) {
        console.error("Error fetching weather data:", err.message);
        setError("Failed to fetch weather data. Please try again.");
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return { weatherData, cityName, error, loading };
};

export default useCurrentLocation;