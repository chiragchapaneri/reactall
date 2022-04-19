import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import propTypes from "prop-types";
//person: { img, name, age, info } destrcturing
const Person = ({ person: { img, name, age, info } }) => {
  return (
    <article>
      <img src={img} alt="person" height="150px" />
      <h4>name:{name}</h4>
      <h4>age:{age}</h4>
      <h4>info:{info || "default info about person"}</h4>
    </article>
  );
};
//isRequired
Person.propTypes = {
  person: propTypes.shape({
    img: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
  }),
  // img: propTypes.string.isRequired,
  // name: propTypes.string.isRequired,
  // age: propTypes.number.isRequired,
};
//default props
Person.defaultProps = {
  person: {
    info: "good",
  },
  // img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
  // name: "trupesh",
  // age: 24,
  // info: "default info",
};
class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        name: "chirag",
        age: 23,
      },
      {
        id: 2,
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        name: "jay",
        age: 23,
      },
      {
        id: 4,
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        name: "trupesh",
        age: 24,
        info: "good",
      },
    ],
  };
  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person
            key={person.id}
            person={person}
            // img={person.img}
            // name={person.name}
            // age={person.age}
            // info={person.info}
          />
        ))}
      </section>
    );
  }
}
class App extends Component {
  render() {
    return <PersonList />;
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
