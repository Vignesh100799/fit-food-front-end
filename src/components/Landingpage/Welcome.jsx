import React from "react";
import Box from "@mui/material/Box";
import hero from "./images/hero.png";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="row d-flex m-5">
      <div className="col-xl-6 text-center text-xl-start mt-5">
        <p className="text-primary mt-5">#1 Nutrition tracking app</p>
        <h1 className=" fw-bolder mt-3">Reach your goals</h1>
        <h1 className=" fw-lighter mt-3">with MyFitnessPal</h1>
        <p className="col-xl-8 text-bg-primary p-2 bg-opacity-50 mt-3">
          Build healthy habits with the all-in-one food, exercise, and calorie
          tracker.
        </p>
        <Link to={'/register'} className="btn btn-primary mt-3">Start Today</Link>
      </div>
      <div className="col-xl-6">
        <img
        // className=" justify-content-center ms-3"
          src={hero}
          alt="Hero Image"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Welcome;
