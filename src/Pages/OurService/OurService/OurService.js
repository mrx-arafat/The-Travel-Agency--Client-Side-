import React, { useEffect, useState } from "react";
import LoadOurService from "../LoadOurService/LoadOurService";

const OurService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BACKEND}/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="p-4 text-danger fw-bold">We Are Offering</h1>
      <div className="service-container mb-5">
        {services.map((sv) => (
          <LoadOurService sv={sv}></LoadOurService>
        ))}
      </div>
    </div>
  );
};

export default OurService;
