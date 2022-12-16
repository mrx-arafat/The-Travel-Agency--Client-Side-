import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import LoadServices from "../LoadServices/LoadServices";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [services, setServices] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BACKEND}/services`)
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

export default PlaceOrder;
