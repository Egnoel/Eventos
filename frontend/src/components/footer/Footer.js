import React from "react";
import "./footer.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        <div className="more">
          <h1>Explore More</h1>
          <p>How It Works</p>
          <p>Download The App</p>
          <p>Developer</p>
        </div>
        <div className="connect">
          <h1>Connect With Us</h1>
          <p>Download The App</p>
          <div className="social">
            <FaLinkedin className="icon" />
            <p>Linkedin</p>
          </div>
          <div className="social">
            <FaGithub className="icon" />
            <p>GitHub</p>
          </div>
          <div className="social">
            <FaInstagram className="icon" />
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <hr className="solid" />
      <div className="author">Egnoel Neto</div>
    </div>
  );
};

export default Footer;
