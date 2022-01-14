import React from 'react';
import { Link } from 'react-router-dom';


const Nav = (props) => {
  return (
    <>
      <Link to="/" onClick={()=> props.setShowNav(false)}>Home</Link>
      <Link to="/about" onClick={()=> props.setShowNav(false)}>About</Link>
      <Link to="/contact" onClick={()=> props.setShowNav(false)}>Contact</Link>
    </>
  )
}

export default Nav;
