import React from "react";

const Lunch = ({gainWeightTips,selectedDay}) => {
  return (
    <div className="col-md-6">
      <h4 className="mt-3">Lunch</h4>
      <ul className="list-group">
        {gainWeightTips[selectedDay]["lunch"].map((food, index) => (
          <li key={index} className="list-group-item">
            {food}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lunch;
