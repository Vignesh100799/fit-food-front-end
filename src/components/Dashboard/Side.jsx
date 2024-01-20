import {
  faCalculator,
  faChartSimple,
  faDumbbell,
  faMessage,
  faPersonCircleQuestion,
  faSignOutAlt,
  faSliders,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Welcome from "./Welcome";
import { useDispatch } from "react-redux";
import { logOutSuccess } from "../reducers/Slice/userSlice";

const Side = ({ children }) => {
  const [isSidebarActive, setSidebarActive] = useState(true);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };
  const handleLogout = async () => {
    try {
      dispatch(logOutSuccess());
    } catch (error) {}
  };

  return (
    <div className="wrapper d-flex align-items-stretch light-mode">
      <nav id="sidebar" className={isSidebarActive ? "active " : ""}>
        <Link>
          <h3 className="text-white mt-3 text-center">Fit Food</h3>
        </Link>
        <ul className="list-unstyled components mb-5">
          <li className="active">
            <Link className="text-decoration-none" to={"/dashboard"}>
              <span className="fa fa-home" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/food-chart"} className="text-decoration-none mt-3">
              <span>
                <FontAwesomeIcon icon={faChartSimple} />
              </span>
              Food Chart
            </Link>
          </li>
          <li>
            <Link to={"/exercise"} className="text-decoration-none mt-3">
              <span>
                <FontAwesomeIcon icon={faDumbbell} />
              </span>
              Exercise
            </Link>
          </li>
          <li>
            <Link to={"/bmi-calculator"} className="text-decoration-none">
              <span>
                <FontAwesomeIcon icon={faCalculator} />
              </span>
              BMI Calculator
            </Link>
          </li>
          <li>
            <Link to={"/settings"} className="text-decoration-none">
              <span>
                <FontAwesomeIcon icon={faSliders} />
              </span>
              Settings
            </Link>
          </li>
          <li>
            <Link to={"/contact-us"} className="text-decoration-none">
              <span>
                <FontAwesomeIcon icon={faMessage} />
              </span>
              Contact US
            </Link>
          </li>
          <li>
            <Link to={"/faq-section"} className="text-decoration-none">
              <span>
                <FontAwesomeIcon icon={faPersonCircleQuestion} />
              </span>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
      {/* Page Content  */}
      <div id="content" className="m-2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              onClick={toggleSidebar}
              className="btn btn-primary"
            >
              <i className="fa fa-bars" />
              <span className="sr-only">Toggle Menu</span>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <i className="fa fa-bars" /> */}
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Welcome />
                </li>
                <li className="nav-item active">
                  <Link to={"/settings"} className="nav-link text-primary">
                    <FontAwesomeIcon icon={faUser} className="mr-1" />
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/"}
                    onClick={handleLogout}
                    className="nav-link text-primary"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default Side;
