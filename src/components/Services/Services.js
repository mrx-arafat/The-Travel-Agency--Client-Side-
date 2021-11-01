import React, { useEffect, useState } from "react";
import LoadServices from "../LoadServices/LoadServices";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./testservices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="p-4 text-danger fw-bold">We Are Offering</h1>
      <div className="service-container mb-5">
        {services.map((sv) => (
          <LoadServices sv={sv}></LoadServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
