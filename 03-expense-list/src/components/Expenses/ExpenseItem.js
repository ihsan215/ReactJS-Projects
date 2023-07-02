import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";

const ExpenseItem = (probs) => {
  // const [title, setTitle] = useState(probs.title);

  const clickHandler = () => {
    // setTitle("Updated");
    console.log("click");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={probs.date} />
        <div className="expense-item__description">
          <h2>{probs.title}</h2>
          <div className="expense-item__price">${probs.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
