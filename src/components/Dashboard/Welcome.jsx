import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCoffee, faMoon } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return { greeting: "Good Morning", icon: faSun };
    } else if (currentHour >= 12 && currentHour < 18) {
      return { greeting: "Good Afternoon", icon: faCoffee };
    } else {
      return { greeting: "Good Evening", icon: faMoon };
    }
  };

  const { greeting, icon } = getGreeting();

  return (
    <div>
      <div>
        <FontAwesomeIcon icon={icon} /> {greeting}...!
      </div>
    </div>
  );
};

export default Welcome;
