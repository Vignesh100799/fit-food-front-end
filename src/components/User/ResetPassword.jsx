import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

import { containerStyle, formContainerStyle } from "./style";
import { Link, json, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Dashboard/assests/Loading";

const ResetPassword = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShow = () => {
    setShowpassword(!showpassword);
  };
  const navigate = useNavigate();
  const params = useParams();   
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .required("New Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm New Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post(`/api/reset-password/${params.token}`, values);

        formik.resetForm();
        navigate("/login");
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log(error);
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
              <label htmlFor="password" className="form-label">
                New Password
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
                </button>
              </div>

              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm New Password
              </label>
              <div className="input-group">
                <input
                  type={showpassword ? "text" : "password"}
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
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="invalid-feedback">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>

            {loading ? (
              <button type="submit" className="btn w-100 mt-3">
                <Loading />
              </button>
            ) : (
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Reset Password
              </button>
            )}
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
