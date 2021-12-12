import React from 'react';
import ScrollDownArrow from './scrolldownarrow/ScrollDownArrow';
const SubHeader = ({ scrollValue, profileRef }) => {
  const gotoProfileSection = () => {
    window.scrollTo({
      top: profileRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <section className="sub-header">
      <img
        src="/files/stars.png"
        alt=""
        id="stars"
        style={{ left: `${scrollValue * 0.25}px` }}
      />
      <img
        src="/files/moon.png"
        alt=""
        id="moon"
        style={{ top: `${scrollValue * 1.05}px` }}
      />
      <img
        src="/files/mountains_behind.png"
        alt=""
        id="mountains_behind"
        style={{ top: `${scrollValue * 0.5}px` }}
      />
      <h2
        id="welcome-text"
        style={{
          marginRight: `${scrollValue * 3}px`,
          marginTop: `${scrollValue * 1.5}px`,
        }}
      >
        Welcome To My Portfolio
      </h2>

      <ScrollDownArrow
        scrollValue={scrollValue}
        gotoProfileSection={gotoProfileSection}
      />
      <img
        src="/files/mountains_front.png"
        alt=""
        id="mountains_front"
        style={{ top: `${scrollValue * 0}px` }}
      />
    </section>
  );
};

export default SubHeader;
