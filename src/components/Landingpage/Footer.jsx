import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="m-3">Fit Food</h2>
        </div>

        <a
          href="#"
          className="text-center text-decoration-none col-xl-6 col-sm-12"
        >
          Home
        </a>
        <a
          href="#"
          className="text-center text-decoration-none col-xl-6 col-sm-12"
        >
          About Us
        </a>

        <div className="text-center">
          <a
            href="#"
            className="text-center text-decoration-none col-xl-4 col-sm-12"
          >
            Contact
          </a>
        </div>
        <div className="text-center justify-content-around">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-decoration-none m-3"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-decoration-none m-3"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            target="_blank"
            
            className="text-center text-decoration-none m-3"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="footer-bottom text-center py-2">
          <p className="m-0">&copy; 2024 Fit Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
