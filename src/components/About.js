import React from "react";
import { aboutMe } from "../Data";

function About() {
  return (
    <>
      <span className="anchor-about" id="section-about"></span>
      <div className="about" id="section-about">
        <h1>About Me</h1>
        <p>{aboutMe}</p>
      </div>
    </>
  );
}

export default About;
