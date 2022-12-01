import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpenseList";
import ExpenseChart from './ExpenseChart'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangehandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenseData.filter((expense) => {
    return expense.expenseDate.getFullYear() === parseInt(filteredYear);
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangehandler}
        />
        <ExpenseChart  filteredExpenses={filteredExpenses}/>
     <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
