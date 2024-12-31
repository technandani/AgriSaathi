import React from "react";

const RealTimeWeather = ({ weatherData }) => {
  console.log("weather data is: ", weatherData);
  const {
    temp = "N/A",
    minTemp = "N/A",
    maxTemp = "N/A",
    chanceOfRain = "N/A",
    lightning = "N/A",
    windSpeed = "N/A",
    humidity = "N/A",
    sunrise = "N/A",
    sunset = "N/A",
  } = weatherData || {};

  return (
    <div className=" flex h-full w-full bg-transparent rounded-lg shadow-lg">
      <div className="flex flex-col gap-3 p-4 bg-green-600 items-center justify-center dark:bg-gray-800 text-gray-100 w-1/2 rounded-l-lg">
        <div className="text-center text-2xl font-bold">Real Time Weather</div>
        <div className="text-center text-lg">{weatherData.address}</div>
        <div className="flex items-center justify-center gap-5">
          <div className="text-6xl text-yellow-500">
            <i className="fa-solid fa-cloud-sun"></i>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold">{weatherData.currentConditions.temp}°C</div>
            <div className="text-gray-300 text-sm">
              {weatherData.days[0].tempmin}°C / {weatherData.days[0].tempmax}°C
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 w-1/2 rounded-r-lg">
        {[
          { icon: "fa-cloud-showers-heavy", label: "Chance of Rain", value: chanceOfRain },
          { icon: "fa-bolt", label: "Lightning", value: lightning },
          { icon: "fa-wind", label: "Wind Speed", value: weatherData.windspeed },
          { icon: "fa-tint", label: "Humidity", value: humidity },
          { icon: "fa-sun", label: "Sunrise", value: sunrise },
          { icon: "fa-moon", label: "Sunset", value: sunset },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
          >
            <div className="text-2xl text-green-500">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div>
              <div className="text-lg font-medium">{item.label}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeWeather;
