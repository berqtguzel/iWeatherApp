import React, { useState } from "react";
import "./WeatherApp.css";
import WeatherFeatures from "../Widgets/WeatherFeatures/WeatherFeatures.jsx";
import WeatherMain from "../Widgets/WeatherMain/WeatherMain.jsx";
import axios from "axios";
import Weather5DayForecast from "../Widgets/Weather5DayForecast/Weather5DayForecast.jsx";
import WeatherSearchResults from "../WeatherSearchInput/WeatherSearchResults/WeatherSearchResults.jsx";
import GeoLocation from "../GeoLocation/GeoLocation.jsx";
import Logo from "../Logo/Logo.jsx";

function WeatherInput() {
  const [weatherData, setWeatherData] = useState(null);
  const [loader, setLoader] = useState(false);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, console.error);
      setLoader(true);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=895284fb2d2c50a520ea537456963d9c&units=metric`;
    axios
      .get(url)
      .then((response) => {
        setWeatherData(response.data);
      })

      .catch((error) => console.log(error));
  }

  const url = (cityName) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;
  };

  const searchLocation = async (cityName) => {
    const apiUrl = url(cityName);

    axios.get(apiUrl).then((response) => {
      setWeatherData(response.data);
    });
  };

  const handleCityClick = (cityName) => {
    searchLocation(cityName);
  };

  return (
    <div className="weather-data">
      {weatherData ? (
        <div className="weather-data-main">
          <WeatherMain weatherData={weatherData} />
          <WeatherFeatures weatherData={weatherData} />
          <Weather5DayForecast weatherData={weatherData} />
        </div>
      ) : (
        <div className="weather-search">
          <Logo />
          <WeatherSearchResults
            weatherData={weatherData}
            onHandleCityClick={handleCityClick}
            loader={loader}
            setLoader={setLoader}
          />
          <GeoLocation
            handleLocationClick={handleLocationClick}
            handleCityClick={handleCityClick}
            weatherData={weatherData}
          />
        </div>
      )}
    </div>
  );
}

export default WeatherInput;
