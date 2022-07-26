import React from "react";
import { Box } from "@chakra-ui/layout";
import "./featureds.css";
import { Link } from "react-router-dom";

const Featureds = ({ tipo }) => {
  if (tipo === "Em Destaque") {
    return (
      <Box
        display={{ base: "flex" }}
        flexDir="column"
        p={3}
        bg="white"
        w={{ base: "90%" }}
        h={"50vh"}
        borderRadius="lg"
        borderWidth="1px"
      >
        <div className="description">
          <p>{tipo}</p>
          <Link to="/search">Ver todos</Link>
        </div>
        <div className="container">
          <div className="eventContainer">
            <div className="eventTop"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>

          <div className="eventContainer">
            <div className="eventTop2"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>

          <div className="eventContainer">
            <div className="eventTop"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>

          <div className="eventContainer">
            <div className="eventTop2"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>
        </div>
      </Box>
    );
  } else if (tipo === "Mais Recentes") {
    return (
      <Box
        display={{ base: "flex" }}
        flexDir="column"
        p={3}
        bg="white"
        w={{ base: "90%" }}
        h={"50vh"}
        borderRadius="lg"
        borderWidth="1px"
      >
        <div className="description">
          <p>{tipo}</p>
          <Link to="/search">Ver todos</Link>
        </div>
        <div className="container">
          <div className="eventContainer">
            <div className="eventTop"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>

          <div className="eventContainer">
            <div className="eventTop2"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>

          <div className="eventContainer">
            <div className="eventTop"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>

          <div className="eventContainer">
            <div className="eventTop2"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>
        </div>
      </Box>
    );
  } else {
    return (
      <Box
        display={{ base: "flex" }}
        flexDir="column"
        p={3}
        bg="white"
        width={"95%"}
      >
        <div className="container">
          <div className="eventContainer">
            <div className="eventTop"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>

          <div className="eventContainer">
            <div className="eventTop2"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>

          <div className="eventContainer">
            <div className="eventTop"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>

          <div className="eventContainer">
            <div className="eventTop2"></div>
            <div className="eventBottom">
              <p>12/06/2022</p>
              <h1>Gaming Fest</h1>
              <h2>Belas Shopping, Talatona</h2>
            </div>
          </div>
        </div>
      </Box>
    );
  }
};

export default Featureds;
