import React from "react";

const Snack = ({gainWeightTips,selectedDay}) => {
  return (
    <div className="col-md-6">
      <h4 className="mt-3">Snack</h4>
      <ul className="list-group">
        {gainWeightTips[selectedDay]["snack"].map((food, index) => (
          <li key={index} className="list-group-item">
            {food}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Snack;
