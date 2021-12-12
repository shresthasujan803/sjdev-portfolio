import React from 'react';
import TypingWord from './TypingWord';
import FadeInSection from './FadeInSection';

const ProfileSection = ({ profileRef, contactRef }) => {
  return (
    <section className="profile-section" id="profile-section" ref={profileRef}>
      <div className="profile row row-arround">
        <div className="profile-details">
          <div className="user">
            <span className="primary-text">
              Hello, I'm{' '}
              <span className="highlighted-text">Sujan Shrestha</span>
            </span>
          </div>

          <TypingWord />

          <p>
            Knack of building applications with front and back end operations.
          </p>
          <div className="btns">
            <button
              className="btn hire-btn"
              onClick={(e) =>
                window.scrollTo({
                  top: contactRef.current.offsetTop,
                  behavior: 'smooth',
                })
              }
            >
              Hire Me
            </button>
            <a
              className="btn resume-btn"
              href="/files/SJ-CV.pdf"
              target="_blank"
            >
              Get Resume
            </a>
          </div>
        </div>
        <FadeInSection>
          <div className="image-wrapper row row-center">
            <img src="/files/sj.jpg" alt="" />
          </div>
        </FadeInSection>
      </div>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ProfileSection;
