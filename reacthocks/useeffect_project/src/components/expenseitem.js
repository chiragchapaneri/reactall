import React from "react";

export default function Expenseitem({ expense }) {
  //   console.log(`item ${expense.charge}`);
  const { charge, amount, id } = expense;

  return (
    <li>
      <div>
        <span>{charge}</span>
        <span>{amount}</span>
      </div>
      <div>
        <button> </button>
      </div>
    </li>
  );
}
