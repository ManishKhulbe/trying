import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpensesList = (props) => {
  let expenseContent = (
    <h2 className="expenses-list__fallback">No Item Found </h2>
  );
  if (props.filteredExpenses.length > 0) {
    expenseContent = props.filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        expenseDate={expense.expenseDate}
        expenseTitle={expense.expenseTitle}
        expenseAmount={expense.expenseAmount}
      />
    ));
  }
  return <li className="expenses-list">{expenseContent}</li>;
};

export default ExpensesList;
