import React from 'react'
import './Navbar.css';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo border">
                <div className="logo"> </div>
                <div className="nav-head">
                    <h2>Weather</h2>
                </div>
            </div>
            <div className='navbar-content'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;