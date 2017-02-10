import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
      super();
      this.title = "Mr.";
      this.state = {"name":"muhil", title:"always welcome"}

    }
    getLastName() {
      return "varnan";
    }
    render() {
      setTimeout(() => {
        this.setState({name:"ganesh", title:"always not welcome"})
      }, 2000);
      const name = "Muhil";
      return (
        <div>
        <Header title={this.state.title} />
        <h1>Hello React.. It workeds {this.title} {this.state.name} {this.getLastName()}</h1>
        <Footer />
        </div>
      );
  }
}