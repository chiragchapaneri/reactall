import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import React from "react";
class Forms extends Component {
  state = {
    firstname: "",
    lastname: "",
    people: [],
  };

  hanleChange = (event) => {
    console.log(event);
    // // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);
    // this.setState({ [event.target.name]: event.target.value });
    const value = event.target.value.toUpperCase();
    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    if (firstname.length > 0 && lastname.length > 0) {
      const person = `${firstname} ${lastname} `;
      this.setState({
        people: [...this.state.people, person],
        firstname: "",
        lastname: "",
      });
    }
    // console.log(lastname, firstname);
  };
  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.hanleChange}
            />
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.hanleChange}
            />
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <h1>people</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}
class App extends Component {
  render() {
    return <Forms />;
  }
}

export default App;
