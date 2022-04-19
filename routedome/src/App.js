import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Shop
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />

            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
const Home = () => {
  return (
    <div>
      <h1>home page</h1>
    </div>
  );
};

export default App;
