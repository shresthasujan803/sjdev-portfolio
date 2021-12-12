import React, { useState } from 'react';
import './NavMenu.css';
const NavMenu = ({ profileRef, aboutRef, workRef, contactRef }) => {
  const [isChecked, setIsChecked] = useState(false);
  function handleActive(e) {
    switch (e.target.dataset.button) {
      case 'home':
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
      case 'profile':
        window.scrollTo({
          top: profileRef.current.offsetTop,
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
    setIsChecked(!isChecked);
  }
  return (
    <div className="nav-menu">
      <input
        type="checkbox"
        checked={isChecked}
        className="menu-btn"
        onChange={() => setIsChecked(!isChecked)}
      />
      <div className="menu-btns">
        <button style={{ '--i': 1 }} data-button="home" onClick={handleActive}>
          Home
        </button>
        <button
          style={{ '--i': 2 }}
          data-button="profile"
          onClick={handleActive}
        >
          Profile
        </button>
        <button style={{ '--i': 3 }} data-button="about" onClick={handleActive}>
          About
        </button>
        <button style={{ '--i': 4 }} data-button="work" onClick={handleActive}>
          Work
        </button>
        <button
          style={{ '--i': 4 }}
          data-button="contact"
          onClick={handleActive}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
