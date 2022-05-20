import React from "react";
import "./_navbar.scss";

import jsLogo from "../../images/logoJS.gif";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    if (isMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  return (
    <>
      <nav className={isMenuActive ? "active" : ""}>
        <img
          onClick={() => {
            window.location.reload();
          }}
          className='logo-js'
          src={jsLogo}
          alt='logo'
        />
        <section>
          <a className='navbar-link' href='#About_me'>
            <h2>About_Me</h2>
          </a>
          <a className='navbar-link' href='#Skills'>
            <h2>Skills</h2>
          </a>
          <a className='navbar-link' href='#Projects'>
            <h2>Projects</h2>
          </a>
          <a className='navbar-link' href='#Contact'>
            <h2>Contact</h2>
          </a>
          <button
            className={isMenuActive ? "burger active" : "burger"}
            onClick={toggleMenu}
          >
            <div className='burger-top-line'></div>
            <div className='burger-mid-line'></div>
            <div className='burger-bottom-line'></div>
          </button>
        </section>
      </nav>

      <div
        className={isMenuActive ? "drop-down-menu active" : "drop-down-menu"}
      >
        <ul>
          <a className='menu-link' onClick={toggleMenu} href='#About_me'>
            <li>
              <h2>About_Me</h2>
            </li>
          </a>
          <a className='menu-link' onClick={toggleMenu} href='#Skills'>
            <li>
              <h2>Skills</h2>
            </li>
          </a>
          <a className='menu-link' onClick={toggleMenu} href='#Projects'>
            <li>
              <h2>Projects</h2>
            </li>
          </a>
          <a className='menu-link' onClick={toggleMenu} href='#Contact'>
            <li>
              <h2>Contact</h2>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
