import React, { Component } from "react";
// import { name, age, person } from "./data";
// import Booklist, { BooklistFun } from "./Booklist";
// import Banner from "./component/header/Banner";
// import Booklist from "./component/Booklist";
import Booklist from "./Booklist";
import "./App.css";
const App = () => (
  <section>
    <h1> this is our application</h1>
    <Booklist />
  </section>
);
// export default App;
{
  /* <BooklistFun /> */
}
//import all the data from data file
// import React from "react";
// import * as data from "./data";//* from all
// const App = () => (
//   <section>
//     <p>this is my content</p>
//     <p>{data.name}</p>
//     <p>{data.age}</p>
//     <p>{data.person.name}</p>
//     <p>{data.secretvalue}</p>
//   </section>
// );

// //class based components
// class App1 extends Component {
//   render() {
//     return (
//       <section>
//         <Banner />
//         <p>this is my content</p>
//         <p>{name}</p>
//         <p>{age}</p>
//         <p>{person.name}</p>
//         {/* <p>{secretvalue}</p> */}
//       </section>
//     );
//   }
// }
export default App;
