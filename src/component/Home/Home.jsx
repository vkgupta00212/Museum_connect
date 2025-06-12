import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/preview.webp";
import { FiArrowRight } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login state (e.g., from local storage or a global state)
    const loggedInState = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInState);
  }, []);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Log out logic
      localStorage.removeItem("isLoggedIn"); // Clear login state
      setIsLoggedIn(false);
    } else {
      // Navigate to login page
      navigate("/login");
    }
  };

  const handleButtonClick = () => {
    navigate("/ticket");
  };

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>

        <div className="all-content">
        

          <div className="Maincontent">
            <div className="home-text-section">
              <h1 className="primary-heading">
                Indira Gandhi Rashtriya Manav Sangrahalay, Bhopal
              </h1>
              <p className="primary-text">
                Healthy switcher chefs do all the prep work, like peeding,
                chopping & marinating, so you can cook fresh food.
              </p>

              <button className="secondary-button" onClick={handleButtonClick}>
                Book Your Ticket <FiArrowRight />
              </button>
            </div>

            <div className="Home-image">
              <img id="Homeimage" src={BannerImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
