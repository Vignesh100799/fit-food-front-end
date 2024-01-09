import React, { useState, useEffect } from "react";
import Side from "../Dashboard/Side";
import { tips } from "./fooditem";

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
  const systemDayIndex = new Date().getDay(); // 0 for Sunday, 1 for Monday, and so on

  useEffect(() => {
    onSelect(daysOfWeek[systemDayIndex]);
  }, [onSelect, systemDayIndex, daysOfWeek]);

  return null; // You can customize this component based on your needs
};

const DayFood = () => {
  const gainWeightTips = tips.gainWeight;
  const [selectedDay, setSelectedDay] = useState(
    Object.keys(gainWeightTips)[0]
  );

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleAutoSelect = (day) => {
    setSelectedDay(day);
  };

  return (
   
      <div className="container">
        <div className="row">
        
          
        </div>
        <div className="row">
          <AutoSelectDay onSelect={handleAutoSelect} />
          <h3 className="mt-4 col-md-12">
          Here Your Diet Food For the Day...!
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
   
  );
};

export default DayFood;
