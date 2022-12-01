import React ,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {


  const [IsEditing , setIsEditing] = useState(false)

  const saveExpenseDataHandler = (expenseData) => {
    !expenseData&& setIsEditing(false)
    const expenseDataObj = {
      ...expenseData,
      id: Math.floor(Math.random()*100).toString(),
      
    };
    expenseData && props.onAddExpense(expenseDataObj)

  };

  const startEditingHandler =()=>{
    setIsEditing(true)
  }
  return (
    <div className="new-expense">
      {!IsEditing && <button onClick={startEditingHandler}>Add New Expense</button> } 
      {IsEditing && <ExpenseForm onsaveExpenseData={saveExpenseDataHandler} /> }
    </div>
  );
};

export default NewExpense;
