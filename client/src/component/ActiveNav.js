import React from 'react';
import { GiCrossedBones } from 'react-icons/gi';
const ActiveNav = ({
  activeNav,
  profileRef,
  aboutRef,
  workRef,
  contactRef,
  setActiveNav,
}) => {
  function handleActive(e) {
    setActiveNav(false);
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
  }
  return (
    <div className={`active-nav ${activeNav ? 'activated-nav' : ''}`}>
      <ul>
        <li onClick={handleActive} data-button="home">
          Home
        </li>
        <li onClick={handleActive} data-button="profile">
          Profile
        </li>
        <li onClick={handleActive} data-button="about">
          About
        </li>
        <li onClick={handleActive} data-button="work">
          Work
        </li>
        <li onClick={handleActive} data-button="contact">
          Contact
        </li>
      </ul>
      <div className="cross-icon" onClick={() => setActiveNav(false)}>
        <GiCrossedBones />
      </div>
    </div>
  );
};

export default ActiveNav;
