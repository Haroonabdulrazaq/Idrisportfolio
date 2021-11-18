import React from 'react';
import {Link} from 'react-router-dom';
import { AiFillBehanceSquare, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import indexData from "./indexData";
import './index.scss';

const Index = () => {
  return (
    <section className="home-wrapper">
      <div className="banner">
        <div className="divider design-top"></div>
        <div className="banner-image"></div>
        <div className="banner-text">
          <h3>{indexData.lead}</h3>
          <p>{indexData.excited}</p>
          {/* <div className="divider design-middle"></div> */}
          <div className="social-icons">
            <Link to="http://twitter.com/frabjous_id" target="_blank"><AiFillBehanceSquare /></Link>
            <Link to="http://twitter.com/frabjous_id" target="_blank"><AiFillTwitterCircle/></Link>
            <Link to="http://linkedin.com/in/jimoh-idris-237931b4" target="_blank"><AiFillLinkedin /></Link>
          </div>
        </div>
        <div className="divider design-bottom"></div>
      </div>
        <div className="banner-collaborators"></div>
    </section>
  )
}

export default Index;
