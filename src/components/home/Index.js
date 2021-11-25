import React from 'react';
import {Link} from 'react-router-dom';
import { AiFillBehanceSquare, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsCameraReelsFill } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import Footer from "../Footer/Footer";

import indexData from "./indexData";
import './index.scss';

const Index = () => {
  return (
    <section className="home-wrapper">
      <div className="banner" id="header-container">
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
      <div className="projects" id="projects">
        <div className="project project-1">
          <div className="project-text project-1-text">
            <p>{indexData.projects[0].position}</p>
            <h3>{indexData.projects[0].title}</h3>
            <p>{indexData.projects[0].description}</p>
            <Link to={indexData.projects[0].linkTo} target="_blank" className="view-case">View Case Study</Link>
          </div>
        </div>
        <div className="project project-2">
          <div className="project-text project-2-text">
            <p>{indexData.projects[1].position}</p>
            <h3>{indexData.projects[1].title}</h3>
            <p>{indexData.projects[1].description}</p>
            <Link to={indexData.projects[1].linkTo} target="_blank" className="view-case">View Case Study</Link>
          </div>
          <div className="project-2-image"></div>
        </div>
        <div className="project project-3">
          <div className="project-text project-3-text">
            <p><BsCameraReelsFill color="#F00"/></p>
            <p>{indexData.projects[2].position}</p>
            <h3>{indexData.projects[2].title}</h3>
            <p>{indexData.projects[2].description}</p>
            <Link to={indexData.projects[2].linkTo} target="_blank" className="view-case">View Case Study</Link>
          </div>
          <div className="project-3-image"></div>
        </div>
        <div className="project project-4">
          <div className="project-text project-4-text">
            <p>{indexData.projects[3].position}</p>
            <h3>{indexData.projects[3].title}</h3>
            <p>{indexData.projects[3].description}</p>
            <Link to={indexData.projects[3].linkTo} target="_blank" className="view-case">View Case Study</Link>
          </div>
          <div className="project-4-image"></div>
        </div>
        <div className="project project-5">
          <div className="project-text project-5-text">
            <p>{indexData.projects[4].position}</p>
            <h3>{indexData.projects[4].title}</h3>
            <p>{indexData.projects[4].description}</p>
            <Link to={indexData.projects[4].linkTo} target="_blank" className="view-case">View Case Study</Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Index;
