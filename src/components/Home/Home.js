import React, { Component } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Hero />
      </div>
    );
  }
}
