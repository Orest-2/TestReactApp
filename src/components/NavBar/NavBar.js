import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link to='/'>
          <span className='navbar-brand mb-0 h1'>Navbar</span>
        </Link>
        <ul className='navbar-nav mt-2 mt-lg-0'>
          <li className='nav-item active'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item active'>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </li>
          <li className='nav-item active'>
            <Link to='/contact' className='nav-link'>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
