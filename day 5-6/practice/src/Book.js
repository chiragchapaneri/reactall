import React, { Component } from "react";
// import Book from "./Book";
export class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, name: "chirag" };

    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   console.log("you click me");
  // }

  // handleClick = () => {
  //   console.log("you click me");
  // };

  addcount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  lowercount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  resetcount = () => {
    this.setState({ count: 0 });
  };

  render() {
    // console.log(this.props);
    const { id, img, title, author } = this.props.book;
    const { handleDelete } = this.props;
    console.log(id);
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h3> title :{title}</h3>
          <h5>author:{author}</h5>
          <h3>count:{this.state.count}</h3>
          <h3>count:{this.state.name}</h3>

          {/* <button type="button" onClick={this.handleClick}>
            add count
          </button> */}
          <button type="button" onClick={this.addcount}>
            add count
          </button>
          <button type="button" onClick={this.lowercount}>
            lower count
          </button>
          <button type="button" onClick={this.resetcount}>
            reset count
          </button>
          <button type="delete" onClick={() => handleDelete(id)}>
            delete me
          </button>
          {this.state.count}
          {this.state.main}
        </div>
      </article>
    );
  }
}

//ascascasc
// export default function Book(props) {
//   return (
//     <article>
//       <h3> boook :</h3>
//       <h5>author:</h5>
//     </article>
//   );
// }

// acascascascascascascascascascascascascascascscascascasasa  as as as a as assaaascascascascascascascascascascascascacascascasc?ascascascascsacascascascascascascasascascascascascascascascascasascascascascascscascascascascascascascascascascascsasascascascascascascascascascascascacsascascaascascascascascascascascascascascascascascascascascacascascascascascascascascascascascascascxascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascasascascascascascascascascascascascascascascascascascascascascascascascsacascascascascascascascascascas as as a acsaascascascascascasccsascascascascascascascascassacascascascascascasascascascascascascasasxascascacscascascacascsacascascascascascascascascascascascascacascascascasc ascasascasc ascascascascascacascascascascascascascascascascascasascasascascascascascascascascascascaascascascascasc ascascascascascascascascascascascascascascascascascascascascascascascascaascascascascascascasc ascasc ascascascascascascascascascascascascascascascascascascasascasascascascascascascascasascascascascascascascascacascascascascascascascascascasascascascascascascascascascascascascascascascascascascascascascssdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdsdvwefwefwefwefascascascsdvsdvsdvsdvsdvsdvsdvsdvascascascascascascascasvasvasascascasaascascascascascasasascascascascascascascaascascascascascascasasxascascascascascascascascascascascascascasascascascasascascascascascascascascascascascascascascascascasascascascascascascascascascascascasascascascascasxasascasascascascascascascascascascascascascascascascascasascascascascaascascascascascascascascascascascascascascascascascascascascascasasAXaxAXaAXASCASCASCASCASCASCASCaxAaxascascascascascascascascascascascascasccsasdvsdvsdvsdsdvsdsdvsdvsdvsdvsdvsdaascascascascascascascascascascascascascascascascascascsdvsdvsdvsdvsdvsdvaascascasascascascsdvsdvascascascascascascasascascascascascascascsdvsdvsdvsdvascasascascascasascascacasascasasascasascasascascassacaascascascascascascascascascascascascascascascascascascascascascascascascascascascascasascascascascascascascascascascascascascascascascascascascasascascascascascascascascacascascasascascascascaascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascascasascascascascascascascascascascascascascasc
