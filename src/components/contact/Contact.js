import React from 'react';
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="top-contact">
        <div className="hello"></div>
        <div className="text"></div>
        <div className="contacts-me">
          <div className="contact-me"></div>
          <div className="form"></div>
        </div>
      </div>
      <div className="bottom-contact">
        <div className="hello-text">
          <div className="letters">
            <span className="letter H">H</span>
            <span className="letter E">E</span>
            <span className="letter L1">L</span>
            <span className="letter L2">L</span>
            <span className="letter O">O</span>
          </div>
        </div>
        <div className="social-icons"></div>
      </div>
    </div>
  )
}

export default Contact;
