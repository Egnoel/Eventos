import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaSearch,
} from "react-icons/fa";

import "./hero.css";

const Hero = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {images.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.src} alt={slide.alt} className="image" />
            )}
          </div>
        );
      })}
      <div className="search">
        <div className="center">
          <div className="category">
            <p className="text">Looking For</p>
            <input type="text" placeholder="UI/X Designer" className="in" />
          </div>
        </div>
        <div className="center">
          <div className="place">
            <p className="text">In</p>
            <input type="text" placeholder="Luanda" className="in" />
          </div>
        </div>
        <div className="date">
          <div className="search-date">
            <p className="text">When</p>
            <input type="text" placeholder="Any Date" className="in" />
          </div>
          <div className="icon">
            <FaSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
