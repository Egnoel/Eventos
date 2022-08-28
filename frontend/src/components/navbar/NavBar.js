import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <p>Kamba Eventos</p>
      <div className="botoes">
        <button>Login</button>
        <button>
          <p>Register</p>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
