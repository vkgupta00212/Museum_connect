import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiArrowRight } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../assets/MesuemConnectLogo.png";
import AboutBackground from "../assets/about-background.png";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", passWord: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); 
  };

  const validateInputs = () => {
    const { email, passWord } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !passWord) {
      setError("Please fill in all fields.");
      return false;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (passWord.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    const { email, passWord } = formData;

    if (!validateInputs()) return;
    setIsLoading(true);

    try {
      const response = await axios.post("https://mesuemconnect-backend.onrender.com/login", { email, password: passWord });
      alert(response.data.message);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userLoggedIn", "true");
      setIsLoading(false);
      navigate("/"); // Redirect to home after login
      window.location.reload(); // Refresh page to show fresh data (optional)
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials. Try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-backgroundImage">
        <img src={AboutBackground} alt="Background" />
      </div>

      <div className="login-Section">
        <div className="login-logo">
          <img src={Logo} alt="Museum Connect Logo" />
        </div>

        <div className="login-subheading">
          <h2>Welcome to Museum Connect</h2>
        </div>

        <div className="wrapinpt-containor">
          <div className="wrap-inp">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="user-input"
            />
          </div>

          <div className="wrap-inp">
            <input
              type={showPassword ? "text" : "password"}
              name="passWord"
              placeholder="Password"
              value={formData.passWord}
              onChange={handleInputChange}
              className="password-input"
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <div className="error-box">{error}</div>}
        </div>

        <div className="login-button">
          <button className="login-button" onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Logging In..." : "Login"} <FiArrowRight />
          </button>
        </div>

        <div className="login-forgot">
          <a onClick={() => navigate("/forgot")}>Forgot password?</a>
        </div>

        <div className="login-register">
          <p>
            Don't have an account?{" "}
            <a onClick={() => navigate("/register")}>Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
