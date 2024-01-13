import React from "react";

const ViewSetting = ({ onEditClick }) => {
  return (
    <div className="container mt-4">
      <h2>View Details</h2>
      <div className="row">
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>User Name</td>
              <td>JohnDoe</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Activation Level</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Goals</td>
              <td>Gain Weight</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>15kg</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>165cm</td>
            </tr>
            <tr>
              <td>Health Condition Category</td>
              <td>Certain Cancers</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>165cm</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end mt-3">
            <button type="button" className="btn btn-secondary mr-2" onClick={onEditClick}>
              Edit
            </button>
          
          </div>
    </div>
  );
};

export default ViewSetting;
