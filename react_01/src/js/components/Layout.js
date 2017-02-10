import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
      super();
      this.title = "Mr.";
      this.state = {"name":"muhil"}
    }
    getLastName() {
      return "varnan";
    }
    render() {
      setTimeout(() => {
        this.setState({name:"ganesh"})
      }, 1000);
      const name = "Muhil";
      return (
        <div>
        <Header />
        <h1>Hello React.. It workeds {this.title} {this.state.name} {this.getLastName()}</h1>
        <Footer />
        </div>
      );
  }
}