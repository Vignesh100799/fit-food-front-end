import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

import { containerStyle, formContainerStyle } from "./style";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [apiError, setApiError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        // console.log("Sending reset link to:", values.email);
    const response = await axios.post(`/api/forgot-password`, values);
        formik.resetForm();
        console.log(response)
      } catch (error) {
        setApiError(error.response.data.message);
      }
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
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
              {apiError && (
                <p className="alert alert-danger mt-3 text-center" role="alert">
                  {apiError}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Send Reset Link
            </button>
            <p className="mt-3 text-center">
              Remember your password?{" "}
              <Link to="/login" className="text-decoration-none ms-2">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
