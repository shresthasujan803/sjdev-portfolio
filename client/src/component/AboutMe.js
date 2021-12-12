import React from 'react';

import FadeInSection from './FadeInSection';

const AboutMe = ({ aboutRef }) => {
  return (
    <section className="about-me" ref={aboutRef}>
      <div className="sec-header">
        <h1>About Me</h1>
        <p>Why Choose Me?</p>
        <hr style={{ width: '150px' }} />
      </div>
      <FadeInSection>
        <div className="card">
          <div className="card-img">
            <img src="/files/smart-sj.jpg" alt="" />
          </div>
          <div className="card-detail">
            <p>
              Full stack web and mobile developer who focuses on writing clean,
              elegant and efficient code with background knowledge of MERN
              stacks with redux, along with a knack of building applications
              with outmost efficiency.
            </p>
            <h3>Here are a Few Highlights: </h3>
            <ul>
              <li>Full Stack web and mobile development</li>
              <li>Interactive Front End as per the design</li>
              <li>Knowledge in Reactjs, flutter and nodejs</li>
              <li>
                Implementation of an authentication system(token and cookie)
                with JWT
              </li>
              <li>Integration of API on front-end(reactjs)</li>
              <li>
                State management tools: redux, redux-thunk and context-api
              </li>
              <li>Building REST API Managing database</li>
              <li>
                Integrated a firebase system for notification as well as social
                auth
              </li>
              <li>Creating a form with redux-form to make easy validation</li>
              <li>Implementation of PWA feature on app</li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default AboutMe;
