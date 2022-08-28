import React from "react";
import { useState } from "react";
import { ChatState } from "../../context/ChatProvider";
import styled from "styled-components";
import "./homepage.css";
import Hero from "../../components/heroSection/Hero";

import images from "../../images";
import NavBar from "../../components/navbar/NavBar";
import EventList from "../../components/EventsList/EventList";

const HomePage = () => {
  const { user } = ChatState();

  return (
    <Container>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="hero">
        <Hero images={images} />
      </div>
      <div className="events">
        <EventList />
      </div>
      <div className="footer">Footer</div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export default HomePage;
