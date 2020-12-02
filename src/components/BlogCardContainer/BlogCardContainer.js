import React, { Component } from "react";
import BlogCard from "../BlogCard/BlogCard";

export default class BlogCardContainer extends Component {
  render() {
    return (
      <div className="BlogCardContainer wrapper">
        {this.props.blogs.map((blog) => {
          return <BlogCard blog={blog} key={blog.id} />;
        })}
      </div>
    );
  }
}
