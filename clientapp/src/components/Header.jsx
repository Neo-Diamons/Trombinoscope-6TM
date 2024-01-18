import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Header.css';

function Header() {
  return (
    <header className="
      fixed top-0 right-0 w-screen h-[81px]
      bg-background border-b-[3px] border-[#ddd9d9]
      flex items-center
      z-10
      p-[20px]
    ">
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
