import React from "react";
import Expenseitem from "./expenseitem";
export default function Expenselist({ expenses }) {
  return (
    <>
      <ul>
        {expenses.map((expense) => {
          return <Expenseitem key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && <button className="btn">clear</button>}
    </>
  );
}
