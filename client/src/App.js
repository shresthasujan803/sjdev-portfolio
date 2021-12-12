import React, { useRef } from 'react';
import useWindowScroll from './useWindowScroll';
import SubHeader from './component/SubHeader';
import Header from './component/Header';
import ProfileSection from './component/ProfileSection';
import AboutMe from './component/AboutMe';
import Resume from './component/Resume';
import Carousel from './component/Carousel';
import TopArrowIcon from './component/TopArrowIcon';
import Contact from './component/Contact';
import { ContactContextProvider } from './context/contact-context/ContactContext';

function App() {
  const [scrollValue, scrollTop] = useWindowScroll();
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      {scrollValue > 1000 && <TopArrowIcon />}
      <div className="progress-main-wrapper">
        <div
          className="progress-main-style"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>

      <Header
        scrollValue={scrollValue}
        aboutRef={aboutRef}
        profileRef={profileRef}
        workRef={workRef}
        contactRef={contactRef}
      />
      <main>
        <SubHeader scrollValue={scrollValue} profileRef={profileRef} />
        <ProfileSection profileRef={profileRef} contactRef={contactRef} />
        <AboutMe aboutRef={aboutRef} />
        <Resume workRef={workRef} />
        <Carousel />
        <ContactContextProvider>
          <Contact contactRef={contactRef} />
        </ContactContextProvider>
      </main>
      <footer>
        <hr />
        <p> &copy; {new Date().getFullYear()} SJ Developer</p>
      </footer>
    </>
  );
}

export default App;
