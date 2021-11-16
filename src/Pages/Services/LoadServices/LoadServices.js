import React from "react";

import BookingModal from "../BookingModal/BookingModal";

import "./LoadServices.css";
// all data are showing for services page
const LoadServices = ({ service, setBookingSuccess }) => {
  const { title, name, img, description, price } = service;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <div className="service" id="services">
        <img className="image" src={img} alt="" />

        <h3 className="p-3 text-danger fw-bold">{name}</h3>

        <p>{description}</p>
        <small className="p-3 fw-bold">{title}</small>
        <h3 className="p-3 text-danger">{price}</h3>

        <button
          onClick={handleBookingOpen}
          className="btn btn-danger text-white mb-4"
        >
          Book Now
        </button>
      </div>
      <BookingModal
        service={service}
        setBookingSuccess={setBookingSuccess}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
      ></BookingModal>
    </>
  );
};

export default LoadServices;
