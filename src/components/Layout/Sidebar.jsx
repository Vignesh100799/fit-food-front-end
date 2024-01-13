import {
  faCalculator,
  faChartSimple,
  faDumbbell,
  faMessage,
  faPersonCircleQuestion,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarActive }) => {
  return (
    <nav
      id="sidebar"
      className={
        isSidebarActive
          ? "active position-fixed fixed-top "
          : "position-fixed h-100 fixed-top"
      }
    >
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
  );
};

export default Sidebar;
