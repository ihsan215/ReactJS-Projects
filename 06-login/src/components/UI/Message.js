import React from "react";

import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={classes["msg-area"]}>
      <p className={classes["msg-content"]}>{props.msg}</p>
      {props.isSpinnerShow && <div className={classes["loading"]}></div>}
    </div>
  );
};

export default Message;
