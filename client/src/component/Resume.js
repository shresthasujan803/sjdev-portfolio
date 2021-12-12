import React, { useState, useRef } from 'react';

import FadeInSection from './FadeInSection';

const Resume = ({ workRef }) => {
  const [active, setActive] = useState('education');
  const resumeDetailRef = useRef(null);
  const handleResume = (e) => {
    switch (e.target.dataset.button) {
      case 'education':
        resumeDetailRef.current.scrollTop = 500 * 0;
        break;
      case 'work':
        resumeDetailRef.current.scrollTop = 500 * 1;
        break;
      case 'programming':
        resumeDetailRef.current.scrollTop = 500 * 2;
        break;
      case 'projects':
        resumeDetailRef.current.scrollTop = 500 * 3;
        break;
      case 'interests':
        resumeDetailRef.current.scrollTop = 500 * 4;
        break;

      default:
        console.log('default');
        break;
    }
    setActive(e.target.dataset.button);
  };

  return (
    <section className="resume-section" ref={workRef}>
      <div className="sec-header">
        <h1>Resume</h1>
        <p>My formal Bio Details</p>
        <hr style={{ width: '150px' }} />
      </div>
      <FadeInSection>
        <div className="resume">
          <div className="resume-nav">
            <div className="resume-nav-wrapper">
              <div
                className={`resume-nav-btn ${
                  active === 'education' ? 'active-resume' : ''
                }`}
                data-button="education"
                onClick={handleResume}
              >
                <img
                  data-button="education"
                  src="/files/education.svg"
                  alt=""
                />
                Education
              </div>
              <div
                data-button="work"
                className={`resume-nav-btn ${
                  active === 'work' ? 'active-resume' : ''
                }`}
                onClick={handleResume}
              >
                <img data-button="work" src="/files/work-history.svg" alt="" />
                Work History
              </div>
              <div
                data-button="programming"
                className={`resume-nav-btn ${
                  active === 'programming' ? 'active-resume' : ''
                }`}
                onClick={handleResume}
              >
                <img
                  data-button="programming"
                  src="/files/programming-skills.svg"
                  alt=""
                />
                Programming Skills
              </div>
              <div
                data-button="projects"
                className={`resume-nav-btn ${
                  active === 'projects' ? 'active-resume' : ''
                }`}
                onClick={handleResume}
              >
                <img data-button="projects" src="/files/projects.svg" alt="" />
                Projects
              </div>
              <div
                data-button="interests"
                className={`resume-nav-btn ${
                  active === 'interests' ? 'active-resume' : ''
                }`}
                onClick={handleResume}
              >
                <img
                  data-button="interests"
                  src="/files/interests.svg"
                  alt=""
                />
                Interests
              </div>
            </div>
          </div>
          <div className="resume-details" ref={resumeDetailRef}>
            <div className="detail">
              <div className="box-wrapper">
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Birendra Multiple Campus, Chitwan</h3>
                    <span>2017-2022</span>
                  </div>
                  <div className="subtitle">
                    BACHELOR IN COMPUTER SCIENCE AND INFORMATION TECHNOLOGY
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>
                      Shree Amar Jyoti Janata Higher Secodary School, Gorkha
                    </h3>
                    <span>2015-2017</span>
                  </div>
                  <div className="subtitle">
                    HIGHER SECONDARY EDUCATION BOARD: SCIENCE
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>

                    <h3>Shree Bhawani Higher Secondary School, Gorkha</h3>
                    <span>2005-2015</span>
                  </div>
                  <div className="subtitle">SCHOOL LEVEL CERTIFICATE</div>
                </div>
              </div>
            </div>
            <div className="detail">
              <div className="box-wrapper">
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Kalpa Technology</h3>
                    <span>
                      <a
                        href="/files/kalpa.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CERTIFICATE
                      </a>
                    </span>
                  </div>
                  <div className="subtitle">SOFTWARE ENGINEERING INTERN</div>
                  <p>
                    - Developed an Restro website for client with the dashboard
                    for managing the products, managing reviews, users, payment
                    etc. .<br />- Integrated the web app with backend services
                    to create new user onboarding application with dynamic form
                    content. <br /> - Developed a project with PWA concept for
                    cross-platform support.
                    <br /> - I stretch my mental capacity to develope UI as per
                    the given designs.
                  </p>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Express Computing</h3>
                    <span>
                      <a
                        href="/files/express.jpg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CERTIFICATE
                      </a>
                    </span>
                  </div>
                  <div className="subtitle">IOT INTERN</div>
                  <p>
                    - Developed a home automation app for authorized client with
                    the dashboard for controlling home appliances.
                    <br />- Integrated the web app with backend services to
                    create new user onboarding application with dynamic form
                    content. <br /> - Developed a project with PWA concept for
                    cross-platform support.
                  </p>
                </div>
              </div>
            </div>
            <div className="detail">
              <div className="box-wrapper grid">
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>JavaScript</h3>
                  </div>
                  <div className="bar">
                    <div className="scale js"></div>
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Reactjs</h3>
                  </div>
                  <div className="bar">
                    <div className="scale react"></div>
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Nodejs</h3>
                  </div>
                  <div className="bar">
                    <div className="scale node"></div>
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>MongoDB</h3>
                  </div>
                  <div className="bar">
                    <div className="scale mongo"></div>
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>TypeScript</h3>
                  </div>
                  <div className="bar">
                    <div className="scale ts"></div>
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>CSS</h3>
                  </div>
                  <div className="bar">
                    <div className="scale css"></div>
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>HTML</h3>
                  </div>
                  <div className="bar">
                    <div className="scale html"></div>
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Express</h3>
                  </div>
                  <div className="bar">
                    <div className="scale express"></div>
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Postgresql</h3>
                  </div>
                  <div className="bar">
                    <div className="scale post"></div>
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>SASS</h3>
                  </div>
                  <div className="bar">
                    <div className="scale sass"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail">
              <div className="box-wrapper">
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Restro for restaurant website</h3>
                    <span>
                      <a
                        href="https://serene-neumann-62c86f.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        DEMO
                      </a>
                    </span>
                  </div>
                  <div className="subtitle">
                    Technologies Used: Reactjs, Postgresql, Express Js, Node Js,
                    Redux. An ecommerce application designed to sell cooked
                    items online with payment system integration
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3> Haatbazaar for vendor mobile application</h3>
                  </div>
                  <div className="subtitle">
                    Technologies Used: flutter, dart, Bloc, provider, firebase.
                    An ecommerce mobile application designed to sell organic
                    vegetable as well as daily life kitchen ingredents online
                    with cash on delivery
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>
                      Using Raspberry pi as IOT to control home appliances
                    </h3>
                  </div>
                  <div className="subtitle">
                    Technologies Used: reactjs, nodejs, express, PWA feature,
                    mongoDB, JWt. A home automation application designed to
                    control home appliances such as fan, ac, light, etc.
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>News letter sing up website</h3>
                    <span>
                      <a
                        href="https://hidden-hamlet-03860.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        DEMO
                      </a>
                    </span>
                  </div>
                  <div className="subtitle">
                    Technologies Used: nodejs, express, bootstrap and Mailchimp
                    api to store user info.
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Covid tracker: local and global</h3>
                    <span>
                      <a
                        href="https://fervent-hugle-b135b5.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        DEMO
                      </a>
                    </span>
                  </div>
                  <div className="subtitle">
                    Technologies Used: covid api and chartjs
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Budget Website</h3>
                    <span>
                      <a
                        href="https://shresthasujan803.github.io/budget-app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        DEMO
                      </a>
                    </span>
                  </div>
                  <div className="subtitle">
                    Technologies Used: html, css and js
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>PWA-weather</h3>
                    <span>
                      <a
                        href="https://weatheralltime.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        DEMO
                      </a>
                    </span>
                  </div>
                  <div className="subtitle">
                    Technologies Used: html, css, js and weather api
                  </div>
                </div>
              </div>
            </div>
            <div className="detail">
              <div className="box-wrapper">
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Music</h3>
                  </div>
                  <div className="subtitle">
                    Listening to soothing music is something i can never
                    compromise with, skimming through Spotify's pop songs charts
                    is at times the best stress reliever that i can get my hands
                    on.
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Competitive Gaming</h3>
                  </div>
                  <div className="subtitle">
                    Listening to soothing music is something i can never
                    compromise with, skimming through Spotify's pop songs charts
                    is at times the best stress reliever that i can get my hands
                    on.
                  </div>
                </div>
                <div className="box">
                  <div className="title row row-space">
                    <div className="heading-bullet"></div>
                    <h3>Teaching</h3>
                  </div>
                  <div className="subtitle">
                    Apart from being a tech enthusiast and a code writer, i also
                    love to teach people what i know simply because i believe in
                    sharing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="wave-2">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Resume;
