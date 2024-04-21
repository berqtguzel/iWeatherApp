import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherSearchResults.css";
import { RotatingLines } from "react-loader-spinner";
const WeatherSearchResults = (props) => {
  const [cityName, setCityName] = useState("");
  const [cities, setCities] = useState([]);

  const [selectedCity, setSelectedCity] = useState(null);

  const searchCities = async () => {
    try {
      const response = await axios.get(
        `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=5&username=berqtguzel`
      );
      setCities(response.data.geonames);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    if (cityName.length) {
      searchCities();
    }
  }, [cityName]);

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    props.setLoader(true);
    props.onHandleCityClick(cityName);
  };

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };
  const handleInputEnter = (e) => {
    if (e.key === "Enter") {
      props.onHandleCityClick(cityName);
      props.setLoader(true);
    }
  };

  return (
    <div className="weather-input">
      <span className="welcome-container">
        Welcome to <span className="app-name">TypeWeather</span>
      </span>
      <span className="location-prompt">
        Choose a Location to see the weather forecast
      </span>
      <div className="location-search">
        <input
          className="location-input"
          type="text"
          placeholder="Search location"
          value={cityName}
          onChange={handleInputChange}
          onKeyPress={handleInputEnter}
        />
      </div>
      <div className="loading-spinner">
        {props.loader && (
          <RotatingLines
            visible={true}
            height="35"
            width="35"
            strokeColor="#8FB2F5"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass="loading-spinner-wrapper"
          />
        )}
      </div>

      {cities.map((city) => (
        <div className="search-results">
          <ul className="city-list">
            <li
              className="city-list-item"
              key={city.geonameId}
              onClick={() => handleCityClick(city.name)}
            >
              {city.name}, {city.countryName}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WeatherSearchResults;
