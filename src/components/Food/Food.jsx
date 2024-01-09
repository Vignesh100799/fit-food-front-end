import React, { useState } from "react";
import Side from "../Dashboard/Side";
import { tips } from "./fooditem";
const Food = () => {
  const gainWeightTips = tips.gainWeight;
  const [selectedDay, setSelectedDay] = useState(
    Object.keys(gainWeightTips)[0]
  );

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };
  return (
    <Side>
      <div className="container">
        <div className="row">
          <h2 className="mt-4 mb-3">Gain Weight Tips</h2>
          <div className="form-group col-md-4">
            <label htmlFor="daySelect">Select Day:</label>
            <select
              id="daySelect"
              className="form-control"
              value={selectedDay}
              onChange={handleDayChange}
            >
              {Object.keys(gainWeightTips).map((day) => (
                <option key={day} value={day}>
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <h3 className="mt-4 col-md-12">
            {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}
          </h3>
          <div className="col-md-6">
            <h4 className="mt-3">Breakfast</h4>
            <ul className="list-group">
              {gainWeightTips[selectedDay]["breakfast"].map((food, index) => (
                <li key={index} className="list-group-item">
                  {food}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="mt-3">Lunch</h4>
            <ul className="list-group">
              {gainWeightTips[selectedDay]["lunch"].map((food, index) => (
                <li key={index} className="list-group-item">
                  {food}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="mt-3">Snack</h4>
            <ul className="list-group">
              {gainWeightTips[selectedDay]["snack"].map((food, index) => (
                <li key={index} className="list-group-item">
                  {food}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="mt-3">Dinner</h4>
            <ul className="list-group">
              {gainWeightTips[selectedDay]["dinner"].map((food, index) => (
                <li key={index} className="list-group-item">
                  {food}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Side>
  );
};

export default Food;
