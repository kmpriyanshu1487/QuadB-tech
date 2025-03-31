import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className='navbar-container'>
            <div className='navbar-heading'>
                <h1>Todo-list</h1>
            </div>
            <div className={`navbar-anchortag ${menuActive ? 'active' : ''}`}>
                <a href="/">Home</a>
                <a href="/login" className='login-btn'>Login</a>
            </div>
            <div 
                className="mobile-menu-btn" 
                onClick={() => setMenuActive(!menuActive)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar;