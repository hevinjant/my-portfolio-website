import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const toggleNavbar = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="left-nav" id={showLinks ? "show" : "hide"}>
        <div className="hiddenLinks">
          <a href="#section-projects">Projects</a>
          <a href="#section-experiences">Experiences</a>
          <a href="#section-about">About Me</a>
        </div>
      </div>
      <div className="right-nav">
        <a href="#section-projects">Projects</a>
        <a href="#section-experiences">Experiences</a>
        <a href="#section-about">About Me</a>
        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
