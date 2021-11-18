import React from 'react';
import {Link} from 'react-router-dom';
import { AiFillBehanceSquare, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { MdWavingHand } from "react-icons/md";

import indexData from "./indexData";
import './index.scss';

const Index = () => {
  return (
    <section className="home-wrapper">
      <div className="banner">
        <div className="banner-text">
          <div>
            <div className="avatar"></div>
            <h1 style={{display:"inline-block"}}>Hey! I'm Jimoh</h1><MdWavingHand className="wave" />
          </div>
          <h3>{indexData.lead}</h3>
          <p>{indexData.excited}</p>
          <div className="social-icons">
            <Link to="http://twitter.com/frabjous_id" target="_blank"><AiFillBehanceSquare /></Link>
            <Link to="http://twitter.com/frabjous_id" target="_blank"><AiFillTwitterCircle/></Link>
            <Link to="http://linkedin.com/in/jimoh-idris-237931b4" target="_blank"><AiFillLinkedin /></Link>
          </div>
        </div>
        <div className="banner-image">
          <div className="divider design-top"></div>
          <div className="divider design-bottom"></div>
        </div>
      </div>
      <div className="banner-collaborators">
        <h3 className="few-brands">A few brands I’ve worked with</h3>
        <div className="collaborators"></div>
      </div>
      <div className="projects"></div>
    </section>
  )
}

export default Index;
