import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      {" "}
      <div className="socialMedia">
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2021 Hevin Jantasmin</p>
    </div>
  );
}

export default Footer;
