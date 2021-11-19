import React, { useEffect,  useState} from 'react';
import Nav from "./Nav";
import ArrowUp from "../Footer/ArrowUp";


import {AiOutlineMenu} from 'react-icons/ai';
import {AiFillCloseCircle} from 'react-icons/ai';


import './navigation.scss';

const Navigation = () => {
  const [offset, setOffset] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const handleNav =()=>{
    setShowNav(!showNav)
    if(offset < 20) {
      setShowNav(false)
    }
  }

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
    if(offset <= 20) {
      setShowNav(false)
    }
  }, [offset]);

console.log("Show ME the Navigation", showNav);

  return (
    <>
      <section id="header-container" className={offset > 20 ?`nav-wrapper show-wrapper` : `nav-wrapper no-wrapper` }>
        <div className="mobile-wrapper">
          <div className="logo"></div>
          <div className="mobile-menu" onClick={handleNav}> {showNav? <AiFillCloseCircle style={{fontSize: '3.5rem'}}  />:  <AiOutlineMenu />} </div>
          <div className="desktop-menu"> 
            <Nav setShowNav={setShowNav}/>
          </div>
        </div>
        {showNav && offset > 20 && <div className="mobile-nav-display">
          <div className="mobile-navigation">
            <Nav setShowNav={setShowNav}/>
          </div>
        </div>}
        {offset > 20?  <ArrowUp /> : null}
      </section>
    </>
  )
}

export default Navigation;
// GiHamburgerMenu
// AiOutlineMenu