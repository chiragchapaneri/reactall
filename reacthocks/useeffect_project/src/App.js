// import logo from './logo.svg';
import Expenseform from "./components/expenseform";
import Expenseitem from "./components/expenseitem";
import Expenselist from "./components/expenselist";
import Alert from "./components/alert";
import "./App.css";
import { useState } from "react";
// import uuid from "uuid";
// console.log(uuid);
const initalexpense = [
  { id: 1, charge: "rent", amount: 1500 },
  { id: 2, charge: "car payment", amount: 100 },
  { id: 3, charge: "credit card bill", amount: 1200 },
];
console.log(initalexpense);
function App() {
  const [expenses, setexpense] = useState(initalexpense);
  // const [amount, setAmount] = useState("");
  const [charge, setCharge] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [amount, setAmount] = useState("");

  const handleCharge = (e) => {
    console.log(e.target.value);
    setCharge(e.target.value);
    // setAmount(e.target.value);
  };
  //ascascasc
  const handleAmount = (e) => {
    console.log(e.target.value);

    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: initalexpense.length + 1, charge, amount };
      setexpense([...expenses, singleExpense]);
      setCharge("");
      console.log(amount);
      // setAmount("");
      setAmount("");

      console.log(setAmount(""));

      handleAlert({ type: "success", text: "iteam added" });

      console.log(singleExpense);
      console.log(expenses); //  console.log(singleExpense);
    } else {
      handleAlert({ type: "dager", text: "charge cant be empty" });
      setCharge("");

      // setAmount("");
      setAmount("");
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 6000);
  };

  //clear all
  const cleariteams = () => {
    console.log("clear all");
  };
  const hanleDelete = (id) => {
    console.log("delete id");
  };
  const hanleEdit = (id) => {
    console.log("delete id");
  };

  // console.log(expense);
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>budget calculater </h1>
      <main>
        <Expenseform
          charge={charge}
          amounut={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        {/* <Expenseitem /> */}
        <Expenselist
          expenses={expenses}
          hanleDelete={hanleDelete}
          hanleEdit={hanleEdit}
          cleariteams={cleariteams}
        />
      </main>

      <h1>
        total spanding:
        <span className="total">
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
