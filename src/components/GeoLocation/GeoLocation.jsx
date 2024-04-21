import React from "react";
import { RotatingLines } from "react-loader-spinner";

const GeoLocation = ({ handleLocationClick, loading }) => {
  return (
    <div>
      <button className="location-button" onClick={handleLocationClick}>
        Get Location
      </button>
      {loading && (
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
  );
};

export default GeoLocation;
