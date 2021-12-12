import React, { useState } from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';
import NavMenu from './NavMenu';

const Header = ({ scrollValue, profileRef, aboutRef, workRef, contactRef }) => {
  const [active, setActive] = useState('home');
  function handleNavButton(e) {
    switch (e.target.dataset.button) {
      case 'home':
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
      case 'about':
        window.scrollTo({
          top: aboutRef.current.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 'work':
        window.scrollTo({
          top: workRef.current.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 'contact':
        window.scrollTo({
          top: contactRef.current.offsetTop,
          behavior: 'smooth',
        });
        break;

      default:
        console.log('default');
        break;
    }
    setActive(e.target.dataset.button);
  }
  return (
    <header className="header" style={{ top: `${scrollValue * 0.5}px` }}>
      <div className="header-logo">SJDev</div>
      <ul className="nav">
        <li
          onClick={handleNavButton}
          className={active === 'home' ? 'active' : ''}
          data-button="home"
        >
          Home
        </li>
        <li
          onClick={handleNavButton}
          className={active === 'about' ? 'active' : ''}
          data-button="about"
        >
          About
        </li>
        <li
          onClick={handleNavButton}
          className={active === 'work' ? 'active' : ''}
          data-button="work"
        >
          Work
        </li>
        <li
          onClick={handleNavButton}
          className={active === 'contact' ? 'active' : ''}
          data-button="contact"
        >
          Contact
        </li>
      </ul>

      <NavMenu
        profileRef={profileRef}
        aboutRef={aboutRef}
        workRef={workRef}
        contactRef={contactRef}
      />
    </header>
  );
};

export default Header;
