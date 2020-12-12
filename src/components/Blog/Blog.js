import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Load from "../Load/Load";
import Client from "../../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { AnimatePresence } from "framer-motion";

export default function Blog(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlogs] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Client.getEntry(props.match.params.id);
        const formatedBlog = formatData(response);
        setBlogs(formatedBlog);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [props.match.params.id]);

  const formatData = (response) => {
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

  return (
    <>
      <AnimatePresence>{isLoading && <Load />}</AnimatePresence>

      <Header />
      <div className="Blog wrapper">
        <section className="Blog-post">
          <div className="Blog-date">{blog.date}</div>
          <h1 className="Blog-title">{blog.title}</h1>
          <div className="Blog-author">by Jasmin Chavez</div>

          <img src={blog.photo} alt="" className="Blog-img" />
          <div className="Blog-richText">{blog.jsx}</div>
        </section>
      </div>
      <footer className="Blog-footer">jazwellness.com&#174;</footer>
    </>
  );
}
