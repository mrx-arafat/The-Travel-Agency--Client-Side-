import React from "react";

import { Link } from "react-router-dom";

import "./LoadServices.css";
// all data are showing for services page
const LoadServices = (props) => {
  const { id, title, name, img, description, price } = props.sv;
  return (
    <div className="service" id="services">
      <img className="image" src={img} alt="" />

      <h3 className="p-3 text-danger fw-bold">{name}</h3>

      <p>{description}</p>
      <small className="p-3 fw-bold">{title}</small>
      <h3 className="p-3 text-danger">{price}</h3>

      <Link to={`/view/${id}`}>
        <button className="btn btn-danger text-white mb-4">Book Now</button>
      </Link>
    </div>
  );
};

export default LoadServices;
