import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './ScrollDownArrow.css';

const ScrollDownArrow = ({ scrollValue, gotoProfileSection }) => {
  return (
    <div
      className="container"
      style={{ marginTop: `${scrollValue * 1.2}px` }}
      onClick={gotoProfileSection}
    >
      <div className="arrow">
        <IoIosArrowDown />
      </div>
      <div className="arrow">
        <IoIosArrowDown />
      </div>
      <div className="arrow">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default ScrollDownArrow;
