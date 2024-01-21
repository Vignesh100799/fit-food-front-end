import React from "react";
import { Link } from "react-router-dom";

const Step1 = ({ formik }) => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-6 col-sm-12">
          <Link to={"/"} className="text-decoration-none text-black">
            <h1 className="text-center mb-4">Fit Food</h1>
          </Link>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className={`form-control ${
                formik.touched.username && formik.errors.username
                  ? "is-invalid"
                  : ""
              }`}
              id="username"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="invalid-feedback">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className={`form-select ${
                formik.touched.gender && formik.errors.gender
                  ? "is-invalid"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            >
              <option value="" label="Select a gender" />
              <option value="male" label="Male" />
              <option value="female" label="Female" />
              <option value="other" label="Other" />
            </select>
            {formik.touched.gender && formik.errors.gender && (
              <div className="invalid-feedback">{formik.errors.gender}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className={`form-control ${
                formik.touched.age && formik.errors.age ? "is-invalid" : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age && (
              <div className="invalid-feedback">{formik.errors.age}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="activationLevel" className="form-label">
              Activity Level:
            </label>
            <select
              id="activationLevel"
              name="activationLevel"
              className={`form-select ${
                formik.touched.activationLevel && formik.errors.activationLevel
                  ? "is-invalid"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.activationLevel}
            >
              <option value="" label="Select an activation level" />
              <option value="low" label="Low" />
              <option value="medium" label="Medium" />
              <option value="high" label="High" />
            </select>
            {formik.touched.activationLevel &&
              formik.errors.activationLevel && (
                <div className="invalid-feedback">
                  {formik.errors.activationLevel}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
