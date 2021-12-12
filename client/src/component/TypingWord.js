import { useEffect, useRef, useState } from 'react';
import useTypewriter from 'react-typewriter-hook';

const MagicOcean = [
  'Full Stack Developer 💻',
  'ReactJS Dev 😎',
  'MERN Stack Dev 🌐',
  'Flutter Dev 🤘',
];
let index = 0;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [magicSentance, setMagicName] = useState('Enthusiastic Dev 🔥');
  const intervalRef = useRef({});
  const sentance = useTypewriter(magicSentance);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicSentance]);
  return (
    <h1 className="word cursor">
      <span>x</span>
      {sentance}
    </h1>
  );
};
