import React from "react";

export default function Expenseform({
  charge,
  amount,
  handleChange,
  handleCharge,
  handleAmount,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="charge">charge</label>
      <input
        type="text"
        id="charge"
        name="charge"
        value={charge}
        onChange={handleCharge}
      ></input>
      <br></br>
      <label htmlFor="charge">amount</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={amount}
        onChange={handleAmount}
      ></input>
      <br></br>
      <button type="submit">submit</button>
    </form>
  );
}
