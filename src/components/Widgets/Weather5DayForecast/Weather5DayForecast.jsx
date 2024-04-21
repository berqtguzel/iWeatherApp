import React, { useEffect, useState } from "react";
import "./Weather5DayForecast.css";
import moment from "moment";

const Weather5DayForecast = ({ weatherData }) => {
  const [uniqueDays, setUniqueDays] = useState([]);

  useEffect(() => {
    if (weatherData) {
      const days = weatherData.list.map((item) =>
        moment(item.dt_txt).format("ll")
      );

      const uniqueDays = [...new Set(days)];
      const uniqueData = uniqueDays.map((day) => {
        return weatherData.list.find((item) =>
          moment(item.dt_txt).isSame(day, "day")
        );
      });
      setUniqueDays(uniqueData);
      console.log(uniqueData);
    }
  }, [weatherData]);

  return (
    <div className="weather-forecast">
      <div className="weather-days">
        {uniqueDays.map((day, index) => (
          <p key={index} className="weather-day">
            {moment(day.dt_txt).format("ddd")}
          </p>
        ))}
      </div>
      <div className="weather-icons">
        {uniqueDays.map((icon, index) => (
          <img
            key={index}
            className="weather-icon-forecast"
            src={require(`../../../assets/img/weathericons/${icon.weather[0].icon}.svg`)}
            alt=""
          />
        ))}
      </div>
      <div className="forecast-temps">
        {uniqueDays.map((temp, index) => (
          <p key={index} className="forecast-temp">
            {temp.main.temp_max.toFixed()}°c{" "}
            <p className="opacity">{temp.main.temp_min.toFixed()}°c</p>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Weather5DayForecast;
