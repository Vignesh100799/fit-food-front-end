import { useFormik } from "formik";
import React, { useState } from "react";
import { settingsIntialvalues, settingsValidation } from "../Formik/formik";


const EditSetting = ({ onCancelEdit }) => {
  const formik = useFormik({
    initialValues: settingsIntialvalues,
    validationSchema: settingsValidation,
    onSubmit: (values, { resetForm }) => {
      console.log('Submitting form with values:', values);
      resetForm();
      onCancelEdit();
    },
  });
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
    <div className="container mt-4">
      <h2>Edit Details</h2>
      <div className="row">
        <form onSubmit={formik.handleSubmit} className="w-100">
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>User Name</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    className={`form-control ${
                      formik.touched.age && formik.errors.age
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("age")}
                  />
                  {formik.touched.age && formik.errors.age && (
                    <div className="invalid-feedback">{formik.errors.age}</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>Activation Level</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td>Goals</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>
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

                  <select
                    id="weight.unit"
                    name="weight.unit"
                    className={`form-select ${
                      formik.touched.weight?.unit && formik.errors.weight?.unit
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
                </td>
              </tr>
              <tr>
                <td>Height</td>
                <td>
                  <input
                    type="number"
                    id="height.feet"
                    name="height.feet"
                    className={`form-control ${
                      formik.touched.height?.feet && formik.errors.height?.feet
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.height.feet}
                  />

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
                </td>
              </tr>
              <tr>
                <td>Health Condition Category</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td>Health Condition</td>
                <td>
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
                </td>
              </tr>
            </tbody>
          </table>

          <div className="d-flex justify-content-end mt-3">
            <button
              type="button"
              className="btn btn-secondary mr-2"
              onClick={onCancelEdit}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSetting;
