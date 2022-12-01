//class component =========>
// import './App.css';

// import React, {
//   Component
// } from 'react'

// export class App extends Component {

//   render() {
//     return (
//       <div> App </div>
//     )
//   }
// }
//class component =========>
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expensesData, setExpenseData] = useState([]);

  const addExpenseHandler = (expenseData) => {

     setExpenseData((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  console.log(expensesData);
  return (
    <div>
      <h1> Expense Tracker </h1>
      
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseData={expensesData} />
    </div>
  );
}

export default App;
