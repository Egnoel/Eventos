import React from "react";
import styled from "styled-components";
import "../App.css";

const Banner = () => {
  return (
    <Container>
      <Left className="left"></Left>
      <Right>Explore e divirta-se com os melhores eventos</Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 200px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border: 1px solid #7451f8;
  margin-bottom: 10px;
  margin-top: 90px;
`;

const Left = styled.div`
  display: flex;
  flex: 3;
  color: white;

  border-radius: 25px;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: black;
`;

export default Banner;
