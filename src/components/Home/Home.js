import React, { Component } from "react";
import BlogCardContainer from "../BlogCardContainer/BlogCardContainer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Hero />
        <BlogCardContainer />
      </div>
    );
  }
}
