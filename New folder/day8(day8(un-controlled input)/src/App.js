import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.refs.myname;
    const namevalue = name.value;
    const email = this.email.value;
    console.log(email);
    const text = this.refs.mytext;
    const textvalue = text.textContent;
    text.style.color = "red";
    console.log(namevalue, email, textvalue);
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myname" />
          <input type="email" ref={(orange) => (this.email = orange)} />
          <button type="submit">submit</button>
        </form>
        <p ref="mytext">hello world</p>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return <Form />;
  }
}

export default App;
