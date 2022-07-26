import React from "react";
import { ChatState } from "../context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { Box, Button, Input } from "@chakra-ui/react";
import "./searchpage.css";
import Featureds from "../components/Featureds";

const SearchPage = () => {
  const { user } = ChatState();

  return (
    <div className="wrapper">
      {user && <SideDrawer />}
      <div className="container">
        <Box
          display={{ base: "flex" }}
          flexDir="column"
          p={3}
          bg="white"
          w={{ base: "90%" }}
          h={"80%"}
          borderRadius="lg"
          borderWidth="1px"
        >
          <div className="search">
            <Input placeholder="search" size="md" width="80%" />
            <Button>Pesquisar</Button>
          </div>
          <div className="parameters">
            <div className="price">
              <label for="prices">Price</label>
              <select name="prices">
                <option value="volvo">Todos</option>
                <option value="saab">100kz</option>
                <option value="fiat">1000kz</option>
                <option value="audi">2300kz</option>
              </select>
            </div>
            <div className="type">
              <label for="types">Type</label>
              <select name="types">
                <option value="volvo">Todos</option>
                <option value="saab">Online</option>
                <option value="fiat">Presencial</option>
              </select>
            </div>
            <div className="date">
              <p>Date</p>
              <Input
                placeHolder="Select Date and Time"
                size="md"
                backgroundColor="#ffffff"
                type="date"
              />
            </div>
            <div className="order">
              <label for="orders">Order</label>
              <select name="orders">
                <option value="volvo">Mais recentes</option>
                <option value="saab">Mais antigos</option>
                <option value="fiat">Destaques</option>
                <option value="audi">Esta semana</option>
              </select>
            </div>
          </div>
          <Featureds />
        </Box>
      </div>
    </div>
  );
};

export default SearchPage;
