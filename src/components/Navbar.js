import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav className="top-bar">
    <div className="top-bar-left">
      <ul className="dropdown menu">
        <li><Link to="/">Simple Address Book App</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
