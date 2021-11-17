import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import LoadServices from "../LoadServices/LoadServices";
import { NavLink } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <NavLink to="/order">
        {" "}
        <button className="btn btn-danger text-white my-4">
          Go to Order Page
        </button>
      </NavLink>
      <h1 className="p-4 text-danger fw-bold">Book a Package Now </h1>
      {bookingSuccess?.email && (
        <Alert severity="success"> Order Placed Successfully!</Alert>
      )}
      <div className="service-container mb-5">
        {services.map((service) => (
          <LoadServices
            service={service}
            setBookingSuccess={setBookingSuccess}
          ></LoadServices>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;
