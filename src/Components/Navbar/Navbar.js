import React from "react";
import "./_navbar.scss";

import jsLogo from "../../images/logoJS.gif";

const Navbar = () => {
  const ScrollDownTo = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <img className='logo-js' src={jsLogo} alt='logo' />
      <section>
        <a onClick={ScrollDownTo()} className='navbar-link' href='#About_me'>
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
      </section>
    </nav>
  );
};

export default Navbar;
