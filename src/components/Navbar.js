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
          <a onClick={toggleNavbar} href="#">Home</a>
          <a onClick={toggleNavbar} href="#section-projects">Projects</a>
          <a onClick={toggleNavbar} href="#section-experiences">Experiences</a>
          <a onClick={toggleNavbar} href="#section-about">About</a>
        </div>
      </div>
      <div className="right-nav">
        <a href="#">Home</a>
        <a href="#section-projects">Projects</a>
        <a href="#section-experiences">Experiences</a>
        <a href="#section-about">About</a>
        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
