import React from "react";
import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import "./WeatherFeatures.css";

const WeatherFeatures = ({ weatherData }) => {
  return (
    <div className="weather-features">
      <p className="weather-feature">
        <DeviceThermostatOutlinedIcon className="icon" />
        Thermal sensation <hr color="#1c1c27" />
        {weatherData.list[0].main.temp_min.toFixed()}°c
      </p>
      <hr color="#3b3b54" />
      <p className="weather-feature">
        <CloudIcon className="icon" />
        Probability of rain <hr color="#1c1c27" />
        {weatherData.list[0].pop}%
      </p>
      <hr color="#3b3b54" />
      <p className="weather-feature">
        <AirIcon className="icon" />
        Wind speed <hr color="#1c1c27" />
        {weatherData.list[0].wind.speed.toFixed()} km/h
      </p>
      <hr color="#3b3b54" />
      <p className="weather-feature">
        <WaterDropIcon className="icon" />
        Air humidity <hr color="#1c1c27" />
        {weatherData.list[0].main.humidity}%
      </p>
      <hr color="#3b3b54" />
      <p className="weather-feature">
        <WbSunnyIcon className="icon" />
        UV Index <hr color="#1c1c27" />
        {weatherData.list[0].main.temp_kf.toFixed()}
      </p>
    </div>
  );
};

export default WeatherFeatures;
