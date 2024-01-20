import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Step3 = ({ formik }) => {
  const [showpassword, setShowpassword] = useState(false);

  const handleShow = () => {
    setShowpassword(!showpassword);
  };
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-6 col-sm-12">
          <Link to={"/"} className="text-decoration-none text-black">
            <h1 className="text-center mb-4">Fit Food</h1>
          </Link>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.firstName && formik.errors.firstName
                  ? "is-invalid"
                  : ""
              }`}
              id="firstName"
              name="firstName"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <small className="invalid-feedback">
                {formik.errors.firstName}
              </small>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.lastName && formik.errors.lastName
                  ? "is-invalid"
                  : ""
              }`}
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="invalid-feedback">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.email && formik.errors.email ? "is-invalid" : ""
              }`}
              id="email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
            <input
              type={showpassword ? "text" : "password"}
              className={`form-control ${
                formik.touched.password && formik.errors.password
                  ? "is-invalid"
                  : ""
              }`}
              id="password"
              name="password"
              {...formik.getFieldProps("password")}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleShow}
            >
              {" "}
              <FontAwesomeIcon
                icon={showpassword ? faEyeSlash : faEye}
                size="sm"
              />
            </button></div>
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="input-group">
            <input
              type={showpassword ? "text" : "password"}
              className={`form-control ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "is-invalid"
                  : ""
              }`}
              id="confirmPassword"
              name="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
            />
             <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleShow}
            >
              {" "}
              <FontAwesomeIcon
                icon={showpassword ? faEyeSlash : faEye}
                size="sm"
              />
            </button>

            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="invalid-feedback">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          <p className="mt-3 text-center">
            Already registered?{" "}
            <Link to="/login" className="text-decoration-none">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3;
