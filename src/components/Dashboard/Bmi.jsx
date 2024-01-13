import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Side from "./Side";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BmiCalculator = () => {
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal Weight";
    } else {
      return "Overweight";
    }
  };

  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: "70%",
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "15px",
          },
          value: {
            color: "#111",
            fontSize: "25px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    labels: [getBmiCategory(bmi)],
  };

  const formik = useFormik({
    initialValues: {
      height: '',
      weight: '',
    },
    validationSchema: Yup.object().shape({
      height: Yup.number()
        .required('Height is required')
        .min(50, 'Minimum height must be 50 cm')
        .max(300, 'Maximum height must be 300 cm'),
      weight: Yup.number()
        .required('Weight is required')
        .min(10, 'Minimum weight must be 10 kg')
        .max(500, 'Maximum weight must be 500 kg'),
    }),
    onSubmit: (values) => {
      calculateBMI(values.height, values.weight);
    },
  });

  return (
    <Side>
      <div className="container mt-5">
        <h2 className="text-center">BMI Calculator</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Height (cm):</label>
                <input
                  type="number"
                  className={`form-control ${
                    formik.touched.height && formik.errors.height
                      ? "is-invalid"
                      : ""
                  }`}
                  name="height"
                  value={formik.values.height}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.height && formik.errors.height && (
                  <div className="invalid-feedback">{formik.errors.height}</div>
                )}

                <label className="form-label">Weight (kg):</label>
                <input
                  type="number"
                  className={`form-control ${
                    formik.touched.weight && formik.errors.weight
                      ? "is-invalid"
                      : ""
                  }`}
                  name="weight"
                  value={formik.values.weight}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.weight && formik.errors.weight && (
                  <div className="invalid-feedback">{formik.errors.weight}</div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Calculate BMI
              </button>
            </form>
            {bmi && (
              <div className="mt-4">
                <h3>Your BMI:</h3>
                <p>{bmi}</p>
                <ReactApexChart
                  options={options}
                  series={[Math.round(bmi)]}
                  type="radialBar"
                  height={250}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Side>
  );
};

export default BmiCalculator;
