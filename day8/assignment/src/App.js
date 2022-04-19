// 1. Create Student Form With ID,FirstName, LastName,image, CollegeName and College Logo.

// Submit this value to the list. And display this list.

import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import React from "react";
class Forms extends Component {
  state = {
    firstname: "",
    lastname: "",
    collegename: "",
    id: "",ascascascasc
    studentlist: [],
  };
  
  hanleChange = (event) => {
    console.log(event);
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const collegename = this.state.collegename;
    const id = this.state.id;
    if (
      firstname.length > 0 &&
      lastname.length > 0 &&
      collegename.length > 0 &&
      id.length > 0
    ) {
      const studentlist = `${firstname} ${lastname} ${collegename} ${id}`;
      this.setState({
        studentlist: [...this.state.studentlist, studentlist],
        firstname: "",
        lastname: "",
        collegename: "",
        id: "",
      });
    }
  };

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            ID:{" "}
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.hanleChange}
            />
            <br />
            firstname:{" "}
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.hanleChange}
            />
            <br />
            lastname:{" "}
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.hanleChange}
            />
            <br />
            CollegeName{" "}
            <input
              type="text"
              name="collegename"
              value={this.state.collegename}
              onChange={this.hanleChange}
            />
            <br />
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <h1>studentlist</h1>
          <div>{this.state.studentlist}</div>
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
