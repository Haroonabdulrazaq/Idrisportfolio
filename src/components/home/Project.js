import React from 'react';
// import indexData from "./indexData";
import { Link } from 'react-router-dom';

const me = "./Rectangle109.png";
console.log(me);
const Project = ({project}) => {
  console.log(project.url);
  return (
    <div className="project-1">
      <div className="project-1-text">
        <p>{project.position}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link to={project.linkTo} target="_blank" className="view-case">View Case Study</Link>
      </div>
    </div>
  )
}

export default Project
// style={{background: `url(${props.project.url})`}}

// ${project.url}