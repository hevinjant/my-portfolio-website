import React from "react";
import { aboutMe } from "../Data";
import Resume from "../assets/HevinJantasmin_Resume_May2024.pdf";

function About() {
  return (
    <>
      <span className="anchor-about" id="section-about"></span>
      <div className="about" id="section-about">
        <h1>About Me</h1>
        <p>{aboutMe}</p>
        <div className="download-link">
          <a href={Resume} download>
            Download my resume here
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
