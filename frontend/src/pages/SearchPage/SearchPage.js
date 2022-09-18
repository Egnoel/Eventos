import React from "react";
import { ChatState } from "../../context/ChatProvider";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import { GoChevronDown, GoCommentDiscussion, GoHeart } from "react-icons/go";
import "./searchpage.css";

const SearchPage = () => {
  const { user } = ChatState();

  return (
    <div className="searchpage-container">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
