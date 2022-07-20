import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";

const LandingPage = () => {
  return (
    <div>
      <nav>
        <Link to="login">Login/Register</Link>
      </nav>
    </div>
  );
};

export default LandingPage;
