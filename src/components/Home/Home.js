import React, { Component } from "react";
import BlogCardContainer from "../BlogCardContainer/BlogCardContainer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import Client from "../../contentful";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
  }

  formatData = (data) => {
    // return array of blog objects
    return data.items.map((blog) => {
      const id = blog.sys.id;
      const title = blog.fields.title;
      const date = blog.fields.date;
      const img = blog.fields.mainPicture.fields.file.url;
      // Build richtext string and trim to 190 charecter
      const textObj = blog.fields.bodyText.content.find(
        (item) => item.nodeType === "paragraph"
      );
      const buildText = textObj.content.reduce((accu, item) => {
        if (item.nodeType === "text") {
          return (accu += item.value);
        } else if (item.nodeType !== "text") {
          return (accu += item.content[0].value);
        }
        return "";
      }, "");
      const reducedString = buildText.substring(0, 190) + "...";

      return {
        id,
        title,
        date,
        img,
        reducedString,
      };
    });
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "blog",
      });
      const blogs = this.formatData(response);

      this.setState({ blogs: blogs });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <Hero />
        <BlogCardContainer blogs={this.state.blogs} />
        <Contact />
      </div>
    );
  }
}
