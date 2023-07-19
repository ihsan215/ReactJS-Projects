import React from "react";
import Button from "../UI/Button";
import classes from "./UserInputForms.module.css";

const UserInputForm = React.forwardRef((props, ref) => {
  return (
    <form ref={ref} className={classes["form-area"]} onSubmit={props.onSubmit}>
      <input
        className={classes["form-input"]}
        type="text"
        name="name"
        placeholder="mail-address"
      />
      <input
        className={classes["form-input"]}
        type="password"
        name="password"
        placeholder="password"
      />
      {props.value === "SIGN IN" && (
        <input
          className={classes["form-input"]}
          type="password"
          name="check password"
          placeholder="check password"
        />
      )}
      <Button type="submit">{props.value}</Button>
    </form>
  );
});

export default UserInputForm;
