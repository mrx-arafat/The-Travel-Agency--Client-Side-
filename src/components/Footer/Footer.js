import React from "react";

import logo from "../../img/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h2 className=" text-danger">The Travel </h2>
        <img className="logo" src={logo} alt="" />
        <p className="pp">
          Show off your brand’s personality with a custom travel agency logo
          designed just for you by a professional designer. Need ideas? We’ve
          collected some amazing examples of travel agency logos from our global
          community of designers.
        </p>
        <h5>Copyright 2021 &copy; Easin Arafat</h5>
      </div>
    </div>
  );
};

export default Footer;
