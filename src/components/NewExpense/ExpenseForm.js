import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleEnteredTitle = (event) => {
    setEnteredTitle(event.target.value);
  };
  const handleEnteredAmount = (event) => {
    setEnteredAmount(event.target.value);
  };
  const handleEnteredDate = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      expenseTitle: enteredTitle,
      expenseAmount: +enteredAmount,
      expenseDate: new Date(enteredDate),
    };

    props.onsaveExpenseData(expenseData);
    handleEnteredTitle(" ");
    handleEnteredAmount(" ");
    handleEnteredDate(" ");
  };

  const cancelButtonHandler = () => {
    props.onsaveExpenseData(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleEnteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={handleEnteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022=12-31"
            onChange={handleEnteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={cancelButtonHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
