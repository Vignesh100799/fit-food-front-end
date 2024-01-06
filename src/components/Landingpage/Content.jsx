import React from "react";
import Welcome from "./Welcome";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center">
        <div className="col-xl-6 col-sm-12 text-center text-xl-start">
          <h2 className="m-3">Fit Food</h2>
        </div>
        <div className="col-xl-6 col-sm-12 text-center text-xl-end">
          <Link to={'/login'} className="btn btn-primary">Login</Link>
          <Link to={'/register'} className="m-3 btn btn-primary">Signup</Link>

        </div>
      </div>
        <Welcome/>
    </div>
  );
};

export default Content;
