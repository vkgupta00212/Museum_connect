import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "../assets/about-background.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please fill out your name.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post("https://mesuemconnect-backend.onrender.com/register", {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password,
        });
        alert(response.data.message); // Success message
        navigate("/login");
      } catch (error) {
        alert(error.response?.data?.error || "Registration failed");
      }
    }
  };

  return (
    <div className="Register-containor">
      <div className="Register-backgroundImage">
        <img src={AboutBackground} alt="Background" />
      </div>

      <div className="Register">
        <div className="Register-subheading">
          <h2>Registration Page</h2>
        </div>

        <div className="Register-input">
          {["name", "email", "mobile", "password", "confirmPassword"].map(
            (field, index) => (
              <div key={index} className="wrap-inp">
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field.includes("password") ? "password" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={errors[field] ? "error-input" : ""}
                  placeholder={`Enter your ${field}`}
                />
                {errors[field] && <div className="error-box">{errors[field]}</div>}
              </div>
            )
          )}
        </div>

        <div className="Register-option">
          <button className="Register-button" onClick={handleRegister}>
            Register <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
