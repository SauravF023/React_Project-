import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to={user?.role === 'admin' ? '/admin' : '/user'}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
