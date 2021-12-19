import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      {" "}
      <div className="socialMedia">
        <a href="https://github.com/hevinjant" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/hevinjant/" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2021 Hevin Jantasmin</p>
    </div>
  );
}

export default Footer;
