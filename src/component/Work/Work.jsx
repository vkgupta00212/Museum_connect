import React from "react";
import "./Work.css";

const Work = () => {
  const navigate = useNavigate();

  const bookingOption = () => {
    navigate("/bookingoption");
  };

  return (
    <div className="work-section-container">
      <div className="work-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>

      <div className="workSection">
        <div className="work-subheading">
          <h2>Feedback Form</h2>
        </div>

        <div className="wrap-inp">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>

        <div className="wrap-inp">
          <label htmlFor="custId">CustId</label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
      </div>
    </div>
  );
};

export default Work;
