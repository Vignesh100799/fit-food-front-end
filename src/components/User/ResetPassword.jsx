import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

import { containerStyle, formContainerStyle } from "./style";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .required("New Password is required"),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm New Password is required"),
    }),
    onSubmit: (values) => {
    
      console.log("New Password:", values.newPassword);
      console.log("Confirm New Password:", values.confirmNewPassword);
      formik.resetForm();
      navigate("/login")
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
              <label htmlFor="newPassword" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  formik.touched.newPassword && formik.errors.newPassword
                    ? "is-invalid"
                    : ""
                }`}
                id="newPassword"
                name="newPassword"
                {...formik.getFieldProps("newPassword")}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <div className="invalid-feedback">
                  {formik.errors.newPassword}
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="confirmNewPassword" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  formik.touched.confirmNewPassword &&
                  formik.errors.confirmNewPassword
                    ? "is-invalid"
                    : ""
                }`}
                id="confirmNewPassword"
                name="confirmNewPassword"
                {...formik.getFieldProps("confirmNewPassword")}
              />
              {formik.touched.confirmNewPassword &&
              formik.errors.confirmNewPassword ? (
                <div className="invalid-feedback">
                  {formik.errors.confirmNewPassword}
                </div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Reset Password
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

export default ResetPassword;
