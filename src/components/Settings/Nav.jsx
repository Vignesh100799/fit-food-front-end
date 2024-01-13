import React from "react";
import './Style.css'

const Nav = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-between">
        <a href="#" id="navbar" className="col-3 text-decoration-none text-black">
          Profile
        </a>
        <a href="#" id="navbar" className="col-3 text-decoration-none text-black">
          Personal Info
        </a>
        <a href="#" id="navbar" className="col-3 text-decoration-none text-black">
          Health Info
        </a>
      </div>
    </div>
  );
};

export default Nav;
