import { useFormik } from "formik";
import React from "react";
import { initialValues, validationSchema } from "../Formik/formik";

const EditSetting = ({ onCancelEdit }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });
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
                    name="username"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>
                  <select
                    name="gender"
                    className="form-select"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.gender}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.age}
                  />
                </td>
              </tr>
              {/* Add more rows for additional fields */}
            </tbody>
          </table>

          <div className="d-flex justify-content-end mt-3">
            <button type="button" className="btn btn-secondary mr-2" onClick={onCancelEdit}>
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
