import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
// console.log("react-router-dom");
// import Switch from "react-router-dom";
import { App2 } from "./Component/app2";
import { App1 } from "./Component/app1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/a" element={<App2 />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
      {/* <Switch>
        <App1 />
      </Switch> */}
    </>
  );
}

export default App;
