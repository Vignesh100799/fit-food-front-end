import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Step2 = ({formik}) => {
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
      const handleHealthConditionCategoryChange = (category) => {
        formik.setFieldValue("healthConditionCategory", category);
        formik.setFieldValue("healthCondition", "");
      };
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
  )
}

export default Step2