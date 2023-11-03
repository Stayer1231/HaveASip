import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import GuestHeader from './components/organisms/guest-header/guest-header';

function GuestLayout() {
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

    const headerStyle = {
        background: isScrolled
            ? 'rgba(255, 255, 255, 0.4)'
            : 'rgba(240, 240, 255, 0)', // Transparent background with fading effect
        transition: 'background 0.22s linear',
        boxShadow: isScrolled
            ? '0 0.5rem 2rem rgba(16,33,60,0.25), 0 0 0.5rem rgba(0,0,0,0.03)'
            : 'none'
    };

    return (
        <div className='guest-pageContainer'>
            <div style={headerStyle} className="guest-header">
                <GuestHeader />
            </div>
            <div className="guest-body">
                <Outlet />
            </div>
        </div>
    )
}

export default GuestLayout