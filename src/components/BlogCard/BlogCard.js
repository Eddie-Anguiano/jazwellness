import React from "react";
import { Link } from "react-router-dom";
import { FiCornerDownRight } from "react-icons/fi";

export default function BlogCard(props) {
  return (
    <Link
      to={`/blog/${props.blog.id}`}
      className="BlogCard"
      style={{ textDecoration: "none", color: "rgb(44, 44, 44)" }}>
      <div className="BlogCard-imgContainer">
        <img src={props.blog.img} alt="blog" className="BlogCard-img" />
      </div>

      <article className="BlogCard-text">
        <h3 className="BlogCard-header">{props.blog.title}</h3>
        <p className="BlogCard-date">{props.blog.date}</p>
        <p className="BlogCard-content">{props.blog.reducedString}</p>
        <div className="BlogCard-bottom">
          <div className="BlogCard-readMore">
            <FiCornerDownRight />
            <span className="BlogCard-cta">Read more</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
