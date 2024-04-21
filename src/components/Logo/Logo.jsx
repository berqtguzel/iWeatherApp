import React from 'react';
import '../Logo/Logo.css';
import Logo from '../../assets/img/Logo.png';
const logo = () => {
  return (
    <div className="logo">
      <img className="logo-img" src={Logo} alt="" />
      <h3 className="logo-txt">
        <span className="logo-txt-i">i</span>Weather
      </h3>
    </div>
  );
};

export default logo;
