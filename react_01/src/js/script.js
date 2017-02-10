import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    constructor() {
      super()
      this.title = "Mr."
    }
    getLastName() {
      return "varnan"
    }
    render() {
      const name = "Muhil"
      return (
        <h1>Hello React.. It workeds {this.title} {name} {this.getLastName()}</h1>
      );
  }
}

const app = document.getElementById("app")
ReactDOM.render(<Layout/>, app);
