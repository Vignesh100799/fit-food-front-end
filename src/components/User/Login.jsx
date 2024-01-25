import { useFormik } from "formik";
import React, { useState } from "react";
import { containerStyle, formContainerStyle } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { loginInitialValue, loginValidation } from "../Formik/formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../reducers/Slice/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faL } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Dashboard/assests/Loading";

const Login = () => {
  const dispatch = useDispatch();
  const [showpassword, setShowpassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleShow = () => {
    setShowpassword(!showpassword);
  };
  const navigate = useNavigate();
  const [apiError, setApiError] = useState(null);
  const formik = useFormik({
    initialValues: loginInitialValue,
    validationSchema: loginValidation,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await axios.post(`/api/login`, values);
        if (response.status === 200) {
          dispatch(loginSuccess(response.data));
          formik.resetForm();
          navigate("/dashboard");
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleShow}
                >
                  <FontAwesomeIcon
                    icon={showpassword ? faEyeSlash : faEye}
                    size="sm"
                  />
                </button>
              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback">{formik.errors.password}</div>
              ) : null}
              {apiError && (
                <p className="alert alert-danger mt-3 text-center" role="alert">
                  {apiError}
                </p>
              )}
              </div>
            </div>
            {loading ? (
              <button type="submit" className="btn w-100 mt-3">
                <Loading />
              </button>
            ) : (
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Login
              </button>
            )}

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
