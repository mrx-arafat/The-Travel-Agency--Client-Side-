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
          Majority of the drug shops studied are run by salespersons who have
          informal ‘training’ through apprenticeship. Visiting drug shops
          without a prescription, and dispensing without counseling unless
          pro-actively sought by the client, was very common. The existing
          process is discouraging for the shop owners to seek license, and the
          shop inspection visits are irregular, unstructured and punitive. These
          facts should be considered while designing an accredited model of drug
          shop for Bangladesh.
        </p>
        <h5>Copyright 2021 &copy; Easin Arafat</h5>
      </div>
    </div>
  );
};

export default Footer;
