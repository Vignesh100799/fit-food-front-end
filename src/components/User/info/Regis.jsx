import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { containerStyle, formContainerStyle } from "../style";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterForm = () => {
  const steps = [
    "Account Information",
    "Personal Information",
    "Register Form",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [healthConditions, setHealthConditions] = useState({
    obesityRelated: [
      "Type 2 Diabetes",
      "Cardiovascular Diseases",
      "Hypertension",
    ],
    nutrientDeficiencyRelated: [
      "Iron Deficiency Anemia",
      "Vitamin D Deficiency",
    ],
    eatingDisorders: ["Anorexia Nervosa", "Bulimia Nervosa"],
    gastrointestinalDisorders: [
      "GERD",
      "Nonalcoholic Fatty Liver Disease (NAFLD)",
    ],
    cancer: ["Certain Cancers"],
    jointDisorders: ["Osteoarthritis"],
    metabolicSyndrome: ["Metabolic Syndrome"],
    kidneyDisease: ["Chronic Kidney Disease (CKD)"],
    respiratoryConditions: ["Sleep Apnea"],
    mentalHealthConditions: ["Depression"],
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      goals: "",
      gender: "",
      age: "",
      activationLevel: "",
      weight: {
        value: "",
        unit: "kg",
      },
      height: {
        feet: "",
        inches: "",
        unit: "ft",
      },
      healthConditionCategory: "",
      healthCondition: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Too short")
        .max(30, "Too long")
        .required("First Name is required"),
      lastName: Yup.string()
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
      username: Yup.string().required("Required"),
      goals: Yup.string().required("Please select a goal"),
      gender: Yup.string().required("Select a gender"),
      age: Yup.number()
        .required("Age is required")
        .min(16, "Age must be at least 16 years"),
      activationLevel: Yup.string().required("Activation level is required"),
      weight: Yup.object().shape({
        value: Yup.number()
          .required("Weight is required")
          .min(40, "Weight must be at least 40 kg")
          .when("unit", {
            is: "lbs",
            then: Yup.number().min(88, "Weight must be at least 88 lbs"),
          }),
        unit: Yup.string()
          .required("Unit is required")
          .oneOf(["kg", "lbs"], "Invalid unit"),
      }),

      height: Yup.object().shape({
        feet: Yup.number().required("Feet is required"),
        inches: Yup.number()
          .required("Inches is required")
          .min(0, "Inches must be greater than or equal to 0"),
        unit: Yup.string()
          .required("Unit is required")
          .oneOf(["ft", "cm"], "Invalid unit"),
      }),
      healthConditionCategory: Yup.string().required(
        "Health condition category is required"
      ),
      healthCondition: Yup.string().required("Health condition is required"),
    }),
    onSubmit: (value) => {
      console.log(value);
      formik.resetForm();
      setShowThankYou(true);
    },
  });
  const handleHealthConditionCategoryChange = (category) => {
    formik.setFieldValue("healthConditionCategory", category);
    formik.setFieldValue("healthCondition", "");
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 2:
        return (
          <>
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
                      <div className="invalid-feedback">
                        {formik.errors.email}
                      </div>
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
                  <p className="mt-3 text-center">
                    Already registered?{" "}
                    <Link to="/login" className="text-decoration-none">
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      case 0:
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
                    {...formik.getFieldProps("username")}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="invalid-feedback">
                      {formik.errors.username}
                    </div>
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
                    <div className="invalid-feedback">
                      {formik.errors.gender}
                    </div>
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
                      formik.touched.age && formik.errors.age
                        ? "is-invalid"
                        : ""
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
                    Activation Level:
                  </label>
                  <select
                    id="activationLevel"
                    name="activationLevel"
                    className={`form-select ${
                      formik.touched.activationLevel &&
                      formik.errors.activationLevel
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
      case 1:
        return (
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-6 col-sm-12">
              <Link to={"/"} className="text-decoration-none text-black">
                    <h1 className="text-center mb-4">Fit Food</h1>
                  </Link>
                <div>
                  <label htmlFor="goals" className="form-label">
                    Goals:
                  </label>
                  <select
                    id="goals"
                    name="goals"
                    className={`form-select ${
                      formik.touched.goals && formik.errors.goals
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.goals}
                  >
                    <option value="" label="Select a goal" />
                    <option value="loseWeight" label="Lose Weight" />
                    <option value="gainWeight" label="Gain Weight" />
                    <option value="maintainWeight" label="Maintain Weight" />
                  </select>
                  {formik.touched.goals && formik.errors.goals && (
                    <div className="invalid-feedback">
                      {formik.errors.goals}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="weight.value" className="form-label">
                    Weight:
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      id="weight.value"
                      name="weight.value"
                      className={`form-control ${
                        formik.touched.weight?.value &&
                        formik.errors.weight?.value
                          ? "is-invalid"
                          : ""
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.weight.value}
                    />
                    <span className="input-group-text">
                      <select
                        id="weight.unit"
                        name="weight.unit"
                        className={`form-select ${
                          formik.touched.weight?.unit &&
                          formik.errors.weight?.unit
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.weight.unit}
                      >
                        <option value="kg" label="kg" />
                        <option value="lbs" label="lbs" />
                      </select>
                    </span>
                  </div>
                  {formik.touched.weight?.value &&
                    formik.errors.weight?.value && (
                      <div className="invalid-feedback">
                        {formik.errors.weight.value}
                      </div>
                    )}
                  {formik.touched.weight?.unit &&
                    formik.errors.weight?.unit && (
                      <div className="invalid-feedback">
                        {formik.errors.weight.unit}
                      </div>
                    )}
                </div>

                <div>
                  <label htmlFor="height.feet" className="form-label">
                    Height:
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      id="height.feet"
                      name="height.feet"
                      className={`form-control ${
                        formik.touched.height?.feet &&
                        formik.errors.height?.feet
                          ? "is-invalid"
                          : ""
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.height.feet}
                    />
                    <span className="input-group-text">ft</span>
                  </div>
                  <div className="input-group mt-2">
                    <input
                      type="number"
                      id="height.inches"
                      name="height.inches"
                      className={`form-control ${
                        formik.touched.height?.inches &&
                        formik.errors.height?.inches
                          ? "is-invalid"
                          : ""
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.height.inches}
                    />
                    <span className="input-group-text">in</span>
                  </div>
                  <select
                    id="height.unit"
                    name="height.unit"
                    className={`form-select mt-2 ${
                      formik.touched.height?.unit && formik.errors.height?.unit
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.height.unit}
                  >
                    <option value="ft" label="ft" />
                    <option value="cm" label="cm" />
                  </select>
                  {(formik.touched.height?.feet ||
                    formik.touched.height?.inches ||
                    formik.touched.height?.unit) &&
                    (formik.errors.height?.feet ||
                      formik.errors.height?.inches ||
                      formik.errors.height?.unit) && (
                      <div className="invalid-feedback">
                        {formik.errors.height?.feet ||
                          formik.errors.height?.inches ||
                          formik.errors.height?.unit}
                      </div>
                    )}
                </div>
                <div>
                  <label
                    htmlFor="healthConditionCategory"
                    className="form-label"
                  >
                    Health Condition Category:
                  </label>
                  <select
                    id="healthConditionCategory"
                    name="healthConditionCategory"
                    className={`form-select ${
                      formik.touched.healthConditionCategory &&
                      formik.errors.healthConditionCategory
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={(e) =>
                      handleHealthConditionCategoryChange(e.target.value)
                    }
                    onBlur={formik.handleBlur}
                    value={formik.values.healthConditionCategory}
                  >
                    <option value="" label="Select health condition category" />
                    {Object.keys(healthConditions).map((category) => (
                      <option
                        key={category}
                        value={category}
                        label={category}
                      />
                    ))}
                  </select>
                  {formik.touched.healthConditionCategory &&
                    formik.errors.healthConditionCategory && (
                      <div className="invalid-feedback">
                        {formik.errors.healthConditionCategory}
                      </div>
                    )}
                </div>

                {/* Health Condition Select */}
                <div>
                  <label htmlFor="healthCondition" className="form-label">
                    Health Condition:
                  </label>
                  <select
                    id="healthCondition"
                    name="healthCondition"
                    className={`form-select ${
                      formik.touched.healthCondition &&
                      formik.errors.healthCondition
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.healthCondition}
                  >
                    <option value="" label="Select health condition" />
                    {formik.values.healthConditionCategory &&
                      healthConditions[
                        formik.values.healthConditionCategory
                      ].map((condition) => (
                        <option
                          key={condition}
                          value={condition}
                          label={condition}
                        />
                      ))}
                  </select>
                  {formik.touched.healthCondition &&
                    formik.errors.healthCondition && (
                      <div className="invalid-feedback">
                        {formik.errors.healthCondition}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const showThankYouContent = (
    <div className="container-fluid h-100 mt-5">
      <div className="row align-items-center justify-content-center h-100 mt-5">
        <div className="col-xl-6 col-sm-12 text-center mt-5">
          <div className="mb-3">
            <Typography variant="h5" gutterBottom>
              Thank you for registering!
            </Typography>
            <Typography variant="subtitle1">
              Check your email for confirmation.
            </Typography>
            <Link to={"/login"} className="text-decoration-none mt-3">
              {" "}
              <FontAwesomeIcon icon={faHome} />
              <span className="ms-1">Go To home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(0, prevActiveStep - 1));
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-6 col-sm-12">
          <Stepper
            style={formContainerStyle}
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step className="mt-2" key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box style={formContainerStyle}>
            {showThankYou ? (
              showThankYouContent
            ) : (
              <form onSubmit={formik.handleSubmit} type="submit">
                {getStepContent(activeStep)}
                <Box mt={2}>
                  {activeStep === steps.length - 1 ? (
                    <Button variant="contained" type="submit">
                      Finish
                    </Button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                  {activeStep !== 0 && (
                    <Button onClick={handleBack}>Back</Button>
                  )}
                </Box>
              </form>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
