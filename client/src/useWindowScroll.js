import { useEffect, useState } from 'react';

const useWindowScroll = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollTop, setScrolllTop] = useState(0);
  var sw = true;
  function onScroll() {
    if (sw) {
      sw = false;
      setTimeout(function () {
        const winScroll = document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrolllTop(scrolled);
        setScrollValue(this.scrollY);
        sw = true;
      }, 50);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });
  return [scrollValue, scrollTop];
};

export default useWindowScroll;
