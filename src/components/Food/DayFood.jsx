import React, { useState, useEffect } from "react";

import { nonVegTips, vegTips } from "./fooditem";
import { selectUser } from "../reducers/state";
import { useSelector } from "react-redux";

const AutoSelectDay = ({ onSelect }) => {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const systemDayIndex = new Date().getDay();

  useEffect(() => {
    onSelect(daysOfWeek[systemDayIndex]);
  }, [onSelect, systemDayIndex, daysOfWeek]);

  return null;
};

const DayFood = () => {
  const nonVeg = nonVegTips;
  const veg = vegTips;
  const { currentUser } = useSelector(selectUser);
  const goals = currentUser.goals;
  let gainWeightTips;
  if (currentUser.food === "veg") {
    gainWeightTips = veg[goals];
  } else {
    gainWeightTips = nonVeg[goals];
  }

  const [selectedDay, setSelectedDay] = useState(
    Object.keys(gainWeightTips)[0]
  );

  const handleAutoSelect = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="container">
      <div className="row">
        <AutoSelectDay onSelect={handleAutoSelect} />
        <h3 className="mt-4 col-md-12">Here Your Diet Food For the Day...!</h3>
        <div className="col-md-6">
          <h4 className="mt-3">Breakfast</h4>
          <ul className="list-group">
            {gainWeightTips[selectedDay]["breakfast"].map((food, index) => (
              <li key={index} className="list-group-item">
                {food}.
              </li>
            ))}
          </ul>
        </div>
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
      </div>
    </div>
  );
};

export default DayFood;
