import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'> 
        <i className='fas fa-code'/> Connect
        </Link>
      </h1>
      <ul>
        <li><Link to='/profiles.html'>Developers</Link></li>
        <li><Link to='/register.html'>Register</Link></li>
        <li><Link to='/login.html'>Login</Link></li>
      </ul>
    </nav>
    );
};

export default Navbar; 
