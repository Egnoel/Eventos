import React from "react";
import { ChatState } from "../context/ChatProvider";

import { Box, Button, Input } from "@chakra-ui/react";
import "./searchpage.css";

const SearchPage = () => {
  const { user } = ChatState();

  return <div className="wrapper">Search Page</div>;
};

export default SearchPage;
