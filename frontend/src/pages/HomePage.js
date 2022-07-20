import React from "react";
import { useState } from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";
import Banner from "../components/Banner";
import styled from "styled-components";
import Featureds from "../components/Featureds";

const HomePage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Banner />
      </div>
      <Container>
        <Featureds tipo="Em Destaque" />
        <Featureds tipo="Mais Recentes" />
      </Container>
    </div>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  gap: 10px;
`;

export default HomePage;
