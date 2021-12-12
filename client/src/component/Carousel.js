import React from 'react';

const Carousel = () => {
  const handleCarousel = (e) => {
    const button = e.target;
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]');
    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  };
  return (
    <section className="carousel-section" aria-label="Newest Photos">
      <div className="carousel" data-carousel>
        <button
          className="carousel-button prev"
          data-carousel-button="prev"
          onClick={handleCarousel}
        >
          &#8656;
        </button>
        <button
          className="carousel-button next"
          data-carousel-button="next"
          onClick={handleCarousel}
        >
          &#8658;
        </button>
        <ul data-slides>
          <li className="slide" data-active>
            <img src="/files/login.png" alt="" />
          </li>
          <li className="slide">
            <img src="/files/restro.png" alt="" />
          </li>
          <li className="slide">
            <img src="/files/auto-login.png" alt="" />
          </li>
          <li className="slide">
            <img src="/files/auto-home.png" alt="" />
          </li>
          <li className="slide">
            <img
              src="https://shresthasujan803.github.io/portfolio/images/5.png"
              alt=""
            />
          </li>
          <li className="slide">
            <img
              src="https://shresthasujan803.github.io/portfolio/images/1.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Carousel;
