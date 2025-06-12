import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "../assets/about-background.png";
import { useNavigate } from "react-router-dom";
import "./groupBooking.css";

const GroupBooking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    sex: "",
    aadhaar: "",
    visitPlace: "",
    date: "",
    time: "",
    qty: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please fill out your name.";
    if (!formData.dob) newErrors.dob = "Please select your date of birth.";
    if (!formData.sex) newErrors.sex = "Please select your gender.";
    if (!formData.aadhaar || !/^\d{12}$/.test(formData.aadhaar))
      newErrors.aadhaar = "Please enter a valid 12-digit Aadhaar number.";
    if (!formData.visitPlace) newErrors.visitPlace = "Please choose a place to visit.";
    if (!formData.date) newErrors.date = "Please select a visit date.";
    if (!formData.time) newErrors.time = "Please select a visit time.";
    if (!formData.qty) newErrors.qty = "Please select the quantity.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const paymentButtonClick = () => {
    if (validateForm()) {
      alert("Booking Successful! Proceeding to Payment...");
      navigate("/payment");
    }
  };

  return (
    <div className="group-bookingWrapped">
      <div className="groupBooking-backgroundImage">
        <img src={AboutBackground} alt="Background" />
      </div>

      <div className="groupBooking">
        <div className="booking-subheading">
          <h2>Museum Ticket Booking (Group)</h2>
        </div>

        <div className="group-input">
          {/* Name */}
          <div className="wrap-inp">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            {errors.name && <div className="error-box">{errors.name}</div>}
          </div>

          {/* DOB */}
          <div className="wrap-inp">
            <label htmlFor="dob">DOB</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className={errors.dob ? "error-input" : ""}
            />
            {errors.dob && <div className="error-box">{errors.dob}</div>}
          </div>

          {/* Sex */}
          <div className="wrap-inp">
            <label htmlFor="sex">Sex</label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
              className={errors.sex ? "error-input" : ""}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.sex && <div className="error-box">{errors.sex}</div>}
          </div>

          {/* Aadhaar */}
          <div className="wrap-inp">
            <label htmlFor="aadhaar">Aadhaar Number</label>
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleInputChange}
              className={errors.aadhaar ? "error-input" : ""}
              placeholder="Enter Aadhaar"
            />
            {errors.aadhaar && <div className="error-box">{errors.aadhaar}</div>}
          </div>

          {/* Place of Visit */}
          <div className="wrap-inp">
            <label htmlFor="visitPlace">Place of Visit</label>
            <select
              name="visitPlace"
              value={formData.visitPlace}
              onChange={handleInputChange}
              className={errors.visitPlace ? "error-input" : ""}
            >
              <option value="">Select</option>
              <option value="Manav Sanghralaya">Manav Sanghralaya</option>
              <option value="Library">Library</option>
              <option value="Auditorium">Auditorium</option>
            </select>
            {errors.visitPlace && <div className="error-box">{errors.visitPlace}</div>}
          </div>

          {/* Date */}
          <div className="wrap-inp">
            <label htmlFor="date">Date of Visit</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className={errors.date ? "error-input" : ""}
            />
            {errors.date && <div className="error-box">{errors.date}</div>}
          </div>

          {/* Time */}
          <div className="wrap-inp">
            <label htmlFor="time">Time Slot</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className={errors.time ? "error-input" : ""}
            />
            {errors.time && <div className="error-box">{errors.time}</div>}
          </div>

          {/* Quantity */}
          <div className="wrap-inp">
            <label htmlFor="qty">Quantity</label>
            <select
              name="qty"
              value={formData.qty}
              onChange={handleInputChange}
              className={errors.qty ? "error-input" : ""}
            >
              <option value="">Select</option>
              {[...Array(9)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            {errors.qty && <div className="error-box">{errors.qty}</div>}
          </div>
        </div>

        <div className="booking-option">
          <button className="book-button" onClick={paymentButtonClick}>
            Book Ticket <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupBooking;
