import React, { useState } from "react";
import getTime from "./GetTime.js";

import "./Clock.css";

const Clock = () => {
  let now = getTime();

  const [time, setTime] = useState(now);

  setInterval(() => {
    let now = getTime();
    setTime(now);
  }, 1000);
  return (
    <div className="time-area">
      <h1 className="app-title">
        {" "}
        <img
          className="app-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
        ></img>
        Digital Clock ⏱️⏱️
      </h1>
      <h2 className="time-clock">{time}</h2>
    </div>
  );
};

export default Clock;
