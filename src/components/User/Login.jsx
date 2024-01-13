import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { containerStyle, formContainerStyle } from "./style";

import { Link, useNavigate } from "react-router-dom";
import { loginInitialValue, loginValidation } from "../Formik/formik";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: loginInitialValue,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      navigate("/dashboard");
    },
  });

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-xl-4 col-sm-12">
          <form
            onSubmit={formik.handleSubmit}
            style={formContainerStyle}
            className=""
          >
            <Link to={"/"} className="text-decoration-none text-black">
              <h1 className="text-center mb-4">Fit Food</h1>
            </Link>

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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                type="password"
                className={`form-control ${
                  formik.touched.password && formik.errors.password
                    ? "is-invalid"
                    : ""
                }`}
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback">{formik.errors.password}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Login
            </button>
            <p className="mt-3 text-center">
              Not yet registered?
              <Link to="/register" className="text-decoration-none ms-2">
                Register here
              </Link>
            </p>
            <p className="mt-3 text-center">
              <Link to="/forgot-password" className="text-decoration-none">
                Forgot Password?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;