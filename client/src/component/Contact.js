import { useContext, useState } from 'react';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { sendMessage } from '../context/contact-context/apiCalls';
import { ContactContext } from '../context/contact-context/ContactContext';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineSend,
} from 'react-icons/ai';

const Contact = ({ contactRef }) => {
  const { isFetching, success, error, dispatch } = useContext(ContactContext);
  const initalInputData = {
    subject: '',
    email: '',
    message: '',
  };
  const [inputData, setInputData] = useState(initalInputData);

  const submitHandler = (e) => {
    e.preventDefault();
    sendMessage(inputData, dispatch);
    setInputData(initalInputData);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => {
      switch (name) {
        case 'subject':
          return {
            ...prev,
            subject: value,
          };
        case 'email':
          return {
            ...prev,
            email: value,
          };

        case 'message':
          return {
            ...prev,
            message: value,
          };

        default:
          console.log('default');
      }
    });
  };

  return (
    <section className="contact-section" ref={contactRef}>
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <div className="social-icons">
          <a
            href="https://github.com/shresthasujan803/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/shresthasujan803"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin className="social-icon" />
          </a>
          <a
            href="https://twitter.com/sj_845"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/sj_845/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram className="social-icon" />
          </a>
        </div>
      </div>
      <div className="contact row">
        <aside>
          <h1>"Feel free to contact me if you are interested in hiring me."</h1>
          <img src="/files/mailz.jpeg" alt="" />
        </aside>
        <form className="form" onSubmit={submitHandler}>
          {isFetching && <LoadingBox />}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          {success && <MessageBox>{success}</MessageBox>}
          <div>
            <label htmlFor="sender">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Your subject"
              value={inputData.subject}
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Your email"
              required
              value={inputData.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Write something to me..."
              required
              value={inputData.message}
              onChange={changeHandler}
            />
          </div>
          <div>
            <button type="submit" className="primary" disabled={isFetching}>
              Send <AiOutlineSend className="send-icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
