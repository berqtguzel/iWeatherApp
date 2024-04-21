import React from "react";
import "../GeoLocation/GeoLocation.css";

const GeoLocation = ({ handleLocationClick, loading }) => {
  return (
    <div>
      <button className="location-button" onClick={handleLocationClick}>
        Get Location
      </button>
    </div>
  );
};

export default GeoLocation;
