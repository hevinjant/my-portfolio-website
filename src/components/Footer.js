import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/hevinjant" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/hevinjant/" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
      <div className="email-text">
        <EmailIcon /> hjantasm@calpoly.edu
      </div>
      <p>&copy; 2021 Hevin Jantasmin</p>
      <p>ver.1.7</p>
    </div>
  );
}

export default Footer;
