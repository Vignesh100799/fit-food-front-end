import React, { useState } from "react";
import Side from "../Dashboard/Side";
import { nonVegTips, vegTips } from "./fooditem";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Snack from "./Snack";
import Dinner from "./Dinner";
import { useSelector } from "react-redux";
import { selectUser } from "../reducers/state";
const Food = () => {
  const { currentUser } = useSelector(selectUser);
  const nonVeg = nonVegTips;
  const veg = vegTips;
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

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
    console.log(currentUser);
  };
  return (
    <Side>
      <div className="container">
        <div className="row">
          <h2 className="mt-4 mb-3">{goals} Tips</h2>
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
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <h3 className="mt-4 col-md-12">
            {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}
          </h3>
          <Breakfast
            gainWeightTips={gainWeightTips}
            selectedDay={selectedDay}
          />
          <Lunch gainWeightTips={gainWeightTips} selectedDay={selectedDay} />
          <Snack gainWeightTips={gainWeightTips} selectedDay={selectedDay} />
          <Dinner gainWeightTips={gainWeightTips} selectedDay={selectedDay} />
        </div>
      </div>
    </Side>
  );
};

export default Food;
