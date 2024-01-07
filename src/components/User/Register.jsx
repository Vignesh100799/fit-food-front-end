import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import hero1 from "./images/1.png";
import hero2 from "./images/2.png";
import hero3 from "./images/bg.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Too short")
        .max(30, "Too long")
        .required("First Name is required"),
      lastName: Yup.string()
        .min(3, "Too short")
        .max(30, "Too long")
        .required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .required("Confirm Password is required"),
    }),
    onSubmit: (value) => {
      console.log(value);
      formik.resetForm();
    },
  });
  const containerStyle = {
    backgroundImage: `url(${hero3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    minHeight: "100vh",
  };

  const formContainerStyle = {
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the alpha value for transparency
    borderRadius: "10px",
    padding: "20px",
    marginTop: "20px",
  };

  return (
    <>
      <div className="container-fluid" style={containerStyle}>
        <div className="row align-items-center justify-content-center vh-100">
          <div className="col-xl-6 col-sm-12">
            <form
              onSubmit={formik.handleSubmit}
              style={formContainerStyle}
              className="m-4"
            >
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
                  <div className="invalid-feedback">
                    {formik.errors.firstName}
                  </div>
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
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="invalid-feedback">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : ""
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
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  id="password"
                  name="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="invalid-feedback">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "is-invalid"
                      : ""
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="invalid-feedback">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>

              {/* ... (Repeat similar structure for other form fields) */}

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Register
              </button>
              <p className="mt-3 text-center">
                Already registered? <Link to="/login">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
