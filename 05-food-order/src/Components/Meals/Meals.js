import React from "react";
import AvailableMeals from "./AvailableMeals.js";
import MealsSummary from "./MealsSummary.js";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
