import {
  faCalculator,
  faChartSimple,
  faMessage,
  faMoon,
  faPersonCircleQuestion,
  faSignOutAlt,
  faSliders,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Side = ({ children }) => {
  const [isSidebarActive, setSidebarActive] = useState(true);
  

  
  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };
 
  return (
    <div className="wrapper d-flex align-items-stretch light-mode">
      <nav id="sidebar" className={isSidebarActive ? "active" : ""}>
        <Link to={"/"}>
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link text-primary" href="#">
                    <FontAwesomeIcon icon={faUser} className="mr-1" />
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                    Logout
                  </a>
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
