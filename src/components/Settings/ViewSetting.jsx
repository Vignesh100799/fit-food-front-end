import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../reducers/state";

const ViewSetting = ({ onEditClick }) => {
  const { currentUser } = useSelector(selectUser);
  const user = currentUser;
  // console.log(user)
  return (
    <div className="container mt-4">
      <h2>View Details</h2>
      <div className="row">
        {user ? (
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>User Name</td>
                <td>{user.username}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td>Activity Level</td>
                <td>{user.activationLevel}</td>
              </tr>
              <tr>
                <td>Goals</td>
                <td>{user.goals}</td>
              </tr>
              <tr>
                <td>Food Type</td>
                <td>{user.food}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>
                  {user.weight[0].value} {user.weight[0].unit}
                </td>
              </tr>
              <tr>
                <td>Height</td>
                <td>
                  {user.height[0].value} {user.height[0].unit}
                </td>
              </tr>
              <tr>
                <td>Health Condition Category</td>
                <td>{user.healthConditionCategory}</td>
              </tr>
              <tr>
                <td>Health Condition</td>
                <td>{user.healthCondition}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading....</p>
        )}
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={onEditClick}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ViewSetting;
