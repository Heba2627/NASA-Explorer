import React from 'react';
import { useState } from 'react';
export default function ExpenseTracker()
{

  const [expense,setExpense]=useState([]);
  const [descr,setDesc]=useState("");
  const [amountt,setAmount]=useState(0);
  const [sum,setSum]=useState(0);
  function edit()
  {
    setExpense([...expense,{desc:descr,amount:amountt}]);
    setSum(sum+parseInt(amountt));
  } 
  function edit2(index,amount)
  {
    return function()
    {
      const newexpense=[...expense];
      newexpense.splice(index,1);
      setExpense(newexpense);
      setSum(sum-parseInt(amount));
    }

  }
  
    return(
    <div>
        <h1>       
        Expense Tracker
        </h1>
        <form>
          <input type="text" placeholder="Enter Expense" 
          value={descr}
          onChange={(e)=>setDesc(e.target.value)}
          />
          <input type="number" placeholder="Amount"
          value={amountt}
          onChange={(e)=>setAmount(e.target.value)}
          />
        </form>
        <button type="submit" onClick={edit}>Add Expense</button>
        <ul>
          {expense.map((item,index)=>(
            <li key={index}>
              <span>{item.desc}</span>
              <span>{item.amount}</span>
              <button onClick={edit2(index,item.amount)}>Delete</button>
            </li>
          ))}
        </ul>
        <h3>Total Expense: {sum}</h3>
          </div>
    );

}

