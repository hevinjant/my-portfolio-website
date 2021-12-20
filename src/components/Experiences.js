import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { reversedMyExperiences } from "../Data";

function Experiences() {
  return (
    <>
      <span className="anchor-experiences" id="section-experiences"></span>
      <div className="experiences">
        <h1>Experiences</h1>
        <Timeline className="timeline" position="alternate">
          {reversedMyExperiences.map((experience) => {
            return (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="experiences-content">
                    <p className="experience-title">{experience.title}</p>
                    <div className="experience-info">
                      <p>{experience.location}</p>
                      <p>{experience.interval}</p>
                    </div>
                    <p className="experience-description">
                      {experience.description}
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </>
  );
}

export default Experiences;
