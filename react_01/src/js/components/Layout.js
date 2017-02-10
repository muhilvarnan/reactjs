import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
      super();
      this.title = "Mr.";
    }
    getLastName() {
      return "varnan";
    }
    render() {
      const name = "Muhil";
      return (
        <div>
        <Header />
        <h1>Hello React.. It workeds {this.title} {name} {this.getLastName()}</h1>
        <Footer />
        </div>
      );
  }
}