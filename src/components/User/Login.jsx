import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import hero3 from "./images/bg.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values) => {
      console.log(values);
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
                {...formik.getFieldProps("password")}
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
              <Link to="/register" className="ms-2">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
