import React  from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
     

    </Card>
  );
}

export default ExpenseItem;
