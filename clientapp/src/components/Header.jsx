import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {
  return (
    <header>
      <Link to="/">
        <img
          loading="eager"
          src="https://www.6tm.com/app/uploads/2023/09/6tm_title-001.svg"
          alt="6TM logo with title"
        />
      </Link>
    </header>
  );
}

export default Header;
