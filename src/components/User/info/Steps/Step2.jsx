import React, { useState } from "react";
import { Link } from "react-router-dom";

const Step2 = ({ formik }) => {
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
    None : ["None"]
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
                formik.touched.goals && formik.errors.goals ? "is-invalid" : ""
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
              <div className="invalid-feedback">{formik.errors.goals}</div>
            )}
          </div>
          <div>
            <label htmlFor="food" className="form-label">
              Food Type:
            </label>
            <select
              id="food"
              name="food"
              className={`form-select ${
                formik.touched.food && formik.errors.food ? "is-invalid" : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.food}
            >
              <option value="" label="Select a Food" />
              <option value="veg" label="Vegetarian" />
              <option value="nonVeg" label="Non Vegetarian" />
            </select>
            {formik.touched.food && formik.errors.food && (
              <div className="invalid-feedback">{formik.errors.food}</div>
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
                  formik.touched.weight?.value && formik.errors.weight?.value
                    ? "is-invalid"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight.value}
              />
              <span className="input-group-text">kg</span>
            </div>
            {formik.touched.weight?.value && formik.errors.weight?.value && (
              <div className="invalid-feedback">
                {formik.errors.weight.value}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="height.value" className="form-label">
              Height:
            </label>
            <div className="input-group">
              <input
                type="number"
                id="height.value"
                name="height.value"
                className={`form-control ${
                  formik.touched.height?.value && formik.errors.height?.value
                    ? "is-invalid"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.height.value}
              />
              <span className="input-group-text">cm</span>
            </div>
            {formik.touched.height?.value && formik.errors.height?.value && (
              <div className="invalid-feedback">
                <span className="d-inline-block">
                  {formik.errors.height.value}
                </span>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="healthConditionCategory" className="form-label">
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
                <option key={category} value={category} label={category} />
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
                formik.touched.healthCondition && formik.errors.healthCondition
                  ? "is-invalid"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.healthCondition}
            >
              <option value="" label="Select health condition" />
              {formik.values.healthConditionCategory &&
                healthConditions[formik.values.healthConditionCategory].map(
                  (condition) => (
                    <option
                      key={condition}
                      value={condition}
                      label={condition}
                    />
                  )
                )}
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
};

export default Step2;
