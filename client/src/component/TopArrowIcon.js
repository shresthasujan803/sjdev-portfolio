import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
const TopArrowIcon = () => {
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="top-icon row" onClick={gotoTop}>
      <FaArrowUp />
    </div>
  );
};

export default TopArrowIcon;
