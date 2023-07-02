import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";
import "./Expenses.css";

const Expenses = (probs) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = probs.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
