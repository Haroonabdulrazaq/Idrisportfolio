import React from 'react';
import { AiFillMail, AiFillLinkedin } from "react-icons/ai";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>CONTACT</h1>
      <p className="work-together">Let's Work Together</p>
      <div className="icons">
        <p><AiFillMail title="Mail"/>jimohidris63@gmail.com</p>
        <p><AiFillLinkedin title="LinkedIn"/>LinkedIn</p>
      </div>
    </div>
  )
}

export default Contact;
