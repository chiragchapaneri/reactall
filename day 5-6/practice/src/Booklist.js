import React, { Component } from "react";
import { Book } from "./Book";
import bookdata from "./bookdata";
export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = { books: bookdata };
  }
  //   state = {
  //     books: bookdata,
  //   };
  handleDelete = (id) => {
    const sorteddata = this.state.books.filter((data) => data.id != id);
    this.setState({
      books: sorteddata,
    });
  };

  render() {
    // const books = this.state.books.map((data) => console.log(data));
    // console.log(books);

    return (
      <div>
        <h3>this is our Booklist</h3>
        {/* <Book book={this.state} /> */}
        {this.state.books.map((data, index) => (
          <Book key={index} book={data} handleDelete={this.handleDelete} />
        ))}
        {/* <Book book={this.books} /> */}
        {/* <Book jay={this.books[0]} /> */}
      </div>
    );
  }
}
