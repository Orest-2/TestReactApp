import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link to='/'>
          <span className='navbar-brand mb-0 h1'>Navbar</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarC'
          aria-controls='navbarC'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarC'
        >
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
      </div>
    </nav>
  );
};

export default NavBar;
