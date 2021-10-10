import React from 'react';
import aboutData from './data';
// import idrisdubai from '../../assets/images/Idrisdubai.jpeg';
import "./about.scss";


const About = () => {
  return (
    <div className="about-wrapper">
      <header className="banner">
        <h1 className="banner-text">{aboutData.heading}</h1>
      </header>
      <main className="main-parent">
        <div className="three-tier">
          <article className="tier image-desc">
            <div className="desc-img"></div>
            <div className="desc-text">
             {aboutData.dress}
            </div>
          </article>
          <article className="tier text-desc">
            <h2 className="tier-headings">
              About Jimoh Idris
            </h2>
            <div>
              {aboutData.about}
            </div>
          </article>
          <article className="tier capabilities">
            <div className="cap digital-capabilities">
              <h2 className="tier-heading" > Digital Capabilities </h2>
              {aboutData.digital.map((capability, index)=> {
                return (<div className="capability" key={index}>
                  <p>{capability}</p>
                </div>)
              })}
            </div>
            <div className="cap clients">
              <h2 className="tier-heading"> Clients and collaborators </h2>
              <div className="digital-capabilities">
                {aboutData.clients.map((client, index)=> {
                  return (<div className="capability" key={index}   >
                    <p>{client}</p>
                  </div>)
                })}
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}

export default About;
