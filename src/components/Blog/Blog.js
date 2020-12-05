import React, { Component } from "react";
import Header from "../Header/Header";
import Load from "../Load/Load";
import Client from "../../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {},
      load: false,
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
      this.setState({ load: true });
      const response = await Client.getEntry(this.props.match.params.id);
      const formatedBlog = this.formatData(response);
      this.setState({ blog: formatedBlog });
      this.setState({ load: false });
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
        {this.state.load && <Load />}

        <Header />
        <div className="Blog wrapper">
          <section className="Blog-post">
            <div className="Blog-date">{this.state.blog.date}</div>
            <h1 className="Blog-title">{this.state.blog.title}</h1>
            <div className="Blog-author">by Jasmin Chavez</div>

            <img src={this.state.blog.photo} alt="" className="Blog-img" />
            <div className="Blog-richText">{this.state.blog.jsx}</div>
          </section>
        </div>
        <footer className="Blog-footer">jazwellness.com&#174;</footer>
      </>
    );
  }
}
