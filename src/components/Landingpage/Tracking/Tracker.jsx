import React from "react";
import hero1 from "./images/1.png";
import hero2 from "./images/2.webp";
import hero3 from "./images/3.jpg";

const Tracker = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-md-4">
          <img src={hero1} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="d-inline-block bg-body-secondary">#Healthy Eating Habits</h3>
            <p className="card-text">
              Healthy eating habits involve choosing a well-balanced diet rich
              in fruits, vegetables, whole grains, and lean proteins. It's about
              nourishing your body with the right nutrients, promoting overall
              well-being and longevity.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="d-inline-block bg-body-secondary">#Nutrition Tracking App</h3>
            <p className="card-text">
              A nutrition tracking app is a powerful tool for monitoring and
              managing your dietary intake. It helps users make informed choices
              about their food consumption, track calorie intake, and achieve
              their health and fitness goals effectively.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={hero2} className="img-fluid rounded-start" alt="..." />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <img src={hero3} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="d-inline-block bg-body-secondary">#Weight Loss Assistance</h3>
            <p className="card-text">
              Weight loss assistance involves personalized guidance and support
              to help individuals achieve their weight loss goals. This can
              include tailored diet plans, exercise routines, and motivational
              resources to promote healthy habits and sustainable weight
              management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
