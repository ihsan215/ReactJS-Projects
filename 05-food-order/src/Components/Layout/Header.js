import React from "react";

import HeaderCartButton from "./HeaderCartButton.js";

import classes from "./Header.module.css";
import mealImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes["header"]}>
        <h1>React Food Order Apps</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Meal img" />
      </div>
    </React.Fragment>
  );
};

export default Header;
