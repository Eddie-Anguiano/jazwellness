import React, { Component } from "react";
import Header from "../Header/Header";
import Client from "../../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {},
    };
  }

  formatData = (response) => {
    const title = response.fields.title;
    const photo = response.fields.mainPicture.fields.file.url;
    const date = response.fields.date;
    const richText = response.fields.bodyText;
    const jsx = documentToReactComponents(richText);
    return {
      title,
      photo,
      date,
      jsx,
    };
  };

  getData = async () => {
    try {
      const response = await Client.getEntry(this.props.match.params.id);
      const formatedBlog = this.formatData(response);
      this.setState({ blog: formatedBlog });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.state.blog.jsx);
    return (
      <>
        <Header />
        <div className="Blog wrapper">
          <section className="Blog-post">
            <h1 className="Blog-title">{this.state.blog.title}</h1>
            <div className="Blog-author">by Jasmin Chavez</div>
            <div className="Blog-date">{this.state.blog.date}</div>
            <img src={this.state.blog.photo} alt="" className="Blog-img" />
            <div className="Blog-richText">{this.state.blog.jsx}</div>
          </section>
        </div>
        <footer className="Blog-footer">jazwellness.com&#174;</footer>
      </>
    );
  }
}
