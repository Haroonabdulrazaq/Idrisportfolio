import React, { useEffect,  useState} from 'react';

// import {AiOutlineLogout} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './navigation.scss';

const Navigation = () => {
 
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  console.log("Gest",offset); 
  return (
    <section className={offset > 100 ?`show-wrapper` : `no-wrapper` }>
      <div className="mobile-wrapper">
        <div className="logo"></div>
        <div className="mobile-menu"> <AiOutlineMenu /> </div>
        <div className="desktop-menu"> 
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </section>
  )
}

export default Navigation;
// GiHamburgerMenu
// AiOutlineMenu