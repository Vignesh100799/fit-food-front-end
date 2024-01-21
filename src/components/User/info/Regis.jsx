import React, { useState } from "react";
import { Formik, useFormik } from "formik";

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
import { initialValues, validationSchema } from "../../Formik/formik";
import Step3 from "./Steps/Step3";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import axios from "axios";

const RegisterForm = () => {
  const steps = [
    "Account Information",
    "Personal Information",
    "Register Form",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [apiError, setApiError] = useState(null);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: async (value) => {
      try {
        const response = await axios.post(`/api/register`, value);
        if (response.status === 200) {
          // console.log(value)
          formik.resetForm();
          setShowThankYou(true);
        }
      } catch (error) {
        setApiError(error.response.data.message);
      }
    },
  });

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 2:
        return (
          <>
            <Step3 formik={formik} />
          </>
        );
      case 0:
        return <Step1 formik={formik} />;
      case 1:
        return <Step2 formik={formik} />;
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
    formik.validateForm().then((errors) => {
      if (activeStep === 0) {
        const firstStepFields = [
          "username",
          "gender",
          "age",
          "activationLevel",
        ];

        const hasErrors = firstStepFields.some((field) => errors[field]);

        if (hasErrors) {
          return;
        }
      } else if (activeStep === 1) {
        const secondStepFields = [
          "goals",
          "food",
          "weight.value",
          "height.value",
          "healthConditionCategory",
          "healthCondition",
        ];

        const hasErrors = secondStepFields.some((field) => errors[field]);

        if (hasErrors) {
          return;
        }
      } else if (activeStep === 2) {
        const thirdStepFields = [
          "firstName",
          "lastName",
          "email",
          "password",
          "confirmPassword",
        ];

        const hasErrors = thirdStepFields.some((field) => errors[field]);

        if (hasErrors) {
          return;
        }
      }

      setActiveStep(activeStep + 1);
    });
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
                    <div className="btn btn-primary" onClick={handleNext}>
                      Next
                    </div>
                  )}
                  {apiError && (
                    <p
                      className="alert alert-danger mt-3 text-center"
                      role="alert"
                    >
                      {apiError}
                    </p>
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
