import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "../assets/about-background.png";
import './payment.css';


const payment = () => {



  return (
    <div className='paymentWrapped'>

            <div className="payment-backgroundImage">
                <img src={AboutBackground} alt="" />
            </div>

            <div className="payment">

                <div className="payment-subheading">
                   <h2>Payment Gateway</h2>
                </div>

               

        

                <div className="booking-option">
                      <button className="book-button">
                        Pay <FiArrowRight />{" "}
                      </button>
                </div>

            </div>
    </div>
  )
}

export default payment;
