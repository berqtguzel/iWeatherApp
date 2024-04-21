import React from "react";
import moment from "moment";
import "./WeatherMain.css";

const WeatherMain = ({ weatherData }) => {
  return (
    <div className="weather-main">
      <div className="weather-main-content">
        <div className="weather-location">
          <p className="weather-city-name">
            {weatherData.city.name},{weatherData.city.country}
          </p>
          <p className="weather-date">
            {moment(weatherData.list[0].dt_txt).format("dddd, MMM D, YYYY")}
          </p>
        </div>
        <div className="weather-temps">
          <p className="weather-temperature">
            {weatherData.list[0].main.temp.toFixed()} °c
          </p>
          <p className="weather-temp-mm">
            {weatherData.list[0].main.temp_min.toFixed()} °c /
            {weatherData.list[0].main.temp_max.toFixed()} °c
          </p>
          <p className="weather-description">
            {weatherData.list[0].weather[0].description}
          </p>

          <div className="weather-icon-component">
            <img
              className="weather-icon"
              src={require(`../../../assets/img/weathericons/${weatherData.list[0].weather[0].icon}.svg`)}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="weather-bg">
        <img
          className="weather-bg-img"
          src={require(`../../../assets/img/${weatherData.list[0].weather[0].description}.png`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default WeatherMain;
