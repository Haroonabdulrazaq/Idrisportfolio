import React from 'react';

import indexData from "./indexData";
import './index.scss';

const Index = () => {
  return (
    <section className="home-wrapper">
      <div className="banner">
        <div className="banner-image"></div>
        <div className="banner-text"><h3>{indexData.lead}</h3></div>
        <div className="banner-collaborators"></div>
      </div>
    </section>
  )
}

export default Index;
