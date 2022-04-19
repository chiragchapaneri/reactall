import logo from "./logo.svg";
import React, { useState } from "react";
// import "./App.css";
import rulebook from "./components/ruleshooks";
import Rulebook from "./components/ruleshooks";
import UsestateArray from "./components/usestatearray";
import UpdateState from "./components/updateusestate";
import { Basicform } from "./components/basicform";
import { Todo } from "./components/todo";
import { Example } from "./components/useeffect";
import { UseEffect1 } from "./components/useeffect(1)";
import { UseEffect2 } from "./components/useeffect(2)";
import { UseEffectapi } from "./components/useeffectapi";
import "./App.css";

export function App() {
  // // var myname = "chrag";
  // //use state hooks

  // const [myname, setmyname] = useState("chapaneri chirag");
  // const changename = () => {
  //   let val = myname;
  //   if (val === "chapaneri chirag") {
  //     setmyname("done");
  //   } else {
  //     setmyname("chapaneri chirag");
  //   }
  // };

  // console.log(myname);
  return (
    <>
      {/* <h1>{myname}</h1>
      <button onClick={changename}>click me please</button> */}
      {/* <Rulebook /> */}
      {/* <UsestateArray /> */}
      {/* <UpdateState /> */}
      {/* <Basicform /> */}
      {/* <Todo /> */}
      {/* <Example /> */}
      {/* <UseEffect1 /> */}
      {/* <UseEffect2 /> */}
      <UseEffectapi />
    </>
  );
}

export default App;
