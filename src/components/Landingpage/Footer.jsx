import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="m-3">Fit Food</h2>
        </div>

        <a
          href="#"
          className="text-center text-decoration-none col-xl-6 col-sm-12 text-black"
        >
          Home
        </a>
        <Link
          href="#"
          className="text-center text-decoration-none col-xl-6 col-sm-12 text-black"
        >
          About Us
        </Link>

        <div className="text-center">
          <Link
            href="#"
            className="text-center text-decoration-none col-xl-4 col-sm-12 text-black"
          >
            Contact
          </Link>
        </div>
        <div className="text-center justify-content-around">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-decoration-none m-3"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-decoration-none m-3"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link
            href="#"
            target="_blank"
            
            className="text-center text-decoration-none m-3"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>

        <div className="footer-bottom text-center py-2">
          <p className="m-0">&copy; 2024 Fit Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
