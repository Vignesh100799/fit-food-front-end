import React from "react";
import Side from "./Side";
import WeightChart from "./assests/Chart";
import BmiChart from "./BmiChart";
import DayFood from "../Food/DayFood";


const Dashboard = () => {
  return (
    <Side>
      <div className="container">
        <div className="row">
            <div className="col-xl-6 col-sm-12">
               <WeightChart/>
            </div>
            <div className="col-xl-6 col-sm-12">
               <BmiChart/>
            </div>
            <DayFood/>
        </div>
      </div>
    </Side>
  );
};

export default Dashboard;
