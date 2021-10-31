import React from 'react';
import "./Testimony.scss";

const Testimony = (props) => {
  const {testimonies} = props;
  console.log("Props Value", props);
  return (
    <section className="testimony-wrapper">
      <div>
        {testimonies.map((testimony)=> (
          <div key={testimony.name} className="testimony">
            <div className="testimony-text">
              {testimony.text}
            </div>
            <div className="testimony-name">
              <p>{testimony.name}</p>
              <p>{testimony.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimony;
