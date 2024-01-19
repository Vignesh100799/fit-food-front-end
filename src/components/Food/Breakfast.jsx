import React from 'react'

const Breakfast = ({gainWeightTips,selectedDay}) => {
  return (
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
  )
}

export default Breakfast