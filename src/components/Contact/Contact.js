import React from "react";
// import card from "../images/card.jpg";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { IconContext } from "react-icons";
import { MdSend } from "react-icons/md";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-wrapper wrapper">
        <div className="contact-info">
          {/* <img src={card} alt="" className="contact-img" /> */}
          <div className="contact-social-container">
            <p className="contact-header">Contact Me!</p>
            <div className="contact-email">jasminchavez@gmail.com</div>
            <IconContext.Provider value={{ className: "contact-icons" }}>
              <div className="contact-icon-container">
                <GrInstagram />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "contact-icons" }}>
              <div className="contact-icon-container">
                <GrFacebook />
              </div>
            </IconContext.Provider>
          </div>
        </div>

        <form className="contact-form">
          <div className="contact-name-container">
            <div className="contact-first-name">
              <label htmlFor="first_name" className="contact-label">
                First Name
              </label>
              <input id="first_name" type="text" className="contact-input" />
            </div>
            <div className="contact-last_name">
              <label htmlFor="last_name" className="contact-label">
                last Name
              </label>
              <input id="last_name" type="text" className="contact-input" />
            </div>
            <div className="contact-last_name"></div>
          </div>

          <label htmlFor="email" className="contact-label">
            Email
          </label>
          <input id="email" type="text" className="contact-input" />

          <label htmlFor="message" className="contact-label">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            className="contact-input contact-textarea"
          />

          <button className="contact-button">
            <MdSend />
            <span className="contact-button-text">Submit</span>
          </button>
        </form>
      </div>
    </section>
  );
}
