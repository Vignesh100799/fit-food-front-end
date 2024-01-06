import React from "react";
import "./Price.css";
import Card from "./Card";
const Pricecard = () => {
  const planDetail = [
    {
      "price": 0,
      "plan": "Free",
      "features": {
        "Personalized Meal Suggestions": true,
        "Basic Nutrition Tracking": true,
        "Limited Recipe Access": true,
        "Community Support": true,
        "Full Meal Plans": false,
        "Advanced Nutrition Tracking": false,
        "Customized Diet Plans": false,
        "24/7 Nutritionist Support": false
      }
    },
    {
      "price": 9.99,
      "plan": "Starter",
      "features": {
        "Personalized Meal Suggestions": true,
        "Basic Nutrition Tracking": true,
        "Limited Recipe Access": true,
        "Community Support": true,
        "Recipe Database Access": true,
        "Priority Community Support": true,
        "Exclusive Recipes": false,
        "Detailed Nutrition Analysis": false
      }
    },
    {
      "price": 19.99,
      "plan": "Pro",
      "features": {
        "Personalized Meal Suggestions": true,
        "Basic Nutrition Tracking": true,
        "Limited Recipe Access": true,
        "Community Support": true,
        "Recipe Database Access": true,
        "24/7 Nutritionist Support": true,
        "Exclusive Recipes": true,
        "Detailed Nutrition Analysis": true
      }
    }
  ]
  
  return (
    <section className="main py-5">
      <div className="container">
        <h1 className="heading">CHOOSE YOUR PLAN TO GET STARTED</h1>
        <div className="row justify-content-center align-items-center">
          {planDetail.map((detail,index) => {
            return <Card details={detail} key={index}></Card>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricecard;
