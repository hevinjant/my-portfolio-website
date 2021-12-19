import React from "react";
import { useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const toggleNavbar = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="left-nav" id={showLinks ? "show" : "hide"}>
        <div className="hiddenLinks">
          <a href="#">Projects</a>
          <a href="#">Experiences</a>
          <a href="#">About Me</a>
        </div>
      </div>
      <div className="right-nav">
        <a href="#">Projects</a>
        <a href="#">Experiences</a>
        <a href="#">About Me</a>
        <button onClick={toggleNavbar}>Burger Icon</button>
      </div>
    </div>
  );
}

export default Navbar;
