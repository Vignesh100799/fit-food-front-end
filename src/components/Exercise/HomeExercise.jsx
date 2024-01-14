import React, { useState } from "react";
import Side from "../Dashboard/Side";
import { exercise } from "./exercise";
const HomeExercise = () => {
  const [selectedDay, setSelectedDay] = useState(Object.keys(exercise)[0]);
  
  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };
  return (
    <Side>
      <div className="container">
        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="daySelect">Select Day:</label>
            <select
              className="form-control"
              value={selectedDay}
              onChange={handleDayChange}
              id="daySelect"
            >
              {Object.keys(exercise).map((day) => {
                return (
                  <option key={day} value={day}>
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row">
          <h3 className="mt-4 col-md-12">{selectedDay}</h3>
          <div className="col-md-6">
            <h4 className="mt-3">Workout Type</h4>
            <p>{exercise[selectedDay]["WorkoutType"]}</p>
            {exercise[selectedDay]["Exercises"] ? (
              <>
                <h4 className="mt-3">Exercises</h4>
                <ul className="list-group">
                  {exercise[selectedDay]["Exercises"].map((exercise, index) => (
                    <li key={index} className="list-group-item">
                      {`${exercise["Exercise"]} - ${exercise["Sets"]} sets, ${
                        exercise["Reps"] || exercise["Duration"]
                      }`}
                    </li>
                  ))}
                </ul>
              </>
            ) :( <>
            <h4 className="mt-3">Notes</h4>
            <p>{exercise[selectedDay]["Notes"]}</p></>
           )}
          </div>
        </div>
      </div>
    </Side>
  );
};

export default HomeExercise;
