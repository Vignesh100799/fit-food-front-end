import React from "react";

const Dinner = ({gainWeightTips,selectedDay}) => {
  return (
    <div className="col-md-6">
      <h4 className="mt-3">Dinner</h4>
      <ul className="list-group">
        {gainWeightTips[selectedDay]["dinner"].map((food, index) => (
          <li key={index} className="list-group-item">
            {food}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dinner;
