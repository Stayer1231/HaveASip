import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './guest-header.scss'

function GuestHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY === 0 && isScrolled) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const navStyle = {
    color: isScrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
    transition: isScrolled ? 'color 0.23s linear' : 'color 0.23s linear',
    
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <nav className='guest-header-container tw-flex'>
        <div className='guest-header-home'>
          <NavLink style={navStyle} to='#' className='title' onClick={handleClick}>H.A.S</NavLink>
        </div>
        <div className='guest-header-other'>
          <li><NavLink style={navStyle} to='#' className='other-section hover-effect'>About</NavLink></li>
          <li><NavLink style={navStyle} to='#' className='other-section'>Donate</NavLink></li>
          <li><NavLink style={navStyle} to='#' className='other-section'>Contact</NavLink></li>
        </div>
      </nav>
    </>
  )
}

export default GuestHeader