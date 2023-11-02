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
    color: isScrolled ? 'black' : 'white',
    transition: isScrolled ? 'color 0.25s linear' : 'color 0.25s linear',
  };

  return (
    <>
      <nav className='guest-header-container tw-grid tw-grid-cols-2'>
        <div className='guest-header-home'>
          <NavLink style={navStyle} to='#' className='title'>H.A.S</NavLink>
        </div>
        <div className='guest-header-other tw-justify-self-end'>
          <li><NavLink style={navStyle} to='#'>About</NavLink></li>
          <li><NavLink style={navStyle} to='#'>Contact</NavLink></li>
          <li><NavLink style={navStyle} to='#'>Donate</NavLink></li>
        </div>
      </nav>
    </>
  )
}

export default GuestHeader