import React from "react";
import AboutBackground from "../assets/about-background.png";
import ManavImage from "../assets/manav.jpg";
import libraryImage from "../assets/library.jpg";
import auditoriumImage from "../assets/auditorium.jpg";
import allImage from "../assets/all.jpg"
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import './TicketMain.css';

const TicketMain = () => {
  const navigate = useNavigate();

  const bookingOption = ()=>{
    navigate("/bookingoption");
  }

  return (
    <div className="ticket-section-container">
      <div className="ticket-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>

      <div className="ticketbookingSection">
        <div className="booking-subheading">
          <h2>Museum Ticket Booking</h2>
        </div>

        <div className="booking-option">
          <div className="grid-item" onClick={bookingOption}>
            <img src={ManavImage} alt="Manav Sangrahalya" className="grid-image" />
            <div className="overlay">
              <p>Price: ₹50</p> {/* Add price information here */}
            </div>
            <button className="grid-button" onClick={bookingOption}>Manav Sangrahalya <FiArrowRight /></button>
          </div>

          <div className="grid-item" onClick={bookingOption}>
            <img src={libraryImage} alt="Library" className="grid-image" />
            <div className="overlay">
              <p>Price: ₹50</p> {/* Add price information here */}
            </div>
            <button className="grid-button" onClick={bookingOption}>Library <FiArrowRight /></button>
          </div>

          <div className="grid-item" onClick={bookingOption}>
            <img src={auditoriumImage} alt="Auditorium" className="grid-image" />
            <div className="overlay">
            <p>Price: ₹50</p>{/* Add price information here */}
            </div>
           
            <button className="grid-button" onClick={bookingOption}>Auditorium <FiArrowRight /></button>
          </div>

          <div className="grid-item" onClick={bookingOption}>
            <img src={allImage} alt="All Tickets" className="grid-image" />
            <div className="overlay">
            <p>Price: ₹100</p> {/* Add price information here */}
            </div>
          
            <button className="grid-button" onClick={bookingOption}>All Tickets <FiArrowRight /></button>
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

export default TicketMain;
