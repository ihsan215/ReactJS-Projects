import React, { useState } from "react";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";
import classes from "./AddUser.module.css";

const AddUSer = (probs) => {
  const [enteredUserName, setenteredUserName] = useState("");

  const [enteredage, setEnteredage] = useState("");

  const [error, serError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredage.trim().length === 0) {
      serError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredage < 1) {
      serError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    probs.onAddUser(enteredUserName, enteredage);
    setEnteredage("");
    setenteredUserName("");
  };

  const userNameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredage(event.target.value);
  };

  const errorHandler = () => {
    serError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          ></input>
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="text"
            onChange={ageChangeHandler}
            value={enteredage}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUSer;
