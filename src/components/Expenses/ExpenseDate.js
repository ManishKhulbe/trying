import React from 'react';
import './ExpenseDate.css'

function ExpenseDate(props) {
  return (
    <div className='expense-date' >
      <div className='expense-date__month' >{props.expenseDate?.toLocaleString("en-Us", { month: "long" })}</div>
      <div className='expense-date__day'>{props.expenseDate?.getDate()}</div>
      <div className='expense-date__year'>{props.expenseDate?.getFullYear()}</div>
    </div>
  );
}

export default ExpenseDate;
