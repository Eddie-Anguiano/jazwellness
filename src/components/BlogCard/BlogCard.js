import React from "react";
import placeholder from "../../images/placholder.jpg";
import { FiCornerDownRight } from "react-icons/fi";

export default function BlogCard() {
  return (
    <div className="BlogCard">
      <div className="BlogCard-imgContainer">
        <img src={placeholder} alt="blog" className="BlogCard-img" />
      </div>

      <article className="BlogCard-text">
        <h3 className="BlogCard-header">My tips for a healthier 2020</h3>
        <p className="BlogCard-date">10/3/2020</p>
        <p className="BlogCard-content">
          You will want to look at your image on both desktop and mobile. These
          image sizes typically look best on desktop. So, take a look at them on
          smaller screens to make sure it still looks good.
        </p>
        <div className="BlogCard-bottom">
          <div className="BlogCard-readMore">
            <FiCornerDownRight />
            <span className="BlogCard-cta">Read more</span>
          </div>
        </div>
      </article>
    </div>
  );
}
