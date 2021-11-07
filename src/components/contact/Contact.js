import React from 'react'; 
import { AiFillBehanceSquare, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
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
        <div className="social-icons">
          <p>LET'S WORK TOGETHER</p>
          <div className="social-connect-icons">
            <Link to="http://twitter.com/frabjous_id" target="_blank"><AiFillBehanceSquare /></Link>
            <Link to="http://twitter.com/frabjous_id" target="_blank"><AiFillTwitterCircle/></Link>
            <Link to="http://linkedin.com/in/jimoh-idris-237931b4" target="_blank"><AiFillLinkedin /></Link>
          </div>
          <div className="contact-me">
            <BsFillEmojiSmileFill className="smile"/>
            <p>Contact me</p>
            <MdWavingHand className="wave"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;


// VscSmiley;
