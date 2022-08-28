import { Box } from "@chakra-ui/layout";
import { useState } from "react";

import { ChatState } from "../context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return <div style={{ width: "100%" }}>Chat Page</div>;
};

export default Chatpage;
