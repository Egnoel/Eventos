import React, { useState } from "react";
import { FaPlus, FaArrowLeft } from "react-icons/fa";

import "./hero.css";

const Hero = ({ data }) => {
  return (
    <section className="slider">
      <img src="./image/dj.jpg" alt="Image1" className="image" />
      <div className="back">
        <div className="icon">
          <FaArrowLeft />
        </div>
        <p>Back</p>
      </div>
      <div className="left">
        <div className="title">
          <p>{data.title}</p>
        </div>
        <div className="creator">
          <p>{data.creator}</p>
        </div>
        <div className="location">
          <p>{data.location}</p>
        </div>
      </div>
      <div className="right">
        <div className="dateTime">
          <h1>Date & Time</h1>

          <div className="eventTime">
            <p className="date">{data.date}</p> <p>at {data.time}</p>
          </div>
        </div>
        <div className="calendar">
          <div className="icon">
            <FaPlus />
          </div>
          <p>Add to calendar</p>
        </div>
        <div className="participate">
          <div className="bookNow">
            <p>Book Now</p>
          </div>
          <div className="chat">
            <p>Join the chat</p>
          </div>
          <div className="policy">
            <p>No Refunds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
