import React from 'react';
import { AiFillMail, AiFillLinkedin } from "react-icons/ai";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2>CONTACT</h2>
      <div className="contact-detail">
       <p  className="work-together">Let's Work Together</p>
        <div className="icons">
          <a href="mailto:jimohidris63@gmail.com" target="_blank" rel="noreferrer"><p><AiFillMail title="Mail"/>jimohidris63@gmail.com</p></a>
          <a href="http://linkedin.com/in/jimoh-idris-237931b4" target="_blank" rel="noreferrer"><p><AiFillLinkedin title="LinkedIn"/>LinkedIn</p></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
