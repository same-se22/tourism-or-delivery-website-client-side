import React from "react";
import img1 from "../../img/about.jpg";
import img2 from "../../img/about-big.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="About-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-img">
              <div className="big-img">
                <img src={img1} alt="" />
              </div>
              <div className="small-img">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="my-color mb-3">
              <i class="fas fa-grip-lines-vertical"></i> About us
            </h4>
            <h2 className="text-white title my-4">
             Vaction planner<span className="fw-bold">tour</span> with{" "}
              <span className="fw-bold">Us</span>
            </h2>
            <p className="text-white lh-base">
            Your vacation days are limited. When you book a trip, you want to get the most out of it, and often that means seeing as many places as you can squeeze in. But have you ever considered spending a full week in one city as your whole vacation? When you focus on just one city, you’ll see more of the city instead of just glimpses of a few cities. Here’s why you should consider a city break for your next vacation.There’s more to 
            </p>
            <button className="btn my-btn mt-4">Learn MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
