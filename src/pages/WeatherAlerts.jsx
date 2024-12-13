import React from "react";
import Navbar from "../components/Navbar";
import RealTimeWeather from "../components/wheater/RealTimeWeather";
import SetAlert from "../components/wheater/SetAlert";
import HandelMap from "../components/wheater/HandelMap";
import WeeklyForcast from "../components/wheater/WeeklyForcast";

const WeatherAlerts = () => {
  return (
    <>
      <Navbar />
      <>
        <div className="Warper" style={{height: '120vh', marginTop: '20px', display: 'flex', gap: '20px', flexDirection: 'column'}}>
          <div className="topWarper" style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '20px', height: '30%'}}>
            <RealTimeWeather/>
            <SetAlert/>
          </div>
          <div className="bottomWarper" style={{display: 'flex', justifyContent: 'space-between', width: '100%', height: '70%', gap: '20px'}}>
            <WeeklyForcast/>
            <HandelMap/>
          </div>
        </div>
      </>
    </>
  );
};

export default WeatherAlerts;
