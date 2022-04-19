import React, { Component } from "react";
import { StudentIDCard } from "./Student";

export class Studentlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          name: "chirag",
          college: "gls ",
        },
        {
          id: 2,
          name: "jay",
          college: "gls ",
        },
        {
          id: 3,
          name: "meet",
          college: "gls ",
        },
      ],
    };
  }

  deleteStudent = (id) => {
    console.log("done");
    const sorteddata = this.state.students.filter((data) => data.id != id);
    this.setState({
      students: sorteddata,
    });
  };

  render() {
    return (
      <div>
        <h3>this is our Booklist</h3>
        {this.state.students.map((data, index) => (
          <StudentIDCard
            key={index}
            students={data}
            deleteStudent={this.deleteStudent}
          />
        ))}
      </div>
    );
  }
}
