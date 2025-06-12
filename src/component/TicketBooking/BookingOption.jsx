import React from "react";
import AboutBackground from "../assets/about-background.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import './BookingOption.css';

const BookingOption = () => {
  const navigate = useNavigate();

  const singleButtonClick = () => {
    navigate('/singlebooking');
  };

  const groupBookingButton = () => {
    navigate('/groupbooking');
  };

  return (
    <div className="BookingOption-container">
      <div className="BookingOption-backgroundImage">
        <img src={AboutBackground} alt="" />
      </div>

      <div className="bookingoption-Section">
        <div className="booking-subheading">
          <h2>Museum Ticket (Booking Option)</h2>
        </div>

        <div className="booking-option">
          <div className="Single-ticket" onClick={singleButtonClick}>
            <button className="ticket-button">Single Ticket<FiArrowRight /></button>
          </div>


          <div className="group-ticket" onClick={groupBookingButton}>
            <button className="ticket-button">Group Ticket<FiArrowRight /></button>
          </div>
        </div>

        <div className="bookinginfo">
          <h2>Important Instructions:</h2>
          <ul>
            <li>The e-ticket is not transferable.</li>
            <li>Entry Fee is not refundable.</li>
            <li>Visitor shall be required to show photo identity proof in original at the entry to the monument.</li>
            <li>Ticket is valid </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingOption;
