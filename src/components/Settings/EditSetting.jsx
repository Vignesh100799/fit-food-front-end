import { useFormik } from "formik";
import React, { useState } from "react";
import { settingsIntialvalues, settingsValidation } from "../Formik/formik";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../reducers/state";
import axios from "axios";
import { updateSuccess } from "../reducers/Slice/userSlice";

const EditSetting = ({ onCancelEdit, setEditing }) => {
  const { currentUser } = useSelector(selectUser);
  const dispatch = useDispatch();
  const user = currentUser;

  const formik = useFormik({
    initialValues: {
      username: user.username || "",
      goals: user.goals || "",
      food: user.food || "",
      gender: user.gender || "",
      age: user.age || "",
      activationLevel: user.activationLevel || "",
      weight: {
        value: user.weight[0].value || "",
        unit: "kg",
      },

      height: {
        value: user.height[0].value || "",
        unit: "cm",
      },
      healthConditionCategory: user.healthConditionCategory || "",
      healthCondition: user.healthCondition || "",
    },
    validationSchema: settingsValidation,
    onSubmit: async (values) => {
      try {
        console.log(values);
        const response = await axios.patch(
          `/api/updateSetting/${user._id}`,
          values
        );
        console.log(response);
        dispatch(updateSuccess(response.data));
        setEditing(false);
        onCancelEdit();
      } catch (error) {
        console.log(error);
      }
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
    None : ["None"]
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
                <td>Food Type</td>
                <td>
                  <select
                    id="food"
                    name="food"
                    className={`form-select ${
                      formik.touched.food && formik.errors.food
                        ? "is-invalid"
                        : ""
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
                  <span className="input-group-text">kg</span>
                  {formik.touched.weight?.value &&
                    formik.errors.weight?.value && (
                      <div className="invalid-feedback">
                        {formik.errors.weight.value}
                      </div>
                    )}
                </td>
              </tr>
              <tr>
                <td>Height</td>
                <td>
                  <input
                    type="number"
                    id="height.value"
                    name="height.value"
                    className={`form-control ${
                      formik.touched.height?.value &&
                      formik.errors.height?.value
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.height.value}
                  />
                  <span className="input-group-text">cm</span>
                  {formik.touched.height?.value &&
                    formik.errors.height?.value && (
                      <div className="invalid-feedback">
                        <span className="d-inline-block">
                          {formik.errors.height.value}
                        </span>
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
