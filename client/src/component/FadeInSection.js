import { useState, useEffect, useRef } from 'react';
function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    const { current } = domRef;
    if (!current) return;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
export default FadeInSection;
/*
we create a new instance of the IntersectionObserver class. We pass in a callback function, which will be called every time any DOM element registered to this observer changes its "status" (i.e. whenever you scroll, zoom or new stuff comes on screen). Then, we tell the observer instance to observe our DOM node with observer.observe(domRef.current).


The callback we pass into our observer is called with a list of entry objects - one for each time the observer.observe method is called. Since we're only calling it once, we can assume the list will only ever contain a single element.

Before we're done, however, we need to clean up a bit - we need to remove the intersection listener from our DOM node whenever we unmount it!



*/
