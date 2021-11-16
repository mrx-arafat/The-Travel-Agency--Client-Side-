import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoadServices from "../LoadServices/LoadServices";
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
      <h1 className="p-4 text-danger fw-bold">We Are Offering</h1>
      {bookingSuccess?.email && (
        <Alert severity="success">Pre Ordered Successfully!</Alert>
      )}
      <div className="service-container mb-5">
        {services.map((service) => (
          <LoadServices
            service={service}
            setBookingSuccess={setBookingSuccess}
          ></LoadServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
