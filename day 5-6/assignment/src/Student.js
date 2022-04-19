import React from "react";
import { Component } from "react/cjs/react.production.min";

export class StudentIDCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, name, college } = this.props.students;
    const { deleteStudent } = this.props;

    console.log(this.props.students);
    return (
      <article className="student">
        <div>
          <h3>id:{id}</h3>
          <h3>name:{name}</h3>
          <h3>college:{college}</h3>
          <button type="delete" onClick={() => deleteStudent(id)}>
            delete me
          </button>
        </div>
      </article>
    );
  }
}
