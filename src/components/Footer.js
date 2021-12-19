import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="footer">
      {" "}
      <div className="socialMedia">
        <InstagramIcon />
        <GitHubIcon />
        <FacebookIcon />
      </div>
      <p>&copy; 2021 Hevin Jantasmin</p>
    </div>
  );
}

export default Footer;
